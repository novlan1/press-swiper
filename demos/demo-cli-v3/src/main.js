import { createSSRApp } from 'vue';
import DemoBlock from '@/components/DemoBlock/DemoBlock.vue';
import DemoItem from '@/components/DemoItem/DemoItem.vue';
import App from './App.vue';


const SHARE_INFO = {
  title: 'Press Swiper',
  // path: '/pages/index/index',
  imageUrl: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui-avatar-wx-share.png',
};


export function createApp() {
  const app = createSSRApp(App);
  app.component('demo-block', DemoBlock);
  app.component('demo-item', DemoItem);

  app.mixin({
    onShareAppMessage() {
      return {
        ...SHARE_INFO,
      };
    },
  });
  return {
    app,
  };
}
