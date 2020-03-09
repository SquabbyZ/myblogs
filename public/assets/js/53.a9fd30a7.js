(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{457:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("“ 在 nginx 中配置 proxy_pass 代理转发时，如果在 proxy_pass 后面的 url 加/，表示绝对根路径；如果没有/，表示相对路径，把匹配的路径部分也给代理走。")]),s._v(" "),n("p",[s._v("假设下面四种情况分别用 http://192.168.1.1/proxy/test.html 进行访问。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("第一种：\nlocation /proxy/ {\nproxy_pass http://127.0.0.1/;\n}\n代理到URL：http://127.0.0.1/test.html “\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("注意其中关键的两点，")]),s._v(" "),n("ol",[n("li",[s._v("在 location 后面的名称的末尾一定要加上/")]),s._v(" "),n("li",[s._v("在 proxy_pass 后面代理地址的末尾也需要加上/")])]),s._v(" "),n("p",[n("strong",[s._v("一定两个都要加上，不然代理失败！！！")])])])}),[],!1,null,null,null);t.default=e.exports}}]);