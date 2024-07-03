# 虚拟

## 数据截断

设置 `virtual.type` 为 `cut`，可开启数据截断的虚拟列表。

```html
<z-swiper
  ref="zSwiper"
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
const options = reactive({
  virtual: {
    type: 'cut',
    addSlidesBefore: 1,
    addSlidesAfter: 1,
    slides: [],
  },
});

const colorList = ['#7ED321', '#2183D3', '#2128D3', '#431058', '#1E835A', '#B1397B', '#B36021'];

const list = ref([]);

onMounted(() => {
  const list = [];
  for (let i = 1; i < 1000; i += 1) {
    const randomValue = Math.floor(Math.random() * 7);
    list.push({
      background: colorList[randomValue],
      text: `slide${i}`,
    });
  }
  options.virtual.slides = [...list];
});
```

## 保留结构


设置 `virtual.type` 为 `keep`，可开启保留结构的虚拟列表。

```js
const optionsKeep = reactive({
  virtual: {
    type: 'keep',
    addSlidesBefore: 1,
    addSlidesAfter: 1,
    slides: [],
  },
});

const colorList = ['#7ED321', '#2183D3', '#2128D3', '#431058', '#1E835A', '#B1397B', '#B36021'];
const listKeep = ref([]);

onMounted(() => {
  const list = [];
  for (let i = 1; i < 1000; i += 1) {
    const randomValue = Math.floor(Math.random() * 7);
    list.push({
      background: colorList[randomValue],
      text: `slide${i}`,
    });
  }
  optionsKeep.virtual.slides = [...list];
});
```

<Simulator src="https://h5.igame.qq.com/pmd-mobile.pmd-h5.press-swiper.press-swiper/#/pages/virtual/index"></Simulator>
