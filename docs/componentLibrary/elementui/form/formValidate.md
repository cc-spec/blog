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

# 一、整体校验

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