"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[746],{6356:function(e,t,n){var r=n(7294),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={progress:0},n.styles={position:"fixed",top:n.props.top,left:"0",width:"100%",height:n.props.height,opacity:n.props.opacity,zIndex:n.props.zIndex,filter:n.props.shadow?"drop-shadow(0 0 .1em "+n.props.color+")":"none",background:"linear-gradient(to right, "+n.props.color+" var(--scroll), transparent 0)"},n.setProgress=n.setProgress.bind(n),n.getPercentageScroll=n.getPercentageScroll.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getPercentageScroll",value:function(e){return e/(document.body.clientHeight-document.documentElement.clientHeight)*100}},{key:"setProgress",value:function(){var e=this.getPercentageScroll(window.scrollY);this.setState({progress:e})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.setProgress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.setProgress)}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className;return r.createElement("div",{className:"snakke-progress "+n,style:a({"--scroll":this.state.progress+"%"},this.styles,t)})}}]),t}(r.Component);c.defaultProps={color:"#000",height:"5px",opacity:"1",zIndex:"9999",shadow:!1,top:"0"},t.Z=c},7209:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o=n(5444),a=function(e){var t=e.open,n=e.setOpen;return r.createElement("button",{className:t?"open":"hidden",onClick:function(){return n(!t)}},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))},c=function(e){var t=e.open;return r.createElement("nav",{className:t?"open":"hidden"},r.createElement("a",null,r.createElement(o.Link,{className:"animate__animated animate__fadeIn",to:"/"},"Home")),r.createElement("a",null,r.createElement(o.Link,{className:"animate__animated animate__fadeIn",to:"/about"},"About")),r.createElement("a",null,r.createElement(o.Link,{className:"animate__animated animate__fadeIn",to:"/resume"},"Resume")))},i=function(e){var t=e.location,n=(0,r.useState)(!1),i=n[0],l=n[1],u=null==t?void 0:t.pathname;return r.createElement("header",{className:"header sticky",id:"header"},r.createElement("div",null,r.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ5IiBoZWlnaHQ9IjE1NCIgdmlld0JveD0iMCAwIDE0OSAxNTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNDkgNjQuMDk0NVYzNi4xOTY3SDExOC4wNzZWNC4wMjU3MWUtMDVDMTAyLjU0OSA0LjAyNTcxZS0wNSA4OS45NjI0IDQuMDI1NzFlLTA1IDg5Ljk2MjQgNC4wMjU3MWUtMDVWMzYuMTk2N1Y2NC4wOTQ1Vjk0Ljc4MTdDODkuOTYyNCA5NC43ODIyIDg5Ljk2MjQgOTQuNzgyMiA4OS45NjI0IDk0Ljc4MjdDODkuOTYxOSAxMTEuNzMxIDc2LjExNjYgMTI1LjQ2OSA1OS4wMzc2IDEyNS40NjlDNDEuOTU4NiAxMjUuNDY5IDI4LjExMzMgMTExLjczIDI4LjExMzMgOTQuNzgxN0MyOC4xMTMzIDkzLjEwNzEgMjguMjUzNSA5MS40NjQ5IDI4LjUxMzcgODkuODYyNkMzMC44ODY5IDc1LjI1MzcgNDMuNjQ3IDY0LjA5NDUgNTkuMDM3NiA2NC4wOTQ1SDg1LjA0MjhWMzYuMTk2N0g1OS4wMzc2QzI4LjE1MzYgMzYuMTk2NyAyLjczNjMgNTkuODUyMyAwLjIxMDA2OSA4OS44NjI2QzAuMDczMzAzNSA5MS40ODUxIDAgOTMuMTI0OCAwIDk0Ljc4MTdDMCAxMjcuMDg2IDI2LjQ4NDQgMTUzLjM2NyA1OS4wMzc2IDE1My4zNjdDNzcuMDUxOCAxNTMuMzY3IDkzLjIwNCAxNDUuMzE3IDEwNC4wNDIgMTMyLjY1NEMxMDUuMTE5IDEzMy45MDMgMTA2LjI1MiAxMzUuMTAzIDEwNy40MzEgMTM2LjI1OUMxMTAuNjQgMTM5LjQwOSAxMTQuMjA4IDE0Mi4yMTEgMTE4LjA3NiAxNDQuNTk5QzEyNy4wNzUgMTUwLjE1NSAxMzcuNjY5IDE1My4zNjcgMTQ5IDE1My4zNjdWMTI1LjI1M0MxMzYuOTcxIDEyNS4yNTMgMTI2LjU1NSAxMTguNjA2IDEyMS40NDEgMTA4LjcxMUMxMTkuMjk0IDEwNC41NTYgMTE4LjA3NiA5OS44MzI3IDExOC4wNzYgOTQuNzgxN1Y2NC4wOTQ1SDE0OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xMDhfMTEzKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzEwOF8xMTMiIHgxPSI3NC41IiB5MT0iMTUzLjM2NyIgeDI9Ijc0LjUiIHkyPSI0LjU3NzY0ZS0wNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzMyQkRCIi8+CjxzdG9wIG9mZnNldD0iMC41MTA0MTciIHN0b3AtY29sb3I9IiM2RDM2QkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjk4OTU4MyIgc3RvcC1jb2xvcj0iI0FEMzJCMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=",className:"logo "+(i?"white":""),alt:"",onClick:function(){return(0,o.navigate)("/")}}),r.createElement("ul",{className:"navigation"},r.createElement("li",{className:"/"===u?"active":""},r.createElement(o.Link,{to:"/"},"Home")),r.createElement("li",{className:"/about"===u||"/about/"===u?"active":""},r.createElement(o.Link,{to:"/about"},"About")),r.createElement("li",{className:"/resume"===u||"/resume/"===u?"active":""},r.createElement(o.Link,{to:"/resume"},"Resume"))),r.createElement("div",{className:"burgerMenuNavigation"},r.createElement(a,{open:i,setOpen:l}),r.createElement(c,{open:i,setOpen:l}))))}},6825:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(7294);n(6356),n(7209),n(1946);function o(e){e.title,e.colors;return r.createElement("div",null)}},1946:function(e,t,n){t.Z=n.p+"static/timeSeriesHeaderCrop-ddf213010c67e33582d150445571e218.png"}}]);
//# sourceMappingURL=component---src-pages-project-js-a357e6409265ce918509.js.map