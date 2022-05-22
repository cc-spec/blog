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