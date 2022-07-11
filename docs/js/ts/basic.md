---
title: TypeScript
date: 2022-04-23 18:55:44
permalink: /pages/819c9e/
categories:
  - js
  - ts
tags:
  - 
---

## 一、类型
### 1. js已有的
> **简单数据类型、复杂数据类型**
  - 简单数据类型：number、string、boolean、null、undefined、symbol、bigInt
    - `let 变量名: 变量类型 = 初始值`
  - 复杂数据类型：object（对象、数组、函数等）
    - 数组
    ```ts
    // 写法1
    // let 变量: 类型[] = [值1, ...]
    let nums: number[] = [1, 2, 3]

    // 写法2
    // let 变量: Array<类型> = [值1, ...]
    let strs: Array<string> = ['a', 'b', 'c']
    ```
    - 函数（指的是函数参数和返回值的类型）
    ```ts
    // （1）普通函数
    function 函数名(形参1: 类型 = 默认值, 形参2: 类型 = 默认值, ...): 返回值类型 {}
    function fun1(a: number, b: number): number {
      retunr a + b
    }

    // （2）箭头函数
    const 函数名 = (形参1: 类型 = 默认值, 形参2: 类型 = 默认值, ...): 返回值类型 => {}
    const fun2 = (a: number, b: number): number => {
      return a + b
    }

    // （3）定义函数类型（时机：两个或多个函数的参数类型和返回值类型一致时）
    type Fn = (n1: number, n2: number) => number // 定义名为Fn的函数类型
    const add3: Fn = (a, b) => { return a + b } // 使用Fn定义另外一个参数类型和返回值类型一致的函数

    //（4）可选参数
    function 函数名(形参1: number, 形参2?: number) {} // 形参1为必须参数，形参2为可选参数，可选参数必须在必须参数的后面
    ```
    - 对象
    ```ts
    //（1）定义
    const 对象名: {
      属性名1：类型1，
      属性名2?：类型2，
      方法名1(形参1: 类型1，形参2: 类型2): 返回值类型,
      方法名2:(形参1: 类型1，形参2: 类型2) => 返回值类型
    } = { 属性名1: 值1，属性名2：值2  }

    // （2）类型别名定义对象类型
    // 创建类型别名
    type Person = {
      name: string，
      age: number
      sayHi(): void
    }

    // 使用类型别名作为对象的类型：
    let person: Person = {
      name: '小花',
      age: 18
      sayHi() {}
    }

    // （3）接口你定义对象类型
    // 这里用 interface 关键字来声明接口
    interface IGoodItem  {
      // 接口名称(比如，此处的 IPerson)，可以是任意合法的变量名称，推荐以 `I` 开头
      name: string, price: number, func: ()=>string
    }

    // 声明接口后，直接使用接口名称作为变量的类型
    const good1: IGoodItem = {
      name: '手表',
      price: 200,
      func: function() {
        return '看时间'
      }
    }

    // （4）类型别名与接口的区别
    相同点：都可以给对象指定类型
    不同点：
      接口：只能为对象指定类型，可以继承
      类型别名：可以为任意类型指定别名

    // （5）接口继承
    interface 接口2 extends 接口1 {
      属性1: 类型1, // 接口2有接口1没有的属性
      ...
    }
    ```
### 2. ts新增的
> **联合类型、类型别名、接口、数组、字面量类型、枚举、void、any**
  - **联合类型**
    - 由两个或多个其他类型组成的类型，表示其中之一
    - 定义联合类型：`let 变量: 类型1 | 类型2 | 类型3... = 初始值`
  - **类型别名（type）**
    - 定义类型的别名：`type 别名 = 类型`
  - **接口（interface）**
    - 定义接口：`interface 接口名 {属性1: 类型1, 属性2: 类型2}`
    - 使用接口：`const 对象名: 接口名 = { 属性1: 值, 属性2: 值 }`
  - **元组**
    - 特殊的数组
    - 特点
      - 约定了元素个数
      - 约定了特定索引对应的数据类型
  - **字面量类型**
    - const定义（值不能变）的类型
    - `let str1 = 'aaa' str1的类型是string`
    - `const str2 = 'hhh' str2的类型是'hhh'`
  - **枚举**
    - 定义枚举：`enum 枚举名 { 成员1 = 初始值1, 成员2 = 初始值2, ... }`
    - 使用枚举：`枚举名.成员1`
    - 分类
      - 数值枚举：默认从0开始自增，赋初始值则从初始值开始递增
      - 字符串枚举：必须有初始值
  - **void**
    - 函数返回值类型，以下三种情况返回void
    - （1）函数没return
    - （2）写了return，无返回值
    - （3）写了return，返回undefined
  - **any**
    - 取消类型限制
