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
      { text: 'elementui', link: '/componentLibrary/' },
      { text: '网络', link: '/network/' },
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
        '水平垂直居中',
        '重排和重绘',
        'BFC',
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
            ['API/数组-扁平化', '数组-扁平化'],
            ['API/数组-去重', '数组-去重'],
          ]
        }
      ],
      '/vue/': [
        '生命周期',
        '组件间通信',
        '插槽',
        '数据双向绑定原理',
        'vue Router',
        // 'vuex',
        'vue3'
      ],
      '/componentLibrary/': [
        {
          title: 'Form',
          children: [
            ['elementui/form/formValidate', '表单校验'],
            ['elementui/form/select', '下拉框'],
          ]
        },
        {
          title: 'Table',
          children: [
            ['elementui/table/combineRow', '表格合并'],
            ['elementui/table/expandRow', '表格行展开'],
          ]
        },
        {
          title: 'Tree',
          children: [
            ['elementui/tree/过滤节点', '过滤节点'],
          ]
        },
        {
          title: 'Cascader',
          children: [
            ['elementui/cascader/动态加载', '动态加载'],
          ]
        },
      ],
      '/network/': [
        '图解HTTP',
        '性能优化',
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