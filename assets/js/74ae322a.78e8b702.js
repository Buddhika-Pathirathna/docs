"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7433],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),k=o,m=f["".concat(l,".").concat(k)]||f[k]||u[k]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4048:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=r(4996),s=["components"],l={},p="Transferring Tokens using a Block Explorer",c={unversionedId:"workflow/token-transfer",id:"workflow/token-transfer",title:"Transferring Tokens using a Block Explorer",description:"You can transfer Casper tokens (CSPR) using any block explorer built to explore the Casper blockchain. The Wallet feature on these block explorers can be used to transfer tokens to another user, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens.",source:"@site/source/docs/casper/workflow/token-transfer.md",sourceDirName:"workflow",slug:"/workflow/token-transfer",permalink:"/workflow/token-transfer",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/token-transfer.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Casper Signer User Guide",permalink:"/workflow/signer-guide"},next:{title:"Funding Testnet Accounts",permalink:"/workflow/testnet-faucet"}},u={},f=[{value:"Transferring Tokens",id:"transferring-tokens",level:2}],k={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transferring-tokens-using-a-block-explorer"},"Transferring Tokens using a Block Explorer"),(0,a.kt)("p",null,"You can transfer Casper tokens (CSPR) using any ",(0,a.kt)("a",{parentName:"p",href:"../block-explorer/"},"block explorer")," built to explore the Casper blockchain. The Wallet feature on these block explorers can be used to transfer tokens to another user, delegate stake, or undelegate stake. In this section, we will discuss the steps to transfer CSPR tokens."),(0,a.kt)("h2",{id:"transferring-tokens"},"Transferring Tokens"),(0,a.kt)("p",null,"To transfer tokens, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign in to your account with the Signer. For detailed instructions, see the ",(0,a.kt)("a",{parentName:"p",href:"/workflow/signer-guide"},"Signer Guide"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Wallet")," on the top menu bar and select ",(0,a.kt)("strong",{parentName:"p"},"Transfer CSPR")," from the drop-down menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the recipient\u2019s wallet address, the amount you wish to transfer, and an optional Transfer ID for reference. If you do not provide an ID, the system will auto-generate one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Next")," to proceed. The following figure shows an example transfer of 50 CSPR."),(0,a.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-first-step.png"),width:"500"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A confirmation window appears, and you may verify the recipient\u2019s wallet address and transaction amount. Click ",(0,a.kt)("strong",{parentName:"p"},"Confirm and transfer")," to proceed to the next step. In the following figure, you may observe the transaction details initiated in the previous step. The transaction fees is displayed in CSPR and USD."))),(0,a.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-second-step.png"),width:"500"}),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign the transaction by selecting the ",(0,a.kt)("strong",{parentName:"p"},"Sign with Casper Signer")," button to proceed to the next step. Here you can review the following important fields:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The Deploy hash, which uniquely identifies your transfer"),(0,a.kt)("li",{parentName:"ul"},"The Recipient public key of the person receiving your transfer"),(0,a.kt)("li",{parentName:"ul"},"The Recipient account hash used by the system to track the transaction"),(0,a.kt)("li",{parentName:"ul"},"The Transfer Amount containing the value of the transfer")))),(0,a.kt)("img",{src:(0,i.Z)("/image/workflow/CSPR-third-step.png"),width:"500"}),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, you will see a pop-up window with a Signature Request and all the various transaction details, including:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Signing key which approves the transaction"),(0,a.kt)("li",{parentName:"ul"},"Your public key"),(0,a.kt)("li",{parentName:"ul"},"Recipient's account hash"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Sign with Casper Signer")," at the bottom of the window to complete the transaction. You completed the transaction, and successfully transferred tokens."),(0,a.kt)("img",{src:(0,i.Z)("/image/workflow/transfer-confirm.png"),width:"500"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, you can view your CSPR balance, for more information, see the ",(0,a.kt)("a",{parentName:"p",href:"../signer-guide/#6-viewing-account-details"},"Viewing Account Details"),"."))))}m.isMDXComponent=!0}}]);