(this["webpackJsonpfavourite-movie"]=this["webpackJsonpfavourite-movie"]||[]).push([[0],{4:function(e,a,t){e.exports=t(9)},9:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),o=t(1),s=function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-white border-bottom shadow-sm"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"MoviesDB"))},m=function(e){var a=e.dispatch,t=Object(n.useState)(""),c=Object(o.a)(t,2),l=c[0],s=c[1],m=Object(n.useState)(!1),i=Object(o.a)(m,2),u=i[0],d=i[1];return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("form",{className:"form-inline mt-3",onSubmit:function(e){e.preventDefault(),d(!0);var t={api_key:"1f6701f4695b66698a043fb831db39e9",include_adult:!1,query:l,language:"pl-PL"},n=new URLSearchParams(Object.entries(t));fetch("".concat("https://api.themoviedb.org/3/search/movie","?").concat(n)).then((function(e){if(e.ok)return e.json();throw new Error("B\u0142\u0105d pobrania danych!")})).then((function(e){if(0===e.results.length)throw new Error("Brak film\xf3w o podanej nazwie!");d(!1),a({type:"MOVIES_FETCH",payload:e.results})})).catch((function(e){a({type:"MOVIES_FETCH_ERROR",payload:e}),d(!1)}))}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",id:"movie",placeholder:"Znajd\u017a film",value:l,onChange:function(e){s(e.target.value)}}),r.a.createElement("button",{className:"btn btn-primary my-2 my-sm-0",type:"submit"},u?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),"Szukam..."):r.a.createElement("span",null,"Szukaj"))))},i=function(e){var a=e.movie;return null===a.poster_path?null:r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a.poster_path),className:"bd-placeholder-img card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,a.title),r.a.createElement("p",{className:"card-text"},a.overview," "),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("small",{className:"text-muted"},a.vote_average,"/10")))))},u=function(e){var a=e.movies;return r.a.createElement("div",{className:"py-5 mb-5 bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(i,{movie:e,key:e.id})})))))},d=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container border-top pt-4"},r.a.createElement("p",null,"MoviesDB \xa9 2019"),r.a.createElement("p",{className:"small text-muted"},"Jest to przyk\u0142adowa aplikacja napisana w React! Skoro j\u0105 widzisz, to znaczy, \u017ce konfiguracja \u015brodowiska zosta\u0142a wykonana prawid\u0142owo!")))},p=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),p=i[0],E=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Twoja baza film\xf3w"),r.a.createElement("p",{className:"lead"},"Wyszukuj swoje ulubione filmy. Dane dostarcza ",r.a.createElement("a",{href:"https://www.themoviedb.org",target:"_blank"},"The Movie DB"),"."))),r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md text-center"},r.a.createElement("h3",{className:"lead"},"Znajd\u017a sw\xf3j ulubiony film!"),r.a.createElement(m,{dispatch:function(e){switch(e.type){case"MOVIES_FETCH":c(e.payload),E(!1);break;case"MOVIES_FETCH_ERROR":c([]),E(e.payload);break;default:console.warn("You should specify action type.")}}})))),!1!==p&&r.a.createElement("div",{className:"col-md text-center"},r.a.createElement("h3",null,p.message)),0===t.length?null:r.a.createElement(u,{movies:t}),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[4,1,2]]]);
//# sourceMappingURL=main.fe943d9b.chunk.js.map