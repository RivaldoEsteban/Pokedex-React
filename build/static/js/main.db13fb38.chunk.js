(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(5),s=t.n(r),o=(t(11),t(12),t(2)),i=t.n(o),u=t(6),p=t(4),m=(t(14),t(0));function l(e){return f.apply(this,arguments)}function f(){return(f=Object(p.a)(i.a.mark((function e(n){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(n,"/"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(){var e=Object(a.useState)({name:"totodile",image:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png"}),n=Object(u.a)(e,2),t=n[0],c=n[1];function r(){return(r=Object(p.a)(i.a.mark((function e(n){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.target.value,e.next=3,l(t);case 3:a=e.sent,console.log(a),c({name:a.name,image:a.sprites.front_shiny});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{className:"card-pokemon",children:[Object(m.jsx)("h1",{className:"name-pokemon",children:t.name}),Object(m.jsx)("img",{className:"image-pokemon",src:t.image,alt:""}),Object(m.jsx)("form",{action:"",children:Object(m.jsx)("input",{className:"input",type:"number",placeholder:"Escoge entre los 150 pokemones",onChange:function(e){return r.apply(this,arguments)}})})]})};var j=function(){return Object(m.jsx)(h,{})},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.db13fb38.chunk.js.map