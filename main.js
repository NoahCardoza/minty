var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(o)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function c(t,e,n){t.$$.on_destroy.push(a(e,n))}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const h=new Set;function p(t){h.forEach((e=>{e.c(t)||(h.delete(e),e.f())})),0!==h.size&&f(p)}function m(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function b(){return g(" ")}function $(){return g("")}function k(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function z(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let C;function E(t){C=t}function M(){if(!C)throw new Error("Function called outside component initialization");return C}function S(){const t=M();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}function A(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const T=[],j=[],q=[],O=[],L=Promise.resolve();let D=!1;function N(){D||(D=!0,L.then(R))}function H(){return N(),L}function P(t){q.push(t)}let I=!1;const Y=new Set;function R(){if(!I){I=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];E(e),V(e.$$)}for(E(null),T.length=0;j.length;)j.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];Y.has(e)||(Y.add(e),e())}q.length=0}while(T.length);for(;O.length;)O.pop()();D=!1,I=!1,Y.clear()}}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const G=new Set;let B;function F(){B={r:0,c:[],p:B}}function U(){B.r||r(B.c),B=B.p}function W(t,e){t&&t.i&&(G.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),B.c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function J(t,e){t.d(1),e.delete(t.key)}function K(t,e,n,o,s,r,i,l,a,c,u,d){let f=t.length,h=r.length,p=f;const m={};for(;p--;)m[t[p].key]=p;const y=[],w=new Map,v=new Map;for(p=h;p--;){const t=d(s,r,p),l=n(t);let a=i.get(l);a?o&&a.p(t,e):(a=c(l,t),a.c()),w.set(l,y[p]=a),l in m&&v.set(l,Math.abs(p-m[l]))}const g=new Set,b=new Set;function $(t){W(t,1),t.m(l,u),i.set(t.key,t),u=t.first,h--}for(;f&&h;){const e=y[h-1],n=t[f-1],o=e.key,s=n.key;e===n?(u=e.first,f--,h--):w.has(s)?!i.has(o)||g.has(o)?$(e):b.has(s)?f--:v.get(o)>v.get(s)?(b.add(o),$(e)):(g.add(s),f--):(a(n,i),f--)}for(;f--;){const e=t[f];w.has(e.key)||a(e,i)}for(;h;)$(y[h-1]);return y}function Q(t,e){const n={},o={},s={$$scope:1};let r=t.length;for(;r--;){const i=t[r],l=e[r];if(l){for(const t in i)t in l||(o[t]=1);for(const t in l)s[t]||(n[t]=l[t],s[t]=1);t[r]=l}else for(const t in i)s[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function et(t,e,n,s){const{fragment:l,on_mount:a,on_destroy:c,after_update:u}=t.$$;l&&l.m(e,n),s||P((()=>{const e=a.map(o).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(P)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,n,o,i,l,a,c,u=[-1]){const d=C;E(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let h=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),h&&function(t,e){-1===t.$$.dirty[0]&&(T.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),h=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(w)}else f.fragment&&f.fragment.c();n.intro&&W(e.$$.fragment),et(e,n.target,n.anchor,n.customElement),R()}E(d)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function rt(e){let n;return{c(){n=v("main"),n.innerHTML='<section class="landing svelte-1ptazcp"><div class="left svelte-1ptazcp"><div class="top svelte-1ptazcp"><h1>Welcom to Minty!</h1></div> \n\t\t\t<div class="bottom svelte-1ptazcp"><p class="svelte-1ptazcp">A neat tool to help you import transactions into Mint via CSV.</p> \n\t\t\t\t<div class="made-with-love svelte-1ptazcp">Made with ❤️ by <a href="https://github.com/NoahCardoza/" target="_blank">Noah Cardoza</a></div></div></div> \n\t\t<div class="right svelte-1ptazcp"><a href="#/start" class="btn circle">GO</a></div></section>'},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}class it extends st{constructor(t){super(),ot(this,t,null,rt,l,{})}}const lt=[];function at(t,e){return{subscribe:ct(t,e).subscribe}}function ct(e,n=t){let o;const s=new Set;function r(t){if(l(e,t)&&(e=t,o)){const t=!lt.length;for(const t of s)t[1](),lt.push(t,e);if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(i,l=t){const a=[i,l];return s.add(a),1===s.size&&(o=n(r)||t),i(e),()=>{s.delete(a),0===s.size&&(o(),o=null)}}}}function ut(e,n,o){const s=!Array.isArray(e),l=s?[e]:e,c=n.length<2;return at(o,(e=>{let o=!1;const u=[];let d=0,f=t;const h=()=>{if(d)return;f();const o=n(s?u[0]:u,e);c?e(o):f=i(o)?o:t},p=l.map(((t,e)=>a(t,(t=>{u[e]=t,d&=~(1<<e),o&&h()}),(()=>{d|=1<<e}))));return o=!0,h(),function(){r(p),f()}}))}function dt(t){let e,o,s;const r=[t[2]];var i=t[0];function l(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return i&&(e=new i(l()),e.$on("routeEvent",t[7])),{c(){e&&tt(e.$$.fragment),o=$()},m(t,n){e&&et(e,t,n),y(t,o,n),s=!0},p(t,n){const s=4&n?Q(r,[Z(t[2])]):{};if(i!==(i=t[0])){if(e){F();const t=e;X(t.$$.fragment,1,0,(()=>{nt(t,1)})),U()}i?(e=new i(l()),e.$on("routeEvent",t[7]),tt(e.$$.fragment),W(e.$$.fragment,1),et(e,o.parentNode,o)):e=null}else i&&e.$set(s)},i(t){s||(e&&W(e.$$.fragment,t),s=!0)},o(t){e&&X(e.$$.fragment,t),s=!1},d(t){t&&w(o),e&&nt(e,t)}}}function ft(t){let e,o,s;const r=[{params:t[1]},t[2]];var i=t[0];function l(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return i&&(e=new i(l()),e.$on("routeEvent",t[6])),{c(){e&&tt(e.$$.fragment),o=$()},m(t,n){e&&et(e,t,n),y(t,o,n),s=!0},p(t,n){const s=6&n?Q(r,[2&n&&{params:t[1]},4&n&&Z(t[2])]):{};if(i!==(i=t[0])){if(e){F();const t=e;X(t.$$.fragment,1,0,(()=>{nt(t,1)})),U()}i?(e=new i(l()),e.$on("routeEvent",t[6]),tt(e.$$.fragment),W(e.$$.fragment,1),et(e,o.parentNode,o)):e=null}else i&&e.$set(s)},i(t){s||(e&&W(e.$$.fragment,t),s=!0)},o(t){e&&X(e.$$.fragment,t),s=!1},d(t){t&&w(o),e&&nt(e,t)}}}function ht(t){let e,n,o,s;const r=[ft,dt],i=[];function l(t,e){return t[1]?0:1}return e=l(t),n=i[e]=r[e](t),{c(){n.c(),o=$()},m(t,n){i[e].m(t,n),y(t,o,n),s=!0},p(t,[s]){let a=e;e=l(t),e===a?i[e].p(t,s):(F(),X(i[a],1,1,(()=>{i[a]=null})),U(),n=i[e],n?n.p(t,s):(n=i[e]=r[e](t),n.c()),W(n,1),n.m(o.parentNode,o))},i(t){s||(W(n),s=!0)},o(t){X(n),s=!1},d(t){i[e].d(t),t&&w(o)}}}function pt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("#");let o="";n>-1&&(o=e.substr(n),e=e.substr(0,n));const s=o.indexOf("?");let r="";return s>-1&&(r=o.substr(s+1),o=o.substr(0,s)),{location:e,hash:o,querystring:r}}const mt=at(null,(function(t){t(pt());const e=()=>{t(pt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));ut(mt,(t=>t.location)),ut(mt,(t=>t.querystring)),ut(mt,(t=>t.hash));const yt=ct(void 0);function wt(t,e,n){let{routes:o={}}=e,{prefix:s=""}=e,{restoreScrollState:r=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,s,r,i=[],l="",a=t.split("/");for(a[0]||a.shift();s=a.shift();)"*"===(n=s[0])?(i.push("wild"),l+="/(.*)"):":"===n?(o=s.indexOf("?",1),r=s.indexOf(".",1),i.push(s.substring(1,~o?o:~r?r:s.length)),l+=~o&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(l+=(~o?"?":"")+"\\"+s.substring(r))):l+="/"+s;return{keys:i,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(s)if("string"==typeof s){if(!t.startsWith(s))return null;t=t.substr(s.length)||"/"}else if(s instanceof RegExp){const e=t.match(s);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const l=[];o instanceof Map?o.forEach(((t,e)=>{l.push(new i(e,t))})):Object.keys(o).forEach((t=>{l.push(new i(t,o[t]))}));let a=null,c=null,u={};const d=S();async function f(t,e){await H(),d(t,e)}let h=null,p=null;var m;r&&(p=t=>{h=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",p),m=()=>{h?window.scrollTo(h.__svelte_spa_router_scrollX,h.__svelte_spa_router_scrollY):window.scrollTo(0,0)},M().$$.after_update.push(m));let y=null,w=null;const v=mt.subscribe((async t=>{if(window.location.hash.match(/^#[^\/]\w*/)){if(!y)return window.location.hash="#",!0;let t="#"+y.location+window.location.hash;return""!==y.querystring&&(t=t+"?"+y.querystring),window.location.hash=t,!0}t.hash&&null===y&&(window.location.hash=t.hash),y=t;let e=0;for(;e<l.length;){const o=l[e].match(t.location);if(!o){e++;continue}const s={route:l[e].path,location:t.location,querystring:t.querystring,userData:l[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await l[e].checkConditions(s))return n(0,a=null),w=null,void f("conditionsFailed",s);f("routeLoading",Object.assign({},s));const r=l[e].component;if(w!=r){r.loading?(n(0,a=r.loading),w=r,n(1,c=r.loadingParams),n(2,u={}),f("routeLoaded",Object.assign({},s,{component:a,name:a.name,params:c}))):(n(0,a=null),w=null);const e=await r();if(t!=y)return;n(0,a=e&&e.default||e),w=r}return o&&"object"==typeof o&&Object.keys(o).length?n(1,c=o):n(1,c=null),n(2,u=l[e].props),void f("routeLoaded",Object.assign({},s,{component:a,name:a.name,params:c})).then((()=>{yt.set(c)}))}n(0,a=null),w=null,yt.set(void 0)}));return function(t){M().$$.on_destroy.push(t)}((()=>{v(),p&&window.removeEventListener("popstate",p)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,s=t.prefix),"restoreScrollState"in t&&n(5,r=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=r?"manual":"auto")},[a,c,u,o,s,r,function(e){A.call(this,t,e)},function(e){A.call(this,t,e)}]}class vt extends st{constructor(t){super(),ot(this,t,wt,ht,l,{routes:3,prefix:4,restoreScrollState:5})}}const gt=ct(null);function bt(t){let e,n;return{c(){e=v("p"),n=g(t[1]),z(e,"class","error-message")},m(t,o){y(t,e,o),m(e,n)},p(t,e){2&e&&x(n,t[1])},d(t){t&&w(e)}}}function $t(e){let n,o,s,r,i,l,a,c,u,d,f,h,p,g,$,x,_,C,E,M,S=e[1]&&bt(e);return{c(){n=v("main"),o=v("div"),o.innerHTML="<h1>Granting Access</h1>",s=b(),r=v("a"),r.textContent="TEST",i=b(),l=v("p"),l.textContent='Sadly, Mint does not make it easy to import a CSV into their system. The\n\t\tonly way this is possible to to employ a couple of tricks. The way websites\n\t\ttrack usualy track logged in users is with cookies. Cookies are small peices\n\t\tof information that identify you to the server so it can "remeber" you are\n\t\tlogged in and all the information associated to your account opposed to all\n\t\tthe other users on the app.',a=b(),c=v("p"),c.textContent="The way this tool works is you give it your cookies which allow it to make\n\t\trequests to Mint on your behalf. Basically, tricking Mint into thinking you\n\t\tyourself are sending the requests. As soon as the script is done running,\n\t\tyou can log out of Mint which will reset your cookies, invalidating the\n\t\tcookies you gave the tool to ensure it won't be able to access your account\n\t\tin the future.",u=b(),d=v("p"),d.textContent="How do I find these cookies?",f=b(),h=v("ol"),h.innerHTML='<li>Install the\n\t\t\t<a href="https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid?hl=en" target="_blank">Cookies.txt Chrome Extension</a>.</li> \n\t\t<li>Login to Mint on Chrome.</li> \n\t\t<li>Click the new Cookies.txt extension in top left of your browser window.</li> \n\t\t<li>Click the &quot;Export&quot; button in the window that pops up.</li> \n\t\t<li>Upload the saved &quot;intuit.com_cookies.txt&quot; file in the field below:</li>',p=b(),g=v("div"),$=v("input"),x=b(),_=v("button"),_.textContent="Submit",C=b(),S&&S.c(),z(r,"href","#test"),z($,"type","file"),z($,"id","cookies.txt"),z($,"accept",".txt"),z(_,"class","btn"),z(g,"class","file-upload"),z(g,"id","test"),z(n,"class","svelte-1fe8bzf")},m(t,w){y(t,n,w),m(n,o),m(n,s),m(n,r),m(n,i),m(n,l),m(n,a),m(n,c),m(n,u),m(n,d),m(n,f),m(n,h),m(n,p),m(n,g),m(g,$),e[3]($),m(g,x),m(g,_),m(n,C),S&&S.m(n,null),E||(M=k(_,"click",e[2]),E=!0)},p(t,[e]){t[1]?S?S.p(t,e):(S=bt(t),S.c(),S.m(n,null)):S&&(S.d(1),S=null)},i:t,o:t,d(t){t&&w(n),e[3](null),S&&S.d(),E=!1,M()}}}function kt(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(s,r){function i(t){try{a(o.next(t))}catch(t){r(t)}}function l(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,l)}a((o=o.apply(t,e||[])).next())}))};let s,r;return[s,r,()=>o(void 0,void 0,void 0,(function*(){const t=new FormData;t.append("cookies",s.files[0]);const e=yield fetch("https://minty-importer-api.herokuapp.com/api/start",{method:"POST",body:t}),o=yield e.json();400!==e.status?(n(1,r=""),gt.set(o),async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await H(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}("/upload")):n(1,r=o.detail)})),function(t){j[t?"unshift":"push"]((()=>{s=t,n(0,s)}))}]}class zt extends st{constructor(t){super(),ot(this,t,kt,$t,l,{})}}function xt(t){const e=t-1;return e*e*e+1}function _t(t){return"[object Date]"===Object.prototype.toString.call(t)}function Ct(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>Ct(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(_t(t)&&_t(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach((n=>{o[n]=Ct(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=o[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function Et(t,o={}){const s=ct(t);let r,i=t;function l(l,a){if(null==t)return s.set(t=l),Promise.resolve();i=l;let c=r,u=!1,{delay:m=0,duration:y=400,easing:w=e,interpolate:v=Ct}=n(n({},o),a);if(0===y)return c&&(c.abort(),c=null),s.set(t=i),Promise.resolve();const g=d()+m;let b;return r=function(t){let e;return 0===h.size&&f(p),{promise:new Promise((n=>{h.add(e={c:t,f:n})})),abort(){h.delete(e)}}}((e=>{if(e<g)return!0;u||(b=v(t,l),"function"==typeof y&&(y=y(t,l)),u=!0),c&&(c.abort(),c=null);const n=e-g;return n>y?(s.set(t=l),!1):(s.set(t=b(w(n/y))),!0)})),r.promise}return{set:l,update:(e,n)=>l(e(i,t),n),subscribe:s.subscribe}}function Mt(e){let n,o,s,r,i,l=Math.round(e[0])+"";return{c(){n=v("div"),o=v("div"),s=v("div"),r=g(l),i=g("%"),z(s,"class","text svelte-1q164p5"),z(o,"class","bar svelte-1q164p5"),_(o,"width",e[0]+"%"),z(n,"class","progress svelte-1q164p5")},m(t,e){y(t,n,e),m(n,o),m(o,s),m(s,r),m(s,i)},p(t,[e]){1&e&&l!==(l=Math.round(t[0])+"")&&x(r,l),1&e&&_(o,"width",t[0]+"%")},i:t,o:t,d(t){t&&w(n)}}}function St(t,e,n){let o,{value:s=0}=e;const r=Et(s,{duration:1e3,easing:xt});return c(t,r,(t=>n(0,o=t))),t.$$set=t=>{"value"in t&&n(2,s=t.value)},t.$$.update=()=>{4&t.$$.dirty&&r.set(s)},[o,r,s]}class At extends st{constructor(t){super(),ot(this,t,St,Mt,l,{value:2})}}function Tt(t,e,n){const o=t.slice();return o[10]=e[n],o}function jt(t,e,n){const o=t.slice();return o[13]=e[n],o}function qt(t,e){let n,o,s=e[13]+"";return{key:t,first:null,c(){n=v("li"),o=g(s),z(n,"class","svelte-wnnmyz"),this.first=n},m(t,e){y(t,n,e),m(n,o)},p(t,n){e=t,16&n&&s!==(s=e[13]+"")&&x(o,s)},d(t){t&&w(n)}}}function Ot(t,e){let n,o,s,r,i,l=e[10].name+"",a=[],c=new Map,u=e[10].children;const d=t=>t[13];for(let t=0;t<u.length;t+=1){let n=jt(e,u,t),o=d(n);c.set(o,a[t]=qt(o,n))}return{key:t,first:null,c(){n=v("li"),o=g(l),s=b(),r=v("ul");for(let t=0;t<a.length;t+=1)a[t].c();i=b(),_(r,"column-count","2"),z(r,"class","svelte-wnnmyz"),z(n,"class","svelte-wnnmyz"),this.first=n},m(t,e){y(t,n,e),m(n,o),m(n,s),m(n,r);for(let t=0;t<a.length;t+=1)a[t].m(r,null);m(n,i)},p(t,n){e=t,16&n&&l!==(l=e[10].name+"")&&x(o,l),16&n&&(u=e[10].children,a=K(a,n,d,1,e,u,c,r,J,qt,null,jt))},d(t){t&&w(n);for(let t=0;t<a.length;t+=1)a[t].d()}}}function Lt(t){let e,n,o;return n=new At({props:{value:t[3]}}),{c(){e=v("div"),tt(n.$$.fragment),_(e,"padding","1rem"),_(e,"width","100%")},m(t,s){y(t,e,s),et(n,e,null),o=!0},p(t,e){const o={};8&e&&(o.value=t[3]),n.$set(o)},i(t){o||(W(n.$$.fragment,t),o=!0)},o(t){X(n.$$.fragment,t),o=!1},d(t){t&&w(e),nt(n)}}}function Dt(t){let e,n;return{c(){e=v("p"),n=g(t[1]),z(e,"class","error-message")},m(t,o){y(t,e,o),m(e,n)},p(t,e){2&e&&x(n,t[1])},d(t){t&&w(e)}}}function Nt(t){let e,n,o,s,r,i,l,a,c,u,d,f,h,p,$,x,C,E,M,S,A,T,j,q,O,L,D,N,H,P,I,Y,R,V,G,B,Q,Z,tt,et=[],nt=new Map,ot=t[4].categories;const st=t=>t[10].name;for(let e=0;e<ot.length;e+=1){let n=Tt(t,ot,e),o=st(n);nt.set(o,et[e]=Ot(o,n))}let rt=t[2]&&Lt(t),it=t[1]&&Dt(t);return{c(){e=v("main"),n=v("h1"),n.textContent="Preparing the CSV file",o=b(),s=v("p"),s.innerHTML='Before we can continue, we need to do something called data normalization.\n\t\tMint is configured with certian categories so when we upload the CSV we must\n\t\tstick to these categories. If we were to try and use a catergory that\n\t\tdoesn&#39;t exist in Mint, Mint won&#39;t know how to handle this transation and the\n\t\timport will fail. Click <a href="#mint-categories">here</a> to see a list of\n\t\tyour avalible categories.',r=b(),i=v("p"),i.textContent="Before we get into the meat of it, we'll first need to make sure we have the\n\t\tnecessary columns. Make sure the top of your CSV looks like the table below:",l=b(),a=v("table"),a.innerHTML='<thead><tr class="svelte-wnnmyz"><th class="svelte-wnnmyz">Date</th> \n\t\t\t\t<th class="svelte-wnnmyz">Description</th> \n\t\t\t\t<th class="svelte-wnnmyz">Category</th> \n\t\t\t\t<th class="svelte-wnnmyz">Amount</th> \n\t\t\t\t<th class="svelte-wnnmyz">Notes</th></tr></thead>',c=b(),u=v("p"),u.innerHTML="<small>If you don&#39;t have any &quot;Notes&quot; just leave those cells blank.</small>",d=b(),f=v("p"),f.textContent="Below is an example of what your CSV should look like:",h=b(),p=v("table"),p.innerHTML='<thead><tr class="svelte-wnnmyz"><th class="svelte-wnnmyz">Date</th> \n\t\t\t\t<th class="svelte-wnnmyz">Description</th> \n\t\t\t\t<th class="svelte-wnnmyz">Category</th> \n\t\t\t\t<th class="svelte-wnnmyz">Amount</th> \n\t\t\t\t<th class="svelte-wnnmyz">Notes</th></tr></thead> \n\t\t<tbody><tr class="svelte-wnnmyz"><td class="svelte-wnnmyz">4/29/21</td> \n\t\t\t\t<td class="svelte-wnnmyz">Trader Joes</td> \n\t\t\t\t<td class="svelte-wnnmyz">Groceries</td> \n\t\t\t\t<td align="right" class="svelte-wnnmyz">-99.95</td> \n\t\t\t\t<td class="svelte-wnnmyz"></td></tr> \n\t\t\t<tr class="svelte-wnnmyz"><td class="svelte-wnnmyz">3/1/21</td> \n\t\t\t\t<td class="svelte-wnnmyz">Amazon.com</td> \n\t\t\t\t<td class="svelte-wnnmyz">Home Improvement</td> \n\t\t\t\t<td align="right" class="svelte-wnnmyz">-262.54</td> \n\t\t\t\t<td class="svelte-wnnmyz"></td></tr> \n\t\t\t<tr class="svelte-wnnmyz"><td class="svelte-wnnmyz">2/15/21</td> \n\t\t\t\t<td class="svelte-wnnmyz">Costco</td> \n\t\t\t\t<td class="svelte-wnnmyz">Groceries</td> \n\t\t\t\t<td align="right" class="svelte-wnnmyz">-69.97</td> \n\t\t\t\t<td class="svelte-wnnmyz"></td></tr> \n\t\t\t<tr class="svelte-wnnmyz"><td class="svelte-wnnmyz">2/15/21</td> \n\t\t\t\t<td class="svelte-wnnmyz">Wal-mart</td> \n\t\t\t\t<td class="svelte-wnnmyz">Home Supplies</td> \n\t\t\t\t<td align="right" class="svelte-wnnmyz">-18.96</td> \n\t\t\t\t<td class="svelte-wnnmyz"></td></tr> \n\t\t\t<tr class="svelte-wnnmyz"><td class="svelte-wnnmyz">7/20/20</td> \n\t\t\t\t<td class="svelte-wnnmyz">Amazon.com</td> \n\t\t\t\t<td class="svelte-wnnmyz">Home Supplies</td> \n\t\t\t\t<td align="right" class="svelte-wnnmyz">-75.18</td> \n\t\t\t\t<td class="svelte-wnnmyz"></td></tr> \n\t\t\t<tr class="svelte-wnnmyz"><td class="svelte-wnnmyz">7/15/20</td> \n\t\t\t\t<td class="svelte-wnnmyz">Amazon.com</td> \n\t\t\t\t<td class="svelte-wnnmyz">Lawn &amp; Garden</td> \n\t\t\t\t<td align="right" class="svelte-wnnmyz">-77.34</td> \n\t\t\t\t<td class="svelte-wnnmyz"></td></tr></tbody>',$=b(),x=v("p"),x.innerHTML="<small>Note: it&#39;s suggusted that you remove any creditcard payments from these\n\t\t\timports. One of the limitations of Mint is they don&#39;t allow any manually\n\t\t\timported transations into any other account except your cash account.</small>",C=b(),E=v("p"),E.textContent="One final sanity check:",M=b(),S=v("ol"),A=v("li"),A.innerHTML="Make sure <b>ALL</b> the &quot;Date&quot; cells match the format &quot;MM/DD/YYYY&quot; or &quot;M/D/YY&quot;.",T=b(),j=v("li"),q=g('Make sure all the "Category" cells exist in Mint. To make this easier I\'ve\n\t\t\tcompiled a list below of all the availible categories:\n\t\t\t'),O=v("ul");for(let t=0;t<et.length;t+=1)et[t].c();L=b(),D=v("li"),D.textContent='Select the normalized CSV and click "Upload".',N=b(),H=v("div"),P=v("input"),I=b(),rt&&rt.c(),Y=b(),R=v("button"),R.textContent="Submit",V=b(),it&&it.c(),G=b(),B=v("p"),B.textContent="If you need any help or find any bugs feel free to open an issue on GitHub.",z(p,"class","table table-bordered table-hover table-condensed"),z(A,"class","svelte-wnnmyz"),_(O,"column-count","2"),z(O,"id","mint-categories"),z(O,"class","svelte-wnnmyz"),z(j,"class","svelte-wnnmyz"),z(D,"class","svelte-wnnmyz"),z(S,"class","svelte-wnnmyz"),z(P,"type","file"),z(P,"id","cookies.txt"),z(P,"accept",".txt"),z(R,"class","btn"),z(H,"class","file-upload"),z(e,"class","svelte-wnnmyz")},m(w,v){y(w,e,v),m(e,n),m(e,o),m(e,s),m(e,r),m(e,i),m(e,l),m(e,a),m(e,c),m(e,u),m(e,d),m(e,f),m(e,h),m(e,p),m(e,$),m(e,x),m(e,C),m(e,E),m(e,M),m(e,S),m(S,A),m(S,T),m(S,j),m(j,q),m(j,O);for(let t=0;t<et.length;t+=1)et[t].m(O,null);m(S,L),m(S,D),m(e,N),m(e,H),m(H,P),t[6](P),m(H,I),rt&&rt.m(H,null),m(H,Y),m(H,R),m(e,V),it&&it.m(e,null),m(e,G),m(e,B),Q=!0,Z||(tt=k(R,"click",t[5]),Z=!0)},p(t,[n]){16&n&&(ot=t[4].categories,et=K(et,n,st,1,t,ot,nt,O,J,Ot,null,Tt)),t[2]?rt?(rt.p(t,n),4&n&&W(rt,1)):(rt=Lt(t),rt.c(),W(rt,1),rt.m(H,Y)):rt&&(F(),X(rt,1,1,(()=>{rt=null})),U()),t[1]?it?it.p(t,n):(it=Dt(t),it.c(),it.m(e,G)):it&&(it.d(1),it=null)},i(t){Q||(W(rt),Q=!0)},o(t){X(rt),Q=!1},d(n){n&&w(e);for(let t=0;t<et.length;t+=1)et[t].d();t[6](null),rt&&rt.d(),it&&it.d(),Z=!1,tt()}}}function Ht(t,e,n){let o;c(t,gt,(t=>n(4,o=t)));var s=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(s,r){function i(t){try{a(o.next(t))}catch(t){r(t)}}function l(t){try{a(o.throw(t))}catch(t){r(t)}}function a(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,l)}a((o=o.apply(t,e||[])).next())}))};let r,i,l,a=!1,u=0,d=0;return[r,i,a,d,o,()=>s(void 0,void 0,void 0,(function*(){n(2,a=!1),l=null,u=0,n(3,d=0);const t=new FormData;t.append("csv",r.files[0]),t.append("session",JSON.stringify(o.session));const e=yield fetch("https://minty-importer-api.herokuapp.com/api/import",{method:"POST",body:t});if(400===e.status){const t=yield e.json();return n(1,i=t.detail),void n(2,a=!1)}n(1,i=""),n(2,a=!0);const s=e.body.pipeThrough(new TextDecoderStream).getReader();for(l=Number((yield s.read()).value);;){const{value:t,done:e}=yield s.read();if(e)break;u+=Number(t),n(3,d=u&&u/l*100)}n(2,a=!1)})),function(t){j[t?"unshift":"push"]((()=>{r=t,n(0,r)}))}]}class Pt extends st{constructor(t){super(),ot(this,t,Ht,Nt,l,{})}}function It(e){let n,o;return n=new vt({props:{routes:e[0]}}),{c(){tt(n.$$.fragment)},m(t,e){et(n,t,e),o=!0},p:t,i(t){o||(W(n.$$.fragment,t),o=!0)},o(t){X(n.$$.fragment,t),o=!1},d(t){nt(n,t)}}}function Yt(t){return[{"/":it,"/start":zt,"/upload":Pt}]}return new class extends st{constructor(t){super(),ot(this,t,Yt,It,l,{})}}({target:document.body})}();
