(this.webpackJsonppretzel=this.webpackJsonppretzel||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),i=t(4),r=t.n(i),s=(t(9),t(2)),u={1:"ein",2:"zwei",3:"drei",4:"vier",5:"f\xfcnf",6:"sechs",7:"sieben",8:"acht",9:"neun",10:"zehn",11:"elf",12:"zw\xf6lf",13:"dreizehn",14:"vierzehn",15:"f\xfcnfzehn",16:"sechszehn",17:"siebzehn",18:"achtzehn",19:"neunzehn",20:"zwanzig",30:"drei\xdfig",40:"vierzig",50:"f\xfcnfzig",60:"sechszig",70:"siebzig",80:"achtzig",90:"neunzig",100:"einhundert"};function o(e){var n=e.toString();switch(n.length){case 1:return u[n];case 2:return n.startsWith("1")||n.endsWith("0")?u[n]:u[n[1]]+"und"+u["".concat(n[0],"0")];case 3:return u["".concat(n[0],"00")]+o(Number(n.slice(1)));default:throw new Error("Received invalid number ".concat(n))}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Math.floor(Math.random()*(n-e+1))+e}t(10);var h=t(0),j=function(e){var n=e.type,t=void 0===n?"text":n,a=e.value,i=e.onChange,r=Object(c.useCallback)((function(e){i(e.target.value)}),[i]);return Object(h.jsx)("input",{className:"input",type:t,value:a,onChange:r})},b=function(e){var n=e.children,t=e.className;return Object(h.jsx)("p",{className:t,children:n})},f=(t(12),function(){var e=Object(c.useState)((function(){return l()})),n=Object(s.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)((function(){return l()})),r=Object(s.a)(i,2),u=r[0],f=r[1],d=Object(c.useState)(""),v=Object(s.a)(d,2),O=v[0],g=v[1],p=Object(c.useState)(""),z=Object(s.a)(p,2),m=z[0],x=z[1],C=Object(c.useCallback)((function(){x(""),a(l()),f(l()),g("")}),[]),N=Object(c.useCallback)((function(e){e.preventDefault();var n=o(t+u);O===n?(x("Correct!"),setTimeout((function(){C()}),1e3)):(x("Nope!"),setTimeout((function(){x("")}),1e3))}),[O,t,C,u]);return Object(h.jsxs)("div",{className:"calculation-form",children:[!!m&&Object(h.jsx)("div",{children:m}),Object(h.jsxs)("form",{onSubmit:N,children:[Object(h.jsxs)(b,{children:[Object(h.jsx)("span",{children:o(t)}),Object(h.jsx)("span",{className:"calculation-form__operator",children:"+"}),Object(h.jsx)("span",{children:o(u)}),Object(h.jsx)("span",{className:"calculation-form__operator",children:"="})]}),Object(h.jsx)(j,{value:O,onChange:g})]})]})});t(13);var d=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{})})},v=function(e){e&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),v()}],[[14,1,2]]]);
//# sourceMappingURL=main.b8fc32b0.chunk.js.map