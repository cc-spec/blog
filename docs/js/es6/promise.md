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
  - promise实例状态改变时执行（执行resolve或reject）
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
  - 当多个promise**每一个**fullfilled时新的promise状态会变为fullfilled，否则rejected
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
  - 多个promise中的**每一个状态改变**，新的promise状态变回fullfilled
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
### Promise实现
(1) 观察者模式
> 收集依赖 -> 触发通知 -> 取出依赖执行
> Promise中的观察者模式：**new Promise -> then()收集回调 -> resolve/reject执行回调**
(2) new Promise的时候做了什么
- Promise接收一个executor(执行器)，在new Promise的时候立即执行executor回调
- executor内部的异步操作被放入宏/微任务队列，等待执行
- then被执行，收集成功/失败回调，放入成功/失败队列
- executor内部的异步操作被执行，触发resolve/reject，从成功/失败队列中取出回调依次执行
(3) promise A+ 对状态的规定
- 只有三种状态，pending、fullfilled、rejected
- 状态只能从pending -> fullfilled 或者 pending -> rejected，且不可逆
(4) then方法如何链式调用
- then方法返回了一个Promise
- then方法需要拿到上一个then方法的返回值
- then回调需要顺序执行
(5) then方法接收到非函数
- 直接将值传递到成功函数中
(6) then方法中对状态的处理
- 区分三种状态
  - pending时将成功函数和失败函数push进不同的队列
  - fullfilled时，执行成功函数，并且传入上一个then的返回值
  - rejected时，执行失败函数，并且传入上一个then的返回值
```JavaScript
// Promise三种状态
const PENDING = 'pedding'
const FULLFILLED = 'fullfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.resolveQueue = [] // 成功队列
    this.rejectQueue = [] // 失败队列
    this._status = PENDING // 初始化状态为pending
    this._value = undefined // 储存then的返回值

    let _resolve = (val) => {
      const run = () => {
        if (this._status !== PENDING) return // 如果状态已经改变，就直接return
        this._status = FULLFILLED // 变更状态
        this._value = val // 储存当前值
        while(this.resolveQueue.length) {
          const callback = this.resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }

    let _reject = (val) => {
      const run = () => {
        if (this._status !== PENDING) return
        this._status = REJECTED
        this._value = val
        while(this.rejectQueue.length) {
          const callback = this.rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }

    executor(_resolve, _reject)
  }

  // Promise.prototype.then
  then(resolveFn, rejectFn) {
    // 非函数情况处理
    typeof resolveFn !== 'function' ? resolveFn = value => value : null
    typeof rejectFn !== 'function' ? rejectFn = reason => {
      throw new Error(reason instanceof Error ? reason.message : reason)
    } : null
    // then方法返回一个新的promise，才能实现链式调用
    return new MyPromise((resolve, reject) => {
      const fullfilledFn = value => {
        try {
          // 获取执行第一个promise的成功回调及返回值
          let res = resolveFn(value)
          // 返回值如果还是一个promise，则可以继续调新的promise的then方法，否则直接resolve
          res instanceof MyPromise ? res.then(resolve, reject) : resolve(res)
        } catch(err) {
          reject(err)
        }
      }

      const rejectedFn = error => {
        try {
          let res = rejectFn(error)
          res instanceof MyPromise ? res.then(resolve, reject) : resolve(res)
        } catch(err) {
          reject(err)
        }
      }

      // resolve/reject状态处理
      switch(this._status) {
        case PENDING:
          this.resolveQueue.push(fullfilledFn)
          this.rejectQueue.push(rejectedFn)
          break;
        case FULLFILLED:
          fullfilledFn(this._value)
          break;
        case REJECTED:
          rejectedFn(this._value)
          break;
      }
    })
  }

  // Promise.prototype.catch
  catch(rejectFn) {
    return this.then(undefined, rejectFn)
  }

  // Promise.prototype.finally
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value)
      reason => MyPromise.reject(callback()).then(() => throw reason)
    )
  }
}

const p1 = new MyPromise((resolve, reject) => {
  resolve(1)          //同步executor测试
})

p1
  .then(res => {
    console.log(res)
    return 2          //链式调用测试
  })
  .then()             //值穿透测试
  .then(res => {
    console.log(res)
    return new MyPromise((resolve, reject) => {
      resolve(3)      //返回Promise测试
    })
  })
  .then(res => {
    console.log(res)
    throw new Error('reject测试')   //reject测试
  })
  .then(() => {}, err => {
    console.log(err)
  })
```

### 1. Promise.resolve
- 只区分是Promise对象的情况，其他用new Promise包装，就可实现
```JavaScript
static resolve(value) {
  if (value && typeof value === 'object' && value instanceof MyPromise) {
    return value
  }
  return new MyPromise((resolve) => {
    resolve(value)
  })
}
```
### 2. Promise.reject
```JavaScript
static reject(reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}
```
### 3. Promise.all
```JavaScript
static all(promiseArr) {
  let index = 0
  let result = []
  return new MyPromise((resolve, reject) => {
    promiseArr.forEach((p, i) => {
      MyPromise.resolve(p).then(
        val => {
          index++
          result[i] = val
          if (index === promiseArr.length) resolve(result)
        },
        err => {
          reejct(err)
        }
      )
    })    
  })
}
```
### 4. Promise.race
```JavaScript
static race(promiseArr) {
  return new MyPromise((resolve, reject) => {
    promiseArr.forEach(p => {
      MyPromise.resolve(p).then(
        value => resolve(value),
        err => reject(err)
      )
    })
  })
}
```
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
