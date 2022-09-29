"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8125],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},625:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={title:"Introduction",slug:"/workflow/erc-20-sample-guide"},s="Using the ERC-20 Contract",l={unversionedId:"workflow/erc-20-sample-guide/index",id:"workflow/erc-20-sample-guide/index",isDocsHomePage:!1,title:"Introduction",description:"This guide introduces you to using an ERC-20 contract on the Casper Network.",source:"@site/source/docs/casper/workflow/erc-20-sample-guide/index.md",sourceDirName:"workflow/erc-20-sample-guide",slug:"/workflow/erc-20-sample-guide",permalink:"/docs/workflow/erc-20-sample-guide",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/workflow/erc-20-sample-guide/index.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/workflow/erc-20-sample-guide"},sidebar:"workflow",previous:{title:"Undelegating Tokens",permalink:"/docs/workflow/undelegate"},next:{title:"Setup",permalink:"/docs/workflow/erc-20-sample-guide/setup"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-erc-20-contract"},"Using the ERC-20 Contract"),(0,a.kt)("p",null,"This guide introduces you to using an ERC-20 contract on the ",(0,a.kt)("a",{parentName:"p",href:"https://cspr.live/"},"Casper Network"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20#specification"},"Ethereum Request for Comment (ERC-20)")," standard defines a set of rules that dictate the total supply of tokens, how the tokens are transferred, how transactions are approved, and how token data is accessed. These ERC-20 tokens are blockchain-based assets that have value and can be transferred or recorded."),(0,a.kt)("p",null,"We will employ the following test accounts to demonstrate the use of an ERC-20 contract and transfer tokens between user accounts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://integration.cspr.live/account/01f2dfc09a94ef7bce440f93a1bb6f17fdac0c913549927d452e7e91a376e9d20d"},"User A")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://integration.cspr.live/account/015d4e20b5f7f687be80aed6e20960898b02c7549cc49ddf583224ecd894eca375"},"User B")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://integration.cspr.live/account/0101fe69ae2012358e5ce8e8b39661d45d225251c4f19ebb7fc74b057637e65aa4"},"User C")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://integration.cspr.live/account/0171bd7bac58780ce950007de575a472bcb30457e7b68427a6ed466568d71db1d6"},"User D"))),(0,a.kt)("p",null,"To execute transactions on the Casper Network (involving ERC-20 tokens), you will need some CSPR tokens to pay for the transactions."),(0,a.kt)("p",null,"To understand the implementation of a Casper ERC-20 contract, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/erc20"},"ERC-20 Tutorial"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you dive into the details of this guide, ensure you meet these requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set up your machine as per the ",(0,a.kt)("a",{parentName:"li",href:"/docs/workflow/setup"},"prerequisites")),(0,a.kt)("li",{parentName:"ul"},"Use the Casper command-line client"),(0,a.kt)("li",{parentName:"ul"},"Get a valid ",(0,a.kt)("inlineCode",{parentName:"li"},"node-address")),(0,a.kt)("li",{parentName:"ul"},"Know how to deploy a ",(0,a.kt)("a",{parentName:"li",href:"/docs/dapp-dev-guide/deploying-contracts"},"smart contract")," to a Casper network"),(0,a.kt)("li",{parentName:"ul"},"Get some CSPR tokens to pay for transactions")))}d.isMDXComponent=!0}}]);