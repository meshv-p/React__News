(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(21),r=s.n(c),i=(s(30),s(9)),l=s(10),o=s(12),j=s(11),h=(s(31),s(8)),d=s(0),p=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg sticky-top navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(h.b,{className:"navbar-brand",to:"/",children:"News App"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(h.b,{className:"nav-link ","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(h.b,{className:"nav-link",to:"/business",children:"Business"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(h.b,{className:"nav-link",to:"/entertainment",children:"Entertainment"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(h.b,{className:"nav-link",to:"/general",children:"General"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(h.b,{className:"nav-link",to:"/health",children:"Health"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(h.b,{className:"nav-link",to:"/science",children:"Science"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(h.b,{className:"nav-link",to:"/sports",children:"Sports"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(h.b,{className:"nav-link",to:"/technology",children:"Technology"})})]}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}}]),s}(a.Component),b=p,u=s(13),g=s.n(u),m=s(16),x=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props,t=e.title,s=e.description,a=e.imgageurl,n=e.newsurl,c=e.newstime,r=e.author,i=e.source;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsxs)("span",{className:"position-absolute top-0  translate-middle badge rounded-pill bg-danger",style:{left:"96%"},children:[i,Object(d.jsx)("span",{className:"visually-hidden",children:"unread messages"})]}),Object(d.jsx)("img",{src:a,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t}),Object(d.jsxs)("p",{className:"card-text mb-2",children:[s,"..."]}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("div",{className:"click",children:Object(d.jsx)("a",{href:n,rel:"noreferrer",target:"_blank",className:"my-2 btn btn-outline-primary btn-sm ",children:"Read more"})}),Object(d.jsxs)("div",{className:"row d-inline-block ms-2",children:[Object(d.jsx)("small",{className:"col pe-0",children:Object(d.jsxs)("small",{className:"text-muted ms-4 ps-4",children:[c," : Date"]})}),Object(d.jsx)("small",{className:"col pe-0 ps-0",children:Object(d.jsxs)("small",{className:"text-muted d-flex justify-content-end ps-4",children:[r||"Unknown"," : By"]})})]})]})]})]})})}}]),s}(a.Component),O=x,v=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"text-center my-3 d-flex mx-auto spinner-border text-primary ",role:"status",children:Object(d.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}}]),s}(a.Component),f=v,N=s(24),y=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).next=function(){console.log("befor 1"),e.setState({page:e.state.page+1}),console.log("after 1"),e.Updatenews()},e.previous=Object(m.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({page:e.state.page-1}),e.Updatenews();case 2:case"end":return t.stop()}}),t)}))),e.fetchMoreData=Object(m.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({page:e.state.page+1}),e.loadmore();case 2:case"end":return t.stop()}}),t)}))),console.log("hey i am constructor in news com"),e.state={articles:[],loading:!1,page:1},e}return Object(l.a)(s,[{key:"Updatenews",value:function(){var e=Object(m.a)(g.a.mark((function e(){var t,s,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.setProgress(10),t="https://newsapi.org/v2/top-headlines?country=in&category=".concat(this.props.category,"&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=").concat(this.state.page,"&pagesize=").concat(this.props.pagesize),this.setState({loading:!0}),e.next=5,fetch(t);case 5:return s=e.sent,e.next=8,s.json();case 8:a=e.sent,console.log(a),this.setState({articles:a.articles,totalResults:a.totalResults,loading:!1}),this.props.setProgress(100);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.Updatenews()}},{key:"loadmore",value:function(){var e=Object(m.a)(g.a.mark((function e(){var t,s,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=in&category=".concat(this.props.category,"&apiKey=3684e6479e9a4ac29fd01258fe97dc0e&page=").concat(this.state.page,"&pagesize=").concat(this.props.pagesize),this.setState({loading:!0}),e.next=4,fetch(t);case 4:return s=e.sent,e.next=7,s.json();case 7:a=e.sent,console.log(a),this.setState({articles:this.state.articles.concat(a.articles),totalResults:a.totalResults,loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(N.a,{dataLength:this.state.articles.length,next:this.fetchMoreData,hasMore:this.state.articles.length!==this.state.totalResults,loader:Object(d.jsx)(f,{}),children:Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h1",{className:"text-center",children:this.props.heading}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"row",children:this.state.articles.map((function(e){return Object(d.jsx)("div",{className:"col-auto mx-auto my-2",children:Object(d.jsx)(O,{title:e.title?e.title.slice(0,45):"",description:e.description?e.description.slice(0,88):"",imgageurl:e.urlToImage?e.urlToImage:"https://images.hindustantimes.com/tech/img/2021/10/02/1600x900/SPACE-EXPLORATION-ISS-1_1631181193265_1633160041618.JPG",newsurl:e.url,newstime:e.publishedAt.slice(0,10),author:e.author,source:e.source.name})},e.url)}))})]})})})}}]),s}(a.Component);y.defaultProps={pagesize:8,category:"general"};var w=y,k=s(25),P=s(3),S=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={progress:0},e.setProgress=function(t){e.setState({progress:t})},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(k.a,{height:3,color:"#f11946",progress:this.state.progress}),Object(d.jsx)(b,{}),Object(d.jsxs)(P.c,{children:[Object(d.jsx)(P.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{setProgress:this.setProgress,heading:"Top News",pagesize:9,category:"general"},"gen")}),Object(d.jsx)(P.a,{exact:!0,path:"/science",children:Object(d.jsx)(w,{setProgress:this.setProgress,heading:"Top News",pagesize:9,category:"science"},"science")}),Object(d.jsx)(P.a,{exact:!0,path:"/sports",children:Object(d.jsx)(w,{setProgress:this.setProgress,heading:"Top News",pagesize:9,category:"sports"},"sports")}),Object(d.jsx)(P.a,{exact:!0,path:"/business",children:Object(d.jsx)(w,{setProgress:this.setProgress,heading:"Top News",pagesize:9,category:"business"},"business")}),Object(d.jsx)(P.a,{exact:!0,path:"/general",children:Object(d.jsx)(w,{setProgress:this.setProgress,heading:"Top News",pagesize:9,category:"general"},"general")}),Object(d.jsx)(P.a,{exact:!0,path:"/technology",children:Object(d.jsx)(w,{setProgress:this.setProgress,heading:"Top News",pagesize:9,category:"technology"},"technology")}),Object(d.jsx)(P.a,{exact:!0,path:"/health",children:Object(d.jsx)(w,{setProgress:this.setProgress,heading:"Top News",pagesize:9,category:"health"},"health")}),Object(d.jsx)(P.a,{exact:!0,path:"/entertainment",children:Object(d.jsx)(w,{setProgress:this.setProgress,heading:"Top News",pagesize:9,category:"entertainment"},"entertainment")})]})]})})}}]),s}(a.Component),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.4ae67bad.chunk.js.map