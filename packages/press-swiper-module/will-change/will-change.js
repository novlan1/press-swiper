export default function WillChange({
  swiper,
  // extendParams,
  on,
}) {
  on('setTransition', () => {
    if (!swiper.params.willChange) return;
    if (swiper.params.effect == 'slide' || swiper.params.effect == 'cube' || swiper.params.effect
			== 'coverflow' || swiper.params.effect == 'panorama') {
      swiper.$wrapperEl.willChange('transform');
    }
  });
  on('transitionEnd', () => {
    if (!swiper.params.willChange) return;
    swiper.$wrapperEl.willChange('auto');
    swiper.slides.forEach((item) => {
      item.$itemEl.willChange('auto');
    });
  });
}
