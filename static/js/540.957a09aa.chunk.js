"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[540],{3648:function(n,e,r){r.d(e,{$Q:function(){return v},BD:function(){return b},Bf:function(){return g},C8:function(){return C},Gq:function(){return p},HS:function(){return w},lM:function(){return j},ob:function(){return m},yG:function(){return Z}});var o,t,i,c,a,u,s,d,l,f=r(168),x=r(5867),h=r(5705),p=(0,x.zo)(h.l0)(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 4px;\n  margin-bottom: 12px;\n"]))),m=(0,x.zo)(h.gN)(t||(t=(0,f.Z)(["\n  flex-grow: 1;\n  padding: 8px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  font: inherit;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  resize: none;\n  margin-left: 10px;\n"]))),b=(0,x.zo)(h.Bc)(i||(i=(0,f.Z)(["\n  color: red;\n"]))),g=x.zo.button(c||(c=(0,f.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  padding: 0 8px;\n  border-radius: 4px;\n  background-color: #3f51b5;\n  color: #fff;\n\n  width: 100px;\n  height: 40px;\n\n  &:hover,\n  &:focus {\n    background-color: #3f51b5;\n  }\n  &:active {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"]))),v=x.zo.label(a||(a=(0,f.Z)(["\n  text-decoration: none;\n  font-weight: 700;\n  color: #2a363b;\n"]))),j=x.zo.div(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n"]))),w=x.zo.input(s||(s=(0,f.Z)(["\n  flex-grow: 1;\n  padding: 8px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  font: inherit;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  resize: none;\n  margin-left: 10px;\n"]))),C=x.zo.span(d||(d=(0,f.Z)(["\n  padding-right: 15px;\n  margin-bottom: 10px;\n"]))),Z=x.zo.button(l||(l=(0,f.Z)(["\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: none;\n  padding: 0 8px;\n  border-radius: 4px;\n  background-color: #3f51b5;\n  color: #fff;\n\n  width: 100px;\n  height: auto;\n\n  &:hover,\n  &:focus {\n    background-color: #3f51b5;\n  }\n  &:active {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  }\n"])))},9540:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var o=r(9434),t=r(4808),i=r(6916),c=function(n){return n.contacts.items},a=function(n){return n.contacts.deletedContacts},u=function(n){return n.contacts.isLoading},s=function(n){return n.contacts.error},d=function(n){return n.filter},l=(0,i.P1)([c,d],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),f=r(3648),x=r(184),h=function(){var n=(0,o.v9)(d),e=(0,o.I0)();return(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:"Find contacts by name"}),(0,x.jsx)(f.HS,{type:"text",value:n,onChange:function(n){e((0,t.$)(n.target.value.toLowerCase().trim()))}})]})},p=r(3634),m=function(){var n=(0,o.v9)(l),e=(0,o.v9)(a),r=(0,o.I0)();return Array.isArray(n)&&0!==n.length?(0,x.jsxs)("div",{children:[(0,x.jsx)("ul",{children:n.map((function(n){var e=n.name,o=n.number,t=n.id;return(0,x.jsxs)("li",{children:[(0,x.jsxs)(f.C8,{children:[e,":"]}),(0,x.jsx)(f.C8,{children:o}),(0,x.jsx)(f.yG,{onClick:function(){return n=t,void r((0,p.GK)(n));var n},children:"Delete"})]},t)}))}),(0,x.jsx)(f.Bf,{onClick:function(){r((0,p.yx)(e))},children:"Reset"})]}):(console.log(n),null)},b=r(1413),g=r(5705),v=r(6727),j=r(8174),w=v.Ry().shape({name:v.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Required!").min(2,"Too Short!").max(50,"Too Long!"),number:v.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/).required("Required!").min(2,"Too Short!").max(50,"Too Long!")}),C={name:"",number:""},Z=function(){var n=(0,o.v9)(c),e=(0,o.I0)();return(0,x.jsx)(g.J9,{initialValues:C,validationSchema:w,onSubmit:function(r,o){!function(r){var o=n.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()}));if(console.log(r),o)j.Am.info("".concat(r.name," is already in contacts."),{position:"top-right",autoClose:2e3});else{var t=(0,p.el)(r);e(t)}}((0,b.Z)({},r)),o.resetForm()},children:function(n){var e=n.handleSubmit;return(0,x.jsxs)(f.Gq,{onSubmit:e,children:[(0,x.jsx)("h2",{children:"PhoneBook"}),(0,x.jsxs)(f.lM,{children:[(0,x.jsxs)(f.$Q,{children:["Name",(0,x.jsx)(f.ob,{name:"name"}),(0,x.jsx)(f.BD,{name:"name",component:"div"})]}),(0,x.jsxs)(f.$Q,{children:["Number",(0,x.jsx)(f.ob,{name:"number"}),(0,x.jsx)(f.BD,{name:"number",component:"div"})]})]}),(0,x.jsx)("div",{children:(0,x.jsx)(f.Bf,{type:"submit",children:"Add contact"})})]})}})},k=r(2791);function z(){var n=(0,o.I0)(),e=(0,o.v9)(u),r=(0,o.v9)(s);return(0,k.useEffect)((function(){n((0,p.yF)())}),[n]),(0,x.jsxs)("div",{children:[(0,x.jsx)("title",{children:"PhoneBook"}),(0,x.jsx)(Z,{}),e&&!r&&(0,x.jsx)("b",{children:"Request in progress..."}),(0,x.jsx)(h,{}),(0,x.jsx)(m,{})]})}}}]);
//# sourceMappingURL=540.957a09aa.chunk.js.map