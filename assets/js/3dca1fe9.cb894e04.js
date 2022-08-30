"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9537],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1559:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],s={},c="Accounts",l={unversionedId:"design/accounts",id:"design/accounts",title:"Accounts",description:"accounts-head}",source:"@site/source/docs/casper/design/accounts.md",sourceDirName:"design",slug:"/design/accounts",permalink:"/design/accounts",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/design/accounts.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Execution Semantics",permalink:"/design/execution-semantics"},next:{title:"Block Structure",permalink:"/design/block-structure"}},u={},h=[{value:"Introduction",id:"accounts-intro",level:2},{value:"The <code>Account</code> data structure",id:"accounts-data-structure",level:2},{value:"Permissions model",id:"accounts-permissions",level:2},{value:"Actions and thresholds",id:"accounts-actions-thresholds",level:3},{value:"Associated keys and weights",id:"accounts-associated-keys-weights",level:3},{value:"Key management actions",id:"accounts-key-management",level:3},{value:"Account security and recovery using key management",id:"accounts-recovery",level:3},{value:"Creating an account",id:"accounts-creating",level:2},{value:"The account context",id:"accounts-context",level:2},{value:"Functions for interacting with an account",id:"accounts-api-functions",level:2}],d={toc:h};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"accounts-head"},"Accounts"),(0,i.kt)("h2",{id:"accounts-intro"},"Introduction"),(0,i.kt)("p",null,"An ",(0,i.kt)("em",{parentName:"p"},"account"),' is a cryptographically secured gateway into the Casper system used by entities outside the blockchain (e.g., off-chain components of blockchain-based applications, individual users). All user activity on the Casper blockchain (i.e., "deploys") must originate from an account. Each account has its own context where it can locally store information (e.g., references to useful contracts, metrics, aggregated data from other parts of the blockchain). Each account also has a "main purse" where it can hold Casper tokens (see ',(0,i.kt)("a",{parentName:"p",href:"/design/tokens#tokens-purses-and-accounts"},"Tokens")," for more information)."),(0,i.kt)("p",null,"In this chapter we describe the permission model for accounts, their local storage capabilities, and briefly mention some runtime functions for interacting with accounts."),(0,i.kt)("h2",{id:"accounts-data-structure"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"Account")," data structure"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," contains the following data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A collection of named keys (this plays the same role as the named keys in a ",(0,i.kt)("a",{parentName:"li",href:"/design/global-state#global-state-intro"},"stored contract"),")"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"URef"),' representing the account\'s "main purse"'),(0,i.kt)("li",{parentName:"ul"},'A collections of "associated keys" (see below for more information)'),(0,i.kt)("li",{parentName:"ul"},'"Action thresholds" (see below for more information)')),(0,i.kt)("h2",{id:"accounts-permissions"},"Permissions model"),(0,i.kt)("h3",{id:"accounts-actions-thresholds"},"Actions and thresholds"),(0,i.kt)("p",null,"There are two types of actions an account can perform: a deployment, and key management. A deployment is simply executing some code on the blockchain, while key management involves changing the associated keys (which will be described in more detail later). Key management cannot be performed independently, as all effects to the blockchain must come via a deploy; therefore, a key management action implies that a deployment action is also taking place. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ActionThresholds")," contained in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," data structure set a ",(0,i.kt)("inlineCode",{parentName:"p"},"Weight")," which must be met in order to perform that action. How these weight thresholds can be met is described in the next section. Since a key management action requires a deploy action, the key management threshold should always be greater than or equal to the deploy threshold."),(0,i.kt)("h3",{id:"accounts-associated-keys-weights"},"Associated keys and weights"),(0,i.kt)("p",null,"As mentioned in the introduction, accounts are secured via cryptography. The ",(0,i.kt)("em",{parentName:"p"},"associated keys"),' of an account are the set of public keys which are allowed to provide signatures on deploys for that account. Each associated key has a weight; these weights are used to meet the action thresholds provided in the previous section. Each deploy must be signed by one or more keys associated with the account that deploy is for, and the sum of the weights of those keys must be greater than or equal to the deployment threshold weight for that account. We call the keys that have signed a deploy the "authorizing keys". Similarly, if that deploy contains any key management actions (detailed below), then the sum of the weights of the authorizing keys must be greater than or equal to the key management action threshold of the account.'),(0,i.kt)("p",null,'Note: that any key may be used to help authorize any action; there are no "special keys", all keys contribute their weight in exactly the same way.'),(0,i.kt)("h3",{id:"accounts-key-management"},"Key management actions"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"key management action")," is any change to any of the permissions parameters for the account. This includes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"adding or removing an associated key;"),(0,i.kt)("li",{parentName:"ul"},"changing the weight of an associated key;"),(0,i.kt)("li",{parentName:"ul"},"changing the threshold of any action.")),(0,i.kt)("p",null,"Key management actions have validity rules which prevent a user from locking themselves out of their account. For example, it is not allowed to set a threshold larger than the sum of the weights of all associated keys."),(0,i.kt)("h3",{id:"accounts-recovery"},"Account security and recovery using key management"),(0,i.kt)("p",null,"The purpose of this permissions model is to enable keeping accounts safe from lost or stolen keys, while allowing usage of capabilities of modern mobile devices. For example, it may be convenient to sign deploys from a smart phone in day-to-day usage, and this can be done without worrying about the repercussions of losing the phone. The recommended setup would be to have a low-weight key on the phone, only just enough for the deploy threshold, but not enough for key management, then if the phone is lost or stolen, a key management action using other associated keys from another device (e.g., a home computer) can be used to remove the lost associated key and add a key which resides on a replacement phone."),(0,i.kt)("p",null,'Note: that it is extremely important to ensure there will always be access to a sufficient number of keys to perform the key management action, otherwise future recovery will be impossible (we currently do not support "inactive recovery").'),(0,i.kt)("h2",{id:"accounts-creating"},"Creating an account"),(0,i.kt)("p",null,"Account creation happens automatically when there is a ",(0,i.kt)("a",{parentName:"p",href:"/design/tokens#tokens-purses-and-accounts"},"token transfer")," to a yet unused ",(0,i.kt)("a",{parentName:"p",href:"/design/global-state#global-state-intro"},"identity key"),". When an account is first created, the balance of its main purse is equal to the number of tokens transferred, its action thresholds are equal to 1, and there is one associated key (equal to the public key used to derive the identity key) with weight 1."),(0,i.kt)("h2",{id:"accounts-context"},"The account context"),(0,i.kt)("p",null,"A deploy is a user request to perform some execution on the blockchain (see ",(0,i.kt)("a",{parentName:"p",href:"/design/execution-semantics#execution-semantics-deploys-as-functions"},"Execution Semantics"),' for more information). It contains "payment code" and "session code" which are contracts that contain the logic to be executed. These contracts are executed in the context of the account of the deploy. This means these contracts use the named keys of the account and use the account\'s local storage (i.e., the "root" for the ',(0,i.kt)("a",{parentName:"p",href:"/design/global-state#global-state-intro"},"local keys")," come from the account identity key)."),(0,i.kt)("p",null,"Note: that other contracts called from the session code by ",(0,i.kt)("inlineCode",{parentName:"p"},"call_contract")," are executed in their own context, not the account context. This means, an account (with logic contained in session code) can be used to locally store information relevant to the user owning the account."),(0,i.kt)("h2",{id:"accounts-api-functions"},"Functions for interacting with an account"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/1.0.1/casper_contract/ext_ffi/index.html"},"Casper Rust library")," contains several functions for working with the various account features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casper_add_associated_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casper_remove_associated_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casper_update_associated_key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casper_set_action_threshold")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casper_get_balance")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casper_load_named_keys")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casper_get_named_arg"))))}p.isMDXComponent=!0}}]);