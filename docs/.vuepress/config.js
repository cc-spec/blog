module.exports = {
  title: '前端文档',
  description: '前端工程师',
  base: '/blog/',
  theme: 'vdoing',
  themeConfig: {
    subSidebar: 'structuring',
    sidebarDepth: 3,
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
    // logo: '', // 图标
    nav: [
      { text: '首页', link: '/' },
      { text: 'css', link: '/css/' },
      { text: 'js', link: '/js/'},
      { text: 'Vue', link: '/vue/' },
      { text: '组件库', link: '/componentLibrary/' },
      { text: '阅读', link: '/reading/' },
      { text: '其他', link: '/other/' },
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
        'flex',
        '三栏自适应布局',
        '水平垂直居中'
      ],
      '/js/': [
        {
          title: '基础知识',
          children: [
            ['basic/scope', '作用域'],
            ['basic/closure', '闭包'],
            ['basic/module', '模块化'],
            ['basic/this', 'this'],
            ['basic/call&apply&bind', 'call、apply、bind'],
            ['basic/prototype', '原型和原型链'],
            // ['inherit', '继承'],
            ['basic/dataType', '数据'],
            ['basic/防抖节流', '防抖节流'],
            ['basic/事件循环', '事件循环'],
          ]
        },
        {
          title: 'es6',
          children: [
            ['es6/class', 'class'],
            ['es6/let和const', 'let和const'],
            ['es6/async&await', 'async&await'],
            ['es6/promise', 'promise'],
            ['es6/set&map', 'set&map'],
          ]
        },
        {
          title: 'API',
          children: [
            ['API/遍历', '遍历'],
            ['API/深浅拷贝', '深浅拷贝'],
          ]
        }
      ],
      '/vue/': [
        '生命周期',
        '组件间通信',
        '插槽',
        '数据双向绑定原理',
        'vue Router'
      ],
      '/reading/': [
        {
          title: '网络',
          children: [
            ['图解HTTP.md', '图解HTTP']
          ]
        }
      ],
      '/other/': [
        'git',
        ['database', '数据库'],
        'vscode',
        'moment',
      ]
    }
  },
}