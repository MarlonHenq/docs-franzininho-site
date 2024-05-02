"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[6332],{58960:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var a=n(17624),i=n(95788);const r={id:"franzininho-wifi-espidf-04",title:"PWM com LEDC",slug:"/franzininho-wifi/exemplos-espidf/ledc",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",author:"Halysson Junior"},s=void 0,t={id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-04",title:"PWM com LEDC",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x04-LEDC.md",sourceDirName:"FranzininhoWifi/exemplos-espidf",slug:"/franzininho-wifi/exemplos-espidf/ledc",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/ledc",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x04-LEDC.md",tags:[],version:"current",frontMatter:{id:"franzininho-wifi-espidf-04",title:"PWM com LEDC",slug:"/franzininho-wifi/exemplos-espidf/ledc",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",author:"Halysson Junior"},sidebar:"docs",previous:{title:"Entrada Anal\xf3gica",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/entrada-analogica"},next:{title:"Primeiros passos com a AWS",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/aws"}},d={},c=[{value:"<strong>Recursos Necess\xe1rios</strong>",id:"recursos-necess\xe1rios",level:2},{value:"<strong>Desenvolvimento</strong>",id:"desenvolvimento",level:2},{value:"<strong>Esquem\xe1tico</strong>",id:"esquem\xe1tico",level:3},{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo",level:3},{value:"<strong>Compila\xe7\xe3o</strong>",id:"compila\xe7\xe3o",level:3},{value:"<strong>Resultados</strong>",id:"resultados",level:3},{value:"<strong>Conclus\xe3o</strong>",id:"conclus\xe3o",level:2}];function l(e){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.MN)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:["Seguindo os estudos do ESP-IDF, vamos agora estudar um novo perif\xe9rico, o LED Control (LEDC), o qual tem a fun\xe7\xe3o de controlar a intensidade luminosa do LED e tamb\xe9m servir como fonte geradora de sinal pulsado, ",(0,a.jsx)(o.strong,{children:"Pulse Width Modulation"})," (PWM), para diferentes prop\xf3sitos como: controle de velocidade em motores de corrente cont\xednua (CC), angula\xe7\xe3o em servomotores, mudan\xe7a de cores em LED RGB e outras mais aplica\xe7\xf5es."]}),"\n",(0,a.jsx)(o.p,{children:"Com isso, ao final deste artigo estaremos familiarizados com os recursos oferecidos pelo perif\xe9rico al\xe9m de dominar as configura\xe7\xf5es b\xe1sicas para implementar em projetos."}),"\n",(0,a.jsx)(o.h2,{id:"recursos-necess\xe1rios",children:(0,a.jsx)(o.strong,{children:"Recursos Necess\xe1rios"})}),"\n",(0,a.jsx)(o.p,{children:"Os materiais necess\xe1rios para realizar esse exemplo s\xe3o:"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Placa Franzininho WiFi;"}),"\n",(0,a.jsx)(o.li,{children:"Protoboard;"}),"\n",(0,a.jsx)(o.li,{children:"LED;"}),"\n",(0,a.jsx)(o.li,{children:"Resistor de 220 Ohm;"}),"\n",(0,a.jsx)(o.li,{children:"Cabos Jumpers;"}),"\n",(0,a.jsx)(o.li,{children:"Computador com ESP-IDF instalado e configurado."}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"desenvolvimento",children:(0,a.jsx)(o.strong,{children:"Desenvolvimento"})}),"\n",(0,a.jsxs)(o.p,{children:["Na placa Franzininho WiFi o perif\xe9rico LEDC est\xe1 disposto em dois grupos de oito canais, sendo um grupo operando no ",(0,a.jsx)(o.strong,{children:"High Speed Mode (HSM)"})," e outro em ",(0,a.jsx)(o.strong,{children:"Low Speed Mode (LSM)"})," operando independente uns dos outros ",(0,a.jsx)(o.strong,{children:"."})," O modo High Speed \xe9 implementado em hardware oferecendo mudan\xe7as autom\xe1ticas sem interferir no duty cycle do PWM, ou seja, caso haja altera\xe7\xf5es na temporiza\xe7\xe3o ser\xe3o atualizadas no pr\xf3ximo estouro do timer. Em contraste isso o modo Low Speed deve ser explicitar o via software as configura\xe7\xf5es de temporiza\xe7\xe3o."]}),"\n",(0,a.jsx)(o.p,{children:"Para utilizarmos esse perif\xe9ricos precisamos seguir algumas etapas fundamentais para nossa aplica\xe7\xe3o de estudo que s\xe3o: Configura\xe7\xe3o do Temporizador , Configura\xe7\xe3o do Canal e Altera\xe7\xe3o do PWM."}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Configura\xe7\xe3o do Temporizador : nessa primeira etapa vamos especificar a frequ\xeancia e a resolu\xe7\xe3o do sinal PWM preenchendo a estrutura de dados ",(0,a.jsx)(o.a,{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/ledc.html#_CPPv419ledc_timer_config_t",children:(0,a.jsx)(o.strong,{children:"ledc_timer_config_t"})})," e apontando-a para a fun\xe7\xe3o ",(0,a.jsx)(o.strong,{children:"led_timer_config() ."})]}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsx)(o.p,{children:"Configura\xe7\xe3o do Canal: nessa segunda etapa iremos direcionar o GPIO que ser\xe1 a sa\xedda do sinal PWM, o qual \xe9 selecionado dentro da estrutura de configura\xe7\xe3o do perif\xe9rico."}),"\n"]}),"\n",(0,a.jsxs)(o.li,{children:["\n",(0,a.jsxs)(o.p,{children:["Altera\xe7\xe3o do PWM: na \xfaltima etapa vamos realizar o aumento e a redu\xe7\xe3o do duty cycle na sa\xedda da geradora de sinal criando assim o ",(0,a.jsx)(o.strong,{children:"fade"})," no LED externo, o qual ser\xe1 habilitado via hardware pela fun\xe7\xe3o ",(0,a.jsx)(o.a,{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/ledc.html#_CPPv422ledc_fade_func_installi",children:(0,a.jsx)(o.strong,{children:"ledc_fade_func_install()"})}),(0,a.jsx)(o.strong,{children:"."})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Com a finaliza\xe7\xe3o das tr\xeas etapas de configura\xe7\xe3o o acionamento do perif\xe9rico LED Control estar\xe1 em funcionamento, contudo devemos agora seguir para montagem do circuito para concluir o projeto."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Configura\xe7\xe3o do Perif\xe9rico LED Control",src:n(97980).c+"",width:"768",height:"384"})}),"\n",(0,a.jsx)(o.h3,{id:"esquem\xe1tico",children:(0,a.jsx)(o.strong,{children:"Esquem\xe1tico"})}),"\n",(0,a.jsxs)(o.p,{children:["Nesta parte daremos in\xedcio a montagem do circuito em protoboard, iremos conectar um dos terminais do resistor no ",(0,a.jsx)(o.strong,{children:"GPIO 2"})," e outro no LED externo."]}),"\n",(0,a.jsx)(o.p,{children:"Abaixo segue o esquem\xe1tico proposto :"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Imagem do Circuito",src:n(88492).c+"",width:"1024",height:"367"})}),"\n",(0,a.jsx)(o.h3,{id:"c\xf3digo",children:(0,a.jsx)(o.strong,{children:"C\xf3digo"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-c",children:'/*\n   Autor: Halysson Junior\n   Data : 10/04/21   \n\n    Nesse exemplo foi configurado o periferico LEDC para controlar a intensidade do LED.\n     \n*/\n\n// Inclus\xe3o de arqivos de cabe\xe7alho\n#include <stdio.h>\n#include "freertos/FreeRTOS.h"\n#include "freertos/task.h"\n#include "driver/ledc.h"\n#include "esp_err.h"\n\n// Defini\xe7\xe3o para configura\xe7\xe3o do perif\xe9rico\n#define LEDC_GPIO         2\n#define LEDC_FADE_TIME    500\n#define LEDC_RESOLUTION   1024\n#define LEDC_FREQ         5000\n\n\nvoid app_main(void) // Main\n{\n\n  //  Estrutura de dados para receber  as v\xe1riaveis  de configura\xe7\xe3o de frequ\xeancia (1Hz, 100 Hz e outros), modo (HIGH ou LOW) e selecionar o TIMER (0,1,2)  \n  \n  ledc_timer_config_t timer = {                   // Configura\xe7\xe3o do timer \n\n      .speed_mode      = LEDC_LOW_SPEED_MODE,     // Modo de Velocidade -> LOW\n      .duty_resolution = LEDC_TIMER_10_BIT,       // Resolu\xe7\xe3o do do ciclo de trabalho (2^10 = 1024 valores)\n      .timer_num       = LEDC_TIMER_0,            // Utilizado o TIMER 0\n      .freq_hz         = LEDC_FREQ,               // Frequ\xeancia de opera\xe7\xe3o do sinal PWM\n      .clk_cfg         = LEDC_AUTO_CLK            // Sele\xe7\xe3o automatica da fonte geradora do clock (interna ou externa)\n    \n  };\n\n  \n  ledc_timer_config(&timer); // Envia o endere\xe7o  da estrutura timer para a fun\xe7\xe3o de configura\xe7\xe3o do canal PWM \n \n /*\n   NOTA:\n   A frequencia e a resolu\xe7\xe3o do ciclo de trabalho s\xe3o independentes. Para uma elevada frequ\xeancia do PWM, \n   ter\xe1 uma baixa resolu\xe7\xe3o do ciclo de trabalho disponivel e vice-versa  \n */\n\n //  Estrutura de dados para receber  as v\xe1riaveis  de configura\xe7\xe3o de frequencia (1Hz, 100 Hz e outros), modo (HIGH ou LOW), selecionar o TIMER (0,1,2) \n  \n  ledc_channel_config_t channel_LEDC = {\n      .gpio_num   =   LEDC_GPIO,             // Seleciona o pino para atuar o PWM\n      .speed_mode =   LEDC_LOW_SPEED_MODE,   // Modo de Velocidade -> LOW\n      .channel    =   LEDC_CHANNEL_0,           \n      .timer_sel  =   LEDC_TIMER_0,\n      .duty       =   0,\n      .hpoint     =   0\n    \n    };\n  \n  ledc_channel_config(&channel_LEDC);\n \n \n  ledc_fade_func_install(0); // Inicializa o servi\xe7o do Fade\n  \n  for(;;){ // Loop\n\n   // Define e inicia a fun\xe7\xe3o de fade no perif\xe9rico LEDC\n    ledc_set_fade_time_and_start( channel_LEDC.speed_mode , channel_LEDC.channel , 0               , LEDC_FADE_TIME , LEDC_FADE_WAIT_DONE);\n    ledc_set_fade_time_and_start( channel_LEDC.speed_mode , channel_LEDC.channel , LEDC_RESOLUTION , LEDC_FADE_TIME , LEDC_FADE_WAIT_DONE);\n  \n  \n  }// endLoop\n\n}//endMain\n\n/*\n *** Paramentriza\xe7\xe3o da fun\xe7\xe3o " ledc_set_fade_time_and_start(); " ***\n\nledc_set_fade_time_and_start(ledc_mode_tspeed_mode, ledc_channel_tchannel, uint32_t target_duty, uint32_t max_fade_time_ms, ledc_fade_mode_tfade_mode)\n\n  ledc_mode_tspeed_mode     -> modo do timer utilizado\n  ledc_channel_tchannel     -> indice do canal LEDC (0-7)\n  uint32_t target_duty      -> (2 ** resolu\xe7\xe3o_ciclo_de_trabalho) -  1\n  uint32_t max_fade_time_ms -> tempo m\xe1ximo (ms) para o fading  \n  ledc_fade_mode_tfade_mode ->  \n*/\n'})}),"\n",(0,a.jsx)(o.p,{children:"O programa desenvolvido possui uma estrutura bem simples e n\xe3o \xe9 necess\xe1rio acrescentar nenhuma biblioteca, apenas a manuten\xe7\xe3o dos arquivos de cabe\xe7alho j\xe1 presentes no projeto."}),"\n",(0,a.jsxs)(o.p,{children:["Ao criar um novo projeto no IDF automaticamente j\xe1 temos arquivos configurados e prontos para programa\xe7\xe3o do dispositivo, desta forma digite e comente as linhas do seguinte c\xf3digo no arquivo ",(0,a.jsx)(o.strong,{children:"main.c :"})]}),"\n",(0,a.jsxs)(o.p,{children:["Voc\xea encontra o projeto completo na documenta\xe7\xe3o da Franzininho: ",(0,a.jsx)(o.a,{href:"https://github.com/Franzininho/exemplos-esp-idf/tree/main/exemplos/PWM_LEDC",children:(0,a.jsx)(o.strong,{children:"PWM_LEDC"})})]}),"\n",(0,a.jsxs)(o.p,{children:["Caso ainda n\xe3o tenha instalado e configurado o IDF no seu computador ou tenha d\xfavidas sobre as ferramentas, acesse o tutorial de instala\xe7\xe3o (",(0,a.jsx)(o.a,{href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/exemplos-espidf/primeiros-passos",children:"Clique Aqui"}),")."]}),"\n",(0,a.jsx)(o.h3,{id:"compila\xe7\xe3o",children:(0,a.jsx)(o.strong,{children:"Compila\xe7\xe3o"})}),"\n",(0,a.jsxs)(o.p,{children:["Ap\xf3s a codifica\xe7\xe3o vamos compilar o c\xf3digo, mas antes selecione o ",(0,a.jsx)(o.strong,{children:(0,a.jsx)(o.em,{children:"set-target"})})," para ESP32-S2. Caso n\xe3o possua a placa Franzininho WiFi altere o target para o modelo de ESP32 utilizando em seu projeto."]}),"\n",(0,a.jsx)(o.p,{children:"idf.py set-target esp32s2"}),"\n",(0,a.jsx)(o.p,{children:"Ao final da compila\xe7\xe3o o resultado final deve ser semelhante \xe0 imagem mostrada abaixo, em caso de erros retorne os passos anteriores e revise seu c\xf3digo."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Imagem do Terminal Visual Code",src:n(64928).c+"",width:"1024",height:"607"})}),"\n",(0,a.jsx)(o.p,{children:"Ap\xf3s a etapa de compila\xe7\xe3o vamos enviar o c\xf3digo fonte para nossa placa, no editor pressione o \xedcone abaixo e aguarde alguns segundos para assim dar in\xedcio ao upload do programa \u201cPWM\u201d (seta preta) ."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Barra inferior do Visual Code",src:n(39668).c+"",width:"528",height:"54"})}),"\n",(0,a.jsx)(o.h3,{id:"resultados",children:(0,a.jsx)(o.strong,{children:"Resultados"})}),"\n",(0,a.jsx)(o.p,{children:"Ap\xf3s enviar seu c\xf3digo e com o circuito devidamente montado o LED externo conectado come\xe7ar\xe1 a aumentar e diminuir sua intensidade luminosa gradualmente criando o fade desejado. Na figura 5 temos a imagem do oscilosc\xf3pio mostrando a forma de onda gerada e o duty cycle atuando no momento e na figura 6 o circuito em perfeito funcionamento."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Sa\xedda do sinal PWM",src:n(52172).c+"",width:"1024",height:"1024"})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Imagem do circuito em funcionamento",src:n(71360).c+"",width:"1024",height:"768"})}),"\n",(0,a.jsx)(o.h2,{id:"conclus\xe3o",children:(0,a.jsx)(o.strong,{children:"Conclus\xe3o"})}),"\n",(0,a.jsx)(o.p,{children:"Neste exemplo apresentamos t\xf3picos intermedi\xe1rios sobre a manipula\xe7\xe3o do perif\xe9rico LED Control, utilizamos conceitos importantes da linguagem C estrutura de dados e ponteiros implementado na configura\xe7\xe3o do sinal pulsado."}),"\n",(0,a.jsx)(o.p,{children:"Deve-se deixar claro que o artigo aborda um conte\xfado para darmos os primeiros passo com este perif\xe9rico, encorajamos que o leitor reconfigure a sa\xedda do sinal PWM como tamb\xe9m acesse a documenta\xe7\xe3o oferecida pela Espressif para compreender como o hardware do chip comporta-se com cada configura\xe7\xe3o realizada al\xe9m das fun\xe7\xf5es implementadas em software."}),"\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Autor"}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.a,{href:"https://github.com/halyssonJr",children:"Halysson Junior"})})]})}),(0,a.jsx)(o.tbody,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Data:"}),(0,a.jsx)(o.td,{children:"22/07/2021"})]})})]})]})}function m(e={}){const{wrapper:o}={...(0,i.MN)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},95788:(e,o,n)=>{n.d(o,{MN:()=>c});var a=n(11504);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function t(e,o){if(null==e)return{};var n,a,i=function(e,o){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var o=a.useContext(d),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},l={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=t(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,h=p["".concat(d,".").concat(u)]||p[u]||l[u]||r;return n?a.createElement(h,s(s({ref:o},m),{},{components:n})):a.createElement(h,s({ref:o},m))}));m.displayName="MDXCreateElement"},97980:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/1-f7885fb7827c5c17fea371b5f8452645.png"},88492:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/2-0a531df80a496fe52ef1cd273f3306a5.png"},64928:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/3-413df3a4edbd9eeef3237bc8e6bd0894.png"},39668:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/4-e64a6a5ed6db5ad1206c547c1b106046.png"},52172:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/5-921eb8572a537a8d55e8dddc33727221.jpeg"},71360:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/6-7477a50ccfa225dc8f32e7ce6cf22339.jpeg"}}]);