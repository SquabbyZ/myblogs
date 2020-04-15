(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{510:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("因为采用的是 vue@cli3.x 搭建的项目模板，后端的同事又，双，叒，叕的不爱添加跨域请求头，用 nginx 代理有比较麻烦，还要搭建个 nginx 因此，采用 proxyTable 的方式，之前一直都没搞懂，都是在和 proxyTable 里定义的字段和 后台给提供的字段相匹配，现在是三个后台写不同的接口，而且公司根本没有规范，造成了 403 的跨域，和 404 的找不到页面")]),s._v(" "),t("h2",{attrs:{id:"回归正题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回归正题"}},[s._v("#")]),s._v(" 回归正题")]),s._v(" "),t("p",[s._v("因为我用的 "),t("code",[s._v("vue-cli3.x")]),s._v(" 的脚手架,因此我这里只是在项目的根目录里新建个 "),t("code",[s._v("vue.config.js")]),s._v(" 文件，并且修改里面的 "),t("code",[s._v("proxy")]),s._v("\n在 "),t("code",[s._v("vue-cli2.x")]),s._v(" 中是 "),t("code",[s._v("proxyTable")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("    devServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     proxy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/api"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            target"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:9090"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 目标接口域名")]),s._v("\n            changeOrigin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否跨域")]),s._v("\n            ws"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//proxyTimeout:120000,")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//timeout:120000,")]),s._v("\n            pathRewirte"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^/api"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("只需在请求的 url 地址处写上 "),t("code",[s._v("/api + 后端接口")]),s._v(" 比如 "),t("code",[s._v("/api/user/addUser")]),s._v(" 即可，请求的地址为"),t("code",[s._v("http://localhost:8080/api/user/addUser")]),s._v(" 等价于 "),t("code",[s._v("http://localhost:9090/user/addUser")]),s._v(" 的请求地址效果。")]),s._v(" "),t("p",[t("strong",[s._v("注意:后端接口没有匹配项 /api 时，即当后端接口为：localhost:8880/register 时，就需要用到 pathRewrite 来重写")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("pathRewrite"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^/api'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重写接口")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("'^/api' 是一个正则表达式,其中 ‘^’ 匹配的是字符串最开始的位置。\n此时，前端请求url中的所有/api都会被替换成 \"\"")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("axios 的请求url写成了 '/api/user/addUser' 的话，最后会在经过\nhttp-proxy-middleware\n的代理服务器时，变成 '/user/addUser' ，然后代理到 localhost:9090 这个代理服务器下面\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);