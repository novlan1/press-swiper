# 层叠

```html
<z-swiper
  ref="zSwiper"
  v-model="list"
  :options="options"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
    :custom-style="{width:'500rpx'}"
  >
    <div class="carousel-slider-animate-opacity">
      <demo-item :item="item" />
    </div>
  </z-swiper-item>
</z-swiper>
```

```js
const options = {
  effect: 'carousel',
};
```

<Simulator src="https://novlan1.github.io/press-swiper/h5/#/pages/demos/carousel/index"></Simulator>
