import{S as F,i as H,s as U,a as S,l as d,u as A,K as w,h as a,c as k,m as v,p as x,v as E,q as b,b as u,F as I,n as L,L as z}from"../chunks/index-b74b9f2d.js";function $(h,s,i){const r=h.slice();return r[1]=s[i],r}function C(h){let s,i=h[1]+"",r;return{c(){s=d("li"),r=A(i),this.h()},l(n){s=v(n,"LI",{class:!0});var o=x(s);r=E(o,i),o.forEach(a),this.h()},h(){b(s,"class","my-1")},m(n,o){u(n,s,o),I(s,r)},p:L,d(n){n&&a(s)}}}function B(h){let s,i,r,n,o,q,y,_,D,P,f,m=h[0],l=[];for(let e=0;e<m.length;e+=1)l[e]=C($(h,m,e));return{c(){s=S(),i=d("h1"),r=A("About"),n=S(),o=d("p"),q=A("This is a SvelteKit Demo that uses the PokeAPI to build a Pok\xE9dex."),y=S(),_=d("p"),D=A("Some of the tools used in this project are:"),P=S(),f=d("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){w('[data-svelte="svelte-1nbb2k0"]',document.head).forEach(a),s=k(e),i=v(e,"H1",{class:!0});var t=x(i);r=E(t,"About"),t.forEach(a),n=k(e),o=v(e,"P",{class:!0});var p=x(o);q=E(p,"This is a SvelteKit Demo that uses the PokeAPI to build a Pok\xE9dex."),p.forEach(a),y=k(e),_=v(e,"P",{class:!0});var j=x(_);D=E(j,"Some of the tools used in this project are:"),j.forEach(a),P=k(e),f=v(e,"UL",{class:!0});var T=x(f);for(let K=0;K<l.length;K+=1)l[K].l(T);T.forEach(a),this.h()},h(){document.title="About",b(i,"class","text-4xl text-center my-8 uppercase"),b(o,"class","my-4"),b(_,"class","my-4"),b(f,"class","list-disc px-6 text-gray-800")},m(e,c){u(e,s,c),u(e,i,c),I(i,r),u(e,n,c),u(e,o,c),I(o,q),u(e,y,c),u(e,_,c),I(_,D),u(e,P,c),u(e,f,c);for(let t=0;t<l.length;t+=1)l[t].m(f,null)},p(e,[c]){if(c&1){m=e[0];let t;for(t=0;t<m.length;t+=1){const p=$(e,m,t);l[t]?l[t].p(p,c):(l[t]=C(p),l[t].c(),l[t].m(f,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=m.length}},i:L,o:L,d(e){e&&a(s),e&&a(i),e&&a(n),e&&a(o),e&&a(y),e&&a(_),e&&a(P),e&&a(f),z(l,e)}}}function G(h){return[["Svelte stores","API setup","Dynamic routes","Server-side rendering","Svelte transition animations"]]}class M extends F{constructor(s){super(),H(this,s,G,B,U,{})}}export{M as default};
