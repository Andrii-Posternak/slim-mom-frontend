"use strict";(self.webpackChunkslim_mom_frontend=self.webpackChunkslim_mom_frontend||[]).push([[559],{332:function(e,r,t){t.d(r,{z:function(){return a}});var n=t(8182),o={container:"Button_container__K9X6Y",button:"Button_button__JBBzO",active:"Button_active__iTrrO Button_button__JBBzO",primary:"Button_primary__9MLUH Button_button__JBBzO",small:"Button_small__jToKs",large:"Button_large__cizxk"},i=t(3329),a=function(e){var r=e.size,t=void 0===r?"small":r,a=e.mainStyle,u=e.type,l=e.children,c=e.handleClick;return(0,i.jsx)("button",{type:u,onClick:c,className:(0,n.Z)(o[t],o[a]),children:l})}},2479:function(e,r,t){t.d(r,{jk:function(){return a},dm:function(){return o},gY:function(){return i}});var n=t(6727),o=n.Ry({email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(6,"Min number of characters is 6").required("Password is required")}),i=n.Ry({name:n.Z_().min(3,"Min number of characters is 6").max(15,"Max number of characters is 15").required("Name is required"),email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(6,"Min number of characters is 6").required("Password is required")}),a=n.Ry({height:n.Rx().min(50).max(250).required(),age:n.Rx().min(1).max(100).required(),currentWeight:n.Rx().min(5).max(250).required(),desiredWeight:n.Rx().min(5).max(250).required(),bloodType:n.Rx().required()});n.Ry({date:n.hT().required(),product:n.Z_().required(),weight:n.Rx().positive().required()})},559:function(e,r,t){t.r(r),t.d(r,{MainPage:function(){return Se}});var n=t(9439),o=t(5705),i=t(2791),a=function(e,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(e,r)},u=function(){return(u=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};function l(e){var r="function"==typeof Symbol&&e[Symbol.iterator],t=0;return r?r.call(e):{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}}}function c(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,o,i=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}function s(e){return this instanceof s?(this.v=e,this):new s(e)}var f=Object.freeze({__proto__:null,__extends:function(e,r){function t(){this.constructor=e}a(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)},get __assign(){return u},__rest:function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},__decorate:function(e,r,t,n){var o,i=arguments.length,a=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a},__param:function(e,r){return function(t,n){r(t,n,e)}},__metadata:function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},__awaiter:function(e,r,t,n){return new(t||(t=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function u(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new t((function(r){r(e.value)})).then(a,u)}l((n=n.apply(e,r||[])).next())}))},__generator:function(e,r){var t,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(e){i=[6,e],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},__exportStar:function(e,r){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])},__values:l,__read:c,__spread:function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(c(arguments[r]));return e},__spreadArrays:function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),o=0;for(r=0;r<t;r++)for(var i=arguments[r],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n},__await:s,__asyncGenerator:function(e,r,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=t.apply(e,r||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(r){return new Promise((function(t,n){i.push([e,r,t,n])>1||u(e,r)}))})}function u(e,r){try{(t=o[e](r)).value instanceof s?Promise.resolve(t.value.v).then(l,c):f(i[0][2],t)}catch(e){f(i[0][3],e)}var t}function l(e){u("next",e)}function c(e){u("throw",e)}function f(e,r){e(r),i.shift(),i.length&&u(i[0][0],i[0][1])}},__asyncDelegator:function(e){var r,t;return r={},n("next"),n("throw",(function(e){throw e})),n("return"),r[Symbol.iterator]=function(){return this},r;function n(n,o){r[n]=e[n]?function(r){return(t=!t)?{value:s(e[n](r)),done:"return"===n}:o?o(r):r}:o}},__asyncValues:function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,t=e[Symbol.asyncIterator];return t?t.call(e):(e=l(e),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(t){r[t]=e[t]&&function(r){return new Promise((function(n,o){!function(e,r,t,n){Promise.resolve(n).then((function(r){e({value:r,done:t})}),r)}(n,o,(r=e[t](r)).done,r.value)}))}}},__makeTemplateObject:function(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e},__importStar:function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r},__importDefault:function(e){return e&&e.__esModule?e:{default:e}}}),d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof t.g?t.g:"undefined"!=typeof self?self:{};function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _(e,r){return e(r={exports:{}},r.exports),r.exports}var p=_((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){void 0===r&&(r=0);var t=i.useRef(!1),n=i.useRef(),o=i.useRef(e),a=i.useCallback((function(){return t.current}),[]),u=i.useCallback((function(){t.current=!1,n.current&&clearTimeout(n.current),n.current=setTimeout((function(){t.current=!0,o.current()}),r)}),[r]),l=i.useCallback((function(){t.current=null,n.current&&clearTimeout(n.current)}),[]);return i.useEffect((function(){o.current=e}),[e]),i.useEffect((function(){return u(),l}),[r]),[a,l,u]}}));h(p);var m=h(_((function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var t=f.__importDefault(p);r.default=function(e,r,n){void 0===r&&(r=0),void 0===n&&(n=[]);var o=t.default(e,r),a=o[0],u=o[1],l=o[2];return i.useEffect(l,n),[a,u]}}))),y=/^\[object .+?Constructor\]$/,v=/^(?:0|[1-9]\d*)$/,g="object"==typeof d&&d&&d.Object===Object&&d,b="object"==typeof self&&self&&self.Object===Object&&self,j=g||b||Function("return this")();function x(e,r,t){switch(t.length){case 0:return e.call(r);case 1:return e.call(r,t[0]);case 2:return e.call(r,t[0],t[1]);case 3:return e.call(r,t[0],t[1],t[2])}return e.apply(r,t)}function w(e,r){return!(!e||!e.length)&&function(e,r,t){if(r!=r)return function(e,r,t,n){for(var o=e.length,i=-1;++i<o;)if(r(e[i],i,e))return i;return-1}(e,S);for(var n=-1,o=e.length;++n<o;)if(e[n]===r)return n;return-1}(e,r)>-1}function C(e,r){for(var t=-1,n=e?e.length:0,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o}function O(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e}function S(e){return e!=e}function F(e,r){return e.has(r)}function B(e,r){return function(t){return e(r(t))}}var N,E=Array.prototype,P=Function.prototype,k=Object.prototype,D=j["__core-js_shared__"],T=(N=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",R=P.toString,q=k.hasOwnProperty,M=k.toString,I=RegExp("^"+R.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=j.Symbol,A=B(Object.getPrototypeOf,Object),J=k.propertyIsEnumerable,V=E.splice,Z=z?z.isConcatSpreadable:void 0,L=Object.getOwnPropertySymbols,W=Math.max,$=ee(j,"Map"),G=ee(Object,"create");function H(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function K(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function Q(e){var r=-1,t=e?e.length:0;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}function U(e){var r=-1,t=e?e.length:0;for(this.__data__=new Q;++r<t;)this.add(e[r])}function X(e,r){for(var t,n,o=e.length;o--;)if((t=e[o][0])===(n=r)||t!=t&&n!=n)return o;return-1}function Y(e,r){var t,n,o=e.__data__;return("string"==(n=typeof(t=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t)?o["string"==typeof r?"string":"hash"]:o.map}function ee(e,r){var t=function(e,r){return null==e?void 0:e[r]}(e,r);return function(e){return!(!de(e)||(r=e,T&&T in r))&&(fe(e)||function(e){var r=!1;if(null!=e&&"function"!=typeof e.toString)try{r=!!(e+"")}catch(e){}return r}(e)?I:y).test(function(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var r}(t)?t:void 0}H.prototype.clear=function(){this.__data__=G?G(null):{}},H.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},H.prototype.get=function(e){var r=this.__data__;if(G){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return q.call(r,e)?r[e]:void 0},H.prototype.has=function(e){var r=this.__data__;return G?void 0!==r[e]:q.call(r,e)},H.prototype.set=function(e,r){return this.__data__[e]=G&&void 0===r?"__lodash_hash_undefined__":r,this},K.prototype.clear=function(){this.__data__=[]},K.prototype.delete=function(e){var r=this.__data__,t=X(r,e);return!(t<0)&&(t==r.length-1?r.pop():V.call(r,t,1),!0)},K.prototype.get=function(e){var r=this.__data__,t=X(r,e);return t<0?void 0:r[t][1]},K.prototype.has=function(e){return X(this.__data__,e)>-1},K.prototype.set=function(e,r){var t=this.__data__,n=X(t,e);return n<0?t.push([e,r]):t[n][1]=r,this},Q.prototype.clear=function(){this.__data__={hash:new H,map:new($||K),string:new H}},Q.prototype.delete=function(e){return Y(this,e).delete(e)},Q.prototype.get=function(e){return Y(this,e).get(e)},Q.prototype.has=function(e){return Y(this,e).has(e)},Q.prototype.set=function(e,r){return Y(this,e).set(e,r),this},U.prototype.add=U.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},U.prototype.has=function(e){return this.__data__.has(e)};var re=L?B(L,Object):pe,te=L?function(e){for(var r=[];e;)O(r,re(e)),e=A(e);return r}:pe;function ne(e){return ce(e)||ae(e)||!!(Z&&e&&e[Z])}function oe(e,r){return!!(r=null==r?9007199254740991:r)&&("number"==typeof e||v.test(e))&&e>-1&&e%1==0&&e<r}function ie(e){if("string"==typeof e||function(e){return"symbol"==typeof e||he(e)&&"[object Symbol]"==M.call(e)}(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}function ae(e){return function(e){return he(e)&&se(e)}(e)&&q.call(e,"callee")&&(!J.call(e,"callee")||"[object Arguments]"==M.call(e))}var ue,le,ce=Array.isArray;function se(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!fe(e)}function fe(e){var r=de(e)?M.call(e):"";return"[object Function]"==r||"[object GeneratorFunction]"==r}function de(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}function he(e){return!!e&&"object"==typeof e}function _e(e){return se(e)?function(e,r){var t=ce(e)||ae(e)?function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}(e.length,String):[],n=t.length,o=!!n;for(var i in e)!r&&!q.call(e,i)||o&&("length"==i||oe(i,n))||t.push(i);return t}(e,!0):function(e){if(!de(e))return function(e){var r=[];if(null!=e)for(var t in Object(e))r.push(t);return r}(e);var r,t,n=(t=(r=e)&&r.constructor,r===("function"==typeof t&&t.prototype||k)),o=[];for(var i in e)("constructor"!=i||!n&&q.call(e,i))&&o.push(i);return o}(e)}function pe(){return[]}var me=(ue=function(e,r){return null==e?{}:(r=C(function e(r,t,n,o,i){var a=-1,u=r.length;for(n||(n=ne),i||(i=[]);++a<u;){var l=r[a];t>0&&n(l)?t>1?e(l,t-1,n,o,i):O(i,l):o||(i[i.length]=l)}return i}(r,1),ie),function(e,r){return function(e,r,t){for(var n=-1,o=r.length,i={};++n<o;){var a=r[n],u=e[a];t(u,a)&&(i[a]=u)}return i}(e=Object(e),r,(function(r,t){return t in e}))}(e,function(e,r,t,n){var o=-1,i=w,a=!0,u=e.length,l=[],c=r.length;if(!u)return l;r.length>=200&&(i=F,a=!1,r=new U(r));e:for(;++o<u;){var s=e[o],f=s;if(s=0!==s?s:0,a&&f==f){for(var d=c;d--;)if(r[d]===f)continue e;l.push(s)}else i(r,f,n)||l.push(s)}return l}(function(e){return function(e,r,t){var n=r(e);return ce(e)?n:O(n,t(e))}(e,_e,te)}(e),r)))},le=W(void 0===le?ue.length-1:le,0),function(){for(var e=arguments,r=-1,t=W(e.length-le,0),n=Array(t);++r<t;)n[r]=e[le+r];r=-1;for(var o=Array(le+1);++r<le;)o[r]=e[r];return o[le]=n,x(ue,this,o)}),ye=function(e,r){var t=e.initialValues,n=r.name,o=r.hashInitials,a=r.hashSpecificity,u=n+"_",l=(0,i.useMemo)((function(){return o?""+u+function(e,r){void 0===r&&(r=7);var t=0;try{for(var n=JSON.stringify(e).replace(/\{|\"|\}|\:|,/g,""),o=n.length,i=0;i<o;i++)t+=n.charCodeAt(i)*r}catch(e){t=0}return t}(t,a):n}),[n,o,JSON.stringify(t),a]),c=function(e){var r=e.storage,t=void 0===r?"localStorage":r,n=function(){var e=(0,i.useState)(!1),r=e[0],t=e[1];return(0,i.useEffect)((function(){return t(!0)}),[]),r}()&&!!window;switch(t){case"sessionStorage":return n?window.sessionStorage:void 0;case"localStorage":return n?window.localStorage:void 0;default:return t}}(r);return[(0,i.useMemo)((function(){return c?c.getItem(l):null}),[l,c]),(0,i.useCallback)((function(e){c&&(c.setItem(l,JSON.stringify(e)),Object.keys(c).forEach((function(e){e.indexOf(u)>-1&&e!==l&&c.removeItem(e)})))}),[c])]},ve=(0,i.memo)((function(e){return function(e,r){var t=r.debounce,n=void 0===t?300:t,o=r.persistInvalid,a=r.ignoreValues,l=e.values,c=e.setValues,s=e.isValid,f=e.initialValues,d=ye(e,r),h=d[0],_=d[1],p=JSON.stringify(l),y=(0,i.useCallback)((function(){if(s||o){var e=a?me(l,a):l;_(e)}}),[p,s,o]);(0,i.useEffect)((function(){if(h)try{var e=JSON.parse(h),r=u(u({},f),e);p!==JSON.stringify(r)&&c(r)}catch(e){console.error("Parse persisted values is not possible",e)}}),[h]),m(y,n,[p,s,o])}((0,o.u6)(),e),null})),ge={container:"DailyCaloriesForm_container__z94EE",caloriesForm:"DailyCaloriesForm_caloriesForm__CjEzo",form_button:"DailyCaloriesForm_form_button__+DDQQ",labelText:"DailyCaloriesForm_labelText__G+pBd",labelContainer:"DailyCaloriesForm_labelContainer__lo97o",formContainerF:"DailyCaloriesForm_formContainerF__z+3qH",formContainerS:"DailyCaloriesForm_formContainerS__-eZFl",caloriesFormErrorContainer:"DailyCaloriesForm_caloriesFormErrorContainer__BGDXs",caloriesFormError:"DailyCaloriesForm_caloriesFormError__h-xJl",radioButtonContainer:"DailyCaloriesForm_radioButtonContainer__91ucI",radioButtonList:"DailyCaloriesForm_radioButtonList__iE1rE",check:"DailyCaloriesForm_check__JP1e-",formContainerMain:"DailyCaloriesForm_formContainerMain__+kjzo",formContainerLeft:"DailyCaloriesForm_formContainerLeft__kDDqU",formContainerRight:"DailyCaloriesForm_formContainerRight__r2vV7",radioButton:"DailyCaloriesForm_radioButton__LfytD"},be=t(2479),je=t(332),xe=t(3329),we=function(){var e=function(e){var r=e.label,t=e.type,n=e.value,i=e.name,a=e.onChange,u=e.onBlur;return(0,xe.jsxs)("label",{children:[(0,xe.jsx)(o.gN,{required:!0,type:t,value:n,name:i,onChange:a,onBlur:u}),(0,xe.jsx)("div",{className:ge.labelText,children:r})]})},r=function(e){var r=e.name,t=e.value,n=e.id,i=e.onChange,a=e.onBlur;return(0,xe.jsxs)("li",{children:[(0,xe.jsx)(o.gN,{type:"radio",value:t,name:r,id:n,onChange:i,onBlur:a}),(0,xe.jsx)("label",{htmlFor:n,children:t}),(0,xe.jsx)("div",{className:ge.check,children:(0,xe.jsx)("div",{className:ge.inside})})]})};return(0,xe.jsx)(xe.Fragment,{children:(0,xe.jsx)(o.J9,{initialValues:{height:"",age:"",weight:"",desiredWeight:"",bloodType:""},validateOnBlur:!0,validationSchema:be.jk,children:function(t){var n=t.values,i=t.errors,a=t.touched,u=t.handleChange,l=t.handleBlur,c=t.handleSubmit;return(0,xe.jsxs)(o.l0,{className:ge.caloriesForm,onSubmit:c,children:[(0,xe.jsx)("h1",{children:"Calculate your daily calorie intake right now"}),(0,xe.jsxs)("div",{className:ge.formContainerMain,children:[(0,xe.jsxs)("div",{className:ge.formContainerLeft,children:[(0,xe.jsxs)("div",{className:ge.labelContainer,children:[(0,xe.jsx)(e,{label:"Height *",type:"number",name:"height",onChange:u,onBlur:l,value:n.height}),(0,xe.jsx)("div",{className:ge.caloriesFormErrorContainer,children:a.height&&i.height&&(0,xe.jsx)("p",{className:ge.caloriesFormError,children:i.height})})]}),(0,xe.jsxs)("div",{className:ge.labelContainer,children:[(0,xe.jsx)(e,{label:"Age *",type:"number",name:"age",onChange:u,onBlur:l,value:n.age}),(0,xe.jsx)("div",{className:ge.caloriesFormErrorContainer,children:a.age&&i.age&&(0,xe.jsx)("p",{className:ge.caloriesFormError,children:i.age})})]}),(0,xe.jsxs)("div",{className:ge.labelContainer,children:[(0,xe.jsx)(e,{label:"Current weight *",type:"number",name:"weight",onChange:u,onBlur:l,value:n.weight}),(0,xe.jsx)("div",{className:ge.caloriesFormErrorContainer,children:a.weight&&i.weight&&(0,xe.jsx)("p",{className:ge.caloriesFormError,children:i.weight})})]})]}),(0,xe.jsxs)("div",{className:ge.formContainerRight,children:[(0,xe.jsxs)("div",{className:ge.labelContainer,children:[(0,xe.jsx)(e,{label:"Desired weight *",type:"number",name:"desiredWeight",onChange:u,onBlur:l,value:n.desiredWeight}),(0,xe.jsx)("div",{className:ge.caloriesFormErrorContainer,children:a.desiredWeight&&i.desiredWeight&&(0,xe.jsx)("p",{className:ge.caloriesFormError,children:i.desiredWeight})})]}),(0,xe.jsxs)("div",{className:ge.radioButtonContainer,children:[(0,xe.jsx)("h3",{children:"Blood type *"}),(0,xe.jsxs)("ul",{className:ge.radioButtonList,children:[(0,xe.jsx)(r,{onChange:u,onBlur:l,name:"bloodType",value:"1",id:"1-radio-button"}),(0,xe.jsx)(r,{onChange:u,onBlur:l,name:"bloodType",value:"2",id:"2-radio-button"}),(0,xe.jsx)(r,{onChange:u,onBlur:l,name:"bloodType",value:"3",id:"3-radio-button"}),(0,xe.jsx)(r,{onChange:u,onBlur:l,name:"bloodType",value:"4",id:"4-radio-button"})]}),(0,xe.jsx)("div",{className:ge.caloriesFormErrorContainer,children:a.bloodType&&i.bloodType&&(0,xe.jsx)("p",{className:ge.caloriesFormError,children:i.bloodType})})]})]})]}),(0,xe.jsx)("div",{className:ge.form_button,children:(0,xe.jsx)(je.z,{size:"large",mainStyle:"active",type:"submit",children:"Start losing weight"})}),(0,xe.jsx)(ve,{name:"calc-form",ignoreValues:"bloodType"})]})}})})},Ce="MainPage_mainPage__6gmrg",Oe=function(){return(0,xe.jsx)("div",{children:(0,xe.jsx)("div",{})})},Se=function(){var e=(0,i.useState)(!1),r=(0,n.Z)(e,2),t=r[0],o=r[1];return(0,xe.jsx)(xe.Fragment,{children:(0,xe.jsxs)("div",{className:Ce,children:[(0,xe.jsx)(we,{handleModalOpen:function(){o(!0)}}),t&&(0,xe.jsx)(Oe,{onClose:function(){o(!1)},isModalOpen:t})]})})}}}]);
//# sourceMappingURL=559.47ab587d.chunk.js.map