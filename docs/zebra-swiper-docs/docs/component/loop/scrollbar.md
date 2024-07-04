# 滚动条

## 基础用法

设置 `scrollbar.el` 为 `true`，可开启滚动条。

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
  scrollbar: {
    el: true,
  },
};
```

## 自动播放

设置 `autoplay` 为 `true`，可开启自动播放。

```js
const optionsAutoplay = {
  scrollbar: {
    el: true,
  },
  autoplay: true,
};
```


## 纵向

设置 `direction` 为 `vertical`，可开启纵向。

```js
const optionsVertical = {
  scrollbar: {
    el: true,
  },
  direction: 'vertical',
};
```

## 自动隐藏

设置 `scrollbar.hide` 为 `true`，可开启自动隐藏滚动条。

```js
const optionsHide = {
  scrollbar: {
    el: true,
    hide: true,
  },
};
```

## 可拖动

设置 `scrollbar.draggable` 为 `true`，可拖动滚动条。

```js
const optionsDraggable = {
  scrollbar: {
    el: true,
    draggable: true,
  },
};
```

<Simulator src="https://novlan1.github.io/press-swiper/h5/#/pages/scrollbar/index"></Simulator>
