(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{438:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"数据挂载盘无法启动可执行文件报-没有权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据挂载盘无法启动可执行文件报-没有权限"}},[s._v("#")]),s._v(' 数据挂载盘无法启动可执行文件报 "没有权限"')]),s._v(" "),e("p",[s._v('**问题原因：**天津麒麟系统中数据挂载盘默认是不能执行可执行文件的，比如说 node、elasticsearch 等，只要执行可执行文件就会报"没有执行权限"')]),s._v(" "),e("p",[e("strong",[s._v("解决办法：")])]),s._v(" "),e("ol",[e("li",[s._v("切换到 root 用户")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" root\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2.在终端输入下面的命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/fstab\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/2fa70056e984bc199390/kylin1-1.png",alt:""}})]),s._v(" "),e("p",[s._v("上图中标红的区域内，"),e("code",[s._v("ext4")]),s._v(" 后面的 "),e("code",[s._v("rv,user,x-gvis-show,nosuid,nofail 0 2")]),s._v("\n内添加 "),e("code",[s._v("exec")]),s._v("后保存,重启机器即可.")]),s._v(" "),e("p",[e("strong",[s._v("这里一定要确保不能填错,要不只能重启机器")])]),s._v(" "),e("h2",{attrs:{id:"精简版的麒麟桌面-sp2-系统-如何通过系统盘装载软件-demo-是-mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#精简版的麒麟桌面-sp2-系统-如何通过系统盘装载软件-demo-是-mysql"}},[s._v("#")]),s._v(" 精简版的麒麟桌面 sp2 系统 如何通过系统盘装载软件(demo 是 MySql)")]),s._v(" "),e("p",[s._v("(Kylin 版本是 "),e("code",[s._v("dist_id=Kylin-4.0.2-desktop-sp2-181112.J1-arm64-2018-11-12 13:33:55")]),s._v(")")]),s._v(" "),e("p",[s._v("**问题原因：**装系统的时候选择了简版的操作系统，很多开发依赖以及软件都没有安装，在后期开发的过程中需要这些软件和依赖，而又不想重装系统。")]),s._v(" "),e("p",[e("strong",[s._v("解决办法：")]),s._v(" 修改 "),e("code",[s._v("/etc/apt/sources.list")]),s._v(" 文件，在我的操作系统中打开该文件的时候显示是空，因此直接使用 "),e("code",[s._v("vim")]),s._v(" 来进行修改填下下面的一段语句：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("deb  file:///media/mapserver/Kylin-4.0.2 juniper main\n//其中 /media/mapserver/Kylin-4.0.2 是光盘的绝对路径"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("换成你的路径即可"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("code",[s._v(":wq!")]),s._v(" 保存退出")]),s._v(" "),e("p",[s._v("执行下面的命令")]),s._v(" "),e("p",[s._v("然后执行 "),e("code",[s._v("apt-get update")]),s._v(" ,系统会提示你需要执行 "),e("code",[s._v("apt-get -f install")]),s._v(" 来更新一些依赖包，输入 "),e("code",[s._v("apt-get -f install")]),s._v(" 选择 Y\n如果没有提示就往下面执行")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-cache")]),s._v(" search mysql-server //搜一下 mysql-server\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果有的话再执行下面的命令就能安装了")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后会弹出下图，就证明安装成功了，一顿下一步就可")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/055afb0cdf71960417b7/kylin1-2.jpg",alt:""}})]),s._v(" "),e("p",[s._v("欢迎评论留言纠错 😃")])])}),[],!1,null,null,null);a.default=n.exports}}]);