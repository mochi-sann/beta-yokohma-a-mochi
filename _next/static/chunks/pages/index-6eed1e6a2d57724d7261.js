(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8482:function(r,e,t){"use strict";t.d(e,{E:function(){return f},d:function(){return h}});var n=t(63),i=t(8629),a=t(5505),o=t(3808),s=t(7294),l=t(8327);function c(){return(c=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function u(r,e){if(null==r)return{};var t,n,i={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(i[t]=r[t]);return i}var d=s.forwardRef(((r,e)=>{var{htmlWidth:t,htmlHeight:n,alt:i}=r,a=u(r,["htmlWidth","htmlHeight","alt"]);return s.createElement("img",c({width:t,height:n,ref:e,alt:i},a))})),f=(0,n.G)(((r,e)=>{var{fallbackSrc:t,fallback:n,src:o,align:f,fit:h,loading:g,ignoreFallback:p,crossOrigin:m}=r,b=u(r,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),v=null!=g||p,x=function(r){var{src:e,srcSet:t,onLoad:n,onError:i,crossOrigin:a,sizes:o,ignoreFallback:c}=r,[u,d]=(0,s.useState)("pending");(0,s.useEffect)((()=>{d(e?"loading":"pending")}),[e]);var f=(0,s.useRef)(),h=(0,s.useCallback)((()=>{if(e){g();var r=new Image;r.src=e,a&&(r.crossOrigin=a),t&&(r.srcset=t),o&&(r.sizes=o),r.onload=r=>{g(),d("loaded"),null==n||n(r)},r.onerror=r=>{g(),d("failed"),null==i||i(r)},f.current=r}}),[e,a,t,o,n,i]),g=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,l.G)((()=>{if(!c)return"loading"===u&&h(),()=>{g()}}),[u,h,c]),c?"loaded":u}(c({},r,{ignoreFallback:v})),j=c({ref:e,objectFit:h,objectPosition:f},v?b:(0,a.CE)(b,["onError","onLoad"]));return"loaded"!==x?n||s.createElement(i.m$.img,c({as:d,className:"chakra-image__placeholder",src:t},j)):s.createElement(i.m$.img,c({as:d,src:o,crossOrigin:m,loading:g,className:"chakra-image"},j))})),h=(0,n.G)(((r,e)=>s.createElement(i.m$.img,c({ref:e,as:d,className:"chakra-image"},r))));o.Ts&&(f.displayName="Image")},336:function(r,e,t){"use strict";t.d(e,{X:function(){return d}});var n=t(63),i=t(4915),a=t(5284),o=t(8629),s=t(4461),l=t(3808),c=t(7294);function u(){return(u=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}var d=(0,n.G)(((r,e)=>{var t=(0,i.m)("Heading",r),n=function(r,e){if(null==r)return{};var t,n,i={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(i[t]=r[t]);return i}((0,a.Lr)(r),["className"]);return c.createElement(o.m$.h2,u({ref:e,className:(0,s.cx)("chakra-heading",r.className)},n,{__css:t}))}));l.Ts&&(d.displayName="Heading")},4485:function(r,e,t){"use strict";t.d(e,{Z:function(){return o}});t(7294);var n=t(8017),i=t(336),a=t(5893),o=function(r){return(0,a.jsx)(n.xu,{py:"2",children:(0,a.jsx)(i.X,{p:"2",bg:"gray.200",children:r.children})})}},1993:function(r,e,t){"use strict";t(7294);var n=t(8482),i=t(5517),a=t(5893);e.Z=function(r){return(0,a.jsx)(n.E,{mt:"4",src:(0,i.Z)(r.img)})}},6269:function(r,e,t){"use strict";var n=t(1163),i=t(980);e.Z=function(r){var e=(0,n.useRouter)(),t=(0,i.useToast)(),a=r.nextPage;return{handleClick:function(r){r.isCorrect?(r.NotShowToast||t({title:r.CorrecttoastTitle||"\u6b63\u89e3\u3067\u3059!!!!!!!",description:r.CorrecttoastBody||null,status:"success",duration:3e3,isClosable:!0}),r.notPush&&(r.notPush||!r.nextPagePath&&!a)||e.push(r.nextPagePath||a)):t({title:"\u7b54\u3048\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",description:"\u3082\u3046\u4e00\u5ea6\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046",status:"error",duration:4e3,isClosable:!0})}}}},734:function(r,e,t){"use strict";t.r(e),t.d(e,{Home:function(){return N},default:function(){return E}});var n=t(7294),i=t(6269),a=t(8482),o=t(4115),s=t(3123),l=t(63),c=t(8629),u=t(3808);function d(){return(d=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}var f=(0,l.G)(((r,e)=>{var{direction:t,align:i,justify:a,wrap:o,basis:s,grow:l,shrink:u}=r,f=function(r,e){if(null==r)return{};var t,n,i={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(i[t]=r[t]);return i}(r,["direction","align","justify","wrap","basis","grow","shrink"]),h={display:"flex",flexDirection:t,alignItems:i,justifyContent:a,flexWrap:o,flexBasis:s,flexGrow:l,flexShrink:u};return n.createElement(c.m$.div,d({ref:e,__css:h},f))}));u.Ts&&(f.displayName="Flex");var h=t(8017),g=t(336),p=t(4915),m=t(5284),b=t(4461);function v(){return(v=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function x(r,e){if(null==r)return{};var t,n,i={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(i[t]=r[t]);return i}var j=(0,l.G)(((r,e)=>{var t=(0,p.m)("Divider",r),{borderLeftWidth:i,borderBottomWidth:a,borderTopWidth:o,borderRightWidth:s,borderWidth:l,borderStyle:u,borderColor:d}=t,f=x(t,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),h=(0,m.Lr)(r),{className:g,orientation:j="horizontal",__css:y}=h,k=x(h,["className","orientation","__css"]),O={vertical:{borderLeftWidth:i||s||l||"1px",height:"100%"},horizontal:{borderBottomWidth:a||o||l||"1px",width:"100%"}};return n.createElement(c.m$.hr,v({ref:e,"aria-orientation":j},k,{__css:v({},f,{border:"0",borderColor:d,borderStyle:u},O[j],y),className:(0,b.cx)("chakra-divider",g)}))}));u.Ts&&(j.displayName="Divider");var y=t(5893),k=function(r){return(0,y.jsx)(f,{py:"2",css:{gap:".5rem"},children:r.list.map((function(r){return(0,y.jsxs)(h.xu,{borderWidth:"2px",p:"2",w:"full",rounded:"md",children:[(0,y.jsx)(g.X,{as:"h3",p:"2",size:"lg",children:r.title}),(0,y.jsx)(j,{size:"lg"}),(0,y.jsx)(o.x,{p:"2",children:r.description})]},r.title)}))})},O=t(4485),_=t(1993),w=t(5517),N=function(){var r=(0,i.Z)({nextPage:"/page1"}).handleClick;return(0,y.jsxs)("div",{children:[(0,y.jsx)(a.d,{src:(0,w.Z)("/ogp/Titleimg.png"),mt:"2"}),(0,y.jsx)(O.Z,{children:"\u30b9\u30c8\u30fc\u30ea\u30fc"}),(0,y.jsxs)(o.x,{py:"2",children:["\u3068\u3042\u308b\u5c0f\u5b66\u6821\u304c\u7d0d\u8c46(\u306a\u3063\u3068\u3046)\u5de5\u5834\u306e\u5de5\u5834\u898b\u5b66\u3092\u7533\u3057\u8fbc\u3093(\u3082\u3046\u3057\u3053\u3093)\u3060\u3002\u7d0d\u8c46(\u306a\u3063\u3068\u3046)\u5de5\u5834\u306f\u3088\u308a\u7f8e\u5473\u3057\u3044(\u304a\u3044\u3057\u3044)\u7d0d\u8c46(\u306a\u3063\u3068\u3046)\u3092\u4f5c\u308b\u305f\u3081\u306b\u3001\u65e5\u3005\u7d0d\u8c46\u83cc(\u306a\u3063\u3068\u3046\u304d\u3093)\u306e\u7814\u7a76(\u3051\u3093\u304d\u3085\u3046)\u3092\u3057\u3066\u304a\u308a\u3001\u54c1\u7a2e(\u3072\u3093\u3057\u3085)\u6539\u826f(\u304b\u3044\u308a\u3087\u3046)\u3092\u884c\u3063\u3066\u3044\u304f\u3046\u3061\u306b\u7d0d\u8c46\u83cc(\u306a\u3063\u3068\u3046\u304d\u3093)\u304c\u304a\u304b\u3057\u306a\u884c\u52d5(\u3053\u3046\u3069\u3046)\u3092\u3068\u308b\u3053\u3068\u304c\u76ee\u6483(\u3082\u304f\u3052\u304d)\u3055\u308c\u3066\u3044\u308b\u3002\u5de5\u5834\u306f\u305d\u306e\u7d0d\u8c46\u83cc(\u306a\u3063\u3068\u3046\u304d\u3093)\u3092\u96a0\u3057(\u304b\u304f\u3057)\u3066\u3044\u308b\u5f8c\u308d\u3081\u305f\u3055\u304c\u3042\u308b\u304c\u3001\u516c\u8868(\u3053\u3046\u3072\u3087\u3046)\u3057\u3066\u3044\u306a\u3044\u305f\u3081\u65ad\u308b(\u3053\u3068\u308f\u308b)\u7406\u7531(\u308a\u3086\u3046)\u3082\u306a\u304f\u53d7\u3051\u5165\u308c(\u3046\u3051\u3044\u308c)\u305f\u3002"," ",(0,y.jsx)("br",{}),"\u5de5\u5834\u898b\u5b66\u304c\u3061\u3083\u304f\u3061\u3083\u304f\u3068\u9032\u3093(\u3059\u3059\u3093)\u3067\u3044\u304f\u4e2d\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u73ed(\u306f\u3093)\u306f\u96c6\u56e3(\u3057\u3085\u3046\u3060\u3093)\u3068\u96e2\u308c(\u306f\u306a\u308c)\u3066\u5de5\u5834\u306e\u63a2\u691c(\u305f\u3093\u3051\u3093)\u3092\u3057\u3066\u3057\u307e\u3046\u3002\u30d7\u30ec\u30a4\u30e4\u30fc\u306f\u3042\u308b\u7570\u5909(\u3044\u3078\u3093)\u306b\u6c17\u3065\u3044\u305f\u3002\u5de5\u5834\u5185\u304c\u3069\u3093\u3069\u3093\u6691\u304f(\u3042\u3064\u304f)\u306a\u3063\u3066\u3044\u304f\u306e\u3060\u3002\u8010\u3048\u304c\u305f\u3044(\u305f\u3048\u304c\u305f\u3044)\u74b0\u5883(\u304b\u3093\u304d\u3087\u3046)\u306b\u306a\u3063\u3066\u3044\u304f\u306e\u3067\u6025\u3044(\u3044\u305d\u3044)\u3067\u96c6\u56e3(\u3057\u3085\u3046\u3060\u3093)\u3068\u5408\u6d41(\u3054\u3046\u308a\u3085\u3046)\u3057\u3088\u3046\u3068\u6c7a\u3081(\u304d\u3081)\u305f\u3068\u304d\u3001\u5974(\u3084\u3064)\u304c\u66b4\u308c\u3060\u3057(\u3042\u3070\u308c\u3060\u3057)\u305f\u3002"]}),(0,y.jsx)(O.Z,{children:"\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3059\u308b\u524d\u306b"}),(0,y.jsx)(k,{list:[{title:"\u7d19\u3068\u30da\u30f3\u3092\u7528\u610f(\u3088\u3046\u3044)\u3057\u3088\u3046\uff01",description:"\u30e1\u30e2\u3092\u3068\u308b\u305f\u3081\u306e\u7d19\u3068\u7b46\u8a18\u7528\u5177(\u3072\u3063\u304d\u3088\u3046\u3050)\u3092\u304a\u624b\u5143\u306b\u3054\u6e96\u5099(\u3054\u3058\u3085\u3093\u3073)\u304f\u3060\u3055\u3044\u3002"},{title:"\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3061\u3083\u3093\u3068\u53d6\u308d(\u3068\u308d)\u3046",description:"2\u4eba\u3067\u30b2\u30fc\u30e0\u3092\u9032\u3081(\u3059\u3059\u3081)\u3066\u3044\u304f\u306e\u3067\u3001\u60c5\u5831(\u3058\u3087\u3046\u307b\u3046)\u5171\u6709(\u304d\u3087\u3046\u3086\u3046)\u306f\u3057\u3063\u304b\u308a\u3068\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"}]}),(0,y.jsx)(_.Z,{img:"/StageAssets/index/image2.png"}),(0,y.jsxs)(s.z,{mt:"2",variant:"black",w:"full",onClick:function(){r({isCorrect:!0,NotShowToast:!0})},children:["\u6e96\u5099(\u3058\u3085\u3093\u3073)OK\uff1f\u3067\u306f\u3001\u30b2\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8\uff01\uff01\uff01"," "]})]})},E=N},5301:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(734)}])}},function(r){r.O(0,[774,398,888,179],(function(){return e=5301,r(r.s=e);var e}));var e=r.O();_N_E=e}]);