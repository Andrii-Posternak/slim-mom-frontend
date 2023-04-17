"use strict";(self.webpackChunkslim_mom_frontend=self.webpackChunkslim_mom_frontend||[]).push([[223],{332:function(e,r,a){a.d(r,{z:function(){return o}});var n=a(8182),i={container:"Button_container__K9X6Y",button:"Button_button__JBBzO",active:"Button_active__iTrrO Button_button__JBBzO",primary:"Button_primary__9MLUH Button_button__JBBzO",small:"Button_small__jToKs",large:"Button_large__cizxk"},t=a(3329),o=function(e){var r=e.size,a=void 0===r?"small":r,o=e.mainStyle,l=e.type,s=e.children,c=e.handleClick;return(0,t.jsx)("button",{type:l,onClick:c,className:(0,n.Z)(i[a],i[o]),children:s})}},2149:function(e,r,a){a.d(r,{p:function(){return y}});var n=a(1413),i=a(5705),t=a(9961),o={container:"DailyCaloriesForm_container__z94EE",caloriesForm:"DailyCaloriesForm_caloriesForm__CjEzo",caloriesPadding:"DailyCaloriesForm_caloriesPadding__l6bi1",form_button:"DailyCaloriesForm_form_button__+DDQQ",labelText:"DailyCaloriesForm_labelText__G+pBd",labelContainer:"DailyCaloriesForm_labelContainer__lo97o",formContainerF:"DailyCaloriesForm_formContainerF__z+3qH",formContainerS:"DailyCaloriesForm_formContainerS__-eZFl",caloriesFormErrorContainer:"DailyCaloriesForm_caloriesFormErrorContainer__BGDXs",caloriesFormError:"DailyCaloriesForm_caloriesFormError__h-xJl",radioButtonContainer:"DailyCaloriesForm_radioButtonContainer__91ucI",radioButtonList:"DailyCaloriesForm_radioButtonList__iE1rE",check:"DailyCaloriesForm_check__JP1e-",formContainerMain:"DailyCaloriesForm_formContainerMain__+kjzo",formContainerLeft:"DailyCaloriesForm_formContainerLeft__kDDqU",formContainerRight:"DailyCaloriesForm_formContainerRight__r2vV7",radioButton:"DailyCaloriesForm_radioButton__LfytD"},l=a(2479),s=a(332),c=a(9434),d=a(3541),u=a(5861),m=a(4687),h=a.n(m),_=a(6382),x=a(1912);x.Z.defaults.baseURL="https://slim-mom-backend-tf5k.onrender.com/api";var p=function(){var e=(0,u.Z)(h().mark((function e(r){var a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.post("/calories/auth",r);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),g=function(){var e=(0,u.Z)(h().mark((function e(r){var a;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.Z.post("/calories",r);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),j=(0,_.hg)("calorie/getCalorieAuth",function(){var e=(0,u.Z)(h().mark((function e(r,a){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(r);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",a.rejectWithValue(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,a){return e.apply(this,arguments)}}()),v=(0,_.hg)("calorie/getCalorie",function(){var e=(0,u.Z)(h().mark((function e(r,a){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(r);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",a.rejectWithValue(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,a){return e.apply(this,arguments)}}()),f=a(7689),C=a(3804),b=a(3329),y=function(e){var r=e.handleModalOpen,a=function(e){var r=e.label,a=e.type,n=e.value,t=e.name,l=e.onChange,s=e.onBlur;return(0,b.jsxs)("label",{children:[(0,b.jsx)(i.gN,{required:!0,type:a,value:n,name:t,onChange:l,onBlur:s}),(0,b.jsx)("div",{className:o.labelText,children:r})]})},u=function(e){var r=e.name,a=e.value,n=e.id,t=e.onChange,l=e.onBlur;return(0,b.jsxs)("li",{children:[(0,b.jsx)(i.gN,{type:"radio",value:a,name:r,id:n,onChange:t,onBlur:l}),(0,b.jsx)("label",{htmlFor:n,children:a}),(0,b.jsx)("div",{className:o.check,children:(0,b.jsx)("div",{className:o.inside})})]})},m=(0,c.I0)(),h=(0,f.s0)(),_=(0,c.v9)(d.uo);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(i.J9,{initialValues:{height:"",age:"",currentWeight:"",desiredWeight:"",bloodType:""},validateOnBlur:!0,validationSchema:l.jk,onSubmit:function(e,a){var i=+e.bloodType,t=(0,n.Z)((0,n.Z)({},e),{},{bloodType:i});_?(m(j(t)),h(C._.diary)):(m(v(t)),r())},children:function(e){var r=e.values,n=e.errors,l=e.touched,c=e.handleChange,d=e.handleBlur,m=e.handleSubmit;return(0,b.jsxs)(i.l0,{className:_?o.caloriesForm:"".concat(o.caloriesForm," ").concat(o.caloriesPadding),onSubmit:m,children:[(0,b.jsx)("h1",{children:"Calculate your daily calorie intake right now"}),(0,b.jsxs)("div",{className:o.formContainerMain,children:[(0,b.jsxs)("div",{className:o.formContainerLeft,children:[(0,b.jsxs)("div",{className:o.labelContainer,children:[(0,b.jsx)(a,{label:"Height *",type:"text",name:"height",onChange:c,onBlur:d,value:r.height}),(0,b.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.height&&n.height&&(0,b.jsx)("p",{className:o.caloriesFormError,children:n.height})})]}),(0,b.jsxs)("div",{className:o.labelContainer,children:[(0,b.jsx)(a,{label:"Age *",type:"text",name:"age",onChange:c,onBlur:d,value:r.age}),(0,b.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.age&&n.age&&(0,b.jsx)("p",{className:o.caloriesFormError,children:n.age})})]}),(0,b.jsxs)("div",{className:o.labelContainer,children:[(0,b.jsx)(a,{label:"Current weight *",type:"text",name:"currentWeight",onChange:c,onBlur:d,value:r.currentWeight}),(0,b.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.currentWeight&&n.currentWeight&&(0,b.jsx)("p",{className:o.caloriesFormError,children:n.currentWeight})})]})]}),(0,b.jsxs)("div",{className:o.formContainerRight,children:[(0,b.jsxs)("div",{className:o.labelContainer,children:[(0,b.jsx)(a,{label:"Desired weight *",type:"text",name:"desiredWeight",onChange:c,onBlur:d,value:r.desiredWeight}),(0,b.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.desiredWeight&&n.desiredWeight&&(0,b.jsx)("p",{className:o.caloriesFormError,children:n.desiredWeight})})]}),(0,b.jsxs)("div",{className:o.radioButtonContainer,children:[(0,b.jsx)("h3",{children:"Blood type *"}),(0,b.jsxs)("ul",{className:o.radioButtonList,children:[(0,b.jsx)(u,{onChange:c,onBlur:d,name:"bloodType",value:"1",id:"1-radio-button"}),(0,b.jsx)(u,{onChange:c,onBlur:d,name:"bloodType",value:"2",id:"2-radio-button"}),(0,b.jsx)(u,{onChange:c,onBlur:d,name:"bloodType",value:"3",id:"3-radio-button"}),(0,b.jsx)(u,{onChange:c,onBlur:d,name:"bloodType",value:"4",id:"4-radio-button"})]}),(0,b.jsx)("div",{className:o.caloriesFormErrorContainer,children:l.bloodType&&n.bloodType&&(0,b.jsx)("p",{className:o.caloriesFormError,children:n.bloodType})})]})]})]}),(0,b.jsx)("div",{className:o.form_button,children:(0,b.jsx)(s.z,{size:"large",mainStyle:"active",type:"submit",children:"Start losing weight"})}),(0,b.jsx)(t.D,{name:"calc-form"})]})}})})}},7117:function(e,r,a){a.d(r,{m:function(){return _}});var n=a(9434),i=a(4095),t=a(5933),o="RightSideBar_blockWrapper__4AK5p",l="RightSideBar_heading__uDkBd",s="RightSideBar_list__sE6t3",c="RightSideBar_foodList__O7WPt RightSideBar_list__sE6t3",d="RightSideBar_calorieItem__ceArC",u="RightSideBar_warning__gqcj-",m="RightSideBar_norm__C-bla",h=a(3329),_=function(){var e=(0,n.v9)(i.Z7),r=(0,n.v9)(i.Db),a=(0,n.v9)(t.VI),_=(0,n.v9)(t.YC).reduce((function(e,r){return e+=r.calories,Math.round(e)}),0),x=r-_,p=Math.round(_/r*100);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:o,children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{className:l,children:["Summary for ",a]}),(0,h.jsxs)("ul",{className:s,children:[(0,h.jsxs)("li",{className:d,children:[(0,h.jsx)("span",{children:"Left"}),(0,h.jsxs)("span",{children:[x>0?x:"000"," kcal "]})]}),(0,h.jsxs)("li",{className:d,children:[(0,h.jsx)("span",{children:"Consumed"}),(0,h.jsxs)("span",{className:_>r?u:m,children:[_||"000"," kcal"]})]}),(0,h.jsxs)("li",{className:d,children:[(0,h.jsx)("span",{children:"Daily rate"}),(0,h.jsxs)("span",{children:[r||"000"," kcal"]})]}),(0,h.jsxs)("li",{className:d,children:[(0,h.jsx)("span",{children:"n% of normal"}),(0,h.jsxs)("span",{children:[p||"000"," %"]})]})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:l,children:"Food not recommended"}),(0,h.jsx)("ul",{className:c,children:e&&e.length>0?e.map((function(e,r){return(0,h.jsx)("li",{children:(0,h.jsx)("span",{children:e.en})},r)})):(0,h.jsx)("li",{children:(0,h.jsx)("span",{children:"Your diet will be displayed here"})})})]})]})})}},2479:function(e,r,a){a.d(r,{jk:function(){return o},dm:function(){return i},gY:function(){return t}});var n=a(6727),i=n.Ry({email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(6,"Min number of characters is 6").required("Password is required")}),t=n.Ry({name:n.Z_().min(3,"Min number of characters is 6").max(15,"Max number of characters is 15").required("Name is required"),email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(6,"Min number of characters is 6").required("Password is required")}),o=n.Ry({height:n.Rx().min(50).max(250).required(),age:n.Rx().min(1).max(100).required(),currentWeight:n.Rx().min(5).max(250).required(),desiredWeight:n.Rx().min(5).max(250).required(),bloodType:n.Rx().required()});n.Ry({productName:n.Z_().required(),weight:n.Rx().positive().required()})},223:function(e,r,a){a.r(r),a.d(r,{CalculatorPage:function(){return u}});var n=a(2791),i=a(9434),t=a(9450),o=a(5933),l=a(2149),s=a(7117),c=a(2576),d=a(3329),u=function(){var e=(0,i.I0)(),r=(0,i.v9)(o.VI);return(0,n.useEffect)((function(){e((0,t.Hp)(r))}),[e,r]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:c.Z.calculatorPage,children:(0,d.jsx)(l.p,{})})}),(0,d.jsx)("div",{className:c.Z.SidebarSection,children:(0,d.jsx)("div",{className:c.Z.SidebarWrap,children:(0,d.jsx)(s.m,{})})})]})}},2576:function(e,r){r.Z={container:"CalculatorPage_container__iIg-A",calculatorPage:"CalculatorPage_calculatorPage__TGglj",SidebarSection:"CalculatorPage_SidebarSection__uLqNj",SidebarWrap:"CalculatorPage_SidebarWrap__6bJ4T"}}}]);
//# sourceMappingURL=223.adeceb61.chunk.js.map