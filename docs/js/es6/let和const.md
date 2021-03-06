---
title: let和const
date: 2022-01-15 19:35:50
permalink: /pages/e3d8f6/
categories:
  - js
  - es6
tags:
  - 
---
## 一、let、const
### 1. 为什么要有let、const
- #### [作用域](/js/basic/scope)
	- es6之前
    - 全局作用域→全局变量 
      **1.全局作用域下声明  2.函数内部不使用关键字声明的变量**   
      - 函数作用域→局部变量
      **1.函数中声明的变量  2.调用函数传递的参数**
      - 变量调用规则
      全局或函数作用域中都可使用，函数内部使用全局变量是沿**作用域链**向上查找最近的值，但是全局作用域下无法使用函数作域中声明的局部变量，**立即执行函数 and 闭包**正是用来解决这一问题
    - es6新增
    	- 块级作用域
        **由{}包含起来的代码区域，for循环**
- #### var声明变量的缺点
	- 全局情况下声明的变量在全局中生效，容易造成全局作用域污染，理想情况是变量在使用时创建，不使用时就销毁掉，显然var无法满足
    - var声明变量存在变量提升，
### 2. let、const、var对比
- **let VS const**
    - let声明变量，const声明常量
    - const声明常量时必须赋初值
    - const声明常量时如果该常量为Object，声明的是指向这个Object的引用，里面的属性和值可以修改
- **let、const VS var**
    - let、const 声明变量时会为其隐式创造块级作用域
    - let、const不可重复声明
    - let、const不存在变量提升，因此会存在暂时性死区（声明之前调用会引发引用错误）的问题
### 3. let、const实现
- **let实现**
- **const实现**
```JavaScript
function _const(key, value) {
  const desc = {
    value,
    writable: false
  }
  Object.defineProperty(window, key, desc)
}
```
## 二、面试题
<!-- TODO -->