# 控制器

## 基础用法

```html
<z-swiper
  ref="zswiper"
  v-model="list1"
  :options="options"
>
  <z-swiper-item
    v-for="(item,index) in list1"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>
<z-swiper
  ref="zswiperthumbs"
  v-model="list2"
  :custom-style="{'margin-top':'20rpx'}"
  :options="optionsThumbs"
  @swiper="setThumbsSwiper"
>
  <z-swiper-item
    v-for="(item,index) in list2"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>
```

```js
const options = {
  controller: {
    control: null,
    inverse: false,
  },
};
const optionsThumbs = {
  controller: {
    control: null,
    inverse: false,
  },
};
const setThumbsSwiper = () => {
  zswiper.value.swiper.on('beforeMount', () => {
    zswiper.value.swiper.params.controller.control = zswiperthumbs.value.swiper;
  });

  zswiperthumbs.value.swiper.on('beforeMount', () => {
    zswiperthumbs.value.swiper.params.controller.control = zswiper.value.swiper;
  });
};
```

## 反向

```js
const optionsInverse = {
  controller: {
    control: null,
    inverse: true,
  },
};
const optionsThumbsInverse = {
  controller: {
    control: null,
    inverse: true,
  },
};
```

<Simulator src="https://h5.igame.qq.com/pmd-mobile.pmd-h5.press-swiper.press-swiper/#/pages/controller/index"></Simulator>

