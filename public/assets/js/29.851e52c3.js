(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{316:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"jenkins-忘记登录账号和密码（windows-系统）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-忘记登录账号和密码（windows-系统）","aria-hidden":"true"}},[s._v("#")]),s._v(" Jenkins 忘记登录账号和密码（windows 系统）")]),s._v(" "),a("p",[a("strong",[s._v("有时候会经常遇到这种情况，长时间不用会遗忘用户名和密码")])]),s._v(" "),a("p",[s._v("admin 初始密码未修改的情况")]),s._v(" "),a("pre",[a("code",[s._v("   进入\\Jenkins\\secrets 目录，打开 initialAdminPassword 文件，复制密码;\n\n   访问 Jenkins 页面，输入管理员 admin，及刚才的密码;\n\n   进入后可更改其他管理员密码;\n")])]),s._v(" "),a("p",[s._v("admin 密码更改忘记情况,而且未开允许用户注册的权限,如图所示:\n"),a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/1f78db29156c2c2ee30f/jenkins3-0.png",alt:""}})]),s._v(" "),a("p",[s._v("1.删除 Jenkins 目录下 config.xml 文件中下面代码，并保存文件。")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("useSecurity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("useSecurity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("authorizationStrategy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hudson.security.AuthorizationStrategy$Unsecured"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("securityRealm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hudson.security.HudsonPrivateSecurityRealm"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("disableSignup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("disableSignup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enableCaptcha"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("enableCaptcha"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("securityRealm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("2.重启 jenkins 服务后,访问页面后会显示如下图:\n"),a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/e2c86f5efdca2afbe395/jenkins3-1.png",alt:""}}),s._v("\n,加载完后的页面变成\n"),a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/d44af0576e4c39612831/jenkins3-2.png",alt:""}})]),s._v(" "),a("p",[s._v('3.进入首页>"Manange Jenkins">"Configure Global Security"\n'),a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/2031e2e6647e56c406e0/jenkins3-3.png",alt:""}})]),s._v(" "),a("p",[s._v('4.勾选"启用安全"')]),s._v(" "),a("p",[a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/35ad50f6cd41411e7bf9/jenkins3-4.png",alt:""}})]),s._v(" "),a("p",[s._v('5.点选"Jenkins 专有用户数据库"，并点击"保存";')]),s._v(" "),a("p",[a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/d69f1d772cc61c9ca257/jenkins3-5.png",alt:""}})]),s._v(" "),a("p",[s._v('6.重新点击首页>"Manange Jenkins",然后往下滚动页面,发现此时出现"Manage Users"\n'),a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/0801f67b25df4e221bc0/jenkins3-7.png",alt:""}})]),s._v(" "),a("p",[s._v('7.点击进入展示"用户列表"\n'),a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/e41c292ec411452f1277/jenkins3-8.png",alt:""}})]),s._v(" "),a("p",[s._v("8.点击右侧的齿轮图标进入修改密码页面,图中标红的部分修改密码\n"),a("img",{attrs:{src:"http://lc-zltjehai.cn-n1.lcfile.com/2b7237691aa9761a43f3/jenkins3-9.png",alt:""}}),s._v("\n点击保存即可。")]),s._v(" "),a("p",[a("strong",[s._v("欢迎留言讨论 😃")])])])},[],!1,null,null,null);t.default=e.exports}}]);