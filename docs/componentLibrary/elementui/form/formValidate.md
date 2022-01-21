---
title: form表单校验
author: cc
date: 2021-12-30
permalink: /pages/541cad/
categories: 
  - componentLibrary
  - elementui
  - form
tags: 
  - 
---

## 一、整体校验
- 添加校验：`<form :rules="rules">`
- 校验逻辑
  - trigger: blur||change
```JavaScript
rules: {
  字段名: [
    {required: 是否必填, trigger: 触发方式},
    {validator: 校验函数, trigger: 触发方式},
    {pattern: 校验正则表达式}
    ...
  ]
}
```
## 二、常见校验
### 1. 正则
```JavaScript
中文：/^[\u4e00-\u9fa5]{0,}$/
中文或英文：/^[\u4e00-\u9fa5a-z]{0,}$/
英文或数字：/^[0-9a-zA-Z]*$/
中文英文数字：/^[\u4e00-\u9fa5a-z0-9]{0,}$/
手机号码：/^1[3456789]\d{9}$/
标签：/[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi
```
### 2. 特殊校验
- **数字输入框联动校验**
```JavaScript
/**
 * validateRange：两个数字输入框联动校验
 * 情况1：第一个输入框值不能大于第二个输入框值；
 * 情况2：第二个输入框值不能小于第一个输入框值
 * @param {string}  params 当前输入框输入的值
 * @param {string} compare 另一个输入框用来比较的值
 * @param {boolean} flag true(情况1)/false(情况2)
 * @returns
 */

export const validateRange = function(params, compare, flag) {
  return (rule, value, callback) => {
    if (params === undefined && compare === undefined) return callback()
    if (params !== undefined && compare === undefined) {
      return callback(new Error('请输入另一个值'))
    }
    if (params === compare) {
      return callback(new Error(`不能等于${compare}`))
    }
    if (flag) {
      if (params > compare) {
        return callback(new Error(`不能大于${compare}`))
      }
      callback()
    } else {
      if (params < compare) {
        return callback(new Error(`不能小于${compare}`))
      }
      callback()
    }
  }
}
```