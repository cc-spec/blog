---
title: README
date: 2022-01-15 20:10:28
permalink: /pages/92a0f9/
categories:
  - vue
tags:
  - 
---

## 1. 学过的两大框架的对比
- angular使用TypeScript开发
- Vue体积较angular小
- angular中的API接口较多，学习成本大，更适合于大型应用
- Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少
## 2. [Vue生命周期](./生命周期.md)
## 3. [Vue Router](./vue%20Router.md)
## 4. [Vuex](./vuex.md)
## 5. [组件间通信](./组件间通信.md)
## 6. [Vue数据绑定](./数据双向绑定原理.md)
## 7. 计算属性
- 计算属性存在缓存，即上一次调用计算属性的getter方法后的数据，缓存发生变化才会重新求值；
- 方法：一旦重新渲染就会立即执行这个函数