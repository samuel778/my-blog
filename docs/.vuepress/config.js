module.exports = {
  title: "午后南杂",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Categories',
        icon: 'reco-category',
        items: [
          { items: [
            { text: 'FrontEnd', link: '/categories/frontEnd' },
            { text: 'BackEnd', link: '/categories/backEnd' },
          ] },
          { items: [
            { text: 'Essay', link: '/categories/essay' },
            { text: 'Article', link: '/categories/article' },
          ] },
          {
            items: [
              { text: 'Other', link: '/categories/other' }
            ]
          }
        ]
      },
      { text: 'Tags', link: '/tags/', icon: 'reco-tag' },
      { text: 'Three-Month Study', link: '/threeMonthStudy/', icon: 'reco-three' },
      { text: 'Contact',
        icon: 'reco-message',
        items: [
          { text: 'NPM', link: 'https://www.npmjs.com/~reco_luan', icon: 'reco-npm' },
          { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' },
          { text: '简书', link: 'https://www.jianshu.com/u/cd674a19515e', icon: 'reco-jianshu' },
          { text: 'CSDN', link: 'https://blog.csdn.net/recoluan', icon: 'reco-csdn' },
          { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-bokeyuan' },
          { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' },
        ]
      }
    ],
    logo: '/head.png',
    //search config
    search: true,
    searchMaxSuggestions: 10,
    // auto create sidebar
    sidebar: 'auto',
    // last Updated Date
    lastUpdated: 'Last Updated', // string | boolean
    // author
    author: 'reco_luan',
    // valine config
    valineConfig: {
      appId: 'xxxx',// your appId
      appKey: 'xxxx', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  }
}