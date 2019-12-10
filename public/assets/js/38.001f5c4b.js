(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{329:function(n,e,o){"use strict";o.r(e);var s=o(1),a=Object(s.a)({},function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h2",{attrs:{id:"mongondb-数据库-windows-离线安装-本文采用的是-win7"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mongondb-数据库-windows-离线安装-本文采用的是-win7","aria-hidden":"true"}},[n._v("#")]),n._v(" MongonDB 数据库 Windows 离线安装(本文采用的是 Win7 )")]),n._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[n._v("简要")]),n._v(" "),o("p",[n._v("那么多的数据库,为什么非要选择 "),o("code",[n._v("MongoDB")]),n._v(" 呢？")]),n._v(" "),o("ol",[o("li",[n._v("身为本文作者的我是一名前端小白,夸张的来讲我只对 "),o("code",[n._v("JS")]),n._v(" "),o("code",[n._v("Html")]),n._v(" "),o("code",[n._v("CSS")]),n._v(" 熟悉")]),n._v(" "),o("li",[o("code",[n._v("MySql")]),n._v(" "),o("code",[n._v("Oracle")]),n._v(" "),o("code",[n._v("ElasticSearch")]),n._v(" 等大多数数据库都是对 java 开发更有好，利于排查理解")]),n._v(" "),o("li",[o("code",[n._v("MongoDB")]),n._v(" 更倾向于 "),o("code",[n._v("JS")]),n._v(" 语法逻辑")]),n._v(" "),o("li",[n._v("对于小前端的我来讲自认为最容易上手的就是 "),o("code",[n._v("mongoDB")])])])]),n._v(" "),o("h2",{attrs:{id:"下载"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[n._v("#")]),n._v(" 下载")]),n._v(" "),o("ol",[o("li",[n._v("登录到官网的下载地址,"),o("a",{attrs:{href:"https://www.mongodb.com/download-center/enterprise",target:"_blank",rel:"noopener noreferrer"}},[n._v("社区版 MongoDB"),o("OutboundLink")],1)])]),n._v(" "),o("p",[o("img",{attrs:{src:"",alt:""}})]),n._v(" "),o("p",[n._v("选择你对应的操作系统以及对应的 "),o("code",[n._v("mongoDB")]),n._v(" 的版本,我这是 win7 所以选择的是 windows 系统,版本选择的是 "),o("code",[n._v("4.0.13(previous release)")]),n._v("\n大约 300M 的大小, "),o("strong",[n._v("Windows 版本的要选择 "),o("code",[n._v("ZIP")]),n._v(" 包,不要选择 "),o("code",[n._v("MSI")]),n._v(" 文件那个,至少在我采坑的这篇文章的时候,安装总是报 "),o("code",[n._v("The domain ,user name and/or password are incorrect(域名/用户名/密码不正确)")]),n._v("会导致你失去学习兴趣")])]),n._v(" "),o("h2",{attrs:{id:"安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[n._v("#")]),n._v(" 安装")]),n._v(" "),o("p",[n._v("把下载好的 "),o("a",{attrs:{href:"https://www.mongodb.com/download-center/enterprise",target:"_blank",rel:"noopener noreferrer"}},[n._v("mongodb-win32-x86_64-enterprise-windows-64-4.0.13.zip"),o("OutboundLink")],1),n._v(" 解压到你想放的任何位置,我选择了 "),o("code",[n._v("D盘")]),n._v(" 下新建一个 "),o("code",[n._v("MongoDB4.0.13")]),n._v(" 然后在里面新建三个文件夹分别是 "),o("code",[n._v("server")]),n._v(" "),o("code",[n._v("data")]),n._v(" "),o("code",[n._v("logs")]),n._v(",在 "),o("code",[n._v("server")]),n._v(" 文件夹内把下载好的 "),o("code",[n._v("MongoDB")]),n._v(" 的压缩包解压到该目录下,然后在 "),o("code",[n._v("logs")]),n._v(" 文件夹下新建一个 "),o("code",[n._v("mongo.log")]),n._v(" 用于存放日志文件(因为是机器是新装的 "),o("code",[n._v("mongoDB")]),n._v(" 所以该日志文件需要自己手动创建好)")]),n._v(" "),o("h2",{attrs:{id:"配置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[n._v("#")]),n._v(" 配置")]),n._v(" "),o("p",[n._v("进入到 "),o("code",[n._v("D:/MongoDB4.0.13/server")]),n._v(" 目录下,新建一个 "),o("code",[n._v("mongo.conf")]),n._v(" 文件,然后打开该文件进行配置,配置如下:")]),n._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("dbpath    = D:\\MongoDB4.0.13\\data          #此为数据存储路径\nlogpath   = D:\\MongoDB4.0.13\\log\\mongo.log #此为日志存储路径\njournal   = true                           #启动日志文件，默认就是启动\nlogappend = true                           #错误日志采用追加方式\nquiet     = true                           #是否过滤无用日志\nport      = 27017                          #27017为默认端口\n\n")])]),n._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[n._v("1")]),o("br"),o("span",{staticClass:"line-number"},[n._v("2")]),o("br"),o("span",{staticClass:"line-number"},[n._v("3")]),o("br"),o("span",{staticClass:"line-number"},[n._v("4")]),o("br"),o("span",{staticClass:"line-number"},[n._v("5")]),o("br"),o("span",{staticClass:"line-number"},[n._v("6")]),o("br"),o("span",{staticClass:"line-number"},[n._v("7")]),o("br")])]),o("p",[n._v("再进入的当前目录内的 "),o("code",[n._v("bin")]),n._v(" 目录下(因为 bin 目录下才有 mongod.exe 可执行文件)\n按住 "),o("code",[n._v("shift")]),n._v(" 的同时右键点击目录下的空白处,会弹出一个菜单,选择 "),o("code",[n._v("在此处打开命令窗口(W)")]),n._v(" (Win10 的会显示 "),o("code",[n._v("在此处打开 PowerShell 窗口(S)")]),n._v(")输入下面的命令")]),n._v(" "),o("div",{staticClass:"language-bash line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[n._v("mongod –config D:\\MongoDB4.0.13\\server\\mongo.conf\n\n")])]),n._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[n._v("1")]),o("br"),o("span",{staticClass:"line-number"},[n._v("2")]),o("br")])]),o("p",[n._v("注意：后面的路径是 mongo.conf 文件的路径。此时就已经配置好 mongodb 了。\n打开浏览器在 url 框中输入 localhost:27017 浏览器显示如下信息就说明配置好了，也已经成功启动了 mongodb：")]),n._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("It looks like you are trying to access MongoDB over HTTP on the native driver port.\n")])]),n._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[n._v("1")]),o("br")])]),o("h2",{attrs:{id:"启动-mongodb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#启动-mongodb","aria-hidden":"true"}},[n._v("#")]),n._v(" 启动 MongoDB")]),n._v(" "),o("p",[n._v("在下次使用 mongodb 的时候，需要再次启动 mongoldb，再次启动 mongodb 的方法和首次启动 mongodb 的方式相差不多，在 bin 目录下打开命令行，输入：")]),n._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("mongod –dbpath D:\\MongoDB4.0.13\\data\n\n")])]),n._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[n._v("1")]),o("br"),o("span",{staticClass:"line-number"},[n._v("2")]),o("br")])]),o("p",[n._v("就可以启动 mongodb 了。这只是用来启动 mongodb 的服务命令，之后就可以使用 "),o("a",{attrs:{href:"https://robomongo.org/download",target:"_blank",rel:"noopener noreferrer"}},[n._v("Robo3T"),o("OutboundLink")],1),n._v(" 连接 mongodb 了。")]),n._v(" "),o("h2",{attrs:{id:"安装到-windows-服务中"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装到-windows-服务中","aria-hidden":"true"}},[n._v("#")]),n._v(" 安装到 windows 服务中")]),n._v(" "),o("p",[n._v("每次使用的 MongoDB 前都需要输入命令，并且在界面开启一个 CMD 很繁琐，而且很容易不小心把 CMD 命令窗口观点影响开发效率，因此我们可以把 MongoDB 安装到 windows 的服务中，输入下面的命令:")]),n._v(" "),o("div",{staticClass:"language-bash line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[n._v("mongod –congif D:\\MongoDB4.0.13\\server\\mongo.conf –install\n\n")])]),n._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[n._v("1")]),o("br"),o("span",{staticClass:"line-number"},[n._v("2")]),o("br")])]),o("p",[n._v("此时打开资源管理器进入服务就可以看到 MongoDB 的服务已经在 Windows Service 里面了，下次再启动 mongodb 的时候就可以在任意位置打开命令行输入 net start mongodb 就可以了，而且这个窗口可以关闭，关闭后 mongodb 服务仍在启动。")]),n._v(" "),o("h2",{attrs:{id:"安装到-windows-服务后-启动-停止-移除服务"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装到-windows-服务后-启动-停止-移除服务","aria-hidden":"true"}},[n._v("#")]),n._v(" 安装到 windows 服务后 启动 停止 移除服务")]),n._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("net start mongodb //启动 MongoDB 服务\n\nnet stop mongodb  //停止 MongoDB 服务\n\nmongod –remove    //移除 MongoDB 服务 必须在 MongoDB 的 bin 目录下打开命令行输入\n\n")])]),n._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[n._v("1")]),o("br"),o("span",{staticClass:"line-number"},[n._v("2")]),o("br"),o("span",{staticClass:"line-number"},[n._v("3")]),o("br"),o("span",{staticClass:"line-number"},[n._v("4")]),o("br"),o("span",{staticClass:"line-number"},[n._v("5")]),o("br"),o("span",{staticClass:"line-number"},[n._v("6")]),o("br")])]),o("p",[n._v("以上就是 MongoDB 的 Windows 的离线安装的教程了，欢迎评论纠错:)")])])},[],!1,null,null,null);e.default=a.exports}}]);