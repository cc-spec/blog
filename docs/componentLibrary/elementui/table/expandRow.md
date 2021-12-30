---
title: table展开行
author: cc
date: '2021-12-29'
---

# 一、设置表格只能展开一行
## 1. 监听表格某行展开按钮被点击（展开或关闭）
- 监听`expand-change`事件，该事件接收三个参数`row, (expandedRows | expanded)`
## 2. 展开该行
- 判断当前行是否展开，也就是第二个参数中有没有当前行
- 有就结束
- 没有就**干掉其他人，留下我自己**
## 3. 关闭其他行
- 遍历每一行
  - 通过toggleRowExpansion事件打开选中行

## 3. 代码
```JavaScript
@expand-change="expandChange"

expandChange(row, expandedRows) {
  // 收起当前行不需要做任何操作
  if (!expandedRows.find(item => item.id === row.id)) return
  // 展开当前行需要将其他行关闭，保证每次都打开一行
  expandedRows.length && expandedRows.forEach(item => {
    if (row.id === item.id) {
      this.$refs.table.toggleRowExpansion(item, true)
    }
  })
},
```