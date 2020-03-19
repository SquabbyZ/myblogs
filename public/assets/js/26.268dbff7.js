(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{433:function(t,e,a){"use strict";a.r(e);var l=a(4),n=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dom"}},[t._v("#")]),t._v(" 什么是 DOM")]),t._v(" "),a("p",[t._v("DOM 是文档对象模型(Document Object Model) 的简称。当页面加载时，可以将结构化文档在内存中转换成对象的树。以下是 HTML DOM 树:")]),t._v(" "),a("p",[t._v("小结：简单的说 DOM 并不是一种技术，而是一种访问结构化文档的一种思想。借助 DOM 模型，我们可以对 DOM 树进行修改、删除、新增等操作，让机构化文档动态化")]),t._v(" "),a("h3",{attrs:{id:"dom-模型中的节点——文档可以说是有节点构成的集合。在-dom-模型中有以下3种节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-模型中的节点——文档可以说是有节点构成的集合。在-dom-模型中有以下3种节点"}},[t._v("#")]),t._v(" DOM 模型中的节点——文档可以说是有节点构成的集合。在 DOM 模型中有以下3种节点")]),t._v(" "),a("ol",[a("li",[t._v("元素节点: 各种标签就是这些元素节点的名称，例如 "),a("code",[t._v("<p>")]),t._v(" "),a("code",[t._v("<ul>")]),t._v("等")]),t._v(" "),a("li",[t._v("文本节点：文本节点总是被包含在元素节点内部")]),t._v(" "),a("li",[t._v("属性节点：一般用来修饰元素节点就称之为属性节点")])]),t._v(" "),a("p",[t._v("为了动态地修改 HTML 元素，须先访问 HTML 元素。DOM 主要提供了两种方式来访问 HTML 元素:")]),t._v(" "),a("ol",[a("li",[t._v("根据 ID 访问 HTML 元素——通过 document 对象调用 getElementById() 方法来查找具有唯一 id 属性值的元素")]),t._v(" "),a("li",[t._v("利用节点关系访问 HTML 元素。常用的属性和方法如下:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("方法名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parentNode")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回当前节点的父节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("previousSibling")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回当前节点的前一个兄弟节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("nextSibling")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回当前节点的后一个兄弟节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("childNodes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回当前节点的所有子节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("firstChild")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回当前节点的第一个节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("lastChild")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回当前节点的最后一个子节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("getElementsByTagName(tagName)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回当前节点的具有指定标签名的所有子节点")])])])]),t._v(" "),a("h3",{attrs:{id:"dom-对-html-元素的访问操作——form表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-对-html-元素的访问操作——form表单"}},[t._v("#")]),t._v(" DOM 对 HTML 元素的访问操作——form表单")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("DOM 访问表单控件的常用属性和方法如下:\n|       名称        |                                             描述                                             |\n| :---------------: | :------------------------------------------------------------------------------------------: |\n|      action       |                                     返回该表单的提交地址                                     |\n|     elements      |           返回表单内全部表单控件所组成的数组，通过数组可以访问表单内的任何表单控件           |\n|      length       |                                    返回表单内表单域的个数                                    |\n|      method       |                     返回表单内的 method 属性，主要有 get 和 post 两个值                      |\n|      target       | 确定提交表单时结果窗口，主要有 _self(当前页面加载结果)、_blank(打开新的页面加载结果)、_top等 |\n| reset()、submit() |                                   重置表单和确定表单的方法                                   |")])]),t._v(" "),a("li",[a("p",[t._v("在 elements 返回的数组中访问具体的表单控件语法如下\n|         方法名         |                      描述                       |\n| :--------------------: | :---------------------------------------------: |\n|    .elememnts[index    |         返回该表单中第 index 个表单控件         |\n| .elements[elementName] | 返回表单内 id 或 name 为 elementName 的表单控件 |\n|      .elementName      | 返回表单中 id 或 name 为 elementName 的表单控件 |")])])]),t._v(" "),a("h3",{attrs:{id:"dom-对-html-元素的访问操作——列表框、下拉菜单-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-对-html-元素的访问操作——列表框、下拉菜单-select"}},[t._v("#")]),t._v(" DOM 对 HTML 元素的访问操作——列表框、下拉菜单 select")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("form")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回列表框、下拉菜单所在的表单对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("length")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回列表框、下拉菜单的选项个数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("options")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回列表框、下拉菜单里所有选项组成的数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("selectedIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回下拉列表中选中选项的索引")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回下拉列表的类型，多选的话返回 select-multiple,单选返回 select-one")])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("**使用 options[index] 返回具体选项所对应的常用属性: **")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("defaultSelected")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该选项默认是否被选中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("index")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该选项在列表框、下拉菜单中的索引")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("selected")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该选项是否被选中")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该选项呈现的文本")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该选项的 value 属性值")])])])]),t._v(" "),a("h3",{attrs:{id:"dom-对-html-元素的访问操作——table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-对-html-元素的访问操作——table"}},[t._v("#")]),t._v(" DOM 对 HTML 元素的访问操作——table")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("caption")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回表格的标题对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("rows")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该表格里的索引表格行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tbodies")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该表格里所有"),a("code",[t._v("<tbody.../>")]),t._v("元素组成的数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tfoot")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该表格里所有"),a("code",[t._v("<tfoot.../>")]),t._v("元素")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("thead")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该表格里所有"),a("code",[t._v("<thead.../>")]),t._v("元素")])])])]),t._v(" "),a("p",[a("strong",[t._v("通过 rows[index] 返回表格指定的行所对应的属性")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cells")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该表格行内所有的单元格组成的数组")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("rowIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该表格行在表格内的索引")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sectionRowIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该表格行在其所在元素("),a("code",[t._v("tbody")]),t._v(","),a("code",[t._v("thead")]),t._v("等元素)的索引值")])])])]),t._v(" "),a("p",[a("strong",[t._v("cells[index]返回表格指定的列所对应的属性")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cellIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("返回该单元格在表格行内的索引值")])])])]),t._v(" "),a("h3",{attrs:{id:"dom-对-html-元素的增删改操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-对-html-元素的增删改操作"}},[t._v("#")]),t._v(" DOM 对 HTML 元素的增删改操作")]),t._v(" "),a("ol",[a("li",[t._v("DOM 创建节点的方法:\ndocument.createElement(Tag). Tag 必须是合法的 HTML 元素")]),t._v(" "),a("li",[t._v("DOM 复制节点的方法\n节点 cloneNode(boolean deep)，当 deep 为 true 时，表示复制当前节点以及当前节点的全部后代节点。为false 时，只复制当前节点。")]),t._v(" "),a("li",[t._v("DOM 添加、删除节点的方法:\n"),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("方法")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("appendChild(newNode)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将 newNode 添加成当前节点的最后一个子节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("insertBefore(newNode,refNode)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在 refNode 节点之前插入 newNode 节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("replaceChid(newNode,oldNode)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将 oldNode 节点替换成 newNode 节点")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("removeChild(oldNode)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将 oldNode 子节点删除")])])])])])]),t._v(" "),a("h4",{attrs:{id:"dom-为列表框、下拉菜单添加选项的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-为列表框、下拉菜单添加选项的方式"}},[t._v("#")]),t._v(" DOM 为列表框、下拉菜单添加选项的方式:")]),t._v(" "),a("p",[t._v("创建选项除了使用前面所示的 createElement 方法之外，还可以使用专门的构造器来构造一个选项出来。语法如下:\n"),a("code",[t._v("new Option(text,value,defaultSelected,selected)")]),t._v(" 该构造器有4个参数，说明如下:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("该选项的文本、即该选项所呈现的“内容”")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("选中该项的值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("defaultSelected")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置默认是否显示该选项")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("selected")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("设置该选项当前是否被选中")])])])]),t._v(" "),a("p",[t._v("添加创建好的选项至列表框或下拉菜单的方式\n直接为"),a("code",[t._v("<select.../>")]),t._v("的指定选项赋值 "),a("code",[t._v("列表框或下拉菜单对象.options[i]=创建好的 option 对象")]),t._v("\n删除列表框、下拉菜单的选项的方法：\n直接使用列表框或下拉菜单对象 "),a("code",[t._v(".remove(index)")]),t._v("方法删除指定选项或者"),a("code",[t._v("直接将指定选项赋值为null")])]),t._v(" "),a("h4",{attrs:{id:"dom-动态添加删除表格内容所使用到的常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-动态添加删除表格内容所使用到的常用方法"}},[t._v("#")]),t._v(" DOM 动态添加删除表格内容所使用到的常用方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("方法名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("insertRow(index)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在指定索引位置插入一行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("createCaption()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("为该表格创建标题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("createTFoot()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("为该表格创建"),a("code",[t._v("<tfoot.../>")]),t._v("元素，假如已存在就返回现有的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("createTHead()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("为该表格创建"),a("code",[t._v("<thead.../>")]),t._v("元素，假如已存在就返回现有的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("deleteRow(index)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("删除表格中 index 索引处的行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("deleteCaption()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("删除表格标题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("deleteTFoot()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从表格删除 tFoot 元素及其内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("deleteTHead()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("从表格删除 tHead 元素及其内容")])])])]),t._v(" "),a("h4",{attrs:{id:"给表格行创建、删除单元格的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给表格行创建、删除单元格的方法"}},[t._v("#")]),t._v(" 给表格行创建、删除单元格的方法")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("insertCell(index)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在 index 处创建一个单元格，返回新创建的单元格")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("deleteCell(index)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("删除某行在 index 索引处的单元格")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);