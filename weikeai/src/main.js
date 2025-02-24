import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 按需引入 polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// 初始化 MathJax
import initMathJax from './utils/MathJax';

// 静态导入 Swiper 组件
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const app = createApp(App);

// 设置全局属性
app.config.globalProperties.$MathJax = null;

// 初始化 MathJax 并处理异常
initMathJax().then(({ initMathjaxConfig }) => {
  initMathjaxConfig();
  app.config.globalProperties.$MathJax = window.MathJax;
}).catch(error => {
  console.error('MathJax 初始化失败:', error);
});

// 注册组件和路由
app
  .use(router)
  .component('swiper', Swiper)
  .component('swiper-slide', SwiperSlide)
  .mount('#app');