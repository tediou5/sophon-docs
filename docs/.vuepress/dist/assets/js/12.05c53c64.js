(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{327:function(e,t,a){e.exports=a.p+"assets/img/vm_arc.a9bf806d.jpg"},416:function(e,t,a){"use strict";a.r(t);var o=a(17),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"background"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),o("p",[e._v("As the re-branding of filecoin terminology spearheaded by "),o("a",{attrs:{href:"https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0018.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("FIP0018"),o("OutboundLink")],1),e._v(" settled, consensus has been reached across communities (developers, providers, ecosystem partners and etc) to push for taking on more storage deals to improve the public perception on the fact that most of the network storage are still committed capacities (CCs). Given the above sentiment, design and implementation of venus-market module has been put into the spot light. A clear long-term roadmap is due for Venus community to discuss and iterate on, also as a means for better communications with filecoin ecosystem in general. As Venus team is picking up the reminiscences of the "),o("a",{attrs:{href:"https://docs.google.com/document/d/1ukPD8j6plLEbbzUjxfo7eCauIrOeC_tqxqYK_ls9xbc/edit#",target:"_blank",rel:"noopener noreferrer"}},[e._v("Filecoin Component Architecture"),o("OutboundLink")],1),e._v(", emergent ways of how market could facilitate the dynamics between storage providers and storage clients are constatntly being intergrated into the long-term vision of Venus filecoin.")]),e._v(" "),o("h2",{attrs:{id:"architecture"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),o("p",[e._v("One of the most distinctive features of Venus is easing storage providers into the Filecoin network by relieving the overhead coming with interacting with the Filecoin main chain through the usage of Venus chain service. Chain interactions including but not limited to chain synchronization, message sending and consolidated block producing can all be handled by a Venus chain service that may be shared among a group of storage providers. Taking another step further in this architecture powered by Venus chain service, venus-market can be deployed as a component of the chain service to mediate the deal-making process on behalf of the storage provider according to its own configurations and settings. With integration of "),o("code",[e._v("venus-cluster")]),e._v(" and "),o("code",[e._v("venus-sealer")]),e._v(" into the mix, a Venus storage provider can enjoy a deal-taking experience that is close to sealing a CC sector.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(327),alt:"venus-cluster"}})]),e._v(" "),o("p",[e._v("The above illustration shows a high-level overview of "),o("code",[e._v("venus-market")]),e._v(" architecture (when deployed as a chain service component). On the left, we have a column of different types of storage clients like the lotus client, "),o("code",[e._v("venus-market")]),e._v(" light weight client and platforms like Estuary and Filswan. In the middle, we have Venus chain service with "),o("code",[e._v("venus-market v2")]),e._v(" at its core along with other components. On the right, we have storage providers using the chain service.")]),e._v(" "),o("h3",{attrs:{id:"deal-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deal-flow"}},[e._v("#")]),e._v(" deal flow")]),e._v(" "),o("p",[e._v("A typical storage deal flow would go from clients initiating a deal to "),o("code",[e._v("venus-market")]),e._v(", storage providers agree to take the deal, deal data got transferred from the client to the "),o("code",[e._v("pieceStore")]),e._v(" sub module of "),o("code",[e._v("venus-market")]),e._v(" and lastly the deal data got transferred from chain service to storage providers through different types of data transfer protocols like OSS and graphsync.")]),e._v(" "),o("h2",{attrs:{id:"roadmap"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#roadmap"}},[e._v("#")]),e._v(" Roadmap")]),e._v(" "),o("p",[e._v("Details of the roadmap for "),o("code",[e._v("venus-market")]),e._v(" can be found "),o("a",{attrs:{href:"https://github.com/filecoin-project/venus/blob/master/documentation/venus-market%20module%20design%20%26%20roadmap.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(". As of the date we publish this document, venus-market is now at phase 2 platform model.")])])}),[],!1,null,null,null);t.default=n.exports}}]);