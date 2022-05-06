"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6288],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4060:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=(n(4996),["components"]),s={},l="Execution Semantics",c={unversionedId:"design/execution-semantics",id:"design/execution-semantics",title:"Execution Semantics",description:"execution-semantics-head}",source:"@site/source/docs/casper/design/execution-semantics.md",sourceDirName:"design",slug:"/design/execution-semantics",permalink:"/design/execution-semantics",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/design/execution-semantics.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Global State",permalink:"/design/global-state"},next:{title:"Accounts",permalink:"/design/accounts"}},p={},d=[{value:"Introduction",id:"execution-semantics-intro",level:2},{value:"Measuring computational work",id:"execution-semantics-gas",level:2},{value:"Deploys",id:"execution-semantics-deploys",level:2},{value:"Deploy Lifecycle",id:"execution-semantics-phases",level:3},{value:"Deploy Received",id:"deploy-received",level:3},{value:"Deploy Gossiped",id:"deploy-gossiped",level:3},{value:"Block Proposed",id:"block-proposed",level:3},{value:"Block Gossiped",id:"block-gossiped",level:3},{value:"Consensus Reached",id:"consensus-reached",level:3},{value:"Deploy Executed",id:"deploy-executed",level:3},{value:"Payment code",id:"execution-semantics-payment",level:4},{value:"Session code",id:"execution-semantics-session",level:4},{value:"Specifying payment code and session code",id:"execution-semantics-specifying-code",level:4},{value:"Deploys as functions on the global state",id:"execution-semantics-deploys-as-functions",level:2},{value:"The Casper Network runtime",id:"execution-semantics-runtime",level:2},{value:"Generating <code>URef</code>s",id:"execution-semantics-urefs",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"execution-semantics-head"},"Execution Semantics"),(0,o.kt)("h2",{id:"execution-semantics-intro"},"Introduction"),(0,o.kt)("p",null,"The Casper Network is a decentralized computation platform. In this chapter we describe aspects of the computational model we use."),(0,o.kt)("h2",{id:"execution-semantics-gas"},"Measuring computational work"),(0,o.kt)("p",null,"Computation is all done in a ",(0,o.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly (wasm)")," interpreter, allowing any programming language which compiles to wasm to become a smart contract language for the Casper blockchain. Similar to Ethereum, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Gas")," to measure computational work in a way which is consistent from node to node in the Casper Network. Each wasm instruction is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/cb1d20ad1ea6e245cd8237f9406885a1e785c669/execution_engine/src/shared/wasm_config.rs#L15"},"assigned")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"Gas")," value, and the amount of gas spent is tracked by the runtime with each instruction executed by the interpreter. All executions are finite because each has a finite ",(0,o.kt)("em",{parentName:"p"},"gas limit")," that specifies the maximum amount of gas that can be spent before the computation is terminated by the runtime. How this limit is determined is discussed in more detail below."),(0,o.kt)("p",null,"Although computation is measured in ",(0,o.kt)("inlineCode",{parentName:"p"},"Gas"),", we still take payment for computation in ",(0,o.kt)("a",{parentName:"p",href:"/design/tokens#tokens-divisibility"},"motes"),". Therefore, there is a conversion rate between ",(0,o.kt)("inlineCode",{parentName:"p"},"Gas")," and motes. How this conversion rate is determined is discussed elsewhere."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that Casper will not refund any amount of unused gas."),(0,o.kt)("p",{parentName:"div"},"This decision is taken to incentivizing the ",(0,o.kt)("a",{parentName:"p",href:"/runtime#runtime-economics"},"Casper Runtime Economics")," by efficiently allocating the computational resources. The ",(0,o.kt)("a",{parentName:"p",href:"/runtime#consensus-before-execution-basics-of-payment"},"consensus-before-execution model")," implements the mechanism to encourage the optimized gas consumption from the user-side and to prevent the overuse of block space by poorly handled deploys."))),(0,o.kt)("h2",{id:"execution-semantics-deploys"},"Deploys"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"deploy")," represents a request from a user to perform computation on our platform. It has the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Body: containing payment code and session code (more details on these below)"),(0,o.kt)("li",{parentName:"ul"},"Header: containing",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("a",{parentName:"li",href:"/design/global-state#global-state-account-key"},"identity key")," of the account the deploy will run in"),(0,o.kt)("li",{parentName:"ul"},"the timestamp when the deploy was created"),(0,o.kt)("li",{parentName:"ul"},"a time to live, after which the deploy is expired and cannot be included in a block"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"blake2b256")," hash of the body"))),(0,o.kt)("li",{parentName:"ul"},"Deploy hash: the ",(0,o.kt)("inlineCode",{parentName:"li"},"blake2b256")," hash of the Header"),(0,o.kt)("li",{parentName:"ul"},"Approvals: the set of signatures which have signed the deploy hash, these are used in the ",(0,o.kt)("a",{parentName:"li",href:"/design/accounts#accounts-associated-keys-weights"},"account permissions model"))),(0,o.kt)("p",null,"Each deploy is an atomic piece of computation in the sense that, whatever effects a deploy would have on the global state must be entirely included in a block or the entire deploy must not be included in a block."),(0,o.kt)("h3",{id:"execution-semantics-phases"},"Deploy Lifecycle"),(0,o.kt)("p",null,"A deploy goes through the following phases on Casper:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy Received"),(0,o.kt)("li",{parentName:"ol"},"Deploy Gossiped"),(0,o.kt)("li",{parentName:"ol"},"Block Proposed"),(0,o.kt)("li",{parentName:"ol"},"Block Gossiped"),(0,o.kt)("li",{parentName:"ol"},"Consensus Reached"),(0,o.kt)("li",{parentName:"ol"},"Deploy Executed")),(0,o.kt)("h3",{id:"deploy-received"},"Deploy Received"),(0,o.kt)("p",null,"The client sending the deploy will send it to one or more nodes via their JSON RPC servers. The deploy acceptor, which is the component responsible for receiving the deploy from the JSON-RPC or another node, will run validity checks on the deploy and allow the lifecycle to continue or return an appropriate error. Once accepted, the deploy hash is returned to the client to indicate it has been enqueued for execution."),(0,o.kt)("h3",{id:"deploy-gossiped"},"Deploy Gossiped"),(0,o.kt)("p",null,"After a node accepts a new deploy, it will gossip to all other nodes. A validator node will put the deploy into the block proposer buffer. The validator leader will pick the deploy from the block proposer buffer to create a new block for the chain. This mechanism is efficient and ensures all nodes in the network eventually hold the given deploy."),(0,o.kt)("h3",{id:"block-proposed"},"Block Proposed"),(0,o.kt)("p",null,"The validator leader for this round will propose a block that includes as many deploys from the block proposer buffer as can fit in a block."),(0,o.kt)("h3",{id:"block-gossiped"},"Block Gossiped"),(0,o.kt)("p",null,"The proposed block is propagated to all other nodes."),(0,o.kt)("h3",{id:"consensus-reached"},"Consensus Reached"),(0,o.kt)("p",null,"Once the other validators reach consensus that the proposed block is valid, all deploys in the block are executed, and this block becomes the final block added to the chain."),(0,o.kt)("h3",{id:"deploy-executed"},"Deploy Executed"),(0,o.kt)("p",null,"A deploy is executed in distinct phases to accommodate flexibly paying for computation. The phases of a deploy are payment, session, and finalization. During the payment phase, the payment code is executed. If it is successful, the session code is executed during the session phase. And, independently of session code execution, the finalization phase does some bookkeeping around payment."),(0,o.kt)("h4",{id:"execution-semantics-payment"},"Payment code"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Payment code")," provides the logic used to pay for the computation the deploy will do. Payment code is allowed to include arbitrary logic, providing maximal flexibility in how a deploy can be paid for (e.g., the simplest payment code could use the account's ",(0,o.kt)("a",{parentName:"p",href:"/design/tokens#tokens-purses-and-accounts"},"main purse"),", while an enterprise application may require deploys to pay via a multi-sig application accessing a corporate purse). We restrict the gas limit of the payment code execution, based on the current conversion rate between gas and motes, such that no more than ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX_PAYMENT_COST")," motes (a constant of the system) are spent. To ensure payment code will pay for its own computation, we only allow accounts with a balance in their main purse greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"MAX_PAYMENT_COST"),", to execute deploys."),(0,o.kt)("p",null,"Payment code ultimately provides its payment by performing a ",(0,o.kt)("a",{parentName:"p",href:"/design/tokens#tokens-mint-interface"},"token transfer")," into the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/cb1d20ad1ea6e245cd8237f9406885a1e785c669/types/src/system/handle_payment/mod.rs#L65"},"Handle Payment contract's payment purse"),". If payment is not given or not enough is transferred, then payment execution is not considered successful. In this case the effects of the payment code on the global state are reverted and the cost of the computation is covered by motes taken from the offending account's main purse."),(0,o.kt)("h4",{id:"execution-semantics-session"},"Session code"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Session code")," provides the main logic for the deploy. It is only executed if the payment code is successful. The gas limit for this computation is determined based on the amount of payment given (after subtracting the cost of the payment code itself)."),(0,o.kt)("h4",{id:"execution-semantics-specifying-code"},"Specifying payment code and session code"),(0,o.kt)("p",null,"The user-defined logic of a deploy can be specified in a number of ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a wasm module in binary format representing a valid ",(0,o.kt)("a",{parentName:"li",href:"/design/serialization-standard#global-state-contracts"},"contract")," (Note: the named keys do not need to be specified because they come from the account the deploy is running in)"),(0,o.kt)("li",{parentName:"ul"},"a 32-byte identifier representing the ",(0,o.kt)("a",{parentName:"li",href:"/design/serialization-standard#serialization-standard-hash-key"},"hash")," or ",(0,o.kt)("a",{parentName:"li",href:"/design/serialization-standard#serialization-standard-uref"},"URef")," where a contract is already stored in the global state"),(0,o.kt)("li",{parentName:"ul"},"a name corresponding to a named key in the account, where a contract is stored under the key")),(0,o.kt)("p",null,"Each of payment and session code are independently specified, so different methods of specifying them may be used (e.g. payment could be specified by a hash key, while session is explicitly provided as a wasm module)."),(0,o.kt)("h2",{id:"execution-semantics-deploys-as-functions"},"Deploys as functions on the global state"),(0,o.kt)("p",null,"To enable concurrent modification of ",(0,o.kt)("a",{parentName:"p",href:"/design/global-state#global-state-head"},"global state")," (either by parallel deploys in the same block or parallel blocks on different forks of the chain), we view each deploy as a function taking our global state as input and producing a new global state as output. It is safe to execute two such functions concurrently if they do not interfere with each other, which formally can be defined to mean the functions ",(0,o.kt)("em",{parentName:"p"},"commute")," (i.e., if they were executed sequentially, it does not matter in what order they are executed, the final result is the same for a given input). Whether two deploys commute is determined based on the effects they have on the global state, i.e. which operation (read, write, add) it does on each key in the key-value store. How this is done is described in ",(0,o.kt)("a",{parentName:"p",href:"/design/appendix#appendix-c"},"Appendix C"),"."),(0,o.kt)("h2",{id:"execution-semantics-runtime"},"The Casper Network runtime"),(0,o.kt)("p",null,"A wasm module is not natively able to create any effects outside of reading / writing from its own linear memory. To enable other effects (e.g. reading / writing to the Casper global state), wasm modules must import functions from the host environment they are running in. In the case of contracts on the Casper blockchain, this host is the Casper runtime."),(0,o.kt)("p",null,"Here, we briefly describe the functionalities provided by imported functions. All these features are conveniently accessible via functions in the ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-contract"},"Casper Rust library"),". For a more detailed description of the functions available for contracts to import, see ",(0,o.kt)("a",{parentName:"p",href:"/design/appendix#appendix-a"},"Appendix A"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reading / writing from global state",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"read"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"write"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"add")," functions allow working with exiting ",(0,o.kt)("a",{parentName:"li",href:"/design/serialization-standard#serialization-standard-uref"},"URefs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"new_uref")," allows creating a new ",(0,o.kt)("inlineCode",{parentName:"li"},"URef")," initialized with a given value (see section below about how ",(0,o.kt)("inlineCode",{parentName:"li"},"URef"),"s are generated)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store_function")," allows writing a contract under a ",(0,o.kt)("a",{parentName:"li",href:"/design/serialization-standard#serialization-standard-hash-key"},"hash key")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_uref"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"list_known_urefs"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"add_uref"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"remove_uref")," allow working with the ",(0,o.kt)("a",{parentName:"li",href:"/design/serialization-standard#global-state-contracts"},"named keys")," of the current context (account or contract)"))),(0,o.kt)("li",{parentName:"ul"},"Account functionality",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"add_associated_key"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"remove_associated_key"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"update_associated_key"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"set_action_threshold")," support the various ",(0,o.kt)("a",{parentName:"li",href:"/design/accounts#accounts-key-management"},"key management actions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main_purse")," returns the ",(0,o.kt)("a",{parentName:"li",href:"/design/tokens#tokens-purses-and-accounts"},"main purse")," of the account"))),(0,o.kt)("li",{parentName:"ul"},"Runtime flow and properties",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"call_contract")," allows executing a contract stored under a key (hash or ",(0,o.kt)("inlineCode",{parentName:"li"},"URef"),"), including passing arguments and getting a return value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ret")," is used by contracts to return a value to their caller (i.e. enables return values from ",(0,o.kt)("inlineCode",{parentName:"li"},"call_contract"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_named_arg")," allows getting arguments passed to the contract (either to session code as part of the deploy, or arguments to ",(0,o.kt)("inlineCode",{parentName:"li"},"call_contract"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"revert")," exits the entire executing deploy, reverting any effects it caused, and returns a status code that is captured in the block"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_caller")," returns the public key of the account for the current deploy (can be used for control flow based on specific users of the blockchain)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_phase")," returns the current ",(0,o.kt)("a",{parentName:"li",href:"#execution-semantics-phases"},"phase")," of the deploy execution"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_blocktime")," gets the timestamp of the block this deploy will be included in"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/design/tokens#tokens-mints-and-purses"},"Mint")," functionality",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create_purse")," creates a new empty purse, returning the ",(0,o.kt)("inlineCode",{parentName:"li"},"URef")," to the purse"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_balance")," reads the balance of a purse"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_to_account")," transfers from the present account's main purse to the main purse of a specified account (creating the account if it does not exist)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_from_purse_to_account")," transfer from a specified purse to the main purse of a specified account (creating the account if it does not exist)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer_from_purse_to_purse")," alias for the ",(0,o.kt)("a",{parentName:"li",href:"/design/tokens#tokens-mint-interface"},"mint\u2019s transfer function"))))),(0,o.kt)("h3",{id:"execution-semantics-urefs"},"Generating ",(0,o.kt)("inlineCode",{parentName:"h3"},"URef"),"s"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s are generated using a ",(0,o.kt)("a",{parentName:"p",href:"https://rust-random.github.io/rand/rand_chacha/struct.ChaCha20Rng.html"},"cryptographically secure random number generator")," using the ",(0,o.kt)("a",{parentName:"p",href:"https://cr.yp.to/chacha.html"},"ChaCha algorithm"),". The random number generator is seeded by taking the ",(0,o.kt)("inlineCode",{parentName:"p"},"blake2b256")," hash of the deploy hash concatenated with an index representing the current phase of execution (to prevent collisions between ",(0,o.kt)("inlineCode",{parentName:"p"},"URef"),"s generated in different phases of the same deploy)."))}m.isMDXComponent=!0}}]);