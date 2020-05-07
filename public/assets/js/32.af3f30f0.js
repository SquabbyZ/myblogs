(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{439:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"linux-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-简介"}},[s._v("#")]),s._v(" Linux 简介")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Linux 简介")]),s._v(" "),a("p",[s._v("严格的来讲，Linux 不算是一个操作系统，只是一个 Linux 系统中的内核，即计算机软件与硬件通讯之间的平台；Linux的全称是GNU/Linux，这才算是一个真正意义上的Linux系统。GNU是Richard Stallman组织的一个项目，世界各地的程序员可以变形GNU程序，同时遵循GPL协议，允许任何人任意改动。但是，修改后的程序必须遵循GPL协议。")])]),s._v(" "),a("h2",{attrs:{id:"unix与linux的系统体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unix与linux的系统体系结构"}},[s._v("#")]),s._v(" unix与linux的系统体系结构")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://lc-zltjehaI.cn-n1.lcfile.com/9b966eb221849ae0eba8/centos6-1.jpg",alt:""}})]),s._v(" "),a("p",[s._v("在所有Linux版本中，都会涉及到以下几个重要概念：")]),s._v(" "),a("li",[s._v("内核：内核是操作系统的核心。内核直接与硬件交互，并处理大部分较低层的任务，如内存管理、进程调度、文件管理等。")]),s._v(" "),a("li",[s._v("Shell：Shell是一个处理用户请求的工具，它负责解释用户输入的命令，调用用户希望使用的程序。")]),s._v(" "),a("li",[s._v("命令和工具：日常工作中，你会用到很多系统命令和工具，如cp、mv、cat和grep等。在Linux系统中，有250多个命令，每个命令都有多个选项。")]),s._v(" "),a("li",[s._v("文件和目录：Linux系统中所有的数据都被存储到文件中，这些文件被分配到各个目录，构成文件系统。Linux的目录与Windows的文件夹是类似的概念。")]),s._v(" "),a("h2",{attrs:{id:"linux系统管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux系统管理"}},[s._v("#")]),s._v(" linux系统管理")]),s._v(" "),a("h3",{attrs:{id:"linux目录初识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux目录初识"}},[s._v("#")]),s._v(" linux目录初识")]),s._v(" "),a("h4",{attrs:{id:"根目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根目录"}},[s._v("#")]),s._v(" / 根目录")]),s._v(" "),a("p",[a("b",[a("code",[s._v("/bin")]),s._v(" 存放必要的命令")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/boot")]),s._v(" 存放内核以及启动所需的文件")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/dev")]),s._v(" 存放设备文件")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/etc")]),s._v(" 存放系统配置文件")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/home")]),s._v(" 普通用户的宿主目录，用户数据存放在其主目录中")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/lib")]),s._v(" 存放必要的运行库")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/mnt")]),s._v(" 存放临时的映射文件系统，通常用来挂载使用。")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/proc")]),s._v(" 存放存储进程和系统信息")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/root")]),s._v(" 超级用户的主目录")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/sbin")]),s._v(" 存放系统管理程序")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/tmp")]),s._v(" 存放临时文件")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/usr")]),s._v(" 存放应用程序，命令程序文件、程序库、手册和其它文档。")]),a("br"),s._v(" "),a("b",[a("code",[s._v("/var")]),s._v(" 系统默认日志存放目录")]),a("br")]),s._v(" "),a("h3",{attrs:{id:"linux常用命令初识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux常用命令初识"}},[s._v("#")]),s._v(" linux常用命令初识")]),s._v(" "),a("h4",{attrs:{id:"命令提示符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令提示符"}},[s._v("#")]),s._v(" 命令提示符")]),s._v(" "),a("p",[s._v("打开终端，我们先看到的是以下内容的其中一条")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("zhuhaifeng@zhuhaifeng ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$  //普通用户\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@zhuhaifeng ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  //超级用户")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("root：显示的是当前的登录用户，\n@：分隔符号，没有特殊含义。\nzhuhaifeng: 当前系统的简写主机名\n~：代表用户当前所在的目录，此例中用户当前所在的目录是家目录。\n#：命令提示符，Linux 用这个符号标识登录的用户权限等级。如果是超级用户，提示符就是 #；如果是普通用户，提示符就是 $。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("cd 命令\n")])]),a("li",[a("code",[s._v("cd /home")]),s._v(" 进入/home目录")]),s._v(" "),a("li",[a("code",[s._v("cd /root")]),s._v(" 进入到 "),a("code",[s._v("/root")]),s._v(" 目录")]),s._v(" "),a("li",[a("code",[s._v("cd ..")]),s._v(" 或者 "),a("code",[s._v("cd ../")]),s._v(" 返回到上一级目录")]),a("p"),s._v(" "),a("li",[a("p",[s._v("文件目录命令：\n")])]),a("li",[a("code",[s._v("ls")]),s._v(" 查看当前目录所有非隐藏及 .开头的文件和目录。")]),s._v(" "),a("li",[a("code",[s._v("ls -a")]),s._v(" 查看当前目录所有的文件和目录。")]),s._v(" "),a("li",[a("code",[s._v("pwd")]),s._v(" 显示当前所在的目录,而且是绝对路径")]),s._v(" "),a("li",[a("code",[s._v("mkdir 文件夹名")]),s._v(" 创建文件夹")]),s._v(" "),a("li",[a("code",[s._v("rmdir 文件夹名")]),s._v(" 删除空目录，如果要删除的文件夹不是空会报 "),a("code",[s._v("rmdir: failed to remove ‘213/’: Directory not empty")])]),s._v(" "),a("li",[a("code",[s._v("rm")]),s._v(" 删除文件或者目录,常用法:"),a("code",[s._v("rm –rf test.txt")]),s._v(" ("),a("code",[s._v("-r")]),s._v(" 表示递归,"),a("code",[s._v("-f")]),s._v(" 表示强制)")]),s._v(" "),a("li",[a("code",[s._v("cp")]),s._v(" 拷贝文件,用法,"),a("code",[s._v("cp old.txt /tmp/new.txt")]),s._v(" ，常用来备份；如果拷贝目录，要加 "),a("code",[s._v("–r")]),s._v(" 参数。")]),s._v(" "),a("li",[a("code",[s._v("mv")]),s._v(" 重命名或者移动文件或者目录，用法, "),a("code",[s._v("mv old.txt new.txt")])]),s._v(" "),a("li",[a("code",[s._v("touch")]),s._v(" 创建文件，用法，"),a("code",[s._v("touch test.txt")]),s._v("，如果文件存在，则表示修改当前文件时间。")]),s._v(" "),a("li",[a("code",[s._v("find")]),s._v(" 查找文件或目录，用法 "),a("code",[s._v("find /home -name “test.txt”")]),s._v(",命令格式为:后接查找的目录，-name指定需要查找的文件名称，名称可以使用表示所有。 "),a("code",[s._v("/home -name “*.txt”")]),s._v(" ;查找"),a("code",[s._v("/home")]),s._v("目录下，所有以.txt结尾的文件或者目录。")]),a("p"),s._v(" "),a("li",[a("p",[s._v("tar打包/压缩命令：\n"),a("code",[s._v("tar")]),s._v(" 是Linux 下最常用的打包、压缩工具，它在Linux 中扮演类似于WinZip 或WinRAR 在Windows 下的角色。下面是该工具的常用命令参数及运用举例：\n主要命令：\n"),a("code",[s._v("-c")]),s._v(" 创建包"),a("br"),s._v(" "),a("code",[s._v("-x")]),s._v(" 解包"),a("br"),s._v(" "),a("code",[s._v("-t")]),s._v(" 列出包中的内容"),a("br"),s._v(" "),a("code",[s._v("-r")]),s._v(" 增加文件到指定包中"),a("br"),s._v(" "),a("code",[s._v("-u")]),s._v(" 更新包中的文件"),a("br"),s._v("\n可选命令:\n"),a("code",[s._v("-j")]),s._v(" 创建或解开包时 使用bzip2 进行压缩或解压；"),a("br"),s._v(" "),a("code",[s._v("-z")]),s._v(" 创建或解开包时 使用gzip 进行压缩或解压；"),a("br"),s._v(" "),a("code",[s._v("-Z")]),s._v(" 创建或解开包时 使用compress 进行压缩或解压；"),a("br"),s._v(" "),a("code",[s._v("-f")]),s._v(" 后面跟指定的包文件名；"),a("br"),s._v(" "),a("code",[s._v("-v")]),s._v(" 显示打包/解包过程"),a("br"),s._v(" "),a("code",[s._v("-C")]),s._v(" 指定解包后的路径"),a("br")])])]),s._v(" "),a("p",[s._v("举例:\n"),a("code",[s._v("tar -czf tmp.tar.gz /tmp")]),s._v(" 将 “/tmp” 目录压缩打包存放为 "),a("code",[s._v("tmp.tar.gz")]),s._v("；")]),s._v(" "),a("p",[a("code",[s._v("tar -xzf tmp.tar.gz -C /home")]),s._v(" 将 "),a("code",[s._v("tmp.tar.gz")]),s._v(" 包解到“/home” 目录下；")]),s._v(" "),a("p",[a("code",[s._v("tar -t tmp.tar.gz")]),s._v(" 查看 tmp.tar.gz 包中的文件信息")]),s._v(" "),a("h2",{attrs:{id:"linux系统-apt-get-命令的使用：安装、更新、卸载软件包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux系统-apt-get-命令的使用：安装、更新、卸载软件包"}},[s._v("#")]),s._v(" Linux系统 apt-get 命令的使用：安装、更新、卸载软件包")]),s._v(" "),a("ol",[a("li",[s._v("安装软件包")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" PackageName                 // 普通安装\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PackageName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("VersionName     // 安装指定包的指定版本\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" --reinstall "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" PackageName     // 重新安装\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" build-dep PackageName               // 安装相关的编译环境\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("                          // 修复安装\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" PackageName                  // 下载软件包的源码\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("卸载软件包")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove PackageName                  // 保留配置文件\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" --purge remove PackageName          // 删除配置文件\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" clean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" autoclean          // 清理无用的包\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("更新软件包")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update                              // 更新源\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade                             // 更新已安装的软件包\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" dist-upgrade                        // 升级系统\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("查询软件包")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("dpkg -l                                     // 列出已安装的所有软件包\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" search PackageName                // 搜索软件包\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" show PackageName                  // 获取软件包的相关信息, 如说明、大小、版本等\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" depends PackageName               // 查看该软件包需要哪些依赖包\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" rdepends PackageName              // 查看该软件包被哪些包依赖\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" check                               // 检查是否有损坏的依赖\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"ubuntu-更换国内镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-更换国内镜像源"}},[s._v("#")]),s._v(" Ubuntu 更换国内镜像源")]),s._v(" "),a("ol",[a("li",[s._v("1.备份原来的源\n将以前的源备份一下，以防以后可以用的。")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/apt/sources.list /etc/apt/sources_nit.list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("更换源\n使用gedit打开文档")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" gedit /etc/apt/sources.list\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将下边的阿里源复制进去，然后点击保存关闭")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multivers\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("更新\n更新源")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修复损坏的软件包，尝试卸载出错的包，重新安装正确版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("更新软件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);