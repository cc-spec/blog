---
title: async&await
date: 2022-02-23 21:26:14
permalink: /pages/878ee0/
categories:
  - js
  - es6
tags:
  - 
---

## 一、什么是async/await
### 1. async函数（异步）
- async函数是generate函数的语法糖，表示期望当前函数中有异步操作，如果包含await，则一定会异步运行，否则为同步运行，通过promise.resolve()方法将返回值封装成一个promise对象
### 2. await表达式（等待）
- 表示将控制权先交给await后面的函数，该函数运行完再接着运行async函数中剩下的代码，通过await将代码切割成几个片段，await及其之前的代码同步运行，await之后的代码会被放入执行队列中，属于微任务，按照事件循环的次序运行
```JavaScript
function fn() {
  return '被执行了'
}
async function test() {
  let res = await fn()
  console.log(res)
}
test()
```
### 3. 组合
- await后面的函数就是他要等的东西，分为两种情况
  - 不是promise对象：await会阻塞后面的代码，先执行await等的函数，同步代码执行完的结果就是await表达式的结果，最后回到async函数中执行后续代码
  - 是promise对象：await同样会阻塞后面的代码，先执行await等的函数，等到promise对象fulfilled，将resolve的参数作为表达式的运算结果，最后回到async函数中执行后续代码
## 二、使用场景
### 1. 按顺序调接口
- 按照顺序获取多张图片
```JavaScript
imgList.forEach(async item => {
  const res = await queryFiles({ fileId: item })
  if (res.status) srcList.push(res.result)
})
```
### 2. 并发请求
- 同时进行多个请求
### 3. 错误处理
- 结合try/catch进行错误处理
```JavaScript
async function f() {
  try {
    await new Promise(function (resolve, reject) {
      throw new Error('出错了');
    });
  } catch(e) {
  }
  return await('hello world');
}
```
## 三、简单实现
```JavaScript
function asyncToGenerator(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments)
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult
        try {
          generatorResult = gen[key](arg)
        } catch (error) {
          return reject(error)
        }
        const { value, done } = generatorResult
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => step('next', val), err => step('throw', err))
        }
      }
      step("next")
    })
  }
}
```
