---
title: v-model
date: 2023-03-02 21:34:40
permalink: /pages/631278/
categories:
  - vue
tags:
  - 
---

## 一、作用
- 实现元素或组件的双向绑定的语法糖
- 使用
  - 无参数：`v-model='属性名'` 默认传的props是modelValue，默认emit事件是update:modelValue
  - 多个参数：父组件：`v-model:props名='属性名'` 子组件：`update:props名`

## 二、实现
### 1. 元素的双向绑定
- 涉及到的元素：`input（type：checkbox、radio）、textarea、select`
- 实现
```html
<input :value='val' @input='event => val = event.target.value'>
```
### 2. 组件的双向绑定
- **props和emits**
  - （1）父组件通过props传递值给子组件，同时监听子组件的emits，值发生变化时更新值
  - （2）子组件值发生变化触发emits并把值传递给父组件
  - 父组件
  ```html
  <Son :value='value' @update:value="newVal => value = newVal" />
  ```
  - 子组件
  ```html
  <input :value='value' @input='$emit('update:value', $event.target.value)'>

  <script setup>
    defineProps(['value'])
    defineEmits(['update:value'])
  </script>
  ```
- **computed计算属性**
  - （1）父组件同上
  - （2）子组件定义computed，设置getter和setter，getter获取props中的值，setter触发自定义事件
  - 父组件
  ```html
  <Son :value='value' @update:value="newVal => value = newVal" />
  ```
  - 子组件
  ```html
  <input v-model='value' />

  <script setup>
    const props = defineProps(['value'])
    const emit = defineEmits(['update:value'])

    const value = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('update:value', val)
      }
    })
  </script>
  ```
### 3. 修饰符
- （1）四种修饰符
  - `.trim`：去除空格
  - `.number`：只允许数字
  - `.lazy`：v-model默认input事件后更新数据，想要每次change事件后才更新数据 
  （注：input事件效果是失去焦点或按下回车键才更新数据）
  - `.capitalize`：首字母大写
- （2）获取修饰符
  - 没有参数时：`props.modelModifiers`
  - 有参数时：`props.(参数名+Modifiers)`
## 三、应用场景
### 1. 表单元素双向绑定
### 2. 自定义组件
- 日期选择器
- 颜色选择器
- 父子组件同步
