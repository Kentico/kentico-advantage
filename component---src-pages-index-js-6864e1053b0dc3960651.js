(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(156),i=t(153),s=t(154),l=t(7),c=t.n(l),u=t(143),p=t.n(u),m=t(197),d=t(152),h=t(142),g=t(144);function f(){var e=p()(["\n    display: block;\n    float: left;\n    width: 76px;\n    margin-right: 24px;\n"]);return f=function(){return e},e}function v(){var e=p()(["\n"]);return v=function(){return e},e}function y(){var e=p()(["\n        h3\n        {\n            margin: auto auto 6px;\n        }\n    "]);return y=function(){return e},e}function b(){var e=p()(["\n    display: block;\n    min-height: (76px + (2*24px));\n    padding-left: 100px;\n    background-repeat: no-repeat;\n    background-position: left center;\n\n    h3\n    {\n        margin: 0;\n        font-size: 2em;\n        font-family: 'Source Sans Pro', sans-serif;\n        font-weight: bold;\n        white-space: nowrap;\n        margin: auto auto 4px;\n    }\n    \n    h3 span::before\n    {\n        counter-increment: section;\n        content: counter(section) \". \";\n    }\n\n    p\n    {\n        margin: 0;\n        color: ",";\n        line-height: 1.2em;\n    }\n\n    ","\n"]);return b=function(){return e},e}var w=h.default.li(b(),g.b.project_phases_foreground,g.a.sm(y())),k=h.default.a(v()),E=h.default.span(f()),x=function(e){function n(){return e.apply(this,arguments)||this}return c()(n,e),n.prototype.render=function(){return o.a.createElement(w,null,o.a.createElement(k,{href:this.props.url,title:this.props.title},o.a.createElement(E,null,o.a.createElement("img",{src:this.props.icon,alt:this.props.title})),o.a.createElement("h3",null,o.a.createElement("span",null,this.props.title)),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.props.overview}})))},n}(o.a.Component);function _(){var e=p()(['\n    ol\n    {\n        list-style-type: none;\n    }\n    ol li::before\n    {\n        content: "";\n    }\n    li a {\n        display: block;\n        text-decoration: none;\n        padding: 24px 0 24px 16px;\n    }\n    li\n    {\n        margin: -10px;\n        padding: 10px;\n        border-bottom: 1px solid #ececec;\n        background-position: 12px;\n    }\n    li:last-child\n    {\n        border-bottom:0;\n    }\n    ol li\n    {\n        margin: 0;\n    }\n    li:hover\n    {\n        background-color: ',";\n    }\n    p\n    {\n        padding: 0;\n    }\n"]);return _=function(){return e},e}var j=h.default.section(_(),g.b.project_phases_background),I=function(e){function n(){return e.apply(this,arguments)||this}return c()(n,e),n.prototype.render=function(){return o.a.createElement(d.StaticQuery,{query:"1151904293",render:function(e){return o.a.createElement(j,null,o.a.createElement("ol",null,e.allKenticoCloudItemNavigationItem.edges[0].node.elements.child_items.map(function(e){return e.elements.content_item.map(function(e){return o.a.createElement(x,{key:e.elements.url.value,size:"small",icon:e.elements.icon.assets[0].url,url:e.elements.url.value,title:e.elements.title.value,overview:e.elements.overview.value})})})))},data:m})},n}(o.a.Component);n.default=function(){return o.a.createElement(r.a,null,o.a.createElement("main",null,o.a.createElement(i.a,{className:"jumbotron-homepage",header:"Kentico Advantage",teaser:"Kentico Consulting team created this guide so you can leverage our experience with many different projects to help you avoid pitfalls and address potentially weak places in the project."}),o.a.createElement(s.a,null,o.a.createElement("h2",null,"Project phases"),o.a.createElement("p",null,"We identified six primary phases for Kentico projects. If you follow a waterfall like development approach you'll apply each section in a linear fashion over the course of the project. Alternatively, if you follow an agile approach, you'll do this as of each sprint."),o.a.createElement("p",null,"Regardless of the approach you take, each phase covers the key concepts and best practices you need to know, presents real-world scenarios to help with application, and provides additional resources related to the section.")),o.a.createElement(I,null)))}},154:function(e,n,t){"use strict";var a=t(7),o=t.n(a),r=t(0),i=t.n(r),s=t(147),l=function(e){function n(){return e.apply(this,arguments)||this}return o()(n,e),n.prototype.render=function(){return i.a.createElement(s.a,{className:"highlighted"},this.props.children)},n}(i.a.Component);n.a=l},197:function(e){e.exports={data:{allKenticoCloudItemNavigationItem:{edges:[{node:{elements:{child_items:[{elements:{content_item:[{elements:{title:{value:"Gathering"},url:{value:"gathering"},overview:{value:"<p><strong>Identify</strong>&nbsp;your project's functional and environment requirements.</p>"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/c1b57fce-743a-0048-c4ee-4f8c42ea3ab8/ed6e6fc0-b973-4229-8894-e14e7313dd27/icon-gathering.svg"}]}},system:{type:"phase"}}]}},{elements:{content_item:[{elements:{title:{value:"Planning"},url:{value:"planning"},overview:{value:"<p><strong>Prepare</strong>&nbsp;by mapping requirements, picking a development model, planning content management, and identifying data structures.</p>"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/c1b57fce-743a-0048-c4ee-4f8c42ea3ab8/648da1c8-eb72-46ad-881c-6edcae973821/icon-planning.svg"}]}},system:{type:"phase"}}]}},{elements:{content_item:[{elements:{title:{value:"Developing"},url:{value:"developing"},overview:{value:"<p><strong>Build</strong>&nbsp;out your project by setting up an environment your team can collaborate in and sticking to best practices.</p>"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/c1b57fce-743a-0048-c4ee-4f8c42ea3ab8/bf687281-a068-4ee6-a8da-f122711116ec/icon-developing.svg"}]}},system:{type:"phase"}}]}},{elements:{content_item:[{elements:{title:{value:"Testing"},url:{value:"testing"},overview:{value:"<p><strong>Verify</strong>&nbsp;that everything is secure and works properly with thorough testing.</p>"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/c1b57fce-743a-0048-c4ee-4f8c42ea3ab8/9bb50405-a3e4-462c-8aa8-de184b0f6e6a/icon-testing.svg"}]}},system:{type:"phase"}}]}},{elements:{content_item:[{elements:{title:{value:"Deploying"},url:{value:"deploying"},overview:{value:"<p><strong>Release </strong>the initial build into production or incrementally update an existing project.</p>"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/c1b57fce-743a-0048-c4ee-4f8c42ea3ab8/c8d74e8f-deb6-4643-bf2b-4e0734d51e7c/icon-deploying.svg"}]}},system:{type:"phase"}}]}},{elements:{content_item:[{elements:{title:{value:"Maintaining"},url:{value:"maintaining"},overview:{value:"<p><strong>Support </strong>your project with monitoring and proactive action to prevent issues and enhance the project.</p>"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/c1b57fce-743a-0048-c4ee-4f8c42ea3ab8/f556d80b-9ea9-4cf1-926b-03f9f07e913e/icon-maintaining.svg"}]}},system:{type:"phase"}}]}}]}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-6864e1053b0dc3960651.js.map