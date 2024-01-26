"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[619],{1552:function(n,e,t){t.d(e,{f:function(){return i}});var o,r=t(168),i=t(6444).ZP.h1(o||(o=(0,r.Z)(["\n  font-size: 100px;\n  font-weight: bold;\n  width: 100%;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 10px 0 5px;\n  margin: 10px 0;\n  box-shadow: "," 0px 20px 30px,\n    "," 0px 2px 5px;\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}))},3969:function(n,e,t){t.d(e,{a:function(){return l}});var o,r=t(1413),i=(t(2791),t(168)),c=t(6444).ZP.p(o||(o=(0,i.Z)(["\n  color: ",";\n  font-family: Roboto;\n  font-size: 14px;\n  //   font-weight: 400;\n  line-height: 1.17;\n  margin: 0;\n  text-shadow: none;\n"])),(function(n){return n.theme.colors.errorColor})),a=t(3329),l=function(n){var e=n.label,t=n.name,o=n.wrapperStyle,i=n.inputStyle,l=n.formik,s=o,u=i,d="input-".concat(t);return(0,a.jsxs)(s,{children:[(0,a.jsx)("label",{htmlFor:d,children:e}),(0,a.jsx)(u,(0,r.Z)({id:d,name:t},n)),l&&l.touched[t]&&l.errors[t]&&(0,a.jsx)(c,{children:l.errors[t]})]})}},3619:function(n,e,t){t.r(e),t.d(e,{default:function(){return jn}});var o,r,i,c,a,l,s,u,d,x,p,h=t(9439),f=t(2791),m=t(9434),g=t(6351),b=t(3871),Z=t(6338),C=t(1686),y=t(3969),j=t(3307),v=t(168),w=t(6444),P=t(9662),k=t(7430),S=w.ZP.div(o||(o=(0,v.Z)(["\n  flex: 1;\n  margin: 100px 0 0 0;\n  padding: 0 0 0 30px;\n  height: 100vh;\n"]))),N=w.ZP.form(r||(r=(0,v.Z)(["\n  padding: 10px;\n  border: 2px solid ",";\n  border-radius: 4px;\n  box-shadow: "," 5px 0 5px;\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n  text-shadow: "," 5px 0 1px;\n  position: sticky;\n  top: 50px;\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor})),z=w.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),D=(0,w.ZP)(k.g)(c||(c=(0,v.Z)(["\n  width: 100%;\n"]))),E=w.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  justify-content: space-around;\n  margin: 10px 0 0 0;\n"]))),F=(0,w.ZP)(P.I)(l||(l=(0,v.Z)(["\n  margin: 0;\n"]))),I=t(3329),A=function(n){var e=n.editingContact,t=n.setEditingContact,o=(0,m.v9)(g.xm),r=(0,m.I0)(),i=(0,f.useState)(""),c=(0,h.Z)(i,2),a=c[0],l=c[1],s=(0,f.useState)(""),u=(0,h.Z)(s,2),d=u[0],x=u[1];(0,f.useEffect)((function(){e&&(l(e.name),x(e.number))}),[e]);return(0,I.jsx)(S,{children:(0,I.jsxs)(N,{onSubmit:function(n){n.preventDefault();var i=n.currentTarget,c=i.elements.contactNumber.value.trim(),a=i.elements.contactName.value.trim(),s=a.split(" ");a=s.map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" "),(0,j.MZ)(o,a,e)&&(0,j.oi)(o,c,e)&&(r(e?(0,b.hx)({id:e.id,name:a,number:c}):(0,b.G3)({name:a,number:c})),C.Notify.success("Contact ".concat(a," successfully ").concat(e?"edited":"added",".")),l(""),x(""),t(null))},children:[(0,I.jsx)(y.a,{label:"Name:",type:"text",name:"contactName",placeholder:"Enter name",value:a,onChange:function(n){return l(n.target.value)},required:!0,wrapperStyle:z,inputStyle:D}),(0,I.jsx)(y.a,{label:"Number:",type:"text",name:"contactNumber",placeholder:"Enter phone number",value:d,onChange:function(n){return x(n.target.value)},required:!0,wrapperStyle:z,inputStyle:D}),(0,I.jsxs)(E,{children:[(0,I.jsx)(F,{type:"submit",children:e?"Edit contact":"Add contact"}),e&&(0,I.jsx)(F,{type:"button",onClick:function(){t(null),l(""),x("")},children:"Cancel"})]})]})})},_=t(2361),L=(0,w.ZP)(_.NF)(s||(s=(0,v.Z)(["\n  top: 0;\n  height: 100%;\n  cursor: pointer;\n"]))),M=(0,w.ZP)(_.fN)(u||(u=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  cursor: auto;\n"]))),q=(0,w.ZP)(_.Po)(d||(d=(0,v.Z)(["\n  overflow: hidden;\n  word-break: break-all;\n  margin: 0;\n"]))),B=w.ZP.div(x||(x=(0,v.Z)(["\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n"]))),R=(0,w.ZP)(P.I)(p||(p=(0,v.Z)(["\n  margin: 0;\n"]))),T=function(n){var e=n.contact,t=n.onDeleteContact,o=n.onNoDeleteContact,r=function(){o()};return(0,I.jsx)(L,{className:"ModalDeleteBackdrop",onClick:function(n){n.target.classList.contains("ModalDeleteBackdrop")&&r()},children:(0,I.jsxs)(M,{children:[(0,I.jsxs)(_.Po,{children:["Are you sure you want to delete the contact",(0,I.jsxs)(q,{children:[e.name,"?"]})]}),(0,I.jsxs)(B,{children:[(0,I.jsx)(R,{type:"button",onClick:function(){t(e.id)},children:"Yes"}),(0,I.jsx)(R,{type:"button",onClick:r,children:"No"})]})]})})};var U,Y,G,O,Q,W,H,J,K,V,X,$,nn,en,tn=t.p+"static/media/sprite.bd874ef2f50889145201eb83c211610d.svg",on=w.ZP.ul(U||(U=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  list-style: none;\n"]))),rn=w.ZP.li(Y||(Y=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: start;\n  font-size: 20px;\n  font-weight: bold;\n  list-style: none;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 20px;\n  margin: 0 auto 5px;\n  box-sizing: border-box;\n  border-radius: 6px;\n  color: ",";\n  border: 1px solid ",";\n  box-shadow: 0 2px 8px ",";\n\n  &:hover {\n    box-shadow: "," 0px 10px 10px 0px;\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.colors.accentColor})),cn=w.ZP.div(G||(G=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  align-items: start;\n"]))),an=w.ZP.span(O||(O=(0,v.Z)(["\n  overflow: hidden;\n  word-break: break-all;\n"]))),ln=w.ZP.span(Q||(Q=(0,v.Z)(["\n  overflow: hidden;\n  word-break: break-all;\n  color: ",";\n"])),(function(n){return n.theme.colors.textShadowColor})),sn=w.ZP.div(W||(W=(0,v.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n"]))),un=w.ZP.svg(H||(H=(0,v.Z)(["\n  width: 15px;\n  height: 15px;\n"]))),dn=(0,w.ZP)(P.I)(J||(J=(0,v.Z)(["\n  border-radius: 5px;\n  padding: 0;\n  width: 35px;\n  margin: 10px 0;\n"]))),xn=function(n){var e=n.contacts,t=n.onDeleteContact,o=n.onEditContact,r=(0,f.useState)(!1),i=(0,h.Z)(r,2),c=i[0],a=i[1],l=(0,f.useState)(null),s=(0,h.Z)(l,2),u=s[0],d=s[1],x=Array.isArray(e)&&e.length>0,p=function(){d(null),a(!1)};return(0,I.jsxs)(on,{children:[x&&e.map((function(n){return(0,I.jsxs)(rn,{children:[(0,I.jsxs)(cn,{children:[(0,I.jsxs)(an,{children:[n.name,":"]}),(0,I.jsx)(ln,{children:n.number})]}),(0,I.jsxs)(sn,{children:[(0,I.jsx)(dn,{"aria-label":"Call the contact",type:"button",onClick:function(){return function(n){var e=n.number;window.location.href="tel:".concat(e)}(n)},children:(0,I.jsx)(un,{children:(0,I.jsx)("use",{href:"".concat(tn,"#icon-phone")})})}),(0,I.jsx)(dn,{"aria-label":"Edit contact",type:"button",onClick:function(){return o(n)},children:(0,I.jsx)(un,{children:(0,I.jsx)("use",{href:"".concat(tn,"#icon-pencil")})})}),(0,I.jsx)(dn,{"aria-label":"Delete contact",type:"button",onClick:function(){return function(n){d(n),a(!0)}(n)},children:(0,I.jsx)(un,{children:(0,I.jsx)("use",{href:"".concat(tn,"#icon-delete")})})})]})]},n.id)})),c&&(0,I.jsx)(T,{contact:u,onDeleteContact:function(n){t(n),C.Notify.success("Contact ".concat(u.name," successfully deleted.")),p()},onNoDeleteContact:p})]})},pn=w.ZP.label(K||(K=(0,v.Z)(["\n  display: block;\n  font-size: 40px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 2px 0 0;\n  margin: 10px 0 30px 0;\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.textShadowColor})),hn=(0,w.ZP)(k.g)(V||(V=(0,v.Z)(["\n  width: 320px;\n  margin: 0 0 0 10px;\n  vertical-align: top;\n\n  &: hover, focus {\n    box-shadow: "," 0px 10px 20px,\n      "," 0px 2px 5px;\n  }\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor})),fn=function(n){var e=n.value,t=n.onChange;return(0,I.jsxs)(pn,{children:["Find contacts by name:",(0,I.jsx)(hn,{type:"text",value:e,onChange:t})]})},mn=t(1150),gn=t(1552),bn=w.ZP.div(X||(X=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-items: flex-start;\n  text-align: center;\n  gap: 10px;\n"]))),Zn=w.ZP.h2($||($=(0,v.Z)(["\n  font-size: 70px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 10px 0 5px;\n  margin: 10px 0;\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor})),Cn=w.ZP.div(nn||(nn=(0,v.Z)(["\n  flex: 2;\n  padding: 0 10px;\n"]))),yn=w.ZP.p(en||(en=(0,v.Z)(["\n  font-size: 30px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  margin: 100px 0 0 0;\n"])),(function(n){return n.theme.colors.textShadowColor})),jn=function(){var n=(0,m.v9)(g.R7),e=(0,m.v9)(g.xm),t=(0,m.v9)(g.Cc),o=(0,m.v9)(g.Uv),r=(0,m.v9)(g.YI),i=(0,f.useState)(null),c=(0,h.Z)(i,2),a=c[0],l=c[1],s=(0,m.I0)();(0,f.useEffect)((function(){n&&s((0,b.nQ)())}),[n,s]);var u=function(){var n=r.toLowerCase();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,I.jsxs)("section",{children:[(0,I.jsx)(gn.f,{children:"Phonebook"}),(0,I.jsxs)(bn,{children:[(0,I.jsx)(A,{editingContact:a,setEditingContact:l}),(0,I.jsxs)(Cn,{children:[(0,I.jsx)(Zn,{children:"Contacts"}),t&&(0,I.jsx)(mn.a,{}),o&&(0,I.jsxs)("p",{children:["Oops, some error occured...",o]}),null===e?(0,I.jsx)(yn,{children:"No contacts found."}):(0,I.jsx)(I.Fragment,{children:0===e.length?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(yn,{children:"No contacts found."})}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(fn,{value:r,onChange:function(n){s((0,Z.T)(n.target.value))}}),0===u.length?(0,I.jsx)(yn,{children:"No contact found with this name."}):(0,I.jsx)(xn,{contacts:u,onEditContact:function(n){l(n)},onDeleteContact:function(n){s((0,b.ku)(n))}})]})})]})]})]})}},7430:function(n,e,t){t.d(e,{g:function(){return i}});var o,r=t(168),i=t(6444).ZP.input(o||(o=(0,r.Z)(["\n  box-sizing: border-box;\n  height: 50px;\n  margin: 0;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: ",";\n  padding: 8px 15px;\n  outline: none; /* \u0412\u0438\u0434\u0430\u043b\u044f\u0454 \u043e\u0431\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043f\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u0456 */\n  border-radius: 5px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    box-shadow: "," 0px 5px 10px,\n      "," 0px 2px 5px;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}))},2361:function(n,e,t){t.d(e,{NF:function(){return x},Po:function(){return h},fN:function(){return p},f_:function(){return m},kz:function(){return f},yW:function(){return g}});var o,r,i,c,a,l,s=t(168),u=t(6444),d=t(7430),x=u.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 80px;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  background-color: ",";\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.is-hidden {\n    visibility: hidden;\n    opacity: 0;\n  }\n"])),(function(n){return n.theme.colors.backdropColor})),p=u.ZP.div(r||(r=(0,s.Z)(["\n  background-color: ",";\n  box-shadow: 1px 1px 14px 4px ",";\n  border-radius: 16px;\n  max-width: 400px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px;\n  animation-name: modalopen;\n  animation-duration: 1.75s;\n\n  @keyframes modalopen {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.accentColor})),h=u.ZP.h1(i||(i=(0,s.Z)(["\n  font-size: 25px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.textShadowColor})),f=u.ZP.form(c||(c=(0,s.Z)(["\n  text-align: center;\n"]))),m=u.ZP.div(a||(a=(0,s.Z)(["\n  display: grid;\n  color: ",";\n  font-size: 20px;\n  margin: 0 0 5px 0;\n"])),(function(n){return n.theme.colors.textShadowColor})),g=(0,u.ZP)(d.g)(l||(l=(0,s.Z)(["\n  width: 100%;\n"])))}}]);
//# sourceMappingURL=619.770e4e1a.chunk.js.map