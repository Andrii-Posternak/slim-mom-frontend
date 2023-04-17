"use strict";(self.webpackChunkslim_mom_frontend=self.webpackChunkslim_mom_frontend||[]).push([[65],{332:function(e,n,t){t.d(n,{z:function(){return s}});var r=t(8182),a={container:"Button_container__K9X6Y",button:"Button_button__JBBzO",active:"Button_active__iTrrO Button_button__JBBzO",primary:"Button_primary__9MLUH Button_button__JBBzO",small:"Button_small__jToKs",large:"Button_large__cizxk"},i=t(3329),s=function(e){var n=e.size,t=void 0===n?"small":n,s=e.mainStyle,l=e.type,c=e.children,d=e.handleClick;return(0,i.jsx)("button",{type:l,onClick:d,className:(0,r.Z)(a[t],a[s]),children:c})}},7117:function(e,n,t){t.d(n,{m:function(){return h}});var r=t(9434),a=t(4095),i=t(5933),s="RightSideBar_blockWrapper__4AK5p",l="RightSideBar_heading__uDkBd",c="RightSideBar_list__sE6t3",d="RightSideBar_foodList__O7WPt RightSideBar_list__sE6t3",o="RightSideBar_calorieItem__ceArC",u="RightSideBar_warning__gqcj-",_="RightSideBar_norm__C-bla",m=t(3329),h=function(){var e=(0,r.v9)(a.Z7),n=(0,r.v9)(a.Db),t=(0,r.v9)(i.VI),h=(0,r.v9)(i.YC).reduce((function(e,n){return e+=n.calories,Math.round(e)}),0),p=n-h,j=Math.round(h/n*100);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:s,children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("h2",{className:l,children:["Summary for ",t]}),(0,m.jsxs)("ul",{className:c,children:[(0,m.jsxs)("li",{className:o,children:[(0,m.jsx)("span",{children:"Left"}),(0,m.jsxs)("span",{children:[p>0?p:"000"," kcal "]})]}),(0,m.jsxs)("li",{className:o,children:[(0,m.jsx)("span",{children:"Consumed"}),(0,m.jsxs)("span",{className:h>n?u:_,children:[h||"000"," kcal"]})]}),(0,m.jsxs)("li",{className:o,children:[(0,m.jsx)("span",{children:"Daily rate"}),(0,m.jsxs)("span",{children:[n||"000"," kcal"]})]}),(0,m.jsxs)("li",{className:o,children:[(0,m.jsx)("span",{children:"n% of normal"}),(0,m.jsxs)("span",{children:[j||"000"," %"]})]})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:l,children:"Food not recommended"}),(0,m.jsx)("ul",{className:d,children:e&&e.length>0?e.map((function(e,n){return(0,m.jsx)("li",{children:(0,m.jsx)("span",{children:e.en})},n)})):(0,m.jsx)("li",{children:(0,m.jsx)("span",{children:"Your diet will be displayed here"})})})]})]})})}},1065:function(e,n,t){t.r(n),t.d(n,{DiaryPage:function(){return te}});var r=t(9439),a=t(2791),i=t(6787),s=t(1503),l=t(9434),c=t(9450),d=t(5933),o=t(1413),u=t(4353),_=t(5770),m=t(1686),h=t.n(m),p=t(332),j=t(2426),x=t.n(j),f=function(e){return e===x()(new Date).format("DD.MM.YYYY")},v="DiaryAddProductForm_Form__9Niq6",g="DiaryAddProductForm_FieldWeight__kKHGd",y="DiaryAddProductForm_btn__yBeng",b="DiaryAddProductForm_btnWrap__WP8K-",N=t(3329),D=function(){var e=(0,i.Z)().width,n=(0,l.I0)(),t=(0,l.v9)(d.VI),s=(0,l.v9)(d.ku),m=(0,l.v9)(d.zh),j=(0,a.useState)(""),x=(0,r.Z)(j,2),D=x[0],P=x[1],C=(0,a.useState)(""),S=(0,r.Z)(C,2),B=S[0],k=S[1];return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("form",{id:"form",className:v,onSubmit:function(e){e.preventDefault(),n((0,c.IC)({productName:D,weight:B})),P(""),k(""),m&&h().Notify.failure("There is no such product in the database")},children:[(0,N.jsx)(_.Z,{id:"free-solo-2-demo",freeSolo:!0,disableClearable:!0,disabled:!f(t),name:"productName",value:D,onChange:function(e,n){P(n)},options:s.map((function(e){return e.title.ua})),renderInput:function(e){return(0,a.createElement)(u.Z,(0,o.Z)((0,o.Z)({},e),{},{label:"Enter product name",key:D._id,required:!0,onChange:function(e){return function(e){e.length>=2&&n((0,c.mL)(e))}(e.target.value)},InputProps:(0,o.Z)((0,o.Z)({},e.InputProps),{},{type:"search"})}))}}),(0,N.jsx)("div",{className:g,children:(0,N.jsx)(u.Z,{id:"weight",fullWidth:!0,autoComplete:"off",label:"Grams",name:"weight",type:"text",value:B,onChange:function(e){var n=e.target,t=n.name,r=n.value;"productName"===t&&P(r),"weight"===t&&k(r)},required:!0,disabled:!f(t)})}),(0,N.jsx)("div",{children:e>768?(0,N.jsx)("button",{className:y,type:"submit",disabled:!f(t),children:"+"}):(0,N.jsx)("div",{className:b,children:(0,N.jsx)(p.z,{mainStyle:"active",type:"submit",children:"Add"})})})]})})},P=t(1652),C=t(4876),S=t(7792),B=t(7892),k=t.n(B),I=t(5987),Z=t(4554),Y=["inputProps","InputProps","ownerState","inputRef","error"],w=function(e){var n=e.inputProps,t=e.InputProps,r=(e.ownerState,e.inputRef),a=(e.error,(0,I.Z)(e,Y));return(0,N.jsx)("div",{children:(0,N.jsxs)(Z.Z,{ref:null===t||void 0===t?void 0:t.ref,children:[(0,N.jsx)("input",(0,o.Z)((0,o.Z)({ref:r},n),a)),null===t||void 0===t?void 0:t.endAdornment]})})},F="DiaryDateCalendar_inputCalendar__Dmtu2",L=function(){var e=(0,l.v9)(d.VI),n=(0,l.I0)(),t=e.split(".").reverse().join("-");return(0,N.jsx)(P._,{dateAdapter:S.y,children:(0,N.jsx)(C.M,{className:F,format:"DD.MM.YYYY",value:k()(t),label:"Custom input",slots:{textField:w},style:{fontSize:"26px"},onChange:function(e){var t=x()(e.$d).format("DD.MM.YYYY");n((0,c.Hp)(t)),n((0,d.Mv)(t))}})})},M=t(3433),A=t(5984),W="DiaryProductsListItem_Item__frJWO",z="DiaryProductsListItem_Title__kYvqa",R="DiaryProductsListItem_Weight__Bjvzi",q="DiaryProductsListItem_Calories__+q7af",J="DiaryProductsListItem_Button__lmgp8",O=function(e){var n=e.product,t=e.handleDeleteProduct;return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("li",{className:W,children:[(0,N.jsx)("span",{className:z,children:n.productName}),(0,N.jsxs)("span",{className:R,children:[n.weight," g"]}),(0,N.jsxs)("span",{className:q,children:[n.calories," kcal"]}),(0,N.jsx)("button",{className:J,type:"button",onClick:function(){return t(n._id)},children:"+"})]})})},T={container:"DiaryProductsList_container__Q3kSc",filteredList:"DiaryProductsList_filteredList__jABBy"},E=function(){var e=(0,l.I0)(),n=(0,l.v9)(d.YC),t=(0,l.v9)(d.VI),r=function(n){e((0,c.gr)(n))};return(0,N.jsx)("div",{children:(null===n||void 0===n?void 0:n.length)>0?(0,N.jsx)("ul",{className:T.filteredList,children:(0,M.Z)(n).sort((function(e,n){return n.date.localeCompare(e.date)})).map((function(e){return(0,N.jsx)(O,{product:e,handleDeleteProduct:r},(0,A.x0)())}))}):(0,N.jsx)(N.Fragment,{children:f(t)?(0,N.jsx)("p",{className:T.notification,children:"You have no products yet. Please add something."}):(0,N.jsx)("p",{className:T.notification,children:"You do not have an added product on this day."})})})},K=t(7117),V="DiaryPage_container__ETJrD",H="DiaryPage_btn__SV3lK",G="DiaryPage_wrapperBtn__n1iWM",Q=t(2576),U="MenuDiary_modal__owCOc",X="MenuDiary_list__kJ+FA",$="MenuDiary_btn__hy9uk",ee=t(1578),ne=(0,a.memo)((function(e){var n=e.onClick;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{className:U,children:(0,N.jsxs)("div",{className:X,children:[(0,N.jsx)("button",{className:$,onClick:n,children:(0,N.jsx)(ee.H23,{})}),(0,N.jsx)(D,{})]})})})})),te=function(){var e=(0,i.Z)().width,n=(0,l.I0)(),t=(0,s.Z)("(max-width: 767px)"),o=(0,l.v9)(d.VI);(0,a.useEffect)((function(){n((0,c.Hp)(o))}),[n,o]);var u=(0,a.useState)(!1),_=(0,r.Z)(u,2),m=_[0],h=_[1],p=function(){h((function(e){return!e}))};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"container",children:[(0,N.jsxs)("div",{className:V,children:[(0,N.jsx)(L,{}),e>768?(0,N.jsx)(D,{}):"",(0,N.jsx)(E,{})]}),(0,N.jsx)("div",{className:G,children:t&&(0,N.jsx)("button",{className:H,type:"button",onClick:p,children:"+"})})]}),(0,N.jsx)("div",{className:Q.Z.SidebarSection,children:(0,N.jsx)("div",{className:Q.Z.SidebarWrap,children:(0,N.jsx)(K.m,{})})}),m&&(0,N.jsx)(ne,{onClick:p})]})}},2576:function(e,n){n.Z={container:"CalculatorPage_container__iIg-A",calculatorPage:"CalculatorPage_calculatorPage__TGglj",SidebarSection:"CalculatorPage_SidebarSection__uLqNj",SidebarWrap:"CalculatorPage_SidebarWrap__6bJ4T"}}}]);
//# sourceMappingURL=65.74ba9be1.chunk.js.map