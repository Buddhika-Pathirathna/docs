"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9506],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),s=["components"],c={},i="AssemblyScript",p={unversionedId:"dapp-dev-guide/writing-contracts/assembly-script",id:"dapp-dev-guide/writing-contracts/assembly-script",title:"AssemblyScript",description:"CasperLabs maintains the casper-contract to allow developers to create smart contracts using AssemblyScript. The package source is hosted in the main Casper Network repository.",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/assembly-script.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/assembly-script",permalink:"/dapp-dev-guide/writing-contracts/assembly-script",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/assembly-script.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Writing a Basic Smart Contract in Rust",permalink:"/dapp-dev-guide/writing-contracts/rust"},next:{title:"Unit Testing Contracts",permalink:"/dapp-dev-guide/testing"}},l={},m=[{value:"Installation",id:"installation",level:2},{value:"Contract API Documentation",id:"contract-api-documentation",level:2},{value:"Usage",id:"usage",level:2},{value:"Sample smart contract",id:"sample-smart-contract",level:2},{value:"Compile to WASM",id:"compile-to-wasm",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"assemblyscript"},"AssemblyScript"),(0,o.kt)("p",null,"CasperLabs maintains the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/casper-contract"},"casper-contract")," to allow developers to create smart contracts using ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/assemblyscript"},"AssemblyScript"),". The package source is hosted in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/tree/master/smart_contracts/contract_as/assembly"},"main Casper Network repository"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"For each smart contract, it is necessary to create a project directory and initialize it."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"npm init")," process prompts for various details about the project. Answer as you see fit, but you may safely default everything except ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", which needs to be specified. In this guide, we will refer to the contract name as ",(0,o.kt)("inlineCode",{parentName:"p"},"your-contract-name"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir project\ncd project\nnpm init\n")),(0,o.kt)("p",null,"Then install AssemblyScript and this package in the project directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev assemblyscript@0.9.1\nnpm install --save casper-contract\n")),(0,o.kt)("h2",{id:"contract-api-documentation"},"Contract API Documentation"),(0,o.kt)("p",null,"The Assemblyscript contract API documentation can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/casper-contract"},"https://www.npmjs.com/package/casper-contract"),"."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Add script entries for AssemblyScript to your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". Note that your contract name is used for the name of the WASM file. Replace ",(0,o.kt)("em",{parentName:"p"},"your-contract-name")," with the name of your contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "your-contract-name",\n  ...\n  "scripts": {\n    "asbuild:optimized": "asc assembly/index.ts -b dist/your-contract-name.wasm --validate --optimize --use abort=",\n    "asbuild": "npm run asbuild:optimized",\n    ...\n  },\n  ...\n}\n')),(0,o.kt)("p",null,"In the project root, create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file with the following contents. Replace ",(0,o.kt)("em",{parentName:"p"},"your-contract-name")," with the name of your contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const fs = require("fs");\n\nconst compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/dist/your-contract-name.wasm"));\n\nconst imports = {\n    env: {\n        abort(_msg, _file, line, column) {\n            console.error("abort called at index.ts:" + line + ":" + column);\n        },\n    },\n};\n\nObject.defineProperty(module, "exports", {\n    get: () => new WebAssembly.Instance(compiled, imports).exports,\n});\n')),(0,o.kt)("p",null,"Next, create a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"assembly"),", and in that directory, create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in the following way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "extends": "../node_modules/assemblyscript/std/assembly.json",\n    "include": ["./**/*.ts"]\n}\n')),(0,o.kt)("h2",{id:"sample-smart-contract"},"Sample smart contract"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"assembly")," directory, also create an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," file, where the code for the contract needs to go."),(0,o.kt)("p",null,"You can use the following sample snippet, which demonstrates a simple smart contract that immediately returns an error and writes a message to a block when executed on the Casper Network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'//@ts-nocheck\nimport { Error, ErrorCode } from "casper-contract/error";\n\n// simplest possible feedback loop\nexport function call(): void {\n    Error.fromErrorCode(ErrorCode.None).revert(); // ErrorCode: 1\n}\n')),(0,o.kt)("p",null,"If you prefer a more complicated first contract, you can look at example contracts on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem"},"Casper Ecosystem GitHub")," repository for inspiration."),(0,o.kt)("h2",{id:"compile-to-wasm"},"Compile to WASM"),(0,o.kt)("p",null,"To compile the contract to WASM, use ",(0,o.kt)("em",{parentName:"p"},"npm")," to run the ",(0,o.kt)("em",{parentName:"p"},"asbuild")," script from the project root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run asbuild\n")),(0,o.kt)("p",null,"If the build is successful, there will be a ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," folder in the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," folder and in it should be ",(0,o.kt)("inlineCode",{parentName:"p"},"your-contract-name.wasm"),"."))}d.isMDXComponent=!0}}]);