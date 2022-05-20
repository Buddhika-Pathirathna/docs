"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3876],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8313:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],p={title:"Introduction",slug:"/sdk"},s="SDK Client Libraries",l={unversionedId:"dapp-dev-guide/sdk/index",id:"dapp-dev-guide/sdk/index",title:"Introduction",description:"This section covers the software development kits (SDKs) available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with the Casper Network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions.",source:"@site/source/docs/casper/dapp-dev-guide/sdk/index.md",sourceDirName:"dapp-dev-guide/sdk",slug:"/sdk",permalink:"/sdk",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/sdk/index.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/sdk"},sidebar:"dapp-dev-guide",previous:{title:"Sending Deploys to the Network",permalink:"/dapp-dev-guide/sending-deploys"},next:{title:"TypeScript/JavaScript SDK",permalink:"/dapp-dev-guide/sdk/script-sdk"}},d={},c=[],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk-client-libraries"},"SDK Client Libraries"),(0,o.kt)("p",null,"This section covers the software development kits (SDKs) available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with the Casper Network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions."),(0,o.kt)("p",null,"The following table provides links to the SDK documentation, in addition to the corresponding GitHub repositories and pertinent contact information."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SDK Documentation"),(0,o.kt)("th",{parentName:"tr",align:null},"GitHub Location"),(0,o.kt)("th",{parentName:"tr",align:null},"Maintainer"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdk/script-sdk"},"TypeScript")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"Casper-js-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:jan@hfmn.pl"},"Jan Hoffman"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Java SDK"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-java-sdk/"},"Casper-java-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:carl.norburn@gmail.com"},"Carl Norburn"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdk/csharp-sdk"},"C# SDK")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-net-sdk"},"Casper-net-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},"David Hernando, Ihor Burlachenko, Muhammet Kara, Michael Steuer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdk/go-sdk"},"Golang SDK")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-golang-sdk/"},"Casper-golang-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:yar.panasenko@gmail.com"},"Yaroslav Panasenko"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdk/python-sdk"},"Python SDK")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-python-sdk/"},"Casper-python-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:mark@casper.network"},"Mark A. Greenslade"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Java SDK by SyntiFi"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/syntifi/casper-sdk"},"Casper-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:remo@syntifi.com"},"Remo Stieger"),"/",(0,o.kt)("a",{parentName:"td",href:"mailto:andre@syntifi.com"},"Andre Bertolace"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PHP SDK"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-php-sdk"},"Casper-php-sdk")),(0,o.kt)("td",{parentName:"tr",align:null},"Roman Bylbas, Ihor Burlachenko, Michael Steuer")))))}m.isMDXComponent=!0}}]);