"use strict";(self.webpackChunkslim_mom_frontend=self.webpackChunkslim_mom_frontend||[]).push([[223],{332:function(e,r,a){a.d(r,{z:function(){return o}});var n=a(8182),i={container:"Button_container__K9X6Y",button:"Button_button__JBBzO",active:"Button_active__iTrrO Button_button__JBBzO",primary:"Button_primary__9MLUH Button_button__JBBzO",small:"Button_small__jToKs",large:"Button_large__cizxk"},t=a(3329),o=function(e){var r=e.size,a=void 0===r?"small":r,o=e.mainStyle,l=e.type,s=e.children,c=e.handleClick;return(0,t.jsx)("button",{type:l,onClick:c,className:(0,n.Z)(i[a],i[o]),children:s})}},2149:function(e,r,a){a.d(r,{p:function(){return C}});var n=a(1413),i=a(5705),t=a(9961),o={container:"DailyCaloriesForm_container__z94EE",caloriesForm:"DailyCaloriesForm_caloriesForm__CjEzo",form_button:"DailyCaloriesForm_form_button__+DDQQ",labelText:"DailyCaloriesForm_labelText__G+pBd",labelContainer:"DailyCaloriesForm_labelContainer__lo97o",formContainerF:"DailyCaloriesForm_formContainerF__z+3qH",formContainerS:"DailyCaloriesForm_formContainerS__-eZFl",caloriesFormErrorContainer:"DailyCaloriesForm_caloriesFormErrorContainer__BGDXs",caloriesFormError:"DailyCaloriesForm_caloriesFormError__h-xJl",radioButtonContainer:"DailyCaloriesForm_radioButtonContainer__91ucI",radioButtonList:"DailyCaloriesForm_radioButtonList__iE1rE",check:"DailyCaloriesForm_check__JP1e-",formContainerMain:"DailyCaloriesForm_formContainerMain__+kjzo",formContainerLeft:"DailyCaloriesForm_formContainerLeft__kDDqU",formContainerRight:"DailyCaloriesForm_formContainerRight__r2vV7",radioButton:"DailyCaloriesForm_radioButton__LfytD"},l=a(2479),s=a(332),c=a(9434),u=a(3541),d=a(5861),m=a(4687),h=a.n(m),_=a(6382),x=a(1912);x.Z.defaults.baseURL="https://slim-mom-backend-tf5k.onrender.com/api";var p=function(){var e=(0,d.Z)(h().mark((function e(r){var a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.post("/calories/auth",r);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),g=function(){var e=(0,d.Z)(h().mark((function e(r){var a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.post("/calories",r);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),j=(0,_.hg)("calorie/getCalorieAuth",function(){var e=(0,d.Z)(h().mark((function e(r,a){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(r);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",a.rejectWithValue(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,a){return e.apply(this,arguments)}}()),v=(0,_.hg)("calorie/getCalorie",function(){var e=(0,d.Z)(h().mark((function e(r,a){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(r);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",a.rejectWithValue(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,a){return e.apply(this,arguments)}}()),f=a(3329),C=function(e){var r=e.handleModalOpen,a=function(e){var r=e.label,a=e.type,n=e.value,t=e.name,l=e.onChange,s=e.onBlur;return(0,f.jsxs)("label",{children:[(0,f.jsx)(i.gN,{required:!0,type:a,value:n,name:t,onChange:l,onBlur:s}),(0,f.jsx)("div",{className:o.labelText,children:r})]})},d=function(e){var r=e.name,a=e.value,n=e.id,t=e.onChange,l=e.onBlur;return(0,f.jsxs)("li",{children:[(0,f.jsx)(i.gN,{type:"radio",value:a,name:r,id:n,onChange:t,onBlur:l}),(0,f.jsx)("label",{htmlFor:n,children:a}),(0,f.jsx)("div",{className:o.check,children:(0,f.jsx)("div",{className:o.inside})})]})},m=(0,c.I0)(),h=(0,c.v9)(u.uo);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i.J9,{initialValues:{height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:""},validateOnBlur:!0,validationSchema:l.jk,onSubmit:function(e,a){var i=+e.bloodType,t=(0,n.Z)((0,n.Z)({},e),{},{bloodType:i});h?m(j(t)):(m(v(t)),r())},children:function(e){var r=e.values,n=e.errors,l=e.touched,c=e.handleChange,u=e.handleBlur,m=e.handleSubmit;return(0,f.jsxs)(i.l0,{className:o.caloriesForm,onSubmit:m,children:[(0,f.jsx)("h1",{children:"Calculate your daily calorie intake right now"}),(0,f.jsxs)("div",{className:o.formContainerMain,children:[(0,f.jsxs)("div",{className:o.formContainerLeft,children:[(0,f.jsxs)("div",{className:o.labelContainer,children:[(0,f.jsx)(a,{label:"Height *",type:"number",name:"height",onChange:c,onBlur:u,value:r.height}),(0,f.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.height&&n.height&&(0,f.jsx)("p",{className:o.caloriesFormError,children:n.height})})]}),(0,f.jsxs)("div",{className:o.labelContainer,children:[(0,f.jsx)(a,{label:"Age *",type:"number",name:"age",onChange:c,onBlur:u,value:r.age}),(0,f.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.age&&n.age&&(0,f.jsx)("p",{className:o.caloriesFormError,children:n.age})})]}),(0,f.jsxs)("div",{className:o.labelContainer,children:[(0,f.jsx)(a,{label:"Current weight *",type:"number",name:"currentWeight",onChange:c,onBlur:u,value:r.currentWeight}),(0,f.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.currentWeight&&n.currentWeight&&(0,f.jsx)("p",{className:o.caloriesFormError,children:n.currentWeight})})]})]}),(0,f.jsxs)("div",{className:o.formContainerRight,children:[(0,f.jsxs)("div",{className:o.labelContainer,children:[(0,f.jsx)(a,{label:"Desired weight *",type:"number",name:"desiredWeight",onChange:c,onBlur:u,value:r.desiredWeight}),(0,f.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.desiredWeight&&n.desiredWeight&&(0,f.jsx)("p",{className:o.caloriesFormError,children:n.desiredWeight})})]}),(0,f.jsxs)("div",{className:o.radioButtonContainer,children:[(0,f.jsx)("h3",{children:"Blood type *"}),(0,f.jsxs)("ul",{className:o.radioButtonList,children:[(0,f.jsx)(d,{onChange:c,onBlur:u,name:"bloodType",value:"1",id:"1-radio-button"}),(0,f.jsx)(d,{onChange:c,onBlur:u,name:"bloodType",value:"2",id:"2-radio-button"}),(0,f.jsx)(d,{onChange:c,onBlur:u,name:"bloodType",value:"3",id:"3-radio-button"}),(0,f.jsx)(d,{onChange:c,onBlur:u,name:"bloodType",value:"4",id:"4-radio-button"})]}),(0,f.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.bloodType&&n.bloodType&&(0,f.jsx)("p",{className:o.caloriesFormError,children:n.bloodType})})]})]})]}),(0,f.jsx)("div",{className:o.form_button,children:(0,f.jsx)(s.z,{size:"large",mainStyle:"active",type:"submit",children:"Start losing weight"})}),(0,f.jsx)(t.D,{name:"calc-form",ignoreValues:"bloodType"})]})}})})}},7117:function(e,r,a){a.d(r,{m:function(){return d}});var n=a(9434),i="RightSideBar_blockWrapper__4AK5p",t="RightSideBar_heading__uDkBd",o="RightSideBar_list__sE6t3",l="RightSideBar_foodList__O7WPt RightSideBar_list__sE6t3",s="RightSideBar_calorieItem__ceArC",c=a(4095),u=a(3329),d=function(){var e=(0,n.v9)(c.Z7),r=(0,n.v9)(c.Db);return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:i,children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:t,children:"Summary for 20.06.2020"}),(0,u.jsxs)("ul",{className:o,children:[(0,u.jsxs)("li",{className:s,children:[(0,u.jsx)("span",{children:"Left"}),(0,u.jsx)("span",{children:"000 kcal"})]}),(0,u.jsxs)("li",{className:s,children:[(0,u.jsx)("span",{children:"Consumed"}),(0,u.jsx)("span",{children:"000 kcal"})]}),(0,u.jsxs)("li",{className:s,children:[(0,u.jsx)("span",{children:"Daily rate"}),(0,u.jsxs)("span",{children:[r||"000"," kcal"]})]}),(0,u.jsxs)("li",{className:s,children:[(0,u.jsx)("span",{children:"n% of normal"}),(0,u.jsx)("span",{children:"000 kcal"})]})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:t,children:"Food not recommended"}),(0,u.jsx)("ul",{className:l,children:e&&e.length>0?e.map((function(e,r){return(0,u.jsx)("li",{children:(0,u.jsx)("span",{children:e.en})},r)})):(0,u.jsx)("li",{children:(0,u.jsx)("span",{children:"Your diet will be displayed here"})})})]})]})})}},2479:function(e,r,a){a.d(r,{jk:function(){return o},dm:function(){return i},gY:function(){return t}});var n=a(6727),i=n.Ry({email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(6,"Min number of characters is 6").required("Password is required")}),t=n.Ry({name:n.Z_().min(3,"Min number of characters is 6").max(15,"Max number of characters is 15").required("Name is required"),email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(6,"Min number of characters is 6").required("Password is required")}),o=n.Ry({height:n.Rx().min(50).max(250).required(),age:n.Rx().min(1).max(100).required(),currentWeight:n.Rx().min(5).max(250).required(),desiredWeight:n.Rx().min(5).max(250).required(),bloodType:n.Rx().required()});n.Ry({productName:n.Z_().required(),weight:n.Rx().positive().required()})},223:function(e,r,a){a.r(r),a.d(r,{CalculatorPage:function(){return l}});var n=a(2149),i=a(7117),t=a(2576),o=a(3329),l=function(){return(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:t.Z.calculatorPage,children:[(0,o.jsx)(n.p,{}),(0,o.jsx)("div",{className:t.Z.SidebarSection,children:(0,o.jsx)("div",{className:t.Z.SidebarWrap,children:(0,o.jsx)(i.m,{})})})]})})}},2576:function(e,r){r.Z={container:"CalculatorPage_container__iIg-A",calculatorPage:"CalculatorPage_calculatorPage__TGglj",SidebarSection:"CalculatorPage_SidebarSection__uLqNj",SidebarWrap:"CalculatorPage_SidebarWrap__6bJ4T"}}}]);
//# sourceMappingURL=223.8ef60823.chunk.js.map