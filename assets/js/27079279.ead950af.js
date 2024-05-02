"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[468],{5372:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=a(17624),i=a(95788);const r={id:"franzino",title:"Placa Franzino",slug:"/Franzino/franzino",description:"Detalhes da placa Franzino"},s=void 0,c={id:"Franzino/franzino",title:"Placa Franzino",description:"Detalhes da placa Franzino",source:"@site/docs/Franzino/franzino.md",sourceDirName:"Franzino",slug:"/Franzino/franzino",permalink:"/docs/Franzino/franzino",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/Franzino/franzino.md",tags:[],version:"current",frontMatter:{id:"franzino",title:"Placa Franzino",slug:"/Franzino/franzino",description:"Detalhes da placa Franzino"},sidebar:"docs",previous:{title:"Placa Franzininho Tiny",permalink:"/docs/franzininho-tiny/franzininho-tiny"},next:{title:"Upload via conversor USB/SERIAL",permalink:"/docs/Franzino/upload-conversor-serial"}},t={},d=[{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:2},{value:"Limita\xe7\xf5es da Franzino",id:"limita\xe7\xf5es-da-franzino",level:2},{value:"Alimenta\xe7\xe3o",id:"alimenta\xe7\xe3o",level:2},{value:"Aten\xe7\xe3o",id:"aten\xe7\xe3o",level:2},{value:"Esquem\xe1tico",id:"esquem\xe1tico",level:2},{value:"Layout",id:"layout",level:2},{value:"Licen\xe7a",id:"licen\xe7a",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}];function l(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.MN)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Placa Franzino",src:a(66048).c+"",width:"1999",height:"1125"})}),"\n",(0,o.jsx)(n.p,{children:"A placa Franzino \xe9 um Arduino standalone de baixo custo. Como seu pr\xf3prio nome sugere, \xe9 uma placa enxuta que possui os componentes b\xe1sicos para que voc\xea possa usar o microcontrolador ATmega328, tanto para estudo quanto para a aplica\xe7\xf5es em projetos."}),"\n",(0,o.jsx)(n.p,{children:"Diferente dos standalones dispon\xedveis no mercado, a placa Franzino possui pinagem Arduino UNO Rev 3 e conector para f\xe1cil liga\xe7\xe3o da interface serial. A facilidade de acesso aos pinos da interface serial, possibilita que voc\xea ligue m\xf3dulos de comunica\xe7\xe3o conforme a necessidade do projeto. Voc\xea conseguir\xe1 facilmente ligar conversores de n\xedveis seriais como: USB, RS232, RS485 e at\xe9 mesmo um m\xf3dulo Bluetooth, sem a necessidade do uso de shields."}),"\n",(0,o.jsx)(n.p,{children:"A Franzino vem com o bootloader do Arduino UNO facilitando o processo de upload do seu scketch. Voc\xea poder\xe1 facilmente fazer o upload do seu sketch para placa usando um conversor USB/Serial, seguindo os mesmos passos que j\xe1 est\xe1 acostumado a fazer com a placa Arduino UNO."}),"\n",(0,o.jsx)(n.h2,{id:"caracter\xedsticas",children:"Caracter\xedsticas"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Pinagem Padr\xe3o UNO R3;"}),"\n",(0,o.jsx)(n.li,{children:"Microcontrolador ATmega328 pu ATmega328P;"}),"\n",(0,o.jsx)(n.li,{children:"Alimenta\xe7\xe3o: 7,5 V \xe0 20 V DC;"}),"\n",(0,o.jsx)(n.li,{children:"Prote\xe7\xe3o contra invers\xe3o de polaridade da fonte;"}),"\n",(0,o.jsx)(n.li,{children:"Conector para liga\xe7\xe3o de interface serial;"}),"\n",(0,o.jsx)(n.li,{children:"LED para indica\xe7\xe3o de alimenta\xe7\xe3o;"}),"\n",(0,o.jsx)(n.li,{children:"LED conectado ao pino 13 para uso geral"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A seguir \xe9 apresentada a pinagem para interface serial:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"pinagem",src:a(59212).c+"",width:"960",height:"720"})}),"\n",(0,o.jsx)(n.p,{children:"Os pino D2 e D4 podem ser utilizados para uma comunica\xe7\xe3o soft serial, como pino de controle da comunica\xe7\xe3o RS485 ou outras aplica\xe7\xf5es de entrada ou sa\xedda."}),"\n",(0,o.jsx)(n.p,{children:"Outra vantagem interessante \xe9 que as linhas de alimenta\xe7\xe3o(VCC e GND) tamb\xe9m est\xe3o dispon\xedveis nesse conector."}),"\n",(0,o.jsx)(n.p,{children:"Assim, com esse conector voc\xea pode facilmente ligar um conversor USB/Serial para comunica\xe7\xe3o com um computador, seja para upload dos sketchs quanto para troca de informa\xe7\xf5es."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"ligacao_conversor USB Serial",src:a(40624).c+"",width:"1133",height:"528"})}),"\n",(0,o.jsx)(n.p,{children:"Se o seu projeto n\xe3o necessitar da comunica\xe7\xe3o USB/Serial durante o seu funcionamento, voc\xea poder\xe1 usar o mesmo conversor para fazer upload em outra Franzinos."}),"\n",(0,o.jsx)(n.p,{children:"Algumas aplica\xe7\xf5es necessitam de comunica\xe7\xe3o serial no padr\xe3o RS232. Dessa forma voc\xea pode ligar facilmente um conversor TTL/RS232."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"conversor_ttl_rs232.png",src:a(79744).c+"",width:"700",height:"525"})}),"\n",(0,o.jsx)(n.p,{children:"Tamb\xe9m \xe9 comum aplica\xe7\xf5es que necessitem da comunica\xe7\xe3o RS485. Para isso voc\xea pode facilmente ligar um m\xf3dulo conversor TTL/RS485:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"HC-05",src:a(97108).c+"",width:"800",height:"600"})}),"\n",(0,o.jsx)(n.p,{children:"Outra aplica\xe7\xe3o interessante para comunica\xe7\xe3o e o uso de m\xf3dulos Bluetooth. Esse tipo de m\xf3dulo pode ser facilmente ligado a Franzino tanto para uso dos pinos padr\xf5es de comunica\xe7\xe3o TX e RX quanto para comunica\xe7\xe3o soft serial:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Conversor RS485",src:a(56596).c+"",width:"800",height:"277"})}),"\n",(0,o.jsx)(n.p,{children:"Como observado acima, h\xe1 muitas possibilidades de comunica\xe7\xf5es e voc\xea pode facilmente ligar outros m\xf3dulos para diversas aplica\xe7\xf5es conforme sua necessidade."}),"\n",(0,o.jsx)(n.h2,{id:"limita\xe7\xf5es-da-franzino",children:"Limita\xe7\xf5es da Franzino"}),"\n",(0,o.jsx)(n.p,{children:"A Franzino \xe9 uma placa standalone que possui diversas vantagens. Por\xe9m como foi desenvolvida em face simples e com o m\xednimo de componente necess\xe1rios para o uso do microcontrolador, possui algumas limita\xe7\xf5es em rela\xe7\xe3o ao Arduino UNO, que s\xe3o:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"N\xe3o h\xe1 regulador 3,3 V, dessa forma o pino 3.3V n\xe3o est\xe1 conectado;"}),"\n",(0,o.jsx)(n.li,{children:"O pino Vin n\xe3o est\xe1 conectado a alimenta\xe7\xe3o;"}),"\n",(0,o.jsx)(n.li,{children:"Os pinos SCL e SDA n\xe3o est\xe3o conectados as pinos A4 e A5;"}),"\n",(0,o.jsx)(n.li,{children:"N\xe3o possui conversor USB/Serial"}),"\n",(0,o.jsx)(n.li,{children:"Precisa de um conversor USB/Serial para upload dos sketchs"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"alimenta\xe7\xe3o",children:"Alimenta\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"A Franzino pode ser alimentada das seguintes formas:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Conector P4 com tens\xe3o de 7,5 V a 20 V como positivo no centro;"}),"\n",(0,o.jsx)(n.li,{children:"Pino 5V e GND - tens\xe3o de alimenta\xe7\xe3o fixa em 5 VDC"}),"\n",(0,o.jsx)(n.li,{children:"Atrav\xe9s nos pinos VCC e GND dispon\xedveis conector de expans\xe3o serial;"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"aten\xe7\xe3o",children:"Aten\xe7\xe3o"}),"\n",(0,o.jsx)(n.p,{children:"N\xe3o LIGAR o VCC do conversor USB/SERIAL a placa se a fonte externa estiver ligada. Nesse caso ligar apenas os pinos DTR, RXI, TXO e GND."}),"\n",(0,o.jsx)(n.h2,{id:"esquem\xe1tico",children:"Esquem\xe1tico"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Esquem\xe1tico",src:a(13036).c+"",width:"1664",height:"1109"})}),"\n",(0,o.jsx)(n.h2,{id:"layout",children:"Layout"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Layout",src:a(94133).c+"",width:"430",height:"403"})}),"\n",(0,o.jsx)(n.h2,{id:"licen\xe7a",children:"Licen\xe7a"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"CC SA 4.0",src:a(3976).c+"",width:"88",height:"31"}),"\nEsta obra est\xe1 licenciada com uma Licen\xe7a Creative Commons Atribui\xe7\xe3o-CompartilhaIgual 4.0 Internacional."]}),"\n",(0,o.jsxs)(n.p,{children:["Todos os arquivos de projeto est\xe3o dispon\xedveis no Github: ",(0,o.jsx)(n.a,{href:"https://github.com/Franzininho/Franzino",children:"https://github.com/Franzininho/Franzino"})]}),"\n",(0,o.jsx)(n.h2,{id:"refer\xeancias",children:"Refer\xeancias"}),"\n",(0,o.jsxs)(n.p,{children:["Artigo no Embarcados: ",(0,o.jsx)(n.a,{href:"https://www.embarcados.com.br/franzino-open-hardware-de-baixo-custo",children:"https://www.embarcados.com.br/franzino-open-hardware-de-baixo-custo"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.MN)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},95788:(e,n,a)=>{a.d(n,{MN:()=>d});var o=a(11504);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,o,i=function(e,n){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var t=o.createContext({}),d=function(e){var n=o.useContext(t),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,t=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,h=u["".concat(t,".").concat(m)]||u[m]||l[m]||r;return a?o.createElement(h,s(s({ref:n},p),{},{components:a})):o.createElement(h,s({ref:n},p))}));p.displayName="MDXCreateElement"},3976:(e,n,a)=>{a.d(n,{c:()=>o});const o="data:image/png;base64,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"},79744:(e,n,a)=>{a.d(n,{c:()=>o});const o=a.p+"assets/images/conversor_ttl_rs232-5c8a9cecd3ae56c9e8cbf534d350bfba.png"},13036:(e,n,a)=>{a.d(n,{c:()=>o});const o=a.p+"assets/images/esquematico-f80fb98cd1e79255d7cf909cdb8d636e.png"},66048:(e,n,a)=>{a.d(n,{c:()=>o});const o=a.p+"assets/images/franzino-eb728ef66abfa87176f4bb5661f2a703.jpg"},97108:(e,n,a)=>{a.d(n,{c:()=>o});const o=a.p+"assets/images/hc-05-15f3ef2c9539c2a12410dd16c727a007.png"},94133:(e,n,a)=>{a.d(n,{c:()=>o});const o=a.p+"assets/images/layout-6c5a4766199ec41bc01e5717b83feb2b.png"},40624:(e,n,a)=>{a.d(n,{c:()=>o});const o=a.p+"assets/images/ligacao_conversor-29c3b68ee0e2d48f071f37ed5149e5ef.jpg"},59212:(e,n,a)=>{a.d(n,{c:()=>o});const o=a.p+"assets/images/pinout-c655298a464993df025640894e5bba5e.png"},56596:(e,n,a)=>{a.d(n,{c:()=>o});const o=a.p+"assets/images/rs485-12a066d6983174f1cfbb1d931b2ef091.png"}}]);