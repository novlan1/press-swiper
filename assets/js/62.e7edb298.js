(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{343:function(_,e,v){"use strict";v.r(e);var t=v(14),s=Object(t.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"页面渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染"}},[_._v("#")]),_._v(" 页面渲染")]),_._v(" "),v("p",[v("code",[_._v("uniapp")]),_._v(" 在小程序中无法操作 dom，所以在性能上会造成通信折损，在小程序中尤为明显。")]),_._v(" "),v("p",[_._v("当数据与页面节点变多时，3D 切换效果会变得卡顿，迟缓。为此， "),v("code",[_._v("press-swiper")]),_._v(" 提供了两种优化思路。")]),_._v(" "),v("p",[_._v("当然，我们也会新增一些配置，让开发者更轻松的实现性能优化。")]),_._v(" "),v("h2",{attrs:{id:"_1-节点重置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-节点重置"}},[_._v("#")]),_._v(" 1. 节点重置")]),_._v(" "),v("p",[_._v("该方法的实现思路是，利用数据驱动页面，将当前页面显示的 slide 的前面和后面的 slide 节点中的内容清空，即只显示 slide 最外层 div。")]),_._v(" "),v("blockquote",[v("p",[_._v("优点：")])]),_._v(" "),v("p",[_._v("页面的结构不会发生变化，容错率高。")]),_._v(" "),v("blockquote",[v("p",[_._v("缺点：")])]),_._v(" "),v("p",[_._v("优化不够纯粹，在海量数据面前依然卡顿。")]),_._v(" "),v("h2",{attrs:{id:"_2-节点切割"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-节点切割"}},[_._v("#")]),_._v(" 2. 节点切割")]),_._v(" "),v("p",[_._v("该方法会在 Dom 结构中保持尽量少的 Slide，只渲染当前可见的 slide 和前后的 slide，而隐藏其他不可见的 Slide，每次切换时就渲染新的 Slide。当你的 Slide 很多的时候，尤其是 Slide 中有复杂的 Dom 树结构时，性能会有很大的提升。")]),_._v(" "),v("blockquote",[v("p",[_._v("优点：")])]),_._v(" "),v("p",[_._v("无论多少数据性能都会保持一致。")]),_._v(" "),v("blockquote",[v("p",[_._v("缺点：")])]),_._v(" "),v("p",[_._v("在 "),v("code",[_._v("uniapp")]),_._v(" 中，当页面结构发生变化时，image 图片的位置随即也会发生变化，这会导致图片间歇性出现闪烁，偏移等问题。")]),_._v(" "),v("p",[_._v("我们进行了多种尝试，依然无法解决该优化方案所导致的问题，我们仍在探索一种可行的写法来避免这个问题，但是目前看来，这是十分困难的。")])])}),[],!1,null,null,null);e.default=s.exports}}]);