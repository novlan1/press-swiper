# 切换器

## 基础用法

设置 `navigation` 的 `nextEl` 和 `prevEl` 为 `true`，可开启切换器。

```html
<z-swiper
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
```

```js
const options = {
  navigation: {
    nextEl: true,
    prevEl: true,
  },
};
```


## 插槽自定义

设置 `navigation.slot` 为 `true`，可开启切换器的插槽 `pre-button` 和 `next-button`。

```html
<z-swiper
  v-model="list"
  :options="optionsSlot"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
  <template #pre-button>
    <view class="custom-switcher">
      prev
    </view>
  </template>
  <template #next-button>
    <view class="custom-switcher">
      next
    </view>
  </template>
</z-swiper>
```


```js
const optionsSlot = {
  navigation: {
    slot: true,
  },
};
```

```scss
.custom-switcher {
  display: flex;
  align-items: center;
  font-size: 16px;
}
```

## 完全自定义

设置 `navigation.custom` 为 `true`，可开启完全自定义的切换器。

```html
<z-swiper
  ref="zswiper"
  v-model="loopList"
  :options="optionsCustom"
>
  <z-swiper-item
    v-for="(item,index) in loopList"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>
<view class="custom-switcher-group">
  <button
    type="primary"
    size="mini"
    class="custom-switcher-group-button"
    @click="prev()"
  >
    prev
  </button>
  <button
    type="primary"
    size="mini"
    class="custom-switcher-group-button"
    @click="next()"
  >
    next
  </button>
</view>
```

```js
const optionsCustom = {
  navigation: {
    custom: true,
  },
  loop: true,
};

const loopList = ref(data);
const zswiper = ref(null);
const prev = () => {
  zswiper.value.swiper.slidePrev();
};
const next = () => {
  zswiper.value.swiper.slideNext();
};
```

```scss
.custom-switcher-group {
  margin-top: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

<Simulator src="https://h5.igame.qq.com/pmd-mobile.pmd-h5.press-swiper.press-swiper/#/pages/navigation/index"></Simulator>
