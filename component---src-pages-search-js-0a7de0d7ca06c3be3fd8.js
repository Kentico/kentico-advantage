(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{141:function(e,t,n){"use strict";n.r(t);n(75),n(76),n(74),n(32);var r=n(0),a=n.n(r),o=n(156),l=n(151),s=n.n(l),i=n(7),c=n.n(i),u=n(51),h=n.n(u),f=n(144),m=n.n(f),p=n(142),d=n(143),g=n(198),y=n.n(g),E=n(147),b=n(153);function v(){var e=m()(["\n        form label, form input[type=text]\n        {\n            font-size: 3.2em;\n        }\n    "]);return v=function(){return e},e}var w=p.default.div.withConfig({displayName:"search-results__SearchResultsContainer",componentId:"kx65ge-0"})(["form{color:",";line-height:1.1em;font-weight:300;padding:10px 20px;display:flex;align-items:baseline;}form label{font-size:2em;white-space:nowrap;padding-right:10px;}form input[type=text]{font-weight:bold;display:inline-block;border:0;border-bottom:2px solid #9196cd;padding:0 0 0 10px;background:transparent;font-size:2em;color:#fff;font-family:'Source Sans Pro',sans-serif;min-width:0;width:100%;transition:all 0.3s;-webkit-transition:all 0.3s;}form input:focus{outline:none;border-color:#fff;}"," a h2{color:",";}a:hover{text-decoration:none;}a:hover h2{color:",";}"],d.b.jumbotron_content_heading_foreground,d.a.sm(v()),d.b.a_foreground,d.b.a_hover_foreground),S=function(e){function t(t){var n;return(n=e.call(this,t)||this).performSearch=function(e){e&&e.preventDefault(),y()({url:"https://kentico-advantage.search.windows.net",key:"7140BE1173CB92C78644B3962E4EE57F"}).search("kentico-advantage-search-index",{search:n.searchInput.value},n.processSearchResults)},n.processSearchResults=function(e,t){n.setState(function(e){return{query:e.query,results:t,searching:!1}})},n.state={query:n.props.searchQuery,results:[],searching:null!==n.props.searchQuery},n.performSearch=n.performSearch.bind(h()(h()(n))),n.processSearchResults=n.processSearchResults.bind(h()(h()(n))),n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.state.query&&this.performSearch(null)},n.render=function(){var e=this,t=this.state.results.map(function(e){return a.a.createElement(E.a,{key:e.id},a.a.createElement("a",{href:e.url,title:e.title},a.a.createElement("h2",null,e.title)),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.teaser}}))}),n=a.a.createElement(E.a,null,a.a.createElement("h2",null,"Your search yielded no results"),a.a.createElement("p",null,"Please check if your spelling is correct.")),r=a.a.createElement(E.a,null,a.a.createElement("h2",null,"Searching for '",this.state.query,"'..."),a.a.createElement("p",null,"Please give us a moment to find what you are looking for."));return a.a.createElement(w,null,a.a.createElement(b.a,{className:"jumbotron-content-page violet"},a.a.createElement("form",{onSubmit:this.performSearch},a.a.createElement("label",{htmlFor:"query"},"Results for:"),a.a.createElement("input",{type:"text",name:"query",ref:function(t){e.searchInput=t},defaultValue:this.state.query}))),this.state.searching?r:t.length>0?t:n)},t}(a.a.Component);t.default=function(e){var t=e.location.search.replace("?s=","");return t.includes("?")&&(t=null),a.a.createElement(o.a,null,a.a.createElement(s.a,null,a.a.createElement("title",null,"Search results")),a.a.createElement("main",null,a.a.createElement(S,{searchQuery:t})))}},204:function(e,t){},206:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-search-js-0a7de0d7ca06c3be3fd8.js.map