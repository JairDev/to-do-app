(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),l=c(17),i=c.n(l),s=(c(23),c(4)),r=c(8),d=c(11),o=c(2),j=(c(24),c(0)),u=function(e){var t=e.objTask,c=e.handleClickFavorite,n=e.handleClickDelete,l=e.handleClickSave,i=e.handleClickComplete,s=e.handleClickEdit,d=Object(a.useRef)(null),o=Object(a.useRef)(null),u=Object(a.useRef)(null),h=Object(a.useRef)(null),p=Object(a.useState)(""),f=Object(r.a)(p,2),b=f[0],m=f[1],O=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=d.current,c=o.current,a=h.current,n=u.current;t.favorite?e.classList.add("selected"):e.classList.remove("selected"),t.completed?c.classList.add("line-completed"):c.classList.remove("line-completed"),t.completed?n.checked=!0:n.checked=!1,t.favorite&&t.selected?a.classList.add("selected-favorite"):a.classList.remove("selected-favorite"),t.completed&&t.selected?a.classList.add("selected-completed"):a.classList.remove("selected-completed"),!t.completed&&t.selected?a.classList.add("selected-not-completed"):a.classList.remove("selected-not-completed")}),[t.completed,t.favorite,t.selected]);return Object(j.jsxs)("div",{ref:h,className:"App-task",children:[Object(j.jsx)("span",{className:"date-task",children:t.dateFormat}),Object(j.jsx)("span",{ref:o,className:"style-completed"}),Object(j.jsx)("div",{className:"App-check-completed",children:Object(j.jsx)("form",{children:Object(j.jsx)("input",{id:"input-check",ref:u,"data-taskid":t.id,onClick:function(e){return i(e,t)},type:"checkbox"})})}),Object(j.jsx)("div",{className:"App-task-edit",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(j.jsx)("input",{id:"input-task-edit",type:"text",name:"task-edit",value:t.edit?b:t.text,onChange:function(e){m(e.target.value)},readOnly:"readonly",ref:O})})}),Object(j.jsx)("div",{className:"content-icon-favorite action-task",children:Object(j.jsx)("span",{onClick:function(e){return c(e,t)},className:"icon-favorite",children:Object(j.jsx)("svg",{ref:d,className:"icon icon-star-empty",children:Object(j.jsx)("use",{xlinkHref:"#icon-star-empty"})})})}),Object(j.jsx)("div",{className:"content-editar action-task",children:Object(j.jsx)("form",{children:Object(j.jsx)("button",{onClick:function(e){return s(e,t,b)},children:t.edit?"Guardar":"Editar"})})}),Object(j.jsx)("div",{className:"content-guardar action-task",children:Object(j.jsx)("form",{children:Object(j.jsx)("button",{"data-taskid":t.id,onClick:function(e){return l(e,b,t)},children:"Guardar"})})}),Object(j.jsx)("div",{className:"content-icon-delete action-task",children:Object(j.jsx)("span",{"data-taskid":t.id,onClick:n,className:"icon-delete",children:Object(j.jsx)("svg",{className:"icon icon-bin",children:Object(j.jsx)("use",{xlinkHref:"#icon-bin"})})})})]})},h=function(e){var t=e.favoriteArr,c=e.handleClickDelete;return Object(j.jsx)("section",{className:"App-favorite-section",children:t.map((function(e){return Object(j.jsx)(u,{objTask:e,handleClickDelete:c},e.text)}))})},p=function(e){var t=Object(a.useState)(JSON.parse(localStorage.getItem(e))||[]),c=Object(r.a)(t,2),n=c[0],l=c[1];return localStorage.setItem(e,JSON.stringify(n)),[n,l]},f=(c(26),function(e){e.favoriteArr;var t=e.handleFilterDate,c=(e.getDate,Object(a.useRef)(null)),n=Object(a.useRef)(null);return Object(j.jsxs)("div",{className:"App-content-filter-date",children:[Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"filter-check",children:"Buscar por fecha"}),Object(j.jsx)("span",{className:"span-date-range-desde",children:"Desde:"}),Object(j.jsx)("span",{className:"span-date",children:"yy/mm/dd"}),Object(j.jsx)("input",{ref:c,placeholder:"Eg 2021/04/10",id:"filter-check-date",type:"text"})]}),Object(j.jsxs)("form",{children:[Object(j.jsx)("span",{className:"span-date-range-hasta",children:"Hasta:"}),Object(j.jsx)("span",{className:"span-date",children:"yy/mm/dd"}),Object(j.jsx)("input",{ref:n,placeholder:"Eg 2021/04/20",id:"filter-check-date",type:"text"})]}),Object(j.jsx)("span",{onClick:function(e){return t(e,c.current,n.current)},children:"Buscar"})]})}),b=(c(27),function(e){var t=e.handleFilterTask;return Object(j.jsxs)("div",{className:"App-content-filter",children:[Object(j.jsx)("span",{className:"handle-error-empty-favorite",children:"No hay favoritos"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{onChange:t,id:"filter-check",type:"checkbox"}),Object(j.jsx)("label",{htmlFor:"filter-check",children:"Favoritos"})]})]})}),m=(c(28),function(e){var t=e.taskList,c=e.handleClickFavorite,a=e.handleClickDelete,n=e.handleClickSave,l=e.handleClickComplete,i=e.handleClickEdit;return Object(j.jsx)("section",{className:"App-todo-list",children:t.map((function(e){return Object(j.jsx)(u,{objTask:e,handleClickFavorite:c,handleClickDelete:a,handleClickSave:n,handleClickComplete:l,handleClickEdit:i},e.text)}))})}),O=(c(29),function(e){var t=e.task,c=e.handleFilterTask,n=e.handleFilterDate,l=e.handleClickFavorite,i=e.handleClickDelete,s=e.handleClickSave,r=e.handleClickComplete,d=e.handleClickEdit,o=e.handleSelectFavorites,u=e.handleSelectCompleted,h=e.handleSelectAll,p=e.handleDeleteSelect,O=e.handleSelectNotCompleted,v=e.handleSubmit,x=Object(a.useRef)(null);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"App-content-title-app",children:Object(j.jsx)("h1",{children:"To-do App"})}),Object(j.jsxs)("section",{className:"App-content-all-todolist",children:[Object(j.jsxs)("aside",{className:"App-aside",children:[Object(j.jsx)("span",{children:"Filtrar por:"}),Object(j.jsx)(b,{handleFilterTask:c}),Object(j.jsx)(f,{handleFilterDate:n})]}),Object(j.jsxs)("main",{className:"App-main",children:[Object(j.jsxs)("section",{className:"App-todo",children:[Object(j.jsx)(m,{taskList:t,handleClickFavorite:l,handleClickDelete:i,handleClickSave:s,handleClickComplete:r,handleClickEdit:d}),Object(j.jsx)("div",{className:"content-input-user-task",children:Object(j.jsxs)("form",{className:"form-user-input",onSubmit:function(e){return v(e,x)},children:[Object(j.jsx)("label",{htmlFor:"todo-text",children:"A\xf1ade una tarea"}),Object(j.jsx)("input",{id:"todo-text",type:"text",placeholder:"A\xf1ade una tarea",name:"todo-text",ref:x})]})})]}),Object(j.jsxs)("div",{className:"App-select-state-task",children:[Object(j.jsx)("span",{onClick:o,className:"App-handle-select favorite",children:"Favoritos"}),Object(j.jsx)("span",{onClick:u,className:"App-handle-select completed",children:"Completados"}),Object(j.jsx)("span",{onClick:O,className:"App-handle-select no-completed",children:"No completados"})]}),Object(j.jsxs)("div",{className:"App-select-delete-all",children:[Object(j.jsx)("span",{onClick:p,className:"App-handle-select select-all",children:"Eliminar seleccionados"}),Object(j.jsx)("span",{onClick:h,className:"App-handle-select select-all",children:"Seleccionar todos"})]})]})]})]})});c(30);var v=function(){var e=p("task"),t=Object(r.a)(e,2),c=t[0],a=t[1],n=p("alltask"),l=Object(r.a)(n,2),i=l[0],u=l[1],f=p("favorite"),b=Object(r.a)(f,2),m=b[0],v=b[1],x=function(e){var t=e.currentTarget.dataset.taskid,n=c.filter((function(e){return e.id!==t})),l=m.filter((function(e){return e.id!==t}));a(n),v(l)};return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("nav",{className:"App-nav",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"/",children:"Inicio"})}),Object(j.jsx)("li",{children:Object(j.jsx)(d.b,{to:"favorites",children:"Mis favoritos"})})]})})}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/favorites",children:Object(j.jsx)(h,{favoriteArr:m,handleClickDelete:x})}),Object(j.jsx)(o.a,{path:"/",children:Object(j.jsx)(O,{task:c,handleFilterTask:function(e){var t=document.querySelector(".handle-error-empty-favorite"),n=c.filter((function(e){return e.favorite?e:null}));if(!n.length)return t.classList.add("display-error-favorite"),e.target.checked=!1,void setTimeout((function(){t.classList.remove("display-error-favorite")}),500);e.target.checked?a(n):a(i)},handleFilterDate:function(e,t,a){var n=new Date(t.value),l=new Date(a.value);c.filter((function(e){var t=e.taskCreate,c=new Date(t);if(c>=n&&c<=l)return e}));e.preventDefault()},handleClickFavorite:function(e,t){var n=t.id,l=c.map((function(e){return e.id===n?Object(s.a)(Object(s.a)({},e),{},{favorite:!e.favorite}):e})),i=l.filter((function(e){return e.favorite?e:null}));console.log(l),console.log(i),a(l),v(i),u(l)},handleClickDelete:x,handleClickSave:function(e,t,n){var l=c.map((function(e){return e.id===n.id&&e.edit?Object(s.a)(Object(s.a)({},e),{},{text:t,edit:!e.edit}):e}));a(l),e.preventDefault()},handleClickComplete:function(e){var t=e.target.dataset.taskid,n=c.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}));a(n)},handleClickEdit:function(e,t,n){document.getElementById("input-task-edit").removeAttribute("readonly");var l=c.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{edit:!e.edit}):e}));a(l),e.preventDefault()},handleSelectFavorites:function(e){var t=c.map((function(e){return e.favorite?Object(s.a)(Object(s.a)({},e),{},{selected:!e.selected}):e}));a(t)},handleSelectCompleted:function(e){var t=c.map((function(e){return e.completed?Object(s.a)(Object(s.a)({},e),{},{selected:!e.selected}):e}));console.log(t),a(t)},handleSelectAll:function(e){var t=document.querySelectorAll(".App-task");Array.from(t).map((function(e){return e.style="border: 2px solid red"}));var n=c.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{selected:!e.selected})}));console.log(n),a(n)},handleDeleteSelect:function(e){var t=c.filter((function(e){return!e.selected}));a(t)},handleSelectNotCompleted:function(e){var t=c.map((function(e){return e.completed?e:Object(s.a)(Object(s.a)({},e),{},{selected:!e.selected})}));a(t)},handleSubmit:function(e,t){var n=new Date,l=t.current.value,i={id:l,text:l,completed:!1,favorite:!1,selected:!1,edit:!1,dateFormat:n.toLocaleString(),taskCreate:n.toISOString()},s=c.concat([i]);u(s),a(s),t.current.value="",e.preventDefault()}})})]})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),l(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.1c2d5421.chunk.js.map