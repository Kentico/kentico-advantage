import React from "react"
import * as style from '../styles'
import styled from "styled-components"
import { graphql, StaticQuery, Link } from "gatsby"


const BreadcrumbsContainer = styled.nav`
    position: absolute;
	z-index: 1;
	display: flex;
	align-items: rows;
	text-shadow: 0 1px 5px #424545;
	color: ${style.palette.breadcrumbs_foreground};
	padding-top: 10px;
    
    ${style.media.md`
        top: 60px;
    `}
	
	a
	{
		margin-right: 6px;
		color: ${style.palette.breadcrumbs_foreground};
		text-decoration: underline;
	}
	
	a:last-of-type { text-decoration: none; }
	
	a:hover
	{
		color: ${style.palette.breadcrumbs_foreground};
		text-decoration: none;
	}
	
	a+a::before
	{
		display: inline-block;
		margin-right: 6px;
		content: "/";
	}  
`;

class Breadcrumbs extends React.Component
{
    render(){
        return (
            <StaticQuery 
                query={graphql`
                {
                    allKenticoCloudItemNavigationItem(filter: {elements: {url: {value: {eq: "~"}}}}) {
                      edges {
                        node {
                          elements {
                            child_items {
                              system { id }
                              elements {
                                title { value }
                                content_item {
                                  system {
                                    id
                                  }
                                  elements {
                                    url {
                                      value
                                    }
                                    title {
                                      value
                                    }
                                  }
                                }
                                child_items {
                                  system { id }
                                  elements {
                                    content_item {
                                      system {
                                        id
                                        type
                                      }
                                      elements {
                                        url {
                                          value
                                        }
                                        title {
                                          value
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    allKenticoCloudItemPhase {
                        edges {
                          node {
                            system {
                              id
                            }
                            elements {
                              subphases {
                                system {
                                  id
                                }
                                elements {
                                    title {value}
                                    url {value}
                                }
                              }
                            }
                          }
                        }
                      }
                  }
                `}
                render={data => {
                    const contentItemId = this.props.pageId;
                    const rootNode = data.allKenticoCloudItemNavigationItem.edges[0].node;
                    var breadcrumbItems = [
                        <Link to="/" title="Introduction" key="0">Introduction</Link>
                    ];

                    var currentItems = rootNode.elements.child_items;
                    var foundFirstLevelItem = this.findItem(currentItems, contentItemId);

                    if (foundFirstLevelItem)
                    {
                        breadcrumbItems.push(this.getLink(foundFirstLevelItem));
                    }
                    else
                    {
                        // find in sublevel
                        for (var i = 0; i < currentItems.length; i++)
                        {
                            var secondLevelCurrentItems = currentItems[i].elements.child_items;
                            var foundSecondLevelItem = this.findItem(secondLevelCurrentItems, contentItemId);
                            if (foundSecondLevelItem)
                            {
                                breadcrumbItems.push(this.getLink(currentItems[i]));
                                breadcrumbItems.push(this.getLink(foundSecondLevelItem));

                                break;
                            }
                            else
                            {
                                // check third level if phase
                                var secondLevelCurrentItemsPhase = secondLevelCurrentItems.filter(item => Array.isArray(item.elements.content_item) && item.elements.content_item.length === 1 && item.elements.content_item[0].system.type === 'phase');

                                for (var j = 0; j < secondLevelCurrentItemsPhase.length; j++)
                                {
                                    // get phase reference
                                    var phase = data.allKenticoCloudItemPhase.edges.filter(edge => edge.node.system.id === secondLevelCurrentItems[j].elements.content_item[0].system.id);

                                    // search subphases
                                    var foundSubPhase = phase[0].node.elements.subphases.filter(item => item.system.id === contentItemId);

                                    if (foundSubPhase.length === 1)
                                    {
                                        breadcrumbItems.push(this.getLink(currentItems[i]));
                                        breadcrumbItems.push(this.getLink(secondLevelCurrentItems[j]));
                                        breadcrumbItems.push(<Link key={foundSubPhase[0].system.id} to={foundSubPhase[0].elements.url.value} title={foundSubPhase[0].elements.title.value}>{foundSubPhase[0].elements.title.value}</Link>);

                                        break;
                                    }
                                }
                            }
                        }
                    }

                    return (
                        <BreadcrumbsContainer>
                            {breadcrumbItems.map(item => item)}
                        </BreadcrumbsContainer>
                        );
                }}
            />
        )
    }

    findItem(items, contentItemId)
    {
        var currentItem = items.filter(navItem => Array.isArray(navItem.elements.content_item) && navItem.elements.content_item.length === 1 && navItem.elements.content_item[0].system.id === contentItemId);
        if (currentItem.length === 1)
            return currentItem[0];

        return null;
    }
    getLink(item)
    {
        if (item.elements.content_item.length === 1)
        {
            return <Link key={item.system.id} to={item.elements.content_item[0].elements.url.value} title={item.elements.content_item[0].elements.title.value}>{item.elements.content_item[0].elements.title.value}</Link>
        }
        else
        {
            return <Link key={item.system.id} to="/" title={item.elements.title.value}>{item.elements.title.value}</Link>
        }
    }
}

export default Breadcrumbs