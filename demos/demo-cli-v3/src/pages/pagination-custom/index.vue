<template>
  <view class="demo-swiper">
    <demo-block title="自定义">
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
      <z-swiper
        ref="zswiper1"
        v-model="list"
        :custom-style="{'margin-top':'20rpx'}"
        @slideChange="onChange1"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
        >
          <demo-item :item="item" />
        </z-swiper-item>
        <template #indicator>
          <view class="custom-indicator-list">
            <view
              v-for="(item,index) in list"
              :key="index"
              :class="['custom-indicator-list-item',index == current1?'custom-indicator-list-item-active':'']"
              @click="changSwiper(index)"
            >
              {{ index+1 }}
            </view>
          </view>
        </template>
      </z-swiper>
      <z-swiper
        ref="zswiper2"
        v-model="list"
        :custom-style="{'margin-top':'20rpx'}"
        @slideChange="onChange2"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
        >
          <demo-item :item="item" />
        </z-swiper-item>
        <template #indicator>
          <view class="custom-indicator-list1">
            <view
              v-for="(item,index) in list"
              :key="index"
              :class="['custom-indicator-list-item1',index == current2?'custom-indicator-list-item1-active':'']"
            />
          </view>
        </template>
      </z-swiper>
      <z-swiper
        ref="zswiper3"
        v-model="list"
        :custom-style="{'margin-top':'20rpx'}"
        @slideChange="onChange3"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
        >
          <demo-item :item="item" />
        </z-swiper-item>
        <template #indicator>
          <view class="custom-indicator-list2">
            <template
              v-for="(item,index) in list"
              :key="index"
            >
              <view
                v-if="index == current3 - 2"
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-prev-prev"
              />
              <view
                v-else-if="index == current3 - 1"
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-prev"
              />
              <view
                v-else-if="index == current3"
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-active"
              />
              <view
                v-else-if="index == current3 + 1"
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-next"
              />
              <view
                v-else-if="index == current3 + 2"
                class="custom-indicator-list2-bullet custom-indicator-list2-bullet-next-next"
              />
            </template>
          </view>
        </template>
      </z-swiper>
    </demo-block>
  </view>
</template>

<script setup>
import {
  ref,
} from 'vue';
import data from '../../common/js/data.js';
const current = ref(0);
const current1 = ref(0);
const current2 = ref(0);
const current3 = ref(0);
const zswiper = ref();
const zswiper1 = ref();
const zswiper2 = ref();
const zswiper3 = ref();
const list = ref(data);
const onChange = () => {
  current.value = zswiper.value.swiper.activeIndex;
};
const onChange1 = () => {
  current1.value = zswiper1.value.swiper.activeIndex;
};
const onChange2 = () => {
  current2.value = zswiper2.value.swiper.activeIndex;
};
const onChange3 = () => {
  current3.value = zswiper3.value.swiper.activeIndex;
};
const changSwiper = (index) => {
  if (index != current1.value) {
    zswiper1.value.swiper.slideTo(index, 300, false);
  }
};
</script>

<style scoped lang="scss">
.demo-swiper {
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

  .custom-indicator-list {
    position: absolute;
    bottom: 30rpx;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    .custom-indicator-list-item {
      width: 40rpx;
      height: 40rpx;
      text-align: center;
      line-height: 40rpx;
      font-size: 24rpx;
      color: #000;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      margin: 0 8rpx;

      &-active {
        color: #fff;
        background: #007aff;
      }
    }
  }

  .custom-indicator-list1 {
    position: absolute;
    bottom: 30rpx;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    .custom-indicator-list-item1 {
      margin: 0 5rpx;
      background-color: #e8f5ff;
      width: 20rpx;
      height: 10rpx;
      opacity: 1;
      border-radius: 5rpx;
      transition: opacity 0.3s, background-color 0.3s, width 0.3s;

      &-active {
        background-color: #3eb2f3;
        width: 35rpx;
      }
    }
  }

  .custom-indicator-list2 {
    position: absolute;
    bottom: 30rpx;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    .custom-indicator-list2-bullet {
      margin: 0 8rpx;
      position: relative;
      width: 16rpx;
      height: 16rpx;
      border-radius: 50%;
      background-color: #e8f5ff;
      opacity: 1;
      transition: 0.2s width, 0.2s height, 0.2s background-color, 0.2s opacity,
        0.2s transform;

      &-active {
        transform: scale(1);
        opacity: 1;
        background-color: #3eb2f3;
      }

      &-prev {
        transform: scale(0.66);
      }

      &-prev-prev {
        transform: scale(0.33);
      }

      &-next {
        transform: scale(0.66);
      }

      &-next-next {
        transform: scale(0.33);
      }
    }
  }
}
</style>
