---
title: flex布局
author: cc
date: 2021-12-23
permalink: /pages/172fea/
categories: 
  - css
tags: 
  - 
---
## 一、什么是flex布局
- Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性；
- 应用：垂直水平居中；
- 设置为flex布局的元素float、clear、vertical-align失效。
## 二、flex布局使用
- 通过给元素添加**display: flex**将父盒子变成flex容器，其中的子项为flex项目
### 1. **父项常见属性**
- **flex-direction：主轴的方向** 
  - row（默认）：x轴（从左到右）
  - column：y轴（从上到下）
  - row-reverse：x轴（从右到左）
  - column-reverse：y轴（从下到上）
- **flex-wrap：主轴排列不下时是否换行**
  - wrap（默认）：换行，第一行在上方	
  - wrap-reverse：换行，第一行在下方
  - nowrap：不换行
- **flex-flow（flex-direction + flex-wrap）**
- **⭐justify-content：项目在主轴上的排列方式**
  - flex-start（默认）：从左向右
  - flex-end：从右向左
  - ⭐cneter：居中排列
  - space-around：项目之间距离相等，盒子之间的距离=盒子左右两侧的距离*2
  - ⭐space-between：先两端对齐，再平分剩余空间
  - space-evenly：除了项目之外的距离平分，盒子之间的距离=盒子左右两侧的距离
- **align-items：项目在交叉轴上的排列方式**
  - flex-start：起点开始排列
  - flex-end：终点开始排列
  - center：中点对齐
  - baseline：基线对齐
  - stretch：拉伸对齐
- **align-content：多根轴线的对齐方式**
  - flex-start
  - flex-end
  - center
  - space-around：项目之间距离相等
  - space-between：先两头后中间
  - stretch：拉伸排列
### 2.**子项常见属性**
- **order：项目的排列顺序**
数值越小排列越靠前
- **flex-grow**
有剩余空间时项目的放大比例，默认为0，即空间有剩余时不放大，给定的属性值就是该项目占的比例
- **flex-shrink**
空间不足时项目的缩小比例，默认为1，即空间不足时等比例缩小，如果设置为0，则不缩小
- **flex-basis**
分配剩余空间前，项目占有的主轴空间，可设置成具体的值
- **⭐flex（是否放大，是否缩小，有多少可以被分配）**
  - (1). flex-grow
    - 增长系数（子项没排满容器时子项所占的比例）
    - 默认值：1
  - (2). flex-shirink
    - 缩小系数（子项的总宽度大于整体容器宽度）
    - 默认值：1
  - (3). flex-basis
    - 指定元素的初始大小
      - 设置为auto时，按照自身设置的宽度均分
      - 设置为数值时，根据缩放比例计算
        - 放：自己+((容器-所有子项)/子项个数)
        - 缩：自己-(((容器-所有子项)/容器)x自己)
      - 默认值：0（也就是均分）
- **align-self：设置单个项目与其他项目有不同的排列方式**
## 三、面试题
- flex: 1;
= flex: 1 1 任意数字加任意长度单位，实现的效果是空间等分
- flex: auto;
= flex: 1 1 auto
- flex: none;
= flex: 0 0 auto
- 实现左上右下布局