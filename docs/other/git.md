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
git rm -r --cached . // 清除本地当前缓存
git add . // 重新添加到暂存区
git commit -m '更新' // 重新提交
```
## 二、git pull 和 git fetch 的区别
- ![image.png](./git.png)
- git pull：从远程获取最新版本并merge到本地
- git fetch：从远程获取最新版本但是不自动merge

## 三、撤销
- 撤销一个提交
  - `撤销：git reset --soft HEAD^`
  - `还原：git revert -m l HEAD`
- 撤销合并或拉动
  - `git reset --hard`
- 本次提交跟上次使用同样的描述
  - `git commit --amend`
- 使用`git reset --hard [commit-id]`丢弃了一切更改
- 现在想找回reset之前的文件
- `git reflog`查看提交记录，找到错误删除的文件的[commit-id]
- 再次使用`git reset [commit-id]`回退 

## 四、git stash的正确打开方式
- 暂存工作区：`git stash save "保存提示"`
- 取出工作区：`git stash pop`
- 查看存了哪几个工作区：`git stash list`
- 查看暂存的工作区都有啥更新：`git stash show stash@{数字}查看最新的stash中的内容`
- 取出某个工作区：`git stash apply stash@{1} 取出第二工作区`
- 新增的文件无法被存储：解决方法：git add加到版本控制中之后就可以stash
- 清空工作区：`git stash clear`
