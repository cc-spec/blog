---
title: call、apply、bind
author: coderc
date: 2022-1-4
permalink: /pages/795a3c/
categories: 
  - js
tags: 
  - 
---

## 一、作用
> 改变运行时this的指向
### 1、why
- 改变函数运行时[作用域](/js/scope)中的this指向，也就是通过函数来调用这三个方法实现改变this指向，运行时作用域中的this指向哪呢？[看这里](/js/this)
### 2、what
- 函数
- 改变this指向的函数
### 3、how
- 函数调用
  - **call: funcName.call(thisArg, arg1, arg2,...)**
  - **apply: funcName.apply(thisArg, [arg1, arg2,...])**
  - **bind: funcName.bind(thisArg, arg1, arg2,...)**
### 4、异同
- call和apply
  - call：参数按次序传入
  - apply：参数必须是一个数组/类数组
- call，apply 和 bind
  - call和apply会调用函数
  - bind只是创造了这个函数的副本，并且不会调用
## 二、实现
### 1、call
- 问题
  - (1). call做了什么？
    调用了函数，将this指向传入的第一个参数，接受额外的参数
  - (2). this什么时候会指向参数1？  
    - 调用者(f1)是obj(o1)的方法
- 执行
  - (1). 将函数设置为对象的属性
  - (2). 执行这个函数
  - (3). 删除该函数（属性）
  - (4). 接收额外的参数传到函数中
- 实现
```javascript
Function.prototype.call2 = function(obj) {
  let args = [...arguments] // 将arguments转换成数组
  // let args = [].shift.call(arguments)
  args.splice(0, 1) // 删除第一个参数，因为第一个参数是this指向的值
  let context = obj || window
  context.fn = this // this现在指向函数的调用者
  let res = context.fn(...args)
  delete context.fn
  return res
}

let o1 = {
  value: 111
}

var value = 222

function f1(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}

console.log(f1.call2(o1, 'hhh', 7));
f1.call2() // 未传参数时this指向window
```
### 2、apply
- apply与call类似，唯一区别是参数的形式，apply接收数组或类数组
- 实现
```javascript
Function.prototype.apply2 = function(obj, arr) {
  let args = arr ? [...arr] : []
  let context = obj || window
  context.fn = this
  let res = context.fn(args)
  delete context.fn
  return res
}

var o1 = {
  name: 'hhh',
  age: 11
}

function test([a, b]) {
  console.log(this.name, this.age);
  console.log(a, b);
}

test.apply2(o1, [1, 2])
```
### 3、bind
- bind与call、apply不同，他是返回原函数的拷贝，而且不会执行
  - (1). 改变了this的指向，指向了bind函数的第一个参数
  - (2). 返回了一个函数（原函数的拷贝）
  - (3). 可以传递额外的参数
- 实现
```javascript
Function.prototype.bind2 = function(o) {
  var self = this, boundArgs = arguments;
  return function () {
    var i, args = [];
    for (i = 1; i < boundArgs.length; i++) {
      args.push(boundArgs[i]) // 调用bind传的参
    }
    for (i = 0; i < arguments.length; i++) {
      args.push(arguments[i]) // 执行原函数传的参
    }
    return self.apply(o, args)
  }
}

var o = {
  name: 'hhh'
}

function test() {
  console.log(this.name);
  console.log(arguments);
}

var fn = test.bind2(o, 1)
fn(2)
```