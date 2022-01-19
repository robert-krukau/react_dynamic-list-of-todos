(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(8),n=s.n(c),r=s(2),a=s(3),o=s(5),i=s(4),l=s(1),d=s.n(l),u=(s(13),s(14),s(15),s(7)),h=s.n(u),j=s(0),p=function(e){Object(o.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={search:"",filterBy:"all"},e.getfilteredTodos=function(){var t=e.props.todos,s=e.state,c=s.filterBy,n=s.search;return t.filter((function(e){var t=e.completed;switch(c){case"active":return!t;case"completed":return t;default:return!0}})).filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this,t=this.getfilteredTodos();return Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{children:"Search:"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",placeholder:"Title",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})}}),Object(j.jsxs)("select",{onChange:function(t){return e.setState({filterBy:t.target.value})},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})]})]}),Object(j.jsx)("div",{className:"TodoList__list-container",children:Object(j.jsx)("ul",{className:"TodoList__list",children:t.map((function(t){return Object(j.jsxs)("li",{className:h()("TodoList__item",{"TodoList__item--checked":t.completed,"TodoList__item--unchecked":!t.completed}),children:[Object(j.jsxs)("label",{htmlFor:"forSmthng",children:[Object(j.jsx)("input",{type:"checkbox",readOnly:!0,checked:t.completed}),Object(j.jsx)("p",{children:t.title})]}),Object(j.jsxs)("button",{className:h()("TodoList__user-button","button",{"TodoList__user-button--selected":e.props.selectedUserId===t.userId}),type:"button",onClick:function(){return e.props.selectUser(t.userId)},children:["User"," ",t.userId]})]},t.id)}))})})]})}}]),s}(d.a.Component),b=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){return e.json()}))},f=function(e){return b("/users/".concat(e))},m=(s(17),function(e){Object(o.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={user:null},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;f(this.props.selectedUserId).then((function(t){e.setState({user:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.selectedUserId!==this.props.selectedUserId&&f(this.props.selectedUserId).then((function(e){t.setState({user:e})}))}},{key:"render",value:function(){var e=this,t=this.state.user;return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsxs)("div",{className:"CurrentUser",children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:"Selected user: ".concat(t.id)})}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:t.name}),Object(j.jsx)("p",{className:"CurrentUser__email",children:t.email}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:t.phone}),Object(j.jsx)("button",{type:"button",className:"CurrentUser__clear",onClick:function(){return e.props.selectUser(0)},children:"Clear"})]})})}}]),s}(d.a.Component)),O=function(e){Object(o.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedUserId:0,todos:[]},e.selectUser=function(t){t!==e.state.selectedUserId&&e.setState({selectedUserId:t})},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;b("/todos").then((function(t){e.setState({todos:t})}))}},{key:"render",value:function(){var e=this.state.selectedUserId;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(p,{todos:this.state.todos,selectUser:this.selectUser,selectedUserId:e})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:e?Object(j.jsx)(m,{selectedUserId:e,selectUser:this.selectUser}):"No user selected"})})]})}}]),s}(d.a.Component),v=O;n.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.62388b26.chunk.js.map