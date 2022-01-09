---
title: git
date: 2022-01-09 19:29:46
permalink: /pages/f6704a/
categories:
  - other
tags:
  - 
---

## 一、.gitignore不起作用
- 原因：.gitignore只能忽略原先没有被track的文件，如果文件已经被加入到了版本管理中，再去添加.gitignore是不起作用的
- 解决：
```JavaScript
git rm -r -cached . // 清除本地当前缓存
git add . // 重新添加到暂存区
git commit -m '更新' // 重新提交
```
