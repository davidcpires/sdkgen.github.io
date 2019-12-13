!function(e){function n(n){for(var t,o,i=n[0],a=n[1],s=n[2],d=n[3]||[],c=0,l=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(H,o)&&H[o]&&l.push(H[o][0]),H[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(U&&U(n),A.push.apply(A,d);l.length;)l.shift()();return I.push.apply(I,s||[]),r()}function r(){for(var e,n=0;n<I.length;n++){for(var r=I[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==H[i]&&(t=!1)}t&&(I.splice(n--,1),e=M(M.s=r[0]))}return 0===I.length&&(A.forEach((function(e){if(void 0===H[e]){H[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",M.nc&&n.setAttribute("nonce",M.nc),n.rel="prefetch",n.as="script",n.href=S(e),document.head.appendChild(n)}})),A.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!j[e])return;for(var r in j[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--y&&0===b&&P()}(e,n),t&&t(e,n)};var o,i=!0,a="1e37b44e56e4f36a06b9",s=1e4,d={},c=[],l=[];function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var n=p.indexOf(e);n>=0&&p.splice(n,1)},data:d[e]};return o=void 0,n}var p=[],f="idle";function h(e){f=e;for(var n=0;n<p.length;n++)p[n].call(null,e)}var m,v,g,y=0,b=0,w={},j={},O={};function x(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(n=s,n=n||1e4,new Promise((function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=M.p+""+a+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(i){return r(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(i){return void r(i)}e(n)}}}))).then((function(e){if(!e)return h("idle"),null;j={},w={},O=e.c,g=e.h,h("prepare");var n=new Promise((function(e,n){m={resolve:e,reject:n}}));for(var r in v={},H)E(r);return"prepare"===f&&0===b&&0===y&&P(),n}));var n}function E(e){O[e]?(j[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+a+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):w[e]=!0}function P(){h("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then((function(){return D(i)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(x(r));e.resolve(n)}}function D(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,s;function l(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),a=o.id,s=o.chain;if((i=k[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var d=0;d<i.parents.length;d++){var c=i.parents[d],l=k[c];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([c]),moduleId:a,parentId:c};-1===n.indexOf(c)&&(l.hot._acceptedDependencies[a]?(r[c]||(r[c]=[]),u(r[c],[a])):(delete r[c],n.push(c),t.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function u(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var p={},m=[],y={},b=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var j;s=x(w);var _=!1,E=!1,P=!1,D="";switch((j=v[w]?l(s):{type:"disposed",moduleId:w}).chain&&(D="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+j.moduleId+D));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+D));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(_=new Error("Aborted because "+s+" is not accepted"+D));break;case"accepted":n.onAccepted&&n.onAccepted(j),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),P=!0;break;default:throw new Error("Unexception type "+j.type)}if(_)return h("abort"),Promise.reject(_);if(E)for(s in y[s]=v[s],u(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(p[s]||(p[s]=[]),u(p[s],j.outdatedDependencies[s]));P&&(u(m,[j.moduleId]),y[s]=b)}var I,A=[];for(t=0;t<m.length;t++)s=m[t],k[s]&&k[s].hot._selfAccepted&&y[s]!==b&&A.push({module:s,errorHandler:k[s].hot._selfAccepted});h("dispose"),Object.keys(O).forEach((function(e){!1===O[e]&&function(e){delete H[e]}(e)}));for(var S,q,C=m.slice();C.length>0;)if(s=C.pop(),i=k[s]){var z={},U=i.hot._disposeHandlers;for(o=0;o<U.length;o++)(r=U[o])(z);for(d[s]=z,i.hot.active=!1,delete k[s],delete p[s],o=0;o<i.children.length;o++){var R=k[i.children[o]];R&&((I=R.parents.indexOf(s))>=0&&R.parents.splice(I,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(i=k[s]))for(q=p[s],o=0;o<q.length;o++)S=q[o],(I=i.children.indexOf(S))>=0&&i.children.splice(I,1);for(s in h("apply"),a=g,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var T=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(i=k[s])){q=p[s];var J=[];for(t=0;t<q.length;t++)if(S=q[t],r=i.hot._acceptedDependencies[S]){if(-1!==J.indexOf(r))continue;J.push(r)}for(t=0;t<J.length;t++){r=J[t];try{r(q)}catch(N){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:q[t],error:N}),n.ignoreErrored||T||(T=N)}}}for(t=0;t<A.length;t++){var L=A[t];s=L.module,c=[s];try{M(s)}catch(N){if("function"===typeof L.errorHandler)try{L.errorHandler(N)}catch(G){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:G,originalError:N}),n.ignoreErrored||T||(T=G),T||(T=N)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:N}),n.ignoreErrored||T||(T=N)}}return T?(h("fail"),Promise.reject(T)):(h("idle"),new Promise((function(e){e(m)})))}var k={},H={1:0},I=[],A=[];function S(e){return M.p+"static/js/"+({2:"getting-started-first-nodejs-server",3:"proposals-streams"}[e]||e)+"."+{2:"a1e0c663",3:"77b9f406"}[e]+".js"}function M(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:u(n),parents:(l=c,c=[],l),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return M;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(c=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),M(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var i in M)Object.prototype.hasOwnProperty.call(M,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&h("prepare"),b++,M.e(e).then(n,(function(e){throw n(),e}));function n(){b--,"prepare"===f&&(w[e]||E(e),0===b&&0===y&&P())}},r.t=function(e,n){return 1&n&&(e=r(e)),M.t(e,-2&n)},r}(n)),r.l=!0,r.exports}M.e=function(e){var n=[],r=H[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise((function(n,t){r=H[e]=[n,t]}));n.push(r[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,M.nc&&i.setAttribute("nonce",M.nc),i.src=S(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous");var a=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(s);var r=H[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",a.name="ChunkLoadError",a.type=t,a.request=o,r[1](a)}H[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},M.m=e,M.c=k,M.d=function(e,n,r){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(M.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)M.d(r,t,function(n){return e[n]}.bind(null,t));return r},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/",M.oe=function(e){throw console.error(e),e},M.h=function(){return a};var q=window.webpackJsonp=window.webpackJsonp||[],C=q.push.bind(q);q.push=n,q=q.slice();for(var z=0;z<q.length;z++)n(q[z]);var U=C,R=(I.push([0,0]),r());n([[],{},0,[0,2,3]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"sdkgen","description":"My awesome app using docz","menu":[],"version":"1.0.0","repository":null,"native":false,"codeSandbox":true,"themeConfig":{},"separator":"-","hashRouter":true},"entries":[{"key":"getting-started/first-nodejs-server.mdx","value":{"name":"First Node.js Server","menu":"Getting Started","id":"16d18cc5d9e07fe75947b0ce4716a4af","filepath":"getting-started/first-nodejs-server.mdx","link":"","slug":"getting-started-first-nodejs-server","route":"/getting-started-first-nodejs-server","headings":[{"slug":"installing-sdkgen","depth":1,"value":"Installing sdkgen"},{"slug":"creating-an-api-description","depth":1,"value":"Creating an API description"},{"slug":"creating-base-project","depth":1,"value":"Creating base project"},{"slug":"run-the-project","depth":1,"value":"Run the project"}]}},{"key":"proposals/streams.mdx","value":{"name":"Streams","menu":"Proposals","id":"5ef6aa3b1a9dbe9d815b9c6195fdb5b8","filepath":"proposals/streams.mdx","link":"","slug":"proposals-streams","route":"/proposals-streams","headings":[{"slug":"server-side-streamming-to-the-client","depth":1,"value":"Server-side streamming to the client"},{"slug":"goals","depth":2,"value":"Goals"},{"slug":"proposal","depth":2,"value":"Proposal"},{"slug":"implementation","depth":2,"value":"Implementation"},{"slug":"alternative-implementation","depth":2,"value":"Alternative implementation"},{"slug":"alternative-implementation-2","depth":2,"value":"Alternative implementation 2"}]}}],"props":[]}')},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),o=r.n(t),i=r("./node_modules/react-dom/index.js"),a=r.n(i),s=r("./node_modules/docz/dist/index.esm.js"),d=r("./node_modules/docz-theme-default/dist/index.esm.js"),c={"getting-started/first-nodejs-server.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./getting-started/first-nodejs-server.mdx"))},"proposals/streams.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./proposals/streams.mdx"))}},l=r("./.docz/app/db.json"),u=function(){return o.a.createElement(d.a,{linkComponent:s.b,db:l},o.a.createElement(s.c,{imports:c}))},p=[],f=[],h=function(){return p.forEach((function(e){return e&&e()}))},m=function(){return f.forEach((function(e){return e&&e()}))},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;h(),a.a.render(o.a.createElement(e,null),v,m)}(u)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.1e37b44e56e4f36a06b9.js.map