---
title: promise
date: 2022-02-26 16:34:40
permalink: /pages/dc925c/
categories:
  - js
  - es6
tags:
  - 
---

## 一、什么是promise
### 1. 本质
- promise本质是一个对象，抽象理解为一个容器，里面放着一个异步的事件，会在未来执行，新建的promise处于pending状态，如果这个事件执行成功了状态就变为resolved，失败则为rejected。
### 2. 特点
- 只能通过异步操作的结果确定promise的值
- 状态转变不可逆
### 3. 创建promise
```JavaScript
const promise = new Promise((resolve, reject) => {
  if (status) { // 异步操作成功
    resolve(1) // pending→resolved
  } else {
    reject(new Error('失败')) // pending→reject
  }
})
promise.then(result => console.log(result)).catch(error => console.log(error))
```
## 二、 promise方法
### 1. 实例方法
> ***then、catch、finally***
- **promise.then**
  - promise实例状态改变时执行（resolved或rejected）
  - 参数：（1）resolved状态执行函数（2）rejected状态执行函数
  - 返回一个新的promise
- **promise.catch**
  - promise实例状态变为rejected时执行
  - 参数：rejected状态执行函数
  - promise.catch(rejection) = promise.then(null, rejection) = promise.then(undefined, rejection)
  - 返回一个新的promise
- **promise.finally**
  - 无论promise状态是哪种，都会执行的方法
  - 参数：函数
  - 无返回值
  - 实现
  ```JavaScript
  Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
      value  => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason })
    );
  };
  ```
### 2. 静态方法
> ***all、any、race、allSettled、race、resolve、reject***
- **Promise.all**
  - 将多个promise包装成一个新的promise
  - 当多个promise**都**fullfilled时新的promise状态会变为fullfilled，否则rejected
  - 参数：promise数组
  - 返回值：新的promise
  ```JavaScript
  const p = Promise.all([p1, p2, p3]);
  // p1, p2, p3都fullfilled，p才fullfilled
  // p1, p2, p3任何一个rejected，p就rejected
  ```
- **Promise.any**
  - 将多个promise包装成一个新的promise
  - 当多个promise**任何一个**fullfilled时新的promise状态会变为fullfilled，否则rejected
  - 参数：promise数组
  - 返回值：新的promise
- **Promise.race**
  - 将多个promise包装成一个新的promise
  - 多个promise中的**某一个**状态改变，新的promise状态就追随改变
  ```JavaScript
  const p = Promise.all([p1, p2, p3]);
  // p1, p2, p3任何一个发生状态改变，变成fullfilled，p就fullfilled，否则就rejected
  ```
- **Promise.allSettled**
  - 将多个promise包装成一个新的promise
  - 多个promise中的**每一个**状态改变，新的promise状态变回fullfilled
  - 参数：promise数组
  - 返回值：参数数组返回的状态已经确定的promise数组，`[{status: fullfilled/rejected, 成功value/失败reason}]`
- **Promise.resolve**
  - 把非promise转为promise对象
  - 参数
    - （1）**promise实例**：返回这个promise实例
    - （2）**有then方法的对象**：将这个对象转为promise对象，立即执行then方法，then方法执行后状态变为fullfilled
    - （3）**没有then方法的对象或非对象**：返回一个新的promise对象，状态为fullfilled
    - （4）**不带参数**：返回一个fullfilled状态的promise对象
    ```JavaScript
    // 参数(1) promise实例
    const promise = new Promise((resolve, reject) => {
      resolve(1)
    })
    console.log(Promise.resolve(promise));
    // Promise {<fulfilled>: 1}
    //  [[Prototype]]: Promise
    //  [[PromiseState]]: "fulfilled"
    //  [[PromiseResult]]: 1

    // 参数(2) 有then方法的对象
    let thenable = {
      then: (resolve, reject) => {
        resolve('2-1')
      }
    }
    console.log(Promise.resolve(thenable)) // 为什么是pending？
    //  Promise {<pending>}
    //  [[Prototype]]: Promise
    //  [[PromiseState]]: "fulfilled"
    //  [[PromiseResult]]: 2-1


    // 参数(3) 没有then方法的对象或非对象
    // 情况1 没有then方法的对象
    let nothenable = {
      a: '3-1'
    }
    console.log(Promise.resolve(nothenable));
    // Promise {<fulfilled>: {…}}
    //  [[Prototype]]: Promise
    //  [[PromiseState]]: "fulfilled"
    //  [[PromiseResult]]: Object

    // 情况2 非对象
    console.log(Promise.resolve('3-2'));
    // Promise {<fulfilled>: '3-2'}
    //  [[Prototype]]: Promise
    //  [[PromiseState]]: "fulfilled"
    //  [[PromiseResult]]: "2-2"

    // 参数(4) 不带参数
    console.log(Promise.resolve());
    // Promise {<fulfilled>: undefined}
    //  [[Prototype]]: Promise
    //  [[PromiseState]]: "fulfilled"
    //  [[PromiseResult]]: undefined
    ```
- **Promise.reject**
  - 返回一个rejected状态的promise
## 三、手写promise的主要方法
<!-- TODO -->
## 四、奇怪的面试题
### 1. question one
```JavaScript
Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4);
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    console.log(2);
}).then(() => {
    console.log(3);
}).then(() => {
    console.log(5);
}).then(() =>{
    console.log(6);
})
```
