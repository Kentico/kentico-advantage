(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return f});n(147);var a=n(0),s=n.n(a),l=n(160),i=n(157),r=n(153),m=n.n(r),d=n(158),c=n(150),u=n(165),o=n(167);t.default=function(e){var t=e.data.allKenticoCloudItemPage.edges[0].node;return s.a.createElement(l.a,{pageId:t.system.id},s.a.createElement(m.a,null,s.a.createElement("title",null,t.elements.title.value)),s.a.createElement(u.a,{pageId:t.system.id}),s.a.createElement("main",null,s.a.createElement(i.a,{className:"jumbotron-content-page violet",page:t.elements.url.value,header:t.elements.title.value}),s.a.createElement(d.a,null,s.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.elements.teaser.value}})),s.a.createElement(c.a,null,s.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.elements.content.resolvedHtml}})),t.elements.references&&Array.isArray(t.elements.references)&&t.elements.references.length>0&&s.a.createElement(c.a,null,s.a.createElement(o.a,{data:t.elements.references}))))};var f="2555288989"},158:function(e,t,n){"use strict";var a=n(7),s=n.n(a),l=n(0),i=n.n(l),r=n(150),m=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement(r.a,{className:"highlighted"},this.props.children)},t}(i.a.Component);t.a=m},165:function(e,t,n){"use strict";n(48),n(147),n(75);var a=n(7),s=n.n(a),l=n(141),i=n.n(l),r=n(166),m=n(0),d=n.n(m),c=n(142),u=n(140),o=n(152);function f(){var e=i()(["\n        top: 60px;\n    "]);return f=function(){return e},e}function b(){var e=i()(["\n    position: absolute;\n\tz-index: 1;\n\tdisplay: flex;\n\talign-items: rows;\n\ttext-shadow: 0 1px 5px #424545;\n\tcolor: ",";\n\tpadding-top: 10px;\n    \n    ","\n\t\n\ta\n\t{\n\t\tmargin-right: 6px;\n\t\tcolor: ",";\n\t\ttext-decoration: underline;\n\t}\n\t\n\ta:last-of-type { text-decoration: none; }\n\t\n\ta:hover\n\t{\n\t\tcolor: ",';\n\t\ttext-decoration: none;\n\t}\n\t\n\ta+a::before\n\t{\n\t\tdisplay: inline-block;\n\t\tmargin-right: 6px;\n\t\tcontent: "/";\n\t}  \n']);return b=function(){return e},e}var p=u.default.nav(b(),c.b.breadcrumbs_foreground,c.a.md(f()),c.b.breadcrumbs_foreground,c.b.breadcrumbs_foreground),y=function(e){function t(){return e.apply(this,arguments)||this}s()(t,e);var n=t.prototype;return n.render=function(){var e=this;return d.a.createElement(o.StaticQuery,{query:"2331568009",render:function(t){var n=e.props.pageId,a=t.allKenticoCloudItemNavigationItem.edges[0].node,s=[d.a.createElement(o.Link,{to:"/",title:"Introduction",key:"0"},"Introduction")],l=a.elements.child_items,i=e.findItem(l,n);if(i)s.push(e.getLink(i));else for(var r=0;r<l.length;r++){var m=l[r].elements.child_items,c=e.findItem(m,n);if(c){s.push(e.getLink(l[r])),s.push(e.getLink(c));break}for(var u=m.filter(function(e){return Array.isArray(e.elements.content_item)&&1===e.elements.content_item.length&&"phase"===e.elements.content_item[0].system.type}),f=0;f<u.length;f++){var b=t.allKenticoCloudItemPhase.edges.filter(function(e){return e.node.system.id===m[f].elements.content_item[0].system.id})[0].node.elements.subphases.filter(function(e){return e.system.id===n});if(1===b.length){s.push(e.getLink(l[r])),s.push(e.getLink(m[f])),s.push(d.a.createElement(o.Link,{key:b[0].system.id,to:b[0].elements.url.value,title:b[0].elements.title.value},b[0].elements.title.value));break}}}return d.a.createElement(p,null,s.map(function(e){return e}))},data:r})},n.findItem=function(e,t){var n=e.filter(function(e){return Array.isArray(e.elements.content_item)&&1===e.elements.content_item.length&&e.elements.content_item[0].system.id===t});return 1===n.length?n[0]:null},n.getLink=function(e){return 1===e.elements.content_item.length?d.a.createElement(o.Link,{key:e.system.id,to:e.elements.content_item[0].elements.url.value,title:e.elements.content_item[0].elements.title.value},e.elements.content_item[0].elements.title.value):d.a.createElement(o.Link,{key:e.system.id,to:"/",title:e.elements.title.value},e.elements.title.value)},t}(d.a.Component);t.a=y},166:function(e){e.exports={data:{allKenticoCloudItemNavigationItem:{edges:[{node:{elements:{child_items:[{system:{id:"7af66f9b-d91a-49cd-be81-24285c4fbeca"},elements:{title:{value:"Project phases"},content_item:[],child_items:[{system:{id:"e7d0157d-271d-4a6b-b620-b9d7b1cfd6a9"},elements:{content_item:[{system:{id:"ad05c758-4c4a-4e28-a4f0-8d0438929ce5",type:"phase"},elements:{url:{value:"gathering"},title:{value:"Gathering"}}}]}},{system:{id:"63290b09-f2eb-4ff1-98ad-f15a29f2afa4"},elements:{content_item:[{system:{id:"7f52b669-8485-4de9-9ac0-5b0c4e3a2d7d",type:"phase"},elements:{url:{value:"planning"},title:{value:"Planning"}}}]}},{system:{id:"22fbc582-253d-41f4-80be-07c9d6a1bd06"},elements:{content_item:[{system:{id:"2eb6a258-635a-4c21-8739-841c01652f39",type:"phase"},elements:{url:{value:"developing"},title:{value:"Developing"}}}]}},{system:{id:"492d2833-b6ba-47d3-8d9d-5f0d65089225"},elements:{content_item:[{system:{id:"ba524685-fe9e-4ccf-a0a2-c74e79c752f5",type:"phase"},elements:{url:{value:"testing"},title:{value:"Testing"}}}]}},{system:{id:"33268ebd-b256-45b9-a632-9616096e0ec4"},elements:{content_item:[{system:{id:"cdd91a89-a393-43c6-a855-d0d148a64cb5",type:"phase"},elements:{url:{value:"deploying"},title:{value:"Deploying"}}}]}},{system:{id:"143d437b-18c4-4eb5-ac97-5fdd196feecd"},elements:{content_item:[{system:{id:"2f435937-dd3f-45ca-9429-bbd24fa66480",type:"phase"},elements:{url:{value:"maintaining"},title:{value:"Maintaining"}}}]}}]}},{system:{id:"ea6f7c1b-c080-4131-b320-934aede53511"},elements:{title:{value:"Conclusion"},content_item:[{system:{id:"8152a11a-0dc1-4dc2-a0f1-652b933c8f42"},elements:{url:{value:"conclusion"},title:{value:"Conclusion"}}}],child_items:[]}}]}}}]},allKenticoCloudItemPhase:{edges:[{node:{system:{id:"8152a11a-0dc1-4dc2-a0f1-652b933c8f42"},elements:{subphases:[]}}},{node:{system:{id:"cdd91a89-a393-43c6-a855-d0d148a64cb5"},elements:{subphases:[]}}},{node:{system:{id:"2eb6a258-635a-4c21-8739-841c01652f39"},elements:{subphases:[{system:{id:"2ca8b62a-e7e7-4603-bb18-ea3f576dce3d"},elements:{title:{value:"Developing in a team"},url:{value:"developing-in-a-team"}}},{system:{id:"6e2d1894-f0d5-4b57-891f-a64bbbf72b83"},elements:{title:{value:"Implementing best practices"},url:{value:"implementing-best-practices"}}}]}}},{node:{system:{id:"2ca8b62a-e7e7-4603-bb18-ea3f576dce3d"},elements:{subphases:[]}}},{node:{system:{id:"6e2d1894-f0d5-4b57-891f-a64bbbf72b83"},elements:{subphases:[]}}},{node:{system:{id:"ad05c758-4c4a-4e28-a4f0-8d0438929ce5"},elements:{subphases:[{system:{id:"9195a378-f8ba-43ba-b527-28241d7630be"},elements:{title:{value:"Functional Requirements"},url:{value:"gathering-functional-requirements"}}},{system:{id:"767e65d5-6aac-47fc-8759-efec5f786ee6"},elements:{title:{value:"Environment Requirements"},url:{value:"environment-requirements"}}}]}}},{node:{system:{id:"767e65d5-6aac-47fc-8759-efec5f786ee6"},elements:{subphases:[]}}},{node:{system:{id:"9195a378-f8ba-43ba-b527-28241d7630be"},elements:{subphases:[]}}},{node:{system:{id:"2f435937-dd3f-45ca-9429-bbd24fa66480"},elements:{subphases:[]}}},{node:{system:{id:"7f52b669-8485-4de9-9ac0-5b0c4e3a2d7d"},elements:{subphases:[{system:{id:"01db3705-f9ba-4cb4-b3ab-341cbabff5a7"},elements:{title:{value:"Mapping Requirements"},url:{value:"mapping-requirements"}}},{system:{id:"1d9b8e3c-2568-4242-835f-205e6b44c9d9"},elements:{title:{value:"Picking a project type and development model"},url:{value:"picking-a-project-type-and-development-model"}}},{system:{id:"c4901224-e559-4ecf-9ace-f2a88dcf21d8"},elements:{title:{value:"Planning content management"},url:{value:"planning-content-management"}}},{system:{id:"e7604240-5012-483f-a7c6-34498ee53b01"},elements:{title:{value:"Identifying data structures"},url:{value:"identifying-data-structures"}}}]}}},{node:{system:{id:"e7604240-5012-483f-a7c6-34498ee53b01"},elements:{subphases:[]}}},{node:{system:{id:"01db3705-f9ba-4cb4-b3ab-341cbabff5a7"},elements:{subphases:[]}}},{node:{system:{id:"1d9b8e3c-2568-4242-835f-205e6b44c9d9"},elements:{subphases:[]}}},{node:{system:{id:"c4901224-e559-4ecf-9ace-f2a88dcf21d8"},elements:{subphases:[]}}},{node:{system:{id:"ba524685-fe9e-4ccf-a0a2-c74e79c752f5"},elements:{subphases:[]}}}]}}}},167:function(e,t,n){"use strict";n(48),n(147);var a=n(7),s=n.n(a),l=n(0),i=n.n(l),r=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){if(!this.props.data||!Array.isArray(this.props.data)||0===this.props.data.length)return null;var e=this.props.data.map(function(e,t){return i.a.createElement("li",{key:e.system.id},i.a.createElement("a",{target:"_blank",title:e.elements.title.value,href:e.elements.url.value},e.elements.title.value))});return e&&(e=i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"References"),i.a.createElement("ul",null,e))),e},t}(i.a.Component);t.a=r}}]);
//# sourceMappingURL=component---src-templates-page-js-62f361823f677b707ba8.js.map