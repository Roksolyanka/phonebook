"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{5561:function(n,e,r){r(2791);e.Z=r.p+"static/media/sprite.27b4e5a09402a3e98c2a7605906b5200.svg"},608:function(n,e,r){r.d(e,{a:function(){return j}});var o,t,a,i,s,l,c,u=r(1413),d=r(9439),m=r(2791),h=r(5561),p=r(168),f=r(6444),x=f.ZP.p(o||(o=(0,p.Z)(["\n  color: ",";\n  font-size: 14px;\n  line-height: 1.17;\n  margin: 0;\n  text-shadow: none;\n  position: absolute;\n  top: 110%;\n  left: 0;\n  right: 0;\n  transition: opacity 0.15s ease-out;\n"])),(function(n){return n.theme.colors.errorColor})),b=(0,f.iv)(t||(t=(0,p.Z)(["\n  font-size: 20px;\n  padding: 0 15px;\n"]))),g=f.ZP.div(a||(a=(0,p.Z)(["\n  background-color: transparent;\n  color: black;\n  transform: translate(0);\n  transition: transform 0.15s ease-out, font-size 0.15s ease-out,\n    background-color 0.2s ease-out, color 0.15s ease-out;\n\n  ","\n"])),b),Z=f.ZP.label(i||(i=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 2px solid transparent;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n\n  ","\n"])),b),v=f.ZP.input(s||(s=(0,p.Z)(["\n  height: 60px;\n  width: 100%;\n  font-weight: bold;\n  box-sizing: border-box;\n  border: none;\n  border-radius: 5px;\n  background-color: ",";\n\n  ","\n\n  &:hover,\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n    transition: box-shadow 0.3s ease-in-out;\n  }\n\n  &:focus\n    + ","\n    ",",\n    :not(input[value=''])\n    + ","\n    "," {\n    border-radius: 25px;\n    font-size: 16px;\n    color: ",";\n    background-color: ",";\n    transform: translate(0, -140%);\n    box-shadow: ",";\n  }\n\n  &:focus + "," "," {\n    color: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),b,(function(n){var e=n.theme;return"".concat(e.colors.accentColor," 0px 5px 10px,\n      ").concat(e.colors.accentColor," 0px 2px 5px")}),Z,g,Z,g,(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.boxShadowPlaceholder}),Z,g,(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.primaryColor})),w=f.ZP.div(l||(l=(0,p.Z)(["\n  position: relative;\n  margin-bottom: 15px;\n"]))),k=f.ZP.span(c||(c=(0,p.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  svg {\n    width: 25px;\n    height: 25px;\n    fill: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryColor})),y=r(3329),j=function(n){var e=n.label,r=n.name,o=n.formik,t=(0,m.useState)(!1),a=(0,d.Z)(t,2),i=a[0],s=a[1],l=i?"text":"password",c=i?"":"-blocked",p="input-".concat(r);return(0,y.jsxs)(w,{children:[(0,y.jsx)(v,(0,u.Z)({id:p,name:r,type:l},n)),(0,y.jsx)(Z,{htmlFor:p,children:(0,y.jsx)(g,{children:e})}),"password"===r&&(0,y.jsx)(k,{onClick:function(){s(!i)},children:(0,y.jsx)("svg",{children:(0,y.jsx)("use",{href:"".concat(h.Z,"#icon-eye").concat(c)})})}),o&&o.touched[r]&&o.errors[r]&&(0,y.jsx)(x,{children:o.errors[r]})]})}},1970:function(n,e,r){r.r(e);r(2791);var o=r(9434),t=r(7689),a=r(5705),i=r(2195),s=r(6351),l=r(5996),c=r(608),u=r(9662),d=r(2361),m=r(3329);e.default=function(){var n=(0,o.I0)(),e=(0,o.v9)(s.R7),r=(0,a.TA)({initialValues:{name:"",email:"",password:""},validationSchema:l.gY});return e?(0,m.jsx)(t.Fg,{to:"/contacts"}):(0,m.jsx)(d.NF,{children:(0,m.jsxs)(d.fN,{children:[(0,m.jsx)(d.Po,{children:"Register Your Account"}),(0,m.jsxs)(d.kz,{onSubmit:function(e){e.preventDefault();var o=r.values.name.trim(),t=r.values.email.trim(),a=r.values.password.trim();n((0,i.tu)({name:o,email:t,password:a}))},children:[(0,m.jsx)(c.a,{label:"Name:",type:"text",name:"name",required:!0,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.name,formik:r,className:r.errors.name&&r.touched.name?"input-error":""}),(0,m.jsx)("br",{}),(0,m.jsx)(c.a,{label:"Email:",name:"email",type:"email",required:!0,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.email,formik:r,className:r.errors.email&&r.touched.email?"input-error":""}),(0,m.jsx)("br",{}),(0,m.jsx)(c.a,{label:"Password:",name:"password",required:!0,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.password,formik:r,className:r.errors.password&&r.touched.password?"input-error":""}),(0,m.jsx)(u.I,{disabled:!(0===Object.keys(r.errors).length&&Object.keys(r.touched).length>0)||r.isSubmitting,type:"submit",children:"Sign up"})]})]})})}},5996:function(n,e,r){r.d(e,{dm:function(){return a},gY:function(){return t}});var o=r(6727),t=o.Ry().shape({name:o.Z_().min(2).required("required field"),email:o.Z_().email("This is an ERROR email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required("required field"),password:o.Z_().min(6).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,{message:"Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit."}).required("required field")}),a=o.Ry().shape({email:o.Z_().email("This is an ERROR email").required("required field"),password:o.Z_().required("required field")});o.Ry().shape({contactName:o.Z_().min(3,"The name must be at least 3 characters.").max(22,"The name must be 22 characters or less.").required("The name is required."),contactNumber:o.Z_().max(20,"The phone number must be 20 characters or less.").matches(/^(?:\+\d|[\d\s\-./()]){10,20}$/,"Invalid number.").nullable().transform((function(n){return""===n?null:n}))})},2361:function(n,e,r){r.d(e,{NF:function(){return c},Po:function(){return d},fN:function(){return u},kz:function(){return m}});var o,t,a,i,s=r(168),l=r(6444),c=l.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 80px;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  background-color: ",";\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.is-hidden {\n    visibility: hidden;\n    opacity: 0;\n  }\n"])),(function(n){return n.theme.colors.backdropColor})),u=l.ZP.div(t||(t=(0,s.Z)(["\n  background-color: ",";\n  box-shadow: 1px 1px 14px 4px ",";\n  border-radius: 16px;\n  max-width: 400px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  animation-name: modalopen;\n  animation-duration: 1.75s;\n\n  @keyframes modalopen {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.accentColor})),d=l.ZP.h1(a||(a=(0,s.Z)(["\n  font-size: 25px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.textShadowColor})),m=l.ZP.form(i||(i=(0,s.Z)(["\n  text-align: center;\n"])))}}]);
//# sourceMappingURL=970.44da1868.chunk.js.map