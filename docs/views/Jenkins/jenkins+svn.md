---
title: Jenkins + SVN 实现 后端项目 maven 自动打包+部署
date: 2020-03-02
tags:
  - Jenkins
categories:
  - Jenkins
---

## 具体的 Jenkins 设置请参照下面的网站

<a href="./jenkins+gitblit.md">Jenkins + gitblit 实现 前端项目 git push 后触发 Jenkins 构建 并且用 express 运行前端项目(局域网)</a>

## 项目的设置

1. 我们需要将 "源码管理" 中的 `Git` 改选为 `Subversion`
   然后在

   ```bash
    Modules
           Repository URL : http:localhost/svn...... //这里填写 SVN 项目仓库地址
           Credentials    : xxx/***                  //这里填写 SVN 的项目能提交代码的账号密码
   ```

   只需把上面的两个填写就可以了，其余的默认就可以

2. 构建触发器中 `Build whenever a SNAPSHOT dependency is built` 还是要勾选上的，再把 `触发远程构建(例如，使用脚本)`勾选上，在<span style='color:red;'>身份验证令牌</span>的文本框内输入任意内容，但是一定要记住，因为后面要使用，因为我搭建的环境是局域网，所以就设为 `123456`，并且没有加密。

其余和 `Jenkis + Gitblit` 的设置内容一样。

## SVN 需要设置

我采用的是 SVN 的 `post-commit hook` ,来实现代码自动提交后，触发 Jenkins 的构建，因此我们需要找到 SVN 上你的项目库的目录的 `hook` 文件夹，(我的地址是 `F:\Repositories\项目仓库名、hooks`)，在该文件夹下新建 `post-commit.bat` 文件，(因为我 Jenkins 和 SVN 全部使用的是 Windows 系统)，文件内容如下

```java

java -jar e:/Java/jdk/bin/jenkins-cli.jar -s http://localhost:8200/job/Jenkins仓库名/build?token=123456

exit 0 //这个不写会在提交完代码后，SVN报 `JAVA 不是内部或者外部命令`

//这里的 `123456` 就是之前在 Jenkins 仓库里设置的 "构建触发器" 选项中的 身份验证令牌设置的时候所填写的内容。

```

写完 bat 文件后，双击该文件，当你看到 Jenkis 服务网站上你的对应的 Jenkins project 开始构建就证明，我们写的 bat 脚本文件没有问题，**注意该文件必须是 ASNI 编码 Windows 文件**

然后打开 visual SVN server 选择项目仓库鼠标右键弹出的菜单中选择 `properties` 然后在弹出的对话框的最上面选择 `Hooks`,然后双击选择 `post-commit`,弹出的对话框会自动把你之前新建的 `post-commit.bat` 文件的内容写入到上面，点击确定后 `post-commit` 会很明显的加粗，然后一路确定即可。

## SVN 和 Jenkins 都配置好了，但是 SVN 不执行脚本

原因是因为 visual SVN server 服务的用户不是系统本身的用户需要如下操作

右击我的电脑--管理--服务，找到 visualSVN serve ，右击选择属性---登陆--选择本地系统用户(允许与桌面交互)
保存，重启 visualsvn 服务即可
