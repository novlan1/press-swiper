<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-3D流">
      <z-swiper
        v-model="list"
        :options="options"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
          :custom-style="{width:'500rpx'}"
        >
          <demo-item :item="item" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="自动播放">
      <z-swiper
        v-model="list"
        :options="optionsAutoplay"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
          :custom-style="{width:'500rpx'}"
        >
          <demo-item :item="item" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper
        v-model="list"
        :custom-style="{height:'400rpx'}"
        :options="optionsVertical"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
          :custom-style="{width:'100%',height:'300rpx'}"
        >
          <demo-item :item="item" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="无限循环">
      <z-swiper
        v-model="loopList"
        :options="optionsLoop"
      >
        <z-swiper-item
          v-for="(item,index) in loopList"
          :key="index"
          :custom-style="{width:'500rpx'}"
        >
          <demo-item :item="item" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import {
  ref,
} from 'vue';
import data from '../../common/js/data.js';
const options = {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
};
const optionsAutoplay = {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: true,
};
const optionsVertical = {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  direction: 'vertical',
};
const optionsLoop = {
  effect: 'coverflow',
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
};
const list = ref(data);
const loopList = ref(data);
</script>
