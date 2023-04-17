"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[682],{3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return w},S:function(){return q},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,p=["children"],m=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,p);return r.createElement(r.Fragment,null,r.createElement(m,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=s(e,h);return r.createElement("img",o({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},y=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,f),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(v,o({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,a=s(e,b);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(u=y.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var A,S,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:L},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],I=new Set,k=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,p=e.class,m=e.onStartLoad,g=e.onLoad,h=e.onError,f=s(e,x),v=i.width,y=i.height,b=i.layout,w=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,b),E=w.style,L=w.className,C=s(w,T),k=(0,r.useRef)(),O=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(u=p);var N=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,v,y);return(0,r.useEffect)((function(){A||(A=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return S=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=k.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(O)):S&&I.has(O)?void 0:(A.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;k.current&&(k.current.innerHTML=r(o({isLoading:!0,isLoaded:I.has(O),image:i},f)),I.has(O)||(e=requestAnimationFrame((function(){k.current&&(t=n(k.current,O,I,c,m,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){I.has(O)&&S&&(k.current.innerHTML=S(o({isLoading:I.has(O),isLoaded:I.has(O),image:i},f)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},C,{style:o({},E,c,{backgroundColor:d}),className:L+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(k,e):null}));O.propTypes=C,O.displayName="GatsbyImage";var N,Q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],G=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:L,width:G,height:G,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(N=O,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,Q);return n&&console.warn(n),a?r.createElement(N,o({image:a},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=j},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},4521:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(1082),n=a(7791),i=a(6162),o=a(7294),s=function(e){var t=e.image,a=e.caption;return o.createElement("div",null,o.createElement(i.Z,{fluid:Object.assign({},t,{aspectRatio:1}),style:{margin:"20px 20px 20px 0",border:"solid 20px white",borderTopWidth:"40px",borderBottomWidth:"80px",boxShadow:"0 4px 4px 1px rgba(34, 52, 88, 0.15)"}}),o.createElement("figcaption",{className:"caption"},a))},l=a(3723);function c(e){var t=e.location,i=(0,r.useStaticQuery)("4055125070");return o.createElement(n.Z,{location:t},o.createElement("div",{className:"about-me-page content animate__animated animate__fadeIn"},o.createElement(l.S,{src:"../images/me.png",alt:"Picture with me",placeholder:"blurred",layout:"constrained",width:500,height:660,style:{borderRadius:"16px"},__imageData:a(7218)}),o.createElement("div",{className:"about-me-text"},o.createElement("h1",null,"Hi, I'm Diana, a passionate UX designer with background in frontend development."),o.createElement("p",null,"With a foundation in frontend development, I've always had a keen interest in how users perceive and interact with web interfaces. This curiosity led me to transition from frontend development to UX design, where I've been able to combine my technical skills with my creativity to craft meaningful, user-centered solutions."),o.createElement("p",null,"Through my experience, I gained a deep understanding of how to build pixel-perfect, responsive applications in HTML, CSS and Javascript, while always being particularly drawn to the human side of technology."),o.createElement("p",null,"Currently, I work as a UX engineer at Google, where I build high-fidelity prototypes for travellers and perform large-scale user studies that validate early concepts and explore new ideas."),o.createElement("p",null,"Send me a message if you would like to connect 😄",o.createElement("br",null),o.createElement("a",{href:"mailto:dianatofan.dt@gmail.com?Subject=Hello",target:"_top"},"E-mail")," / ",o.createElement("a",{href:"https://linkedin.com/in/diana-tofan",target:"_blank",rel:"noreferrer"},"Linkedin")))),o.createElement("section",{className:"instaPics animate__animated animate__fadeIn animate__delay-1s"},o.createElement("h2",null,"When I'm not in front of the computer, I..."),o.createElement("div",{className:"picsGrid"},o.createElement(s,{image:i.running.childImageSharp.fluid,caption:"go for a run"}),o.createElement(s,{image:i.mountain.childImageSharp.fluid,caption:"explore the world"}),o.createElement(s,{image:i.sunset.childImageSharp.fluid,caption:"watch the sunset"})),o.createElement("h2",null,"Things that inspire me"),o.createElement("div",{className:"picsGrid"},o.createElement(s,{image:i.art.childImageSharp.fluid,caption:"street art"}),o.createElement(s,{image:i.butterflies.childImageSharp.fluid,caption:"museums"}),o.createElement(s,{image:i.architecture.childImageSharp.fluid,caption:"architecture"}))))}},7218:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,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"},"images":{"fallback":{"src":"/static/aa1a42ee3b067d6078495fe43138c7b3/b27b7/me.png","srcSet":"/static/aa1a42ee3b067d6078495fe43138c7b3/f76c2/me.png 125w,\\n/static/aa1a42ee3b067d6078495fe43138c7b3/5f42e/me.png 250w,\\n/static/aa1a42ee3b067d6078495fe43138c7b3/b27b7/me.png 500w,\\n/static/aa1a42ee3b067d6078495fe43138c7b3/89857/me.png 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/static/aa1a42ee3b067d6078495fe43138c7b3/bef12/me.webp 125w,\\n/static/aa1a42ee3b067d6078495fe43138c7b3/bcad6/me.webp 250w,\\n/static/aa1a42ee3b067d6078495fe43138c7b3/7a80e/me.webp 500w,\\n/static/aa1a42ee3b067d6078495fe43138c7b3/124ef/me.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":660}')}}]);
//# sourceMappingURL=component---src-pages-about-js-9c14e5281bc79b849754.js.map