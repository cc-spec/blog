---
title: vue Router
date: 2022-01-15 20:12:48
permalink: /pages/94f4c2/
categories:
  - vue
tags:
  - 
---
## 一、什么是路由，前端路由
### 1. 路由的概念
- 路由本质上是一个映射表，决定了数据的收发，即从哪里来，往哪里去；
### 2. 前端路由
- 管理url和页面的映射关系，实现改变url时不对整个页面进行刷新，只是去获取相应的部分资源；
### 3. 应用
- SPA：单页面复应用，在前后端分离的基础上加上前端路由，来维护url和资源的映射关系
## 二、Vue Router
### 1. 实现改变url不对整个页面刷新的两种方式
- url的hash
	- hash即#，代表网页中的一个位置
    - 改变#右边的值相当于跳转到网页的一部分，不会对整个页面进行刷新
- HTML5的history模式
	- **history.pushState(data, title, ?url)**：不刷新页面的情况下跳转到指定的url，对应入栈
    - **history.replaceState(data, title, ?url)**：不刷新页面的情况下跳转到指定的url，但是无回退功能
    - **history.back()**：回退，对应出栈
    - **history.forward()**：前进
    - **history.go(number)**：number为1时，相当于forward，number为-1时，相当于back()
### 2. Vue Router的基本使用步骤
#### **模块化工程中使用**
- 创建router文件夹，index.js
  - 安装插件
  - 创建Vue Router对象并传入相关配置(1. url与组件的主要关系；2. 页面刷新方式)
  - 导出(模块化概念)
  - 在入口文件main.js中导入并注册
  - 在相应的组件中使用vue-router实现组件与路径一一对应
    - 创建路由组件
    - 配置路由映射：组件和路径的映射关系
    - 通过```<router-link>和<router-view>```渲染
      ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2ba125991e640ef9f744f2047b99fe6~tplv-k3u1fbpfcp-watermark.image)
- **组件中使用不带参数的路由**
  - 通过router-link to="路径"实现跳转
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0b256d932cda4824b07696a814f6b579~tplv-k3u1fbpfcp-watermark.image)
  - 通过代码的方式实现跳转
    ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd9229c332074e289e8e46bce103f59f~tplv-k3u1fbpfcp-watermark.image)
- **！！！带参数的路由配置**
	- 主要有两种方式
    - **params**  (user/abc) && **query**  (user?id=abc&name=18)
    - a. **params**
    - 不同的路由跳转到同一个组件时需要在后面拼接参数，如 user/abc
      - 实现过程
        - (1) 创建路由组件
        - (2) 在对应路由文件夹下配置映射关系
        - (3) 在router-link中实现  :to="'/路径/'+参数" 实现跳转
        - (4) 如果路由组件中需要显示参数，可通过 this.$route.params.参数名获取
      ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bf841a86cff4a6ca3c33901ed1a62a3~tplv-k3u1fbpfcp-watermark.image)
      ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/504718d288d740ddb9a41217d5332cc2~tplv-k3u1fbpfcp-watermark.image)
      ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a285502dcda14aeea8e1faeb6a1ee331~tplv-k3u1fbpfcp-watermark.image)
      ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88bc82cee2914bc3876e24acaab36cd9~tplv-k3u1fbpfcp-watermark.image)
    - b. **query**
    - 参数以?开头，多个参数以&连接
      - (1). 动态绑定to属性时传入一个对象，该对象中可包含查询参数
      ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e439cdc45034cd8a78a87ad45112dec~tplv-k3u1fbpfcp-watermark.image)
      ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a9963ecdb9e411ab6986decc7c3180b~tplv-k3u1fbpfcp-watermark.image)
      - (2). 如果在路由组件中需要获取参数，可通过`this.$route.query.参数名`获取
