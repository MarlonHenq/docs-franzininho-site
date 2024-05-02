"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[8817],{75080:(a,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(17624),n=o(95788);const i={id:"bootloader",title:"Bootloader",slug:"/franzininho-diy/bootloader",description:"Grava\xe7\xe3o do Bootloader na Franzininho DIY"},t=void 0,s={id:"FranzininhoDIY/bootloader/bootloader",title:"Bootloader",description:"Grava\xe7\xe3o do Bootloader na Franzininho DIY",source:"@site/docs/FranzininhoDIY/bootloader/bootloader.md",sourceDirName:"FranzininhoDIY/bootloader",slug:"/franzininho-diy/bootloader",permalink:"/docs/franzininho-diy/bootloader",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/bootloader/bootloader.md",tags:[],version:"current",frontMatter:{id:"bootloader",title:"Bootloader",slug:"/franzininho-diy/bootloader",description:"Grava\xe7\xe3o do Bootloader na Franzininho DIY"},sidebar:"docs",previous:{title:"Montagem da Franzininho DIY",permalink:"/docs/franzininho-diy/montagem"},next:{title:"Instala\xe7\xe3o de drivers e configura\xe7\xe3o da USB",permalink:"/docs/franzininho-diy/drivers-micronucleus"}},c={},d=[{value:"Materiais Necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"Gravando o FranzBoot no Arduino UNO",id:"gravando-o-franzboot-no-arduino-uno",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2},{value:"Gravar muitos chips",id:"gravar-muitos-chips",level:2}];function l(a){const e={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",ul:"ul",...(0,n.MN)(),...a.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Para que a placa Franzininho possa ser gravada atrav\xe9s da USB \xe9 necess\xe1rio gravar o bootloader. O bootloader \xe9 um pequeno programa que roda toda vez que a placa \xe9 iniciada e verifica se tem um comando de atualiza\xe7\xe3o de firmware. Caso tenha esse comando, ele recebe o bin\xe1rio atrav\xe9s da USB (no caso da Franzininho DIY) e grava na mem\xf3ria flash."}),"\n",(0,r.jsxs)(e.p,{children:["Na Franzininho DIY usamos o ",(0,r.jsx)(e.a,{href:"https://github.com/micronucleus/micronucleus/blob/master/Devices_with_Micronucleus.md",children:"Micronucleus"})," que \xe9 um bootloader pequeno e bem flex\xedvel desenvolvido para a fam\xedlia ATtiny usando o projeto ",(0,r.jsx)(e.a,{href:"https://www.obdev.at/products/vusb/index.html",children:"VUSB"})," como base."]}),"\n",(0,r.jsx)(e.p,{children:"A seguir vamos exibir como voc\xea pode gravar o ATtiny85 para usar o Micronucleus."}),"\n",(0,r.jsx)(e.h2,{id:"materiais-necess\xe1rios",children:"Materiais Necess\xe1rios"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Arduino UNO ou similar"}),"\n",(0,r.jsx)(e.li,{children:"Fios (Jumpers)"}),"\n",(0,r.jsx)(e.li,{children:"Protoboard"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"circuito",children:"Circuito"}),"\n",(0,r.jsx)(e.p,{children:"Voc\xea precisar\xe1 montar o seguinte circuito:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Circuito para Grava\xe7\xe3o",src:o(13788).c+"",width:"431",height:"408"})}),"\n",(0,r.jsx)(e.admonition,{title:"Fa\xe7a uma dupla checagem antes de ligar o Arduino Uno no computador.",type:"warning"}),"\n",(0,r.jsx)(e.p,{children:"Com o circuito Montado, vamos para a grava\xe7\xe3o do bootloader."}),"\n",(0,r.jsx)(e.h2,{id:"gravando-o-franzboot-no-arduino-uno",children:"Gravando o FranzBoot no Arduino UNO"}),"\n",(0,r.jsxs)(e.p,{children:["Para facilitar a grava\xe7\xe3o do bootloader vamos usar o ",(0,r.jsx)(e.a,{href:"https://github.com/Franzininho/FranzBoot",children:"FranzBoot"}),", um programa para grava\xe7\xe3o do bootloader micronucleus para Franzininho DIY usando Arduino UNO."]}),"\n",(0,r.jsxs)(e.p,{children:["Baixe o projeto no seu computador: ",(0,r.jsx)(e.a,{href:"https://github.com/Franzininho/FranzBoot/archive/refs/heads/main.zip",children:"Download"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"Descompacte a pasta e abra o arquivo FranzBoot.ino"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.mdxAdmonitionTitle,{children:["Se ainda n\xe3o tem a IDE Arduino no seu computador, baixe-a no site do ",(0,r.jsx)(e.a,{href:"https://www.arduino.cc/en/software",children:"Arduino"})]})}),"\n",(0,r.jsx)(e.p,{children:"Ser\xe1 aberta a IDE do Arduino:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Circuito para Grava\xe7\xe3o",src:o(93364).c+"",width:"1300",height:"1071"})}),"\n",(0,r.jsx)(e.p,{children:"Antes de gravar na placa precisamos configurar a IDE para a placa Arduino UNO. Em Placa selecione Arduino UNO e em porta a porta Serial criada para o seu Arduino UNO:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Circuito para Grava\xe7\xe3o",src:o(93580).c+"",width:"879",height:"706"})}),"\n",(0,r.jsx)(e.p,{children:"Pronto, agora pressione Upload(Carregar) e aguarde a grava\xe7\xe3o no Arduino UNO:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Circuito para Grava\xe7\xe3o",src:o(38316).c+"",width:"1300",height:"1071"})}),"\n",(0,r.jsx)(e.p,{children:"Agora abra o terminal serial:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Circuito para Grava\xe7\xe3o",src:o(75184).c+"",width:"1185",height:"569"})}),"\n",(0,r.jsx)(e.admonition,{title:"Verifique se a velocidade est\xe1 configurada em 9600.",type:"tip"}),"\n",(0,r.jsx)(e.p,{children:"Agora digite G e pressione enviar. Ap\xf3s a grava\xe7\xe3o deve ser apresentada a seguinte mensagem no terminal:"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Circuito para Grava\xe7\xe3o",src:o(64272).c+"",width:"1185",height:"569"})}),"\n",(0,r.jsx)(e.admonition,{title:"ERRO",type:"warning",children:(0,r.jsx)(e.p,{children:"Se receber uma mensagem de erro, verifique as conex\xf5es el\xe9tricas e envie novamente o comando G."})}),"\n",(0,r.jsx)(e.p,{children:"Pronto, o ATtiny85 est\xe1 pronto para ser encaixado na sua Franzininho DIY. Retire-o com cuidado da matriz de contatos e encaixe-o corretamente na Franzininho DIY, conforme imagem abaixo"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Placa Franzininho DIY",src:o(53144).c+"",width:"500",height:"233"})}),"\n",(0,r.jsx)(e.h2,{id:"pr\xf3ximos-passos",children:"Pr\xf3ximos passos"}),"\n",(0,r.jsx)(e.p,{children:"Agora que j\xe1 tem a sua placa Franzininho DIY preparada voc\xea pode partir para a programa\xe7\xe3o."}),"\n",(0,r.jsx)(e.h2,{id:"gravar-muitos-chips",children:"Gravar muitos chips"}),"\n",(0,r.jsxs)(e.p,{children:["Caso voc\xea necessite gravar muitos chips voc\xea pode gravar sem usar o PC. Verifique a ",(0,r.jsx)(e.a,{href:"https://github.com/Franzininho/FranzBoot#readme",children:"documenta\xe7\xe3o do FranzBoot"})," para mais detalhes."]})]})}function p(a={}){const{wrapper:e}={...(0,n.MN)(),...a.components};return e?(0,r.jsx)(e,{...a,children:(0,r.jsx)(l,{...a})}):l(a)}},95788:(a,e,o)=>{o.d(e,{MN:()=>d});var r=o(11504);function n(a,e,o){return e in a?Object.defineProperty(a,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[e]=o,a}function i(a,e){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.push.apply(o,r)}return o}function t(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(a,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))}))}return a}function s(a,e){if(null==a)return{};var o,r,n=function(a,e){if(null==a)return{};var o,r,n={},i=Object.keys(a);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=a[o]);return n}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(a,o)&&(n[o]=a[o])}return n}var c=r.createContext({}),d=function(a){var e=r.useContext(c),o=e;return a&&(o="function"==typeof a?a(e):t(t({},e),a)),o},l={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(a,e){var o=a.components,n=a.mdxType,i=a.originalType,c=a.parentName,p=s(a,["components","mdxType","originalType","parentName"]),u=d(o),h=n,m=u["".concat(c,".").concat(h)]||u[h]||l[h]||i;return o?r.createElement(m,t(t({ref:e},p),{},{components:o})):r.createElement(m,t({ref:e},p))}));p.displayName="MDXCreateElement"},93580:(a,e,o)=>{o.d(e,{c:()=>r});const r=o.p+"assets/images/IDE-Arduino-Configuracao-dde65494e76bfd5fe726b61692f4707c.png"},64272:(a,e,o)=>{o.d(e,{c:()=>r});const r=o.p+"assets/images/IDE-Arduino-Gravando-a69ad020e2520590375ce6a7c601429f.png"},75184:(a,e,o)=>{o.d(e,{c:()=>r});const r=o.p+"assets/images/IDE-Arduino-Terminal-serial-248aa58aa3f811c7df29648366143242.png"},38316:(a,e,o)=>{o.d(e,{c:()=>r});const r=o.p+"assets/images/IDE-Arduino-Upload-802877937fd66a36829d4c86bf1097c3.png"},93364:(a,e,o)=>{o.d(e,{c:()=>r});const r=o.p+"assets/images/IDE-Arduino-cabe65705eb2af6ca4940b4dada79e45.png"},13788:(a,e,o)=>{o.d(e,{c:()=>r});const r=o.p+"assets/images/circuito-58c7cff2dc28fe98b6f923e076cdb2d4.png"},53144:(a,e,o)=>{o.d(e,{c:()=>r});const r=o.p+"assets/images/placa-franzininho-diy-d8459c4e0e0d4c724d1c4d619ffc0350.png"}}]);