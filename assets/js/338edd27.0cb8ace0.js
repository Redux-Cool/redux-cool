(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(92)),c={sidebar_position:5,title:"Global and Local Actions"},i={unversionedId:"concepts/global-and-local-actions",id:"concepts/global-and-local-actions",isDocsHomePage:!1,title:"Global and Local Actions",description:"In complex projects, we are usually splitting our reducer functions into separate reducer functions, each managing independent parts of the state. Then, using the combineReducers function of Redux, we are combining it creating one general reducer function. Very often, there is a need to have specific types of actions, which we would like to apply simultaneously to all reducers or to specific reducers. For example, when we have LOGOUT action and during that action, we want to erase all the account-specific data that exists in our Redux state.",source:"@site/docs/concepts/global-and-local-actions.md",sourceDirName:"concepts",slug:"/concepts/global-and-local-actions",permalink:"/docs/concepts/global-and-local-actions",editUrl:"https://github.com/Redux-Cool/redux-cool/edit/master/website/docs/concepts/global-and-local-actions.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Global and Local Actions"},sidebar:"docs",previous:{title:"Actions Creator",permalink:"/docs/concepts/actions-creator"},next:{title:"Usage Guide: Index",permalink:"/docs/guide"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In complex projects, we are usually splitting our reducer functions into separate reducer functions, each managing independent parts of the state. Then, using the ",Object(o.b)("strong",{parentName:"p"},"combineReducers")," function of Redux, we are combining it creating one general reducer function. Very often, there is a need to have specific types of actions, which we would like to apply simultaneously to all reducers or to specific reducers. For example, when we have ",Object(o.b)("strong",{parentName:"p"},"LOGOUT")," action and during that action, we want to erase all the account-specific data that exists in our Redux state."),Object(o.b)("p",null,"The actions have ",Object(o.b)("strong",{parentName:"p"},"Global")," and ",Object(o.b)("strong",{parentName:"p"},"Local")," contexts in ",Object(o.b)("strong",{parentName:"p"},"Redux Cool"),". The actions with Global context can be applied to various Reducers. The actions with Local context can be applied to a specific Reducer."),Object(o.b)("p",null,"As we already know from the topic of ",Object(o.b)("a",{parentName:"p",href:"/docs/concepts/reducers-creator"},"Reducers Creator"),", when we are creating reducers, we are passing a name as the first argument - that is the name of reducer, the purpose of which is to enable us to send Local (reducer specific) actions. For that, it is necessary that the action type includes the reducer name as a prefix. "),Object(o.b)("p",null,"Here we have two reducer functions. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import { reducersCreator } from "redux-cool"\n\nconst first_reducer = reducersCreator(\n    "FIRST", //reducer name\n    {},  // initial state\n    {\n        // ...\n        LOGOUT: (state, action) => {\n            // ...\n        }\n    }\n)\n\n\nconst second_reducer = reducersCreator(\n    "SECOND", //reducer name\n    {},  // initial state\n    {\n        // ...\n        LOGOUT: (state, action) => {\n            // ...\n        }\n    }\n)\n\n')),Object(o.b)("p",null,"As we see from the above example, both of the reducers have ",Object(o.b)("strong",{parentName:"p"},"LOGOUT")," action handlers defined in the reducer tree. "),Object(o.b)("p",null,"If we dispatch an action that has a ",Object(o.b)("inlineCode",{parentName:"p"},'"LOGOUT"')," type, it will be applied to both (we call it ",Object(o.b)("strong",{parentName:"p"},"Global action"),"). But, if we create an action that has a ",Object(o.b)("inlineCode",{parentName:"p"},'"FIRST/LOGOUT"')," type, it will be applied only to the first reducer(we can call it ",Object(o.b)("strong",{parentName:"p"},"Local action"),")."))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);