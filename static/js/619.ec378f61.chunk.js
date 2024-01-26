"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[619],{1552:function(n,e,t){t.d(e,{f:function(){return i}});var o,r=t(168),i=t(6444).ZP.h1(o||(o=(0,r.Z)(["\n  font-size: 100px;\n  font-weight: bold;\n  width: 100%;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 10px 0 5px;\n  margin: 10px 0;\n  box-shadow: "," 0px 20px 30px,\n    "," 0px 2px 5px;\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}))},3969:function(n,e,t){t.d(e,{a:function(){return a}});t(2791);var o,r=t(168),i=t(6444).ZP.p(o||(o=(0,r.Z)(["\n  color: #8b2605;\n  font-family: Roboto;\n  font-size: 14px;\n  //   font-weight: 400;\n  line-height: 1.17;\n  margin: 0;\n  text-shadow: none;\n"]))),c=t(184),a=function(n){var e=n.label,t=n.name,o=n.type,r=n.placeholder,a=n.value,l=n.onChange,s=n.onBlur,u=n.required,d=n.autoComplete,x=n.wrapperStyle,p=n.inputStyle,h=n.className,f=n.formik,m=x,g=p,b="input-".concat(t);return(0,c.jsxs)(m,{children:[(0,c.jsx)("label",{htmlFor:b,children:e}),(0,c.jsx)(g,{id:b,type:o,name:t,placeholder:r,value:a,onChange:l,onBlur:s,required:u,autoComplete:d,className:h}),f&&f.touched[t]&&f.errors[t]&&(0,c.jsx)(i,{children:f.errors[t]})]})}},3619:function(n,e,t){t.r(e),t.d(e,{default:function(){return vn}});var o,r,i,c,a,l,s,u,d,x,p,h,f,m,g=t(9439),b=t(2791),Z=t(9434),C=t(6351),y=t(3871),w=t(1686),v=t.n(w),j=t(168),P=t(6444),k=t(9662),N=t(7430),S=P.ZP.div(o||(o=(0,j.Z)(["\n  flex: 1;\n  margin: 100px 0 0 0;\n  padding: 0 0 0 30px;\n  height: 100vh;\n"]))),z=P.ZP.form(r||(r=(0,j.Z)(["\n  padding: 10px;\n  border: 2px solid ",";\n  border-radius: 4px;\n  box-shadow: "," 5px 0 5px;\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n  text-shadow: "," 5px 0 1px;\n  position: sticky;\n  top: 50px;\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor})),E=P.ZP.div(i||(i=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),D=(0,P.ZP)(N.g)(c||(c=(0,j.Z)(["\n  width: 100%;\n"]))),F=P.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  justify-content: space-around;\n  margin: 10px 0 0 0;\n"]))),I=(0,P.ZP)(k.I)(l||(l=(0,j.Z)(["\n  margin: 0;\n"]))),A=t(3969),_=t(184),q=function(n){var e=n.editingContact,t=n.setEditingContact,o=(0,Z.v9)(C.xm),r=(0,Z.I0)(),i=(0,b.useState)(""),c=(0,g.Z)(i,2),a=c[0],l=c[1],s=(0,b.useState)(""),u=(0,g.Z)(s,2),d=u[0],x=u[1];(0,b.useEffect)((function(){e&&(l(e.name),x(e.number))}),[e]);return(0,_.jsx)(S,{children:(0,_.jsxs)(z,{onSubmit:function(n){n.preventDefault();var i=n.currentTarget,c=i.elements.contactNumber.value.trim(),a=i.elements.contactName.value.trim(),s=a.split(" ");return a=s.map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" "),o.some((function(n){return n.name===a&&e!==n}))?v().Notify.info("Contact with name ".concat(a," already exists!")):o.some((function(n){return n.number===c&&e!==n}))?v().Notify.info("Contact with number ".concat(c," already exists!")):(r(e?(0,y.hx)({id:e.id,name:a,number:c}):(0,y.G3)({name:a,number:c})),v().Notify.success("Contact ".concat(a," successfully ").concat(e?"edited":"added",".")),l(""),x(""),void t(null))},children:[(0,_.jsx)(A.a,{label:"Name:",type:"text",name:"contactName",placeholder:"Enter name",value:a,onChange:function(n){return l(n.target.value)},required:!0,wrapperStyle:E,inputStyle:D}),(0,_.jsx)(A.a,{label:"Number:",type:"text",name:"contactNumber",placeholder:"Enter phone number",value:d,onChange:function(n){return x(n.target.value)},required:!0,wrapperStyle:E,inputStyle:D}),(0,_.jsxs)(F,{children:[(0,_.jsx)(I,{type:"submit",children:e?"Edit contact":"Add contact"}),e&&(0,_.jsx)(I,{type:"button",onClick:function(){t(null),l(""),x("")},children:"Cancel"})]})]})})},B=t(3455),L=P.ZP.ul(s||(s=(0,j.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  list-style: none;\n"]))),M=P.ZP.li(u||(u=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: start;\n  font-size: 20px;\n  font-weight: bold;\n  list-style: none;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 20px;\n  margin: 0 auto 5px;\n  box-sizing: border-box;\n  border-radius: 6px;\n  color: ",";\n  border: 1px solid ",";\n  box-shadow: 0 2px 8px ",";\n\n  &:hover {\n    box-shadow: "," 0px 10px 10px 0px;\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.colors.accentColor})),R=(0,P.ZP)(B.y)(d||(d=(0,j.Z)(["\n  flex-direction: column;\n  align-items: start;\n"]))),T=P.ZP.span(x||(x=(0,j.Z)(["\n  overflow: hidden;\n  word-break: break-all;\n"]))),U=P.ZP.span(p||(p=(0,j.Z)(["\n  overflow: hidden;\n  word-break: break-all;\n  color: ",";\n"])),(function(n){return n.theme.colors.textShadowColor})),Y=P.ZP.div(h||(h=(0,j.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n"]))),G=P.ZP.svg(f||(f=(0,j.Z)(["\n  width: 15px;\n  height: 15px;\n"]))),O=(0,P.ZP)(k.I)(m||(m=(0,j.Z)(["\n  border-radius: 5px;\n  padding: 0;\n  width: 35px;\n  margin: 10px 0;\n"])));var Q,W,H,J,K,V,X,$,nn,en,tn,on=t.p+"static/media/sprite.bd874ef2f50889145201eb83c211610d.svg",rn=t(2361),cn=(0,P.ZP)(rn.NF)(Q||(Q=(0,j.Z)(["\n  top: 0;\n  height: 100%;\n  cursor: pointer;\n"]))),an=(0,P.ZP)(rn.fN)(W||(W=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  cursor: auto;\n"]))),ln=(0,P.ZP)(rn.Po)(H||(H=(0,j.Z)(["\n  overflow: hidden;\n  word-break: break-all;\n  margin: 0;\n"]))),sn=P.ZP.div(J||(J=(0,j.Z)(["\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n"]))),un=(0,P.ZP)(k.I)(K||(K=(0,j.Z)(["\n  margin: 0;\n"]))),dn=function(n){var e=n.contact,t=n.onDeleteContact,o=n.onNoDeleteContact,r=function(){o()};return(0,_.jsx)(cn,{className:"ModalDeleteBackdrop",onClick:function(n){n.target.classList.contains("ModalDeleteBackdrop")&&r()},children:(0,_.jsxs)(an,{children:[(0,_.jsxs)(rn.Po,{children:["Are you sure you want to delete the contact",(0,_.jsxs)(ln,{children:[e.name,"?"]})]}),(0,_.jsxs)(sn,{children:[(0,_.jsx)(un,{type:"button",onClick:function(){t(e.id)},children:"Yes"}),(0,_.jsx)(un,{type:"button",onClick:r,children:"No"})]})]})})},xn=function(n){var e=n.contacts,t=n.onDeleteContact,o=n.onEditContact,r=(0,b.useState)(!1),i=(0,g.Z)(r,2),c=i[0],a=i[1],l=(0,b.useState)(null),s=(0,g.Z)(l,2),u=s[0],d=s[1],x=Array.isArray(e)&&e.length>0,p=function(){d(null),a(!1)};return(0,_.jsxs)(L,{children:[x&&e.map((function(n){return(0,_.jsxs)(M,{children:[(0,_.jsxs)(R,{children:[(0,_.jsxs)(T,{children:[n.name,":"]}),(0,_.jsx)(U,{children:n.number})]}),(0,_.jsxs)(Y,{children:[(0,_.jsx)(O,{"aria-label":"Call the contact",type:"button",onClick:function(){return function(n){var e=n.number;window.location.href="tel:".concat(e)}(n)},children:(0,_.jsx)(G,{children:(0,_.jsx)("use",{href:"".concat(on,"#icon-phone")})})}),(0,_.jsx)(O,{"aria-label":"Edit contact",type:"button",onClick:function(){return o(n)},children:(0,_.jsx)(G,{children:(0,_.jsx)("use",{href:"".concat(on,"#icon-pencil")})})}),(0,_.jsx)(O,{"aria-label":"Delete contact",type:"button",onClick:function(){return function(n){d(n),a(!0)}(n)},children:(0,_.jsx)(G,{children:(0,_.jsx)("use",{href:"".concat(on,"#icon-delete")})})})]})]},n.id)})),c&&(0,_.jsx)(dn,{contact:u,onDeleteContact:function(n){t(n),v().Notify.success("Contact ".concat(u.name," successfully deleted.")),p()},onNoDeleteContact:p})]})},pn=P.ZP.label(V||(V=(0,j.Z)(["\n  display: block;\n  font-size: 40px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 2px 0 0;\n  margin: 10px 0 30px 0;\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.textShadowColor})),hn=(0,P.ZP)(N.g)(X||(X=(0,j.Z)(["\n  width: 320px;\n  margin: 0 0 0 10px;\n  vertical-align: top;\n\n  &: hover, focus {\n    box-shadow: "," 0px 10px 20px,\n      "," 0px 2px 5px;\n  }\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor})),fn=function(n){var e=n.value,t=n.onChange;return(0,_.jsxs)(pn,{children:["Find contacts by name:",(0,_.jsx)(hn,{type:"text",value:e,onChange:t})]})},mn=t(1150),gn=t(1552),bn=(0,P.ZP)(B.y)($||($=(0,j.Z)(["\n  align-items: flex-start;\n  text-align: center;\n  gap: 10px;\n"]))),Zn=P.ZP.h2(nn||(nn=(0,j.Z)(["\n  font-size: 70px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 10px 0 5px;\n  margin: 10px 0;\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor})),Cn=P.ZP.div(en||(en=(0,j.Z)(["\n  flex: 2;\n  padding: 0 10px;\n"]))),yn=P.ZP.p(tn||(tn=(0,j.Z)(["\n  font-size: 30px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  margin: 100px 0 0 0;\n"])),(function(n){return n.theme.colors.textShadowColor})),wn=t(6338),vn=function(){var n=(0,Z.v9)(C.R7),e=(0,Z.v9)(C.xm),t=(0,Z.v9)(C.Cc),o=(0,Z.v9)(C.Uv),r=(0,Z.v9)(C.YI),i=(0,b.useState)(null),c=(0,g.Z)(i,2),a=c[0],l=c[1],s=(0,Z.I0)();(0,b.useEffect)((function(){n&&s((0,y.nQ)())}),[n,s]);var u=function(){var n=r.toLowerCase();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,_.jsxs)("section",{children:[(0,_.jsx)(gn.f,{children:"Phonebook"}),(0,_.jsxs)(bn,{children:[(0,_.jsx)(q,{editingContact:a,setEditingContact:l}),(0,_.jsxs)(Cn,{children:[(0,_.jsx)(Zn,{children:"Contacts"}),t&&(0,_.jsx)(mn.a,{}),o&&(0,_.jsxs)("p",{children:["Oops, some error occured...",o]}),null===e?(0,_.jsx)(yn,{children:"No contacts found."}):(0,_.jsx)(_.Fragment,{children:0===e.length?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(yn,{children:"No contacts found."})}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(fn,{value:r,onChange:function(n){s((0,wn.T)(n.target.value))}}),0===u.length?(0,_.jsx)(yn,{children:"No contact found with this name."}):(0,_.jsx)(xn,{contacts:u,onEditContact:function(n){console.log("Editing Contact (contacts.jsx):",n),l(n)},onDeleteContact:function(n){s((0,y.ku)(n))}})]})})]})]})]})}},7430:function(n,e,t){t.d(e,{g:function(){return i}});var o,r=t(168),i=t(6444).ZP.input(o||(o=(0,r.Z)(["\n  box-sizing: border-box;\n  height: 50px;\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: ",";\n  padding: 8px 15px;\n  outline: none; /* \u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u043e\u0431\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043f\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u0456 */\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    box-shadow: "," 0px 5px 10px,\n      "," 0px 2px 5px;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}))},2361:function(n,e,t){t.d(e,{NF:function(){return p},Po:function(){return f},fN:function(){return h},f_:function(){return g},kz:function(){return m},yW:function(){return b}});var o,r,i,c,a,l,s=t(168),u=t(6444),d=t(7430),x=t(3455),p=(0,u.ZP)(x.y)(o||(o=(0,s.Z)(["\n  position: fixed;\n  top: 80px;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  background-color: ",";\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.is-hidden {\n    visibility: hidden;\n    opacity: 0;\n  }\n"])),(function(n){return n.theme.colors.backdropColor})),h=u.ZP.div(r||(r=(0,s.Z)(["\n  background-color: ",";\n  box-shadow: 1px 1px 14px 4px ",";\n  border-radius: 16px;\n  max-width: 400px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  animation-name: modalopen;\n  animation-duration: 1.75s;\n\n  @keyframes modalopen {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.accentColor})),f=u.ZP.h1(i||(i=(0,s.Z)(["\n  font-size: 25px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.textShadowColor})),m=u.ZP.form(c||(c=(0,s.Z)(["\n  text-align: center;\n"]))),g=u.ZP.div(a||(a=(0,s.Z)(["\n  display: grid;\n  color: ",";\n  font-size: 20px;\n  margin: 0 0 5px 0;\n"])),(function(n){return n.theme.colors.textShadowColor})),b=(0,u.ZP)(d.g)(l||(l=(0,s.Z)(["\n  width: 100%;\n"])))}}]);
//# sourceMappingURL=619.ec378f61.chunk.js.map