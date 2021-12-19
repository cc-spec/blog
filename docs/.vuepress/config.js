module.exports = {
  title: '前端文档',
  description: '前端工程师',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'cc的前端博客',
        items: [
          { text:'GitHub', link: 'https://github.com/cc-spec' },
          { text: '掘金', link: 'https://juejin.cn/user/1996368848647502' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎',
        path: '/',
        collapsable: false,
        children: [
          { title: '学习前必看', path: '/' }
        ]
      },
      {
        title: '前端基础',
        path: '/handbook/ConditionalTypes',
        collapsable: false,
        children: [
          { title: '数据类型', path: '/handbook/ConditionalTypes' },
          { title: '泛型', path: '/handbook/Generics' }
        ]
      }
    ]
  },
}