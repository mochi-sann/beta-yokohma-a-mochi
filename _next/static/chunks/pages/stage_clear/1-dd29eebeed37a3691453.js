(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{8482:function(e,t,r){"use strict";r.d(t,{E:function(){return g},d:function(){return d}});var n=r(63),a=r(8629),o=r(5505),c=r(3808),i=r(7294),l=r(8327);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var f=i.forwardRef(((e,t)=>{var{htmlWidth:r,htmlHeight:n,alt:a}=e,o=u(e,["htmlWidth","htmlHeight","alt"]);return i.createElement("img",s({width:r,height:n,ref:t,alt:a},o))})),g=(0,n.G)(((e,t)=>{var{fallbackSrc:r,fallback:n,src:c,align:g,fit:d,loading:h,ignoreFallback:p,crossOrigin:m}=e,v=u(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),b=null!=h||p,O=function(e){var{src:t,srcSet:r,onLoad:n,onError:a,crossOrigin:o,sizes:c,ignoreFallback:s}=e,[u,f]=(0,i.useState)("pending");(0,i.useEffect)((()=>{f(t?"loading":"pending")}),[t]);var g=(0,i.useRef)(),d=(0,i.useCallback)((()=>{if(t){h();var e=new Image;e.src=t,o&&(e.crossOrigin=o),r&&(e.srcset=r),c&&(e.sizes=c),e.onload=e=>{h(),f("loaded"),null==n||n(e)},e.onerror=e=>{h(),f("failed"),null==a||a(e)},g.current=e}}),[t,o,r,c,n,a]),h=()=>{g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return(0,l.G)((()=>{if(!s)return"loading"===u&&d(),()=>{h()}}),[u,d,s]),s?"loaded":u}(s({},e,{ignoreFallback:b})),y=s({ref:t,objectFit:d,objectPosition:g},b?v:(0,o.CE)(v,["onError","onLoad"]));return"loaded"!==O?n||i.createElement(a.m$.img,s({as:f,className:"chakra-image__placeholder",src:r},y)):i.createElement(a.m$.img,s({as:f,src:c,crossOrigin:m,loading:h,className:"chakra-image"},y))})),d=(0,n.G)(((e,t)=>i.createElement(a.m$.img,s({ref:t,as:f,className:"chakra-image"},e))));c.Ts&&(g.displayName="Image")},336:function(e,t,r){"use strict";r.d(t,{X:function(){return f}});var n=r(63),a=r(4915),o=r(5284),c=r(8629),i=r(4461),l=r(3808),s=r(7294);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=(0,n.G)(((e,t)=>{var r=(0,a.m)("Heading",e),n=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}((0,o.Lr)(e),["className"]);return s.createElement(c.m$.h2,u({ref:t,className:(0,i.cx)("chakra-heading",e.className)},n,{__css:r}))}));l.Ts&&(f.displayName="Heading")},1805:function(e,t,r){"use strict";var n=r(2809),a=r(3123),o=(r(7294),r(6269)),c=r(9583),i=r(5893);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=(0,o.Z)({}).handleClick,r=e.Nextpath;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.z,s(s({fontSize:"lg",py:"6",w:"full",variant:"black",rightIcon:(0,i.jsx)(c.Z1Y,{}),onClick:function(){t({nextPagePath:r,isCorrect:!0,NotShowToast:!0})},variantColor:"green"},e),{},{children:"\u6b21(\u3064\u304e)\u306e\u30b9\u30c6\u30fc\u30b8\u306b\u79fb\u52d5(\u3044\u3069\u3046)"}))})}},6269:function(e,t,r){"use strict";var n=r(1163),a=r(980);t.Z=function(e){var t=(0,n.useRouter)(),r=(0,a.useToast)(),o=e.nextPage;return{handleClick:function(e){e.isCorrect?(e.NotShowToast||r({title:e.CorrecttoastTitle||"\u6b63\u89e3\u3067\u3059!!!!!!!",description:e.CorrecttoastBody||null,status:"success",duration:3e3,isClosable:!0}),e.notPush&&(e.notPush||!e.nextPagePath&&!o)||t.push(e.nextPagePath||o)):r({title:"\u7b54\u3048\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",description:"\u3082\u3046\u4e00\u5ea6\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046",status:"error",duration:4e3,isClosable:!0})}}}},1847:function(e,t,r){"use strict";r.r(t),r.d(t,{Home:function(){return u}});var n=r(8482),a=r(8017),o=r(4115),c=r(336),i=(r(7294),r(1805)),l=r(5517),s=r(5893),u=function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.xu,{py:"4",children:[(0,s.jsxs)(o.x,{children:["STAGE:1 \u30af\u30ea\u30a2! \u7b54\u3048\u306f\u300c\u3046\u307e\u300d ",(0,s.jsx)("br",{}),"\u99ac\u306e\u990c(\u3048\u3055)\u306b\u3057\u3066\u3044\u305f\u716e\u8c46(\u306b\u307e\u3081)\u3092\u308f\u3089\u3067\u5305\u3093(\u3064\u3064\u3093)\u3067\u6301\u3061\u6b69\u3044(\u3082\u3061\u3042\u308b\u3044)\u3066\u3044\u305f\u3089\u3001\u6e29\u307e\u3063(\u3042\u305f\u305f\u307e\u3063)\u3066\u767a\u9175(\u306f\u3063\u3053\u3046)\u3057\u3001\u7cf8\u3092\u5f15\u3044\u3066\u3044\u307e\u3057\u305f\u3002\u8a66\u3057\u306b(\u305f\u3081\u3057\u306b)\u98df\u3079\u3066\u307f\u305f\u3089\u7f8e\u5473\u3057\u304b\u3063(\u304a\u3044\u3057\u304b\u3063)\u305f\u305f\u3081\u3001\u7d0d\u8c46(\u306a\u3063\u3068\u3046)\u304c\u3067\u304d\u305f\u3068\u8a00\u308f\u308c\u3066\u3044\u307e\u3059\u3002 \u5de5\u5834\u306e\u5730\u56f3\u3092\u624b\u306b\u5165\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u305f\uff01 \u5de5\u5834\u3092\u51fa\u308b\u306b\u306f\u3001\u5168\u3066(\u3059\u3079\u3066)\u306e\u30eb\u30fc\u30c8\u3092\u901a\u3089\u306a\u304f\u3066\u306f\u3044\u3051\u306a\u3044\uff01 \u6025\u3044(\u3044\u305d\u3044)\u3067\u51fa\u53e3\u306b\u5411\u304b\u304a(\u3080\u304b\u304a)\u3046\uff01"]}),(0,s.jsx)(c.X,{children:"\u5de5\u5834\u306e\u5730\u56f3"}),(0,s.jsx)(n.d,{src:(0,l.Z)("/StageAssets/image2.png")})]}),(0,s.jsx)(i.Z,{Nextpath:"/page2"})]})};t.default=u},5744:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stage_clear/1",function(){return r(1847)}])},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return n.createElement(u,c({attr:c({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,l=e.title,s=i(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[774,445,398,888,179],(function(){return t=5744,e(e.s=t);var t}));var t=e.O();_N_E=t}]);