"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6261],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7914:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={},p="Undelegating Tokens",s={unversionedId:"workflow/undelegate",id:"workflow/undelegate",title:"Undelegating Tokens",description:"This document details a workflow where tokens delegated to a validator on a Casper network can be undelegated.",source:"@site/source/docs/casper/workflow/undelegate.md",sourceDirName:"workflow",slug:"/workflow/undelegate",permalink:"/workflow/undelegate",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/undelegate.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Delegating with the Command-line",permalink:"/workflow/delegate"},next:{title:"Introduction",permalink:"/workflow/erc-20-sample-guide"}},u={},d=[{value:"Building The Undelegation WASM",id:"building-the-undelegation-wasm",level:2},{value:"Sending the Undelegation Deploy",id:"sending-the-undelegation-deploy",level:2},{value:"Asserting the Undelegation",id:"asserting-the-undelegation",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"undelegating-tokens"},"Undelegating Tokens"),(0,o.kt)("p",null,"This document details a workflow where tokens delegated to a validator on a Casper network can be undelegated."),(0,o.kt)("p",null,"This workflow assumes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You meet the ",(0,o.kt)("a",{parentName:"li",href:"/workflow/setup"},"prerequisites")),(0,o.kt)("li",{parentName:"ol"},"You are using the Casper command-line client"),(0,o.kt)("li",{parentName:"ol"},"You have an undelegation contract or WASM to execute on the network"),(0,o.kt)("li",{parentName:"ol"},"You have a valid ",(0,o.kt)("inlineCode",{parentName:"li"},"node-address")),(0,o.kt)("li",{parentName:"ol"},"You have previously ",(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/sending-deploys"},"deployed a smart contract")," to a Casper Network"),(0,o.kt)("li",{parentName:"ol"},"You have delegated tokens to a validator")),(0,o.kt)("h2",{id:"building-the-undelegation-wasm"},"Building The Undelegation WASM"),(0,o.kt)("p",null,"Obtain the ",(0,o.kt)("inlineCode",{parentName:"p"},"undelegate.wasm")," by cloning the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node"},"casper-node")," repository and building the contracts."),(0,o.kt)("p",null,"To build contracts, set up Rust, and install all dependencies. Visit ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/getting-started"},"Setting up Rust")," in the Developer Guide for step-by-step instructions."),(0,o.kt)("p",null,"Once you build the contracts, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"undelegate.wasm")," to create a deploy that will initiate the undelegation process. The WASM can be found in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"target/wasm32-unknown-unknown/release\n")),(0,o.kt)("h2",{id:"sending-the-undelegation-deploy"},"Sending the Undelegation Deploy"),(0,o.kt)("p",null,"Send a deploy containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"undelegate.wasm")," to the network to initiate the undelegation process."),(0,o.kt)("p",null,"Below is an example of an undelegation request using the Casper command-line client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n--node-address http://<peer-ip-addres>:7777/rpc \\\n--chain-name casper \\\n--session-path <path-to-wasm>/undelegate.wasm \\\n--payment-amount 2500000000 \\\n--session-arg \"validator:public_key='<hex-encoded-validator-public-key>'\" \\\n--session-arg \"amount:u512='<amount-to-delegate>'\"\n--session-arg \"delegator:public_key='<hex-encoded-public-key>'\" \\\n--secret-key <delegator-secret-key>.pem\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," The delegator's public key and the secret key that signs the deploy must be part of the same key pair."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"node-address")," -<HOST:PORT> Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"p",href:"http://localhost:7777"},"http://localhost:7777"),"]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"secret-key")," - Path to secret key file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"chain-name")," - Name of the chain, to avoid the deploy from being accidentally or maliciously included in a different chain"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"chain-name")," for testnet is ",(0,o.kt)("strong",{parentName:"li"},"casper-test")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("em",{parentName:"li"},"chain-name")," for mainnet is ",(0,o.kt)("strong",{parentName:"li"},"casper")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"session-path")," - The path to where the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate.wasm")," is located")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"session-arg")," - The arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate")," execution"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"validator")," is the public key of the validator from whom the tokens will be undelegated"),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," is the number of tokens to be undelegated"),(0,o.kt)("li",{parentName:"ul"},"The argument ",(0,o.kt)("inlineCode",{parentName:"li"},"delegator")," is the public key of the account undelegating tokens from a validator")))),(0,o.kt)("h2",{id:"asserting-the-undelegation"},"Asserting the Undelegation"),(0,o.kt)("p",null,"You can use the Casper command-line client to generate an RPC request to query the auction state. The subsequent RPC response will confirm that the undelegation request was successfully executed."),(0,o.kt)("p",null,"Here is how you can check the status of the auction to confirm that your bid was withdrawn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-auction-info \\\n--node-address http://<peer-ip-address>:7777/rpc\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - <HOST:PORT> Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"li",href:"http://localhost:7777"},"http://localhost:7777"),"]")),(0,o.kt)("p",null,"If the public key and the amount are absent from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bids")," structure, we can safely assert that we have indeed undelegated from the validator."),(0,o.kt)("p",null,"If your account is on the official Testnet or Mainnet, you can use the block explorer to look up your account balance and see that the tokens have been added to your balance:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/"},"Testnet explorer")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/"},"Mainnet explorer"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Note"),": After undelegating tokens from a validator, you must wait for the unbonding period to lapse before re-delegating tokens to either the same validator or a different validator."))}m.isMDXComponent=!0}}]);