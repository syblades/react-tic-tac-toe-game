(this["webpackJsonpreact-tic-tac-toe-game"]=this["webpackJsonpreact-tic-tac-toe-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(1),c=n.n(t),l=n(8),r=n.n(l),u=(n(13),n(4)),i=n(7),o=n(5),s=(n(14),n(15),n(16),n(0)),v=function(e){return Object(s.jsx)("button",{className:"square","data-pro":e.value,onClick:function(){e.onClickCallback(e.id)},children:e.value})},f=function(e){var a=function(e,a){var n;return(n=[]).concat.apply(n,Object(u.a)(e)).map((function(e){return Object(s.jsx)(v,{value:e.value,id:e.id,onClickCallback:a},e.id)}))}(e.squares,e.onClickCallback);return console.log(a),Object(s.jsx)("div",{className:"grid",children:a})},j=function(){for(var e=[],a=0,n=0;n<3;n+=1){e.push([]);for(var t=0;t<3;t+=1)e[n].push({id:a,value:""}),a+=1}return e},d=function(){var e=Object(t.useState)(j()),a=Object(o.a)(e,2),n=a[0],c=a[1],l=Object(t.useState)("X"),r=Object(o.a)(l,2),v=r[0],d=r[1],b=Object(t.useState)(null),h=Object(o.a)(b,2),O=h[0],p=h[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("h1",{children:"React Tic Tac Toe"}),Object(s.jsx)("h2",{children:null===O?"Current player: ".concat(v):"Tie"===O?"It's a Tie! Everyone Wins! \ud83c\udfc6\u2728":"Winner is ".concat(O," \ud83c\udf89")}),Object(s.jsx)("button",{onClick:function(){c(j()),p(null)},children:"Play!"})]}),Object(s.jsx)("main",{children:Object(s.jsx)(f,{squares:n,onClickCallback:function(e){console.log("click",e);var a=Object(u.a)(n);if(null===O){for(var t=0;t<a.length;t++)for(var l=0;l<a[t].length;l++)if(a[t][l].id===e&&""===a[t][l].value)a[t][l].value=v;else if(a[t][l].id===e)return;c(a),d("X"===v?"O":"X"),p(function(){for(var e=0;e<3;){if(n[e][0].value===n[e][1].value&&n[e][2].value===n[e][1].value&&""!==n[e][0].value)return n[e][0].value;if(n[0][e].value===n[1][e].value&&n[2][e].value===n[1][e].value&&""!==n[0][e].value)return n[0][e].value;e+=1}if(n[0][0].value===n[1][1].value&&n[2][2].value===n[1][1].value&&""!==n[1][1].value)return n[0][0].value;if(n[0][2].value===n[1][1].value&&n[2][0].value===n[1][1].value&&""!==n[1][1].value)return n[0][2].value;var a,t=Object(i.a)(n);try{for(t.s();!(a=t.n()).done;){var c,l=a.value,r=Object(i.a)(l);try{for(r.s();!(c=r.n()).done;)if(""===c.value.value)return null}catch(u){r.e(u)}finally{r.f()}}}catch(u){t.e(u)}finally{t.f()}return"Tie"}())}}})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.df023ae6.chunk.js.map