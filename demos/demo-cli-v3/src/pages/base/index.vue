<template>
  <view class="demo-swiper">
    <demo-block title="基础用法">
      <z-swiper v-model="list">
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
        >
          <demo-item :item="item" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="监听事件">
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
      </z-swiper>
    </demo-block>
    <demo-block title="纵向">
      <z-swiper
        v-model="list"
        :custom-style="{height:'300rpx'}"
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
    <demo-block title="切换速度">
      <z-swiper
        v-model="list"
        :options="{speed:2000}"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
        >
          <demo-item :item="item" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="禁用">
      <z-swiper
        v-model="list"
        :options="{enabled:false}"
      >
        <z-swiper-item
          v-for="(item,index) in list"
          :key="index"
        >
          <demo-item :item="item" />
        </z-swiper-item>
      </z-swiper>
    </demo-block>
    <demo-block title="高度自适应">
      <z-swiper
        v-model="list"
        :options="{autoHeight:true}"
      >
        <z-swiper-item>
          <demo-item
            :item="list[0]"
            height="200rpx"
          />
        </z-swiper-item>
        <z-swiper-item>
          <demo-item
            :item="list[1]"
            height="400rpx"
          />
        </z-swiper-item>
        <z-swiper-item>
          <demo-item
            :item="list[2]"
            height="500rpx"
          />
        </z-swiper-item>
        <z-swiper-item>
          <demo-item
            :item="list[3]"
            height="300rpx"
          />
        </z-swiper-item>
        <z-swiper-item>
          <demo-item
            :item="list[4]"
            height="100rpx"
          />
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
const list = ref(data);
const options = {
  direction: 'vertical',
  bubbling: false,
};
const zswiper = ref();
const onChange = () => {
  uni.showToast({
    title: `当前 swiper 索引：${zswiper.value.swiper.activeIndex}`,
    icon: 'none',
  });
};
</script>
