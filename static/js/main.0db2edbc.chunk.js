(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(5)),s=n(2),i=n(1),r=n(7),u=(n(15),n(0)),j=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),r=Object(s.a)(l,2),j=r[0],o=r[1],d=Object(i.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:j,date:new Date(x)};e.onSaveExpenseData(n),c(""),o(""),v("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},o=(n(17),function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(u.jsxs)("div",{className:"new-expense",children:[!a&&Object(u.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(u.jsx)(j,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})}),d=(n(18),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(u.jsx)("option",{value:"2023",children:"2023"}),Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(19),n(20),n(21);var b=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(u.jsxs)("div",{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__day",children:n}),Object(u.jsx)("div",{className:"expense-date__year",children:a})]})};n(22);var x=function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"expense-item",children:[Object(u.jsx)(b,{date:e.date}),Object(u.jsxs)("div",{className:"expense-item__description",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},v=function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:"No Expeses To Show."}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(x,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},O=n(9),h=(n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsxs)("div",{className:"chart-bar__label",children:[" ",e.label]})]})}),m=(n(24),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(h,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),p=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(O.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(u.jsx)(m,{dataPoints:n})},f=function(e){var t=Object(i.useState)("2021"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.item.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(u.jsxs)("div",{className:"expenses",children:[Object(u.jsx)(d,{selected:a,onChangeFilter:function(e){c(e)}}),Object(u.jsx)(p,{expenses:l}),Object(u.jsx)(v,{items:l})]})},_=[{id:"e1",title:"Shoping ",amount:150.5,date:new Date(2020,5,14)},{id:"e2",title:"Car insurance",amount:52.75,date:new Date(2021,8,2)},{id:"e3",title:"Travelling  ",amount:180.45,date:new Date(2021,3,10)}],g=function(){var e=Object(i.useState)(_),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(o,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(u.jsx)(f,{item:n})]})};c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.0db2edbc.chunk.js.map