(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(105)),c={sidebar_position:1,id:"intro",slug:"/"},o={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Redux Cool",description:"Build redux logic, without getting nervous.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/redux-cool/docs/",editUrl:"https://github.com/Redux-Cool/redux-cool/edit/gh-pages/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",slug:"/"},sidebar:"tutorialSidebar"},l=[{value:"Description",id:"description",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"API",id:"api",children:[{value:"<code>reducersCreator()</code>",id:"reducerscreator",children:[]},{value:"<code>actionsCreator</code>",id:"actionscreator",children:[]}]},{value:"Maintainers",id:"maintainers",children:[]},{value:"License",id:"license",children:[]}],b={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Build redux logic, without getting nervous."))),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Redux Cool")," is an awesome tiny package that allows you to easily and intuitively write redux logic. It is the collection of two separate libraries, one designed to create reducer functions and the other to create action objects: (",Object(i.b)("a",{parentName:"p",href:"https://github.com/Ruben-Arushanyan/reducers-creator"},"Reducers Creator")," for creating reducers functions and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Ruben-Arushanyan/actions-creator"},"Actions Creator")," for creating actions object)"),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install redux redux-cool\n")),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Create a file named ",Object(i.b)("em",{parentName:"p"},"src/accountReducer.js")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"src/accountReducer.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'import {reducersCreator} from "redux-cool"\n\nconst initialState = {\n    profile: {\n        data: null\n    }\n}\n\nconst reducerTree = {\n\n    PROFILE: {\n\n        SET: (state, action) => {\n            const [data] = action.args\n            state.profile.data = data\n        },\n\n        UPDATE_EMAIL: (state, action) => {\n            const [email] = action.args\n            state.profile.data.email = email\n        }\n    },\n\n    CLEAR: (state, action) => {\n        state.profile.data = null\n    }\n\n}\n\nconst accountReducer = reducersCreator(\n    "ACCOUNT",\n    initialState,\n    reducerTree,\n)\n\nexport default accountReducer\n\n')),Object(i.b)("p",null,"As you can see in the example above, we create an ",Object(i.b)("strong",{parentName:"p"},"accountReducer")," by calling the ",Object(i.b)("inlineCode",{parentName:"p"},"reducersCreator")," function and passing it three arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},'"ACCOUNT"'))," : It's the ",Object(i.b)("em",{parentName:"li"},"name")," of the reducer, it can be any string."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"initialState"))," : It's the ",Object(i.b)("em",{parentName:"li"},"initial state")," of the reducer, it can be any object"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"reducerTree"))," : It's an object ",Object(i.b)("em",{parentName:"li"},"(can have any deep and nested structure)")," that intuitively and in readible ways, defines ",Object(i.b)("em",{parentName:"li"},"handler functions")," for reducer. ",Object(i.b)("em",{parentName:"li"},"Handler functions")," as an argument take ",Object(i.b)("strong",{parentName:"li"},"state")," and ",Object(i.b)("strong",{parentName:"li"},"action")," and update the state. It automatically uses the ",Object(i.b)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"immer library")," to do ",Object(i.b)("strong",{parentName:"li"},"immutable updates")," with normal mutative code, like ",Object(i.b)("inlineCode",{parentName:"li"},"state.profile.data.email = email"),". There is no need to manually do immutable updates and return the result. If you are not familiar with the ",Object(i.b)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"immer library"),", please look at it, it is very important.")),Object(i.b)("p",null,"As a result, we get the ",Object(i.b)("strong",{parentName:"p"},"accountReducer")," function, which can handle the following type of actions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"types: ",Object(i.b)("inlineCode",{parentName:"li"},'"PROFILE/SET"')," or ",Object(i.b)("inlineCode",{parentName:"li"},'"ACCOUNT/PROFILE/SET"')),Object(i.b)("li",{parentName:"ul"},"types: ",Object(i.b)("inlineCode",{parentName:"li"},'"PROFILE/UPDATE_EMAIL"')," or ",Object(i.b)("inlineCode",{parentName:"li"},'"ACCOUNT/PROFILE/UPDATE_EMAIL"')),Object(i.b)("li",{parentName:"ul"},"types: ",Object(i.b)("inlineCode",{parentName:"li"},'"CLEAR"')," or ",Object(i.b)("inlineCode",{parentName:"li"},'"ACCOUNT/CLEAR"'))),Object(i.b)("p",null,"As you can see, each handler can work with ",Object(i.b)("strong",{parentName:"p"},"two")," types of actions, one consisting of the path described in ",Object(i.b)("em",{parentName:"p"},"reducerTree"),", the second is the same as the first type plus the reducer name that should be added from the beginning like ",Object(i.b)("inlineCode",{parentName:"p"},'"CLEAR"')," and ",Object(i.b)("inlineCode",{parentName:"p"},'"ACCOUNT/CLEAR"'),". That is the most important and useful feature of this library:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"In both cases (",Object(i.b)("inlineCode",{parentName:"p"},'"CLEAR"')," and ",Object(i.b)("inlineCode",{parentName:"p"},'"ACCOUNT/CLEAR"'),"), the ",Object(i.b)("strong",{parentName:"p"},"CLEAR")," handler is called in the         ",Object(i.b)("strong",{parentName:"p"},"accountReducer"),", but when we have multiple reducers that have the ",Object(i.b)("strong",{parentName:"p"},"CLEAR")," handler and we need to clear the state of all reducers, we must use ",Object(i.b)("inlineCode",{parentName:"p"},'"CLEAR"')," action type, but if we need to delete only the ",Object(i.b)("strong",{parentName:"p"},"ACCOUNT")," reducer state we must use the ",Object(i.b)("inlineCode",{parentName:"p"},'"ACCOUNT/CLEAR"')," action type.")),Object(i.b)("p",null,"Now that we have the ",Object(i.b)("strong",{parentName:"p"},"accountReducer"),", let's create the redux store."),Object(i.b)("p",null,"Create a file named ",Object(i.b)("em",{parentName:"p"},"src/store.js")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"src/store.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import {createStore} from \"redux\"\nimport {actionsCreator} from \"redux-cool\"\nimport accountReducer from \"./accountReducer.js\"\n\n// Create Store\nconst store = createStore(accountReducer)\n\n// Dispatch Set Profile Action\nstore.dispatch(actionsCreator.PROFILE.SET({\n        email: 'test@test',\n        name: 'Test'\n    })\n)\nconsole.log(store.getState())\n// {\n//     profile: {\n//         data: {email: 'test@test', name: 'Test'}\n//     }\n// }\n\n\n// Dispatch Update Email Action\nstore.dispatch(actionsCreator.PROFILE.UPDATE_EMAIL('test2@test2'))\nconsole.log(store.getState())\n// {\n//     profile: {\n//         data: {email: 'test2@test2', name: 'Test'}\n//     }\n// }\n\n\n\n// Dispatch Clear Email Action\nstore.dispatch(actionsCreator.CLEAR())\nconsole.log(store.getState())\n// {\n//     profile: {\n//         data: null\n//     }\n// }\n\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"reducerscreator"},Object(i.b)("inlineCode",{parentName:"h3"},"reducersCreator()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"reducersCreator(name, initialState, reducerTree)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"name"))," <String",">"," ",Object(i.b)("em",{parentName:"li"},"name")," of the reducer, it can be any string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"initialState"))," <Object",">"," ",Object(i.b)("em",{parentName:"li"},"initial state")," of the reducer, it can be any object"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"reducerTree"))," <Object",">"," object ",Object(i.b)("em",{parentName:"li"},"(can have any deep and nested structure)")," that intuitively and in readible ways, defines ",Object(i.b)("em",{parentName:"li"},"handler functions")," for reducer. ",Object(i.b)("em",{parentName:"li"},"Handler functions")," as an argument take ",Object(i.b)("strong",{parentName:"li"},"state")," and ",Object(i.b)("strong",{parentName:"li"},"action")," and update the state. It automatically uses the ",Object(i.b)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"immer library")," to do ",Object(i.b)("strong",{parentName:"li"},"immutable updates")," with normal mutative code, like ",Object(i.b)("inlineCode",{parentName:"li"},"state.profile.data.email = email"),". There is no need to manually do immutable updates and return the result. If you are not familiar with the ",Object(i.b)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"immer library"),", please look at it, it is very important.")),Object(i.b)("h3",{id:"actionscreator"},Object(i.b)("inlineCode",{parentName:"h3"},"actionsCreator")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"actionsCreator.ANY.ACTION.TYPE(...args)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"see: ",Object(i.b)("a",{parentName:"li",href:"https://github.com/Ruben-Arushanyan/actions-creator"},"Actions Creator library"),"  for details")),Object(i.b)("h2",{id:"maintainers"},"Maintainers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ruben-arushanyan"},"Ruben Arushanyan"))),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/ruben-arushanyan/redux-cool/blob/master/LICENSE"},"MIT")))}s.isMDXComponent=!0}}]);