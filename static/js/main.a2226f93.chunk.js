(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(5),i=n.n(a),r=(n(11),n(12),n(2)),o=n.n(r),l=n(6),p=n(4),m=(n(14),n(0));function j(e,t){return d.apply(this,arguments)}function d(){return(d=Object(p.a)(o.a.mark((function e(t,n){var s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/".concat(t,"/").concat(n,"/"));case 2:return s=e.sent,e.next=5,s.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=function(){var e=Object(s.useState)({name:"",imageFront:"",imageBack:"",id:"",types:[],abilities:[]}),t=Object(l.a)(e,2),n=t[0],c=t[1];function a(){return(a=Object(p.a)(o.a.mark((function e(t){var n,s,a,i,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),document.querySelector("#poke-screen").style.background="white",n=t.target.querySelector("input").value,e.next=6,j("pokemon",n);case 6:return s=e.sent,a=window.speechSynthesis,e.next=10,j("pokemon-species",n);case 10:i=e.sent,r=i.flavor_text_entries.find((function(e){return"es"===e.language.name})),l=new SpeechSynthesisUtterance("".concat(s.name,". ").concat(r.flavor_text)),a.speak(l),c({name:s.name,imageFront:s.sprites.front_default,imageBack:s.sprites.back_default,id:s.id,types:s.types,abilities:s.abilities});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)("div",{className:"pokedex-container",children:Object(m.jsxs)("div",{className:"pokedex",children:[Object(m.jsxs)("div",{className:"top-circles",children:[Object(m.jsx)("p",{className:"circle-icon"}),Object(m.jsx)("p",{className:"icon-red"}),Object(m.jsx)("p",{className:"icon-yellow"})]}),Object(m.jsx)("div",{className:"information-pokemon",children:Object(m.jsx)("div",{className:"pokemon-container",children:Object(m.jsxs)("div",{className:"image-pokemon",id:"poke-screen",children:[Object(m.jsx)("h1",{className:"name-pokemon",children:n.name}),n.imageFront?Object(m.jsxs)("div",{className:"image-group",children:[Object(m.jsx)("img",{className:"image",src:n.imageFront,alt:""}),Object(m.jsx)("img",{className:"image",src:n.imageBack,alt:""})]}):""]})})}),Object(m.jsx)("div",{className:"search-pokemon-input",children:Object(m.jsxs)("form",{className:"form",action:"",onSubmit:function(e){return a.apply(this,arguments)},children:[Object(m.jsx)("input",{className:"input",type:"text",placeholder:"Son 898 pokemones",autoComplete:"off"}),Object(m.jsx)("button",{className:"btn",children:"Buscar"})]})}),Object(m.jsxs)("div",{className:"decoration",children:[Object(m.jsx)("p",{className:"d-1"}),Object(m.jsx)("p",{className:"d-2"}),Object(m.jsx)("p",{className:"d-3"})]}),Object(m.jsx)("div",{className:"poke-info",children:Object(m.jsxs)("div",{className:"abilities-pokemon",children:[Object(m.jsx)("h4",{children:"Habilidades del Pokemon"}),Object(m.jsx)("div",{className:"data-result",children:n.abilities.map((function(e){return Object(m.jsx)("li",{className:"type",children:e.ability.name})}))}),n.types?Object(m.jsxs)("div",{className:"types-pokemon",children:[Object(m.jsx)("h4",{children:"Tipo de pokemon"}),n.types.map((function(e){return Object(m.jsx)("li",{className:"type",children:e.type.name})}))]}):""]})})]})})})};var b=function(){return Object(m.jsx)(u,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.a2226f93.chunk.js.map