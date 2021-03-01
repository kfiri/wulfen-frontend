(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={4:0},a={4:0},l=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{1:"3f2ab134",2:"7ba518dd",3:"9f74ddc4",5:"9bcfecad",6:"4fe88f85",7:"5326f21a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={1:1,2:1,3:1,5:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"2556f2b1",2:"592bcc97",3:"7470ccd8",5:"a4fb7419",6:"31d6cfe0",7:"31d6cfe0"}[e]+".css",a=c.p+r,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var u=l[i],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],s=u.getAttribute("data-href");if(s===r||s===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=r,delete o[e],d.parentNode.removeChild(d),n(l)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=l);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var f=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=s;l.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),l=n("b05d");r["default"].use(l["a"],{config:{dark:!0},lang:o["a"],iconSet:a["a"]});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},c=[],u=n("e4fd"),s=n.n(u),f=Object(u["defineComponent"])({name:"App"}),d=f,p=n("2877"),h=Object(p["a"])(d,i,c,!1,null,null,null),m=h.exports,b=n("4bde"),v=n("8c4f");const g=[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"8b24"))}]},{path:"/lore",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"introduction",alias:"",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"0866"))},{path:"heraldic-tribes",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"0866"))},{path:"shard-of-the-cosmos",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"0866"))},{path:"birth-of-magic",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"0866"))}]},{path:"/world",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"currency",alias:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"a8f9"))},{path:"flora",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"a8f9"))},{path:"fauna",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"a8f9"))}]},{path:"/design",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"ec28"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"e51e"))}];var y=g,w=Object(b["route"])((function({Vue:e}){e.use(v["a"]);const t=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return t})),P=async function(){const e="function"===typeof w?await w({Vue:r["default"]}):w,t={router:e,render:e=>e(m),el:"#q-app"};return{app:t,router:e}},O=Object(b["boot"])((({Vue:e})=>{e.use(s.a)}));const j="";async function _(){const{app:e,router:t}=await P();let n=!1;const o=e=>{n=!0;const r=Object(e)===e?t.resolve(e).route.fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,""),l=[O];for(let c=0;!1===n&&c<l.length;c++)if("function"===typeof l[c])try{await l[c]({app:e,router:t,Vue:r["default"],ssrContext:null,redirect:o,urlPath:a,publicPath:j})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==n&&new r["default"](e)}_()},"31cd":function(e,t,n){}});