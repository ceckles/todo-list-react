(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var c=o(0),s=o(1),n=o.n(s),a=o(7),i=o.n(a),l=(o(14),o(3)),d=(o(15),o(8)),r=function(t){var e=t.setInputText,o=t.todos,s=t.inputText,n=t.setTodos,a=t.setStatus;return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{onChange:function(t){e(t.target.value)},value:s,type:"text",className:"todo-input"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),n([].concat(Object(d.a)(o),[{text:s,completed:!1,id:1e3*Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-plus-square"})}),Object(c.jsx)("div",{className:"select",children:Object(c.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"complete",children:"Complete"}),Object(c.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=o(6),j=function(t){var e=t.text,o=t.setTodos,s=t.todos,n=t.todo;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("li",{className:"todo-item ".concat(n.completed?"completed":""),children:e}),Object(c.jsx)("button",{onClick:function(){o(s.map((function(t){return t.id===n.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(c.jsx)("i",{className:"fas fa-check"})}),Object(c.jsx)("button",{onClick:function(){o(s.filter((function(t){return t.id!==n.id})))},className:"trash-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,o=t.setTodos,s=t.filteredTodos;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:s.map((function(t){return Object(c.jsx)(j,{text:t.text,setTodos:o,todos:e,todo:t},t.id)}))})})};var f=function(){var t=Object(s.useState)(""),e=Object(l.a)(t,2),o=e[0],n=e[1],a=Object(s.useState)([]),i=Object(l.a)(a,2),d=i[0],u=i[1],j=Object(s.useState)("all"),f=Object(l.a)(j,2),m=f[0],O=f[1],p=Object(s.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];Object(s.useEffect)((function(){T()}),[]),Object(s.useEffect)((function(){g(),N()}),[d,m]);var g=function(){switch(m){case"complete":v(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(d.filter((function(t){return!1===t.completed})));break;default:v(d)}},N=function(){localStorage.setItem("todos",JSON.stringify(d))},T=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"The Great Todo List!"})}),Object(c.jsx)(r,{todos:d,setTodos:u,inputText:o,setInputText:n,setStatus:O}),Object(c.jsx)(b,{setTodos:u,todos:d,filteredTodos:h})]})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,c=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;o(t),c(t),s(t),n(t),a(t)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.5cff4a2c.chunk.js.map