(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{4485:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});r(7294);var n=r(8017),i=r(336),c=r(5893),s=function(t){return(0,c.jsx)(n.xu,{py:"2",children:(0,c.jsx)(i.X,{p:"2",bg:"gray.200",children:t.children})})}},2107:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});r(7294);var n=r(8017),i=r(336),c=r(195),s=r(5893),o=function(t){return(0,s.jsx)(n.xu,{py:"4",children:(0,s.jsxs)(n.xu,{p:"4",mb:"2",bg:"gray.100",rounded:"lg",children:[(0,s.jsx)(i.X,{p:"2",py:"4",children:t.HintTitle||"\u30d2\u30f3\u30c8"}),(0,s.jsx)(c.UQ,{allowMultiple:!0,children:t.HintLists.map((function(t){return(0,s.jsxs)(c.Qd,{borderColor:"gray.400",children:[(0,s.jsx)("h2",{children:(0,s.jsxs)(c.KF,{children:[(0,s.jsx)(n.xu,{flex:"1",textAlign:"left",children:t.title}),(0,s.jsx)(c.XE,{})]})}),(0,s.jsx)(c.Hk,{pb:4,children:t.body})]},t.title)}))})]})})}},1993:function(t,e,r){"use strict";r(7294);var n=r(8482),i=r(5517),c=r(5893);e.Z=function(t){return(0,c.jsx)(n.E,{mt:"4",src:(0,i.Z)(t.img)})}},6885:function(t,e,r){"use strict";r.d(e,{Z:function(){return x}});var n=r(2809),i=r(2283),c=(r(7294),r(4848)),s=r(6618),o=r(70),u=r(3123),l=function(t){var e=t.CollectList,r=t.FormList,n=e.map((function(t){return t.correctText}));return JSON.stringify(n)==JSON.stringify(r)},a=r(6269),d=r(5893);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var x=function(t){var e=(0,i.cI)(),r=e.handleSubmit,n=e.register,f=e.formState.isSubmitting,x=(0,a.Z)({nextPage:t.nextPage||"/page1"}).handleClick;return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{onSubmit:r((function(e){console.log(e.name),console.log(t.correctList),x({isCorrect:l({CollectList:t.correctList,FormList:e.name})})})),children:[t.correctList.map((function(t,e){return(0,d.jsxs)(c.NI,{children:[(0,d.jsx)(s.l,{htmlFor:"name",fontWeight:"800",children:t.title}),(0,d.jsx)(o.I,h({id:"name.".concat(e),placeholder:t.title},n("name.".concat(e),{required:"\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093"})))]},e)})),(0,d.jsx)(u.z,{variant:"black",w:"full",mt:4,colorScheme:"blue",isLoading:f,type:"submit",children:"\u9001\u4fe1(\u305d\u3046\u3057\u3093)\u3059\u308b"})]})})}},6269:function(t,e,r){"use strict";var n=r(1163),i=r(980);e.Z=function(t){var e=(0,n.useRouter)(),r=(0,i.useToast)(),c=t.nextPage;return{handleClick:function(t){t.isCorrect?(t.NotShowToast||r({title:t.CorrecttoastTitle||"\u6b63\u89e3\u3067\u3059!!!!!!!",description:t.CorrecttoastBody||null,status:"success",duration:3e3,isClosable:!0}),t.notPush&&(t.notPush||!t.nextPagePath&&!c)||e.push(t.nextPagePath||c)):r({title:"\u7b54\u3048\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059",description:"\u3082\u3046\u4e00\u5ea6\u8003\u3048\u3066\u307f\u307e\u3057\u3087\u3046",status:"error",duration:4e3,isClosable:!0})}}}},7302:function(t,e,r){"use strict";r.r(e),r.d(e,{Home:function(){return l}});r(7294);var n=r(6885),i=r(2107),c=r(4485),s=r(4115),o=r(1993),u=r(5893),l=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)(c.Z,{children:"STAGE\uff1a1 \u3055\u3041\u30b2\u30fc\u30e0\u3092\u59cb\u3081\u3088(\u306f\u3058\u3081\u3088)\u3046\uff01"}),(0,u.jsx)(s.x,{children:"\u7d0d\u8c46(\u306a\u3063\u3068\u3046)\u304b\u3089\u3001\u9003\u3052(\u306b\u3052)\u3066\u3044\u308b\u9593\u306b\u8cc7\u6599(\u3057\u308a\u3087\u3046)\u5ba4\u306b\u5165\u3063\u305f\u3002 \u305d\u3053\u306b\u306f\u3001\u30d1\u30bd\u30b3\u30f3\u304c\u3042\u308a\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u308c\u308b\u3068\u5de5\u5834\u306e\u5730\u56f3\u3092\u624b\u306b\u5165\u308c\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002 \u4e0b\u306e\u753b\u50cf(\u304c\u305e\u3046)\u306e\u8b0e(\u306a\u305e)\u3092\u89e3\u304d(\u3068\u304d)\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u30ad\u30fc\u30ef\u30fc\u30c9\u6b04(\u3089\u3093)\u306b\u5165\u529b\u3057\u3088\u3046\u3002 \u56f0\u3063(\u3053\u307e\u3063)\u305f\u3068\u304d\u306f\u3001\u30d2\u30f3\u30c8\u304c\u3042\u308b\u3002\u306a\u308b\u3079\u304f\u898b\u306a\u3044\u3088\u3046\u306b\u30b2\u30fc\u30e0\u3092\u9032\u3081(\u3059\u3059\u3081)\u3066\u3044\u3053\u3046\u3002"}),(0,u.jsx)(o.Z,{img:"/StageAssets/stage1/image1.png"}),(0,u.jsx)(n.Z,{nextPage:"/stage_clear/1",correctList:[{title:"\u3072\u3089\u304c\u306a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",correctText:"\u3046\u307e",type:"text"}]}),(0,u.jsx)(i.Z,{HintLists:[{title:"\u30d2\u30f3\u30c81",body:"\u56fd\u8a9e\u306e\u6559\u79d1\u66f8\u3067\u3001\u5168\u54e1(\u305c\u3093\u3044\u3093)\u4e00\u5ea6(\u3044\u3061\u3069)\u306f\u898b\u305f\u3053\u3068\u304c\u3042\u308b\u56f3\u5f62\u3060\u3088\uff01"}]})]})};e.default=l},372:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page1",function(){return r(7302)}])}},function(t){t.O(0,[774,398,767,888,179],(function(){return e=372,t(t.s=e);var e}));var e=t.O();_N_E=e}]);