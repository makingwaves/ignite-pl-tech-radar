(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4317)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,c=e.priority,u=void 0!==c&&c,h=e.loading,y=e.lazyRoot,S=void 0===y?null:y,z=e.lazyBoundary,I=void 0===z?"200px":z,_=e.className,L=e.quality,R=e.width,P=e.height,C=e.style,M=e.objectFit,N=e.objectPosition,q=e.onLoadingComplete,D=(e.onError,e.placeholder),U=void 0===D?"empty":D,T=e.blurDataURL,B=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","onError","placeholder","blurDataURL"]),W=s.useContext(g.ImageConfigContext),H=s.useMemo((function(){var e=b||W||d.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return m({},e,{allSizes:t,deviceSizes:n})}),[W]),F=B,K=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(K=F.layout),delete F.layout);var V=E;if("loader"in F){if(F.loader){var $=F.loader;V=function(e){e.config;var t=v(e,["config"]);return $(t)}}delete F.loader}var G="";if(function(e){return"object"===typeof e&&(A(e)||function(e){return void 0!==e.src}(e))}(t)){var J=A(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(T=T||J.blurDataURL,G=J.src,(!K||"fill"!==K)&&(P=P||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:G;var X=O(R),Q=O(P),Y=O(L),Z=!u&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(s.useState(!1),2),ne=te[0],re=te[1],ie=o(p.useIntersection({rootRef:S,rootMargin:I,disabled:!Z}),3),oe=ie[0],ae=ie[1],le=ie[2],ce=!Z||ae,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N};0;0;var pe=Object.assign({},C,"raw"===K?{aspectRatio:"".concat(X," / ").concat(Q)}:de),ge="blur"!==U||ne?{}:{filter:"blur(20px)",backgroundSize:M||"cover",backgroundImage:'url("'.concat(T,'")'),backgroundPosition:N||"0% 0%"};if("fill"===K)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Q){var he=Q/X,ye=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===K?(ue.display="block",ue.position="relative",fe=!0,se.paddingTop=ye):"intrinsic"===K?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===K&&(ue.display="inline-block",ue.position="relative",ue.width=X,ue.height=Q)}else 0;var me={src:j,srcSet:void 0,sizes:void 0};ce&&(me=x({config:H,src:t,unoptimized:l,layout:K,width:X,quality:Y,sizes:n,loader:V}));var ve=t;0;var be,we="imagesrcset",je="imagesizes";we="imageSrcSet",je="imageSizes";var Se=(i(be={},we,me.srcSet),i(be,je,me.sizes),be),Ae=s.default.useLayoutEffect,xe=s.useRef(q),Oe=s.useRef(t);s.useEffect((function(){xe.current=q}),[q]),Ae((function(){Oe.current!==t&&(le(),Oe.current=t)}),[le,t]);var Ee=m({isLazy:Z,imgAttributes:me,heightInt:Q,widthInt:X,qualityInt:Y,layout:K,className:_,imgStyle:pe,blurStyle:ge,loading:h,config:H,unoptimized:l,placeholder:U,loader:V,srcString:ve,onLoadingCompleteRef:xe,setBlurComplete:re,setIntersection:oe,isVisible:ce},F);return s.default.createElement(s.default.Fragment,null,"raw"===K?s.default.createElement(k,Object.assign({},Ee)):s.default.createElement("span",{style:ue},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(k,Object.assign({},Ee))),u?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},Se))):null)};var c,u,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),f=(c=n(3121))&&c.__esModule?c:{default:c},d=n(139),p=n(9246),g=n(8730),h=(n(670),n(2700));function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){y(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(I(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(I(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(I(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function A(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,l=e.quality,c=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(r);l)u.push(parseInt(l[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,c),f=s.widths,d=s.kind,p=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(e,r){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:u({config:t,src:n,quality:l,width:f[p]})}}function O(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=S.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function z(e,t,n,r,i,o){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,d=e.loading,p=e.srcString,g=e.config,h=e.unoptimized,y=e.loader,b=e.onLoadingCompleteRef,w=e.setBlurComplete,j=e.setIntersection,S=e.onError,A=(e.isVisible,v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},A,t,"raw"!==o||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,className:a,style:m({},l,c),ref:s.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&z(e,p,0,f,b,w)}),[j,p,o,f,b,w]),onLoad:function(e){z(e.currentTarget,p,0,f,b,w)},onError:function(e){"blur"===f&&w(!0),S&&S(e)}})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},A,x({config:g,src:p,unoptimized:h,layout:o,width:r,quality:i,sizes:t.sizes,loader:y}),"raw"!==o||t.sizes?{}:{height:n,width:r},{decoding:"async","data-nimg":o,style:l,className:a,loading:d||"lazy"}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},l=n(1003),c=n(880),u=n(9246);var s={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),o=a.default.useMemo((function(){var t=i(l.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,p=o.as,g=a.default.useRef(d),h=a.default.useRef(p),y=e.children,m=e.replace,v=e.shallow,b=e.scroll,w=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var j=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,S=i(u.useIntersection({rootMargin:"200px"}),3),A=S[0],x=S[1],O=S[2],E=a.default.useCallback((function(e){h.current===p&&g.current===d||(O(),h.current=p,g.current=d),A(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,O,A]);a.default.useEffect((function(){var e=x&&n&&l.isLocalURL(d),t="undefined"!==typeof w?w:r&&r.locale,i=s[d+"%"+p+(t?"%"+t:"")];e&&!i&&f(r,d,p,{locale:t})}),[p,d,x,w,n,r]);var z={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:a}))}(e,r,d,p,m,v,b,w)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof w?w:r&&r.locale,I=r&&r.isLocaleDomain&&l.getDomainLocale(p,k,r&&r.locales,r&&r.domainLocales);z.href=I||l.addBasePath(l.addLocale(p,k,r&&r.defaultLocale))}return a.default.cloneElement(t,z)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=o.useRef(),f=i(o.useState(!1),2),d=f[0],p=f[1],g=i(o.useState(t?t.current:null),2),h=g[0],y=g[1],m=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]),v=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!l&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&y(t.current)}),[t]),[m,d,v]};var o=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4317:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),i=(n(6774),n(5675)),o=n.n(i),a=n(1664),l=n.n(a),c=n(593),u=n.n(c),s=n(1163),f=n(9008),d=function(e){var t=e.title,n=e.description;return(0,r.jsxs)(f.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.svg"})]})};function p(e){var t=e.children,n=e.radar,i=e.sidebarRoutes,a=void 0===i?[]:i,c=(0,s.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(d,{title:(null===n||void 0===n?void 0:n.name)||"",description:(null===n||void 0===n?void 0:n.description)||""}),(0,r.jsxs)("header",{children:[(0,r.jsx)(o(),{src:"/logo.svg",alt:"NoA Ignite Logo",width:200,height:70}),(0,r.jsx)("h1",{children:(null===n||void 0===n?void 0:n.title)||""})]}),(0,r.jsxs)("main",{children:[(0,r.jsx)("aside",{children:(0,r.jsx)("nav",{children:a.map((function(e){return(0,r.jsx)(l(),{href:e.path,children:(0,r.jsx)("a",{className:c.asPath===e.path?u()["link-active"]:u().link,children:(null===e||void 0===e?void 0:e.name)||""})},e.name)}))})}),t]})]})}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}var y=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(p,h({},n,{children:(0,r.jsx)(t,h({},n))}))}},593:function(e){e.exports={link:"Layout_link__spTtd","link-active":"Layout_link-active__K15bj"}},6774:function(){},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(880)}));var n=e.O();_N_E=n}]);