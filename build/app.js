webpackJsonp([1],{236:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.getBook=void 0;var o=n(238),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){return{type:"RECEIVE_BOOK",bookDetails:e.data}};t.getBook=function(){return function(){var e=r(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.default.get("/api/book/list");case 3:return r=e.sent,e.next=6,t(i(r));case 6:return e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log("error: ",e.t0);case 12:case"end":return e.stop()}},e,void 0,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}()}},237:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.getNav=void 0;var o=n(238),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=function(e){return{type:"RECEIVE_NAV",navMain:e.data}};t.getNav=function(){return function(){var e=r(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.default.get("/api/book/navigation");case 3:return r=e.sent,e.next=6,t(i(r));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error: ",e.t0);case 11:case"end":return e.stop()}},e,void 0,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}()}},238:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(242),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=o.default.create({timeout:5e3,headers:{"X-Custom-Header":"foobar"}});t.default=a},240:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(5),a=r(o),i=n(164),u=r(i),c=n(58),l=n(81),s=n(387),f=n(388),p=r(f),d=n(386),y=r(d),h=n(224),b=n(619),v=r(b),m=n(230),_=r(m),g=n(630),M=r(g);n(606);var E=n(292),O=(0,_.default)(),j=(0,h.routerMiddleware)(O);(0,y.default)({collapsed:!0});E.attach(document.body);var w=void 0;w=(0,c.createStore)(M.default,(0,s.composeWithDevTools)((0,c.applyMiddleware)(p.default,j)));var N=function(e){u.default.render(a.default.createElement(l.Provider,{store:w},a.default.createElement(e,null)),document.getElementById("root"))};N(v.default)},262:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyBzdHlsZT0id2lkdGg6MzA4cHg7aGVpZ2h0OjMwOHB4OyIgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5b2iIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEwMjRweCIgaGVpZ2h0PSIxMDI0cHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMjQgMTAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2ZmZiIgZD0iTTc5MC41MzMzMzMgNzYwLjM2NTMzM2wtMTU5LjEyNTMzMy0xNTkuMTI4YzcyLjgtODcuOTk3MzMzIDY4LjAzNDY2Ny0yMTguNTc4NjY3LTE0LjM1Mi0zMDAuOTYyNjY3LTg3LjQ3NzMzMy04Ny40NzczMzMtMjI5LjMwNjY2Ny04Ny40NzczMzMtMzE2Ljc4NCAwcy04Ny40NzczMzMgMjI5LjMwNjY2NyAwIDMxNi43ODRjODIuMzg2NjY3IDgyLjM4NjY2NyAyMTIuOTY4IDg3LjE1MiAzMDAuOTYyNjY3IDE0LjM1MmwxNTkuMTI4IDE1OS4xMjUzMzNMNzkwLjUzMzMzMyA3NjAuMzY1MzMzek0zMzAuNDQyNjY3IDU4Ni44ODhjLTcwLjgxNi03MC44MTYtNzAuODE2LTE4NS42MjkzMzMgMC0yNTYuNDQ1MzMzIDcwLjgxNi03MC44MTMzMzMgMTg1LjYyOTMzMy03MC44MTYgMjU2LjQ0NTMzMyAwIDcwLjgxMzMzMyA3MC44MTYgNzAuODEzMzMzIDE4NS42MzIgMCAyNTYuNDQ1MzMzQzUxNi4wNzIgNjU3LjcwNCA0MDEuMjU4NjY3IDY1Ny43MDEzMzMgMzMwLjQ0MjY2NyA1ODYuODg4eiIgLz4KCjwvc3ZnPgo="},275:function(e,t,n){e.exports=n.p+"2Z8lgNdoQ0.png"},276:function(e,t,n){e.exports=n.p+"wBKsOaAx2R.png"},277:function(e,t,n){e.exports=n.p+"1K5Q2QEgAU.png"},278:function(e,t,n){e.exports=n.p+"1L8amFnjuF.png"},279:function(e,t,n){e.exports=n.p+"340D5JMtuU.png"},280:function(e,t,n){e.exports=n.p+"2iz_NxbRkS.png"},281:function(e,t,n){e.exports=n.p+"3z2ACjwE2-.png"},282:function(e,t,n){e.exports=n.p+"CbYCCEpfVQ.png"},283:function(e,t,n){e.exports=n.p+"1vKGKi36qI.png"},284:function(e,t,n){e.exports=n.p+"M-0ZdUUVyt.jpg"},285:function(e,t,n){e.exports=n.p+"3bsS682P06.jpg"},286:function(e,t,n){e.exports=n.p+"2AYAHGCDwy.png"},287:function(e,t,n){e.exports=n.p+"22GwDn0AM0.png"},379:function(e,t){},380:function(e,t){},381:function(e,t){},618:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.receiveHotSearch=function(){return{type:"RECEIVE_HOT_SEARCH"}}},619:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(5),f=r(s),p=n(81);n(379);var d=n(79),y=n(293),h=r(y),b=n(231),v=r(b),m=n(627),_=r(m),g=n(628),M=r(g),E=n(626),O=r(E),j=(0,v.default)(),w=(u=(0,p.connect)(function(e){return e}))(c=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){return f.default.createElement(d.HashRouter,{history:j},f.default.createElement(d.Route,{render:function(e){var t=e.location;console.log("location.pathname: ",t);var n="normal";return"/search"===t.pathname?n="left":t.pathname.indexOf("bookList")>-1&&(n="left"),f.default.createElement(h.default,{transitionName:n,transitionEnter:!0,transitionLeave:!0,transitionEnterTimeout:400,transitionLeaveTimeout:400},f.default.createElement("div",{key:t.pathname},f.default.createElement(d.Route,{location:t,exact:!0,path:"/",component:_.default}),f.default.createElement(d.Route,{location:t,path:"/search",component:M.default}),f.default.createElement(d.Route,{location:t,path:"/bookList/:bookId",component:O.default})))}}))}}]),t}(f.default.Component))||c;t.default=w},620:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Special=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(5),c=function(e){return e&&e.__esModule?e:{default:e}}(u),l=n(284),s=n(285);t.Special=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"style_main"},c.default.createElement("div",{className:"style_div"},c.default.createElement("div",{className:"style_left"},c.default.createElement("img",{src:l,className:"style_img"})),c.default.createElement("div",{className:"style_right"},c.default.createElement("img",{src:s,className:"style_img"}))))}}]),t}(c.default.Component)},621:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.BookList=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),l=r(c),s=n(79),f=n(9),p=r(f);(t.BookList=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"shouldComponentUpdate",value:function(e,t){return!(_.isEqual(this.props,e)||!_.isEmpty(this.props))}},{key:"render",value:function(){var e=this.props,t=e._id,n=(e.imgUrl,e.title),r=e.author,o=e.press,a=e.publishedDate,i=e.currentPrice,u=e.originalPrice,c=e.index;return l.default.createElement(s.Link,{to:"/bookList/"+t,"data-id":t,className:"home-book-list"},l.default.createElement("div",{className:"book-img"},l.default.createElement("span",{className:"book-index"},c),l.default.createElement("img",{className:"",src:"",alt:"图片"})),l.default.createElement("div",{className:"book-contain"},l.default.createElement("p",{className:"book-title textOverflow-hidden"},n),l.default.createElement("p",{className:"book-author textOverflow-hidden"},"作者：",r),l.default.createElement("p",{className:"book-author textOverflow-hidden"},"出版社：",o),""!==a?l.default.createElement("p",{className:"book-author textOverflow-hidden"},"出版时间：",a):"",l.default.createElement("p",{className:"textOverflow-hidden"},l.default.createElement("span",{className:"now-price"},"￥",i),l.default.createElement("span",{className:"old-price"},"￥",u))))}}]),t}(l.default.Component)).propTypes={_id:p.default.string.isRequired,imgUrl:p.default.string.isRequired,title:p.default.string.isRequired,author:p.default.string.isRequired,press:p.default.string.isRequired,publishedDate:p.default.string.isRequired,currentPrice:p.default.string.isRequired,originalPrice:p.default.string.isRequired,index:p.default.number.isRequired}},622:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),l=r(c),s=n(79),f=n(9),p=r(f);(t.Header=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"shouldComponentUpdate",value:function(e,t){return!(_.isEqual(this.props,e)||!_.isEmpty(this.props))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.imgUrl,r=e.linkTo,o=e.bgColor;return l.default.createElement("header",{className:"header",style:o},t,l.default.createElement(s.Link,{to:r,className:"a_link"},l.default.createElement("img",{src:n,className:"a_img"})))}}]),t}(l.default.Component)).propTypes={title:p.default.string.isRequired,imgUrl:p.default.string.isRequired,linkTo:p.default.string.isRequired,bgColor:p.default.object.isRequired}},623:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Nav=void 0;var c,l,s,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(5),d=r(p),y=n(9),h=r(y),b=n(633),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(b),m=n(278),g=n(276),M=n(275),E=n(283),O=n(279),j=n(281),w=n(282),N=n(280),k=n(277);(t.Nav=(l=c=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"shouldComponentUpdate",value:function(e,t){return!(_.isEqual(this.props,e)||!_.isEmpty(this.props))}},{key:"render",value:function(){var e=this.props,n=e.title,r=(e.img,e.index),o=e.handleClick;return d.default.createElement("li",{className:"style_li",onClick:o},d.default.createElement("img",{src:t.navImage[r+1],className:"style_img"}),d.default.createElement("span",{className:"style_span"},n))}}]),t}(d.default.Component),c.navImage=(s={},o(s,v.NAV_IMAGE_1,m),o(s,v.NAV_IMAGE_2,g),o(s,v.NAV_IMAGE_3,M),o(s,v.NAV_IMAGE_4,E),o(s,v.NAV_IMAGE_5,O),o(s,v.NAV_IMAGE_6,j),o(s,v.NAV_IMAGE_7,w),o(s,v.NAV_IMAGE_8,N),o(s,v.NAV_IMAGE_9,k),s),l)).propTypes={title:h.default.string.isRequired,img:h.default.string,index:h.default.number.isRequired,handleClick:h.default.func.isRequired}},624:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.HotSearch=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),l=r(c),s=(n(79),n(9)),f=r(s);(t.HotSearch=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.hotText,n=e.hotClick;return l.default.createElement("a",{className:"style_span",onClick:n},t)}}]),t}(l.default.Component)).propTypes={hotText:f.default.string,hotClick:f.default.func}},625:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(5),c=function(e){return e&&e.__esModule?e:{default:e}}(u),l=n(79),s=n(286),f=n(287);t.Header=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"style_body"},c.default.createElement("div",{className:"style_main"},c.default.createElement(l.Link,{to:"/",className:"style_a"},c.default.createElement("img",{src:s,className:"style_a_img"})),c.default.createElement("div",{className:"style_div_content"},c.default.createElement("img",{src:f,className:"style_div_img"}),c.default.createElement("input",{type:"text",placeholder:"搜索书名",className:"style_div_input"})),c.default.createElement(l.Link,{to:"/search",className:"style_right_a"},"搜索")))}}]),t}(u.Component)},626:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=n(5),d=o(p),y=n(58),h=n(81),b=n(189),v=(o(b),n(9)),m=o(v),_=n(237),g=r(_),M=n(236),E=r(M),O=(c=(0,h.connect)(function(e){return e},function(e){return(0,y.bindActionCreators)(f({},g,E),e)}))(l=function(e){function t(e){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),s(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){this.props.match;return d.default.createElement("div",{className:""},"bookList")}}]),t}(d.default.Component))||l;t.default=O,O.propTypes={match:m.default.object}},627:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,l,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=n(5),d=o(p),y=n(58),h=n(81),b=n(189),v=(o(b),n(9)),m=o(v),g=n(237),M=r(g),E=n(236),O=r(E),j=n(622),w=n(623),N=n(620),k=n(621),P=n(262);n(380);var x=(c=(0,h.connect)(function(e){return e},function(e){return(0,y.bindActionCreators)(f({},M,O),e)}))(l=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return u(t,e),s(t,[{key:"componentWillMount",value:function(){var e=this.props.nav.navMain,t=this.props.books.bookDetails;0===e.length&&this.props.getNav(),0===t.length&&this.props.getBook()}},{key:"handleClick",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.nav.navMain,n=this.props.books.bookDetails,r={background:"#00bb9c"};return d.default.createElement("div",{key:this.props.location.pathname},d.default.createElement(j.Header,{title:"react-redux架构",imgUrl:P,linkTo:"search",bgColor:r}),d.default.createElement("div",{className:"style_div"},d.default.createElement("ul",{className:"style_ul"},!_.isEmpty(t)>0&&t.map(function(t,n){return d.default.createElement(w.Nav,{key:n,title:t.text,index:n,handleClick:function(){return e.handleClick()}})}))),d.default.createElement("div",null,d.default.createElement("p",{className:"style_p"},"专题"),d.default.createElement(N.Special,null)),d.default.createElement("div",null,d.default.createElement("p",{className:"style_p"},"书籍列表"),!_.isEmpty(n)&&n.map(function(e,t){return d.default.createElement(k.BookList,{key:t,_id:e._id,imgUrl:e.imgUrl,title:e.title,author:e.author,press:e.press,publishedDate:e.publishedDate,currentPrice:e.currentPrice,originalPrice:e.originalPrice,index:t+1})})))}}]),t}(d.default.Component))||l;t.default=x,x.propTypes={navMain:m.default.array,bookDetails:m.default.array,match:m.default.object.isRequired,location:m.default.object.isRequired,history:m.default.object.isRequired}},628:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(5),p=r(f),d=n(58),y=n(81),h=n(9),b=r(h);n(381);var v=n(618),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(v),_=n(625),g=n(624),M=(u=(0,y.connect)(function(e){return e},function(e){return(0,d.bindActionCreators)(m,e)}))(c=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.hotClick=n.hotClick.bind(n),n}return i(t,e),s(t,[{key:"componentWillMount",value:function(){this.props.receiveHotSearch()}},{key:"componentDidMount",value:function(){}},{key:"hotClick",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.props.search.hotData;return p.default.createElement("div",{key:this.props,style:{height:"100vh"}},p.default.createElement(_.Header,null),p.default.createElement("div",null,p.default.createElement("p",{className:"search-hot-title"},p.default.createElement("i",{className:"fa fa-fire"}),p.default.createElement("span",null,"热门搜索")),p.default.createElement("p",{className:"style_div_p"},t.length>0&&t.map(function(t,n){return p.default.createElement(g.HotSearch,l({ref:"hotSearch",key:n,hotText:t.text,hotClick:function(){return e.hotClick(t.text)}},e.props))}))))}}]),t}(p.default.Component))||c;t.default=M,M.propTypes={hotData:b.default.array}},629:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"RECEIVE_BOOK":return o({},e,{bookDetails:t.bookDetails});default:return o({},e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.books=r;var a={bookDetails:[]}},630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(58),o=n(224),a=n(631),i=n(632),u=n(629),c=(0,r.combineReducers)({routing:o.routerReducer,nav:a.nav,search:i.search,books:u.books});t.default=c},631:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"RECEIVE_NAV":return o({},e,{navMain:t.navMain});default:return o({},e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.nav=r;var a={navMain:[],current:1}},632:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;switch(arguments[1].type){case"RECEIVE_HOT_SEARCH":return o({},e);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.search=r;var a={hotData:[{id:1,text:"会计从业"},{id:2,text:"c语言程序设计"},{id:3,text:"高等数学"},{id:4,text:"JavaScript"},{id:5,text:"网页设计"},{id:6,text:"Photoshop"},{id:7,text:"英语四级"},{id:8,text:"线性代数"},{id:9,text:"公务员考试"}]}},633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NAV_IMAGE_1=1,t.NAV_IMAGE_2=2,t.NAV_IMAGE_3=3,t.NAV_IMAGE_4=4,t.NAV_IMAGE_5=5,t.NAV_IMAGE_6=6,t.NAV_IMAGE_7=7,t.NAV_IMAGE_8=8,t.NAV_IMAGE_9=9,t.SPECIAL_1=1,t.SPECIAL_2=2},634:function(e,t,n){n(239),e.exports=n(240)}},[634]);