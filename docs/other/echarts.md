---
title: echarts
date: 2022-07-31 14:10:30
permalink: /pages/4ac014/
categories:
  - other
tags:
  - 
---
## 一、echarts创建图表
- 获取dom元素：`let dom = this.$refs.xxx`
- init初始化：`let initChart = echarts.init(dom)`
- 定义配置并设置：`initChart.setOptions(options)`
## 二、图例富文本
- 配置图例的显示
```js
legend: {
  orient: 'vertical', // 排列方向
  left: 210, // 图例距左侧位置
  top: 'middle', // 图例距顶部位置
  itemGap: 15, // 图例间距
  icon: 'circle', // 形状
  itemWidth: 12, // 图例宽
  itemHeight: 12, // 图例高
  borderRadius: 12, // 图例圆角半径
  textStyle: {
    //图例的样式
    rich: {
      name: {
        width: 60 // name类型的图例文字块宽度 60
      },
      value: {
        width: 60 // value类型的图例文字块宽度 60
      },
    }
  },
  formatter(name) {
    let data = options.series[0].data
    let arr = []
    let value
    data.forEach((item) => {
      if (name === item.name) {
        value = item.value
      }
    })
    arr = [`{name|${name}}`, `{value|${value}}`]
    return arr.join('')
  }
}
```
## 三、默认显示tooltip
```js
this.chart.dispatchAction({
  type: 'showTip',
  dataIndex: 6,
  seriesIndex: 4
})
```
## 四、折线图渐变
```js
series: [
  {
    name: '', // 变更
    type: 'line',
    smooth: true,
    symbol: 'none',
    color: '#1042DF',
    data: [],
    yAxisIndex: 0,
    areaStyle: {
      normal: {
        //渐变色
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(16, 66, 223, 0.40)'
            },
            {
              offset: 1,
              color: 'rgba(16, 66, 223, 0)'
            }
          ],
          false
        )
      }
    }
  }
]
```