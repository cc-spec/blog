---
title: select
date: 2022-05-22 16:16:07
permalink: /pages/3a57a3/
categories:
  - componentLibrary
  - elementui
  - form
tags:
  - 
---

## 一、模糊搜索
```html
<el-select
  v-model="form.code"
  placeholder="请输入code"
  clearable
  filterable
  remote
  :remote-method="searchOptions"
>
```
```js
searchOptions(code = '') { // 查询字段
  queryOptions({ code: code }).then(res => {
    if (res.status) {
      this.nameOptions = res.result || []
    }
  })
},
```
## 二、回显
### 1. 本地有保存选项
- 无需操作，组件会自动调一次change事件，实现回显
### 2. 本地无法保存选项
- 组装选项
`this.nameOptions = [{ code: this.form.code, name: this.form.name }]`
## 四、多选
### 1. default-first-option
- 默认选中第一个选项
### 2. reserve-keyword
- 远程搜索时是否保留上一次的搜索值
- 不保存远程搜索选择选项后会因为搜索值变了再去调一次远程搜索方法
### 3. 多选自定义选项
```html
<el-option
  v-for="item in options"
  :key="item.value"
  :label="item.label"
  :value="item.value"
>
  <div>111 {{ item.label }}</div>
</el-option>
```
- 写div时后面的勾选图标会换行，导致无法看见勾选图标
- 正确做法：直接写内容或写行内或行内块元素
```html
<el-option
  v-for="item in options"
  :key="item.value"
  :label="item.label"
  :value="item.value"
>
  111 {{ item.label }}
</el-option>
```
