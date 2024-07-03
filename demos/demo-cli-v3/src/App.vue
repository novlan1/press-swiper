<script>
export default {
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
    // #ifdef MP-QQ
    qq?.showShareMenu?.({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
  },
  onHide() {
    console.log('App Hide');
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

page {
  background-color: #e4ebf5;
}

.demo-swiper {
  padding-bottom: 16rpx;
}
</style>
