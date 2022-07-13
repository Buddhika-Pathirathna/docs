"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8276],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3873:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={},l="Testing Smart Contracts",c={unversionedId:"dapp-dev-guide/writing-contracts/testing",id:"dapp-dev-guide/writing-contracts/testing",title:"Testing Smart Contracts",description:"Introduction",source:"@site/source/docs/casper/dapp-dev-guide/writing-contracts/testing.md",sourceDirName:"dapp-dev-guide/writing-contracts",slug:"/dapp-dev-guide/writing-contracts/testing",permalink:"/dapp-dev-guide/writing-contracts/testing",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/writing-contracts/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Writing a Basic Smart Contract in Rust",permalink:"/dapp-dev-guide/writing-contracts/rust"},next:{title:"Installing Smart Contracts and Querying Global State",permalink:"/dapp-dev-guide/writing-contracts/installing-contracts"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Testing Procedure",id:"testing-procedure",level:3},{value:"Initial Setup",id:"initial-setup",level:3},{value:"Creating a Test Crate",id:"creating-a-test-crate",level:2},{value:"Using <code>cargo-casper</code> to create a project",id:"using-cargo-casper-to-create-a-project",level:3},{value:"Manually creating a test crate in your Rust workspace",id:"manually-creating-a-test-crate-in-your-rust-workspace",level:3},{value:"Defining Dependencies",id:"defining-dependencies",level:3},{value:"Import Builders and Constants",id:"import-builders-and-constants",level:3},{value:"Creating a Test Function",id:"creating-a-test-function",level:2},{value:"Building an Execution Request to Install the Contract",id:"building-an-execution-request-to-install-the-contract",level:3},{value:"Building an Execution Request to Run Session Code",id:"building-an-execution-request-to-run-session-code",level:3},{value:"Testing Contracts that Call Contracts",id:"testing-contracts-that-call-contracts",level:3},{value:"Additional ExecutionRequestBuilder Examples",id:"additional-executionrequestbuilder-examples",level:3},{value:"Evaluating and Comparing Results to Expected Values",id:"evaluating-and-comparing-results-to-expected-values",level:3},{value:"Next Steps and Further Testing",id:"next-steps-and-further-testing",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing-smart-contracts"},"Testing Smart Contracts"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"As part of the Casper local Rust contract development environment, we provide a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/casper-engine-test-support/latest/casper_engine_test_support/"},"testing framework"),". This framework allows testing of new contracts without running a full node. Instead, it creates an instance of the Casper execution engine, which allows for monitoring of changes to global state using assertions and confirms the successful sending of a Deploy containing the smart contract."),(0,i.kt)("p",null,"Our provided test support crate is only one option for testing your Deploys prior to sending them to global state. It provides a degree of assistance, but you are free to create your own testing framework if you prefer."),(0,i.kt)("h3",{id:"testing-procedure"},"Testing Procedure"),(0,i.kt)("p",null,"Testing within the Casper ecosystem involves the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/rust"},"Writing a Smart Contract"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#creating-a-test-crate"},"Creating a Test Crate"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/setup-nctl"},"Local Network Testing"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sending the Deploy to ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/sending-deploys"},"Sending the Tested Deploy")," to a Casper Network"))),(0,i.kt)("h3",{id:"initial-setup"},"Initial Setup"),(0,i.kt)("p",null,"The Casper test crate must be included within a ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html"},"Rust workspace")," alongside the Wasm producing crate to be tested. A workspace consists of a set of packages that share the same ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.lock")," file and output directory."),(0,i.kt)("h2",{id:"creating-a-test-crate"},"Creating a Test Crate"),(0,i.kt)("h3",{id:"using-cargo-casper-to-create-a-project"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"cargo-casper")," to create a project"),(0,i.kt)("p",null,"When using the ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/cargo-casper"},(0,i.kt)("inlineCode",{parentName:"a"},"cargo-casper"))," crate, you can use the following command to generate a project containing both an example contract and a separate test crate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo casper my_project\n")),(0,i.kt)("h3",{id:"manually-creating-a-test-crate-in-your-rust-workspace"},"Manually creating a test crate in your Rust workspace"),(0,i.kt)("p",null,"You can manually create a test crate with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\ncargo new tests\n\n")),(0,i.kt)("p",null,"This will create a Rust Cargo package, including the ",(0,i.kt)("em",{parentName:"p"},"/src/main.rs")," and ",(0,i.kt)("em",{parentName:"p"},"Cargo.toml")," files. As stated above, you should create the test crate within the same workspace as your Wasm producing crates. For this example, we will be using the donation contract outlined in our ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/writing-contracts/rust"},"Writing a Basic Smart Contract in Rust")," tutorial."),(0,i.kt)("p",null,"As such, you should see the following directories within the workspace:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contract")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"donate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"donation_count")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"funds_raised")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tests"))),(0,i.kt)("h3",{id:"defining-dependencies"},"Defining Dependencies"),(0,i.kt)("p",null,"Prior to creating the code for your test, you will want to outline the dependencies within ",(0,i.kt)("em",{parentName:"p"},"Cargo.toml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'\n[package]\nname = "tests"\nversion = "0.1.0"\nedition = "2021"\n\n# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html\n\n[dependencies]\ncasper-engine-test-support = { version = "2.0.3", features = ["test-support"] }\ncasper-execution-engine = "1.4.3"\ncasper-types = "1.4.5"\n\n')),(0,i.kt)("h3",{id:"import-builders-and-constants"},"Import Builders and Constants"),(0,i.kt)("p",null,"Coding for your test crate should take place within the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests")," directory, using the ",(0,i.kt)("em",{parentName:"p"},"main.rs")," file. To begin, you must import external test support. This includes a variety of default values and helper methods that we will use throughout our test. Additionally, you will need to import any ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/sdkspec/types_cl"},"CLTypes")," that you've used within the contract code to be tested."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"\n#[cfg(test)]\nmod tests {\n    // Outlining aspects of the Casper test support crate to include.\n    use casper_engine_test_support::{DEFAULT_ACCOUNT_ADDR, DEFAULT_ACCOUNT_PUBLIC_KEY, DEFAULT_RUN_GENESIS_REQUEST, ExecuteRequestBuilder, InMemoryWasmTestBuilder};\n    // Custom Casper types that will be used within this test.\n    use casper_types::{RuntimeArgs, runtime_args, ContractHash, SecretKey, PublicKey, U512, Key};\n\n")),(0,i.kt)("p",null,"After importing from external crates, you will need to define any global variables or constants used within the test."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'\n    // Calling the contract deploy.\n    const CONTRACT: &str = "contract.wasm";\n    // Calling the session code for a `donate` call.\n    const DONATION: &str = "donate.wasm";\n    // Calling the session code for a `donation_count` call.\n    const DONATION_COUNT: &str = "donation_count.wasm";\n    // Calling the session code for a `funds_raised` call.\n    const FUNDS_RAISED: &str = "funds_raised.wasm";\n\n    // Establishing constants for use during the test.\n    const FUNDRAISER_CONTRACT_HASH: &str = "fundraiser_contract_hash";\n    const ENTRY_POINT_DONATE: &str = "donate";\n    const DONATING_ACCOUNT_KEY: &str = "donating_account_key";\n    const DONATION_AMOUNT: &str = "donation_amount";\n\n')),(0,i.kt)("h2",{id:"creating-a-test-function"},"Creating a Test Function"),(0,i.kt)("p",null,"The test function serves to install the contract and run potential entry points to assert that the contract's behavior matches expectations. To accomplish this, the test will use ",(0,i.kt)("inlineCode",{parentName:"p"},"InMemoryWasmTestBuilder")," to invoke an instance of the execution engine, effectively simulating the process of installing the contract on chain."),(0,i.kt)("p",null,"As part of this process, we will also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_RUN_GENESIS_REQUEST")," to install system contracts necessary for our tests. This includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Auction")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HandlePayment"),"contracts, as well as establishing a default address and funding the associated purse."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"\n#[test]\n    // Creating a test function that will install the contract and then run potential entry points.\n    fn should_be_able_to_install_and_donate() {\n        // Invoke an instance of the execution engine, including helper methods and assistance.\n        let mut builder = InMemoryWasmTestBuilder::default();\n        // Runs genesis to establish genesis accounts and write balances, as well as installing necessary\n        // system contracts - Mint, Auction and HandlePayment.\n        builder.run_genesis(&*DEFAULT_RUN_GENESIS_REQUEST).commit();\n\n")),(0,i.kt)("h3",{id:"building-an-execution-request-to-install-the-contract"},"Building an Execution Request to Install the Contract"),(0,i.kt)("p",null,"The function then uses ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder")," to install the contract to be tested. For this example, we use standard dependencies. Within the execution request, we specify the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR")," established by our genesis builder as the account sending the Deploy and the ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTRACT")," that refers to the Wasm. This Deploy refers to our donation contract as specified in the constants above."),(0,i.kt)("p",null,"After we have built our ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder"),", in this example titled 'contract_creation_request', we will execute the request through ",(0,i.kt)("inlineCode",{parentName:"p"},"builder.exec")," and proceed to adding any addition execution requests as necessary."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"\n        // Installing the contract through an execution request with standard dependencies.\n        let contract_creation_request = ExecuteRequestBuilder::standard(\n            // Use the default account hash included in genesis. Additional accounts can be created for\n            // testing purposes by funding them from this account.\n            *DEFAULT_ACCOUNT_ADDR,\n                // Telling the execution request builder to load up an instance of a deploy with the\n                // module_bytes associated with the contract.wasm.\n                CONTRACT,\n            // Any runtime arguments associated with the creation request, none for this example.\n            runtime_args! {}\n        ).build();\n\n        // Execute this request.\n        builder.exec(contract_creation_request)\n            // Expects the deploy to succeed or crashes the test.\n            .expect_success()\n            // Process the execution result of the previous execute request.\n            .commit();\n\n")),(0,i.kt)("h3",{id:"building-an-execution-request-to-run-session-code"},"Building an Execution Request to Run Session Code"),(0,i.kt)("p",null,"To unit test the installed contract, we will need an entity to call the contract. In this instance, we will use session code included within ",(0,i.kt)("em",{parentName:"p"},"donate.wasm"),". Further, we will need the contract hash of the newly installed donation contract."),(0,i.kt)("p",null,"The following code retrieves the contract hash from within the named keys of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR")," that sent the Deploy containing the contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'\n        // Extracts the contract hash from the named keys of the account in question, the default genesis address.\n        let contract_hash = builder\n            .get_expected_account(*DEFAULT_ACCOUNT_ADDR)\n            .named_keys()\n            .get("fundraiser_contract_hash")\n            .expect("must have contract hash key as part of contract creation")\n            .into_hash()\n            .map(|hash| ContractHash::new(hash))\n            .expect("must get contract hash");\n\n')),(0,i.kt)("p",null,"The session code will use the acquired contract hash to identify the correct contract when calling it. Once again, we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder"),", this time to simulate the execution of session code calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"Donation")," entry point."),(0,i.kt)("p",null,"Our session code identifies the account to use for sending the deploy (",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR"),"), the deploy to be sent (",(0,i.kt)("inlineCode",{parentName:"p"},"DONATION"),") and the runtime arguments required. Namely, the contract will require the contract hash, the donating account key, and the donation amount. In this instance, the session code will be donating 100,000 motes."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"builder")," request follows these details to execute the session code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"\n        // Creating an execution request for the session code that calls the `donation` contract.\n        let session_code_request = ExecuteRequestBuilder::standard(\n            // Again, using the default account hash included with genesis.\n            *DEFAULT_ACCOUNT_ADDR,\n            // Telling the execution request builder to load up an instance of a deploy built from donate.wasm.\n            DONATION,\n            // Including the necessary runtime arguments.\n            runtime_args! {\n                // The fundraiser contract hash as established above, allowing the session code to call the fundraiser contract.\n                FUNDRAISER_CONTRACT_HASH => contract_hash,\n                // The donating account key, established as they key of the default test support genesis account address.\n                DONATING_ACCOUNT_KEY => Key::Account(*DEFAULT_ACCOUNT_ADDR),\n                // The amount to be donated.\n                DONATION_AMOUNT => U512::from(100_000u64)\n            }\n        ).build();\n\n        // Execute this request.\n        builder\n            .exec(session_code_request)\n            .expect_success()\n            .commit();\n\n")),(0,i.kt)("h3",{id:"testing-contracts-that-call-contracts"},"Testing Contracts that Call Contracts"),(0,i.kt)("p",null,"If your system involves multiple contracts, they will all need to be ",(0,i.kt)("a",{parentName:"p",href:"#building-an-execution-request-to-install-the-contract"},"installed")," within your test. The testing framework exists independently of any Casper Networks, so you will need to either write the code yourself or have access to the original installation code of a contract you wish to include. The exceptions to this are system contracts installed as part of the DEFAULT_RUN_GENESIS_REQUEST. These include ",(0,i.kt)("inlineCode",{parentName:"p"},"Mint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Auction"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"HandlePayment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"StandardPayment"),"."),(0,i.kt)("p",null,"Each contract installation will require an additional Wasm file installed through a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder"),". Depending on your requirements as a smart contract author, you may need the use of ",(0,i.kt)("a",{parentName:"p",href:"dapp-dev-guide/tutorials/return-values-tutorial"},"return values")," to interact with stacks of contracts. Interaction between contracts will still require the use of session code to initiate the process, as contracts will not execute actions autonomously."),(0,i.kt)("p",null,"The major difference between calling a contract from session code versus contract code is the ability to use non-standard dependencies for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecuteRequestBuilder"),". Where session code must designate a Wasm file within the standard dependencies, contract code can use one of the four available options for calling other contracts, namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"contract_call_by_hash")," Calling a contract by the its ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractHash"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"contract_call_by_name")," Calling a contract referenced by a named key in the signer's Account context")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"versioned_contract_call_by_hash")," Calling a specific version of a contract using its ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractHash"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"versioned_contract_call_by_name")," Calling a specific version of a contract referenced by a named key in the signer's Account context"))),(0,i.kt)("p",null,"In all cases, the calling contract must also provide an entry point and any necessary runtime arguments."),(0,i.kt)("h3",{id:"additional-executionrequestbuilder-examples"},"Additional ExecutionRequestBuilder Examples"),(0,i.kt)("p",null,"The above example only describes the session code to call ",(0,i.kt)("em",{parentName:"p"},"donate.wasm"),", and the contract installed includes several other entry points. You can find the code for other entry points below."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Additional Code Examples")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"\n        // Creating an execution request for the session code that calls the `donation_count` contract.\n        let donation_count_request =  ExecuteRequestBuilder::standard(\n            *DEFAULT_ACCOUNT_ADDR,\n            DONATION_COUNT,\n            runtime_args! {\n                FUNDRAISER_CONTRACT_HASH => contract_hash,\n                DONATING_ACCOUNT_KEY => Key::Account(*DEFAULT_ACCOUNT_ADDR),\n            }\n        ).build();\n\n        // Execute this request.\n        builder\n            .exec(donation_count_request)\n            .expect_success()\n            .commit();\n\n        // Creating an execution request for the session code that calls the `funds_raised_ contract.\n        let funds_raised_request =  ExecuteRequestBuilder::standard(\n            *DEFAULT_ACCOUNT_ADDR,\n            FUNDS_RAISED,\n            runtime_args! {\n                FUNDRAISER_CONTRACT_HASH => contract_hash\n            }\n        ).build();\n\n        // Execute this request.\n        builder\n            .exec(funds_raised_request)\n            .expect_success()\n            .commit();\n\n"))),(0,i.kt)("h3",{id:"evaluating-and-comparing-results-to-expected-values"},"Evaluating and Comparing Results to Expected Values"),(0,i.kt)("p",null,"After installing the contract and running session code to call it and donate to the returned purse, we can test that the contract operated as intended. We will compare two values within the context of this test: the number of times the account donated and the total funds raised."),(0,i.kt)("p",null,"As we ran ",(0,i.kt)("em",{parentName:"p"},"donate.wasm")," once, the donation count should be 1. During that donation, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR")," donated 100,000 motes, which we will also verify. However, the first step is retrieving the stored value for each and converting it to a ",(0,i.kt)("inlineCode",{parentName:"p"},"u64")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"U512")," value, respectively."),(0,i.kt)("p",null,"To do this, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"builder")," method to retrieve the associated information from the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_ACCOUNT_ADDR"),". We then pass this value through ",(0,i.kt)("inlineCode",{parentName:"p"},"into_t")," to convert it to the value type requried."),(0,i.kt)("p",null,"Once we have the two values, we can then use ",(0,i.kt)("inlineCode",{parentName:"p"},"assert_eq!()")," to compare them against the values we expect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'\n        // Retrieving the donation count and then converting it to a u64 value.\n        let actual_donation_count = builder\n            .query(None, Key::Account(*DEFAULT_ACCOUNT_ADDR), &vec!["donation_count".to_string()])\n            .expect("must get stored value"\n            ).as_cl_value()\n            .expect("must get cl_value")\n            .to_owned()\n            .into_t::<u64>()\n            .unwrap();\n\n        // Comparing the retrieved donation count against the expected value.\n        assert_eq!(actual_donation_count, 1u64);\n\n        // Retrieving the funds raised amount and then converting it to a U512 value.\n        let actual_funds_raised = builder\n            .query(None, Key::Account(*DEFAULT_ACCOUNT_ADDR), &vec!["funds_raised".to_string()])\n            .expect("must get stored value"\n            ).as_cl_value()\n            .expect("must get cl_value")\n            .to_owned()\n            .into_t::<U512>()\n            .unwrap();\n\n        // Comparing the retrieved donation count against the expected value.\n        assert_eq!(U512::from(100_000u64), actual_funds_raised);\n\n')),(0,i.kt)("h2",{id:"next-steps-and-further-testing"},"Next Steps and Further Testing"),(0,i.kt)("p",null,"Unit testing is only one way to test potential Deploys prior to sending them to a Casper network. After unit testing your contract, you may wish to perform ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/setup-nctl"},"local network testing")," using NCTL. This allows you to set up and control multiple local Casper nodes to perform ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/building-dapps/nctl-test"},"testing in a further simulated network environment"),"."),(0,i.kt)("p",null,"You may also wish to test your Deploys on the Casper ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"Testnet"),"."))}h.isMDXComponent=!0}}]);