# 按需加载

`press-swiper` 会把所有的 `module` 一起注入，导致包体积较大，`press-swiper-plus` 探索了一种按需注入的方案。

简单来说，`press-swiper-plus` 只提供最基础的 `swiper`，其他功能，比如切换效果、控制器、虚拟列表等都由开发者自行注册。

## 使用方式

具体使用方式如下。

1. 安装依赖

```bash
npm i press-swiper-plus press-swiper-module press-swiper-shared
```

2. 引入 `press-swiper-plus`

下面是在 `cli` 模式下，`press-swiper-plus` 的注册。

```js
import ZSwiper from 'press-swiper-plus/components/z-swiper/z-swiper.vue';
import ZSwiperItem from 'press-swiper-plus/components/z-swiper-item/z-swiper-item.vue';

export default {
  components: {
    ZSwiper,
    ZSwiperItem,
  },
}
```

3. 按需注册 `module`

比如传给 `options.effect` 为 `carousel`，则可以从 `press-swiper-module` 中注册 `EffectCarousel`。

```js
import Swiper from 'press-swiper-shared/libs/core.js';
import EffectCarousel from 'press-swiper-module/effect-carousel';

Swiper.use([
  EffectCarousel,
]);
```

也可以注册同时注册多个，比如：

```js
import Swiper from 'press-swiper-shared/libs/core.js';
import EffectCarousel from 'press-swiper-module/effect-carousel';
import Thumbs from 'press-swiper-module/thumbs';
import Scrollbar from 'press-swiper-module/scrollbar';
import Virtual from 'press-swiper-module/virtual';
import Controller from 'press-swiper-module/controller';
import WillChange from 'press-swiper-module/will-change';


Swiper.use([
  EffectCarousel,
  Thumbs,
  Scrollbar,
  Virtual,
  Controller,
  WillChange,
]);
```

4. 配置 `transpileDependencies`

同所有 `uni-app` 组件库一样，`press-swiper-plus` 也需要配置 `transpileDependencies`：

```js
// vue.config.js

module.exports = {
  transpileDependencies: [
    'press-swiper-plus',
    'press-swiper-module',
    'press-swiper-shared',
  ],
}
```

## 模块

下面是所有可按需注入的模块。

| 模块            | 描述              | 引入路径                             |
| --------------- | ----------------- | ------------------------------------ |
| Autoplay        | 自动播放          | press-swiper-module/autoplay         |
| FreeMode        | 自由模式          | press-swiper-module/free-mode        |
| EffectFade      | 切换效果，淡入    | press-swiper-module/effect-fade      |
| EffectCube      | 切换效果，方块    | press-swiper-module/effect-cube      |
| EffectCoverflow | 切换效果，3D流    | press-swiper-module/effect-coverflow |
| EffectFlip      | 切换效果，3D翻转  | press-swiper-module/effect-flip      |
| EffectCards     | 切换效果，卡片式  | press-swiper-module/effect-cards     |
| EffectCreative  | 切换效果，创意性  | press-swiper-module/effect-creative  |
| EffectPanorama  | 切换效果，全景    | press-swiper-module/effect-panorama  |
| EffectCarousel  | 切换效果，层叠    | press-swiper-module/effect-carousel  |
| Navigation      | 切换器            | press-swiper-module/navigation       |
| Pagination      | 指示器            | press-swiper-module/pagination       |
| Thumbs          | 缩略图            | press-swiper-module/thumbs           |
| Scrollbar       | 滚动条            | press-swiper-module/scrollbar        |
| Virtual         | 虚拟列表          | press-swiper-module/virtual          |
| Controller      | 控制器            | press-swiper-module/controller       |
| WillChange      | 设置 `willChange` | press-swiper-module/will-change      |

## 效果对比

下面是某项目使用 `press-swiper` 和 `press-swiper-plus` 的对比。

完全未引入时，主包为 `6.72MB`。

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/6/own_mike_6863f2ddaab3d34b38.png" width="500" />

引入 `press-swiper` 时，主包为 `6.95MB`，增大了 `230KB`。

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/6/own_mike_d064b6c78e3b837528.png" width="500" />

引入 `press-swiper-plus` 时，主包为 `6.89MB`，相比 `press-swiper` 减小了 `60KB`。

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/6/own_mike_63da361fa35c862748.png" width="500" />
