# 播放

## 基础用法

设置 `autoplay` 为 `true`，即可开启自动播放。

```html
 <z-swiper
  v-model="list"
  :options="{autoplay:true}"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>
```

## 时间间隔

`autoplay` 可接受布尔或对象类型，时间间隔可以通过 `delay` 设置。

```html
<z-swiper
  v-model="list"
  :options="{ autoplay: {delay: 1000}}"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>
```

## 自动停止

设置 `stopOnLastSlide` 为 `true`，可自动停止。

```html
<z-swiper
  v-model="list"
  :options="{ autoplay: {stopOnLastSlide: true}}"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>
```


## 无限循环

设置 `autoplay` 和 `loop` 为 `true`，可开启无限循环。

```html
<z-swiper
  v-model="loopList"
  :options="{ autoplay:true,loop:true}"
>
  <z-swiper-item
    v-for="(item,index) in loopList"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>
```

## 反向

设置 `reverseDirection` 为 `true`，可开启反向。

```html
<z-swiper
  v-model="list"
  :options="{ autoplay: {reverseDirection: true}}"
>
  <z-swiper-item
    v-for="(item,index) in list"
    :key="index"
  >
    <demo-item :item="item" />
  </z-swiper-item>
</z-swiper>
```

<Simulator src="https://novlan1.github.io/press-swiper/h5/#/pages/autoplay/index"></Simulator>
