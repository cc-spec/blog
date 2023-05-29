---
title: toggleRowSelection
date: 2023-05-29 20:15:34
permalink: /pages/5d511d/
categories:
  - componentLibrary
  - elementui
  - table
tags:
  - 
---

> 两个列表，一个列表里有的数据，另一个列表要给勾上，触发了toggleRowSelection但是视图没有变化   
> 原因：修改数据视图不会立即更新，而是会监听数据变化，并缓存在同一个事件循环只中，等同一数据循环中的所有数据变化完成后，再进行视图更新，为了获取到更新后的DOM，所以要在nextTick（下次DOM更新循环结束后执行延迟回调）里面调。
```js
function toggleSelection(rows) {
  // 要勾选的数据
  rows.forEach((row) => {
    // 在这个备份列表中勾选
    this.backupTableData.forEach((item) => {
      if (item.code === row.code) {
        this.$nextTick(() => {
          // toggleRowSelection接收两个参数
          // 参数1: 需要修改勾选状态的数据
          // 参数2: 是否勾选 true 勾选 false 不勾选
          this.$refs.tableRef.toggleRowSelection(item, true)
        })
      }
    })
  })
}
```
