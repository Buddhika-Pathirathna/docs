"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4865],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,g=d["".concat(s,".").concat(p)]||d[p]||k[p]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2790:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return k}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Overview",slug:"/staking",tags:["finance","staking","governance"]},s="Staking",c={unversionedId:"staking/index",id:"staking/index",title:"Overview",description:"A feature of Proof-of-Stake protocols is that token holders can actively participate in the protocol through a mechanism known as staking.",source:"@site/source/docs/casper/staking/index.md",sourceDirName:"staking",slug:"/staking",permalink:"/staking",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/staking/index.md",tags:[{label:"finance",permalink:"/tags/finance"},{label:"staking",permalink:"/tags/staking"},{label:"governance",permalink:"/tags/governance"}],version:"current",frontMatter:{title:"Overview",slug:"/staking",tags:["finance","staking","governance"]},sidebar:"staking",next:{title:"Staking with Ledger Devices",permalink:"/workflow/staking-ledger"}},u={},k=[{value:"What you need to know before staking",id:"what-you-need-to-know-before-staking",level:2},{value:"Slashing",id:"slashing",level:2},{value:"Delegation Rate",id:"delegation-rate",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Selecting a node for Staking",id:"selecting-a-node-for-staking",level:2},{value:"Check in on your Stake",id:"check-in-on-your-stake",level:2},{value:"Unbonding Period",id:"unbonding-period",level:2}],d={toc:k};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking"},"Staking"),(0,o.kt)("p",null,"A feature of Proof-of-Stake protocols is that token holders can actively participate in the protocol through a mechanism known as ",(0,o.kt)("strong",{parentName:"p"},"staking"),"."),(0,o.kt)("p",null,"Persons that hold their private keys can choose to stake their tokens with any validator in the Casper Network. Alternatively, it is possible to stake tokens via an exchange or custody provider as well."),(0,o.kt)("p",null,"This guide will outline the steps required to stake the CSPR token on the Casper Network."),(0,o.kt)("h2",{id:"what-you-need-to-know-before-staking"},"What you need to know before staking"),(0,o.kt)("p",null,"Please read the following sections carefully before staking tokens on the Casper Network."),(0,o.kt)("h2",{id:"slashing"},"Slashing"),(0,o.kt)("p",null,"Presently Casper does not slash for equivocations. If a node equivocates, its' messages are ignored by the rest of the validators for the balance of the era and made inactive. A node running the software provided by the Casper Association will terminate once it detects that it has equivocated. Future work includes locking an equivocating validator's stake for an extended duration of time, effectively penalizing the validator."),(0,o.kt)("p",null,"Casper does not treat validator stake differently than delegator stake for security reasons."),(0,o.kt)("h2",{id:"delegation-rate"},"Delegation Rate"),(0,o.kt)("p",null,"Node operators (Validators) define a commission that they take in exchange for providing staking services. This commission is represented as a percentage of the rewards that the node operator retains for their services."),(0,o.kt)("h2",{id:"rewards"},"Rewards"),(0,o.kt)("p",null,"Validators receive rewards for participating in consensus by voting on blocks sending finality signatures (finalizing blocks). There is no precise ",(0,o.kt)("em",{parentName:"p"},"per-block")," reward. Rewards are split proportionally among stakes within an era. If a validator is offline or cannot vote on many blocks, the rewards earned are also reduced. Delegators can only receive a proportional amount of the validator's rewards minus the validator's commission (Delegation Rate)."),(0,o.kt)("p",null,"Rewards are distributed at the end of each era."),(0,o.kt)("h2",{id:"selecting-a-node-for-staking"},"Selecting a node for Staking"),(0,o.kt)("p",null,"As a prospective delegator, it is important to select a validating node that you can trust. Please do your due diligence before you stake your tokens with a validator."),(0,o.kt)("h2",{id:"check-in-on-your-stake"},"Check in on your Stake"),(0,o.kt)("p",null,"It's recommended that you check in on how your stake is performing from time to time. If the validator you staked with decides to unbond, your stake will also be unbonded. Make sure that the validator you have selected is performing as per your expectations."),(0,o.kt)("p",null,"Validators have to win a staking auction by competing with prospective and current validators for a slot. This process is permissionless, meaning validators can join and leave the auction without restrictions, except the unbonding wait period."),(0,o.kt)("h2",{id:"unbonding-period"},"Unbonding Period"),(0,o.kt)("p",null,"For security purposes, whenever a token is un-staked or un-delegated, the protocol will continue to keep the token locked for 14 hours."),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking"},"How to Stake your CSPR"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#1-introduction"},"1. Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#1-staking-overview"},"2. Staking Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#3-creating-your-wallet-with-the-casperlabs-signer"},"3. Creating your Wallet with the CasperLabs Signer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#4-connecting-to-blockexplorer"},"4. Connecting to a Block Explorer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#5-funding-your-account"},"5. Funding your Account")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#6-delegating-tokens"},"6. Delegating Tokens")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#7-monitoring"},"7. Monitoring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#8-undelegating-tokens"},"8. Undelegating Tokens")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/staking#conclusion"}," Conclusion")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/delegate"},"Delegating with the Command-line"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/delegate#building-the-delegation-wasm"},"Building The Delegation Wasm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/delegate#acquiring-a-validators-public-key"},"Acquiring a Validator\u2019s Public Key")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/workflow/delegate#executing-the-delegation-request"},"Executing the Delegation Request"))))))}p.isMDXComponent=!0}}]);