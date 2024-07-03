import Swiper from 'press-swiper-shared/libs/core.js';

import Autoplay from 'press-swiper-module/autoplay';
import FreeMode from 'press-swiper-module/free-mode';
import EffectFade from 'press-swiper-module/effect-fade';
import EffectCube from 'press-swiper-module/effect-cube';
import EffectCoverflow from 'press-swiper-module/effect-coverflow';
import EffectFlip from 'press-swiper-module/effect-flip';
import EffectCards from 'press-swiper-module/effect-cards';
import EffectCreative from 'press-swiper-module/effect-creative';
import EffectPanorama from 'press-swiper-module/effect-panorama';
import EffectCarousel from 'press-swiper-module/effect-carousel';
import Navigation from 'press-swiper-module/navigation';
import Pagination from 'press-swiper-module/pagination';
import Thumbs from 'press-swiper-module/thumbs';
import Scrollbar from 'press-swiper-module/scrollbar';
import Virtual from 'press-swiper-module/virtual';
import Controller from 'press-swiper-module/controller';
import WillChange from 'press-swiper-module/will-change';
export {
  default as Swiper,
  default,
} from 'press-swiper-shared/libs/core.js';

const modules = [
  Autoplay,
  FreeMode,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  EffectFlip,
  EffectCards,
  EffectCreative,
  EffectPanorama,
  EffectCarousel,
  Navigation,
  Pagination,
  Thumbs,
  Scrollbar,
  WillChange,
  Virtual,
  Controller,
];

Swiper.use(modules);
