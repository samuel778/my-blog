let pageroutes = [
  {
    path: "/LIFE/2018-11-14-Life",
    component: () => import('../posts/2018-11-14-Life.md')
  },
  {
    path: "/post/2018-11-14-Life",
    component: () => import('../posts/2018-11-14-Life.md')
  },
  {
    path: "/Tutorial/2018-11-14-Life",
    component: () => import('../posts/2018-11-14-Life.md')
  },
  {
    path: "/LIFE/2019-11-15-Life2",
    component: () => import('../posts/2019-11-15-Life2.md')
  },
  {
    path: "/post/2019-11-15-Life2",
    component: () => import('../posts/2019-11-15-Life2.md')
  },
  {
    path: "/Tutorial/2019-11-15-Life2",
    component: () => import('../posts/2019-11-15-Life2.md')
  }];
export default pageroutes;