"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7668],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],d={},p="Introduction",s={unversionedId:"dapp-dev-guide/sdkspec/introduction",id:"dapp-dev-guide/sdkspec/introduction",title:"Introduction",description:"This document outlines the JSON-RPC API endpoints and types definitions for developers crafting an SDK for use with Casper networks.",source:"@site/source/docs/casper/dapp-dev-guide/sdkspec/introduction.md",sourceDirName:"dapp-dev-guide/sdkspec",slug:"/dapp-dev-guide/sdkspec/introduction",permalink:"/dapp-dev-guide/sdkspec/introduction",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/sdkspec/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Understanding Dictionaries",permalink:"/dapp-dev-guide/dictionaries"},next:{title:"Guidance for JSON-RPC SDK Compliance",permalink:"/dapp-dev-guide/sdkspec/guidance"}},l={},c=[{value:"Creating a Casper SDK",id:"creating-a-casper-sdk",level:2},{value:"Serialization",id:"serialization",level:3},{value:"SDK Standard Index",id:"sdk-standard-index",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This document outlines the JSON-RPC API endpoints and types definitions for developers crafting an SDK for use with Casper networks."),(0,i.kt)("h2",{id:"creating-a-casper-sdk"},"Creating a Casper SDK"),(0,i.kt)("p",null,"The Casper Association provides a JavaScript SDK that is compliant with this SDK Standard. However, those that prefer other languages may build an SDK using their language of choice."),(0,i.kt)("p",null,"For examples of such SDKs, please refer to our ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK Client Libraries")," section."),(0,i.kt)("h3",{id:"serialization"},"Serialization"),(0,i.kt)("p",null,"The Casper platform uses a custom serialization format. Tto this end, we've established a ",(0,i.kt)("a",{parentName:"p",href:"/design/serialization-standard/"},"serialization standard")," that describes the format, which SDK developers must implement in their language of choice."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sdk-standard-index"},"SDK Standard Index"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Page"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/guidance"},"Guidance for JSON-RPC SDK Compliance")),(0,i.kt)("td",{parentName:"tr",align:null},"Guide on the requirements for a compliant Casper SDK.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/json-rpc-minimal"},"Required JSON-RPC Methods for Minimal Compliance")),(0,i.kt)("td",{parentName:"tr",align:null},"Methods required for a minimally compliant Casper SDK.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/json-rpc-transactional"},"Transactional JSON-RPC Method")),(0,i.kt)("td",{parentName:"tr",align:null},"Description of ",(0,i.kt)("inlineCode",{parentName:"td"},"account_put_deploy"),", the only means by which users can send their compiled Wasm (as part of a Deploy) to a node on a Casper network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/json-rpc-informational"},"Informational JSON-RPC Methods")),(0,i.kt)("td",{parentName:"tr",align:null},"Descriptions of methods that return information from a network or node within a network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/json-rpc-pos"},"Proof-of-Stake JSON-RPC Methods")),(0,i.kt)("td",{parentName:"tr",align:null},"Descriptions of methods that pertain to Proof-of-Stake functionality on a Casper network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/types_chain"},"Types")),(0,i.kt)("td",{parentName:"tr",align:null},"Information on types used within JSON-RPC methods.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/types_cl"},"CL Types")),(0,i.kt)("td",{parentName:"tr",align:null},"Information specifically relating to CL Types.")))))}m.isMDXComponent=!0}}]);