(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{508:function(t,s,n){"use strict";n.r(s);var e=n(17),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"高可用节点的部署方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#高可用节点的部署方案"}},[t._v("#")]),t._v(" 高可用节点的部署方案")]),t._v(" "),n("p",[t._v("这个方案的主要目的在于防止由于单个节点故障导致整体无法服务，由于节点程序可能可以运行，但是存在不同步的情况，因而单纯使用nginx服务无法做到自动选择良好的节点。 本方案中是在nginx和节点程序之间引入新的代理程序来解决问题，代理程序会自动的在多个节点中监控高度重量变化，每次请求只会选择正常的节点。另一个安全之处在于节点这里可以选择不同的实现，这样玩意某个实现出了问题也可以有其他实现的节点顶上去。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/hunjixin/imgpool/master/chain-co.png",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"部署节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署节点"}},[t._v("#")]),t._v(" 部署节点")]),t._v(" "),n("p",[t._v("api auth suggest to use venus-auth but not local.  in local mode, when reimport snapshot, token will change")]),t._v(" "),n("p",[t._v("venus:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#build")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/filecoin-project/venus.git\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" deps\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#run")]),t._v("\n./venus daemon --network "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("network-type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --auth-url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("venus-auth url"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("p",[t._v("lotus:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#build")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ipfs-force-community/chain-co.git\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout v1.11.2_incubation\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("network-type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#run")]),t._v("\n./lotus daemon --auth-url --auth-url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("venus-auth url"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h2",{attrs:{id:"部署chain-co"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署chain-co"}},[t._v("#")]),t._v(" 部署chain-co")]),t._v(" "),n("p",[t._v("编译结果输出在bin目录中")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#build")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ipfs-force-community/chain-co.git\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#run")]),t._v("\n./bin/chain-ro  run -listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --auth-url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("venus-auth url"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --node "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("token:libp2p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("token:libp2p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h2",{attrs:{id:"部署代理-可选"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署代理-可选"}},[t._v("#")]),t._v(" 部署代理(可选)")]),t._v(" "),n("p",[t._v("代理可以有多种选择，包括nginx，slb等负载均衡方案，但是注意的是需要支持长链接以及自定义header头。这里以nginx为例子\n安装： https://www.nginx.com/resources/wiki/start/topics/tutorials/install\n配置文件参考：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("user nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n\nworker_rlimit_nofile 655350;\n# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.\ninclude /usr/share/nginx/modules/*.conf;\n\nevents {\n    worker_connections 655350;\n}\n\nhttp {\n    map $http_upgrade $connection_upgrade {\n        default upgrade;\n        '' close;\n    }\n \n    upstream websocket {\n        server <endpoint>;\n    }\n \n    server {\n        listen 34530;\n      #  listen 34531 ssl; #https\n\n      #  server_name <server name>;       \n\n      #  access_log  /root/proxy.access.log;\n      #  error_log   /root/proxy.error.log;\n\n      #  ssl_certificate  <ssl>;\n      #  ssl_certificate_key <key>;\n         ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n\n        location / {\n            proxy_pass http://websocket;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection $connection_upgrade;\n            proxy_set_header Authorization $http_authorization;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; \n        }\n   }\n}\n")])])]),n("h2",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),n("ol",[n("li",[t._v("因为节点之间数据还是分离的，所以无法提供完全一致的接口访问，特别是在头部区块的处理上。")]),t._v(" "),n("li",[t._v("如果部署lotus，需要使用定制后的版本，因为venus有一些特有的接口.")]),t._v(" "),n("li",[t._v("如果存在问题，请提issue。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);