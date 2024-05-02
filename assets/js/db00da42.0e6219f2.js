"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[6728],{27652:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var i=a(17624),r=a(95788);const t={id:"biblioteca-laboratorioFW-ARDUNO",title:"laboratorioFW_ARDUNO",slug:"biblioteca-laboratorioFW_ARDUNO",description:"O que \xe9 a biblioteca laboratorioFW-ARDUNO"},n=void 0,s={id:"LaboratorioSistemasIot/bibliotecas/biblioteca-laboratorioFW-ARDUNO",title:"laboratorioFW_ARDUNO",description:"O que \xe9 a biblioteca laboratorioFW-ARDUNO",source:"@site/docs/LaboratorioSistemasIot/bibliotecas/biblioteca-laboratorioFW-ARDUNO.md",sourceDirName:"LaboratorioSistemasIot/bibliotecas",slug:"/LaboratorioSistemasIot/bibliotecas/biblioteca-laboratorioFW_ARDUNO",permalink:"/docs/LaboratorioSistemasIot/bibliotecas/biblioteca-laboratorioFW_ARDUNO",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/LaboratorioSistemasIot/bibliotecas/biblioteca-laboratorioFW-ARDUNO.md",tags:[],version:"current",frontMatter:{id:"biblioteca-laboratorioFW-ARDUNO",title:"laboratorioFW_ARDUNO",slug:"biblioteca-laboratorioFW_ARDUNO",description:"O que \xe9 a biblioteca laboratorioFW-ARDUNO"},sidebar:"docs",previous:{title:"laboratorioFW",permalink:"/docs/LaboratorioSistemasIot/bibliotecas/biblioteca-laboratorioFW"}},l={},d=[{value:"Como instalar a biblioteca",id:"como-instalar-a-biblioteca",level:2},{value:"Como usar a biblioteca",id:"como-usar-a-biblioteca",level:2},{value:"Exemplo de utiliza\xe7\xe3o:",id:"exemplo-de-utiliza\xe7\xe3o",level:2},{value:"Exemplos implementados:",id:"exemplos-implementados",level:2},{value:"testes_completos.ino",id:"testes_completosino",level:3},{value:"adivinhe_a_senha.ino",id:"adivinhe_a_senhaino",level:3},{value:"ativar_led_RGB_com_potenciometro_e_botoes.ino",id:"ativar_led_rgb_com_potenciometro_e_botoesino",level:3},{value:"ativar_servo_motor_com_botoes.ino",id:"ativar_servo_motor_com_botoesino",level:3},{value:"contagem_display_7seg.ino",id:"contagem_display_7segino",level:3},{value:"controle_led_com_ldr.ino",id:"controle_led_com_ldrino",level:3},{value:"do_re_mi_fa.ino",id:"do_re_mi_faino",level:3},{value:"genio.ino",id:"genioino",level:3},{value:"leitura_do_teclado.ino",id:"leitura_do_tecladoino",level:3},{value:"leitura_sensores_externos.ino",id:"leitura_sensores_externosino",level:3},{value:"leitura_sensores_grove.ino",id:"leitura_sensores_groveino",level:3},{value:"leitura_umidade_temperatura_oled.ino",id:"leitura_umidade_temperatura_oledino",level:3}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.MN)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"Nesta biblioteca \xe9 poss\xedvel encontrar o mapeamento entre a pinagem da placa Arduino Uno e a codifica\xe7\xe3o dos pinos de ativa\xe7\xe3o da placa Laborat\xf3rio de Sistemas Embarcados e IoT segundo o projeto do adaptador para Arduino projeto para a placa. A biblioteca tamb\xe9m \xe9 poss\xedvel encontrar exemplos de utiliza\xe7\xe3o dos perif\xe9ricos dispon\xedveis na placa."}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"https://github.com/Franzininho/biblioteca-laboratorioFW_ARDUNO",children:"Clique aqui"})," para acessar o reposit\xf3rio da biblioteca no Github."]}),"\n",(0,i.jsx)(o.h2,{id:"como-instalar-a-biblioteca",children:"Como instalar a biblioteca"}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["Fa\xe7a o donwload da biblioteca em formato zip clicando em ",(0,i.jsx)(o.strong,{children:"Code"})," e depois em ",(0,i.jsx)(o.strong,{children:"Download ZIP"})]}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:a(68160).c+"",width:"528",height:"398"})}),"\n",(0,i.jsxs)(o.ol,{start:"2",children:["\n",(0,i.jsx)(o.li,{children:"Abra a IDE do Arduino"}),"\n",(0,i.jsx)(o.li,{children:"V\xe1 em Sketch > Include Library > Add .ZIP Library"}),"\n"]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:a(5056).c+"",width:"657",height:"378"})}),"\n",(0,i.jsxs)(o.ol,{start:"4",children:["\n",(0,i.jsx)(o.li,{children:"Selecione o arquivo zip baixado e clique em ok"}),"\n",(0,i.jsx)(o.li,{children:"Opcional: Procure pelos exemplos da biblioteca em File > Examples"}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"como-usar-a-biblioteca",children:"Como usar a biblioteca"}),"\n",(0,i.jsxs)(o.p,{children:["Para utilizar a biblioteca basta inclu\xed-la no seu arquivo de c\xf3digo com a linha ",(0,i.jsx)(o.code,{children:"#include<laboratorioFW_ARDUNO.h>"}),". Depois disso, voc\xea pode utilizar os c\xf3digos dos pinos de ativa\xe7\xe3o na placa dentro do seu c\xf3digo."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsxs)(o.strong,{children:["Importante : Os algorismos do c\xf3digo do pino de ativa\xe7\xe3o s\xe3o separados por um caractere de ",(0,i.jsx)(o.code,{children:"_"}),", ou seja o pino de ativa\xe7\xe3o C0 pode ser acessado no c\xf3digo atrav\xe9s do c\xf3digo C_0 e assim por diante."]})}),"\n",(0,i.jsx)(o.h2,{id:"exemplo-de-utiliza\xe7\xe3o",children:"Exemplo de utiliza\xe7\xe3o:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-c",children:"#include <laborarotioFW_ARDUNO.h>\n\n#define led A_1\n\nvoid setup(){\n    pinMode(led,OUTPUT);\n}\n\nvoid loop{\n    digitalWrite(led,HIGH);\n    delay(1000);\n    digitalWrite(led,LOW);\n    delay(1000);\n}\n"})}),"\n",(0,i.jsx)(o.h2,{id:"exemplos-implementados",children:"Exemplos implementados:"}),"\n",(0,i.jsx)(o.h3,{id:"testes_completosino",children:"testes_completos.ino"}),"\n",(0,i.jsx)(o.p,{children:"Neste exemplo temos todos os c\xf3digos necess\xe1rios para os testes de todos os perif\xe9ricos dispon\xedveis na placa. Este c\xf3digo \xe9 um c\xf3digo para a valida\xe7\xe3o da placa e n\xe3o para ser utilizado no cotidiano."}),"\n",(0,i.jsx)(o.h3,{id:"adivinhe_a_senhaino",children:"adivinhe_a_senha.ino"}),"\n",(0,i.jsxs)(o.p,{children:["Neste exemplo implementamos um sistema de verifica\xe7\xe3o de senha utilizando o teclado matricial e a biblioteca ",(0,i.jsx)(o.code,{children:"Keypad"})," para fazer o mapeamento\ndo teclado. Neste sistema, o usu\xe1rio deve inserir uma senha de cinco caracteres usando o teclado matricial da placa. Quando o usu\xe1rio indica que terminou de digitar a senha apertando um o bot\xe3o correspondente ao caractere ",(0,i.jsx)(o.code,{children:"*"})," ou ",(0,i.jsx)(o.code,{children:"#"}),", essa sequ\xeancia \xe9 comparada com uma senha previamente definida no c\xf3digo. Um led \xe9 aceso para indicar se a senha est\xe1 correta ou n\xe3o e uma mensagem com essa informa\xe7\xe3o \xe9 impresso no monitor serial."]}),"\n",(0,i.jsx)(o.h3,{id:"ativar_led_rgb_com_potenciometro_e_botoesino",children:"ativar_led_RGB_com_potenciometro_e_botoes.ino"}),"\n",(0,i.jsx)(o.p,{children:"Neste exemplo objetiva controlamos o brilho do LED RGB utilizando um potenci\xf4metro e tr\xeas bot\xf5es. Os tr\xeas bot\xf5es s\xe3o utilizados para selecionar qual cor do LED RGB ser\xe1 controlada (vermelho, verde e azul) e a leitura anal\xf3gica do potenci\xf4metro \xe9 usada para dosar a intensidade da cor do terminal."}),"\n",(0,i.jsx)(o.h3,{id:"ativar_servo_motor_com_botoesino",children:"ativar_servo_motor_com_botoes.ino"}),"\n",(0,i.jsx)(o.p,{children:"Neste exemplo, utilizamos dois bot\xf5es para controlar a posi\xe7\xe3o de um servo motor. Os bot\xf5es s\xe3o associados no c\xf3digo \xe0s dire\xe7\xf5es esquerda e direita e alteram o \xe2ngulo do servo fazendo com que seja poss\xedvel moviment\xe1-lo nas duas dire\xe7\xf5es. Foi usada a biblioteca Servo."}),"\n",(0,i.jsx)(o.h3,{id:"contagem_display_7segino",children:"contagem_display_7seg.ino"}),"\n",(0,i.jsx)(o.p,{children:"Neste exemplo, utilizamos o display de sete segmentos para exibir uma contagem de 0 a 9 segundos."}),"\n",(0,i.jsx)(o.h3,{id:"controle_led_com_ldrino",children:"controle_led_com_ldr.ino"}),"\n",(0,i.jsx)(o.p,{children:"Neste exemplo, fazemos a leitura do sensor LDR e mapeamos esta leitura \xe9 mapeada e o valor resultante \xe9 usado para acender um LED. O exemplo tamb\xe9m conta com um bot\xe3o que controla um estado interno do programa e seleciona se a leitura ser\xe1 impressa como \xe9 lida ou com l\xf3gica complementar."}),"\n",(0,i.jsx)(o.h3,{id:"do_re_mi_faino",children:"do_re_mi_fa.ino"}),"\n",(0,i.jsxs)(o.p,{children:["Neste exemplo uma m\xfasica \xe9 tocada pelo buzzer em conjunto com a ativa\xe7\xe3o\ndo LED RGB endere\xe7\xe1vel. O programa utiliza a biblioteca ",(0,i.jsx)(o.code,{children:"Adafruit_NeoPixel"})," para controlar o LED."]}),"\n",(0,i.jsx)(o.h3,{id:"genioino",children:"genio.ino"}),"\n",(0,i.jsx)(o.p,{children:"Neste exemplo, implementamos o jogo Simon, tamb\xe9m conhecido como g\xeanio. Neste jogo, quatro LEDs s\xe3o ativados em uma sequ\xeancia gerada aleat\xf3riamente e essa sequ\xeancia \xe9 apresentada para o jogador, que deve repetir a sequ\xeancia na ordem correta pressionando os bot\xf5es correspondentes. Quando os LEDs acendem, um som correspondente \xe9 tocado no buzzer."}),"\n",(0,i.jsx)(o.h3,{id:"leitura_do_tecladoino",children:"leitura_do_teclado.ino"}),"\n",(0,i.jsxs)(o.p,{children:["Neste exemplo fazemos a leitura de uma tecla pressionada no teclado matricial e\na imprimimos essa tecla no no monitor serial. A biblioteca ",(0,i.jsx)(o.code,{children:"Keypad"})," \xe9 utilizada para fazer o mapeamento do teclado."]}),"\n",(0,i.jsx)(o.h3,{id:"leitura_sensores_externosino",children:"leitura_sensores_externos.ino"}),"\n",(0,i.jsx)(o.p,{children:"Neste exemplo fazemos a leitura dos sensores externos conectados nos sockets\npara conectores externos da placa e imprimimos os valores lidos no monitor serial."}),"\n",(0,i.jsx)(o.h3,{id:"leitura_sensores_groveino",children:"leitura_sensores_grove.ino"}),"\n",(0,i.jsx)(o.p,{children:"Neste exemplo fazemos a leitura dos sensores externos conectados nos conectores Grove da placa e imprimimos os valores lidos no monitor serial."}),"\n",(0,i.jsx)(o.h3,{id:"leitura_umidade_temperatura_oledino",children:"leitura_umidade_temperatura_oled.ino"}),"\n",(0,i.jsxs)(o.p,{children:["Neste exemplo fazemos a leitura do sensor de temperatura e umidade escrevemos os dados lidos no display OLED. Para isso, s\xe3o utilizadas as bibliotecas ",(0,i.jsx)(o.code,{children:"DTH"})," e ",(0,i.jsx)(o.code,{children:"U8glib"}),"."]}),"\n",(0,i.jsx)(o.admonition,{title:"Obs.",type:"info",children:(0,i.jsxs)(o.p,{children:["Este projeto foi desenvolvido como parte do Trabalho de Conclus\xe3o de Curso de ",(0,i.jsx)(o.a,{href:"https://github.com/LelePG",children:"Let\xedcia Pegoraro Garcez"}),"."]})})]})}function m(e={}){const{wrapper:o}={...(0,r.MN)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},95788:(e,o,a)=>{a.d(o,{MN:()=>d});var i=a(11504);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function t(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?t(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,i,r=function(e,o){if(null==e)return{};var a,i,r={},t=Object.keys(e);for(i=0;i<t.length;i++)a=t[i],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)a=t[i],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),d=function(e){var o=i.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):n(n({},o),e)),a},c={inlineCode:"code",wrapper:function(e){var o=e.children;return i.createElement(i.Fragment,{},o)}},m=i.forwardRef((function(e,o){var a=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,b=p["".concat(l,".").concat(u)]||p[u]||c[u]||t;return a?i.createElement(b,n(n({ref:o},m),{},{components:a})):i.createElement(b,n({ref:o},m))}));m.displayName="MDXCreateElement"},5056:(e,o,a)=>{a.d(o,{c:()=>i});const i=a.p+"assets/images/add-zip-ce38fdcac233471a2c4ff935e87d70bd.png"},68160:(e,o,a)=>{a.d(o,{c:()=>i});const i=a.p+"assets/images/download-zip-ba60fb48387d2208e3f003c8afe3db77.png"}}]);