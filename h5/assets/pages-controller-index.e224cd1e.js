import{r as e,_ as l,a as o}from"./z-swiper.9cc64e9b.js";import{l as a,o as r,c as t,w as u,i as s,a as n,d as i,r as p,F as m,m as d,p as v}from"../static/js/1-f9c8d8bc.js";import{d as f}from"./data.a34da0b0.js";const c={__name:"index",setup(c){const w=a(),_=a(),V=a(),y=a(),k={controller:{control:null,inverse:!1}},b={controller:{control:null,inverse:!1}},z={controller:{control:null,inverse:!0}},j={controller:{control:null,inverse:!0}},x=a(f),M=a(f),U=a(f),g=a(f),h=()=>{w.value.swiper.on("beforeMount",(()=>{w.value.swiper.params.controller.control=V.value.swiper})),V.value.swiper.on("beforeMount",(()=>{V.value.swiper.params.controller.control=w.value.swiper}))},S=()=>{_.value.swiper.on("beforeMount",(()=>{_.value.swiper.params.controller.control=y.value.swiper})),y.value.swiper.on("beforeMount",(()=>{y.value.swiper.params.controller.control=_.value.swiper}))};return(a,f)=>{const c=d("demo-item"),q=e(v("z-swiper-item"),l),F=e(v("z-swiper"),o),A=d("demo-block"),B=s;return r(),t(B,{class:"demo-swiper"},{default:u((()=>[n(A,{title:"基础用法"},{default:u((()=>[n(F,{ref_key:"zswiper",ref:w,modelValue:x.value,"onUpdate:modelValue":f[0]||(f[0]=e=>x.value=e),options:k},{default:u((()=>[(r(!0),i(m,null,p(x.value,((e,l)=>(r(),t(q,{key:l},{default:u((()=>[n(c,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"]),n(F,{ref_key:"zswiperthumbs",ref:V,modelValue:M.value,"onUpdate:modelValue":f[1]||(f[1]=e=>M.value=e),"custom-style":{"margin-top":"20rpx"},options:b,onSwiper:h},{default:u((()=>[(r(!0),i(m,null,p(M.value,((e,l)=>(r(),t(q,{key:l},{default:u((()=>[n(c,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),n(A,{title:"反向"},{default:u((()=>[n(F,{ref_key:"zswiperinverse",ref:_,modelValue:U.value,"onUpdate:modelValue":f[2]||(f[2]=e=>U.value=e),options:z},{default:u((()=>[(r(!0),i(m,null,p(U.value,((e,l)=>(r(),t(q,{key:l},{default:u((()=>[n(c,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"]),n(F,{ref_key:"zswiperthumbsinverse",ref:y,modelValue:g.value,"onUpdate:modelValue":f[3]||(f[3]=e=>g.value=e),"custom-style":{"margin-top":"20rpx"},options:j,onSwiper:S},{default:u((()=>[(r(!0),i(m,null,p(g.value,((e,l)=>(r(),t(q,{key:l},{default:u((()=>[n(c,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};export{c as default};