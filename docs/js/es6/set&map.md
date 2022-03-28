---
title: set&map
date: 2022-03-22 21:15:39
permalink: /pages/927c46/
categories:
  - js
  - es6
tags:
  - 
---

## 一、Set
### 1. 什么是Set
- Set是一种新的数据结构，成员值唯一，通过Set构造函数创建
### 2. 属性&方法
- 属性
  - size：Set中有多少成员
- 方法
  - add(value)：往Set结构中添加成员，返回Set结构本身
  - delete(value)：删除Set结构中的成员，返回一个Boolean值，表示是否删除成功
  - has(value)：判断Set结构中是否有该value，返回一个Boolean值，表示是否有该value
  - clear()：清除所有成员，无返回值
- 遍历Set结构
  - keys()：遍历键
  - values()：遍历值
  - entries()：遍历键值对
  - forEach()：使用回调函数遍历每个成员
  ```js
  let set = new Set([1, 2])
  for (let item of set.keys()) {
    console.log(item)
    // 1
    // 2
  }
  for (let item of set.values()) {
    console.log(item)
    // 1
    // 2
  }
  for (let item of set.entries()) {
    console.log(item)
    // [1, 1]
    // [2, 2]
  }
  ```
- 用途
  - 数组去重
  ```js
  // 1. Set和...
  [...(new Set([1,1,2,3,2]))]
  // 2. Set和Array.from()
  Array.from(new Set([1,2,3,1,5,2]))
  ```
  - 并集、交集、差集
  ```js
  let a = new Set([1, 2, 3])
  let b = new Set([4, 3, 2])
  // 1. 并集
  let union = new Set([...a, ...b])
  // 2. 交集
  let intersect = new Set([...a].filter(x => b.has(x)))
  // 3. 差集
  let difference = new Set([...a].filter(x => !b.has(x)))
  ```
## 二、WeakSet
### 1. 什么是WeakSet
- 与Set结构类似，也是不重复的值的集合，但与Set结构有两个区别
### 2. 与Set结构区别
- a. WeakSet的成员只能是对象
- b. WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
- c. WeakSet不可遍历
### 3. 方法
- add(value)：添加一个新成员（value）
- delete(value)：删除成员（value）
- has(value)：是否包含该value，返回Boolean值
### 4. 用处
- 存储DOM节点
## 三、Map
### 1. 什么是Map
- 一种新的数据结构，类似于对象，对象只能接收字符串作为键名，而Map可以接收各种类型的值做键
### 2. 属性&方法
- 属性
  - size：成员总数
- 方法
  - set(key, value)：key为键，value为值，给Map结构定义一个新成员，返回Map结构
  - get(key)：获取key对应的value，没获取到返回undefined
  - has(key)：Map中是否有该key，返回Boolean值
  - delete(key)：删除某个key，返回Boolean值
  - clear()：清除所有成员，无返回值
### 3. 遍历
同Set：`keys()、values()、entries()、forEach()`
### 4. 数据结构转换
- 数组
  - Map转数组：`[...(new Map().set(a, 1).set(b, 2))]`
  - 数组转Map：`new Map([[a, 1], [b, 2]])`
- 对象
  - Map转对象
  ```js
  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
      obj[k] = v
    }
    return obj
  }
  ```  
  - 对象转Map：`new Map(Object.entries(obj))`
- JSON
  - Map转JSON
  ```js
  // 1. Map的键名都是字符串
  function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
  }
  // 2. Map的键名有非字符串
  function mapToArrayJson(map) {
    return JSON.stringify([...map]);
  }  
  ```
  - JSON转Map
  ```js
  function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
  }
  ```
### 5. 用处
- 解决了同名属性碰撞（clash）的问题
## 四、WeakMap
### 1. 什么是WeakMap
- 与Map结构相似
### 2. 与Map结构区别
- a. 只接受对象作为键名（null除外）
- b. WeakMap的键名所指向的对象，不计入垃圾回收机制，弱引用的只是键名，而不是键值
- c. WeakMap不可遍历
### 3. 方法
- get(key)
- set(key, value)
- has(key)
- delete(key)
### 4. 用途
- DOM节点作为键名
- 部署私有属性