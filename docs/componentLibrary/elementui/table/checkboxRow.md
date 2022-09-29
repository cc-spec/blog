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
> 定制化序号
```javascript
import { h } from 'vue'
import first from '@/assets/first@2x.png'
import second from '@/assets/second@2x.png'
import third from '@/assets/third@2x.png'

function indexMethod(value: number) {
  if (value === 0) {
    return h('img', {
      src: first,
      style: {
        width: '60%',
        'vertical-align': 'middle'
      }
    })
  }
  if (value === 1) {
    return h('img', {
      src: second,
      style: {
        width: '60%',
        'vertical-align': 'middle'
      }
    })
  }
  if (value === 2) {
    return h('img', {
      src: third,
      style: {
        width: '60%',
        'vertical-align': 'middle'
      }
    })
  }
  return value + 1
}

export const columns = [
  {
    label: '序号',
    fixed: true,
    type: 'index'
    index: indexMethod
  },
]
```
