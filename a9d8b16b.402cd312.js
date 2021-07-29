(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,r,o){"use strict";o.r(r),o.d(r,"frontMatter",(function(){return i})),o.d(r,"metadata",(function(){return s})),o.d(r,"toc",(function(){return c})),o.d(r,"default",(function(){return m}));var a=o(3),t=o(7),n=(o(0),o(134)),i={id:"0x04_timer0",title:"04 - Timer 0",slug:"/franzininho-diy/exemplos-avr-libc/0x04_timer0",description:"Vamos aprender usar o timer 0 como temporizador",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},s={unversionedId:"FranzininhoDIY/exemplos-avr-libc/0x04_timer0",id:"FranzininhoDIY/exemplos-avr-libc/0x04_timer0",isDocsHomePage:!1,title:"04 - Timer 0",description:"Vamos aprender usar o timer 0 como temporizador",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/0x04_timer0.md",slug:"/franzininho-diy/exemplos-avr-libc/0x04_timer0",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/0x04_timer0",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/0x04_timer0.md",version:"current",sidebar:"docs",previous:{title:"03 - Entrada Digital",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/0x03_entrada_digital"},next:{title:"05 - Timer 0 - Interrup\xe7\xe3o",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/0x05_timer0_int"}},c=[{value:"Caracteristicas do Timer0",id:"caracteristicas-do-timer0",children:[]},{value:"Resumo de recursos do Timer0",id:"resumo-de-recursos-do-timer0",children:[]},{value:"Usando o Timer0 como temporizador",id:"usando-o-timer0-como-temporizador",children:[{value:"Passo para configurar o Timer0 como temporizador",id:"passo-para-configurar-o-timer0-como-temporizador",children:[]},{value:"Calculo do Delay",id:"calculo-do-delay",children:[]},{value:"Passos para monitorar o overflow do timer e gerar o delay de 1s",id:"passos-para-monitorar-o-overflow-do-timer-e-gerar-o-delay-de-1s",children:[]},{value:"C\xf3digo exemplo",id:"c\xf3digo-exemplo",children:[]},{value:"Simula\xe7\xe3o do exemplo",id:"simula\xe7\xe3o-do-exemplo",children:[]}]}],l={toc:c};function m(e){var r=e.components,i=Object(t.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,i,{components:r,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Os timers s\xe3o perif\xe9ricos muito importantes nos microcontroladores. Eles s\xe3o usados para temporiza\xe7\xe3o, contagem de eventos,PWM, medir pulsos externos, etc. O ATtiny85 possui 2 timers, chamados de Timer0 e Timer1. Nesse exemplos vamos focar no uso do timer0 como temporizador."),Object(n.b)("h2",{id:"caracteristicas-do-timer0"},"Caracteristicas do Timer0"),Object(n.b)("p",null,"O Timer0 \xe9 m m\xf3dulo temporizador/contador de 8 bits de uso geral. Isso significa que pode contar de 0 a 255. A funcionalidade do temporizador pode ser estendida ainda mais usando os perif\xe9ricos de compara\xe7\xe3o, que permitem que o temporizador conte eventos, gera\xe7\xe3o de PWM e assim por diante. Assim \xe9 poss\xedvel gerar temporiza\xe7\xf5es precisas, ondas e sinais PWM independentes da CPU."),Object(n.b)("p",null,"A figura a seguir exibe o diagrama de blocos simplicado do Timer0:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Diagrama de blocos do Timer0",src:o(257).default})),Object(n.b)("h2",{id:"resumo-de-recursos-do-timer0"},"Resumo de recursos do Timer0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Duas unidades de compara\xe7\xe3o de sa\xedda independentes;"),Object(n.b)("li",{parentName:"ul"},"Registradores de compara\xe7\xe3o de sa\xedda com buffer duplo;"),Object(n.b)("li",{parentName:"ul"},"Limpa cron\xf4metro na compara\xe7\xe3o de correspond\xeancia (recarregamento autom\xe1tico);"),Object(n.b)("li",{parentName:"ul"},"Modulador de largura de pulso com corre\xe7\xe3o de fase (PWM) livre de glitch;"),Object(n.b)("li",{parentName:"ul"},"Per\xedodo PWM Vari\xe1vel;"),Object(n.b)("li",{parentName:"ul"},"Gerador de frequ\xeancia;"),Object(n.b)("li",{parentName:"ul"},"Tr\xeas fontes de interrup\xe7\xe3o independentes (TOV0, OCF0A e OCF0B);")),Object(n.b)("h2",{id:"usando-o-timer0-como-temporizador"},"Usando o Timer0 como temporizador"),Object(n.b)("p",null,"Nesse exemplos vamos usar o Timer0 para gerar delay de 1s para piscar um LED."),Object(n.b)("h3",{id:"passo-para-configurar-o-timer0-como-temporizador"},"Passo para configurar o Timer0 como temporizador"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 1:")," Configurar o Timer0 para trabalhar no modo normal\nNesse modo o timer iniciar\xe1 a contagem em 0 e ir\xe1 at\xe9 m\xe1ximo de 255."),Object(n.b)("p",null,"Para configurar o modo Normal, devemos configurar o registrador TCCR0A \u2013 Timer/Counter Control Register A da seguinte forma:"),Object(n.b)("p",null,"COM0A","[1:0]"," e COM0B","[1:0]"," = 0"),Object(n.b)("p",null,Object(n.b)("img",{src:o(258).default})),Object(n.b)("p",null,"WGM0","[1:0]"," = 0 e TCCR0B - WGM02 = 0\n",Object(n.b)("img",{src:o(259).default})),Object(n.b)("p",null,"TCCR0A = 0b00000000;"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 2:")," Ajustar o prescaler do clock interno para 1024"),Object(n.b)("p",null,"Para ajustar o prescale precisamos configurar os bits CS02,CS01 e CS00 do TCCR0B:"),Object(n.b)("p",null,"TCCR0B - CS0","[2:0]","\n",Object(n.b)("img",{src:o(260).default})),Object(n.b)("p",null,"TCCR0B = 0b00000101;"),Object(n.b)("h3",{id:"calculo-do-delay"},"Calculo do Delay"),Object(n.b)("p",null,"Estamos trabalhando com o clock interno do ATtiny85 em 16.5Mhz. Essa pe a fonte de clock para o timer0 em modo de opera\xe7\xe3o normal. Como selecionamos o prescaler para dividir o clock por 1024, temos o incremento do timer em:"),Object(n.b)("p",null,"tempo por incremento do timer0 = 1/(16.5M/1024) = 62 us"),Object(n.b)("p",null,"Assim, o tempo para o timer estourar \xe9:\ntempo para o timer estoura = 62us x 256 = 15,89ms"),Object(n.b)("p",null,"Portanto, para ter um delay de 1 segundo precisamos ter:\nquantidade de overflows do timer0 = 1/15,89ms \u2243 63 vezes"),Object(n.b)("h3",{id:"passos-para-monitorar-o-overflow-do-timer-e-gerar-o-delay-de-1s"},"Passos para monitorar o overflow do timer e gerar o delay de 1s"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 0:")," Colocar TCNT0 em zero"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 1:")," Aguardar a contagem do timer verificando quando TOV0 vai para 1"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 2:")," Limpar a flag TOV0 escrevendo 1 nela(Isso mesmo escrevendo 1)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 3:")," Repetir passos 1 e 2 63 vezes para atingir 1 segundo"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 4:")," Passou um segundo  - Inverter LED"),Object(n.b)("h3",{id:"c\xf3digo-exemplo"},"C\xf3digo exemplo"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'/**\n * \n * @file main.c\n * @author F\xe1bio Souza\n * @brief Exibe como usar o timer zero para temporiza\xe7\xe3o\n * @version 0.1\n * @date 2021-02-13\n * \n * @copyright Franzininho \n * This example code is in the Public Domain (or CC0 licensed, at your option.)\n * Unless required by applicable law or agreed to in writing, this\n * software is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, either express or implied.\n * \n */\n\n#include <avr/io.h>\n#include <util/delay.h> \n\n#define F_CPU 16500000L\n\n    \n#define setBit(valor,bit) (valor |= (1<<bit))\n#define clearBit(valor,bit) (valor &= ~(1<<bit))\n#define toogleBit(valor,bit) (valor ^= (1<<bit))\n#define testBit(valor,bit)    (valor & (1<<bit))\n\n/**\n * @brief Fun\xe7\xe3o main\n * \n * @return int \n */\nint main(void) \n{\n  \n  unsigned char tempo = 0;  //contador auxiliar\n\n  setBit(DDRB,PB1);     // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n  //configura\xe7\xe3o do timer0 para overflow a aproximadamente 15,89 ms\n  //t = (1/16.5Mhz) x 1024 x 256 = 15,89 ms\n  TCCR0A=0x00;                      //Modo Normal\n  TCCR0B=0x00;\n  TCCR0B |= (1<<CS00)|(1<<CS02);   //prescaler de 1024\n  TCNT0=0;                         //inicia timer com 0\n  \n  /**\n   * @brief loop infinito\n   * \n   */\n  while (1)\n  {\n    if(testBit(TIFR,TOV0))         //se timer estourou\n    {\n      setBit(TIFR,TOV0);           //limpa flag\n      tempo++;                     //incrementa contador auxiliar\n      if(tempo >=63)               //se passaram-se 63 x 15,89 ms = 1 s\n      {\n        toogleBit(PORTB,PB1);      //inverte LED\n        tempo = 0;                 //reinicia contador\n      }\n    }\n  }                                                \n  return (0);                           \n}\n')),Object(n.b)("h3",{id:"simula\xe7\xe3o-do-exemplo"},"Simula\xe7\xe3o do exemplo"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Wokwi: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://wokwi.com/arduino/projects/305410400451560001"}),"https://wokwi.com/arduino/projects/305410400451560001")),Object(n.b)("li",{parentName:"ul"},"PICSimLab:")))}m.isMDXComponent=!0},134:function(e,r,o){"use strict";o.d(r,"a",(function(){return d})),o.d(r,"b",(function(){return b}));var a=o(0),t=o.n(a);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function c(e,r){if(null==e)return{};var o,a,t=function(e,r){if(null==e)return{};var o,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=t.a.createContext({}),m=function(e){var r=t.a.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},d=function(e){var r=m(e.components);return t.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},u=t.a.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(o),u=a,b=d["".concat(i,".").concat(u)]||d[u]||p[u]||n;return o?t.a.createElement(b,s(s({ref:r},l),{},{components:o})):t.a.createElement(b,s({ref:r},l))}));function b(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},257:function(e,r,o){"use strict";o.r(r),r.default=o.p+"assets/images/timer0-block-diagram-5e71243b7bad24e5127e6f41dfaedde0.png"},258:function(e,r,o){"use strict";o.r(r),r.default=o.p+"assets/images/timer0-config1-7bc446e41376fe89fecb317e4ac0d04e.png"},259:function(e,r,o){"use strict";o.r(r),r.default=o.p+"assets/images/timer0-config2-4933e7715c9acc2a35bdda2c4012d605.png"},260:function(e,r,o){"use strict";o.r(r),r.default=o.p+"assets/images/timer0-config3-874ed73be5590580496ee7b7f893b26e.png"}}]);