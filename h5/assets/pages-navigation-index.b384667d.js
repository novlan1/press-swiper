import{r as e,_ as t,a}from"./z-swiper.9cc64e9b.js";import{_ as l,l as s,o as u,c as o,w as i,i as d,a as r,d as m,r as n,F as p,b as c,m as _,p as f,q as v}from"../static/js/1-f9c8d8bc.js";import{d as w}from"./data.a34da0b0.js";const V=l({__name:"index",setup(l){const V={navigation:{nextEl:!0,prevEl:!0}},y={navigation:{slot:!0}},k={navigation:{custom:!0},loop:!0},x=s(w),b=s(w),g=s(null);return(l,s)=>{const w=_("demo-item"),h=e(f("z-swiper-item"),t),z=e(f("z-swiper"),a),j=_("demo-block"),U=d,q=v;return u(),o(U,{class:"demo-switcher"},{default:i((()=>[r(j,{title:"基础用法"},{default:i((()=>[r(z,{modelValue:x.value,"onUpdate:modelValue":s[0]||(s[0]=e=>x.value=e),options:V},{default:i((()=>[(u(!0),m(p,null,n(x.value,((e,t)=>(u(),o(h,{key:t},{default:i((()=>[r(w,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),r(j,{title:"插槽自定义"},{default:i((()=>[r(z,{modelValue:x.value,"onUpdate:modelValue":s[1]||(s[1]=e=>x.value=e),options:y},{"pre-button":i((()=>[r(U,{class:"custom-switcher"},{default:i((()=>[c(" prev ")])),_:1})])),"next-button":i((()=>[r(U,{class:"custom-switcher"},{default:i((()=>[c(" next ")])),_:1})])),default:i((()=>[(u(!0),m(p,null,n(x.value,((e,t)=>(u(),o(h,{key:t},{default:i((()=>[r(w,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),r(j,{title:"完全自定义"},{default:i((()=>[r(z,{ref_key:"zswiper",ref:g,modelValue:b.value,"onUpdate:modelValue":s[2]||(s[2]=e=>b.value=e),options:k},{default:i((()=>[(u(!0),m(p,null,n(b.value,((e,t)=>(u(),o(h,{key:t},{default:i((()=>[r(w,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"]),r(U,{class:"custom-switcher-group"},{default:i((()=>[r(q,{type:"primary",size:"mini",class:"custom-switcher-group-button",onClick:s[3]||(s[3]=e=>{g.value.swiper.slidePrev()})},{default:i((()=>[c(" prev ")])),_:1}),r(q,{type:"primary",size:"mini",class:"custom-switcher-group-button",onClick:s[4]||(s[4]=e=>{g.value.swiper.slideNext()})},{default:i((()=>[c(" next ")])),_:1})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-c305d592"]]);export{V as default};