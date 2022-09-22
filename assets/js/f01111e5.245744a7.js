"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9709],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),l=["components"],i={},s="FAQ - Validators",u={unversionedId:"faq/faq-validator",id:"faq/faq-validator",title:"FAQ - Validators",description:"Node Operations",source:"@site/source/docs/casper/faq/faq-validator.md",sourceDirName:"faq",slug:"/faq/faq-validator",permalink:"/faq/faq-validator",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/faq/faq-validator.md",tags:[],version:"current",frontMatter:{},sidebar:"faq",previous:{title:"FAQ - Developers",permalink:"/faq/faq-developer"}},p={},c=[{value:"Node Operations",id:"node-operations",level:3},{value:"Casper Compatibility",id:"casper-compatibility",level:3}],d={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq---validators"},"FAQ - Validators"),(0,o.kt)("h3",{id:"node-operations"},"Node Operations"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How do I check my node status?")),(0,o.kt)("p",null,"Once your node is running, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"curl -s localhost:8888/status | jq .last_added_block_info")," to query your local server's synchronization status. The output will look similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl -s http://localhost:8888/status | jq .last_added_block_info\n{\n  "hash": "73f398f89dfe2b980634281c0d6be8379b27aedbf4029f699219fafa1e09526c",\n  "timestamp": "2021-07-09T04:56:42.240Z",\n  "era_id": 1090,\n  "height": 106926,\n  "state_root_hash": "5e7bd420cb5d3290cf50036ada510c9c1adcf63198381c398403086f739394c8",\n  "creator": "011752f095ee6d2902540ea4fafd649da4b7b0c2a6e38176fb7f661a0e463d43b4"\n}\n\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What ports are required for casper-node?")),(0,o.kt)("p",null,"Casper-node requires the following ports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"35000 - Required for external visibility"),(0,o.kt)("li",{parentName:"ul"},"7777 - RPC endpoint for interaction with casper-client"),(0,o.kt)("li",{parentName:"ul"},"8888 - REST endpoint for status and metrics (This port allows your node to be part of the network status)"),(0,o.kt)("li",{parentName:"ul"},"9999 - SSE endpoint for event stream"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What '--node-address' do I use for making requests?")),(0,o.kt)("p",null,"If you are running a node, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:7777")," for RPC requests like deploys. For node-health queries, use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost-8888"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"How can I move my node to another machine?")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method One")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the node."),(0,o.kt)("li",{parentName:"ol"},"Copy all data."),(0,o.kt)("li",{parentName:"ol"},"Change the mountpoint."),(0,o.kt)("li",{parentName:"ol"},"Start the node.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method Two")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create another node in parallel."),(0,o.kt)("li",{parentName:"ol"},"Once it is up to date, stop the nodes."),(0,o.kt)("li",{parentName:"ol"},"Swap the associated keys."),(0,o.kt)("li",{parentName:"ol"},"Restart the new node.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Use the following command to copy your node's data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nrsync -av --inplace --sparse  /var/lib/casper/ /new_mount\n\n"))),(0,o.kt)("h3",{id:"casper-compatibility"},"Casper Compatibility"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Does Casper run on ARM?")),(0,o.kt)("p",null,"Casper-node does not work with ARM type servers. You can see our hardware specifications ",(0,o.kt)("a",{parentName:"p",href:"/operators/hardware/"},"here"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"What operating systems are supported for casper-node?")),(0,o.kt)("p",null,"Casper is currently tested and packaged for Ubuntu 18.04 or 20.04.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Do I have to run a node 24/7?")),(0,o.kt)("p",null,"Validators must be online 24/7. Otherwise, they face ejection and loss of rewards as a result of liveness failure. Failure to participate in consensus for one era results in ejection."),(0,o.kt)("p",null,"If you cannot run a node 24/7, you can delegate your tokens to a healthy validator node with good uptime.")))}f.isMDXComponent=!0}}]);