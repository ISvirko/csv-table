(this["webpackJsonpcsv-employees"]=this["webpackJsonpcsv-employees"]||[]).push([[0],{25:function(e,n,o){},33:function(e,n,o){"use strict";o.r(n);var l=o(1),i=o(0),t=o(14),r=o.n(t),a=(o(25),o(4)),c=o(11),u=o(9),d=o.n(u),s=o(15),v=o.n(s),m=o.p+"static/media/employees.35c2db2e.csv",p=o(19),f=o.n(p),h=o(3),b=o.n(h),y="rgba(242, 38, 19, 0.3)",g=function(e){return e.match(/^((\+?\d{1}?)?\d{10})$/)},x=function(e){var n=e.slice(1);return Number(n).toFixed(2)},j=function(e){var n=e.split("|").map((function(e){return f()(e)}));return n.length>1?n.join(", "):n.join("")},w=[{name:"Full Name",selector:"full name",conditionalCellStyles:[{when:function(e){return!(null===e||void 0===e?void 0:e["full name"])},style:{backgroundColor:y}}]},{name:"Phone",selector:"phone",format:function(e){return(null===e||void 0===e?void 0:e.phone)&&g(e.phone)?(n=e.phone,"+1".concat(n.slice(-10))):e.phone;var n},conditionalCellStyles:[{when:function(e){return(null===e||void 0===e?void 0:e.phone)&&!g(e.phone)||!(null===e||void 0===e?void 0:e.phone)},style:{backgroundColor:y}}]},{name:"Email",selector:"email",conditionalCellStyles:[{when:function(e){return(null===e||void 0===e?void 0:e.email)&&!(null===e||void 0===e?void 0:e.email).match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)||!(null===e||void 0===e?void 0:e.email)},style:{backgroundColor:y}}]},{name:"Age",selector:"age",conditionalCellStyles:[{when:function(e){return(null===e||void 0===e?void 0:e.age)&&(n=e.age,!(Number.isInteger(+n)&&n>0))||!(null===e||void 0===e?void 0:e.age);var n},style:{backgroundColor:y}}]},{name:"Experience",selector:"experience",conditionalCellStyles:[{when:function(e){return(null===e||void 0===e?void 0:e.experience)&&!function(e){return Number.isInteger(+e.experience)&&+e.experience>=0&&+e.age-21>=+e.experience}(e)||!(null===e||void 0===e?void 0:e.experience)},style:{backgroundColor:y}}]},{name:"Yearly Income",selector:"yearly income",format:function(e){return(null===e||void 0===e?void 0:e["yearly income"])&&x(e["yearly income"])},conditionalCellStyles:[{when:function(e){return(null===e||void 0===e?void 0:e["yearly income"])&&x(e["yearly income"])>1e6||!(null===e||void 0===e?void 0:e["yearly income"])},style:{backgroundColor:y}}]},{name:"Has Children",selector:"has children",cell:function(e){return Object(l.jsx)("span",{style:{textTransform:"uppercase"},children:(null===e||void 0===e?void 0:e["has children"])?null===e||void 0===e?void 0:e["has children"]:"false"})},conditionalCellStyles:[{when:function(e){return(null===e||void 0===e?void 0:e["has children"])&&!("true"===(n=e["has children"]).toLowerCase()||"false"===n.toLowerCase());var n},style:{backgroundColor:y}}]},{name:"License States",selector:"license states",cell:function(e){return(null===e||void 0===e?void 0:e["license states"])&&Object(l.jsx)("div",{style:{display:"flex"},children:j(e["license states"])})||!(null===e||void 0===e?void 0:e["license states"])}},{name:"Expiration Date",selector:"expiration date",conditionalCellStyles:[{when:function(e){return(null===e||void 0===e?void 0:e["expiration date"])&&!function(e){var n=b()(new Date(e)).diff(b()(Date.now()))>0;return(b()(e,"YYYY-MM-DD",!0).isValid()||b()(e,"MM/DD/YYYY",!0).isValid())&&n}(e["expiration date"])||!(null===e||void 0===e?void 0:e["expiration date"])},style:{backgroundColor:y}}]},{name:"License Number",selector:"license number",conditionalCellStyles:[{when:function(e){return(null===e||void 0===e?void 0:e["license number"])&&!(null===e||void 0===e?void 0:e["license number"]).match(/^[a-zA-Z0-9]{6}$/)||!(null===e||void 0===e?void 0:e["license number"])},style:{backgroundColor:y}}]},{name:"ID",selector:"id"},{name:"Duplicate with",selector:"duplicate"}],C=function(e,n,o,l){var i;return null===(i=e.find((function(e){var i,t;if(e[o]&&n[o]&&e[l]&&n[l])return e.id!==n.id&&((null===(i=e[o])||void 0===i?void 0:i.toLowerCase())===(null===(t=n[o])||void 0===t?void 0:t.toLowerCase())||e[l]===n[l])})))||void 0===i?void 0:i.id},O=o(6),k=o(2);function S(){var e=Object(O.a)(["\n  padding: 30px 60px;\n  background-color: rgba(242, 38, 19, 0.3);\n  border: 1px solid red;\n"]);return S=function(){return e},e}function D(){var e=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n  padding: 50px 30px\n  }\n"]);return D=function(){return e},e}function Y(){var e=Object(O.a)(["\n  padding: 8px 20px;\n  background-color: rgba(11, 156, 49, 0.6);\n  outline: none;\n  border: 1px solid #555;\n  color: #fff;\n  transition: all ease-in-out 0.3s;\n\n  &:hover {\n    background-color: rgba(11, 156, 49, 0.4);\n  }\n"]);return Y=function(){return e},e}var L=k.default.button(Y()),I=k.default.div(D()),E=k.default.h2(S()),N=function(){var e=Object(i.useState)([]),n=Object(c.a)(e,2),o=n[0],t=n[1],r=Object(i.useState)(!1),u=Object(c.a)(r,2),s=u[0],p=u[1];return Object(l.jsxs)(I,{children:[Object(l.jsx)(L,{onClick:function(){try{d.a.parse(m,{download:!0,complete:function(e){var n=e.data[0].map((function(e){return e.toLowerCase()}));n.includes("full name")&&n.includes("email")&&n.includes("phone")||p(!0)}}),d.a.parse(m,{download:!0,header:!0,complete:function(e){var n=e.data.map((function(e,n){return Object(a.a)(Object(a.a)({},e),{},{id:n+1})})),o=n.map((function(e){var o;return Object(a.a)(Object(a.a)({},e),{},{duplicate:null!==(o=C(n,e,"email","phone"))&&void 0!==o?o:null})}));t(o)}})}catch(s){return void p(!0)}},children:"Import Users"}),s?Object(l.jsx)(E,{children:"File format is not correct"}):o.length?Object(l.jsx)(v.a,{title:"Employees",columns:w,data:o,highlightOnHover:!0,pagination:!0}):null]})};r.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.6a23100c.chunk.js.map