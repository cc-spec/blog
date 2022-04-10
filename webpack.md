## 一、什么是webpack
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2240c2f6d51b4b57bf70586e744a06d9~tplv-k3u1fbpfcp-watermark.image?)
- 官网：静态模块化打包工具
    - 模块化发展史：window→立即执行函数→namespace→AMD/CMD(浏览器端)→commonJS(服务器端)→ESMoudule
- 个人理解：从入口出发，构建包之间的依赖关系，最后输出这些依赖
## 二、基础概念
### 1. 入口（entry）
- 单个入口
  - 字符串
  ```js
  enrtry: {
    name: path
  }
  ```
- 多个入口
  - 数组
  ```js
  entry: {
    name: [path1, path2]
  }
  ```
  - 对象
  ```js
  entry: {
    name1: path1,
    name2: path2
  }
  ```
### 2. 输出（output）
- 对象
  - filename：文件名
  - path：路径
  - clean：是否清空无依赖文件
- 一个入口一个出口
```js
output: {
  filename: 文件名,
  path: 文件输出路径,
  clean: true/false,
  ...
}
```
- 多个入口一个出口
```js
output: {
  filename: '[name].js',
  path: path.join(__dirname, 'dist'),
}
```
### 3. loader
- 配置
  
- 常用loader
  - babel-loader：转换es6、es7等js新语法
  - css-loader：支持css文件的加载和解析（1. 加载css文件 2. 转换成commonjs对象）
  - style-loader：将样式通过<style>标签添加到<head>中
  - less-loader：将less文件转换成css
  - ts-loader：将ts转换成js
  - file-loader：进行图片、字体等的打包
  - url-loader：处理图片、字体，对较小的这些资源进行base64转码
  - raw-loader：将文件以字符串形式导入
  - thread-loader：多进程打包js和css
### 4. 插件（plugin）
  - SplitChunksPlugin：分包
  - CleanWebpackPlugin：清理构建目录
  ```js
  plugin: [
    new CleanWebpackPlugin()
  ]
  ```
  - ExtractTextWebpackPlugin：将css从bundle文件里提取成一个独立的css文件
  - CopyWebpackPlugin：将文件或文件夹拷贝到构建的输出目录
  - HtmlWebpackPlugin：创建HTML文件去承载输出的bundle
  - UglifyjsWebpackPlugin：压缩js
  - ZipWebpackPlugin：将打包出的资源生成一个zip包
### 5. 模式（mode）
  - development：开发环境
  - production：生产环境
  - none：无
### 6. 浏览器兼容性（browser compatibility）
### 7. 环境（environment）
## 三、功能
### 1. 热更新
### 2. 文件指纹
### 3. 文件压缩
### 4. css增强
### 5. 静态资源内联

> 重点plugin
## 一、SplitChunksPlugin
### 1. 分包策略
- 满足下面四个初始条件就会自动分包
- (1) 新的块可以共享或来自node_modules文件夹的模块
- (2) 新块压缩之前大于30kb
- (3) 按需加载并发请求数量<=5
- (4) 初始页面加载并发请求数量<=3
### 2. 重新划分
- 体积大小、共用率、更新频率
- 总体体积不变，切分成更小的包，并行加载，速度更快
- 提取公共代码
- 按需加载
### 3. 参数
- chunks: 选择哪些chunks进行分割，三个值 initial\async\all
- **minSize**: 比这个值大的模块才会被提取
- maxSize: 会尽量将chunk分的比maxSize小，当设为0代表能分则分，分不了不会强制
- **minChunks**: 重复多少次才会被提取
- **maxAsyncRequests**: 按需加载时，代码块的最大数量
- **maxInitialRequests**: 入口最多分成的代码块数量，一个代码块最终就会对应一个请求数，太小的值会使你无论怎么分割，都无法让入口的代码块变小
- name: 默认为 true，用来决定缓存组打包得到的 chunk 名称，容易被轻视但作用很大。奇特的是它有两种类型取值，boolean 和 string：
  - 值为 true 的时候，webpack 会基于代码块和缓存组的 key 自动选择一个名称，这样一个缓存组会打包出多个 chunk
  - 值为 false 时，适合生产模式使用，webpack 会避免对 chunk 进行不必要的命名，以减小打包体积，除了入口 chunk 外，其他 chunk 的名称都由 id 决定，所以最终看到的打包结果是一排数字命名的 js，这也是为啥我们看线上网页请求的资源，总会掺杂一些 0.js，1.js 之类的文件
  - 值为 string 时，缓存组最终会打包成一个 chunk，名称就是该 string。此外，当两个缓存组 name 一样，最终会打包在一个 chunk 中。你甚至可以把它设为一个入口的名称，从而将这个入口会移除
- **cacheGroups**: 配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。默认将所有来自 node_modules目录的模块打包至vendors组，将两个以上的chunk所共享的模块打包至default组
  - **test**: 通过正则表达式精准匹配要提取的模块
  - priority: 优先级，当模块同时命中多个缓存组的规则时，会被分配到优先级高的缓存组
## 二、HtmlWebpackPlugin
> 创建HTML文件去承载输出的bundle，使用<script>标签引入所有webpack bundle
### 1. 单个入口（单页面应用）
```js
entry: './src/index.js',
plugin: [
  new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html', 
  chunks: ['index'],
  inject: true,
  minify: { // 压缩
    html5: true,
    collapseWhitespace: true, // 是否压缩空白
    preserveLineBreaks: false, // 是否保留换行
    minifyCSS: true, // 是否压缩css
    minifyJS: true, // 是否压缩js
    removeComments: false // 是否删除注释
  }
})
]
```
### 2. 多个入口（多页面应用）
- （1）通过glob获取入口文件
- （2）动态设置entry的filename和file
- （3）动态添加htmlWebpackPlugin
```js
const glob = require("glob")

// 动态设置多页面应用（MPA）的entry和HTML
const setMPA = () => {
  const entry = {}
  const HtmlWebpackPlugins = []

  // (1)获取入口文件路径
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
  // (2)动态设置entry
  Object.keys(entryFiles)
  .map(index => {
    const entryFile = entryFiles[index] // 入口文件
    const match = entryFile.match(/src\/(.*)\/index\.js/)
    const pageName = match && match[1]
    entry[pageName] = entryFile
    // (3)动态添加htmlWebpackPlugin
    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })      
    )
  })
  return {
    entry,
    HtmlWebpackPlugins
  }
}
const { entry, HtmlWebpackPlugins } = setMPA()

entry,
plugin: [
  ...HtmlWebpackPlugins
]
```