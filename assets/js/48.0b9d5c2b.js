(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{415:function(_,v,t){"use strict";t.r(v);var e=t(17),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"venus-messager-设计说明书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-messager-设计说明书"}},[_._v("#")]),_._v(" Venus Messager 设计说明书")]),_._v(" "),t("p",[_._v("venus-messager是一个用于管理本地消息的组件，用于保存地址消息、管理消息状态和控制推送消息的频率。")]),_._v(" "),t("ul",[t("li",[_._v("支持多个miner：提供了较为实用的API给miner推送消息")]),_._v(" "),t("li",[_._v("持久化存储：支持MySQL和SQLlite两种存储方案")]),_._v(" "),t("li",[_._v("nonce管理：合理的分配nonce，降低nonce冲突")]),_._v(" "),t("li",[_._v("动态的控制推送频率和消息量")]),_._v(" "),t("li",[_._v("集成权限验证、trace及API限流")]),_._v(" "),t("li",[_._v("提供较为完善的命令行工具")])]),_._v(" "),t("h2",{attrs:{id:"详细设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#详细设计"}},[_._v("#")]),_._v(" 详细设计")]),_._v(" "),t("h3",{attrs:{id:"整体架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体架构"}},[_._v("#")]),_._v(" 整体架构")]),_._v(" "),t("p",[t("img",{attrs:{src:"/venus-messager/venus-messager-design.jpg",alt:""}})]),_._v(" "),t("h3",{attrs:{id:"功能模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能模块"}},[_._v("#")]),_._v(" 功能模块")]),_._v(" "),t("h4",{attrs:{id:"权限验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限验证"}},[_._v("#")]),_._v(" 权限验证")]),_._v(" "),t("p",[_._v("该验证分两部分，一是对访问venus-messager 使用token是否合法的验证，二是验证是否具有访问API的权限，下图是权限验证流程图。")]),_._v(" "),t("p",[t("img",{attrs:{src:"/venus-messager/venus-messager-token-verify.jpg",alt:""}})]),_._v(" "),t("h5",{attrs:{id:"token-合法性验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-合法性验证"}},[_._v("#")]),_._v(" token 合法性验证")]),_._v(" "),t("p",[_._v("token 分为两种，一种是由venus-auth服务生成，另外一种是venus-messager本身生成，该token只用于本机的命令行命令。\ntoken 会被venus-messager和venus-auth依次验证合法性，只要其中一个验证通过就算合法token。\nvenus-auth 验证token合法后会返回该token的权限信息。")]),_._v(" "),t("h5",{attrs:{id:"api权限验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api权限验证"}},[_._v("#")]),_._v(" API权限验证")]),_._v(" "),t("p",[_._v("API权限分为4种："),t("code",[_._v("read")]),_._v(", "),t("code",[_._v("write")]),_._v(", "),t("code",[_._v("sign")]),_._v(", "),t("code",[_._v("admin")]),_._v("，权限依次由低到高，token的权限必须等于或者大于API设定的权限才算验证通过。")]),_._v(" "),t("h4",{attrs:{id:"消息选择"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息选择"}},[_._v("#")]),_._v(" 消息选择")]),_._v(" "),t("ul",[t("li",[_._v("获取所有需推送消息的地址，然后并发的按地址选择消息")]),_._v(" "),t("li",[_._v("判断该地址能否推送消息")]),_._v(" "),t("li",[_._v("获取该地的actor，主要是为了获得链上nonce")]),_._v(" "),t("li",[_._v("比较链上nonce和该地址的nonce，若链上nonce大，则更新该地址nonce")]),_._v(" "),t("li",[_._v("获取该地的fill消息并放到待推送列表")]),_._v(" "),t("li",[_._v("与该地址的最大选择消息数比较并计算可推送消息数")]),_._v(" "),t("li",[_._v("获取改地址的unfill消息，并排查已过期消息，最后获得候选消息")]),_._v(" "),t("li",[_._v("通过节点预估候选消息的gas，预估完成后筛除预估失败消息")]),_._v(" "),t("li",[_._v("逐个消息进行签名，直到达到可推送消息，该地址该次选择消息完成")]),_._v(" "),t("li",[_._v("等待各个地址选择消息完成")]),_._v(" "),t("li",[_._v("更新消息信息和地址nonce")]),_._v(" "),t("li",[_._v("推送消息到节点")])]),_._v(" "),t("blockquote",[t("p",[_._v("下图是消息选择流程图")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/venus-messager/venus-messager-select-message.jpg",alt:""}})]),_._v(" "),t("h4",{attrs:{id:"数据库模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库模块"}},[_._v("#")]),_._v(" 数据库模块")]),_._v(" "),t("p",[_._v("该模块设计为能够支持MySQL和SQLlite两种数据库，并能够通过配置文件来配置具体使用那个数据库，因此需要将该模块对外交互部分抽象成接口，减少外部对使用不同数据库的感知。\n使用单元测试对该模块各个具体实现进行测试。")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("# 统一对外接口\ntype Repo interface {\n    AddressRepo() AddressRepo\n    MessageRepo() MessageRepo\n}\n\n# 地址表接口\ntype AddressRepo interface {}\n# 消息表接口\ntype MessageRepo interface {}\n")])])]),t("h4",{attrs:{id:"消息状态管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息状态管理"}},[_._v("#")]),_._v(" 消息状态管理")]),_._v(" "),t("p",[_._v("消息总共分以下几种状态：")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("UnKnown：    unkonwn\nUnFillMsg：  未签名\nFillMsg：    已签名\nOnChainMsg： 已上链\nFailedMsg：  失败\nNonceConflictMsg：被替换\nNoWalletMsg：未找到钱包\n")])])]),t("blockquote",[t("p",[_._v("下图是消息状态转换图")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/venus-messager/venus-messager-message-state.jpg",alt:""}})]),_._v(" "),t("h4",{attrs:{id:"head-处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head-处理"}},[_._v("#")]),_._v(" head 处理")]),_._v(" "),t("p",[_._v("通过调用节点ChainNotify接口可以不断的获得新的head，head 里面包含current、apply和revert三种tipset，需要分别对其处理。\n首先对current类型的tipset进行处理，与venus-messager已处理的tipset做对比，防止漏处理某些tipset。\n然后处理revert tipsets，再处理apply tipsets，根据apply tipset拿到已经上链的消息，然后再逐一更新venus-messager中对应的消息信息。")]),_._v(" "),t("h4",{attrs:{id:"命令行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行命令"}},[_._v("#")]),_._v(" 命令行命令")]),_._v(" "),t("ul",[t("li",[_._v("全局参数\n"),t("ul",[t("li",[_._v("查询全局参数")]),_._v(" "),t("li",[_._v("设置全局参数")])])]),_._v(" "),t("li",[_._v("地址\n"),t("ul",[t("li",[_._v("查询地址信息")]),_._v(" "),t("li",[_._v("禁止和激活地址")]),_._v(" "),t("li",[_._v("设置选择消息数")])])]),_._v(" "),t("li",[_._v("消息\n"),t("ul",[t("li",[_._v("查询消息信息")]),_._v(" "),t("li",[_._v("列出失败、阻塞消息")]),_._v(" "),t("li",[_._v("更新消息状态")]),_._v(" "),t("li",[_._v("调整消息状态")])])]),_._v(" "),t("li",[_._v("节点\n"),t("ul",[t("li",[_._v("查询节点信息")]),_._v(" "),t("li",[_._v("增加节点")])])])]),_._v(" "),t("h3",{attrs:{id:"数据表设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据表设计"}},[_._v("#")]),_._v(" 数据表设计")]),_._v(" "),t("p",[_._v("venus-messager 用到了4张数据表，分别是全局参数表，地址表，消息表，节点信息表，以下是各个表的详细结构。")]),_._v(" "),t("ol",[t("li",[_._v("全局参数表，用于保存全局参数信息")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("name")]),_._v(" "),t("th",[_._v("type")]),_._v(" "),t("th",[_._v("desc")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("id")]),_._v(" "),t("td",[_._v("smallint(2)")]),_._v(" "),t("td",[_._v("primary key")])]),_._v(" "),t("tr",[t("td",[_._v("gas_over_estimation")]),_._v(" "),t("td",[_._v("double")]),_._v(" "),t("td",[_._v("gas limit的系数")])]),_._v(" "),t("tr",[t("td",[_._v("max_fee")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("gas_fee_cap")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("sel_msg_num")]),_._v(" "),t("td",[_._v("bigint(20)")]),_._v(" "),t("td",[_._v("单次选择的最大消息数")])]),_._v(" "),t("tr",[t("td",[_._v("gas_over_premium")]),_._v(" "),t("td",[_._v("DOUBLE")]),_._v(" "),t("td",[_._v("gas premium的系数")])])])]),_._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[_._v("地址表，用于保存地址相关信息")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("name")]),_._v(" "),t("th",[_._v("type")]),_._v(" "),t("th",[_._v("desc")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("id")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("primary key")])]),_._v(" "),t("tr",[t("td",[_._v("addr")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("uniqueIndex, 地址")])]),_._v(" "),t("tr",[t("td",[_._v("nonce")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td",[_._v("地址的nonce")])]),_._v(" "),t("tr",[t("td",[_._v("weight")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("sel_msg_num")]),_._v(" "),t("td",[_._v("bigint(20)")]),_._v(" "),t("td",[_._v("改地址单次选择的最大消息数")])]),_._v(" "),t("tr",[t("td",[_._v("state")]),_._v(" "),t("td",[_._v("int")]),_._v(" "),t("td",[_._v("地址状态")])]),_._v(" "),t("tr",[t("td",[_._v("gas_over_estimation")]),_._v(" "),t("td",[_._v("decimal(10,2)")]),_._v(" "),t("td",[_._v("gas limit的系数")])]),_._v(" "),t("tr",[t("td",[_._v("gas_over_estimation")]),_._v(" "),t("td",[_._v("decimal(10,2)")]),_._v(" "),t("td",[_._v("gas premium的系数")])]),_._v(" "),t("tr",[t("td",[_._v("max_fee")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("gas_fee_cap")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("is_deleted")]),_._v(" "),t("td",[_._v("int")]),_._v(" "),t("td",[_._v("是否删除，-1：否，1：是")])]),_._v(" "),t("tr",[t("td",[_._v("created_at")]),_._v(" "),t("td",[_._v("datetime")]),_._v(" "),t("td",[_._v("创建时间")])]),_._v(" "),t("tr",[t("td",[_._v("updated_at")]),_._v(" "),t("td",[_._v("datetime")]),_._v(" "),t("td",[_._v("更新时间")])])])]),_._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[_._v("消息表，用于保存消息初始信息，执行结果等信息")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("name")]),_._v(" "),t("th",[_._v("type")]),_._v(" "),t("th",[_._v("desc")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("id")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("primary key")])]),_._v(" "),t("tr",[t("td",[_._v("version")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td",[_._v("消息版本")])]),_._v(" "),t("tr",[t("td",[_._v("nonce")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td",[_._v("消息使用的nonce")])]),_._v(" "),t("tr",[t("td",[_._v("from_addr")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("消息发送地址")])]),_._v(" "),t("tr",[t("td",[_._v("to")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("消息接收地址")])]),_._v(" "),t("tr",[t("td",[_._v("value")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("转账消息表示转账金额")])]),_._v(" "),t("tr",[t("td",[_._v("gas_limit")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("gas_fee_cap")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("gas_premium")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("method")]),_._v(" "),t("td",[_._v("int")]),_._v(" "),t("td",[_._v("执行消息的函数代号")])]),_._v(" "),t("tr",[t("td",[_._v("params")]),_._v(" "),t("td",[_._v("blob")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("signed_data")]),_._v(" "),t("td",[_._v("blob")]),_._v(" "),t("td",[_._v("消息签名结果")])]),_._v(" "),t("tr",[t("td",[_._v("unsigned_cid")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("unsigned消息的CID")])]),_._v(" "),t("tr",[t("td",[_._v("signed_cid")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("signed消息的CID")])]),_._v(" "),t("tr",[t("td",[_._v("height")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td",[_._v("消息打包高度")])]),_._v(" "),t("tr",[t("td",[_._v("receipt_exit_code")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td",[_._v("消息执行完的退出码")])]),_._v(" "),t("tr",[t("td",[_._v("receipt_return_value")]),_._v(" "),t("td",[_._v("blob")]),_._v(" "),t("td",[_._v("消息执行返回值")])]),_._v(" "),t("tr",[t("td",[_._v("receipt_gas_used")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td",[_._v("消息执行消耗的gas")])]),_._v(" "),t("tr",[t("td",[_._v("tipset_key")]),_._v(" "),t("td",[_._v("varchar(1024)")]),_._v(" "),t("td",[_._v("消息打包高度的tipset的key")])]),_._v(" "),t("tr",[t("td",[_._v("meta_expire_epoch")]),_._v(" "),t("td",[_._v("bigint")]),_._v(" "),t("td",[_._v("过期高度")])]),_._v(" "),t("tr",[t("td",[_._v("meta_gas_over_estimation")]),_._v(" "),t("td",[_._v("gas 预估超出的系数")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("meta_max_fee")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("gas 费用上限")])]),_._v(" "),t("tr",[t("td",[_._v("meta_gas_fee_cap")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("gas feecap数值")])]),_._v(" "),t("tr",[t("td",[_._v("meta_gas_over_premium")]),_._v(" "),t("td",[_._v("decimal(10,2)")]),_._v(" "),t("td",[_._v("gas premium的系数")])]),_._v(" "),t("tr",[t("td",[_._v("state")]),_._v(" "),t("td",[_._v("int")]),_._v(" "),t("td",[_._v("消息状态")])]),_._v(" "),t("tr",[t("td",[_._v("is_deleted")]),_._v(" "),t("td",[_._v("int")]),_._v(" "),t("td",[_._v("是否删除，-1：否，1：是")])]),_._v(" "),t("tr",[t("td",[_._v("created_at")]),_._v(" "),t("td",[_._v("datetime")]),_._v(" "),t("td",[_._v("创建时间")])]),_._v(" "),t("tr",[t("td",[_._v("updated_at")]),_._v(" "),t("td",[_._v("datetime")]),_._v(" "),t("td",[_._v("更新时间")])])])]),_._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[_._v("节点信息表，用于保存节点相关信息")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("name")]),_._v(" "),t("th",[_._v("type")]),_._v(" "),t("th",[_._v("desc")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("id")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("primary key")])]),_._v(" "),t("tr",[t("td",[_._v("name")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("节点名")])]),_._v(" "),t("tr",[t("td",[_._v("url")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("节点 URL")])]),_._v(" "),t("tr",[t("td",[_._v("token")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("节点 token")])]),_._v(" "),t("tr",[t("td",[_._v("node_type")]),_._v(" "),t("td",[_._v("int")]),_._v(" "),t("td",[_._v("节点类型")])]),_._v(" "),t("tr",[t("td",[_._v("is_deleted")]),_._v(" "),t("td",[_._v("int")]),_._v(" "),t("td",[_._v("是否删除，-1：否，1：是")])]),_._v(" "),t("tr",[t("td",[_._v("created_at")]),_._v(" "),t("td",[_._v("datetime")]),_._v(" "),t("td",[_._v("创建时间")])]),_._v(" "),t("tr",[t("td",[_._v("updated_at")]),_._v(" "),t("td",[_._v("datetime")]),_._v(" "),t("td",[_._v("更新时间")])])])]),_._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[_._v("actor费用配置表")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("name")]),_._v(" "),t("th",[_._v("type")]),_._v(" "),t("th",[_._v("desc")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("id")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("primary key")])]),_._v(" "),t("tr",[t("td",[_._v("actor_v")]),_._v(" "),t("td",[_._v("uint")]),_._v(" "),t("td",[_._v("actor版本")])]),_._v(" "),t("tr",[t("td",[_._v("code")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("代码")])]),_._v(" "),t("tr",[t("td",[_._v("method")]),_._v(" "),t("td",[_._v("unsigned bigint")]),_._v(" "),t("td",[_._v("方法号")])]),_._v(" "),t("tr",[t("td",[_._v("gas_over_estimation")]),_._v(" "),t("td",[_._v("decimal(10,2)")]),_._v(" "),t("td",[_._v("gas limit的系数")])]),_._v(" "),t("tr",[t("td",[_._v("gas_over_estimation")]),_._v(" "),t("td",[_._v("decimal(10,2)")]),_._v(" "),t("td",[_._v("gas premium的系数")])]),_._v(" "),t("tr",[t("td",[_._v("max_fee")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("最大费用")])]),_._v(" "),t("tr",[t("td",[_._v("base_fee")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("基础费用阈值")])]),_._v(" "),t("tr",[t("td",[_._v("gas_fee_cap")]),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("created_at")]),_._v(" "),t("td",[_._v("datetime")]),_._v(" "),t("td",[_._v("创建时间")])]),_._v(" "),t("tr",[t("td",[_._v("updated_at")]),_._v(" "),t("td",[_._v("datetime")]),_._v(" "),t("td",[_._v("更新时间")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);