(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{413:function(t,a,s){"use strict";s.r(a);var e=s(17),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"upgrade-market-v1-to-market-v2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-market-v1-to-market-v2"}},[t._v("#")]),t._v(" Upgrade market v1 to market v2")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Before upgrading, please make sure that there are no deals in the state of "),s("code",[t._v("Publish")]),t._v(", "),s("code",[t._v("Publishing")]),t._v(" or "),s("code",[t._v("StorageDealAwaitingPreCommit")]),t._v(".")])]),t._v(" "),s("p",[t._v("Stop venus-market process.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# grep [PID] of venus-market process")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" market\nroot   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6704")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2361236")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43148")]),t._v(" pts/2   Sl   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":33   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":18 ./venus-market run\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -9 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Backup venus-market repo. Default path is "),s("code",[t._v("~/.venusmarket")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -a ~/.venusmarket ~/.venusmarket-bak\n")])])]),s("p",[t._v("(Optional) Export v1 data")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("As v1 meta data structure depreciates, in order to view deals sealed using v1, an export tools could be built to export v1 data and import data into v2.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Build export tool.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone https://github.com/filecoin-project/venus-market.git\ngit checkout feat/export_v1_data\n\nmake deps\ncd cli/market_export\ngo build\n")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Export v1 data.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ ./market_export --repo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_MARKET_REPO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EXPORT_DATA_FILE_PATH"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),s("p",[t._v("Build and init market v2 (2.0.0-rc2 or higher). Please refer to market v2 document for more details.")]),t._v(" "),s("p",[t._v("(Optional) Lastly import v1 data to market v2.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./market_export --repo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_MARKET_REPO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" migrate import_v1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EXPORT_DATA_FILE_PATH"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);