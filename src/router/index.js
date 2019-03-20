import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Resume from '../pages/Resume';
import Tags from '../pages/Tags';
import pageroutes from './page';
import Post from '../pages/Post';
import Gallery from '../pages/Gallery';
import Allpost from '../pages/Allpost';
import iView from 'iview';
Vue.use(Router);
const routerConfig = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }, {
      path: '/tags',
      name: 'Tags',
      component: Tags
    }, {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }, {
      path: '/categories',
      name: 'Categories',
      component: Categories
    }, {
      path: '/post',
      name: 'Post',
      component: Post,
      children: [...pageroutes]
    }, {
      path: '/all',
      name: 'Allpost',
      component: Allpost
    }
  ]
});
routerConfig.mode = history;
routerConfig.beforeEach((to, from, next) => {
  iView
    .Spin
    .show();
  iView
    .LoadingBar
    .start();
  next();
});
routerConfig.afterEach(() => {
  // 页面回到顶部
  iView
    .Spin
    .hide();
  iView
    .LoadingBar
    .finish();
  window.scrollTo(0, 0);
});
export default routerConfig;
