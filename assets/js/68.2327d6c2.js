(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{435:function(s,t,a){"use strict";a.r(t);var e=a(17),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"如何使用-venus-本地钱包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用-venus-本地钱包"}},[s._v("#")]),s._v(" 如何使用 Venus 本地钱包")]),s._v(" "),a("p",[s._v("钱包用来管理和保存私钥，私钥加密后存储在本地数据库中，在使用钱包前需要设置钱包密码，\n一个钱包只有一个密码，所有私钥都用同一个密码加密。不设置密码只会影响与钱包相关的功能（比如签名），\n其它功能能正常使用。加密的私钥在使用之前需要解密，因此提供 unlock 命令来实现此功能，"),a("strong",[s._v("每次重启程序且会使用到钱包都要解锁钱包")]),s._v("。")]),s._v(" "),a("p",[s._v("钱包有两种类型的地址 secp256k1 和 bls，secp256k1 地址以 f1 开头，bls 地址以 f3 开头，在程序中通过结构体"),a("a",{attrs:{href:"https://github.com/filecoin-project/venus/blob/master/pkg/crypto/keyinfo.go#L22",target:"_blank",rel:"noopener noreferrer"}},[s._v("KeyInfo"),a("OutboundLink")],1),s._v("中 SigType 字段来区分。")]),s._v(" "),a("p",[s._v("钱包提供了创建钱包私钥、导入和导出私钥、解锁和锁定钱包与查看和设置默认钱包地址等功能。")]),s._v(" "),a("h2",{attrs:{id:"相关功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关功能"}},[s._v("#")]),s._v(" 相关功能")]),s._v(" "),a("ol",[a("li",[s._v("设置钱包密码")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus wallet set-password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nPassword "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" successfully\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("执行创建钱包地址、导入或导出私钥操作都需要提前设置密码，不然会执行失败")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建钱包地址，默认创建的是 BLS 地址")]),s._v("\n./venus wallet new\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入私钥")]),s._v("\n./venus wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出私钥，需输入密码")]),s._v("\n./venus wallet "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("解锁钱包")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus wallet unlock "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nunlocked success\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("锁定钱包")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./venus wallet lock "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nlocked success\n")])])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("程序第一次启动需要为其设置密码")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("在执行导入或者创建私钥之前要先设置密码，不然执行会失败")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("程序重启后需要解锁钱包，不然会因为拿不到私钥导致签名失败，获取私钥失败也会报错")]),s._v("：<address> is locked")])])]),s._v(" "),a("h2",{attrs:{id:"更多钱包命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多钱包命令"}},[s._v("#")]),s._v(" "),a("RouterLink",{attrs:{to:"/zh/operation/Commands.html"}},[s._v("更多钱包命令")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);