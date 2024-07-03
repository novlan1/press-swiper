import Swiper from 'press-swiper-shared/libs/core.js';

import Autoplay from 'press-swiper-module/autoplay/autoplay.js';
// import FreeMode from 'press-swiper-module/free-mode/free-mode.js';
// import EffectFade from 'press-swiper-module/effect-fade/effect-fade.js';
// import EffectCube from 'press-swiper-module/effect-cube/effect-cube.js';
// import EffectCoverflow from 'press-swiper-module/effect-coverflow/effect-coverflow.js';
// import EffectFlip from 'press-swiper-module/effect-flip/effect-flip.js';
// import EffectCards from 'press-swiper-module/effect-cards/effect-cards.js';
// import EffectCreative from 'press-swiper-module/effect-creative/effect-creative.js';
// import EffectPanorama from 'press-swiper-module/effect-panorama/effect-panorama.js';
// import EffectCarousel from 'press-swiper-module/effect-carousel/effect-carousel.js';
// import Navigation from 'press-swiper-module/navigation/navigation.js';
// import Pagination from 'press-swiper-module/pagination/pagination.js';
// import Thumbs from 'press-swiper-module/thumbs/thumbs.js';
// import Scrollbar from 'press-swiper-module/scrollbar/scrollbar.js';
// import Virtual from 'press-swiper-module/virtual/virtual.js';
// import Controller from 'press-swiper-module/controller/controller.js';
// import WillChange from 'press-swiper-module/will-change/will-change.js';
export {
  default as Swiper,
  default,
} from 'press-swiper-shared/libs/core.js';

const modules = [
  Autoplay,
  // FreeMode,
  // EffectFade,
  // EffectCube,
  // EffectCoverflow,
  // EffectFlip,
  // EffectCards,
  // EffectCreative,
  // EffectPanorama,
  // EffectCarousel,
  // Navigation,
  // Pagination,
  // Thumbs,
  // Scrollbar,
  // WillChange,
  // Virtual,
  // Controller,
];

Swiper.use(modules);
