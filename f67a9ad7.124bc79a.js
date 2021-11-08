(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{148:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return c})),o.d(a,"metadata",(function(){return s})),o.d(a,"toc",(function(){return d})),o.d(a,"default",(function(){return p}));var t=o(3),i=o(7),n=(o(0),o(156)),r=["components"],c={id:"wokwi-intro",title:"Como simular a Franzininho DIY no Wokwi",slug:"/franzininho-diy/wokwi/primeiros-passos",description:"Nesse t\xf3pico vamos ver como usar o WokWi para simular circuitos com a Franzininho DIY"},s={unversionedId:"FranzininhoDIY/wokwi/wokwi-intro",id:"FranzininhoDIY/wokwi/wokwi-intro",isDocsHomePage:!1,title:"Como simular a Franzininho DIY no Wokwi",description:"Nesse t\xf3pico vamos ver como usar o WokWi para simular circuitos com a Franzininho DIY",source:"@site/docs/FranzininhoDIY/wokwi/franzininho-wokwi.md",slug:"/franzininho-diy/wokwi/primeiros-passos",permalink:"/docs-franzininho-site/docs/franzininho-diy/wokwi/primeiros-passos",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/wokwi/franzininho-wokwi.md",version:"current",sidebar:"docs",previous:{title:"TODO",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/todo"},next:{title:"Franzininho DIY no PICSimLab",permalink:"/docs-franzininho-site/docs/franzininho-diy/picsimlab/primeiros-passos"}},d=[{value:"Primeiros passos",id:"primeiros-passos",children:[{value:"C\xf3digo do exemplo 1",id:"c\xf3digo-do-exemplo-1",children:[]}]},{value:"Pe\xe7as",id:"pe\xe7as",children:[{value:"Adicionando uma nova pe\xe7a",id:"adicionando-uma-nova-pe\xe7a",children:[]},{value:"Rotacionando uma pe\xe7a",id:"rotacionando-uma-pe\xe7a",children:[]},{value:"Removendo uma pe\xe7a",id:"removendo-uma-pe\xe7a",children:[]}]},{value:"Liga\xe7\xf5es",id:"liga\xe7\xf5es",children:[{value:"Cria\xe7\xe3o de uma liga\xe7\xe3o entre as duas pe\xe7as",id:"cria\xe7\xe3o-de-uma-liga\xe7\xe3o-entre-as-duas-pe\xe7as",children:[]},{value:"Liga\xe7\xe3o entre os fios",id:"liga\xe7\xe3o-entre-os-fios",children:[]},{value:"C\xf3digo do exemplo 2",id:"c\xf3digo-do-exemplo-2",children:[]},{value:"Mudando a cor de um fio",id:"mudando-a-cor-de-um-fio",children:[]}]},{value:"Atalhos do teclado",id:"atalhos-do-teclado",children:[]},{value:"Desfazer / Refazer",id:"desfazer--refazer",children:[]},{value:"Saiba mais",id:"saiba-mais",children:[]},{value:"Exemplos no Simulador",id:"exemplos-no-simulador",children:[]}],l={toc:d};function p(e){var a=e.components,c=Object(i.a)(e,r);return Object(n.b)("wrapper",Object(t.a)({},l,c,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Wokwi \xe9 um simulador online para Arduino e Eletr\xf4nica. Foi desenvolvido para makers, por makers."),Object(n.b)("p",null,"Voc\xea pode usar o Wokwi para aprender a programar o Franzininho DIY, criar prot\xf3tipos de suas id\xe9ias, e compartilhar seus projetos com outros makers."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://wokwi.com/arduino/new?template=franzininho"},Object(n.b)("img",{alt:"Wokwi Franzininho DIY",src:o(403).default})))),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Dica")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Use o Template do Franzininho DIY clicando na imagem acima para come\xe7ar um novo projeto no Wokwi."))),Object(n.b)("h2",{id:"primeiros-passos"},"Primeiros passos"),Object(n.b)("p",null,"Vamos come\xe7ar o nosso programa acendendo o ",Object(n.b)("inlineCode",{parentName:"p"},"LED1")," do Franzinino DIY no simulador, para isso copie ou digite o c\xf3digo abaixo no editor do Wokwi conforme imagem abaixo."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)("p",null,Object(n.b)("img",{alt:"Wokwi Code Editor",src:o(404).default}))),Object(n.b)("h3",{id:"c\xf3digo-do-exemplo-1"},"C\xf3digo do exemplo 1"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-cpp"},"const byte LED1 = 1;\n\nvoid setup() {\n  pinMode(LED1, OUTPUT);     // Configura como pino de sa\xedda digital\n}\n\nvoid loop() {\n  digitalWrite(LED1, HIGH);  // Acende o LED interno\n  delay(1000);               // Aguarda um segundo\n  digitalWrite(LED1, LOW);   // Apaga o LED interno\n  delay(1000);               // Aguarda um segundo\n}\n")),Object(n.b)("p",null,"Em seguida, vamos executar o nosso programa clicando no bot\xe3o verde conforme a imagem abaixo."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)("p",null,Object(n.b)("img",{alt:"Wokwi Simulation",src:o(405).default}))),Object(n.b)("h2",{id:"pe\xe7as"},"Pe\xe7as"),Object(n.b)("p",null,"Vamos chamar os novos m\xf3dulos ou componentes de ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"pe\xe7as")),", que seriam como por exemplo, as pe\xe7as de um jogo de montagem, onde vamos adicionando cada uma para depois fazermos as liga\xe7\xf5es entre elas."),Object(n.b)("p",null,"Cada projeto de simula\xe7\xe3o cont\xe9m um arquivo ",Object(n.b)("a",{parentName:"p",href:"#saiba-mais"},"diagram.json")," localizado no editor de c\xf3digo. Este arquivo define as pe\xe7as\nque ser\xe3o usadas para a simula\xe7\xe3o, suas propriedades e as conex\xf5es entre os componentes."),Object(n.b)("p",null,"O editor de diagramas fornece uma maneira interativa de editar seu diagrama: adicionando pe\xe7as \xe0 simula\xe7\xe3o e definindo as conex\xf5es entre elas."),Object(n.b)("h3",{id:"adicionando-uma-nova-pe\xe7a"},"Adicionando uma nova pe\xe7a"),Object(n.b)("p",null,"Para adicionar uma nova pe\xe7a, clique no bot\xe3o ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},'roxo "+"'))," na parte superior do editor de diagramas."),Object(n.b)("p",null,"Voc\xea ver\xe1 um menu com uma lista de pe\xe7as que voc\xea pode adicionar. Escolha uma pe\xe7a para adicion\xe1-la. A pe\xe7a ser\xe1 adicionada na posi\xe7\xe3o (0, 0), e ent\xe3o voc\xea pode arrast\xe1-la para a posi\xe7\xe3o desejada, conforme imagem abaixo."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)("p",null,Object(n.b)("img",{alt:"Wokwi Add part",src:o(406).default}))),Object(n.b)("h3",{id:"rotacionando-uma-pe\xe7a"},"Rotacionando uma pe\xe7a"),Object(n.b)("p",null,'Gire uma pe\xe7a clicando nela (para selecion\xe1-la) e pressionando "R". A pe\xe7a girar\xe1 90 graus no sentido hor\xe1rio. Se voc\xea precisar girar uma pe\xe7a\ncom um valor diferente (por exemplo, 45 graus), voc\xea pode conseguir isso editando o arquivo ',Object(n.b)("a",{parentName:"p",href:"#saiba-mais"},"diagram.json")," no editor de c\xf3digo."),Object(n.b)("h3",{id:"removendo-uma-pe\xe7a"},"Removendo uma pe\xe7a"),Object(n.b)("p",null,"Exclua uma pe\xe7a clicando nela (para selecion\xe1-la) e em seguida pressionando a tecla Delete."),Object(n.b)("h2",{id:"liga\xe7\xf5es"},"Liga\xe7\xf5es"),Object(n.b)("h3",{id:"cria\xe7\xe3o-de-uma-liga\xe7\xe3o-entre-as-duas-pe\xe7as"},"Cria\xe7\xe3o de uma liga\xe7\xe3o entre as duas pe\xe7as"),Object(n.b)("p",null,"Para criar um ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"novo fio"))," entre duas pe\xe7as, clique em um dos pinos que deseja conectar. Em seguida, clique no segundo pino (alvo). Isso criar\xe1 o fio."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)("p",null,Object(n.b)("img",{alt:"Wokwi Add part",src:o(407).default}))),Object(n.b)("p",null,"Se quiser que o fio v\xe1 de uma maneira espec\xedfica, voc\xea pode gui\xe1-lo clicando para onde deseja que ele v\xe1 ap\xf3s selecionar o primeiro pino."),Object(n.b)("p",null,"Para cancelar um novo fio (exclua-o sem selecionar um pino de destino), clique com o bot\xe3o direito do mouse ou pressione Escape."),Object(n.b)("p",null,"Para excluir uma liga\xe7\xe3o apenas clique com o bot\xe3o esquerdo do mouse no fio que ele ser\xe1 removido."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)("p",null,Object(n.b)("img",{alt:"Wokwi Add part",src:o(408).default}))),Object(n.b)("h3",{id:"liga\xe7\xe3o-entre-os-fios"},"Liga\xe7\xe3o entre os fios"),Object(n.b)("p",null,"Para fazer mais de uma liga\xe7\xe3o na mesma pe\xe7a, apenas arraste o fio at\xe9 o pino da pe\xe7a, conforme a imagem abaixo."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)("p",null,Object(n.b)("img",{alt:"Wokwi Add part",src:o(409).default}))),Object(n.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aten\xe7\xe3o")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Cuidado para n\xe3o clicar em cima de um fio existente ao arrastar o segundo fio e remov\xea-lo sem querer. Procure sempre clicar em cima do pino da pe\xe7a."))),Object(n.b)("h3",{id:"c\xf3digo-do-exemplo-2"},"C\xf3digo do exemplo 2"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-cpp"},"const byte BUTTON = 0;\nconst byte LED1 = 1;\n\nint buttonState = 0;\n\nvoid setup() {\n  pinMode(LED1, OUTPUT);      // Configura como pino de sa\xedda digital\n  pinMode(BUTTON, INPUT);     // Configura como pino de entrada\n}\n\nvoid loop() {\n  // L\xea o estado do bot\xe3o\n  buttonState = digitalRead(BUTTON);\n\n  // Verifica se est\xe1 pressionado\n  if (buttonState == LOW) {\n    digitalWrite(LED1, HIGH); // Acende o LED interno\n  } else {\n    digitalWrite(LED1, LOW);  // Apaga o LED interno\n  }\n}\n")),Object(n.b)("h3",{id:"mudando-a-cor-de-um-fio"},"Mudando a cor de um fio"),Object(n.b)("p",null,"A cor dos novos fios \xe9 determinada automaticamente pela fun\xe7\xe3o do pino: os fios que come\xe7am nos pinos de aterramento s\xe3o pretos e os outros fios s\xe3o verdes."),Object(n.b)("p",null,"O editor interativo n\xe3o oferece suporte para definir a cor dos fios. Voc\xea pode, no entanto, alterar a cor de qualquer fio editando o diagram.json, ",Object(n.b)("a",{parentName:"p",href:"#saiba-mais"},"saiba mais"),"."),Object(n.b)("h2",{id:"atalhos-do-teclado"},"Atalhos do teclado"),Object(n.b)("p",null,"A tabela a seguir resume os atalhos do teclado:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Tecla"),Object(n.b)("th",{parentName:"tr",align:null},"Fun\xe7\xe3o"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"-"),Object(n.b)("td",{parentName:"tr",align:null},"Reduz o zoom")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"+"),Object(n.b)("td",{parentName:"tr",align:null},"Aumenta o zoom")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"R"),Object(n.b)("td",{parentName:"tr",align:null},"Gira a pe\xe7a selecionada")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Delete"),Object(n.b)("td",{parentName:"tr",align:null},"Remove a pe\xe7a selecionada")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"?"),Object(n.b)("td",{parentName:"tr",align:null},"Abre a documenta\xe7\xe3o da pe\xe7a selecionada")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Escape"),Object(n.b)("td",{parentName:"tr",align:null},"Cancela o fio (no modo de fia\xe7\xe3o)")))),Object(n.b)("p",null,'Usu\xe1rios do Firefox: se os atalhos do teclado n\xe3o funcionarem, certifique-se de que a configura\xe7\xe3o "Pesquisar texto ao come\xe7ar a digitar" esteja desabilitada.'),Object(n.b)("h2",{id:"desfazer--refazer"},"Desfazer / Refazer"),Object(n.b)("p",null,"Qualquer mudan\xe7a que voc\xea fizer no editor interativo tamb\xe9m se refletir\xe1 em ",Object(n.b)("a",{parentName:"p",href:"#saiba-mais"},"diagram.json"),"."),Object(n.b)("p",null,"O editor interativo ",Object(n.b)("strong",{parentName:"p"},"n\xe3o tem")," o recurso de desfazer no momento (h\xe1 uma ",Object(n.b)("a",{parentName:"p",href:"https://github.com/wokwi/wokwi-features/issues/77"},"solicita\xe7\xe3o aberta para isso"),")."),Object(n.b)("p",null,'Voc\xea ainda pode obter o hist\xf3rico completo de Desfazer se selecionar a guia "diagram.json" no editor de c\xf3digo. Quaisquer altera\xe7\xf5es feitas no editor de diagramas interativo\nrefletir\xe1 imediatamente no editor de c\xf3digo e voc\xea poder\xe1 desfaz\xea-los clicando no editor de c\xf3digo e pressionando Ctrl+Z.'),Object(n.b)("p",null,'Observe que isso s\xf3 funciona se a guia "diagram.json" estiver ativa enquanto voc\xea faz altera\xe7\xf5es. Esta \xe9 uma solu\xe7\xe3o tempor\xe1ria at\xe9 implementarmos o Desfazer no editor de diagramas interativo.'),Object(n.b)("h2",{id:"saiba-mais"},"Saiba mais"),Object(n.b)("p",null,"Caso queira saber mais sobre outras funcionalidades do simulador, d\xea uma olhada na lista abaixo. Voc\xea pode tamb\xe9m consultar as pe\xe7as na lista de ",Object(n.b)("a",{parentName:"p",href:"https://docs.wokwi.com/pt-BR/"},"Refer\xeancia do Diagrama"),", dispon\xedvel na documenta\xe7\xe3o do Wokwi."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/diagram-format"},"Formato do diagram.json")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/keyboard-shortcuts"},"Teclas de Atalho do Editor")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/guides/serial-monitor"},"O Monitor Serial")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/gdb-debugging"},"Usando o GDB no Wokwi")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/guides/logic-analyzer"},"Guia do Analisador L\xf3gico")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/guides/libraries"},"Lista completa das Bibliotecas Arduino"),", atualmente dispon\xedveis no Wokwi.")),Object(n.b)("h2",{id:"exemplos-no-simulador"},"Exemplos no Simulador"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/301693553069785610"},"Pisca LED")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/304646764687786560"},"Dado eletr\xf4nico")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/301751077214093834"},"Sensor de Temperatura NTC"),", usando Termistor NTC e SSD1306."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/301745949656482317"},"Sensor de Umidade e Temperatura Digital"),", com DHT22 e SSD1306."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/302020345098928648"},"Sensor Ultra-s\xf4nico"),", usando 74HC595 e HC-SR04."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/302291615188255242"},"Controle de posi\xe7\xe3o Servo Motor"),", com um Motor Micro Servo e um LCD1602."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/302199144424931848"},"Contador de pulsos externos")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/301738586036765194"},"Rel\xf3gio"),", usando dois 74HC595 e RTC DS1307."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/304826828859638336"},"Letreiro"),", com quatro MAX7219, um RTC DS1307 e um sensor DHT22."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/313076832346833472"},"LCD 4 bits com 74HC595")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/311202006419112513"},"Simula\xe7\xe3o de 6 portas l\xf3gicas com Franzininho DIY")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/310022133947302466"},"LED Bar Graph")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/306670612160447042"},"LED RGB ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/311426763532010048"},"Simon Game")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/301931601583931913"},"Sem\xe1foro")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://wokwi.com/arduino/projects/314180422625919552"},"Painel de senhas para atendimento"))))}p.isMDXComponent=!0},156:function(e,a,o){"use strict";o.d(a,"a",(function(){return p})),o.d(a,"b",(function(){return u}));var t=o(0),i=o.n(t);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,i=function(e,a){if(null==e)return{};var o,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(i[o]=e[o]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var d=i.a.createContext({}),l=function(e){var a=i.a.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):c(c({},a),e)),o},p=function(e){var a=l(e.components);return i.a.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},b=i.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),b=t,u=p["".concat(r,".").concat(b)]||p[b]||m[b]||n;return o?i.a.createElement(u,c(c({ref:a},d),{},{components:o})):i.a.createElement(u,c({ref:a},d))}));function u(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,r=new Array(n);r[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,r[1]=c;for(var d=2;d<n;d++)r[d]=o[d];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},403:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/wokwi-franzininho-diy-0e10ac8a10de848902742f1eca4a1dd5.png"},404:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/wokwi-code-editor-47eee91a0ab6645263b94f6bd08f4a2d.gif"},405:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/wokwi-simulation-d50447bbaca6bad8045412b26dcd3bdf.gif"},406:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/wokwi-add-part-926231e515ac4ee3870435dab3b57a96.gif"},407:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/wokwi-wire-22136c43f0684fab1cd744b2fdd96e57.gif"},408:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/wokwi-wire-delete-e7d78e867645f88f9ce03d0fbe96b94b.gif"},409:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/wokwi-button-example-48d78418193c8ce581aeaf830011cc9c.gif"}}]);