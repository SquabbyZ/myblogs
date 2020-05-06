(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{503:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ol",[a("li",[a("p",[t._v("给 JSX 语法中的 HTML 元素添加 class  名的时候不能写成 "),a("code",[t._v("class='active'")]),t._v(" 要写成 "),a("code",[t._v("className:'active")]),t._v(",因为在 ES6 中 "),a("code",[t._v("class")]),t._v(" 被做成关键字 "),a("code",[t._v("类")]),t._v(" 使用，虽然会正常显示，但是会报红色警告 "),a("code",[t._v("index.js:1 Warning: Invalid DOM property 'class'. Did you mean 'className'?")])])]),t._v(" "),a("li",[a("p",[t._v("当我们在单个组件内自定义一个方法去修改 "),a("code",[t._v("state")]),t._v(" 里的值的时候，发现报 "),a("code",[t._v("Uncaught TypeError: Cannot read property 'setState' of undefined")]),t._v(",意思是 "),a("code",[t._v("setState")]),t._v(" 前面的 "),a("code",[t._v("this")]),t._v(" 找不到，这是因为我们在创建方法的时候,"),a("code",[t._v("this")]),t._v(" 指向的是本身，而不是 "),a("code",[t._v("state")]),t._v(" 的 "),a("code",[t._v("this")]),t._v(",所以我们在调用的时候，"),a("code",[t._v("setState")]),t._v(" 找不到 "),a("code",[t._v("this")]),t._v(",我们只需要在调用方法的时候在后面加上个 "),a("code",[t._v(".bind(this)")]),t._v(" "),a("strong",[t._v("最好是在 "),a("code",[t._v("constructor")]),t._v(" 中进行绑定,举例"),a("code",[t._v("this.handleClick=this.handleClick.bind(this)")])]),t._v(",把外部的 "),a("code",[t._v("state")]),t._v(" 的 "),a("code",[t._v("this")]),t._v(" 传入进去(PS: "),a("code",[t._v("bind")]),t._v(" 相对于 "),a("code",[t._v("call")]),t._v(" 和 "),a("code",[t._v("apply")]),t._v(" 的区别是改变 "),a("code",[t._v("this")]),t._v(" 指向但是不立即调用),"),a("strong",[t._v("直接使用 ES6 的箭头函数也是可以的")])])]),t._v(" "),a("li",[a("p",[t._v("通过 "),a("code",[t._v("input")]),t._v(" 输入的值，添加到 "),a("code",[t._v("li")]),t._v(" 列表中，但是输入的是带有 "),a("code",[t._v("html")]),t._v(" 标签包裹的文本，要显示正常的 "),a("code",[t._v("html")]),t._v(" 效果比如 "),a("code",[t._v("<b>I Love React</b>")]),t._v(" ，显示为 "),a("strong",[t._v("I Love React")]),t._v(" ,而不是  "),a("code",[t._v("<b>I Love React</b>")]),t._v("，")])])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("解决办法:是在循环生成的 `li` 上加入一个属性 `dangerouslySetInnerHTML={{__html:item}}`,在把 `li` 标签包裹中的 `{item}`,去掉即可.\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("JSX 中循环生成列表的时候，要记得写 key 值，不写会报红色警告 "),a("code",[t._v('index.js:1 Warning: Each child in a list should have a unique "key" prop.')]),t._v(",写 "),a("code",[t._v("key")]),t._v(" 的目的是为了更方便虚拟 "),a("code",[t._v("DOM")]),t._v(" 的渲染")])]),t._v(" "),a("li",[a("p",[t._v("在 JSX 语法中写注释，也就是说在 "),a("code",[t._v("{}")]),t._v(" 中写注释不要使用 "),a("code",[t._v("//")]),t._v(" 单行注释，因为单行注释会把 "),a("code",[t._v("{}")]),t._v(" 的结尾符号 "),a("code",[t._v("}")]),t._v(" 也注释掉，会报错，要使用 "),a("code",[t._v("/* .... */")]),t._v(" 多行注释")])]),t._v(" "),a("li",[a("p",[t._v("开发中要谨记 React 中不允许直接修改 state 中的值，虽然不会报错，但是会造成逻辑错误的问题，很难定位到问题，举例点击列表其中一项就删除该项")])])]),t._v(" "),a("p",[t._v("错误写法")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("newList\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n造成的显示效果是，你删除最后一个，显示的效果是只留第一个，其余的全部会被删掉，而且控制台不会报错\n*/")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("正确写法")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list\nnewList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    list"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("newList\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("React 单个组件中的 "),a("code",[t._v("render")]),t._v(" 方法中的 "),a("code",[t._v("return")]),t._v(" 返回的标签最外层必须且只有一个最外层的 "),a("code",[t._v("DOM")]),t._v(" 包裹，否则会报"),a("code",[t._v("Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?")]),t._v(",但是有的时候我们不想为了解决这个问题，而在外层包裹一个无意义的 "),a("code",[t._v("DOM")]),t._v(" 标签，所以，可以在引入 "),a("code",[t._v("React")]),t._v(" 的 "),a("code",[t._v("Component")]),t._v(" 的时候再引入一个 "),a("code",[t._v("Fragment")]),t._v(",将最外层无意义的 "),a("code",[t._v("div")]),t._v(" 换成这个标签即可。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);