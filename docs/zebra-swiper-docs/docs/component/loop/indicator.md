# 指示器

## 基础用法

设置 `pagination.el` 为 `true`，即可开启指示器。

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
  pagination: {
    el: true,
  },
};
```


## 无限循环

设置 `loop` 为 `true`，可开启无限循环。

```js
const optionsLoop = {
  pagination: {
    el: true,
  },
  loop: true,
};
```

## 分式类型

设置 `pagination.type` 为 `fraction`，可开启分式类型的指示器。

```js
const optionsFraction = {
  pagination: {
    el: true,
    type: 'fraction',
  },
};
```


## 进度条类型

设置 `pagination.type` 为 `progressbar`，可开启分式类型的指示器。

```js
const optionsFraction = {
  pagination: {
    el: true,
    type: 'progressbar',
  },
};
```

## 动态分页器

设置 `pagination.dynamicBullets` 为 `true`，可开启动态分页器。

```js
const optionsFraction = {
  pagination: {
    el: true,
    dynamicBullets: true,
  },
};
```

## 点击切换

设置 `pagination.clickable` 为 `true`，可开启点击切换。

```js
const optionsFraction = {
  pagination: {
    el: true,
    clickable: true,
  },
};
```

## 自定义

通过 `indicator` 插槽可自定义指示器。

```html
<z-swiper
  ref="zswiper"
  v-model="list"
  @slideChange="onChange"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
  <template #indicator>
    <view class="custom-indicator">
      {{ current + 1 }}/{{ list.length }}
    </view>
  </template>
</z-swiper>
```

```js
const current = ref(0);

const onChange = () => {
  current.value = zswiper.value.swiper.activeIndex;
};
```

```scss
.custom-indicator {
  position: absolute;
  right: 30rpx;
  bottom: 30rpx;
  padding: 4rpx 10rpx;
  font-size: 24rpx;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.1);
  z-index: 10;
}
```


<Simulator src="https://h5.igame.qq.com/pmd-mobile.pmd-h5.press-swiper.press-swiper/#/pages/pagination/index"></Simulator>

