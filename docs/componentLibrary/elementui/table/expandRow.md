---
title: table展开行
author: cc
date: '2021-12-29'
---
```JavaScript
@expand-change="expandChange"

expandChange(row, expandedRows) {
  // 收起当前行不需要做任何操作
  if (!expandedRows.find(item => item.id === row.id)) return
  // 展开当前行需要将其他行关闭，保证每次都打开一行
  expandedRows.length && expandedRows.forEach(item => {
    if (row.id !== item.id) {
      this.$refs.table.toggleRowExpansion(item, false)
    }
  })
},
```