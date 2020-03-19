(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{440:function(t,e,a){"use strict";a.r(e);var n=a(4),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("::: 事件的概念")]),t._v(" "),a("p",[t._v("JavaScript 使我们有能力创建动态页面，网页中的每个元素都可以产生某些可以出发 JavaScript 函数的事件。我们可以认为事件是可以被 JavaScript 侦测到的一种行为。\n:::")]),t._v(" "),a("p",[a("strong",[t._v("事件流:")]),t._v(" 事件流主要分为"),a("code",[t._v("冒泡事件")]),t._v(" 和 "),a("code",[t._v("捕获型事件")]),t._v("。IE 浏览器目前只支持冒泡事件，而支持标准 DOM 的浏览器比如火狐、 Chrome 等两者都支持。")]),t._v(" "),a("p",[a("strong",[t._v("阻止 HTML 元素的默认行为:")]),t._v(" HTML 元素大都包含了自己的默认行为，例如:超链接、提交按钮等。我们可以通过在绑定事件中加上 "),a("code",[t._v("return false")]),t._v(" 来阻止它的默认行为。")]),t._v(" "),a("p",[a("strong",[t._v("通用性的事件监听方法:")])]),t._v(" "),a("ol",[a("li",[t._v("绑定 HTML 元素属性")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("clickMe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("check(this)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("绑定 DOM 对象属性")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onclick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"ie-中的事件监听方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ie-中的事件监听方法"}},[t._v("#")]),t._v(" IE 中的事件监听方法")]),t._v(" "),a("p",[t._v('[object].attachEvent("事件类型","处理函数");//添加监听\n[object].detachEvent("事件类型","处理函数");//取消监听')]),t._v(" "),a("h4",{attrs:{id:"标准-dom-浏览器中的事件监听方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准-dom-浏览器中的事件监听方法"}},[t._v("#")]),t._v(" 标准 DOM 浏览器中的事件监听方法")]),t._v(" "),a("p",[t._v('[object].addEventListener("事件类型","处理函数","冒泡事件或捕获事件（值为true默认开启的是捕获型事件，值为false 开启的是冒泡事件）")//添加监听\n[object].removeEventListener("事件类型","处理函数","冒泡事件或捕获事件")//取消监听\n'),a("strong",[t._v("提示:")]),t._v(' IE 监听方法中的事件类型和标准 DOM 监听方法中的事件类型写法有点同，前者事件类型 “on”开头，比如"onclick" ,"onmousemove"等，而后者不需要去掉 “on”，就是“click”,"mousemove"等。')]),t._v(" "),a("h4",{attrs:{id:"访问事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问事件对象"}},[t._v("#")]),t._v(" 访问事件对象")]),t._v(" "),a("p",[t._v("事件对象封装了事件发生的详细信息，尤其是鼠标、键盘事件。如鼠标事件发生的位置、键盘事件的键盘键等。")]),t._v(" "),a("h4",{attrs:{id:"标准-dom-的事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准-dom-的事件对象"}},[t._v("#")]),t._v(" 标准 DOM 的事件对象")]),t._v(" "),a("p",[t._v("在标准 DOM 浏览器检测到发生某个事件时候，将自动创建一个 Event 对象，并隐式地将该对象作为事件处理函数的第一个参数传入。")]),t._v(" "),a("p",[a("strong",[t._v("经验之谈:为了兼容不同的浏览器，通常采用下面的方法得到事件对象"),a("code",[t._v("op.onclick=function(oEvent){if(window.event){oEvent=window.event}}")])])]),t._v(" "),a("p",[t._v("::: Event 事件对象常用属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("IE")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("标准DOM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("altKey,shiftKey,ctrlKey")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("同IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按下 alt、shift、ctrl为true，否则为false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cancelBubble")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("stopPropagation")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("可用来阻止事件冒泡")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("button")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("同IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("对应按下鼠标键的值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("clientX，clientY")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("同IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("鼠标指针在客户区域的坐标，不包括工具栏等。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("screenX，screenY")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("同IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("鼠标指针相对于整个计算机屏幕的坐标值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("keyCode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("同IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按键的代号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("returnValue")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("同IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置false时取消元素的默认事件")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("srcElement")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("target")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("引起事件的元素/对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("同IE")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("事件的名称")])])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("h4",{attrs:{id:"常用鼠标事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用鼠标事件"}},[t._v("#")]),t._v(" 常用鼠标事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onclick")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("单击鼠标左键触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ondbclick")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("双击鼠标左键触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onmousedown")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("单击任意一个鼠标按键时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onmouseout")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("鼠标指针移出一个元素边界时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onmousemove")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("鼠标在某个元素上移动时持续触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onmouseup")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("松开鼠标任意一个按键时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onmouseover")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("鼠标指针移到一个元素上时触发")])])])]),t._v(" "),a("h4",{attrs:{id:"常用的键盘事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的键盘事件"}},[t._v("#")]),t._v(" 常用的键盘事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onkeydown")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按下键盘上某个按键时触发，一直按会持续触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onkeyup")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("释放某个按键时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onkeypress")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按下某个按键并产生字符时触发，忽略 shift 等功能键")])])])]),t._v(" "),a("h4",{attrs:{id:"html-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-事件"}},[t._v("#")]),t._v(" HTML 事件")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onload")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("页面完全加载后在 window 对象上触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onunload")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("页面完全卸载后在 window 对象上触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onselect")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("选择了文本框的一个或多个字符时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onchange")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("文本框失去焦点时，并且在它获取焦点后内容发生过改变时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onsubmit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('单击"提交"按钮时候在表单 form 上触发')])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onfocus")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任何元素或窗口获得焦点时触发")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("onblur")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任何元素或窗口失去焦点时触发")])])])]),t._v(" "),a("p",[t._v("**提示：**载入事件 onload是最常用的事件之一，因为在页面载入完成之前，DOM 的框架还没有单间完毕，因此任何相关操作都不能发生。给 window 对象分配 onload、onunload 事件等同于 "),a("code",[t._v("<body>")]),t._v(" 元素的onload、onunload方法")])])}),[],!1,null,null,null);e.default=s.exports}}]);