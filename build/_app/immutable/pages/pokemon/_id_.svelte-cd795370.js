import{S as $,i as A,s as J,l as u,u as c,a as M,m as _,p as w,v as p,h as g,c as P,q as d,N as U,b as K,F as e,w as B,n as V}from"../../chunks/index-b74b9f2d.js";function L(s){let t,r,l=s[0].name+"",f,h,o,H,y,O,R,v,E=s[0].height/10+"",T,j,z,k,S=s[0].weight/10+"",G,D,I,i,N,q;return{c(){t=u("div"),r=u("h1"),f=c(l),h=M(),o=u("p"),H=c("Type: "),y=u("strong"),O=c(s[1]),R=c(` |
        Height: `),v=u("strong"),T=c(E),j=c(" m"),z=c(` |
        Weight: `),k=u("strong"),G=c(S),D=c(" kg"),I=M(),i=u("img"),this.h()},l(n){t=_(n,"DIV",{class:!0});var a=w(t);r=_(a,"H1",{class:!0});var C=w(r);f=p(C,l),C.forEach(g),h=P(a),o=_(a,"P",{class:!0});var m=w(o);H=p(m,"Type: "),y=_(m,"STRONG",{});var F=w(y);O=p(F,s[1]),F.forEach(g),R=p(m,` |
        Height: `),v=_(m,"STRONG",{});var W=w(v);T=p(W,E),j=p(W," m"),W.forEach(g),z=p(m,` |
        Weight: `),k=_(m,"STRONG",{});var b=w(k);G=p(b,S),D=p(b," kg"),b.forEach(g),m.forEach(g),I=P(a),i=_(a,"IMG",{src:!0,alt:!0}),a.forEach(g),this.h()},h(){d(r,"class","capitalize text-4xl my-8"),d(o,"class","capitalize text-md my-8"),U(i.src,N=s[0].sprites.other["official-artwork"].front_default)||d(i,"src",N),d(i,"alt",q=s[0].name),d(t,"class","flex flex-col items-center")},m(n,a){K(n,t,a),e(t,r),e(r,f),e(t,h),e(t,o),e(o,H),e(o,y),e(y,O),e(o,R),e(o,v),e(v,T),e(v,j),e(o,z),e(o,k),e(k,G),e(k,D),e(t,I),e(t,i)},p(n,[a]){a&1&&l!==(l=n[0].name+"")&&B(f,l),a&1&&E!==(E=n[0].height/10+"")&&B(T,E),a&1&&S!==(S=n[0].weight/10+"")&&B(G,S),a&1&&!U(i.src,N=n[0].sprites.other["official-artwork"].front_default)&&d(i,"src",N),a&1&&q!==(q=n[0].name)&&d(i,"alt",q)},i:V,o:V,d(n){n&&g(t)}}}async function Y({params:s}){const r=`https://pokeapi.co/api/v2/pokemon/${s.id}`;return{props:{poke:await(await fetch(r)).json()}}}function Q(s,t,r){let{poke:l}=t;console.log(l);const f=l.types.map(h=>h.type.name).join(" ");return s.$$set=h=>{"poke"in h&&r(0,l=h.poke)},[l,f]}class Z extends ${constructor(t){super(),A(this,t,Q,L,J,{poke:0})}}export{Z as default,Y as load};