"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7256],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=i,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return t?o.createElement(m,r(r({ref:n},l),{},{components:t})):o.createElement(m,r({ref:n},l))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1650:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var o=t(3117),i=t(102),a=(t(7294),t(3905)),r=["components"],s={},c="Network Communication",d={unversionedId:"design/p2p",id:"design/p2p",title:"Network Communication",description:"communications-head}",source:"@site/source/docs/casper/design/p2p.md",sourceDirName:"design",slug:"/design/p2p",permalink:"/design/p2p",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/design/p2p.md",tags:[],version:"current",frontMatter:{},sidebar:"design",previous:{title:"Introduction",permalink:"/design"},next:{title:"Global State",permalink:"/design/global-state"}},l={},p=[{value:"Identity",id:"identity",level:2},{value:"Inter-node connections",id:"inter-node-connections",level:2},{value:"Network",id:"network",level:2},{value:"Gossiping",id:"communications-gossiping",level:2},{value:"Requesting missing data",id:"requesting-missing-data",level:2},{value:"Validation",id:"validation",level:3},{value:"Node Discovery",id:"node-discovery",level:2}],u={toc:p};function h(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"communications-head"},"Network Communication"),(0,a.kt)("h2",{id:"identity"},"Identity"),(0,a.kt)("p",null,"Each node has an identity on the network (which is not the same as its identity in the consensus process). The network identity (ID) is based on the fingerprint of the public key of a self-signed TLS certificate. A node generates a new private key each time it starts, ensuring a unique ID."),(0,a.kt)("p",null,"Each identity is linked with an address, which is an IP and port pair where the node is reachable. This address is also called an endpoint."),(0,a.kt)("h2",{id:"inter-node-connections"},"Inter-node connections"),(0,a.kt)("p",null,"Should a node want to connect to another node with a known endpoint, it opens a TLS connection to the endpoint's address. In the context of common TLS terminology, this makes the connecting node the ",(0,a.kt)("em",{parentName:"p"},"client")," and the remote node the ",(0,a.kt)("em",{parentName:"p"},"server")," for this connection."),(0,a.kt)("p",null,"During connection setup, the client checks the server's certificate, matching the endpoint's expected public identity to ensure we have connected to the right node. Additionally, the TLS parameters of the connection and certificate are required to contain the same ciphers, digests, etc., to protect against downgrade attacks."),(0,a.kt)("p",null,"Simultaneously, the connecting node sends its certificate as the client certificate, allowing the server to perform the same check-in reverse and establish the client's ID. At the end of the process, both nodes can be sure to which peer they are connected."),(0,a.kt)("p",null,"Once a connection is established, the server will immediately seek to connect back to a node based on its endpoint (see ",(0,a.kt)("a",{parentName:"p",href:"#node-discovery"},"Node Discovery")," on how the server finds endpoints) if it is a one-way connection. If a bidirectional connection setup cannot be established within a certain amount of time, all peer ID connections are dropped."),(0,a.kt)("p",null,"Connections are used for sending messages one-way only; only the node initiating a connection will send messages on it."),(0,a.kt)("h2",{id:"network"},"Network"),(0,a.kt)("p",null,"As soon as a node has connected to one node in the network, it partakes in ",(0,a.kt)("a",{parentName:"p",href:"#node-discovery"},"Node Discovery"),". In general, any node will attempt to connect to any other node on the network it finds as described above, leading to a fully connected network."),(0,a.kt)("p",null,"Two classes of data transfers happen in the network; broadcasts and gossiping. A broadcast message is sent once, without guarantees, to all the nodes connected to it. The process of gossiping is described further below."),(0,a.kt)("p",null,"In general, only consensus messages, which are only sent by active validators, are broadcast. Everything else is gossipped."),(0,a.kt)("h2",{id:"communications-gossiping"},"Gossiping"),(0,a.kt)("p",null,"Multiple types of objects are gossipped, the most prominent ones being blocks, deploys, and endpoints (see ",(0,a.kt)("a",{parentName:"p",href:"#identity"},"Identity"),"). Each of these objects is immutable and can be identified by a unique hash."),(0,a.kt)("p",null,"Gossiping is a process of distributing a value across the entire network without directly sending it to each node. This process allows only a subset of nodes to be connected to the original sender and spreading the bandwidth and processing requirements across the network at the cost of latency and overall bandwidth consumed."),(0,a.kt)("p",null,"The process can be summarized as follows:"),(0,a.kt)("p",null,"Given a message ",(0,a.kt)("em",{parentName:"p"},"M")," to gossip, the desired saturation ",(0,a.kt)("em",{parentName:"p"},"S"),", and an infection limit ",(0,a.kt)("em",{parentName:"p"},"L"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pick a subset ",(0,a.kt)("em",{parentName:"li"},"T")," of ",(0,a.kt)("em",{parentName:"li"},"K")," nodes from all currently connected nodes."),(0,a.kt)("li",{parentName:"ol"},"Send ",(0,a.kt)("em",{parentName:"li"},"M")," to each node in ",(0,a.kt)("em",{parentName:"li"},"T"),", noting which nodes were already infected (a node is considered infected if it already had received or known ",(0,a.kt)("em",{parentName:"li"},"M"),")."),(0,a.kt)("li",{parentName:"ol"},"For every node shown as already infected, add another random node outside to ",(0,a.kt)("em",{parentName:"li"},"T")," and send it ",(0,a.kt)("em",{parentName:"li"},"M"),", again noting the response."),(0,a.kt)("li",{parentName:"ol"},"End when we confirm infection of ",(0,a.kt)("em",{parentName:"li"},"L")," new nodes or encountered ",(0,a.kt)("em",{parentName:"li"},"S")," already infected nodes.")),(0,a.kt)("p",null,"Through this process, a message will spread to almost all nodes over time."),(0,a.kt)("h2",{id:"requesting-missing-data"},"Requesting missing data"),(0,a.kt)("p",null,"While gossiping and broadcasting are sufficient to distribute data across the network in most cases, nodes can also request missing data from peers should they require it. A common example is a missing deploy from a block."),(0,a.kt)("h3",{id:"validation"},"Validation"),(0,a.kt)("p",null,"Objects have a concept of dependencies. For example, a block depends on all the deploys whose hashes are listed inside it. A node considers any object valid if all of its dependencies are available on the local node."),(0,a.kt)("p",null,"Should a node receive an object from a peer that is not valid yet, it will attempt to complete its validation before processing it further. In the case of gossiping, this means pausing the gossiping of the object until all its dependencies can be retrieved."),(0,a.kt)("p",null,"Any node is responsible for only propagating valid objects. Should a node not retrieve all missing dependencies of an object from the peer that sent it, it may punish the peer for doing so."),(0,a.kt)("h2",{id:"node-discovery"},"Node Discovery"),(0,a.kt)("p",null,"Node discovery happens by each node periodically gossiping its public address. Upon receiving an address via gossip, each node immediately tries to establish a connection to it and notes the resulting endpoint, if successful."))}h.isMDXComponent=!0}}]);