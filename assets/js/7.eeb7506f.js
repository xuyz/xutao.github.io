(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#authorization"}},[t._v("Authorization")])]),s("li",[s("a",{attrs:{href:"#response-code"}},[t._v("Response Code")])]),s("li",[s("a",{attrs:{href:"#response-struct"}},[t._v("Response Struct")])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"api-instructions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-instructions","aria-hidden":"true"}},[t._v("#")]),t._v(" API Instructions")]),t._v(" "),s("h2",{attrs:{id:"authorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization","aria-hidden":"true"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),s("p",[t._v("所有请求需要在header中增加\nAuthorization:xxx")]),t._v(" "),s("h2",{attrs:{id:"response-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-code","aria-hidden":"true"}},[t._v("#")]),t._v(" Response Code")]),t._v(" "),s("p",[t._v("http 状态码为200\n业务是否正常根据返回结果json中error对象,具体错误原因详见错误吗")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态码")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("h2",{attrs:{id:"response-struct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-struct","aria-hidden":"true"}},[t._v("#")]),t._v(" Response Struct")]),t._v(" "),s("blockquote",[s("p",[t._v("后续接口描述中，Response只描述 result 中数据结构 "),s("br"),t._v("\n同时提供原始tendermint的接口,需要增加前缀/nodes/{chainId}/tendermint,比如需要访问QOS的genesis,则只需要访问 /nodes/QOS/genesis")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "jsonrpc": "2.0",\n    "id": "",\n    "result": {},\n    "error": {\n        "code": 000,\n        "message": "错误信息",\n        "data": "错误详细描述"\n    }\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])])}],!1,null,null,null);n.options.__file="base.md";e.default=n.exports}}]);