"use strict";(self.webpackChunkredux_cool_website=self.webpackChunkredux_cool_website||[]).push([[403],{4973:function(e,t,n){n.d(t,{Z:function(){return d},I:function(){return s}});var r=n(7294),o=/{\w+}/g,a="{}";function l(e,t){var n=[],l=e.replace(o,(function(e){var o=e.substr(1,e.length-2),l=null==t?void 0:t[o];if(void 0!==l){var u=r.isValidElement(l)?l:String(l);return n.push(u),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?l.split(a).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):l.split(a).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function u(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return l(t,n)}var i=n(4644);function c(e){var t,n=e.id,r=e.message;return null!==(t=i[null!=n?n:r])&&void 0!==t?t:r}function s(e,t){var n,r=e.message;return l(null!==(n=c({message:r,id:e.id}))&&void 0!==n?n:r,t)}function d(e){var t,n=e.children,o=e.id,a=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var l=null!==(t=c({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(u,{values:a},l)}},6403:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(7294),o=n(6010),a=n(4973),l="popup_1cqI",u="buttonContainer_3cXp";function i(e){var t=e.onReload,n=(0,r.useState)(!0),i=n[0],c=n[1];return i&&r.createElement("div",{className:(0,o.Z)("alert","alert--secondary",l)},r.createElement("p",null,r.createElement(a.Z,{id:"theme.PwaReloadPopup.info",description:"The text for PWA reload popup"},"New version available")),r.createElement("div",{className:u},r.createElement("button",{className:"button button--link",type:"button",onClick:function(){c(!1),t()}},r.createElement(a.Z,{id:"theme.PwaReloadPopup.refreshButtonText",description:"The text for PWA reload button"},"Refresh")),r.createElement("button",{"aria-label":(0,a.I)({id:"theme.PwaReloadPopup.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of PWA reload popup"}),className:"close",type:"button",onClick:function(){return c(!1)}},r.createElement("span",{"aria-hidden":"true"},"\xd7"))))}}}]);