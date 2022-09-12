---
title: moment
date: 2022-03-23 19:13:43
permalink: /pages/ddad19/
categories:
  - other
tags:
  - 
---
### 1. 上个月的第一天
```js
moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD 00:00:00')
```
### 2. 上个月的最后一天
```js
moment().date(0).format('YYYY-MM-DD 23:59:59')
```
### 3. 上个月及往前推一年的时间范围
```js
// 日期
<el-date-picker
  v-model="month"
  :auto-fill="true"
  type="month" // 时间类型
  placeholder="请选择查询月份"
  :picker-options="pickerOptions" // 时间选择器选项参考
  format="yyyy-MM" // 显示格式
  value-format="yyyyMM" // 绑定值格式
  :default-time="['00:00:00', '23:59:59']" // type="daterange" 日期范围选择使用的具体时间
>
</el-date-picker>

pickerOptions: {
  // 禁用时间
  disabledDate(time) {
    // 本月及往前推一年外的范围禁用
    return time.getTime() > moment().subtract(1, 'month') || time.getTime() < moment().subtract(12, 'month')
  }
}

// 动态禁用
pickerEndOptions: {
  // 禁用时间
  disabledDate: this.disabledDate
}

methods: {
  disabledDate(time) {
    const startDate = this.form.startDate // 动态变化
    return moment(time).format('X') < moment(startDate).format('X')
  }
},
```
### 4. 当月第一天
```js
moment().startOf('month')
``` 

### 5. 昨天
```js
moment().subtract(1, 'day').format('yyyy-MM-DD')
```
### 6. 往前推七天
```js
moment().subtract(7, 'days').format('yyyy-MM-DD') +
'~' +
moment().subtract(1, 'days').format('yyyy-MM-DD')
```

### 7. 本月剩余天数
```js
const days =
  moment().daysInMonth() -
  Number(
    moment()
      .subtract(1, 'days')
      .format('yyyyMMDD')
      .substring(6)
  )
days > 0 ? days : 0 // 本月剩余多少天
slice substr substring
```

### 8. 已创建天数：(当前日期-创建日期)+1
```js
let currTime = moment().format('YYYY-MM-DD')
let createdTime = moment(data.createdTime).format('YYYY-MM-DD')
moment(currTime).diff(createdTime, 'days') + 1
```
