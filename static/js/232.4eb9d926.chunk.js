"use strict";(self.webpackChunkslim_mom_frontend=self.webpackChunkslim_mom_frontend||[]).push([[232],{332:function(e,r,i){i.d(r,{z:function(){return t}});var n=i(8182),a={container:"Button_container__K9X6Y",button:"Button_button__JBBzO",active:"Button_active__iTrrO Button_button__JBBzO",primary:"Button_primary__9MLUH Button_button__JBBzO",small:"Button_small__jToKs",large:"Button_large__cizxk"},s=i(3329),t=function(e){var r=e.size,i=void 0===r?"small":r,t=e.mainStyle,o=e.type,l=e.children,m=e.handleClick;return(0,s.jsx)("button",{type:o,onClick:m,className:(0,n.Z)(a[i],a[t]),children:l})}},2479:function(e,r,i){i.d(r,{jk:function(){return t},dm:function(){return a},gY:function(){return s}});var n=i(6727),a=n.Ry({email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(6,"Min number of characters is 6").required("Password is required")}),s=n.Ry({name:n.Z_().min(3,"Min number of characters is 6").max(15,"Max number of characters is 15").required("Name is required"),email:n.Z_().email("Invalid email").required("Email is required"),password:n.Z_().min(6,"Min number of characters is 6").required("Password is required")}),t=n.Ry({height:n.Rx().min(50).max(250).required(),age:n.Rx().min(1).max(100).required(),currentWeight:n.Rx().min(5).max(250).required(),desiredWeight:n.Rx().min(5).max(250).required(),bloodType:n.Rx().required()});n.Ry({date:n.hT().required(),product:n.Z_().required(),weight:n.Rx().positive().required()})},3232:function(e,r,i){i.r(r),i.d(r,{LoginPage:function(){return p}});var n=i(7689),a=i(5705),s=i(9434),t=i(332),o={container:"LoginForm_container__d3-dh",heading:"LoginForm_heading__ST5SC",formWrapper:"LoginForm_formWrapper__isp4j",label:"LoginForm_label__RGIMj",text:"LoginForm_text__B2UU8",input:"LoginForm_input__7Ngg7",buttonWrapper:"LoginForm_buttonWrapper__GyBKJ",error:"LoginForm_error__cEL5X"},l=i(3804),m=i(2479),u=i(2137),d=i(3329),c=function(){var e=(0,n.s0)(),r=(0,s.I0)(),i=(0,a.TA)({initialValues:{email:"",password:""},onSubmit:function(e){r((0,u.pH)(e))},validationSchema:m.dm}),c=i.handleSubmit,_=i.errors,p=i.handleChange,h=i.values,x=i.submitCount;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:o.heading,children:"Log in"}),(0,d.jsxs)("form",{onSubmit:c,className:o.caloriesForm,children:[(0,d.jsxs)("div",{className:o.formWrapper,children:[(0,d.jsxs)("label",{className:o.labelText,children:[(0,d.jsx)("span",{className:o.text,children:"Email"}),(0,d.jsx)("div",{className:o.formContainerMain,children:(0,d.jsx)("div",{className:o.formContainerLeft,children:(0,d.jsx)("div",{className:o.labelContainer,children:(0,d.jsx)("input",{type:"email",name:"email",className:o.input,onChange:p,value:h.email})})})}),x>0&&_.email&&(0,d.jsx)("span",{className:o.error,children:_.email})]}),(0,d.jsxs)("label",{className:o.label,children:[(0,d.jsx)("span",{className:o.text,children:"Password"}),(0,d.jsx)("input",{type:"password",name:"password",className:o.input,onChange:p,value:h.password}),x>0&&_.password&&(0,d.jsx)("span",{className:o.error,children:_.password})]})]}),(0,d.jsxs)("div",{className:o.buttonWrapper,children:[(0,d.jsx)(t.z,{type:"submit",mainStyle:"active",children:"Log in"}),(0,d.jsx)(t.z,{type:"button",mainStyle:"primary",handleClick:function(r){r.preventDefault(),e(l._.register,{replace:!0})},children:"Register"})]})]})]})},_="LoginPage_formWrapper__ppMsG",p=function(){return(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:_,children:(0,d.jsx)(c,{})})})}}}]);
//# sourceMappingURL=232.4eb9d926.chunk.js.map