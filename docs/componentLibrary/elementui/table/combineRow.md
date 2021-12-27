---
title: table合并行
author: cc
date: '2021-12-27'
---

> 需求描述：数据动态添加，每行出现次数不可控  
> 数据结构：
```javascript
[
  {name: 'a', value: 1}, 
  {name: 'a', value: 2}, 
  {name: 'a', value: 3}, 
  {name: 'b', value: 4}
]
```

# 一、基础版
## 1. 定义一个对象obj
- 概述：`key: 值，value: { count: 相同值出现次数, startIndex: 值第一次出现的位置 }`
- 实现：通过循环遍历tabledata，将tabledata中对应字段的值作为key
  - `if`: key第一次出现，那就将count设置为1，startIndex设置为tabledata的index
  - `else`: 次数+1也就是count++
## 2. 列、行、值判断
  - `if`: 列名===要被合并的列名 **哪一列**
  - `for`: 遍历之前的对象obj
    - `if`: 行的该字段值===对象的key **哪一行**
      - `if`: 行的索引===对象中该值第一次出现的位置 **哪几行**
        - 三个条件满足：合并单元格
          - rowspan: 合并成几行 出现次数
          - colspan: 合并成几列 1
      - `else`: 值不是第一次出现
        - 不合并
          - rowspan: 0
          - colspan: 0
# 二、最终版
## 1. 定义一个数组arr
- 遍历tabledata（reduce或其他方法均可）
- 某一项是否第一次出现
  - 是：prev!==curr，赋值为1
  - 否：prev===curr，赋值为0
`上面数据的arr[1, 0, 0, 1]`
- 重复了几次
  - 定义一个变量，初始化为0
  - `if`: 值重复，该变量++
`arr现在变成了[3, 0, 0, 1]`
## 2. 合并
- `if`: 列名===要被合并的列名 **哪一列**
  - 定义常量_row保存合并几行: arr[rowIndex]
  - 定义常量_col保存合并几列: 如果_row>0说明该列没重复→原样，否则该列重复→消失
