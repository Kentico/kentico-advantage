const _ = require(`lodash`);
const crypto = require(`crypto`);
const changeCase = require(`change-case`);
const KC = require(`kentico-cloud-delivery`);

/**
 * Creates a Gatsby object out of a Kentico Cloud content type object.
 * @param {function} createNodeId - Gatsby function to create a node ID.
 * @param {object} contentType - Kentico Cloud content type object.
 * @return {object} Gatsby content type node.
 */
const createContentTypeNode = (createNodeId, contentType) => {
  if (typeof createNodeId !== `function`) {
    throw new Error(`createNodeId is not a function.`);
  } else if (!contentType || !_.has(contentType, `system.codename`)) {
    throw new Error(`contentType is not a valid content type object.`);
  } else {
    const codenameParamCase = changeCase.paramCase(contentType.system.codename);
    const nodeId = createNodeId(`kentico-cloud-type-${codenameParamCase}`);

    const additionalData = {
      contentItems___NODE: [],
    };

    return createKcArtifactNode(
        nodeId, contentType, `type`, contentType.system.codename, additionalData
    );
  }
};

/**
 * Creates a Gatsby object out of a Kentico Cloud content item object.
 * @param {function} createNodeId - Gatsby function to create a node ID.
 * @param {object} contentItem - Kentico Cloud content item object.
 * @param {array} contentTypeNodes - All Gatsby content type nodes.
 * @return {object} Gatsby content item node.
 */
const createContentItemNode =
  (createNodeId, contentItem, contentTypeNodes) => {
    if (typeof createNodeId !== `function`) {
      throw new Error(`createNodeId is not a function.`);
    } else if (!contentItem || !_.has(contentItem, `system.codename`)) {
      throw new Error(`contentItem is not a valid content item object.`);
    } else if (!contentTypeNodes
      || !_.isArray(contentTypeNodes)
      || (!_.isEmpty(contentTypeNodes)
      && !_.has(contentTypeNodes, `[0].system.codename`))) {
      throw new Error(`contentTypeNodes is not an array of valid objects.`);
    } else {
      const codenameParamCase =
        changeCase.paramCase(contentItem.system.codename);

      const languageParamCase =
        changeCase.paramCase(contentItem.system.language);

      const nodeId = createNodeId(
          `kentico-cloud-item-${codenameParamCase}-${languageParamCase}`
      );

      const parentContentTypeNode = contentTypeNodes.find(
          (contentType) => contentType.system.codename
              === contentItem.system.type);

      const itemWithElements = parseContentItemContents(contentItem);

      const additionalData = {
        otherLanguages___NODE: [],
        contentType___NODE: parentContentTypeNode.id,
      };

      return createKcArtifactNode(
          nodeId,
          itemWithElements,
          `item`,
          contentItem.system.type,
          additionalData
      );
    }
  };

  /**
 * Creates a Gatsby object out of a Kentico Cloud content item object.
 * @param {function} createNodeId - Gatsby function to create a node ID.
 * @param {object} contentItem - Kentico Cloud content item object.
 * @param {array} contentTypeNodes - All Gatsby content type nodes.
 * @return {object} Gatsby content item node.
 */
const createContentItemNodeObj =
(createNodeId, contentItemObj, contentTypeNodes) => {
  if (typeof createNodeId !== `function`) {
    throw new Error(`createNodeId is not a function.`);
  } else if (!contentItemObj || !(contentItemObj instanceof KC.ContentItem)) {
    throw new Error(`contentItem is not a valid KC content item.`);
  } else {
    const codenameParamCase =
      changeCase.paramCase(contentItemObj.system.codename);

    const languageParamCase =
      changeCase.paramCase(contentItemObj.system.language);

    const nodeId = createNodeId(
        `kentico-cloud-obj-item-${codenameParamCase}-${languageParamCase}`
    );

    const parentContentTypeNode = contentTypeNodes.find(
        (contentType) => contentType.system.codename
            === contentItemObj.system.type);

    const itemWithElements = parseContentItemContents(contentItemObj);

    const additionalData = {
      otherLanguages___NODE: [],
      contentType___NODE: parentContentTypeNode.id,
    };

    return createKcArtifactNode(
        nodeId,
        itemWithElements,
        `item`,
        contentItemObj.system.type,
        additionalData
    );
  }
};

/**
 * Adds links between a content type node and item nodes of that content type.
 * @param {array} contentItemNodes - Gatsby content item nodes.
 * @param {array} contentTypeNodes - Gatsby content type nodes.
 */
const decorateTypeNodesWithItemLinks =
  (contentItemNodes, contentTypeNodes) => {
    if (!contentItemNodes
      || !_.isArray(contentItemNodes)
      || (!_.isEmpty(contentItemNodes)
      && !_.has(contentItemNodes, `[0].system.type`))) {
      throw new Error(`contentItemNodes is not an array of valid objects.`);
    } else if (!contentTypeNodes
      || !_.isArray(contentTypeNodes)
      || (!_.isEmpty(contentTypeNodes)
      && !_.has(contentTypeNodes, `[0].system.codename`))) {
      throw new Error(`contentTypeNodes is not an array of valid objects.`);
    } else {
      contentTypeNodes.forEach((contentTypeNode) => {
        const itemNodesPerType = contentItemNodes.filter((contentItemNode) =>
          contentItemNode.system.type === contentTypeNode.system.codename
        );

        if (!_.isEmpty(itemNodesPerType)) {
          let flatList =
            itemNodesPerType.map((itemNodePerType) => itemNodePerType.id);
          contentTypeNode.contentItems___NODE.push(...flatList);
        }
      });
    }
  };

/**
 * Adds links between a Gatsby content item node and its
 *    language variant nodes (translations).
 * @param {object} itemNode - Gatsby content item node.
 * @param {array} allNodesOfAnotherLanguage - The whole set of Gatsby item nodes
 *    of another language.
 */
const decorateItemNodeWithLanguageVariantLink =
  (itemNode, allNodesOfAnotherLanguage) => {
    if (!itemNode || !_.has(itemNode, `system.codename`)) {
      throw new Error(`itemNode is not a valid object.`);
    } else if (!allNodesOfAnotherLanguage
      || !_.isArray(allNodesOfAnotherLanguage)
      || (!_.isEmpty(allNodesOfAnotherLanguage)
      && !_.has(allNodesOfAnotherLanguage, `[0].system.codename`))) {
      throw new Error(`allNodesOfAnotherLanguage is not an array
of valid objects.`);
    } else {
      const languageVariantNode = allNodesOfAnotherLanguage.find(
          (nodeOfSpecificLanguage) =>
            itemNode.system.codename === nodeOfSpecificLanguage.system.codename
      );

      const otherLanguageLink =
        itemNode.otherLanguages___NODE.find(
            (otherLanguageId) => otherLanguageId === languageVariantNode.id
        );

      if (!otherLanguageLink) {
        itemNode.otherLanguages___NODE.push(languageVariantNode.id);
      }
    }
  };

/**
 * Adds links to content items (stored in Linked items elements)
 *    via a sibling '_nodes' property.
 * @param {object} itemNode - Gatsby content item node.
 * @param {array} allNodesOfSameLanguage - The whole set of nodes
 *    of that same language.
 */
const decorateItemNodeWithLinkedItemsLinks =
  (itemNode, allNodesOfSameLanguage) => {
    if (!itemNode || !_.has(itemNode, `system.codename`)) {
      console.log('error here');
      console.log(itemNode);
      throw new Error(`itemNode is not a valid object.`);
    } else if (!allNodesOfSameLanguage
      || !_.isArray(allNodesOfSameLanguage)
      || (!_.isEmpty(allNodesOfSameLanguage)
      && !_.has(allNodesOfSameLanguage, `[0].system.codename`))) {
      throw new Error(`allNodesOfSameLanguage is not an array
of valid objects.`);
    } else {
      Object
          .keys(itemNode.elements)
          .forEach((propertyName) => {
            const property = itemNode.elements[propertyName];

            if (_.isArray(property)) {
              const linkPropertyName = `${propertyName}_nodes___NODE`;
              itemNode.elements[linkPropertyName] = [];

              if (_.has(property, `[0].system.codename`)) {
                const linkedNodes = allNodesOfSameLanguage
                    .filter((node) => {
                      const match = property.find((propertyValue) => {
                        return propertyValue !== null
                          && node !== null
                          && propertyValue.system.codename ===
                          node.system.codename
                          && propertyValue.system.type === node.system.type;
                      });

                      return match !== undefined && match !== null;
                    });

                addLinkedItemsLinks(itemNode, linkedNodes, linkPropertyName);
              }
            }
          });
    }
  };

/**
 * Adds links to content items (stored in Rich text elements)
 *    via a sibling '_nodes' property.
 * @param {object} itemNode - Gatsby content item node.
 * @param {array} allNodesOfSameLanguage - The whole set of nodes
 *    of that same language.
 */
const decorateItemNodeWithRichTextLinkedItemsLinks =
  (itemNode, allNodesOfSameLanguage) => {
    if (!itemNode || !_.has(itemNode, `system.codename`)) {
      throw new Error(`itemNode is not a valid object.`);
    } else if (!allNodesOfSameLanguage
      || !_.isArray(allNodesOfSameLanguage)
      || (!_.isEmpty(allNodesOfSameLanguage)
      && !_.has(allNodesOfSameLanguage, `[0].system.codename`))) {
      throw new Error(`allNodesOfSameLanguage is not an array
of valid objects.`);
    } else {
      Object
          .keys(itemNode.elements)
          .forEach((propertyName) => {
            const property = itemNode.elements[propertyName];

            if (_.get(property, `type`) === `rich_text`) {
              const linkPropertyName = `${propertyName}_nodes___NODE`;

              const linkedNodes = allNodesOfSameLanguage
                  .filter((node) => _.has(property, `linkedItemCodenames`)
                    && _.isArray(property.linkedItemCodenames)
                    && property.linkedItemCodenames.includes(
                        node.system.codename)
                  );

              itemNode.elements[linkPropertyName] = [];
              addLinkedItemsLinks(itemNode, linkedNodes, linkPropertyName);
            }
          });
    }
  };

const createKcArtifactNode =
  (nodeId, kcArtifact, artifactKind, typeName = ``,
      additionalNodeData = null) => {
    let processedProperties = [];
    // Handle eventual circular references when serializing.
    const nodeContent = JSON.stringify(kcArtifact, (key, value) => {
      if (typeof value === `object` && value !== null) {
        if (processedProperties.indexOf(value) !== -1) {
          try {
            return JSON.parse(JSON.stringify(value));
          } catch (error) {
            return null;
          }
        }

        processedProperties.push(value);
      }
      return value;
    });

    processedProperties = null;

    const nodeContentDigest = crypto
        .createHash(`md5`)
        .update(nodeContent)
        .digest(`hex`);

    const codenamePascalCase = changeCase.pascalCase(typeName);
    const artifactKindPascalCase = changeCase.pascalCase(artifactKind);

    return {
      ...kcArtifact,
      ...additionalNodeData,
      id: nodeId,
      parent: null,
      children: [],
      usedByContentItems___NODE: [],
      internal: {
        type: `KenticoCloud${artifactKindPascalCase}${codenamePascalCase}`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    };
  };

const addLinkedItemsLinks = (itemNode, linkedNodes, linkPropertyName) => {
  linkedNodes
      .forEach((linkedNode) => {
        if (!linkedNode.usedByContentItems___NODE.includes(itemNode.id)) {
          linkedNode.usedByContentItems___NODE.push(itemNode.id);
        }
      });

  const idsOfLinkedNodes = linkedNodes.map((node) => node.id);

  if (!itemNode.elements[linkPropertyName]) {
    itemNode.elements[linkPropertyName] = idsOfLinkedNodes;
  } else {
    idsOfLinkedNodes.forEach((id) => {
      if (!itemNode.elements[linkPropertyName].includes(id)) {
        itemNode.elements[linkPropertyName].push(id);
      }
    });
  }
};

const prefixGuidNamedProperties = (propertyValue) => {
  const imagesIdentifier = `images`;
  const imagePrefixLiteral = `image-`;
  const linksIdentifier = `links`;
  const linkPrefixLiteral = `link-`;
  let transformedPropertyValue = {};

  Object
      .keys(propertyValue)
      .filter((key) => key !== imagesIdentifier && key !== linksIdentifier)
      .forEach((key) => {
        transformedPropertyValue[key] = propertyValue[key];
      });

  transformedPropertyValue[imagesIdentifier] =
    prefixProperty(propertyValue, imagesIdentifier, imagePrefixLiteral);
  transformedPropertyValue[linksIdentifier] =
    prefixProperty(propertyValue, linksIdentifier, linkPrefixLiteral);

  return transformedPropertyValue;
};

const prefixProperty = (propertyValue, identifier, prefixLiteral) => {
  let transformedProperty = {};

  Object
      .keys(propertyValue[identifier])
      .forEach((key) => {
        const prefixedKey = prefixLiteral + key;
        transformedProperty[prefixedKey] =
          propertyValue[identifier][key];
      });

  return transformedProperty;
};

const parseContentItemContents = (contentItem, processedContents = []) => {
  if (processedContents.indexOf(contentItem.system) !== -1) {
    return null;
  } else {
    processedContents.push(contentItem.system);
    const elements = {};

    Object
        .keys(contentItem)
        .filter((key) => key !== `system` && key !== `elements` && key !== `data`)
        .forEach((key) => {
          let propertyValue;

          if (_.has(contentItem[key], `type`)
            && contentItem[key].type === `rich_text`) {
            if ((_.has(contentItem.elements[key], `images`)
            && !_.isEmpty(contentItem.elements[key].images))
            || (_.has(contentItem.elements[key], `links`)
            && !_.isEmpty(contentItem.elements[key].links))) {
              propertyValue =
                prefixGuidNamedProperties(contentItem.elements[key]);
            } else {
              propertyValue = contentItem[key];
            }
          } else if (contentItem.elements[key].type === `modular_content`
            && !_.isEmpty(contentItem[key])) {
            let linkedItems = [];

            contentItem[key].forEach((linkedItem) => {
              linkedItems.push(
                  parseContentItemContents(linkedItem, processedContents));
            });

            propertyValue = linkedItems;
          } else {
            propertyValue = contentItem[key];
          }

          elements[key] = propertyValue;
        });

    const itemWithElements = {
      system: contentItem.system,
      elements: elements,
    };

    return itemWithElements;
  }
};


exports.createContentTypeNode = createContentTypeNode;
exports.createContentItemNode = createContentItemNode;
exports.createContentItemNodeObj = createContentItemNodeObj;
exports.decorateTypeNodesWithItemLinks = decorateTypeNodesWithItemLinks;

exports.decorateItemNodeWithLanguageVariantLink
    = decorateItemNodeWithLanguageVariantLink;

exports.decorateItemNodeWithLinkedItemsLinks
    = decorateItemNodeWithLinkedItemsLinks;

exports.decorateItemNodeWithRichTextLinkedItemsLinks
    = decorateItemNodeWithRichTextLinkedItemsLinks;
