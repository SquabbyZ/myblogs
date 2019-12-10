(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{354:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-添加新用户并授权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加新用户并授权","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 添加新用户并授权")]),s._v(" "),e("h3",{attrs:{id:"（一）-创建一个-jack-用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（一）-创建一个-jack-用户","aria-hidden":"true"}},[s._v("#")]),s._v(" （一） 创建一个 Jack 用户")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /home\n\nadduser Jack\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("可以看到在 home 目录下生成了一个名字为 Jack 的文件夹")]),s._v(" "),e("h3",{attrs:{id:"（二）-为-jack-用户设置密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（二）-为-jack-用户设置密码","aria-hidden":"true"}},[s._v("#")]),s._v(" （二） 为 Jack 用户设置密码")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" Jack\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('命令行中会弹出 :"Changing password for user Jack.\nNew password: "')]),s._v(" "),e("p",[s._v('输入你的密码,我在这里设置的密码是：123456,你按回车之后，系统会提示你:"BAD PASSWORD: The password fails the dictionary check - it is too simplistic/systematic",\n可以不用理会，这个是告诉你，你设置的密码太简单了,由于我们只是作为测试，所以忽略这个警告。')]),s._v(" "),e("p",[s._v('紧接着就会弹出:"Retype new password:",意思是让你确认密码。输入完成后系统提示:"passwd: all authentication tokens updated successfully.",就证明用户密码设置成功。')]),s._v(" "),e("h3",{attrs:{id:"三-新-jack-用户进行-sudo-操作的授权"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-新-jack-用户进行-sudo-操作的授权","aria-hidden":"true"}},[s._v("#")]),s._v(" (三) 新 Jack 用户进行 sudo 操作的授权")]),s._v(" "),e("p",[s._v("因为 sudo 命令是在 sudoers 文件中的，我们看一下 sudoers 文件所在的位置")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" sudoers\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('命令行窗口输出的内容就显示出了，我们所要找的文件所在的位置:"sudoers: /etc/sudoers /etc/sudoers.d /usr/share/man/man5/sudoers.5.gz\n"')]),s._v(" "),e("h3",{attrs:{id:"（五）查看一下文件的权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（五）查看一下文件的权限","aria-hidden":"true"}},[s._v("#")]),s._v(" （五）查看一下文件的权限")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /etc/sudoers\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('输出的显示为:"-r--r-----. 1 root root 3938 Apr 11 2018 /etc/sudoers"')]),s._v(" "),e("p",[s._v("可以看到只有只读的权限，这时候我们要加入一个可写的（w）的权限")]),s._v(" "),e("h3",{attrs:{id:"（六）加入可写的权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（六）加入可写的权限","aria-hidden":"true"}},[s._v("#")]),s._v(" （六）加入可写的权限")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -v u+w /etc/sudoers\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('命令行显示内容为:"mode of ‘/etc/sudoers’ changed from 0440 (r--r-----) to 0640 (rw-r-----)"')]),s._v(" "),e("h3",{attrs:{id:"（七）把-jack-用户添加到-sudoers-中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（七）把-jack-用户添加到-sudoers-中","aria-hidden":"true"}},[s._v("#")]),s._v(" （七）把 Jack 用户添加到 sudoers 中")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sudoers\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开 sudoers 文件开始编辑")]),s._v(" "),e("p",[s._v("我的腾讯云服务器会提示如下信息:")]),s._v(" "),e("p",[s._v('E325: ATTENTION\nFound a swap file by the name "/etc/.sudoers.swp"\nowned by: root dated: Wed Jul 3 09:57:38 2019\nfile name: /etc/sudoers\nmodified: YES\nuser name: root host name: VM_0_9_centos\nprocess ID: 16454\nWhile opening file "/etc/sudoers"\ndated: Wed Jul 3 10:08:11 2019\nNEWER than swap file!')]),s._v(" "),e("p",[s._v('(1) Another program may be editing the same file. If this is the case,\nbe careful not to end up with two different instances of the same\nfile when making changes. Quit, or continue with caution.\n(2) An edit session for this file crashed.\nIf this is the case, use ":recover" or "vim -r /etc/sudoers"\nto recover the changes (see ":help recovery").\nIf you did this already, delete the swap file "/etc/.sudoers.swp"\nto avoid this message.\n"/etc/sudoers" 114L, 3967C\nPress ENTER or type command to continue')]),s._v(" "),e("p",[s._v("只需要按回车键就可以正常进入到文件的编辑")]),s._v(" "),e("p",[s._v('然后输入 "/",在之后输入 "All",然后定位到要修改的内容的位置,在查到的位置上加入 "Jack ALL=(ALL) ALL"')]),s._v(" "),e("p",[s._v("加完之后的效果为：")]),s._v(" "),e("p",[s._v('" ## Allow root to run any commands anywhere\nroot ALL=(ALL) ALL\nJack ALL=(ALL) ALL\n"')]),s._v(" "),e("p",[s._v('如果是 输入错误了，按 "ctrl + c",再按 "ctrl + z",就退出了,\n如果是正常的保存，就按两次大写的 "Z" 就保存退出了。')]),s._v(" "),e("h3",{attrs:{id:"（八）wq-保存，然后把-sudoers-文件权限改回去，毕竟这是一个重要的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（八）wq-保存，然后把-sudoers-文件权限改回去，毕竟这是一个重要的文件","aria-hidden":"true"}},[s._v("#")]),s._v(" （八）wq 保存，然后把 sudoers 文件权限改回去，毕竟这是一个重要的文件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -v u-w /etc/sudoers\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('命令行显示: "mode of ‘/etc/sudoers’ changed from 0640 (rw-r-----) to 0440 (r--r-----)"')]),s._v(" "),e("h3",{attrs:{id:"（九）测试新用户-admin-进行登陆，使用-su-jack-操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#（九）测试新用户-admin-进行登陆，使用-su-jack-操作","aria-hidden":"true"}},[s._v("#")]),s._v(" （九）测试新用户 admin 进行登陆，使用 su Jack 操作")]),s._v(" "),e("p",[s._v("到此，新增 admin 并且授权 sudo 就完成了.")]),s._v(" "),e("p",[s._v("本文借鉴：https://blog.csdn.net/xudailong_blog/article/details/80518266")])])},[],!1,null,null,null);a.default=r.exports}}]);