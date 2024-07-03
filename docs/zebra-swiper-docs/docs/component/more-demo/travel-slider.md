# 地球

```html
<view class="travel-body">
  <view class="travel-wrapper">
    <view class="travel-slider">
      <!-- Rotating Planet -->
      <view
        class="travel-slider-planet"
        :style="[planetStyle]"
      >
        <image
          class="planet-image"
          src="../../../static/images/earth.svg"
          mode="heightFix"
        />
        <view :class="['travel-slider-cities',`travel-slider-cities-${list.length > 4 ? '8' : '4'}`]">
          <image
            class="cities-image"
            src="../../../static/images/usa.svg"
          />
          <image
            class="cities-image"
            src="../../../static/images/england.svg"
          />
          <image
            class="cities-image"
            src="../../../static/images/france.svg"
          />
          <image
            class="cities-image"
            src="../../../static/images/italy.svg"
          />
          <image
            class="cities-image"
            src="../../../static/images/russia.svg"
          />
          <image
            class="cities-image"
            src="../../../static/images/egypt.svg"
          />
          <image
            class="cities-image"
            src="../../../static/images/india.svg"
          />
          <image
            class="cities-image"
            src="../../../static/images/japan.svg"
          />
        </view>
      </view>
      <!-- Swiper -->
      <z-swiper
        ref="zswiper"
        v-model="list"
        :custom-style="swiperStyle"
        :options="options"
        @swiper="init"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
          :custom-style="itemStyle"
        >
          <image
            :src="item.url"
            class="travel-slider-bg-image"
          />
          <view class="travel-slider-content">
            <view class="travel-slider-title">
              {{ item.title }}
            </view>
            <view class="travel-slider-subtitle">
              {{ item.subTitle }}
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
  url: '../../../static/images/usa.jpg',
  title: 'United States',
  subTitle: '8,295 properties',
}, {
  url: '../../../static/images/england.jpg',
  title: 'England',
  subTitle: '1,110 properties',
}, {
  url: '../../../static/images/france.jpg',
  title: 'France',
  subTitle: '314 properties',
}, {
  url: '../../../static/images/italy.jpg',
  title: 'Italy',
  subTitle: '1,200 properties',
}, {
  url: '../../../static/images/russia.jpg',
  title: 'Russia',
  subTitle: '12,231 properties',
}, {
  url: '../../../static/images/egypt.jpg',
  title: 'Egypt',
  subTitle: '505 properties',
}, {
  url: '../../../static/images/india.jpg',
  title: 'India',
  subTitle: '2,300 properties',
}, {
  url: '../../../static/images/japan.jpg',
  title: 'Japan',
  subTitle: '1,700 properties',
}]);
const options = {
  speed: 600,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  watchSlidesProgress: true,
};
const planetStyle = ref({});
const itemStyle = {
  width: 'calc(100vw * 0.8)',
  'max-width': '640px',
  'box-sizing': 'border-box',
  position: 'relative',
};
const swiperStyle = {
  height: '300px',
  'padding-top': '64px',
  'padding-bottom': '64px',
};
const init = () => {
  zswiper.value.swiper.on('progress', (s, progress) => {
    const max =	s.slides.length > 4 ? 360 - (8 - s.slides.length + 1) * 45 : 270;
    planetStyle.value.transform = `translate(-50%, -50%) rotate(${
      max * -progress
    }deg)`;
  });
  zswiper.value.swiper.on('setTransition', (s, duration) => {
    planetStyle.value.transitionDuration = `${duration}ms`;
  });
};
```

<Simulator src="https://h5.igame.qq.com/pmd-mobile.pmd-h5.press-swiper.press-swiper/#/pages/demos/travel-slider/index"></Simulator>
