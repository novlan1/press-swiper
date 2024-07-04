# 缩略图

## 基础用法

缩略图使用的是两个 `swiper`，第一个 `swiper` 设置 `thumbs.swiper` 为 `true`，另一个 `swiper` 设置 `freeMode`、`watchSlidesProgress` 和 `thumbs.use` 为 `true`。

```html
<z-swiper
  ref="zswiper"
  v-model="list"
  :options="options"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>

<z-swiper
  ref="zswiperthumbs"
  v-model="list"
  :custom-style="{'margin-top':'10rpx'}"
  :options="optionsThumbs"
  @swiper="setThumbsSwiper"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item
      :item="item"
      height="150rpx"
    />
  </z-swiper-item>
</z-swiper>
```

```js
const options = {
  spaceBetween: 10,
  thumbs: {
    swiper: true,
  },
};

const optionsThumbs = {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  thumbs: {
    use: true,
  },
};

const zswiper = ref();
const zswiperthumbs = ref();

const setThumbsSwiper = () => {
  zswiper.value.swiper.on('beforeMount', () => {
    zswiper.value.swiper.params.thumbs.swiper = zswiperthumbs.value.swiper;
  });
};
```

## 自动播放

设置第一个 `swiper` 的 `autoplay` 为 `true`，即可开启自动播放。

```html
<z-swiper
  ref="zswiperauto"
  v-model="list"
  :options="optionsAuto"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>

<z-swiper
  ref="zswiperthumbsauto"
  v-model="list"
  :custom-style="{'margin-top':'10rpx'}"
  :options="optionsThumbsAuto"
  @swiper="setThumbsAutoSwiper"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item
      :item="item"
      height="150rpx"
    />
  </z-swiper-item>
</z-swiper>
```

```js
const optionsAuto = {
  spaceBetween: 10,
  thumbs: {
    swiper: true,
  },
  autoplay: true,
};

const optionsThumbsAuto = {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  thumbs: {
    use: true,
  },
};

const zswiperauto = ref();
const zswiperthumbsauto = ref();

const setThumbsAutoSwiper = () => {
  zswiperauto.value.swiper.on('beforeMount', () => {
    zswiperauto.value.swiper.params.thumbs.swiper = zswiperthumbsauto.value.swiper;
  });
};
```

<Simulator src="https://novlan1.github.io/press-swiper/h5/#/pages/thumbs/index"></Simulator>
