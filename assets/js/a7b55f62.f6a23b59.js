"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9740],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1555:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={},p="Monitoring and Consuming Events",l={unversionedId:"dapp-dev-guide/monitoring-events",id:"dapp-dev-guide/monitoring-events",title:"Monitoring and Consuming Events",description:"The Casper node streams deploy execution effects and finality signatures through an SSE server. The default configuration of the Casper node provides event streaming on the\xa0/events\xa0endpoint and the port specified as the eventstreamserver.address in the node's config.toml, which is by default 9999 on Testnet and Mainnet. The URLs for different types of events are:",source:"@site/source/docs/casper/dapp-dev-guide/monitoring-events.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/monitoring-events",permalink:"/dapp-dev-guide/monitoring-events",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/monitoring-events.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Local Network Testing",permalink:"/dapp-dev-guide/setup-nctl"},next:{title:"Using Casper Signer",permalink:"/dapp-dev-guide/casper-signer"}},c={},d=[{value:"Usage",id:"usage",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring-and-consuming-events"},"Monitoring and Consuming Events"),(0,o.kt)("p",null,"The Casper node streams deploy execution effects and finality signatures through an SSE server. The default configuration of the Casper node provides event streaming on the\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"/events"),"\xa0endpoint and the port specified as the ",(0,o.kt)("inlineCode",{parentName:"p"},"event_stream_server.address")," in the node's ",(0,o.kt)("em",{parentName:"p"},"config.toml"),", which is by default 9999 on ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/tools/peers"},"Testnet")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cspr.live/tools/peers"},"Mainnet"),". The URLs for different types of events are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/events/deploys")," for DeployAccepted events"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/events/sigs")," for FinalitySignature events"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/events/main")," for all other event types")),(0,o.kt)("p",null,"Each URL can have a query string added of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"?start_from=<ID>"),", where ID is an integer representing an old event ID. With this query, you can replay the event stream from that old event onwards. If you specify an event ID that has already been purged from the cache, the server will replay all the cached events."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The server keeps only a limited number of events cached to allow replaying the stream to clients using the ",(0,o.kt)("inlineCode",{parentName:"p"},"?start_from=")," query string. The cache size can be set differently on each node using the ",(0,o.kt)("inlineCode",{parentName:"p"},"event_stream_buffer_length")," value in the ",(0,o.kt)("em",{parentName:"p"},"config.toml"),". By default, it is only 5000. The intended use case is to allow a client consuming the event stream that loses its connection to reconnect and hopefully catch up with events that were emitted while it was disconnected."))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To proceed, you need to acquire the IP address of a ",(0,o.kt)("a",{parentName:"p",href:"/workflow/setup/#acquire-node-address-from-network-peers"},"peer")," on the network."),(0,o.kt)("p",null,"With the following command, you can start watching the event stream for DeployAccepted events. Replace the HOST field with the peer IP address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<HOST>:9999/events/deploys\n")),(0,o.kt)("p",null,"To monitor FinalitySignature events, you can use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<HOST>:9999/events/sigs\n")),(0,o.kt)("p",null,"For all other event types, you can monitor the main endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<HOST>:9999/events/main\n")),(0,o.kt)("p",null,"Replay the event stream from an old event onwards. Replace HOST, EVENT_TYPE, and ID with the values you need in this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://<HOST>:9999/events/<EVENT_TYPE>?start_from=<ID>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://65.21.235.219:9999/events/main?start_from=29267508\n")))}m.isMDXComponent=!0}}]);