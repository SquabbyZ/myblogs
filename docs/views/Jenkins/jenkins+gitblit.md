---
title: Jenkins + gitblit 实现 前端项目 git push 后触发 Jenkins 构建 并且用 express 运行前端项目(局域网)
date: 2019-11-05
tags:
  - Jenkins
categories:
  - Jenkins
---

## 准备工作

1. [Windows 系统上 局域网部署 Gitblit 教程]()
2. [Windows 系统上 局域网部署 Jenkins 教程]()
3. [修改 Jenkins 默认端口]()

## 项目需求与选择的理由

::: tip 阐述为什么使用 Jenkins + Gitblit

1. 整个项目的开发环境是纯局域网,也是我做前端以来最难的开发环境(没有之一),开发配置:

   1. 我用的 **`Vuecli3.0`** 搭建的项目,用 VueCli3.0 做基础模板,修改 `vue.config.js` 来进行项目的修改配置;
   2. 用的 **`express`** 来静态的托管前端的项目;
   3. 因项目需求登录做的静态 JSON 文件的登录(之前使用的是 `axios-mock-adapter` 和 `mockjs` 来进行的本地 JSON 模拟登录,但是会屏蔽掉除了登录外的后端请求接口)
   4. 使用的是 **`forever`** 依赖包来进行的后台项目的启动;
   5. 之前公司使用的都是 `Svn` 来进行项目的管理,对于我这种从入行开始就是在敲着 `Git` 的小小白来说,还是喜欢 `Git` 命令,因此选择了 `Gitblit` (不选 `Gitlab` 是因为没网 T.T)

2. 本着闲不住的性格(其实是为了省事,要不每次都要提交完代码后,手动 `yarn build` ,再用 `xshell` 输入命令 `forever stop app.js` 停服务,用 `Xftp` 把打包完的项目
   传入到远端服务器,再 `forever start app.js`),真的是太麻烦了,因此想到之前了解到 `Jenkins` 这个自动化构建工具,配合之前的搭建好的 `Gitblit` 项目管理工具,花了 1 天的时间,按照自己的
   项目需求完成了第一版的简单的配置搭建。

:::

## Gitblit 配置部分

1. 首先先找到 `gitblit-1.8.0` 的服务跟目录,然后 进入到 `/data/groovy/` 文件夹下 可以看到下图中标记的两个文件,在你刚进入到时候只有 `jenkins.groovy` 这一个文件,因为有多个 `Gitblit` 的项目,
   所以复制一份命名为 `jenkins_converge.groovy`
   ![](http://lc-zltjehai.cn-n1.lcfile.com/177d9117fbe438b1cef1/jenkins6-0.png)

2. 然后打开 `jenkins_converge.groovy` 文件,并且用鼠标滚动到最下面,如下图:

![](http://lc-zltjehai.cn-n1.lcfile.com/dcbc919414a2821efd15/jenkins6-1.png)

1. 图中标白色的地方,填入你本机的 `Jenkins` 项目(就是登陆的时候 `Jenkins` 在浏览器地址栏里显示的 IP + 端口号),修改完后保存即可。
2. 登录到你的 `Gitblit` 项目中,然后点击左上方的 `编辑` 按钮,如下图:(如果没有显示那个按钮,说明你不是项目的管理员,需要找管理员给你加权限)

![](http://lc-zltjehai.cn-n1.lcfile.com/8c4c71693fc8013b79e0/jenkins6-2.png)

1. 点击 左侧列表中的 `receive`

![](http://lc-zltjehai.cn-n1.lcfile.com/833ce29bda3d3b48cb4c/jenkins6-3.png)

点开后如图:

![](http://lc-zltjehai.cn-n1.lcfile.com/b0f22bb5d0b9469636c9/jenkins6-4.png)

1. 选择上图中最下面的 `post-receive 脚本` 部分,在穿梭框的左侧列表中找到我们之前在 `/gitblit-1.8.0/data/groovy/` 目录下新建的 `jenkins_converge.groovy` ,双击之后,直接点击页面最下方的保存即可,如图:

![](http://lc-zltjehai.cn-n1.lcfile.com/5de9ac74df5958b9a5f3/jenkins6-5.png)

## Jenkins 配置部分

### 需要的插件

**安装 Jenkins 的时候在有网络的电脑上先安装,然后选择插件的时候选择 `新手推荐`**

1.  GitBlit Plugin
2.  NodeJS Plugin
3.  Publish Over SSH

**这些插件才用默认的配置就能下载如果,出现 `Time out` 的报错,可以更换[国内镜像]()即可**

### Jenkins 全局配置

**因为我使用的是 Jenklins 2.203 我写这篇文章时候的最新版,因此汉化不是很完全**

1. 进入到 Jenkins 的首页点击 `Manage Jenkins` ,如图:

![](http://lc-zltjehai.cn-n1.lcfile.com/59c31af642a28103f87d/jenkins6-6.png)

2. 然后再点击 `Global Tool Configuration` :

![](http://lc-zltjehai.cn-n1.lcfile.com/6a5c49ae2bf0bfadab3f/jenkins6-7.png)

1.  因为在这之前,我使用的是 `Git for Window` 的命令工具 `Git bash` ,所以我这里的 Git 配置是默认的:

![](http://lc-zltjehai.cn-n1.lcfile.com/23af686e471b88171f6e/jenkins6-8.png)

2.  `Node.js` 的配置,我本地使用的是 `node-10.5.0` 的版本,因此别名我使用的是 `NodeJS_10.5.0` ,配置如图:

![](http://lc-zltjehai.cn-n1.lcfile.com/425835e9365dedd87ffc/jenkins6-9.png)

3. 点击保存后,页面会自动的回到点击 `Manage Jenkins` 后的管理页面,再点击 `Configure System` ,如下图:

![](http://lc-zltjehai.cn-n1.lcfile.com/6c38574384ff5d015df9/jenkins6-10.png)

1.  往下滑动页面,找到 `Gitblit Severs` 进行配置,只要在 `API endpoint` 处,填入你的 `Gitblit` 的服务地址即可,这里我使用的是 8443 ,`Gitblit` 服务的默认端口.

![](http://lc-zltjehai.cn-n1.lcfile.com/2f4cc4fbbd36b688c9a2/jenkins6-11.png)

2.  因为还需要向远程的服务器传送打包后的文件,所以在这个页面的 `Publish over SSH` 配置数据,如下图:
    ![](http://lc-zltjehai.cn-n1.lcfile.com/46866f5e01b35c94b403/jenkins6-12.png)

---

Passphrase: 远程连接登录的用户的密码;

Name: 自定义启的连接名;
Hostname: 远程服务器的 IP;
Username: 登录远程服务器的用户名;
Remote Directory: 远程全目录(可以理解为你要把项目代码部署的路径)

Test Configuration: 测试所填的 `SSH Server` 是否能连通,连通的话点击后会如下图显示:

---

![](http://lc-zltjehai.cn-n1.lcfile.com/c78a7a5a1b9b4e9ab630/jenkins6-13.png)

3. 点击保存,到这里全局的配置都设置完成.

## 新建项目

返回到 `Jenkins` 的最初的界面,点击 `新建Item` ,会跳转到如下的界面

![](http://lc-zltjehai.cn-n1.lcfile.com/ad0419a0ed2dea1793b6/jenkins6-14.png)

在上图的 `输入一个任务名称` 下面的红框内输入你的流水线的名称,我建议一般跟你 `Gitblit` 上的对应的项目名称一样,以便方便区分。

第二个红框 `Freestyle project` 是自定义风格项目,说白了就是空模板,你可以任意配置.填完名字选完 `Freestyle project` ,点击左下角的确定页面就会跳转到如下图:

![](http://lc-zltjehai.cn-n1.lcfile.com/034bd68fe29b189b5320/jenkins6-15.png)

## 项目配置

### General

    这里可以根据自己项目的需求进行一些配置,因为我这个是局域网开发,因此我只在描述中继续下项目的大致描述。

![](http://lc-zltjehai.cn-n1.lcfile.com/a883b10e8d30f56fd943/jenkins6-16.png)

### 源码管理

![](http://lc-zltjehai.cn-n1.lcfile.com/ee633c2e6570fd5ae8df/jenkins6-17.png)

默认的值是 `无`,可选的值有 `Git` 和 `Subversion`,因为我们做的是 `Gitblit` 的联动,因此我们这里选择 `Git`,页面会变成如下图

![](http://lc-zltjehai.cn-n1.lcfile.com/a48051e00fa599251f4b/jenkins6-18.png)

---

Branches to build : `指定分支( 为空时代表 any )`: 你所要构建的分支(因为整个项目就是我自己在开发,没没有分配分支,因此我这里是默认的 `master` 分支)

Repository URL: 在 `Gitblit` 上的项目地址;
Credentials: 用户名和密码,默认是无,可以选择后面的`添加` 按钮进行添加,如下图:

![](http://lc-zltjehai.cn-n1.lcfile.com/43c33eff0f3f6788f8b6/jenkins6-19.png)

`用户名`: `Gitblit` 远程的项目的管理的用户名
`密码`: `Gitblit` 远程的项目的管理的密码

---

### 构建触发器

`构建触发器`,这里直选选择 `Poll SCM` 就可以,如下图:
![](http://lc-zltjehai.cn-n1.lcfile.com/67c4c5f19a5e1667019b/jenkins6-20.png)

选择完 `Poll SCM` 会弹出个对话框,不用理会,默认就好.

### 构建环境

这里是配置构建时候需要的环境,如下图:

![](http://lc-zltjehai.cn-n1.lcfile.com/218ae48c3d33d206551c/jenkins6-21.png)

勾选中上图中红框标注的地方:

---

1. `Send files or execute commands over SSH before the build starts` (构建前向远程服务传送文件或者操作一些指令):
   会弹出如下图的页面:

![](http://lc-zltjehai.cn-n1.lcfile.com/28a479812a78eb35d888/jenkins6-22.png)

Name: 就是之前在全局配置的时候 `Manage Jenkins` --> `Configure System` --> `Publish over SSH` --> `SSH Server` 设置的那个 `Name`

Source files: 要上传到远程服务器的文件包含有文件夹(要是文件夹要名字后面 + `/**` ，比如要上传 `static` 文件夹,就要写 `static/**`);
Remove prefix: 去除 `Source files` 前面的前缀;
Remote directory: 远程路径;
Exec command: 要在远程服务器上执行的命令,多行命令可以用 `Enter` 回车符进行分隔开.

---

2. `Add timestamps to the Console Output`:在控制台输出的信息上添加时间点,可以方便观看每部操作消耗的时间.

---

3. `Provide Node & npm bin/ folder to PATH`: 向指定的节点或者目录提供 node 服务,因为我们要在构建的过程中,自动打包。Vue 项目的打包还是要依赖于 Node
   服务的所以这里勾选,因为我们在前面配置了 `Jenkins` 全局的 node 服务,所以这里勾选完,默认就之前配置的内容.

![](http://lc-zltjehai.cn-n1.lcfile.com/5e014c31002eef411935/jenkins6-23.png)

### 构建

因为我要在构建的时候让 `Jenkins` 去帮我生成打包文件,所以这里我选择了 `Window powershell` 执行的命令是 `yarn build` (我用的是 yarn 服务, 也可以写 `npm run build`)
要添加多步指令,我建议点 `增加构建步骤` 不要写在一个步骤里

### 构建后操作

因为我们要把打包后的文件推送到远程服务器上,因此 `构建后操作` 这个步骤里选择 `Send build artifacts over SSH` ,将打包后的文件推送到远程服务端,并且进入到目录下启动服务,如图:

![](http://lc-zltjehai.cn-n1.lcfile.com/b23f93a91d0b8940340c/jenkins6-24.png)

### 点击保存完成

## 测试

在项目随便修改些内容,然后提交上去,当你 `git push` 完,项目自动开始跑构建就证明,配置成功。

**欢迎留言评论 :)**
