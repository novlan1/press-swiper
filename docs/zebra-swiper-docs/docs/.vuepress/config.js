const outputConfig = getPublicPath()
  ? {
    publicPath: getPublicPath(), // 部署应用包时的基本URL
  }
  : {};

module.exports = {
  title: 'Press Swiper',
  description: '基于uniapp，适配多端的高度自定义轮播组件',
  base: process.env.PUBLISH_PATH || '/press-swiper/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent.png',
      },
    ],
  ],
  themeConfig: {
    logo: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent.png',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/component/' },
      { text: '配置', link: '/basic/' },
      { text: '性能', link: '/performance/' },
      // { text: 'h5演示', link: 'https://novlan1.github.io/press-swiper/h5/#' },
      // { text: 'uniapp使用', link: 'https://ext.dcloud.net.cn/plugin?id=7273' },
      // { text: 'zebra-ui组件库', link: 'https://zebraui.com' },
      // { text: 'github', link: 'https://github.com/novlan1/press-swiper' },
      // { text: 'gitee', link: 'https://gitee.com/zebra-ui/zebra-uniapp-swiper' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/guide/',
            '/guide/plan/',
            '/guide/press-swiper-plus/',
            '/guide/notice/',
            '/guide/questions/',
            '/guide/changelog/',
          ],
        },
      ],
      '/component/': [
        {
          title: '组件',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/component/start/',
            '/component/base/',
            // '/component/carousel/',
          ],
        },
        // {
        //   title: '轮播块',
        //   collapsable: false,
        //   sidebarDepth: 3,
        //   children: ['/component/carousel/'],
        // },
        {
          title: '常用配置',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/component/carousel/',
            '/component/loop/',
            '/component/loop/autoplay',
            '/component/loop/switcher',
            '/component/loop/indicator',
            '/component/loop/controller',
            '/component/loop/thumbs',
            '/component/loop/scrollbar',
            '/component/loop/virtual',
          ],
        },
        {
          title: '切换效果',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/component/effect/fade/',
            '/component/effect/cube/',
            '/component/effect/coverflow/',
            '/component/effect/flip/',
            '/component/effect/cards/',
            '/component/effect/panorama/',
            '/component/more-demo/carousel',
            '/component/effect/creative/',
          ],
        },
        {
          title: '高级案例',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/component/more-demo/travel-slider',
            '/component/more-demo/paper',
          ],
        },
      ],
      '/basic/': [
        {
          title: '配置',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            '/basic/',
            '/basic/base/',
            '/basic/carousel/',
            '/basic/loop/',
            '/basic/events/',
            '/basic/methods/',
          ],
        },
        {
          title: '模块',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            '/basic/modules/',
            '/basic/modules/autoplay/',
            '/basic/modules/pagination/',
            '/basic/modules/effects/',
          ],
        },
      ],
      '/performance/': [
        {
          title: '性能',
          collapsable: false,
          sidebarDepth: 3,
          children: ['/performance/', '/performance/size/'],
        },
      ],
    },
  },
  configureWebpack: {
    output: outputConfig,
  },
};

function getPublicPath() {
  let result = process.env.VUE_APP_PUBLICPATH;
  if (result && !result.endsWith('/')) {
    result = `${result}/`;
  }
  return result;
}
