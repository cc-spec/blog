module.exports = {
  title: '前端文档',
  description: '前端工程师',
  theme: 'vdoing',
  themeConfig: {
    subSidebar: 'structuring',
    sidebarDepth: 3,
    // logo: ''
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
      { text: 'css', link: '/css/' },
      { text: 'js', 
        items: [
          { text: '基础', link: '/js/'},
          { text: 'es6', link: '/js/' }
        ]
      },
      { text: 'Vue', link: '/vue/' },
      { text: '组件库', link: '/componentLibrary/' },
      { text: '阅读', link: '/reading/' },
      {
        text: 'cc的前端博客',
        items: [
          { text:'GitHub', link: 'https://github.com/cc-spec' },
          { text: '掘金', link: 'https://juejin.cn/user/1996368848647502' }
        ]
      }
    ],
    sidebar: {
      '/css/': [
        {
          title: '布局',
          children: [
            ['flex', 'flex布局'],
            ['三栏自适应布局.md', '三栏自适应布局']
          ]
        }
      ],
      '/js/': [
        {
          title: '基础知识',
          children: [
            ['scope', '作用域'],
            ['closure', '闭包'],
            ['module', '模块化'],
            ['this', 'this'],
            ['call&apply&bind', 'call、apply、bind'],
            ['prototype', '原型和原型链'],
            // ['inherit', '继承'],
            ['dataType', '数据'],
            ['防抖节流.md', '防抖节流'],
          ]
        },
        {
          title: 'es6',
          children: [
            ['class', 'class'],
          ]
        }
      ],
      '/vue/': [
        {
          title: 'vue理论知识',
          children: []
        }
      ],
      '/reading/': [
        {
          title: '网络',
          children: [
            ['图解HTTP.md', '图解HTTP']
          ]
        }
      ]
    }
  },
}