(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{444:function(t,s,a){t.exports=a.p+"assets/img/prototype.509fd4b5.png"},486:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"一、什么是原型-prototype"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是原型-prototype"}},[t._v("#")]),t._v(" 一、什么是原型(prototype)？")]),t._v(" "),n("ul",[n("li",[t._v("原型指的是原型对象，创建的函数中都会有prototype属性，这个属性是一个指针，指向一个对象("),n("strong",[n("code",[t._v("原型对象")])]),t._v(")，原型对象里面包含由特定类型的所有实例共有的属性和方法；")])]),t._v(" "),n("h2",{attrs:{id:"二、什么是原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、什么是原型链"}},[t._v("#")]),t._v(" 二、什么是原型链？")]),t._v(" "),n("ul",[n("li",[t._v("模拟实现继承")])]),t._v(" "),n("h3",{attrs:{id:"_1-原型链第一层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-原型链第一层"}},[t._v("#")]),t._v(" 1.\t原型链第一层")]),t._v(" "),n("ul",[n("li",[t._v("new一个函数就会根据规则给这个函数创建一个原型属性prototype，指向函数的原型对象；")]),t._v(" "),n("li",[t._v("原型对象里面会自动添加一个constructor属性，指向构造函数；")]),t._v(" "),n("li",[t._v("每个实例都有一个隐式引用（__proto__），指向他的原型对象。\n"),n("ul",[n("li",[t._v("模拟实现new")])])])]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 创建了一个新对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 给这个对象添加__proto__并且指向他的构造函数对应的prototype对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 将this指向这个对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 返回这个对象")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n  Constructor "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取出传入的第一个参数")]),t._v("\n  obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Object'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97da58df50214ee28e2daa070b739414~tplv-k3u1fbpfcp-watermark.image",alt:"image.png"}})]),t._v(" "),n("h3",{attrs:{id:"_2-整个原型链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-整个原型链"}},[t._v("#")]),t._v(" 2. 整个原型链")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("原型链描述的是实例与原型的关系")])]),t._v(" "),n("li",[t._v("如上所述，实例通过__proto__指向的原型对象又是另一个类型的实例，有__proto__指针指向自己的原型对象，这个原型对象同样也有自己的__proto__，指向自己的原型对象，由于js中万物皆对象，所以原型链的最高层是Object.prototype，Object.prototype.__proto__为null，这条由__proto__串起来的链就是原型链\n"),n("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/debc9749923a4766b66e2e6c3c9f8182~tplv-k3u1fbpfcp-watermark.image",alt:""}})])]),t._v(" "),n("h3",{attrs:{id:"_3-function和object的蜜汁关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-function和object的蜜汁关系"}},[t._v("#")]),t._v(" 3. Function和Object的蜜汁关系")]),t._v(" "),n("ul",[n("li",[t._v("Function：函数的构造函数")]),t._v(" "),n("li",[t._v("Object：对象的构造函数")]),t._v(" "),n("li",[n("strong",[t._v("Object.prototype & Function.prototype")]),t._v(" "),n("ul",[n("li",[t._v("都是引擎创建的，引擎先创建了Object.prototype，接着又创建了Function.prototype，又通过__proto__将两者联系起来（"),n("strong",[t._v("Function.prototype."),n("strong",[t._v("proto")]),t._v(" === Object.prototype→true")]),t._v("）")])])]),t._v(" "),n("li",[n("strong",[t._v("Function.prototype & Function."),n("strong",[t._v("proto")])]),t._v(" "),n("ul",[n("li",[t._v("先有prototype再有构造函数，所有构造函数都可以通过原型链找到Function.prototype，Function本身也是一个函数，所以将Function.__proto__也指向了Function.prototype（"),n("strong",[t._v("Function.prototype === Function.__proto__→true")]),t._v("）")])])]),t._v(" "),n("li",[n("strong",[t._v("Object.constructor & Function.prototype")]),t._v(" "),n("ul",[n("li",[t._v("function Object是一个构造函数，相当于是function Function的实例，所以实例的__proto__指向他的原型对象，也就是Function.prototype（"),n("strong",[t._v("Object.constructor === Function.prototype→true")]),t._v("）\n"),n("img",{attrs:{src:a(444),alt:"原型链"}})])])])]),t._v(" "),n("h2",{attrs:{id:"三、相关问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、相关问题"}},[t._v("#")]),t._v(" 三、相关问题")]),t._v(" "),n("h3",{attrs:{id:"_1-instanceof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-instanceof"}},[t._v("#")]),t._v(" 1. instanceof")]),t._v(" "),n("h3",{attrs:{id:"_2-继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-继承"}},[t._v("#")]),t._v(" 2.继承")])])}),[],!1,null,null,null);s.default=r.exports}}]);