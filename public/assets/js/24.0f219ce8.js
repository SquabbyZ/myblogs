(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{315:function(n,e,s){"use strict";s.r(e);var t=s(1),a=Object(t.a)({},function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"jenkins-修改端口号（windows-系统）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-修改端口号（windows-系统）","aria-hidden":"true"}},[n._v("#")]),n._v(" Jenkins 修改端口号（windows 系统）")]),n._v(" "),s("p",[n._v("windows 下改端口号：\nJenkins 安装成功后，默认的端口为 8080。\n如果该端口号与其他服务的端口号冲突，则需要更改 Jenkins 的端口号。\n具体方法为：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("修改 Jenkins 安装目录下的 jenkins.xml 文件，将<arguments>元素中的 httpPort 的值 8080 改为其他值并保存，如下图。(因为我的 gitlab 的端口是 8443 ,所以这里我使用的是 8444 端口给 Jenkins)\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/934fab6900a80cadeeb0/jenkins2-1.png",alt:""}})]),n._v(" "),s("p",[s("strong",[s("em",[n._v("一定要记得重启服务才会生效")])])]),n._v(" "),s("h2",{attrs:{id:"jenkins-重启和关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-重启和关闭","aria-hidden":"true"}},[n._v("#")]),n._v(" Jenkins 重启和关闭")]),n._v(" "),s("p",[n._v("我们在配置好 Jenkins 之后, Jenkins 的服务会自动的加入到 windows 的任务管理器中的服务中。")]),n._v(" "),s("h3",{attrs:{id:"jenkins-简易重启和关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-简易重启和关闭","aria-hidden":"true"}},[n._v("#")]),n._v(" Jenkins 简易重启和关闭")]),n._v(" "),s("p",[n._v("1.右键点击最下方的带有 "),s("code",[n._v("开始")]),n._v(" 的任务栏的空白处")]),n._v(" "),s("p",[s("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/e429b7aaeacc9a18c08c/Jenkins2-2.png",alt:""}})]),n._v(" "),s("p",[n._v("2.选择任务管理器后,会弹出下面的窗口,选择标红的服务")]),n._v(" "),s("p",[s("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/13db346c557236417561/Jenkins2-3.png",alt:""}})]),n._v(" "),s("p",[n._v("3.在该服务处点击右键会弹出菜单,来选择是"),s("code",[n._v("停止服务")]),n._v("、"),s("code",[n._v("关闭服务")]),n._v("还是"),s("code",[n._v("重启服务")]),n._v(" "),s("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/f9ae5ae6dd1dfdbf2512/Jenkins2-4.png",alt:""}})]),n._v(" "),s("h3",{attrs:{id:"jenkins-命令重启和关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-命令重启和关闭","aria-hidden":"true"}},[n._v("#")]),n._v(" Jenkins 命令重启和关闭")]),n._v(" "),s("p",[s("strong",[n._v("如果你使用的不是 "),s("code",[n._v("Windows 10")]),n._v(" 系统,我建议你安装一个 "),s("code",[n._v("git for Window")]),n._v("———— "),s("code",[n._v("git.bash")]),n._v(" 命令窗口")]),n._v("\n按住 "),s("code",[n._v("shift")]),n._v(" 键 同时点击鼠标右键,如图:")]),n._v(" "),s("p",[s("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/679eb9189035f4d435b5/Jenkins2-5.png",alt:""}}),n._v(" "),s("strong",[n._v("(ps:画红线上面的那个就是 "),s("code",[n._v("git for window")]),n._v(" 的 "),s("code",[n._v("git bash")]),n._v(")")])]),n._v(" "),s("h4",{attrs:{id:"jenkins-启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-启动","aria-hidden":"true"}},[n._v("#")]),n._v(" Jenkins 启动")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("net start jenkins\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/ee4b96c521ed0dc3c534/jenkins2-7.png",alt:""}})]),n._v(" "),s("h4",{attrs:{id:"jenkins-停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-停止","aria-hidden":"true"}},[n._v("#")]),n._v(" Jenkins 停止")]),n._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[n._v("net stop jenkins\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/7d6b3ba6dadcc83de571/jenkins2-6.png",alt:""}})]),n._v(" "),s("p",[s("strong",[n._v("欢迎留言讨论 😃")])])])},[],!1,null,null,null);e.default=a.exports}}]);