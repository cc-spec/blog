---
title: BFC
date: 2022-03-29 17:17:20
permalink: /pages/091b3e/
categories:
  - css
tags:
  - 
---

## 一、什么是BFC
> 块级格式化上下文，用于决定块级盒的布局及浮动相互影响范围的一个区域
### 1. 特性
- BFC 内部的块级盒会在垂直方向上一个接一个排列
- 同一个 BFC 下的相邻块级元素可能发生外边距折叠，创建新的 BFC 可以避免的外边距折叠
- 每个元素的外边距盒（margin box）的左边与包含块边框盒（border box）的左边相接触（从右向左的格式化，则相反），即使存在浮动也是如此
- 浮动盒的区域不会和 BFC 重叠
- 计算 BFC 的高度时，浮动元素也会参与计算
## 二、创建BFC
- 1. 根元素（\<html>）
- 2. 浮动元素（float 不为 none）
- 3. 绝对定位元素（position 为 absolute 或 fixed）
- 4. 表格的标题和单元格（display 为 table-caption，table-cell）
- 5. 匿名表格单元格元素（display 为 table 或 inline-table）
- 6. 行内块元素（display 为 inline-block）
- 7. overflow 的值不为 visible 的元素
- 8. 弹性元素（display 为 flex 或 inline-flex 的元素的直接子元素）
- 9. 网格元素（display 为 grid 或 inline-grid 的元素的直接子元素）
## 三、BFC范围
- BFC包含创建它的元素的所有子元素，但是不包括创建了新的BFC的子元素的内部元素，隔离思想
## 四、BFC应用
- 1. 自适应多栏布局
- 2. 防止外边距折叠
- 3. 清除浮动