module.exports = {
  title: '前端文档',
  description: '前端工程师',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto'
  },
  locales: {
    '/': {
      lang: 'zh-CN' // 语言
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '../../assets'
      }
    }
  },
  themeConfig: {// 开启侧边栏
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
        title: 'CSS',
        path: '/css/flex',
        children: [
          { title: 'flex布局', path: '/css/flex' }
        ]
      },
      {
        title: 'JS',
        path: '/js/Scope',
        children: [
          { title: '作用域', path: '/js/scope' },
          { title: '闭包', path: '/js/closure' },
          { title: '数据', path: '/js/dataType' },
        ]
      },
      {
        title: 'Vue',
        path: '/vue/start',
        children: [
          { title: '初识Vue', path: '/vue/start' }
        ]
      },
      {
        title: '组件库',
        children: [
          { 
            title: 'elementui', path: '/componentLibrary/elementui/table/combineRow',
            children: [
              // { title: 'form', path: '/componentLibrary/elementui/form' },
              { title: 'table', path: '/componentLibrary/elementui/table/combineRow' }
            ]
          }
        ]
      }
    ]
  },
}