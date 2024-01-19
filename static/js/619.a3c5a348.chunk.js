"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[619],{1552:function(n,t,e){e.d(t,{f:function(){return i}});var o,r=e(168),i=e(6444).ZP.h1(o||(o=(0,r.Z)(["\n  font-size: 100px;\n  font-weight: bold;\n  width: 100%;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 10px 0 5px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  box-shadow: "," 0px 20px 30px,\n    "," 0px 2px 5px;\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}))},1144:function(n,t,e){e.d(t,{a:function(){return r}});e(2791);var o=e(184),r=function(n){var t=n.label,e=n.name,r=n.type,i=n.value,c=n.onChange,a=n.required,l=n.minLength,s=n.autoComplete,u=n.wrapperStyle,x=n.inputStyle,d="input-".concat(e);return(0,o.jsxs)(u,{children:[(0,o.jsx)("label",{htmlFor:d,children:t}),(0,o.jsx)(x,{type:r,id:d,name:e,value:i,onChange:c,required:a,minLength:l,autoComplete:s})]})}},3619:function(n,t,e){e.r(t),e.d(t,{default:function(){return Cn}});var o,r,i,c,a,l,s,u,x,d,p,h,f=e(9439),m=e(2791),g=e(9434),b=e(6351),C=e(3871),Z=e(1686),y=e.n(Z),v=e(9662),j=e(168),w=e(6444),P=e(7430),k=w.ZP.div(o||(o=(0,j.Z)(["\n  margin-top: 100px;\n  padding-left: 30px;\n  height: 100vh;\n"]))),N=w.ZP.form(r||(r=(0,j.Z)(["\n  max-width: 400px;\n  padding: 10px;\n  border: 2px solid ",";\n  border-radius: 4px;\n  box-shadow: "," 5px 0 5px;\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n  text-shadow: "," 5px 0 1px;\n  position: sticky;\n  top: 50px;\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor})),S=w.ZP.div(i||(i=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),z=(0,w.ZP)(P.g)(c||(c=(0,j.Z)(["\n  width: 350px;\n"]))),D=w.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),E=e(1144),F=e(184),I=function(n){var t=n.editingContact,e=n.setEditingContact,o=(0,g.v9)(b.xm),r=(0,g.I0)(),i=(0,m.useState)(""),c=(0,f.Z)(i,2),a=c[0],l=c[1],s=(0,m.useState)(""),u=(0,f.Z)(s,2),x=u[0],d=u[1];(0,m.useEffect)((function(){t&&(l(t.name),d(t.number))}),[t]);return(0,F.jsx)(k,{children:(0,F.jsxs)(N,{onSubmit:function(n){n.preventDefault();var i=n.currentTarget,c=i.elements.contactNumber.value.trim(),a=i.elements.contactName.value.trim(),s=a.split(" ");return a=s.map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" "),o.some((function(n){return n.name===a&&t!==n}))?y().Notify.info("Contact with name ".concat(a," already exists!")):o.some((function(n){return n.number===c&&t!==n}))?y().Notify.info("Contact with number ".concat(c," already exists!")):(r(t?(0,C.hx)({id:t.id,name:a,number:c}):(0,C.G3)({name:a,number:c})),y().Notify.success("Contact ".concat(a," successfully ").concat(t?"edited":"added",".")),l(""),d(""),void e(null))},children:[(0,F.jsx)(E.a,{label:"Name:",type:"text",name:"contactName",value:a,onChange:function(n){return l(n.target.value)},required:!0,wrapperStyle:S,inputStyle:z}),(0,F.jsx)(E.a,{label:"Number:",type:"text",name:"contactNumber",value:x,onChange:function(n){return d(n.target.value)},required:!0,wrapperStyle:S,inputStyle:z}),(0,F.jsxs)(D,{children:[(0,F.jsx)(v.I,{type:"submit",children:t?"Edit contact":"Add contact"}),t&&(0,F.jsx)(v.I,{type:"button",onClick:function(){e(null),l(""),d("")},children:"Cancel"})]})]})})},A=e(3455),L=w.ZP.ul(l||(l=(0,j.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]))),_=w.ZP.li(s||(s=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: start;\n  font-size: 20px;\n  font-weight: bold;\n  list-style: none;\n  width: 350px;\n  padding: 12px 20px;\n  margin: 0 auto 5px;\n  box-sizing: border-box;\n  border-radius: 6px;\n  color: ",";\n  border: 1px solid ",";\n  box-shadow: 0 2px 8px ",";\n\n  &: hover {\n    box-shadow: "," 0px 10px 10px 0px;\n  }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.colors.accentColor})),q=(0,w.ZP)(A.y)(u||(u=(0,j.Z)(["\n  flex-direction: column;\n  align-items: start;\n"]))),B=w.ZP.span(x||(x=(0,j.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.textShadowColor})),M=w.ZP.div(d||(d=(0,j.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n"]))),T=w.ZP.svg(p||(p=(0,j.Z)(["\n  width: 15px;\n  height: 15px;\n"]))),U=(0,w.ZP)(v.I)(h||(h=(0,j.Z)(["\n  // font-size: 30px;\n  border-radius: 5px;\n  padding: 0;\n  width: 30px;\n  margin: 10px 0;\n"])));var Y,G,O,Q,R,W,H,J,K,V,X,$=e.p+"static/media/sprite.a90e3049b5c1d93a552ca81bee6557bf.svg",nn=e(2361),tn=(0,w.ZP)(nn.NF)(Y||(Y=(0,j.Z)(["\n  top: 0;\n  height: 100%;\n  cursor: pointer;\n"]))),en=(0,w.ZP)(nn.fN)(G||(G=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  cursor: auto;\n"]))),on=(0,w.ZP)(nn.Po)(O||(O=(0,j.Z)(["\n  overflow: auto;\n"]))),rn=w.ZP.div(Q||(Q=(0,j.Z)(["\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n"]))),cn=(0,w.ZP)(v.I)(R||(R=(0,j.Z)(["\n  margin: 0;\n"]))),an=function(n){var t=n.contact,e=n.onDeleteContact,o=n.onNoDeleteContact,r=function(){o()};return(0,F.jsx)(tn,{className:"ModalDeleteBackdrop",onClick:function(n){n.target.classList.contains("ModalDeleteBackdrop")&&r()},children:(0,F.jsxs)(en,{children:[(0,F.jsxs)(on,{children:["Are you sure you want to delete the contact ",(0,F.jsx)("br",{})," ",t.name,"?"]}),(0,F.jsxs)(rn,{children:[(0,F.jsx)(cn,{type:"button",onClick:function(){e(t.id)},children:"Yes"}),(0,F.jsx)(cn,{type:"button",onClick:r,children:"No"})]})]})})},ln=function(n){var t=n.contacts,e=n.onDeleteContact,o=n.onEditContact,r=(0,m.useState)(!1),i=(0,f.Z)(r,2),c=i[0],a=i[1],l=(0,m.useState)(null),s=(0,f.Z)(l,2),u=s[0],x=s[1],d=Array.isArray(t)&&t.length>0,p=function(){x(null),a(!1)};return(0,F.jsxs)(L,{children:[d&&t.map((function(n){return(0,F.jsxs)(_,{children:[(0,F.jsxs)(q,{children:[(0,F.jsxs)("span",{children:[n.name,":"]}),(0,F.jsx)(B,{children:n.number})]}),(0,F.jsxs)(M,{children:[(0,F.jsx)("a",{href:n.number,children:(0,F.jsx)(U,{"aria-label":"Call the contact",type:"button",children:(0,F.jsx)(T,{children:(0,F.jsx)("use",{href:"".concat($,"#icon-phone")})})})}),(0,F.jsx)(U,{"aria-label":"Edit contact",type:"button",onClick:function(){return o(n)},children:(0,F.jsx)(T,{children:(0,F.jsx)("use",{href:"".concat($,"#icon-pencil")})})}),(0,F.jsx)(U,{"aria-label":"Delete contact",type:"button",onClick:function(){return function(n){x(n),a(!0)}(n)},children:"\xd7"})]})]},n.id)})),c&&(0,F.jsx)(an,{contact:u,onDeleteContact:function(n){e(n),y().Notify.success("Contact ".concat(u.name," successfully deleted.")),p()},onNoDeleteContact:p})]})},sn=w.ZP.label(W||(W=(0,j.Z)(["\n  display: block;\n  font-size: 40px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 2px 0 0;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.textShadowColor})),un=(0,w.ZP)(P.g)(H||(H=(0,j.Z)(["\n  width: 320px;\n  margin-left: 10px;\n  vertical-align: top;\n\n  &: hover, focus {\n    box-shadow: "," 0px 10px 20px,\n      "," 0px 2px 5px;\n  }\n"])),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor})),xn=function(n){var t=n.value,e=n.onChange;return(0,F.jsxs)(sn,{children:["Find contacts by name:",(0,F.jsx)(un,{type:"text",value:t,onChange:e})]})},dn=e(1150),pn=e(1552),hn=(0,w.ZP)(A.y)(J||(J=(0,j.Z)(["\n  align-items: flex-start;\n  text-align: center;\n  gap: 10px;\n"]))),fn=w.ZP.h2(K||(K=(0,j.Z)(["\n  font-size: 70px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  text-shadow: "," 10px 0 5px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.textShadowColor})),mn=w.ZP.div(V||(V=(0,j.Z)(["\n  width: 100%;\n"]))),gn=w.ZP.p(X||(X=(0,j.Z)(["\n  font-size: 30px;\n  font-weight: bold;\n  color: ",";\n  text-align: center;\n  margin-top: 100px;\n"])),(function(n){return n.theme.colors.textShadowColor})),bn=e(6338),Cn=function(){var n=(0,g.v9)(b.R7),t=(0,g.v9)(b.xm),e=(0,g.v9)(b.Cc),o=(0,g.v9)(b.Uv),r=(0,g.v9)(b.YI),i=(0,m.useState)(null),c=(0,f.Z)(i,2),a=c[0],l=c[1],s=(0,g.I0)();(0,m.useEffect)((function(){n&&s((0,C.nQ)())}),[n,s]);var u=function(){var n=r.toLowerCase();return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(n)}))}();return(0,F.jsxs)("section",{children:[(0,F.jsx)(pn.f,{children:"Phonebook"}),(0,F.jsxs)(hn,{children:[(0,F.jsx)(I,{editingContact:a,setEditingContact:l}),(0,F.jsxs)(mn,{children:[(0,F.jsx)(fn,{children:"Contacts"}),e&&(0,F.jsx)(dn.a,{}),o&&(0,F.jsxs)("p",{children:["Oops, some error occured...",o]}),null===t?(0,F.jsx)(gn,{children:"No contacts found."}):(0,F.jsx)(F.Fragment,{children:0===t.length?(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(gn,{children:"No contacts found."})}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(xn,{value:r,onChange:function(n){s((0,bn.T)(n.target.value))}}),0===u.length?(0,F.jsx)(gn,{children:"No contact found with this name."}):(0,F.jsx)(ln,{contacts:u,onEditContact:function(n){l(n)},onDeleteContact:function(n){s((0,C.ku)(n))}})]})})]})]})]})}},7430:function(n,t,e){e.d(t,{g:function(){return i}});var o,r=e(168),i=e(6444).ZP.input(o||(o=(0,r.Z)(["\n  height: 25px;\n  margin: 0 auto;\n  font-size: 20px;\n  font-weight: bold;\n  background-color: ",";\n  padding: 8px 15px;\n\n  &: hover {\n    box-shadow: "," 0px 5px 10px,\n      "," 0px 2px 5px;\n  }\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.accentColor}),(function(n){return n.theme.colors.accentColor}))},2361:function(n,t,e){e.d(t,{NF:function(){return p},Po:function(){return f},fN:function(){return h},f_:function(){return g},kz:function(){return m},yW:function(){return b}});var o,r,i,c,a,l,s=e(168),u=e(6444),x=e(7430),d=e(3455),p=(0,u.ZP)(d.y)(o||(o=(0,s.Z)(["\n  position: fixed;\n  top: 80px;\n  left: 0;\n  width: 100%;\n  height: 80%;\n  background-color: ",";\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &.is-hidden {\n    visibility: hidden;\n    opacity: 0;\n  }\n"])),(function(n){return n.theme.colors.backdropColor})),h=u.ZP.div(r||(r=(0,s.Z)(["\n  background-color: ",";\n  box-shadow: 1px 1px 14px 4px ",";\n  border-radius: 16px;\n  max-width: 400px;\n  max-height: 80vh;\n  padding: 20px 20px 20px 20px;\n  animation-name: modalopen;\n  animation-duration: 1.75s;\n\n  @keyframes modalopen {\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  }\n"])),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.colors.accentColor})),f=u.ZP.h1(i||(i=(0,s.Z)(["\n  font-size: 25px;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.textShadowColor})),m=u.ZP.form(c||(c=(0,s.Z)(["\n  text-align: center;\n"]))),g=u.ZP.div(a||(a=(0,s.Z)(["\n  display: grid;\n  color: ",";\n  font-size: 20px;\n  margin-bottom: 5px;\n"])),(function(n){return n.theme.colors.textShadowColor})),b=(0,u.ZP)(x.g)(l||(l=(0,s.Z)(["\n  width: 300px;\n"])))}}]);
//# sourceMappingURL=619.a3c5a348.chunk.js.map