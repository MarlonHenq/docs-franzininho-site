"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[576],{56068:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>t,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(17624),a=n(95788);const i={id:"hello-world",title:"Hello, World!",slug:"/franzininho-diy/exemplos-avr-libc/hello-world",description:"Nesse primeiros exemplo vamos dar os primeiros passos na programa\xe7\xe3o da Franzininho DIY",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},s=void 0,l={id:"FranzininhoDIY/exemplos-avr-libc/hello-world",title:"Hello, World!",description:"Nesse primeiros exemplo vamos dar os primeiros passos na programa\xe7\xe3o da Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/hello-world.md",sourceDirName:"FranzininhoDIY/exemplos-avr-libc",slug:"/franzininho-diy/exemplos-avr-libc/hello-world",permalink:"/docs/franzininho-diy/exemplos-avr-libc/hello-world",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/hello-world.md",tags:[],version:"current",frontMatter:{id:"hello-world",title:"Hello, World!",slug:"/franzininho-diy/exemplos-avr-libc/hello-world",description:"Nesse primeiros exemplo vamos dar os primeiros passos na programa\xe7\xe3o da Franzininho DIY",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},sidebar:"docs",previous:{title:"Primeiros Passos",permalink:"/docs/franzininho-diy/exemplos-avr-libc/primeiros-passos"},next:{title:"Sa\xedda Digital",permalink:"/docs/franzininho-diy/exemplos-avr-libc/saida-digital"}},t={},c=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",level:2},{value:"Hello, World em linguagem C",id:"hello-world-em-linguagem-c",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:3},{value:"Compila\xe7\xe3o e upload",id:"compila\xe7\xe3o-e-upload",level:3},{value:"Resultados",id:"resultados",level:3},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.MN)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:["Nesse exemplo vamos dar os nossos primeiros passos na programa\xe7\xe3o da Franzininho DIY usando a ",(0,r.jsx)(o.a,{href:"https://nongnu.org/avr-libc/",children:"AVR Libc"}),"."]}),"\n",(0,r.jsx)(o.p,{children:'Como de costume o nosso "Hello, World!" na eletr\xf4nica ser\xe1 um blink LED. Ao final desse experimento voc\xea ter\xe1 uma estrutura m\xednima para desenvolver aplica\xe7\xf5es para o ATtiny85 em C.'}),"\n",(0,r.jsx)(o.p,{children:"Bora, colocar em pr\xe1tica!"}),"\n",(0,r.jsx)(o.h2,{id:"recursos-necess\xe1rios",children:"Recursos Necess\xe1rios"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Placa Franzininho DIY(com Micronucleus)"}),"\n",(0,r.jsx)(o.li,{children:"Computador com as ferramentas de software instaladas(link)"}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"hello-world-em-linguagem-c",children:"Hello, World em linguagem C"}),"\n",(0,r.jsx)(o.p,{children:"Esse exemplo b\xe1sico nos dar\xe1 estrutura para todos nossos exemplos daqui pra frente. Como j\xe1 mencionado, vamos usar a linguagem C em conjunto com a biblioteca AVR Libc. Para esse exemplo voc\xea s\xf3 precisar\xe1 da placa Franzininho DIY e as ferramentas de softwares."}),"\n",(0,r.jsx)(o.p,{children:"O c\xf3digo exibe a estrutura m\xednima de um programa em linguagem C para microcontroladores. Se voc\xea tem dificuldades com a linguagem C, recomendo que confira os seguintes materiais:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://www.youtube.com/watch?v=l9ZdS8kph0A&list=PLqY1DITQ0sB_5yUBqhnm37J5PxsjrVPKT",children:"Playlist Linguagem C"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://www.slideshare.net/FabioSouza9/resumo-linguagem-c-para-microcontroladores-pic-usando-mikroc",children:"Slideshare"})}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Nesse momento \xe9 importante que voc\xea se atente a estrutura do c\xf3digo. Vamos usar alguns registradores para acionar o LED, mas n\xe3o ser\xe3o o foco da explica\xe7\xe3o. Confira os coment\xe1rios no c\xf3digo a seguir:"}),"\n",(0,r.jsx)(o.h3,{id:"c\xf3digo",children:"C\xf3digo"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-c",children:"#include <avr/io.h>            // Biblioteca para acesso aos registradores do MCU\n#include <util/delay.h>        // Biblioteca para fun\xe7\xf5es de delay\n\n#define F_CPU 16500000L        // Frequencia de clock que o mcu est\xe1 trabalhando\n\n/**\n  Essa \xe9 a fun\xe7\xe3o principal onde \xe9 iniciada aplica\xe7\xe3o\n*/\nint main(void)\n{\n    DDRB |= (1 << PB1);        // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n    // O programar ficar\xe1 nesse loop enquanto a placa estiver ligada\n    while (1)\n    {\n        PORTB |= (1 << PB1);   // Liga LED\n        _delay_ms(500);        // Aguarda 500 ms\n\n        PORTB &= ~(1 << PB1);  // Desliga LED\n        _delay_ms(500);        // Aguarda 500 ms\n    }\n\n    return (0);                // Necess\xe1rio um retorno (pois a fun\xe7\xe3o retorna int) mesmo que a fun\xe7\xe3o nunca retornar\xe1\n}\n"})}),"\n",(0,r.jsx)(o.h3,{id:"compila\xe7\xe3o-e-upload",children:"Compila\xe7\xe3o e upload"}),"\n",(0,r.jsxs)(o.p,{children:["para compilar o programa, acesse a pasta do exemplo e em seguida o comando  ",(0,r.jsx)(o.code,{children:"make"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"exemplos-avr-libc/exemplos/hello$ make\n"})}),"\n",(0,r.jsx)(o.p,{children:"J\xe1 temos o makefile configurado na pasta, assim, ser\xe1 feita a compila\xe7\xe3o e em seguida aparecer\xe1 a mensagem para conectar a placa:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-shell",children:"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n"})}),"\n",(0,r.jsx)(o.p,{children:"Conecte a placa no PC ou pressione o bot\xe3o de RESET se ela j\xe1 estiver conectada."}),"\n",(0,r.jsx)(o.p,{children:"Ser\xe1 iniciado o upload."}),"\n",(0,r.jsx)(o.h3,{id:"resultados",children:"Resultados"}),"\n",(0,r.jsx)(o.p,{children:"Nesse exemplo o LED ir\xe1 piscar em intervalos de 500 ms (on) e 500 ms (off)."}),"\n",(0,r.jsxs)(o.p,{children:["No pr\xf3ximo exemplo vamos detalhar sobre os registradores de IO. Nesse momento, al\xe9m da estrutura inicial \xe9 importante que voc\xea entenda como usar a fun\xe7\xe3o ",(0,r.jsx)(o.code,{children:"_delay_ms()"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Essa fun\xe7\xe3o espera o tempo passado em milissegundos."}),"\n",(0,r.jsx)(o.p,{children:"Altere o c\xf3digo para que o led fique 100 ms(on) e 1000 ms (off), veja o efeito."}),"\n",(0,r.jsx)(o.h2,{id:"conclus\xe3o",children:"Conclus\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["Nesse exemplo tivemos o primeiro contato com a programa\xe7\xe3o em linguagem C para microcontroladores. Notamos que devemos incluir as bibliotecas externas atrav\xe9s do ",(0,r.jsx)(o.code,{children:"#include"})," e que o programa precisa necessariamente ter a fun\xe7\xe3o ",(0,r.jsx)(o.code,{children:"int main(void)"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Dentro da fun\xe7\xe3o main temos um loop infinito onde os comandos se repetir\xe3o enquanto a placa estiver ligada."}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Autor"}),(0,r.jsx)(o.th,{children:(0,r.jsx)(o.a,{href:"https://github.com/FBSeletronica",children:"F\xe1bio Souza"})})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Data:"}),(0,r.jsx)(o.td,{children:"24/04/2021"})]})})]})]})}function m(e={}){const{wrapper:o}={...(0,a.MN)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},95788:(e,o,n)=>{n.d(o,{MN:()=>c});var r=n(11504);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,r,a=function(e,o){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],o.indexOf(n)>=0||(a[n]=e[n]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var t=r.createContext({}),c=function(e){var o=r.useContext(t),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var n=e.components,a=e.mdxType,i=e.originalType,t=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(t,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(h,s(s({ref:o},m),{},{components:n})):r.createElement(h,s({ref:o},m))}));m.displayName="MDXCreateElement"}}]);