# 开屏页

```html
<view class="paper-body">
  <view class="paper-wrapper">
    <view class="paper-onboarding">
      <view
        class="paper-onboarding-fills"
        :style="[fillsStyle]"
      >
        <view
          v-for="(item,index) in list"
          :key="index"
          class="paper-onboarding-fill"
          :style="[{backgroundColor:item.bgColor},fillStyleList[index].fillStyle]"
        />
      </view>
      <z-swiper
        ref="zswiper"
        v-model="list"
        :options="options"
        @beforeInit="init"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
        >
          <view class="slide-inner">
            <image
              class="slide-image"
              :src="item.url"
            />
            <view class="slide-title">
              {{ item.title }}
            </view>
            <view class="slide-text">
              {{ item.text }}
            </view>
          </view>
        </z-swiper-item>
      </z-swiper>
    </view>
  </view>
</view>
```

```js
const zswiper = ref();
const list = ref([{
  bgColor: '#6002EE',
  fillStyle: {},
  url: '../../../static/images/banks.svg',
  title: 'Banks',
  text: 'Banks are financial institutions that provide a wide range of financial services, including savings accounts, loans, investment opportunities, and more.',
}, {
  bgColor: '#008386',
  fillStyle: {},
  url: '../../../static/images/hotels.svg',
  title: 'Hotels',
  text: 'Hotels are establishments that offer accommodation, amenities, and services to travelers and guests, providing a comfortable and convenient stay away from home.',
}, {
  bgColor: '#a41fa8',
  fillStyle: {},
  url: '../../../static/images/business.svg',
  title: 'Business',
  text: 'Business involves activities aimed at creating products or services, generating profits, and contributing to the economy.',
}, {
  bgColor: '#007700',
  fillStyle: {},
  url: '../../../static/images/checkmark.svg',
  title: 'Done',
  text: 'Now you can continue using it.',
}]);
const options = {
  effect: 'creative',
  direction: 'vertical',
  speed: 500,
  resistanceRatio: 0,
  grabCursor: true,
  pagination: {
    el: true,
    clickable: true,
    dynamicBullets: true,
  },
  creativeEffect: {
    progressMultiplier: 2,
    prev: {
      opacity: 0,
      translate: [0, -128, 0],
    },
    next: {
      opacity: 0,
      translate: [0, 128, 0],
    },
  },
};
const fillsStyle = ref({});
const fillStyleList = ref([{
  fillStyle: {},
},
{
  fillStyle: {},
},
{
  fillStyle: {},
},
{
  fillStyle: {},
},
]);
onMounted(() => {
  calcFillSize('vertical');
});
const init = () => {
  zswiper.value.swiper.on('setTranslate', (swiper) => {
    onTranslate(swiper);
  });
  zswiper.value.swiper.on('setTransition', (swiper, duration) => {
    onTransition(swiper, duration);
  });
};
const onTranslate = (swiper) => {
  const {
    slides,
  } = swiper;

  for (let i = 0; i < slides.length; i += 1) {
    const slideEl = slides[i];
    const slideProgress = slideEl.progress;
    const progress = 1 - Math.max(Math.min(Math.abs(slideProgress), 1), 0);
    if (slideProgress < 0) {
      fillStyleList.value[i].fillStyle.transform = `scale(${progress})`;
    } else {
      fillStyleList.value[i].fillStyle.transform = 'scale(1)';
    }
  }
};
const onTransition = (swiper, duration) => {
  fillStyleList.value.forEach((fillEl) => {
    fillEl.fillStyle.transitionDuration = `${duration}ms`;
  });
};
const calcFillSize = (direction) => {
  const res = uni.getSystemInfoSync();
  const offsetWidth = res.screenWidth;
  const offsetHeight = res.screenHeight;
  const radius = ((offsetWidth / 2) ** 2 + (offsetHeight / 2) ** 2) ** 0.5;
  fillsStyle.value = {
    width: `${radius * 4}px`,
    height: `${radius * 4}px`,
    marginLeft: direction === 'vertical' ? `-${radius * 2}px` : `-${radius}px`,
    marginTop: direction === 'vertical' ? `-${radius}px` : `-${radius * 2}px`,
  };
};
```

<Simulator src="https://novlan1.github.io/press-swiper/h5/#/pages/demos/paper/index"></Simulator>
