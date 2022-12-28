(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{431:function(s,t,a){"use strict";a.r(t);var e=a(17),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"usage-of-venus-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-venus-worker"}},[s._v("#")]),s._v(" Usage of venus-worker")]),s._v(" "),a("p",[s._v("venus-worker and venus-sealer are used to deploy on multiple machines. The sealing process is divided into four processes: AddPiece, PreCommit1, PreCommit2 and Commit2. Through the setting of venus-worker, different stages of sealing can be run on different machines, which can make the deployment process more flexible and take advantage of different machines. Here is a test network venus-worker construction process.")]),s._v(" "),a("h2",{attrs:{id:"get-ready"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-ready"}},[s._v("#")]),s._v(" Get ready")]),s._v(" "),a("h3",{attrs:{id:"machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#machine"}},[s._v("#")]),s._v(" Machine")]),s._v(" "),a("ul",[a("li",[s._v("192.168.1.151 for file mount")]),s._v(" "),a("li",[s._v("192.168.1.134 running worker")]),s._v(" "),a("li",[s._v("192.168.1.19  running venus, venus-sealing, venus-miner")])]),s._v(" "),a("h3",{attrs:{id:"module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[s._v("#")]),s._v(" Module")]),s._v(" "),a("p",[s._v("The following module are required to run this venus-worker test process. List the required project address. Please refer to the readme.md of the project for the specific compilation method.")]),s._v(" "),a("ol",[a("li",[s._v("venus-sealer "),a("a",{attrs:{href:"https://github.com/filecoin-project/venus-sealer",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/filecoin-project/venus-sealer"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("venus-worker "),a("a",{attrs:{href:"https://github.com/filecoin-project/venus-worker",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/filecoin-project/venus-worker"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[s._v("#")]),s._v(" Storage")]),s._v(" "),a("p",[s._v("Running multiple machines requires shared storage. Here, we use NFS as shared storage. The shared storage is deployed in 192.168.1.151. Refer to the document to "),a("a",{attrs:{href:"https://docs.platform9.com/v5.0/openstack/tutorials-setup-nfs-server",target:"_blank",rel:"noopener noreferrer"}},[s._v("install nfs"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" rpcbind nfs-utils\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /nfs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),s._v(" /nfs\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/nfs *(rw,sync,no_root_squash,no_subtree_check,insecure)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/exports\nexportfs  -rv\nsystemctl start rpcbind\nsystemctl start nfs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/lib/nfs/etab  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#检查nfs是否挂载成功")]),s._v("\n")])])]),a("h2",{attrs:{id:"environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#environment"}},[s._v("#")]),s._v(" Environment")]),s._v(" "),a("p",[s._v("By default, venus, venus-wallet and venus-messenger have been deployed")]),s._v(" "),a("h2",{attrs:{id:"start-up-venus-sealer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-up-venus-sealer"}},[s._v("#")]),s._v(" Start-up venus-sealer")]),s._v(" "),a("p",[s._v("Initialize and run venus-sealer on machine 192.168.1.19. After running, get API and token for configuring venus-worker and venus-miner")]),s._v(" "),a("h3",{attrs:{id:"mount-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount-storage"}},[s._v("#")]),s._v(" Mount storage")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /nfs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t nfs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.151:/nfs /nfs\n")])])]),a("h3",{attrs:{id:"running-venus-sealer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-venus-sealer"}},[s._v("#")]),s._v(" Running venus-sealer")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Initialize venus-sealer. Local storage is not used here")]),s._v("\nvenus-sealer --network calibration init --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("t01000 --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("32GiB --no-local-storage --node-url "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("venus-api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --node-token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("venus-token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" --messager-url http://"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("venus-message api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/rpc/v0\n\nvenus-sealer run\n")])])]),a("h3",{attrs:{id:"attach-the-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attach-the-storage"}},[s._v("#")]),s._v(" Attach the storage")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./venus-sealer storage attach --init --seal --store /nfs\n")])])]),a("h3",{attrs:{id:"get-api-address-and-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-api-address-and-token"}},[s._v("#")]),s._v(" Get API address and token")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.venussealer/api\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.venussealer/token\n")])])]),a("h2",{attrs:{id:"configure-venus-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-venus-worker"}},[s._v("#")]),s._v(" Configure venus-worker")]),s._v(" "),a("p",[s._v("Initialize and run venus-worker in 192.168.1.134")]),s._v(" "),a("h3",{attrs:{id:"mount-storage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mount-storage-2"}},[s._v("#")]),s._v(" Mount storage")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /nfs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t nfs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.151:/nfs /nfs\n")])])]),a("h3",{attrs:{id:"running-venus-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-venus-worker"}},[s._v("#")]),s._v(" Running venus-worker")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use the venus-sealer API and token obtained above")]),s._v("\n./venus-worker run --no-local-storage --miner-addr /ip4/127.0.0.1/tcp/2345/http --miner-token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJyZWFkIiwid3JpdGUiLCJzaWduIiwiYWRtaW4iXX0.gcqF6Pkm4bwGXzEx83NR7h8WPliEihJ3GyUKvhKryAQ\n")])])]),a("h3",{attrs:{id:"attach-the-storage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attach-the-storage-2"}},[s._v("#")]),s._v(" Attach the storage")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./venus-worker storage attach  /nfs\n")])])]),a("h3",{attrs:{id:"check-whether-it-is-normal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-whether-it-is-normal"}},[s._v("#")]),s._v(" Check whether it is normal")]),s._v(" "),a("p",[s._v("Running "),a("code",[s._v("./venus-sealer sealing workers")]),s._v(", the result is similar to the following")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Worker 8c814d19-ec36-4090-a03b-d4bc9314b39a, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lijunlongdeMacBook-Pro.local\n        CPU:  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                                                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/12 core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" use\n        RAM:  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.13")]),s._v(" GiB/16 GiB\n        VMEM: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11.13")]),s._v(" GiB/18 GiB\nWorker a89d4156-d23e-44e6-b74b-8405e9496db0, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" lijunlongdeMacBook-Pro.local\n        CPU:  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("                                                                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/12 core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" use\n        RAM:  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("63")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.12")]),s._v(" GiB/16 GiB\n        VMEM: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.12")]),s._v(" GiB/18 GiB\n\n")])])]),a("p",[s._v("Running "),a("code",[s._v("./venus-sealer storage list")]),s._v(", the result is similar to the following")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("7c046ce2-051f-4531-aa4d-76c1cd728acb:\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######                                            ] 257.7 GiB/1.998 TiB 12%")]),s._v("\n        Unsealed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Sealed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Caches: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Reserved: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" B\n        Weight: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Use: Seal Store\n        Local: /nfs\n        URL: http://127.0.0.1:2345/remote\n        URL: http://127.0.0.1:3456/remote\n\n1dcfda12-fb3d-413c-b626-caf8b87e3b97:\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#############################                     ] 136.4 GiB/233.5 GiB 58%")]),s._v("\n        Unsealed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Sealed: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Caches: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Reserved: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" B\n        Use: ReadOnly   Local: /Users/lijunlong/.genesis-sectors\n        URL: http://127.0.0.1:2345/remote\n\n")])])]),a("h2",{attrs:{id:"pledge-power"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pledge-power"}},[s._v("#")]),s._v(" Pledge power")]),s._v(" "),a("p",[s._v("In venus-sealer, run the command "),a("code",[s._v("venus-sealer sectors pledge")]),s._v(" to accumulate power. Run the command "),a("code",[s._v("venus-sealer sectors list")]),s._v(" to check the status of sealing.")]),s._v(" "),a("p",[a("em",[a("strong",[s._v("Note: if the Rust code prompts permission error, you can add /var/tmp/filecoin-parents，/tmp/bellman.gpu.lock/bellman.priority.lock and 777 permissions")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);