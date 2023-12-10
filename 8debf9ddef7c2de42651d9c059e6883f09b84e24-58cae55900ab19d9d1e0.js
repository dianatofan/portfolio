"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[391],{9281:function(t,e,n){n.d(e,{Z:function(){return b}});var o=n(3433),i=n(5671),r=n(3144);var s=!1;if("undefined"!=typeof window){var a={get passive(){s=!0}};window.addEventListener("testPassive",null,a),window.removeEventListener("testPassive",null,a)}var c="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],d=!1,u=-1,h=void 0,p=void 0,v=function(t){return l.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},f=function(t){var e=t||window.event;return!!v(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},g=function(){void 0!==p&&(document.body.style.paddingRight=p,p=void 0),void 0!==h&&(document.body.style.overflow=h,h=void 0)},m=function(t,e){if(t){if(!l.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};l=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(l),[n]),c?(t.ontouchstart=function(t){1===t.targetTouches.length&&(u=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&function(t,e){var n=t.targetTouches[0].clientY-u;!v(t.target)&&(e&&0===e.scrollTop&&n>0||function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight}(e)&&n<0?f(t):t.stopPropagation())}(e,t)},d||(document.addEventListener("touchmove",f,s?{passive:!1}:void 0),d=!0)):function(t){if(void 0===p){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;e&&n>0&&(p=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===h&&(h=document.body.style.overflow,document.body.style.overflow="hidden")}(e)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},w=function(t){t?(l=l.filter((function(e){return e.targetElement!==t})),c?(t.ontouchstart=null,t.ontouchmove=null,d&&0===l.length&&(document.removeEventListener("touchmove",f,s?{passive:!1}:void 0),d=!1)):l.length||g()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},y=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,i.Z)(this,t);var o={controlColor:"#FFFFFF",controlShadow:!0,addCircle:!1,addCircleBlur:!0,showLabels:!1,labelOptions:{before:"Before",after:"After",onHover:!1},smoothing:!0,smoothingAmount:100,hoverStart:!1,verticalMode:!1,startingPoint:50,fluidMode:!1};this.settings=Object.assign(o,n),this.safariAgent=-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome"),this.el=e,this.images={},this.wrapper=null,this.control=null,this.arrowContainer=null,this.arrowAnimator=[],this.active=!1,this.slideWidth=50,this.lineWidth=2,this.arrowCoordinates={circle:[5,3],standard:[8,0]}}return(0,r.Z)(t,[{key:"mount",value:function(){this.safariAgent&&(this.settings.smoothing=!1),this._shapeContainer(),this._getImages(),this._buildControl(),this._events()}},{key:"_events",value:function(){var t=this;this.el.addEventListener("mousedown",(function(e){t._activate(!0),document.body.classList.add("icv__body"),m(t.el,{reserveScrollBarGap:!0}),t._slideCompare(e)})),this.el.addEventListener("mousemove",(function(e){return t.active&&t._slideCompare(e)})),this.el.addEventListener("mouseup",(function(){return t._activate(!1)})),document.body.addEventListener("mouseup",(function(){document.body.classList.remove("icv__body"),w(t.el),t._activate(!1)})),this.control.addEventListener("touchstart",(function(e){t._activate(!0),document.body.classList.add("icv__body"),m(t.el,{reserveScrollBarGap:!0})})),this.el.addEventListener("touchmove",(function(e){t.active&&t._slideCompare(e)})),this.el.addEventListener("touchend",(function(){t._activate(!1),document.body.classList.remove("icv__body"),w(t.el)})),this.el.addEventListener("mouseenter",(function(){t.settings.hoverStart&&t._activate(!0);var e=t.settings.addCircle?t.arrowCoordinates.circle:t.arrowCoordinates.standard;t.arrowAnimator.forEach((function(n,o){n.style.cssText="\n        ".concat(t.settings.verticalMode?"transform: translateY(".concat(e[1]*(0===o?1:-1),"px);"):"transform: translateX(".concat(e[1]*(0===o?1:-1),"px);"),"\n        ")}))})),this.el.addEventListener("mouseleave",(function(){var e=t.settings.addCircle?t.arrowCoordinates.circle:t.arrowCoordinates.standard;t.arrowAnimator.forEach((function(n,o){n.style.cssText="\n        ".concat(t.settings.verticalMode?"transform: translateY(".concat(0===o?"".concat(e[0],"px"):"-".concat(e[0],"px"),");"):"transform: translateX(".concat(0===o?"".concat(e[0],"px"):"-".concat(e[0],"px"),");"),"\n        ")}))}))}},{key:"_slideCompare",value:function(t){var e=this.el.getBoundingClientRect(),n=void 0!==t.touches?t.touches[0].clientX-e.left:t.clientX-e.left,o=void 0!==t.touches?t.touches[0].clientY-e.top:t.clientY-e.top,i=this.settings.verticalMode?o/e.height*100:n/e.width*100;i>=0&&i<=100&&(this.settings.verticalMode?this.control.style.top="calc(".concat(i,"% - ").concat(this.slideWidth/2,"px)"):this.control.style.left="calc(".concat(i,"% - ").concat(this.slideWidth/2,"px)"),this.settings.fluidMode?this.settings.verticalMode?this.wrapper.style.clipPath="inset(0 0 ".concat(100-i,"% 0)"):this.wrapper.style.clipPath="inset(0 0 0 ".concat(i,"%)"):this.settings.verticalMode?this.wrapper.style.height="calc(".concat(i,"%)"):this.wrapper.style.width="calc(".concat(100-i,"%)"))}},{key:"_activate",value:function(t){this.active=t}},{key:"_shapeContainer",value:function(){var t=document.createElement("div"),e=document.createElement("span"),n=document.createElement("span");e.classList.add("icv__label","icv__label-before","keep"),n.classList.add("icv__label","icv__label-after","keep"),this.settings.labelOptions.onHover&&(e.classList.add("on-hover"),n.classList.add("on-hover")),this.settings.verticalMode&&(e.classList.add("vertical"),n.classList.add("vertical")),e.innerHTML=this.settings.labelOptions.before||"Before",n.innerHTML=this.settings.labelOptions.after||"After",this.settings.showLabels&&(this.el.appendChild(e),this.el.appendChild(n)),this.el.classList.add("icv",this.settings.verticalMode?"icv__icv--vertical":"icv__icv--horizontal",this.settings.fluidMode?"icv__is--fluid":"standard"),t.classList.add("icv__imposter"),this.el.appendChild(t)}},{key:"_buildControl",value:function(){var t=this,e=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");o.classList.add("icv__theme-wrapper");for(var r=0;r<=1;r++){var s=document.createElement("div"),a='<svg\n      height="15"\n      width="15"\n       style="\n       transform: \n       scale('.concat(this.settings.addCircle?.7:1.5,")  \n       rotateZ(").concat(0===r?this.settings.verticalMode?"-90deg":"180deg":this.settings.verticalMode?"90deg":"0deg","); height: ").concat("20","px; width: ").concat("20","px;\n       \n       ").concat(this.settings.controlShadow?"\n       -webkit-filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .33));\n       filter: drop-shadow( 0px ".concat(0===r?"-3px":"3px"," 5px rgba(0, 0, 0, .33));\n       "):"",'\n       "\n       xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 15 15">\n       <path ').concat(this.settings.addCircle?'fill="transparent"':'fill="'.concat(this.settings.controlColor,'"'),'\n       stroke="').concat(this.settings.controlColor,'"\n       stroke-linecap="round"\n       stroke-width="').concat(this.settings.addCircle?3:0,'"\n       d="M4.5 1.9L10 7.65l-5.5 5.4"\n       />\n     </svg>');s.innerHTML+=a,this.arrowAnimator.push(s),o.appendChild(s)}var c=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach((function(e,n){e.classList.add("icv__arrow-wrapper"),e.style.cssText="\n      ".concat(t.settings.verticalMode?"transform: translateY(".concat(0===n?"".concat(c[0],"px"):"-".concat(c[0],"px"),");"):"transform: translateX(".concat(0===n?"".concat(c[0],"px"):"-".concat(c[0],"px"),");"),"\n      ")})),e.classList.add("icv__control"),e.style.cssText="\n    ".concat(this.settings.verticalMode?"height":"width ",": ").concat(this.slideWidth,"px;\n    ").concat(this.settings.verticalMode?"top":"left ",": calc(").concat(this.settings.startingPoint,"% - ").concat(this.slideWidth/2,"px);\n    ").concat("ontouchstart"in document.documentElement?"":this.settings.smoothing?"transition: ".concat(this.settings.smoothingAmount,"ms ease-out;"):"","\n    "),n.classList.add("icv__control-line"),n.style.cssText="\n      ".concat(this.settings.verticalMode?"height":"width ",": ").concat(this.lineWidth,"px;\n      background: ").concat(this.settings.controlColor,";\n        ").concat(this.settings.controlShadow?"box-shadow: 0px 0px 15px rgba(0,0,0,0.33);":"","\n    ");var l=n.cloneNode(!0);i.classList.add("icv__circle"),i.style.cssText="\n\n      ".concat(this.settings.addCircleBlur&&"-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)",";\n      \n      border: ").concat(this.lineWidth,"px solid ").concat(this.settings.controlColor,";\n      ").concat(this.settings.controlShadow&&"box-shadow: 0px 0px 15px rgba(0,0,0,0.33)",";\n    "),e.appendChild(n),this.settings.addCircle&&e.appendChild(i),e.appendChild(o),e.appendChild(l),this.arrowContainer=o,this.control=e,this.el.appendChild(e)}},{key:"_getImages",value:function(){var t=this,e=this.el.querySelectorAll("img, .keep");this.el.innerHTML="",e.forEach((function(e){t.el.appendChild(e)}));var n=(0,o.Z)(e).filter((function(t){return"img"===t.nodeName.toLowerCase()}));this.settings.verticalMode&&n.reverse();for(var i=0;i<=1;i++){var r=n[i];if(r.classList.add("icv__img"),r.classList.add(0===i?"icv__img-a":"icv__img-b"),1===i){var s=document.createElement("div"),a=n[1].src;s.classList.add("icv__wrapper"),s.style.cssText="\n            width: ".concat(100-this.settings.startingPoint,"%; \n            height: ").concat(this.settings.startingPoint,"%;\n\n            ").concat("ontouchstart"in document.documentElement?"":this.settings.smoothing?"transition: ".concat(this.settings.smoothingAmount,"ms ease-out;"):"","\n            ").concat(this.settings.fluidMode&&"background-image: url(".concat(a,"); clip-path: inset(").concat(this.settings.verticalMode?" 0 0 ".concat(100-this.settings.startingPoint,"% 0"):"0 0 0 ".concat(this.settings.startingPoint,"%"),")"),"\n        "),s.appendChild(r),this.wrapper=s,this.el.appendChild(this.wrapper)}}if(this.settings.fluidMode){var c=n[0].src,l=document.createElement("div");l.classList.add("icv__fluidwrapper"),l.style.cssText="\n \n        background-image: url(".concat(c,");\n        \n      "),this.el.appendChild(l)}}}]),t}(),b=y},6356:function(t,e,n){var o=n(7294),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={progress:0},n.styles={position:"fixed",top:n.props.top,left:"0",width:"100%",height:n.props.height,opacity:n.props.opacity,zIndex:n.props.zIndex,filter:n.props.shadow?"drop-shadow(0 0 .1em "+n.props.color+")":"none",background:"linear-gradient(to right, "+n.props.color+" var(--scroll), transparent 0)"},n.setProgress=n.setProgress.bind(n),n.getPercentageScroll=n.getPercentageScroll.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"getPercentageScroll",value:function(t){return t/(document.body.clientHeight-document.documentElement.clientHeight)*100}},{key:"setProgress",value:function(){var t=this.getPercentageScroll(window.scrollY);this.setState({progress:t})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.setProgress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.setProgress)}},{key:"render",value:function(){var t=this.props,e=t.style,n=t.className;return o.createElement("div",{className:"snakke-progress "+n,style:r({"--scroll":this.state.progress+"%"},this.styles,e)})}}]),e}(o.Component);s.defaultProps={color:"#000",height:"5px",opacity:"1",zIndex:"9999",shadow:!1,top:"0"},e.Z=s},2361:function(t,e,n){n.d(e,{Z:function(){return h}});var o=n(7294);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=(0,o.forwardRef)((function(t,e){var n=t.color,s=void 0===n?"currentColor":n,a=t.size,c=void 0===a?24:a,l=r(t,["color","size"]);return o.createElement("svg",i({ref:e,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.createElement("polyline",{points:"6 9 12 15 18 9"}))}));s.displayName="ChevronDown";var a=s;function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},c.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=(0,o.forwardRef)((function(t,e){var n=t.color,i=void 0===n?"currentColor":n,r=t.size,s=void 0===r?24:r,a=l(t,["color","size"]);return o.createElement("svg",c({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.createElement("polyline",{points:"18 15 12 9 6 15"}))}));d.displayName="ChevronUp";var u=d;function h(){var t={cursor:"pointer",position:"fixed",right:"6vw",bottom:"40px",zIndex:999,background:"#373737",borderRadius:"50%",padding:"4px"},e=(0,o.useState)(!0),n=e[0],i=e[1],r=function(t){document.getElementById(t).scrollIntoView({behavior:"smooth"})},s=(0,o.useCallback)((function(){var t=window.pageYOffset;i(!(t>0))}),[]);return(0,o.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[s]),n?o.createElement(a,{size:32,color:"#fff",style:t,onClick:function(){return r("footer")}}):o.createElement(u,{size:32,color:"#fff",style:t,onClick:function(){return r("header")}})}},5671:function(t,e,n){function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:function(){return o}})},3144:function(t,e,n){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=8debf9ddef7c2de42651d9c059e6883f09b84e24-58cae55900ab19d9d1e0.js.map