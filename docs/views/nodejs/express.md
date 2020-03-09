---
title: vscode 创建Express框架 目录 坏境
date: 2019-10-08
tags:
  - Node.js
categories:
  - Node.js
---

## 先全局装 express 包

```bash
npm install express  -g
npm install -g express-generator //因为从 express 4.x 开始就把 express 的内置工具全部分离出去,要按需加载，如果不安装 express-generator 会报错 `'express' 不是内部或外部命令，也不是可运行的程序或批处理文件`

```

## 创建项目

```bash
 express demo //创建项目
 cd demo/     //进入项目目录下
 npm install  //下载依赖包

```

## 将模板更改为 EJS

::: tip 怎么查看上述步骤创建的 express 模板是什么
打开创建的 express 项目的根目录中的 app.js 文件,在第 14 行可以看到 `app.set('view engine', 'jade');` 可以判断出创建的项目模板是 `Jade`。

如下图:

![](http://lc-zltjehai.cn-n1.lcfile.com/7875fdf01e7979f6e455/template_express_jade.jpg)

:::

1. 先安装 ejs 包

   ```bash
        npm i ejs -S
   ```

2. 修改根目录下的 app.js 文件

   1. 加入 ejs 模块
      `var ejs =require('ejs');`

   ![](http://lc-zltjehai.cn-n1.lcfile.com/3ef9845d0c31a3917fcd/require_ejs.png)

   2. 修改模板配置 `app.set('view engine', 'jade'); 为app.set('view engine', 'ejs');`

   ![](http://lc-zltjehai.cn-n1.lcfile.com/6303a65b23a4f7abfa20/load_ejs.png)
