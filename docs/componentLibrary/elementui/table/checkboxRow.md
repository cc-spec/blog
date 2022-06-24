---
title: checkboxRow
date: 2022-06-24 21:08:46
permalink: /pages/fb7b6b/
categories:
  - componentLibrary
  - elementui
  - table
tags:
  - 
---
> 需求描述：table实现部分数据禁用
```html
<el-table>
  <el-table-column
    type="selection"
    :selectable="isSelectable"
  >
  </el-table-column>
</el-table>
```
```javascript
methods: {
  // return true: 可选
  // return false 禁用
  isSelectable(row, index) {
    // codeList中包含该行code时禁用
    return !this.codeList.includes(row.code)
  },
}
```