---
title: this
author: coderc
date: 2022-1-4
permalink: /pages/fbdd30/
categories: 
  - js
tags: 
  - 
---

## 一、this绑定规则
> **调用位置决定this的指向**
### 1. 默认绑定：独立函数调用
#### 情况一：直接调用函数或立即执行函数  
- **直接调用函数this指向全局对象window**
```javascript
function foo() {
    console.log(this)
}
foo()  //window
```
#### 情况二：独立函数调用  
- **独立函数调用指向全局对象window**  
```javascript
function test1() {
    console.log(this)
    test2()  //window 独立调用test2函数
}
function test2() {
    console.log(this)
    test3()  //window
}
function test3() {
    console.log(this)  //window
}
test1()
```
#### 情况三：把一个函数作为另一个函数的参数  
- **作为参数的函数如果没有跟任何对象绑定，this指向的还是全局对象window。**
```javascript
function foo(fun) {
    fun()
}
function test() {
    console.log(this)
}
foo(test)
```  
- 通过**对象.方法**拿到的是对象中函数的引用，相当于拿到存放该函数的内存地址，本质还是函数的直接调用。  
```javascript
function foo(fun) {
    fun()
}
var obj = {
    name: 'c',
    demo: function() {
        console.log(this)
    }
}
foo(obj.demo)  //window
```
### 2. 隐式绑定  
- **通过某个对象发起的函数调用，js内部会将这个对象隐式的绑定到函数的this**  
- 隐式绑定前提条件：必须在调用的对象内部有一个对函数的引用(比如一个属性)，如果没有该引用，调用时会报错。
```javascript
function foo() {
    console.log(this)
}
var obj = {
    name: 'c',
    test: foo
}

//案例1
obj.test() //obj发起的函数调用，所以this指向obj

//案例2
var obj2 = {
    obj: obj
    demo: test
}
obj2.obj.test()  //this指向obj，obj2是拿到obj，最终调用test函数的是obj

//案例3
obj2.demo()
```
### 3. 显示绑定  
- 使用**call/apply/bind**显示绑定this。
  - **call(thisArg, ...argArray)**  
    调用函数，改变函数内部this指向，call接受的是一个参数列表。
  - **apply(thisArg, [argArray])**  
    调用函数，改变函数内部this指向，apply接受的是一个参数数组。
  - **bind(thisArg)**  
    改变函数内部this指向，但是不调用函数，会返回一个新的函数。
- 显示绑定实例  
  - **setTimeout**  
  setTimeout定时器内部调用apply方法，将this显示绑定在window上，所以**setTimeout里面的this指向window**。
  - **forEach**  
    - forEach可以传入两个参数，第一个参数回调函数，第二个参数绑定this。
    - 当没有传第二个参数时，forEach里面的this指向window。
    - 当传入第二个参数时，forEach内部通过bind将this显式绑定到该参数上，此时forEach里面的this指向该参数。
  - **事件监听函数**  
    -  事件监听函数中的this指向该函数的调用者(dom节点)，如div的click事件中，this指向div。
### 4. new绑定  
- new关键字执行过程  
   - (1) 在内存中创建一个空对象；
    - (2) 让this指向这个对象；
    - (3) 执行构造函数里面的代码，给这个对象添加属性和方法；
    - (4) 返回这个新对象(所以构造函数中不需要return)。
- **new关键字创建的对象中的this指向新创建的这个对象。**
```javascript
function Person() {
    console.log(this)
    this.name = 'hh'
}

var p = new Person()  //此时的this指向p
console.log(p.name)  // hh
```
### 5. 绑定的优先级
> new > 显示 > 隐式 > 默认
- 默认绑定优先级最低。
- 显示绑定优先级高于隐式绑定。
- new绑定优先级高于隐式绑定。
```javascript
var person1 = {
    name: 'person1'
    foo: function() {
        console.log(this)
    }
}

var p = new person1.foo()  //this指向通过new创建的foo对象
```
- new绑定和显示绑定  
   - new和apply/call不能同时使用。
   - new和bind可以同时使用，new绑定的优先级高于bind显示绑定。
```javascript
function foo() {
    console.log(this)
}
var person = {name: person}

var Foo = foo.bind(person)
var p = new Foo() // this指向new创建的foo对象
```
### 6. 绑定规则之外
- 忽略显示绑定
```javascript
function foo() {
    console.log(this)
}

foo.call('abc')     // String包装类型的abc字符串
foo.call(undefined) // window
foo.call(null)      // window
foo.call(NaN)       // Number {NaN}
```
- 间接函数调用
```javascript
var obj = {
    name: 'hh',
    foo: function() {
        console.log(this)
    }
}

var temp = null;
(temp = obj.foo)();  // 相当于拿到foo函数，然后独立调用，this指向window
```
- ES6箭头函数  
   - 箭头函数不绑定this，不可通过call、apply、bind进行修改。
   - 箭头函数中的this指向的是**函数声明时所在作用域下的上下文this**，沿着作用域一层层向上找，直到找到为止。
## 二、面试题
### 1. 隐式绑定、立即执行函数
```javascript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log(this.foo);  
        console.log(self.foo);  
        (function() {
            console.log(this.foo);  
            console.log(self.foo);  
        }());
    }
};
myObject.func();
```
### 2. 默认绑定、隐式绑定、立即执行函数
```javascript
var name = "window"

var person = {
    name: "person",
    sayName: function() {
        console.log(this.name);
    }
};

function sayName() {
    var sss = person.sayName;
    sss();                      
    person.sayName();
    (person.sayName)();
    (b = person.sayName)();
}

sayName();
```
### 3. 箭头函数、显示绑定
```javascript
var name = 'window'
var person1 = {
    name: 'person1',
    foo1: function() {
        console.log(this.name)
    },
    foo2: () => console.log(this.name),
    foo3: function() {
        return function() {
            console.log(this.name)
        }
    },
    foo4: function() {
        return () => {
            console.log(this.name)
        }
    }
}
var person2 = { name: 'person2' }

person1.foo1();
person1.foo1.call(person2);

person1.foo2();
person1.foo2.call(person2);

person1.foo3()();
person1.foo3.call(person2)();
person1.foo3().call(person2);

person1.foo4()();
person1.foo4.call(person2)();
person1.foo4().call(person2);
```
### 4. new绑定、显示绑定
```javascript
var name = 'window'
function Person(name) {
    this.name = name
    this.foo1 = function() {
        console.log(this.name)
    },
    this.foo2 = () => console.log(this.name),
    this.foo3 = function() {
        return function() {
            console.log(this.name)
        }
    },
    this.foo4 = function() {
        return () => {
            console.log(this.name)
        }
    }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()
person1.foo1.call(person2)

person1.foo2()
person1.foo2.call(person2)

person1.foo3()()
person1.foo3.call(person2)()
person1.foo3().call(person2)

person1.foo4()()
person1.foo4.call(person2)()
person1.foo4().call(person2)
```
### 5. 箭头函数、显示绑定
```javascript
var name = 'window'
function Person(name) {
    this.name = name
    this.obj = {
        name: 'obj',
        foo1: function() {
            return function() {
                console.log(this.name)
            }
        },
        foo2: function() {
            return () => {
                console.log(this.name)
            }
        }
    }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()
person1.obj.foo1.call(person2)()
person1.obj.foo1().call(person2)

person1.obj.foo2()()
person1.obj.foo2.call(person2)()
person1.obj.foo2().call(person2)
```