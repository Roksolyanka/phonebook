"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[490],{8364:(e,n,r)=>{r.d(n,{I:()=>a});r(5043);const o=r.p+"static/media/sprite.e2b0d0ec6e09344e316d16f4bc0ca3d9.svg";var t=r(579);const a=e=>{let{name:n,width:r,height:a}=e;return(0,t.jsx)("svg",{width:r,height:a,children:(0,t.jsx)("use",{href:"".concat(o,"#").concat(n)})})}},6037:(e,n,r)=>{r.d(n,{S:()=>j});var o,t=r(2555),a=r(5043),s=r(8364),i=r(7528),l=r(4574);const c=l.Ay.p(o||(o=(0,i.A)(["\n  color: ",";\n  font-size: 14px;\n  line-height: 1.17;\n  margin: 0;\n  text-shadow: none;\n  position: absolute;\n  top: 110%;\n  left: 0;\n  right: 0;\n  transition: opacity 0.15s ease-out;\n"])),(e=>{let{theme:n}=e;return n.colors.errorColor}));var d,u,h,m,p,x;const b=(0,l.AH)(d||(d=(0,i.A)(["\n  font-size: 20px;\n  padding: 0 15px;\n"]))),g=l.Ay.div(u||(u=(0,i.A)(["\n  background-color: transparent;\n  color: black;\n  transform: translate(0);\n  transition: transform 0.15s ease-out, font-size 0.15s ease-out,\n    background-color 0.2s ease-out, color 0.15s ease-out;\n\n  ","\n"])),b),f=l.Ay.label(h||(h=(0,i.A)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 2px solid transparent;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n\n  ","\n"])),b),w=l.Ay.input(m||(m=(0,i.A)(["\n  height: 60px;\n  width: 100%;\n  font-weight: bold;\n  box-sizing: border-box;\n  border: none;\n  border-radius: 5px;\n  background-color: ",";\n\n  ","\n\n  &:hover,\n  &:focus {\n    outline: none;\n    box-shadow: ",";\n    transition: box-shadow 0.3s ease-in-out;\n  }\n\n  &:focus\n    + ","\n    ",",\n    :not(input[value=''])\n    + ","\n    "," {\n    border-radius: 25px;\n    font-size: 16px;\n    color: ",";\n    background-color: ",";\n    transform: translate(0, -140%);\n    box-shadow: ",";\n  }\n\n  &:focus + "," "," {\n    color: ",";\n    border-color: ",";\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.secondaryColor}),b,(e=>{let{theme:n}=e;return"".concat(n.colors.accentColor," 0px 5px 10px,\n      ").concat(n.colors.accentColor," 0px 2px 5px")}),f,g,f,g,(e=>{let{theme:n}=e;return n.colors.primaryColor}),(e=>{let{theme:n}=e;return n.colors.secondaryColor}),(e=>{let{theme:n}=e;return n.colors.boxShadowPlaceholder}),f,g,(e=>{let{theme:n}=e;return n.colors.primaryColor}),(e=>{let{theme:n}=e;return n.colors.primaryColor})),y=l.Ay.div(p||(p=(0,i.A)(["\n  position: relative;\n  margin-bottom: 15px;\n"]))),A=l.Ay.span(x||(x=(0,i.A)(["\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  cursor: pointer;\n\n  svg {\n    width: 25px;\n    height: 25px;\n    fill: ",";\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.primaryColor}));var v=r(579);const j=e=>{const{label:n,name:r,formik:o}=e,[i,l]=(0,a.useState)(!1),d=i?"text":"password",u=i?"":"-blocked",h="input-".concat(r);return(0,v.jsxs)(y,{children:[(0,v.jsx)(w,(0,t.A)({id:h,name:r,type:d},e)),(0,v.jsx)(f,{htmlFor:h,children:(0,v.jsx)(g,{children:n})}),"password"===r&&(0,v.jsx)(A,{onClick:()=>{l(!i)},children:(0,v.jsx)(s.I,{name:"icon-eye".concat(u),width:"15px",height:"15px"})}),o&&o.touched[r]&&o.errors[r]&&(0,v.jsx)(c,{children:o.errors[r]})]})}},7490:(e,n,r)=>{r.r(n),r.d(n,{default:()=>m});r(5043);var o=r(9456),t=r(3216),a=r(3516),s=r(8137),i=r(3775),l=r(511),c=r(6037),d=r(120),u=r(1799),h=r(579);const m=()=>{const e=(0,o.wA)(),n=(0,o.d4)(i.Dc),r=(0,a.Wx)({initialValues:{email:"",password:""},validationSchema:l.X5});return n?(0,h.jsx)(t.C5,{to:"/contacts"}):(0,h.jsx)(u.uz,{children:(0,h.jsxs)(u.lq,{children:[(0,h.jsx)(u.CZ,{children:"Login Into Your Account"}),(0,h.jsxs)(u.md,{onSubmit:n=>{n.preventDefault();const o=r.values.email.trim(),t=r.values.password.trim();e((0,s.Du)({email:o,password:t}))},children:[(0,h.jsx)(c.S,{label:"Email:",name:"email",type:"email",required:!0,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.email,formik:r,className:r.errors.email&&r.touched.email?"input-error":""}),(0,h.jsx)("br",{}),(0,h.jsx)(c.S,{label:"Password:",name:"password",required:!0,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.password,formik:r,className:r.errors.password&&r.touched.password?"input-error":""}),(0,h.jsx)(d.T,{disabled:!(0===Object.keys(r.errors).length&&Object.keys(r.touched).length>0)||r.isSubmitting,type:"submit",children:"Sign in"})]})]})})}},511:(e,n,r)=>{r.d(n,{X5:()=>a,zK:()=>t});var o=r(899);const t=o.Ik().shape({name:o.Yj().min(2).required("required field"),email:o.Yj().email("This is an ERROR email").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required("required field"),password:o.Yj().min(6).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,{message:"Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit."}).required("required field")}),a=o.Ik().shape({email:o.Yj().email("This is an ERROR email").required("required field"),password:o.Yj().required("required field")});o.Ik().shape({contactName:o.Yj().min(3,"The name must be at least 3 characters.").max(22,"The name must be 22 characters or less.").required("The name is required."),contactNumber:o.Yj().max(20,"The phone number must be 20 characters or less.").matches(/^(?:\+\d|[\d\s\-./()]){10,20}$/,"Invalid number.").nullable().transform((e=>""===e?null:e))})},1799:(e,n,r)=>{r.d(n,{CZ:()=>u,lq:()=>d,md:()=>h,uz:()=>c});var o,t,a,s,i=r(7528),l=r(4574);const c=l.Ay.div(o||(o=(0,i.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 80px;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  background-color: ",";\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.is-hidden {\n    visibility: hidden;\n    opacity: 0;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.backdropColor})),d=l.Ay.div(t||(t=(0,i.A)(["\n  background-color: ",";\n  box-shadow: 1px 1px 14px 4px ",";\n  border-radius: 16px;\n  max-width: 400px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  animation-name: modalopen;\n  animation-duration: 1.75s;\n\n  @keyframes modalopen {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.backgroundColor}),(e=>{let{theme:n}=e;return n.colors.accentColor})),u=l.Ay.h1(a||(a=(0,i.A)(["\n  font-size: 25px;\n  text-align: center;\n  color: ",";\n"])),(e=>{let{theme:n}=e;return n.colors.textShadowColor})),h=l.Ay.form(s||(s=(0,i.A)(["\n  text-align: center;\n"])))}}]);
//# sourceMappingURL=490.d7bced81.chunk.js.map