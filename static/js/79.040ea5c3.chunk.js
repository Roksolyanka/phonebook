"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{3969:function(e,n,r){r.d(n,{a:function(){return s}});var o,t=r(1413),a=(r(2791),r(168)),i=r(6444).ZP.p(o||(o=(0,a.Z)(["\n  color: ",";\n  font-family: Roboto;\n  font-size: 14px;\n  //   font-weight: 400;\n  line-height: 1.17;\n  margin: 0;\n  text-shadow: none;\n"])),(function(e){return e.theme.colors.errorColor})),l=r(3329),s=function(e){var n=e.label,r=e.name,o=e.wrapperStyle,a=e.inputStyle,s=e.formik,u=o,c=a,d="input-".concat(r);return(0,l.jsxs)(u,{children:[(0,l.jsx)("label",{htmlFor:d,children:n}),(0,l.jsx)(c,(0,t.Z)({id:d,name:r},e)),s&&s.touched[r]&&s.errors[r]&&(0,l.jsx)(i,{children:s.errors[r]})]})}},2079:function(e,n,r){r.r(n);r(2791);var o=r(9434),t=r(7689),a=r(5705),i=r(2526),l=r(6351),s=r(5996),u=r(3969),c=r(9662),d=r(2361),m=r(3329);n.default=function(){var e=(0,o.I0)(),n=(0,o.v9)(l.R7),r=(0,a.TA)({initialValues:{name:"",email:"",password:""},validationSchema:s.gY});return n?(0,m.jsx)(t.Fg,{to:"/contacts"}):(0,m.jsx)(d.NF,{children:(0,m.jsxs)(d.fN,{children:[(0,m.jsx)(d.Po,{children:"Register Your Account"}),(0,m.jsxs)(d.kz,{onSubmit:function(n){n.preventDefault();var o=r.values.name.trim(),t=r.values.email.trim(),a=r.values.password.trim();e((0,i.tu)({name:o,email:t,password:a}))},children:[(0,m.jsx)(u.a,{label:"Name:",type:"text",name:"name",placeholder:"Enter your name",autoComplete:"name",required:!0,wrapperStyle:d.f_,inputStyle:d.yW,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.name,formik:r,className:r.errors.name&&r.touched.name?"input-error":""}),(0,m.jsx)("br",{}),(0,m.jsx)(u.a,{label:"Email:",name:"email",type:"email",placeholder:"Enter email",autoComplete:"email",required:!0,wrapperStyle:d.f_,inputStyle:d.yW,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.email,formik:r,className:r.errors.email&&r.touched.email?"input-error":""}),(0,m.jsx)("br",{}),(0,m.jsx)(u.a,{label:"Password:",name:"password",type:"password",placeholder:"Enter password",autoComplete:"current-password",required:!0,wrapperStyle:d.f_,inputStyle:d.yW,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.password,formik:r,className:r.errors.password&&r.touched.password?"input-error":""}),(0,m.jsx)(c.I,{disabled:!(0===Object.keys(r.errors).length&&Object.keys(r.touched).length>0)||r.isSubmitting,type:"submit",children:"Sign up"})]})]})})}},5996:function(e,n,r){r.d(n,{dm:function(){return a},gY:function(){return t}});var o=r(6727),t=o.Ry().shape({name:o.Z_().min(2).required("required field"),email:o.Z_().email("This is an ERROR email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required("required field"),password:o.Z_().min(6).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,{message:"Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit."}).required("required field")}),a=o.Ry().shape({email:o.Z_().email("This is an ERROR email").required("required field"),password:o.Z_().required("required field")});o.Ry().shape({contactName:o.Z_().min(3,"The name must be at least 3 characters.").max(22,"The name must be 22 characters or less.").required("The name is required."),contactNumber:o.Z_().max(20,"The phone number must be 20 characters or less.").matches(/^(?:\+\d|[\d\s\-./()]){10,20}$/,"Invalid number.").nullable().transform((function(e){return""===e?null:e}))})},7430:function(e,n,r){r.d(n,{g:function(){return a}});var o,t=r(168),a=r(6444).ZP.input(o||(o=(0,t.Z)(["\n  box-sizing: border-box;\n  height: 50px;\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: ",";\n  padding: 8px 15px;\n  outline: none; /* \u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u043e\u0431\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043f\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u0456 */\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    box-shadow: "," 0px 5px 10px,\n      "," 0px 2px 5px;\n  }\n"])),(function(e){return e.theme.colors.secondaryColor}),(function(e){return e.theme.colors.accentColor}),(function(e){return e.theme.colors.accentColor}))},2361:function(e,n,r){r.d(n,{NF:function(){return m},Po:function(){return h},fN:function(){return p},f_:function(){return x},kz:function(){return f},yW:function(){return b}});var o,t,a,i,l,s,u=r(168),c=r(6444),d=r(7430),m=c.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 80px;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  background-color: ",";\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.is-hidden {\n    visibility: hidden;\n    opacity: 0;\n  }\n"])),(function(e){return e.theme.colors.backdropColor})),p=c.ZP.div(t||(t=(0,u.Z)(["\n  background-color: ",";\n  box-shadow: 1px 1px 14px 4px ",";\n  border-radius: 16px;\n  max-width: 400px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  animation-name: modalopen;\n  animation-duration: 1.75s;\n\n  @keyframes modalopen {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(e){return e.theme.colors.backgroundColor}),(function(e){return e.theme.colors.accentColor})),h=c.ZP.h1(a||(a=(0,u.Z)(["\n  font-size: 25px;\n  text-align: center;\n  color: ",";\n"])),(function(e){return e.theme.colors.textShadowColor})),f=c.ZP.form(i||(i=(0,u.Z)(["\n  text-align: center;\n"]))),x=c.ZP.div(l||(l=(0,u.Z)(["\n  display: grid;\n  color: ",";\n  font-size: 20px;\n  margin: 0 0 5px 0;\n"])),(function(e){return e.theme.colors.textShadowColor})),b=(0,c.ZP)(d.g)(s||(s=(0,u.Z)(["\n  width: 100%;\n"])))}}]);
//# sourceMappingURL=79.040ea5c3.chunk.js.map