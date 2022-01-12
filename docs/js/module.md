---
title: module
author: coderc
date: 2022-01-04 19:05:51
permalink: /pages/2c69a2/
categories:
  - js
tags:
  - 
---
# 模块化？
> 模块化给你了一个方式去组织这些变量和函数。通过模块化，你可以把变量和函数合理的进行分组归类。它把这些函数和变量放在一个模块的作用域内。这个模块的作用域能够让其中的函数一起分享变量。

## 一、模块的发展史
> 全局变量→AMD/CMD→CommonJS→UMD→ES6 Module
### 1. 全局变量
- 使用全局变量(window)→IIFE立即执行函数→命名空间
### 2. AMD/CMD
- 什么是AMD/CMD
  - AMD和CMD都是模块化规范，主要应用于浏览器端
- RequireJS是AMD规范的实现
- SeaJS是CMD规范的实现
- 顺序：先有RequireJS，在其推广过程中AMD被创造出来
### 3. CommonJS
- 跟AMD/CMD一样都是模块化规范，区别在于CommonJS应用于服务器端
- 语法
  - 导出：exports && module.exports
    - exports：CommonJS定义接口导出方法
    - module.exports：CommonJS2中的接口导出方法，把每一个文件当做一个模块，顶层对象为module对象，module对象的exports属性用来导出接口
  - 导入：require
### 4. UMD
- UMD是通用的模块化规范
### 5. ES6 Module
- 语言层面的模块化规范
- 语法
  - 导出：export
    - 方式1
    ```JavaScript
    export const a = "testA"
    ```
    - 方式2
    ```JavaScript
    const b = "testB"
    export { b }
    ```
    - 方式3
    ```JavaScript
    <!-- 默认导出 -->
    export default {}
    ```
  - 导入：import
    - `import { c } from '文件路径'`
  - 别名：as
    - 导出：`export { d as moduleD }`
    - 导入：`import { e as moduleE } from '文件路径'`
### 6. 比较
- **CommonJS与AMD**
  - 同
    - 运行时加载
  - 异
    - CommonJS是服务器端模块化规范，AMD是浏览器端模块化规范
    - CommonJS同步加载代码，AMD异步加载代码
- **CommonJS与ES6 module**
  - 异
    - CommonJS运行时加载，ES6 module编译时加载（import() 运行时加载）
## 二、模块化打包工具
### 1. webpack
### 2. vite
- 基于ESbuild
