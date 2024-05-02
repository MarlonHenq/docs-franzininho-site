"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[6780],{61184:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=r(17624),i=r(95788);const a={id:"sensor-luz-ldr",title:"Sensor de luz com LDR",slug:"/franzininho-diy/sensor-luz-ldr",description:"Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica da Franzininho DIY"},t=void 0,l={id:"FranzininhoDIY/exemplos-arduino/sensor-luz-ldr",title:"Sensor de luz com LDR",description:"Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica da Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/sensor-luz.md",sourceDirName:"FranzininhoDIY/exemplos-arduino",slug:"/franzininho-diy/sensor-luz-ldr",permalink:"/en/docs/franzininho-diy/sensor-luz-ldr",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/sensor-luz.md",tags:[],version:"current",frontMatter:{id:"sensor-luz-ldr",title:"Sensor de luz com LDR",slug:"/franzininho-diy/sensor-luz-ldr",description:"Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica da Franzininho DIY"},sidebar:"docs",previous:{title:"Elefante Colorido! Que cor?",permalink:"/en/docs/franzininho-diy/elefante-colorido"},next:{title:"Sem\xe1foro",permalink:"/en/docs/franzininho-diy/semaforo"}},s={},d=[{value:"Materiais",id:"materiais",level:2},{value:"Circuito",id:"circuito",level:2},{value:"Sketch",id:"sketch",level:2},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",level:2},{value:"Video de Funcionamento",id:"video-de-funcionamento",level:2}];function c(e){const n={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.MN)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica."}),"\n",(0,o.jsx)(n.p,{children:"Ser\xe1 exibido um exemplo de funcionamento de uma fotoc\xe9lula, onde ao escurecer ser\xe1 aceso o LED, como acontece com a luz da rua."}),"\n",(0,o.jsx)(n.h2,{id:"materiais",children:"Materiais"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Placa Franzininho;"}),"\n",(0,o.jsx)(n.li,{children:"Protoboard;"}),"\n",(0,o.jsx)(n.li,{children:"1 Resistor 10K;"}),"\n",(0,o.jsx)(n.li,{children:"1 LDR(10K)"}),"\n",(0,o.jsx)(n.li,{children:"Jumpers"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"circuito",children:"Circuito"}),"\n",(0,o.jsx)(n.p,{children:"Fa\xe7a a seguinte liga\xe7\xe3o no protoboard:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:r(37876).c+"",width:"551",height:"231"})}),"\n",(0,o.jsx)(n.h2,{id:"sketch",children:"Sketch"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"/*\n  Franzininho\n  Exemplo: Sensor de Luz - LDR\n Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica. Ser\xe1 exibido um exemplo de funcionamento de uma fotoc\xe9lula, onde ao escurecer ser\xe1 aceso o LED, como acontece na luz da rua. ;)\n*/\n//Sensor de luz com LDR\nint ledPin = 1; //Led no pino 1 - LED da placa\nint ldrPin = A1; //LDR no pino anal\xf3gico A1\nint ldrValor = 0; //Valor lido do LDR\n\nvoid setup() {\n pinMode(ledPin,OUTPUT); //define LED como Sa\xedda\n}\n\nvoid loop() {\n //ler o valor do LDR\n ldrValor = analogRead(ldrPin); //O valor lido ser\xe1 entre 0 e 1023\n //se o valor lido for maior que 800, liga o led\n if (ldrValor>= 800){\n   digitalWrite(ledPin, HIGH);      //aciona sa\xedda\n } else {  // sen\xe3o, apaga o led            \n   digitalWrite(ledPin,LOW);        //desliga sa\xedda\n }\n delay(100);\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"simula\xe7\xe3o",children:"Simula\xe7\xe3o"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311443234729493056?view=diagram"}),"\n",(0,o.jsx)(n.h2,{id:"video-de-funcionamento",children:"Video de Funcionamento"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/AzypBpXO238",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function u(e={}){const{wrapper:n}={...(0,i.MN)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},95788:(e,n,r)=>{r.d(n,{MN:()=>d});var o=r(11504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function t(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,o,i=function(e,n){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),d=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):t(t({},n),e)),r},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?o.createElement(h,t(t({ref:n},u),{},{components:r})):o.createElement(h,t({ref:n},u))}));u.displayName="MDXCreateElement"},37876:(e,n,r)=>{r.d(n,{c:()=>o});const o=r.p+"assets/images/sensor-luz-circuito-6c590c3ead770407b6f4c790d14d0251.png"}}]);