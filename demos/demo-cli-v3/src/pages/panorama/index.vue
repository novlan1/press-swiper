<template>
  <view class="demo-swiper">
    <demo-block title="切换效果-全景">
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
    </demo-block>
    <demo-block title="自动播放">
      <z-swiper
        v-model="list"
        :options="optionsAutoplay"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
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
          v-for="(item,index) in loopList
          "
          :key="index"
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
  effect: 'panorama',
  slidesPerView: 1.5,
  centeredSlides: true,
  panorama: {
    depth: 150,
    rotate: 45,
  },
};
const optionsAutoplay = {
  effect: 'panorama',
  slidesPerView: 1.5,
  centeredSlides: true,
  panorama: {
    depth: 150,
    rotate: 45,
  },
  autoplay: true,
};
const optionsLoop = {
  effect: 'panorama',
  slidesPerView: 1.5,
  centeredSlides: true,
  loopedSlides: 2,
  panorama: {
    depth: 150,
    rotate: 45,
  },
  loop: true,
};
const list = ref(data);
const loopList = ref(data);
</script>
