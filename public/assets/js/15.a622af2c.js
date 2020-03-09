(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{419:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"在-centos-的系统上安装-jdk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-centos-的系统上安装-jdk"}},[s._v("#")]),s._v(" 在 centos 的系统上安装 JDK")]),s._v(" "),e("ol",[e("li",[s._v("查看 yum 中管理的可以使用的 JDK 软件的包列表")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum search java "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i --color JDK\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v('根据显示的列表选择合适的版本,安装 JDK ,我选择的是 "java-1.8.0-openjdk-devel.x86_64"')])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" java-1.8.0-openjdk-devel.x86_64\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("一顿安装完成之后,配置环境变量，打开 etc 文件夹下的 profile 文件")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在文件夹内上面的注释下面添加如下的环境配置代码:(找到位置后按 大写的 O,就可以添加一行开始编辑了)")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.71-2.b15.el7_2.x86_64\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/jre/lib/rt.jar:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v('4.先按 Esc，然后在输入 ":wq",回车即可,文件就被保存了,然后执行，让配置生效：')]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v('可以在命令行输入 "java -version" 显示出\n"openjdk version "1.8.0_212"\nOpenJDK Runtime Environment (build 1.8.0_212-b04)\nOpenJDK 64-Bit Server VM (build 25.212-b04, mixed mode)\n",即为安装成功。')])])])}),[],!1,null,null,null);a.default=n.exports}}]);