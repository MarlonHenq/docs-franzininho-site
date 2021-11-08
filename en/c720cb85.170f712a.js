(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{131:function(e,r,o){"use strict";o.r(r),o.d(r,"frontMatter",(function(){return s})),o.d(r,"metadata",(function(){return l})),o.d(r,"toc",(function(){return c})),o.d(r,"default",(function(){return d}));var a=o(3),t=o(7),n=(o(0),o(156)),i=["components"],s={id:"timer0",title:"Timer 0",slug:"/franzininho-diy/exemplos-avr-libc/timer0",description:"Vamos aprender usar o timer 0 como temporizador",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},l={unversionedId:"FranzininhoDIY/exemplos-avr-libc/timer0",id:"FranzininhoDIY/exemplos-avr-libc/timer0",isDocsHomePage:!1,title:"Timer 0",description:"Vamos aprender usar o timer 0 como temporizador",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/timer0.md",slug:"/franzininho-diy/exemplos-avr-libc/timer0",permalink:"/en/docs/franzininho-diy/exemplos-avr-libc/timer0",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/timer0.md",version:"current",sidebar:"docs",previous:{title:"Entrada Digital",permalink:"/en/docs/franzininho-diy/exemplos-avr-libc/entrada-digital"},next:{title:"Timer 0 - Interrup\xe7\xe3o",permalink:"/en/docs/franzininho-diy/exemplos-avr-libc/timer0-int"}},c=[{value:"Caracter\xedsticas do Timer0",id:"caracter\xedsticas-do-timer0",children:[]},{value:"Resumo de recursos do Timer0",id:"resumo-de-recursos-do-timer0",children:[]},{value:"Usando o Timer0 como temporizador",id:"usando-o-timer0-como-temporizador",children:[{value:"Passo para configurar o Timer0 como temporizador",id:"passo-para-configurar-o-timer0-como-temporizador",children:[]},{value:"Calculo do Delay",id:"calculo-do-delay",children:[]},{value:"Passos para monitorar o overflow do timer e gerar o delay de 1s",id:"passos-para-monitorar-o-overflow-do-timer-e-gerar-o-delay-de-1s",children:[]},{value:"Recursos necess\xe1rios",id:"recursos-necess\xe1rios",children:[]},{value:"C\xf3digo exemplo",id:"c\xf3digo-exemplo",children:[]},{value:"Simula\xe7\xe3o do exemplo",id:"simula\xe7\xe3o-do-exemplo",children:[]}]}],m={toc:c};function d(e){var r=e.components,s=Object(t.a)(e,i);return Object(n.b)("wrapper",Object(a.a)({},m,s,{components:r,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Os timers s\xe3o perif\xe9ricos muito importantes nos microcontroladores. Podemos us\xe1-los para temporiza\xe7\xe3o, contagem de eventos, PWM, medir pulsos externos, etc. O ATtiny85 possui 2 timers, chamados de Timer0 e Timer1. Nesse exemplos vamos focar no uso do Timer0 como temporizador."),Object(n.b)("h2",{id:"caracter\xedsticas-do-timer0"},"Caracter\xedsticas do Timer0"),Object(n.b)("p",null,"O Timer0 \xe9 um m\xf3dulo temporizador/contador de 8 bits de uso geral. Isso significa que ele pode contar de 0 a 255. A funcionalidade de temporiza\xe7\xe3o pode ser estendida ainda mais usando os perif\xe9ricos de compara\xe7\xe3o, que permitem que o temporizador conte eventos, gere sinais PWM e assim por diante. Assim \xe9 poss\xedvel gerar temporiza\xe7\xf5es precisas, ondas e sinais PWM independentes da CPU."),Object(n.b)("p",null,"A figura a seguir exibe o diagrama de blocos simplificado do Timer0:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Diagrama de blocos do Timer0",src:o(367).default})),Object(n.b)("h2",{id:"resumo-de-recursos-do-timer0"},"Resumo de recursos do Timer0"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Duas unidades de compara\xe7\xe3o de sa\xedda independentes;"),Object(n.b)("li",{parentName:"ul"},"Registradores de compara\xe7\xe3o de sa\xedda com buffer duplo;"),Object(n.b)("li",{parentName:"ul"},"Limpa cron\xf4metro na compara\xe7\xe3o de correspond\xeancia (recarregamento autom\xe1tico);"),Object(n.b)("li",{parentName:"ul"},"Modulador de largura de pulso com corre\xe7\xe3o de fase (PWM) livre de glitch;"),Object(n.b)("li",{parentName:"ul"},"Per\xedodo PWM vari\xe1vel;"),Object(n.b)("li",{parentName:"ul"},"Gerador de frequ\xeancia;"),Object(n.b)("li",{parentName:"ul"},"Tr\xeas fontes de interrup\xe7\xe3o independentes (TOV0, OCF0A e OCF0B);")),Object(n.b)("h2",{id:"usando-o-timer0-como-temporizador"},"Usando o Timer0 como temporizador"),Object(n.b)("p",null,"Nesse exemplos vamos usar o Timer0 para gerar delay de 1s para piscar um LED."),Object(n.b)("h3",{id:"passo-para-configurar-o-timer0-como-temporizador"},"Passo para configurar o Timer0 como temporizador"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 1:")," Configurar o Timer0 para trabalhar no modo normal. Nesse modo o timer iniciar\xe1 a contagem em 0 e ir\xe1 at\xe9 m\xe1ximo de 255. Quando atingido o m\xe1ximo \xe9 gerado um flag de sinaliza\xe7\xe3o de overflow e o timer volta a contar a partir do zero."),Object(n.b)("p",null,"Para configurar o modo de opera\xe7\xe3o normal, devemos configurar o registrador ",Object(n.b)("strong",{parentName:"p"},"TCCR0A \u2013 Timer/Counter Control Register A")," da seguinte forma:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"COM0A","[1:0]"," e COM0B","[1:0]"," = 0")),Object(n.b)("p",null,Object(n.b)("img",{src:o(368).default})),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"WGM0","[1:0]"," = 0 e TCCR0B \u2013 WGM02 = 0")),Object(n.b)("p",null,Object(n.b)("img",{src:o(369).default})),Object(n.b)("p",null,"Deve-se escrever os seguintes valores em ",Object(n.b)("strong",{parentName:"p"},"TCCR0A \u2013 Timer/Counter Control Register A"),":"),Object(n.b)("p",null,"TCCR0A = 0b00000000;"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 2:")," Ajustar o prescaler do clock interno para 1024"),Object(n.b)("p",null,"Para ajustar o prescale precisamos configurar os bits CS02,CS01 e CS00 do TCCR0B:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"TCCR0B \u2013 CS0","[2:0]")),Object(n.b)("p",null,Object(n.b)("img",{src:o(370).default})),Object(n.b)("p",null,"Deve-se escrever os seguintes valores em ",Object(n.b)("strong",{parentName:"p"},"TCCR0B \u2013 Timer/Counter Control Register")," B:"),Object(n.b)("p",null,"TCCR0B = 0b00000101;"),Object(n.b)("h3",{id:"calculo-do-delay"},"Calculo do Delay"),Object(n.b)("p",null,"Estamos trabalhando com o clock interno do ATtiny85 em 16.5Mhz. Essa \xe9 a fonte de clock para o timer0 em modo de opera\xe7\xe3o normal. Como selecionamos o prescaler para dividir o clock por 1024, temos o incremento do timer0 em:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"tempo por incremento do timer0 = 1/(16.5M/1024) = ",Object(n.b)("strong",{parentName:"li"},"62 us"))),Object(n.b)("p",null,"Assim, o tempo para o timer0 estourar(overflow) \xe9:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"tempo para o timer0 estourar = 62us x 256 = ",Object(n.b)("strong",{parentName:"li"},"15,89ms"))),Object(n.b)("p",null,"Portanto, para ter um delay de 1 segundo precisamos ter:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"quantidade de overflows do timer0 = 1/15,89ms \u2243 ",Object(n.b)("strong",{parentName:"li"},"63 vezes"))),Object(n.b)("h3",{id:"passos-para-monitorar-o-overflow-do-timer-e-gerar-o-delay-de-1s"},"Passos para monitorar o overflow do timer e gerar o delay de 1s"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Passo 0:")," Colocar TCNT0 em zero"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Passo 1:")," Aguardar a contagem do timer verificando quando TOV0 vai para 1"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Passo 2:")," Limpar a flag TOV0 escrevendo 1 nela(Isso mesmo escrevendo 1)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Passo 3:")," Repetir passos 1 e 2 63 vezes para atingir 1 segundo"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Passo 4:")," Passou um segundo \u2013 Inverter LED")),Object(n.b)("h3",{id:"recursos-necess\xe1rios"},"Recursos necess\xe1rios"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Placa Franzininho DIY(com Micronucleus)"),Object(n.b)("li",{parentName:"ul"},"LED "),Object(n.b)("li",{parentName:"ul"},"Resistor de 470 Ohm"),Object(n.b)("li",{parentName:"ul"},"Jumpers"),Object(n.b)("li",{parentName:"ul"},"Computador com as ferramentas de software instaladas")),Object(n.b)("h3",{id:"c\xf3digo-exemplo"},"C\xf3digo exemplo"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-c"},'/**\n * \n * @file main.c\n * @author F\xe1bio Souza\n * @brief Exibe como usar o timer zero para temporiza\xe7\xe3o\n * @version 0.1\n * @date 2021-02-13\n * \n * @copyright Franzininho \n * This example code is in the Public Domain (or CC0 licensed, at your option.)\n * Unless required by applicable law or agreed to in writing, this\n * software is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, either express or implied.\n * \n */\n\n#include <avr/io.h>\n#include <util/delay.h> \n\n#define F_CPU 16500000L\n\n    \n#define setBit(valor,bit) (valor |= (1<<bit))\n#define clearBit(valor,bit) (valor &= ~(1<<bit))\n#define toogleBit(valor,bit) (valor ^= (1<<bit))\n#define testBit(valor,bit)    (valor & (1<<bit))\n\n/**\n * @brief Fun\xe7\xe3o main\n * \n * @return int \n */\nint main(void) \n{\n  \n  unsigned char tempo = 0;  //contador auxiliar\n\n  setBit(DDRB,PB1);     // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n  //configura\xe7\xe3o do timer0 para overflow a aproximadamente 15,89 ms\n  //t = (1/16.5Mhz) x 1024 x 256 = 15,89 ms\n  TCCR0A=0x00;                      //Modo Normal\n  TCCR0B=0x00;\n  TCCR0B |= (1<<CS00)|(1<<CS02);   //prescaler de 1024\n  TCNT0=0;                         //inicia timer com 0\n  \n  /**\n   * @brief loop infinito\n   * \n   */\n  while (1)\n  {\n    if(testBit(TIFR,TOV0))         //se timer estourou\n    {\n      setBit(TIFR,TOV0);           //limpa flag\n      tempo++;                     //incrementa contador auxiliar\n      if(tempo >=63)               //se passaram-se 63 x 15,89 ms = 1 s\n      {\n        toogleBit(PORTB,PB1);      //inverte LED\n        tempo = 0;                 //reinicia contador\n      }\n    }\n  }                                                \n  return (0);                           \n}\n')),Object(n.b)("h3",{id:"simula\xe7\xe3o-do-exemplo"},"Simula\xe7\xe3o do exemplo"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Wokwi: "))),Object(n.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/305410400451560001?view=diagram"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"PICSimLab:")," ",Object(n.b)("a",{parentName:"li",href:"https://lcgamboa.github.io/picsimlab_examples/board_Franzininho_DIY.html#board_Franzininho_DIY_attiny85"},"https://lcgamboa.github.io/picsimlab_examples/board_Franzininho_DIY.html#board_Franzininho_DIY_attiny85"))))}d.isMDXComponent=!0},156:function(e,r,o){"use strict";o.d(r,"a",(function(){return d})),o.d(r,"b",(function(){return b}));var a=o(0),t=o.n(a);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,a,t=function(e,r){if(null==e)return{};var o,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=t.a.createContext({}),m=function(e){var r=t.a.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):s(s({},r),e)),o},d=function(e){var r=m(e.components);return t.a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.a.createElement(t.a.Fragment,{},r)}},p=t.a.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(o),p=a,b=d["".concat(i,".").concat(p)]||d[p]||u[p]||n;return o?t.a.createElement(b,s(s({ref:r},c),{},{components:o})):t.a.createElement(b,s({ref:r},c))}));function b(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},367:function(e,r,o){"use strict";o.r(r),r.default=o.p+"assets/images/timer0-block-diagram-5e71243b7bad24e5127e6f41dfaedde0.png"},368:function(e,r,o){"use strict";o.r(r),r.default=o.p+"assets/images/timer0-config1-7bc446e41376fe89fecb317e4ac0d04e.png"},369:function(e,r,o){"use strict";o.r(r),r.default=o.p+"assets/images/timer0-config2-4933e7715c9acc2a35bdda2c4012d605.png"},370:function(e,r,o){"use strict";o.r(r),r.default=o.p+"assets/images/timer0-config3-874ed73be5590580496ee7b7f893b26e.png"}}]);