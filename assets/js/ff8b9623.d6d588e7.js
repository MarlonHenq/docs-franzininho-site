"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[6004],{4212:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(17624),i=a(95788);const o={id:"entradas-analogicas",title:"Entradas Anal\xf3gicas",slug:"/franzininho-diy/entradas-analogicas",description:"Nesse exemplo vamos aprender trabalhar com as entradas anal\xf3gicas presentes na Franzininho DIY"},t=void 0,s={id:"FranzininhoDIY/exemplos-arduino/entradas-analogicas",title:"Entradas Anal\xf3gicas",description:"Nesse exemplo vamos aprender trabalhar com as entradas anal\xf3gicas presentes na Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/entradas-analogicas.md",sourceDirName:"FranzininhoDIY/exemplos-arduino",slug:"/franzininho-diy/entradas-analogicas",permalink:"/docs/franzininho-diy/entradas-analogicas",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/entradas-analogicas.md",tags:[],version:"current",frontMatter:{id:"entradas-analogicas",title:"Entradas Anal\xf3gicas",slug:"/franzininho-diy/entradas-analogicas",description:"Nesse exemplo vamos aprender trabalhar com as entradas anal\xf3gicas presentes na Franzininho DIY"},sidebar:"docs",previous:{title:"Entradas e Sa\xeddas Digitais",permalink:"/docs/franzininho-diy/entradas-saidas-digitais"},next:{title:"Sa\xeddas PWM",permalink:"/docs/franzininho-diy/saidas-pwm"}},c={},d=[{value:"Fun\xe7\xe3o",id:"fun\xe7\xe3o",level:2},{value:"Sintaxe",id:"sintaxe",level:3},{value:"Par\xe2metros",id:"par\xe2metros",level:3},{value:"Retorno",id:"retorno",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",level:3}];function l(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.MN)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Na Franzininho DIY alguns pinos que podem ser usados como entradas anal\xf3gicas:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Pinagem Franzininho DIY",src:a(4428).c+"",width:"1209",height:"869"})}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"Devido as limita\xe7\xf5es de hardware da Franzininho DIY recomendamos apenas o uso da Entrada A1 para sinais anal\xf3gicos.\nAs demais entradas (A0,A2,A3) devem ser usadas com cautela e analisando o circuito para ver o circuito presente no pino n\xe3o atrapalhar\xe1 no sinal anal\xf3gico."})}),"\n",(0,r.jsx)(e.h2,{id:"fun\xe7\xe3o",children:"Fun\xe7\xe3o"}),"\n",(0,r.jsx)(e.p,{children:"Para a leitura de um sinal anal\xf3gico no pino que possui essa fun\xe7\xe3o, n\xe3o \xe9 necess\xe1rio configurar o pino como entrada anal\xf3gica. Isso \xe9 feito na fun\xe7\xe3o de leitura:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"int analogRead(pino)"})}),"\n",(0,r.jsx)(e.p,{children:"L\xea o valor presente em um pino configurado como entrada anal\xf3gica. Internamente o Arduino possui um conversor A/D de 10 bits. Dessa forma o valor retornado por esta fun\xe7\xe3o estar\xe1 na faixa de 0 a 1023 conforme o valor presente no pino."}),"\n",(0,r.jsx)(e.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"analogRead(pino);"})}),"\n",(0,r.jsx)(e.h3,{id:"par\xe2metros",children:"Par\xe2metros"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"pino:"})," n\xfamero do pino configurado como entrada anal\xf3gica (0,1,2,3 na Franzininho)"]}),"\n",(0,r.jsx)(e.h3,{id:"retorno",children:"Retorno"}),"\n",(0,r.jsx)(e.p,{children:"int (0 a 1023)"}),"\n",(0,r.jsx)(e.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(e.p,{children:"Vamos ler o valor de um potenci\xf4metro ligado ao pino P2(A1) e acionar o LED quando a leitura atingir um valor definido:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Circuito",src:a(36936).c+"",width:"1590",height:"1017"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"const byte LED = 1; //pino do LED\nconst byte POT = A1; //pino do Potenci\xf4metro\n\nvoid setup() {\n  pinMode(LED,OUTPUT);\n}\n\nvoid loop() {\n\n  int valor = analogRead(POT); // l\xea o valor do potenci\xf4metro\n\n  if(valor> 511){              //se valor maior que 511\n    digitalWrite(LED,HIGH);    //liga LED\n  }else{                       //se n\xe3o\n    digitalWrite(LED,LOW);     //apaga LED\n  }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"simula\xe7\xe3o",children:"Simula\xe7\xe3o"}),"\n",(0,r.jsx)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/310739786993238592?view=diagram"})]})}function p(n={}){const{wrapper:e}={...(0,i.MN)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},95788:(n,e,a)=>{a.d(e,{MN:()=>d});var r=a(11504);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,r)}return a}function t(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function s(n,e){if(null==n)return{};var a,r,i=function(n,e){if(null==n)return{};var a,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var c=r.createContext({}),d=function(n){var e=r.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):t(t({},e),n)),a},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var a=n.components,i=n.mdxType,o=n.originalType,c=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return a?r.createElement(h,t(t({ref:e},p),{},{components:a})):r.createElement(h,t({ref:e},p))}));p.displayName="MDXCreateElement"},36936:(n,e,a)=>{a.d(e,{c:()=>r});const r=a.p+"assets/images/circuito-a6a0591bc42320cbe29b14bd9332f3c2.png"},4428:(n,e,a)=>{a.d(e,{c:()=>r});const r=a.p+"assets/images/pinagem-V2-7047a8d5930175670acc131497791fcc.png"}}]);