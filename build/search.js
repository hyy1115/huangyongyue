webpackJsonp([0],{148:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,u,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(0),d=r(f),p=n(6),y=n(10),m=n(2),_=r(m),h=n(150),b=n(31),v=r(b),g=n(151),w=r(g),E=n(154),O=r(E);n(155);var j=(i=(0,y.connect)(function(e){return s({},e.search)},function(e){return(0,p.bindActionCreators)({receiveHotSearch:h.receiveHotSearch},e)}))(u=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.upDateValue=function(e){n.setState({currentHot:e})},n.hotClick=function(e){n.setState(function(){return{currentHot:e}})},n.state={currentHot:""},n}return l(t,e),c(t,[{key:"componentWillMount",value:function(){console.log("进入搜索页面"),this.props.receiveHotSearch()}},{key:"render",value:function(){var e=this,t=this.props.hotData,n=void 0===t?[]:t,r=this.state.currentHot;return d.default.createElement("div",{style:{height:"100vh"}},d.default.createElement(w.default,{currentHot:r,upDateValue:this.upDateValue}),d.default.createElement("div",null,d.default.createElement("p",{className:"search-hot-title"},d.default.createElement("i",{className:"fa fa-fire"}),d.default.createElement("span",null,"热门搜索")),d.default.createElement("p",{className:"style_div_p"},n.map(function(t,n){return d.default.createElement(O.default,{currentHot:r,hotClick:function(){return e.hotClick(t.text)},hotText:t.text,key:n})}))))}}]),t}(d.default.Component))||u;j.propTypes={hotData:_.default.array},t.default=(0,v.default)(j,"搜索")},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.receiveHotSearch=function(){return{type:"RECEIVE_HOT_SEARCH"}}},151:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(2),f=r(s),d=n(11),p=r(d),y=n(152),m=n(153),_=function(e){function t(){var e,n,r,l;o(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleChange=function(e){r.props.upDateValue(e.target.value)},l=n,a(r,l)}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props.currentHot;return c.default.createElement("div",{className:"style_body"},c.default.createElement("div",{className:"style_main"},c.default.createElement(p.default,{className:"style_a",to:"/"},c.default.createElement("img",{className:"style_a_img",src:y})),c.default.createElement("div",{className:"style_div_content"},c.default.createElement("img",{className:"style_div_img",src:m}),c.default.createElement("input",{className:"style_div_input",onChange:this.handleChange,placeholder:"搜索书名",type:"text",value:e})),c.default.createElement(p.default,{className:"style_right_a",to:"/search"},"搜索")))}}]),t}(c.default.Component);t.default=_,_.propTypes={currentHot:f.default.string.isRequired,upDateValue:f.default.func.isRequired}},152:function(e,t,n){e.exports=n.p+"files/2AYAHGCDwy.png"},153:function(e,t,n){e.exports=n.p+"files/22GwDn0AM0.png"},154:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),l=n(2),i=r(l),u=function(e){var t=e.hotText,n=e.hotClick,r=e.currentHot;return a.default.createElement("a",{className:"style_span",onClick:n,style:{color:r===t?"#398cee":""}},t)};u.propTypes={hotText:i.default.string,hotClick:i.default.func,currentHot:i.default.string},t.default=u},155:function(e,t,n){var r=n(156);"string"==typeof r&&(r=[[e.i,r,""]]);n(147)(r,{});r.locals&&(e.exports=r.locals)},156:function(e,t,n){t=e.exports=n(146)(),t.push([e.i,".style_body{background:#fff;width:100%;border-bottom:1px solid #eee}.style_body .style_main{padding-top:.833rem;padding-bottom:.833rem;display:flex;align-items:center}.style_body .style_main .style_a{width:4rem;height:2.0833rem;display:inline-flex;text-decoration:none;justify-content:center}.style_body .style_main .style_a .style_a_img{width:auto;height:2.0833rem}.style_body .style_main .style_div_content{width:18rem;position:relative}.style_body .style_main .style_div_content .style_div_img{position:absolute;left:.1667rem;width:2.0833rem;height:auto;top:.36rem}.style_body .style_main .style_div_content .style_div_input{width:14.5rem;border:1px solid #efefef;background:#efefef;padding:.5833rem .5rem .41667rem 2.3rem;border-radius:2.0833rem;outline:none;font-size:1.2rem}.style_body .style_main .style_right_a{width:4rem;text-align:center;font-size:1.3rem;color:#3c3c3c;text-decoration:none}.style_div_p{padding:.833rem 1.25rem}.style_div_p .style_span{display:inline-block;background:#f4f4f4;padding:.41667rem .833rem;margin-right:1rem;margin-bottom:.833rem;color:#444}.search-hot-title{padding:.833rem 1.25rem 0;font-size:1.2rem}.search-hot-title i{color:#646464}.search-hot-title span{margin-left:.5rem;color:#646464}",""])}});
//# sourceMappingURL=search.js.map