---
title: 数据类型
author: cc
date: '2021-12-19'
---

## 1. 简单数据类型
- **`number、string、boolean、null、undefined、symbol、bigInt`**
## 2. 复杂数据类型
- **`object`**
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba0a18985135454fae55e9134b7f28ee~tplv-k3u1fbpfcp-watermark.image)
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dfbbe072dcfc47f681380103b1c9357e~tplv-k3u1fbpfcp-watermark.image)
## 3. 简单数据类型和复杂数据类型的区别
- **存储机制不同**
	- 简单数据类型存储在栈中；
    - 复杂数据类型存储在堆中，栈中存储的时引用地址，指向堆。
- **访问机制不同**
	- 简单数据类型按值访问；
    - 复杂数据类型按引用访问，根据栈中的引用地址找堆中存储的值。
- **变量复制不同**
	- 简单数据类型复制的是原变量的一个副本，两个不会相互影响；
    - 复杂数据类型复制的是引用地址，指向堆中同一个对象，一个变化另一个也会变化。
### 4. 简单数据类型转换
- **任意类型→Boolean**
    - Boolean(变量)
    - '0'→true
    - Boolean(变量)为false的值：`false，0和NaN，'', null，undefined` 
- **任意类型→Number**
    - **Number(变量)**
    
        ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea4fa53b49384a7caa010b3929ed0790~tplv-k3u1fbpfcp-watermark.image?)
        - 如果是Boolean，true→1；false→0；
        - 如果是number，返回的也是这个number；
        - 如果是null，返回0；**null→0**
        - 如果是undefined，返回NaN；**undefined→NaN**
        - 如果是字符串，从不是空格且不是0的一位开始解析
            - 全是数字就返回这个数字；
            - 带浮点的就返回这个浮点数；
            - **空字符串返回0**；
            - 含进制前缀的返回这个进制的值；
            - 有字母或其他非数字字符就返回NaN。
        - 如果是对象，先valueof()，再toString()。
    - **parseInt(变量, [进制])**
        - 从不是空格且不是0的一位开始解析
        - 第一个字符不是数字或负号，就会返回NaN；
        - 前面部分是数字，就会返回数字的部分；
        - 含有小数点的会忽略小数点后面的部分。
        - **空字符串会返回NaN**。
    - **parseFloat(变量, [进制])**
        - 同parseInt，返回的结果为浮点数
- **任意类型→String**
    - **string类型特点**：不可变→字符串一旦创建，值就不能再改变，要改变某个变量储存的字符串，就需要销毁原来的，然后重新申请变量保存。
    - **变量.toString([进制])**
        - null和undefined没有toString方法
    - **String(变量)**
        - 使用场景：需要转换，但不知道变量是否为null或undefined的情况
        - 规则：如果有toString()方法，就调用toString方法；如果是null或undefined，就返回null或undefined。
### 5. 复杂数据类型转换
- **原始类型转对象**
    - 通过**new String()**、**new Number()** 或者**new Boolean()** 等构造函数，转换为它们各自的包装对象。
- **对象转字符串或数字**
    - **ToPrimitive(input[, PreferredType])**
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4223e053bdb4e468ff90bfc4a19b5ba~tplv-k3u1fbpfcp-watermark.image?)
# 数据类型判断（主要为不同的Object类型的判断）
### 1. 基本数据类型
- **`typeof操作符`**
除null之外其余基本数据类型都可以正确返回，null返回object  
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9c7c458f4d14a3e863942d68a50df8e~tplv-k3u1fbpfcp-watermark.image?)
### 2. 复杂数据类型
- **`instanceof操作符`**   
    - 单一的全局环境下可以正确检测，如果存在两个版本以上的Array构造函数，则无法正确检测
           ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6bb98e8c4b934ae3ad0e08fe9e4d6b87~tplv-k3u1fbpfcp-watermark.image)
           ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/583d3cd7278e4f588107a2552aa04089~tplv-k3u1fbpfcp-watermark.image)
- **`Object.prototype.toString.call(检测对象) == '[Object Array]'`**
    - **调用toString方法时，会执行以下步骤：**
        - (1) 如果 this 值是 undefined，就返回 [object Undefined]
        - (2) 如果 this 的值是 null，就返回 [object Null]
        - (3) 让 Object 成为 ToObject(this) 的结果
        - (4) 让 class 成为 Object 的内部属性 [[Class]] 的值
        - (5) 最后返回由 **"[object " 和 class 和 "]"** 三个部分组成的字符串
    ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a54b7d5e673b43eeabee3ba94425a2c8~tplv-k3u1fbpfcp-watermark.image)
    ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3fd1c4151dec4109ada550ba52ed8ddd~tplv-k3u1fbpfcp-watermark.image)
- **`constructor`**
    ![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a124d253acb94b96b9a1b870e871ab7e~tplv-k3u1fbpfcp-watermark.image)
    ![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d43c940608b2405597eccae9a02cdbfb~tplv-k3u1fbpfcp-watermark.image)
- **`Array.isArray(检测对象)`**
    ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8570521ee6784208ac2d53e537d8da42~tplv-k3u1fbpfcp-watermark.image)
    ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2286918b95c342148aa10001214165e8~tplv-k3u1fbpfcp-watermark.image)
