(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{333:function(s,a,n){"use strict";n.r(a);var e=n(1),t=Object(e.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"sass-安装头疼的问题点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sass-安装头疼的问题点","aria-hidden":"true"}},[s._v("#")]),s._v(" Sass 安装头疼的问题点")]),s._v(" "),n("p",[s._v("在 linux or Mac 上安装很简单，")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" node-sass\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("很简单的一条命令就可以完成了,但是在 Windows 的系统上的时候,就无法安装上,是不是很头疼,网上很多的方法让你去改 webpack 的配置,这显然对于前端新手来说是跟头疼的伤。")]),s._v(" "),n("p",[n("strong",[s._v("原因就是 node-sass 有一个工具包 "),n("code",[s._v("binding.node")]),s._v(" 在 Windows 系统上安装的时候无法用命令下载")])]),s._v(" "),n("h2",{attrs:{id:"话不多说直接放大招"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#话不多说直接放大招","aria-hidden":"true"}},[s._v("#")]),s._v(" 话不多说直接放大招")]),s._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[s._v("按照下面的方式进行安装吧,也同样试用于 Winwdows 局域网")]),s._v(" "),n("ol",[n("li",[s._v("执行命令:")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("node -p "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"[process.platform, process.arch, process.versions.modules].join('-')\"")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("复制出打印出来的内容,我这里打印出的是")]),s._v(" "),n("p",[n("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/f1bdf3201ef9ddc038a9/node-sass1.png",alt:""}})]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("去 "),n("a",{attrs:{href:"https://github.com/sass/node-sass/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/sass/node-sass/releases"),n("OutboundLink")],1),s._v(' 地址上下载刚才你在 powershell(CMD) 上打印出来的一样的名字,以 "binding.node" 结尾的文件下载下来 '),n("code",[s._v("我下载的是win32-x64-67_binding.node")])]),s._v(" "),n("li",[s._v("放入到你的 Node.js 的安装目录，我的放入目录是 "),n("code",[s._v("C:/Program Files/nodejs/node_modules/npm/win32-x64-64/binding.node")])]),s._v(" "),n("li",[s._v("修改 "),n("code",[s._v("~/.npmrc")]),s._v(" 文件,增加下面一行代码:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("sass_binary_path=C:/Program Files/nodejs/node_modules/npm/win32-x64-64/binding.node//这里的值为第三步中的 放入路径\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("h2",{attrs:{id:"怎么快捷修改-npmrc-文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#怎么快捷修改-npmrc-文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 怎么快捷修改 .npmrc 文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config edit\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"npmrc-配置文件在哪里？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npmrc-配置文件在哪里？","aria-hidden":"true"}},[s._v("#")]),s._v(" .npmrc 配置文件在哪里？")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"npm-的缓存目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-的缓存目录","aria-hidden":"true"}},[s._v("#")]),s._v(" npm 的缓存目录")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get cache\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"npm-的全局-node-包在哪里？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-的全局-node-包在哪里？","aria-hidden":"true"}},[s._v("#")]),s._v(" npm 的全局 node 包在哪里？")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get prefix\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("有疑问欢迎联系我,或者在下面留言 😃")])])])},[],!1,null,null,null);a.default=t.exports}}]);