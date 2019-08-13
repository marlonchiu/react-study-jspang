---
title: React Router基础
date: '2019-08-14'
type: 技术
tags: React
sidebarDepth: 3
sidebar: auto
note: React Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。
---

# React Router基础

学习指导：[React Router 免费文字视频教程（共9集）](https://jspang.com/posts/2019/07/31/react-router.html)

**React Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。**

这是官方的解释，虽然足以解释`React Router`，工作中凡是React技术栈的项目（WEB和Native），都需要用到React Router。有了它你才可以构建复杂的应用程序，有了它才能使应用有层次感。如果没有React Router，我们智能用`switch...case`这样的语句，进行判断渲染，这非常的麻烦，而且不可用；但是有了React Router一切就变的简单了。

## P01: React Router 安装和基础环境搭建

* 初始化一个react项目
* 安装 `react-router-dom`

```bash
# 安装 react-router-dom
npm install --save react-router-dom
```

## P02: 像制作普通网页一样使用ReactRouter

`exact`精准匹配的意思

就是你的路径信息要完全匹配成功，才可以实现跳转，匹配一部分是不行的。

比如我们把`Index`的精准匹配去掉，你会发现，无论你的地址栏输入什么都可以匹配到`Index`组件，这并不是我们想要的结果。

```javascript
<Route path="/" component={Index} />
```

所以我们加上了精准匹配`exact`
