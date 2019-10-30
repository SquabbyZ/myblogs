---
title: 什么是服务器端渲染
date: 2019-10-24
tags:
  - Nuxt
categories:
  - Nuxt
---

**[感谢全老师的讲解视频!](https://edu.csdn.net/course/play/23732/276420)**

## 什么是服务器端渲染

`服务器端渲染:后端先调用数据库,获得数据之后,将数据和页面元素进行拼装,组合成完整的 html 页面,再直接返回给浏览器,以方便用户浏览。`

**[百度网站](https://www.baidu.com/)**
点开页面后右键,选择 `查看网页源代码` (快捷键 `Ctrl + U` )

如下图

![](http://lc-zltjehai.cn-n1.lcfile.com/a79c7e23c6cad600f78f/lesson1-1.png)

打开后的页面为:

![](http://lc-zltjehai.cn-n1.lcfile.com/3a5d1acaf668f131d699/lesson1-2.png)

可以明显的看到 DOM 标签,这就是服务端渲染

## 什么是客户端渲染

`客户端渲染: 数据由浏览器通过 ajax 动态取得,再通过 js 将数据填充到 dom 元素上最终展示到网页中,这样的过程叫做客户端渲染`

**[SquabbyZ 的小黑屋](http://www.zhuhaifengz.club/)** (也就是本网站了,嘿嘿)

也是右键打开菜单后点击 `查看网页源代码`

打开后如下图显示

![](http://lc-zltjehai.cn-n1.lcfile.com/58309d9e1352db5ee2b6/lesson1-3.png)

可以明显的看到没有 dom 标签,这就是客户端渲染
