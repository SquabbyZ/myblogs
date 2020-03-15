(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{424:function(t,a,r){"use strict";r.r(a);var s=r(4),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"感谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#感谢"}},[t._v("#")]),t._v(" 感谢")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.bilibili.com/video/av71335007",target:"_blank",rel:"noopener noreferrer"}},[t._v("java1234官方的教学视频"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("容目录挂载")]),t._v(" "),r("p",[t._v("我们可以在创建容器的时候,将宿主机的目录与容器内的目录进行映射,这样我们就可以实现宿主机和容器目录的双向数据自动同步")])]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),r("p",[t._v("前面学习过 cp 命令来实现数据传递,这种方式比较麻烦;\n我们通过容器目录挂载,能够轻松实现代码上传,配置修改,日志同步等需求")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),r("h3",{attrs:{id:"语法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法:")]),t._v(" "),r("p",[t._v("docker  run -it -v /宿主机目录:/容器目录 镜像名")]),t._v(" "),r("h3",{attrs:{id:"多目录挂载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多目录挂载"}},[t._v("#")]),t._v(" 多目录挂载")]),t._v(" "),r("p",[t._v("docker run -it -v /宿主机目录:/容器目录 -v /宿主机目录2:/容器目录2 镜像名")]),t._v(" "),r("h3",{attrs:{id:"注意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),r("p",[t._v("如果你同步的是多级目录,可能会出现权限不足的提示;\n这是因为 Centos7 中的安全模块 selinux 把权限禁掉了,我们需要添加 "),r("code",[t._v("--privileged=true")]),t._v(" 来解决挂载的目录没有权限的问题")])])}),[],!1,null,null,null);a.default=e.exports}}]);