import{r as e,_ as a,a as l}from"./z-swiper.9cc64e9b.js";import{l as s,o as t,c as u,w as r,i as o,a as i,d as p,r as m,F as d,m as n,p as w}from"../static/js/1-f9c8d8bc.js";import{d as f}from"./data.a34da0b0.js";const v={__name:"index",setup(v){const _={spaceBetween:10,thumbs:{swiper:!0}},c={spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,thumbs:{use:!0}},h={spaceBetween:10,thumbs:{swiper:!0},autoplay:!0},V={spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,thumbs:{use:!0}},b=s(f),y=s(),k=s(),z=s(),g=s(),x=()=>{y.value.swiper.on("beforeMount",(()=>{y.value.swiper.params.thumbs.swiper=k.value.swiper}))},j=()=>{z.value.swiper.on("beforeMount",(()=>{z.value.swiper.params.thumbs.swiper=g.value.swiper}))};return(s,f)=>{const v=n("demo-item"),B=e(w("z-swiper-item"),a),M=e(w("z-swiper"),l),P=n("demo-block"),S=o;return t(),u(S,{class:"demo-swiper"},{default:r((()=>[i(P,{title:"基础用法"},{default:r((()=>[i(M,{ref_key:"zswiper",ref:y,modelValue:b.value,"onUpdate:modelValue":f[0]||(f[0]=e=>b.value=e),options:_},{default:r((()=>[(t(!0),p(d,null,m(b.value,((e,a)=>(t(),u(B,{key:a},{default:r((()=>[i(v,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"]),i(M,{ref_key:"zswiperthumbs",ref:k,modelValue:b.value,"onUpdate:modelValue":f[1]||(f[1]=e=>b.value=e),"custom-style":{"margin-top":"10rpx"},options:c,onSwiper:x},{default:r((()=>[(t(!0),p(d,null,m(b.value,((e,a)=>(t(),u(B,{key:a},{default:r((()=>[i(v,{item:e,height:"150rpx"},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),i(P,{title:"自动播放"},{default:r((()=>[i(M,{ref_key:"zswiperauto",ref:z,modelValue:b.value,"onUpdate:modelValue":f[2]||(f[2]=e=>b.value=e),options:h},{default:r((()=>[(t(!0),p(d,null,m(b.value,((e,a)=>(t(),u(B,{key:a},{default:r((()=>[i(v,{item:e},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"]),i(M,{ref_key:"zswiperthumbsauto",ref:g,modelValue:b.value,"onUpdate:modelValue":f[3]||(f[3]=e=>b.value=e),"custom-style":{"margin-top":"10rpx"},options:V,onSwiper:j},{default:r((()=>[(t(!0),p(d,null,m(b.value,((e,a)=>(t(),u(B,{key:a},{default:r((()=>[i(v,{item:e,height:"150rpx"},null,8,["item"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};export{v as default};