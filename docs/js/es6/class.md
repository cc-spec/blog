---
title: class
date: 2022-01-06 17:13:19
author: coderc
permalink: /pages/327443/
categories:
  - js
tags:
  - 
---

# class

## 一、class
### 1. 什么是class
> **class是一个函数，通过class关键字声明，是原型的语法糖，可以生成函数的蓝图**
### 2. class可以做什么
#### 生成函数蓝图
- 属性
- 方法
  - 使用原型
```JavaScript
// 声明属性
function Fun(name, age) {
  this.name = name
  this.age = age
}

// 方法
Fun.prototype.f = function() {
  return 'i am a function!'
}

// 继承
function NewFun(newName, newAge, spec) {
  Fun.call(this, newName, newAge, spec)
  this.spec = spec
}
```
  - 使用class
```JavaScript
class Fun {
  // 属性
  constructor(name, age) {
    this.name = name
    this.age = age
  },
  // 方法
  f() {
    return 'i am a function'
  }
}

// 继承
class NewFun extends Fun {
  constructor(name, age, spec) {
    super(Fun)
    this.spec = spec
  }
}
```
## 二、babel如何编译class
<!-- TODO -->
