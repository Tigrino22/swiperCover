import Swiper from 'swiper';
import { EffectCoverflow, Keyboard, Autoplay} from 'swiper/modules';

import './style.scss';
import 'swiper/css';
import 'swiper/css/effect-cube';

// Initialiser Swiper avec l'effet Cube
let swiper = new Swiper(".mySwiper", {
  modules: [Keyboard, EffectCoverflow, Autoplay],
  keyboard: true,
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: -15,
    stretch: -50,
    depth: 250,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,

  }
});
