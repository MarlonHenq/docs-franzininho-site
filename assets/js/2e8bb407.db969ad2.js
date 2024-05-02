"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[5240],{28388:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var o=a(17624),n=a(95788);const i={id:"franzininho-wifi-espidf-00",title:"Primeiros Passos com ESP-IDF",slug:"/franzininho-wifi/exemplos-espidf/primeiros-passos",description:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF",author:"F\xe1bio Souza"},r=void 0,t={id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-00",title:"Primeiros Passos com ESP-IDF",description:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x00-Primeiros-passos.md",sourceDirName:"FranzininhoWifi/exemplos-espidf",slug:"/franzininho-wifi/exemplos-espidf/primeiros-passos",permalink:"/docs/franzininho-wifi/exemplos-espidf/primeiros-passos",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x00-Primeiros-passos.md",tags:[],version:"current",frontMatter:{id:"franzininho-wifi-espidf-00",title:"Primeiros Passos com ESP-IDF",slug:"/franzininho-wifi/exemplos-espidf/primeiros-passos",description:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF",author:"F\xe1bio Souza"},sidebar:"docs",previous:{title:"Como simular a Franzininho WiFi no Wokwi",permalink:"/docs/franzininho-wifi/wokwi/primeiros-passos"},next:{title:"Hello World! ESP-IDF",permalink:"/docs/franzininho-wifi/exemplos-espidf/hello-world-esp-idf"}},d={},l=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Passo 1 - Instala\xe7\xe3o dos pr\xe9-requisitos",id:"passo-1---instala\xe7\xe3o-dos-pr\xe9-requisitos",level:2},{value:"Passo 2 - Instala\xe7\xe3o do ESP-IDF",id:"passo-2---instala\xe7\xe3o-do-esp-idf",level:2},{value:"Linux e macOS",id:"linux-e-macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Instalando O ESP-IDF e ferramentas",id:"instalando-o-esp-idf-e-ferramentas",level:3},{value:"Windows",id:"windows-1",level:4},{value:"Linux e macOS",id:"linux-e-macos-1",level:4},{value:"Configurando as vari\xe1veis de ambientes",id:"configurando-as-vari\xe1veis-de-ambientes",level:3},{value:"Windows",id:"windows-2",level:4},{value:"Linux e macOS",id:"linux-e-macos-2",level:4},{value:"Passo 3 - Criando um novo projeto",id:"passo-3---criando-um-novo-projeto",level:2},{value:"Copiando um projeto exemplo",id:"copiando-um-projeto-exemplo",level:3},{value:"Windows",id:"windows-3",level:4},{value:"Linux e macOS",id:"linux-e-macos-3",level:4},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:3},{value:"Windows",id:"windows-4",level:4},{value:"Linux e macOS",id:"linux-e-macos-4",level:4},{value:"Compilando o projeto em modo DFU",id:"compilando-o-projeto-em-modo-dfu",level:3},{value:"Compila\xe7\xe3o, grava\xe7\xe3o e monitor em modo normal",id:"compila\xe7\xe3o-grava\xe7\xe3o-e-monitor-em-modo-normal",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.MN)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF (Espressif IoT Development Framework) para trabalhar com a Franzininho WiFi que usa o ESP32-S2 da Espressif."}),"\n",(0,o.jsx)(s.p,{children:"Ao final, faremos um exemplo simples para compilar, gravar e monitorar usando o ESP-IDF, assim, garantiremos que tudo estar\xe1 funcionando."}),"\n",(0,o.jsx)(s.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,o.jsx)(s.p,{children:"Para essa configura\xe7\xe3o, vamos instalar o ESP-IDF e us\xe1-lo atrav\xe9s de linha de comando. Caso voc\xea queira usar o IDF integrado a ambientes de desenvolvimento integrado (IDE) como VScode e Eclipse, confira os seguintes links:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://github.com/espressif/idf-eclipse-plugin",children:"Eclipse Plugin"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://github.com/espressif/vscode-esp-idf-extension",children:"VS Code Extension"})}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Voc\xea poder\xe1 instalar o ESP-IDF no seu sistema operacional preferido (Linux, Windows, macOS)."}),"\n",(0,o.jsx)(s.p,{children:"Para a experi\xeancia completa, voc\xea precisar\xe1 de uma placa Franzininho WiFi, Computador: com Windows, Linux ou macOS"}),"\n",(0,o.jsx)(s.h2,{id:"passo-1---instala\xe7\xe3o-dos-pr\xe9-requisitos",children:"Passo 1 - Instala\xe7\xe3o dos pr\xe9-requisitos"}),"\n",(0,o.jsx)(s.p,{children:"Algumas ferramentas precisam ser instaladas no computador antes de prosseguir para as pr\xf3ximas etapas. Siga os links abaixo para obter as instru\xe7\xf5es para o seu sistema operacional:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup.html",children:"Windows"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/linux-setup.html",children:"Linux"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/macos-setup.html",children:"Mac OS"})}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"\xc9 muito importante a instala\xe7\xe3o de todos os pr\xe9-requisitos."}),"\n",(0,o.jsx)(s.h2,{id:"passo-2---instala\xe7\xe3o-do-esp-idf",children:"Passo 2 - Instala\xe7\xe3o do ESP-IDF"}),"\n",(0,o.jsxs)(s.p,{children:["Nessa etapa vamos instalar o ESP-IDF e conjunto de ferramentas e bibliotecas. Vamos usar o c\xf3digo mantido pela Espressif no reposit\xf3rio do ",(0,o.jsx)(s.a,{href:"https://github.com/espressif/esp-idf",children:"ESP-IDF"})]}),"\n",(0,o.jsx)(s.p,{children:"O ESP-IDF \xe9 o framework oficial da Espressif para o desenvolvimento de aplica\xe7\xf5es parar toda a fam\xedlia ESP32. O procedimento apresentado aqui servir\xe1 para trabalhar com toda a fam\xedlia ESP32. Por\xe9m, vamos dar foco ao ESP32-S2 que \xe9 usado na Franzininho WiFi."}),"\n",(0,o.jsx)(s.h3,{id:"linux-e-macos",children:"Linux e macOS"}),"\n",(0,o.jsx)(s.p,{children:"Abra o terminal e execute:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"mkdir -p ~/esp\ncd ~/esp\ngit clone --recursive https://github.com/espressif/esp-idf.git\n"})}),"\n",(0,o.jsxs)(s.p,{children:["O ESP-IDF ser\xe1 baixado no seguinte reposit\xf3rio ",(0,o.jsx)(s.code,{children:"~/esp/esp-idf"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"windows",children:"Windows"}),"\n",(0,o.jsxs)(s.p,{children:["Al\xe9m de instalar as ferramentas, o ",(0,o.jsx)(s.a,{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup.html#get-started-windows-tools-installer",children:"ESP-IDF Tools Installer para Windows"})," apresentado no passo 1 ele tamb\xe9m baixa uma c\xf3pia do ESP-IDF. Dessa forma voc\xea n\xe3o precisar\xe1 baixar o ESP-IDF agora, se j\xe1 tiver baixado anteriormente junto aos pr\xe9-requisitos."]}),"\n",(0,o.jsxs)(s.p,{children:["Se desejar fazer o download do ESP-IDF sem a ajuda do ESP-IDF Tools Installer, consulte ",(0,o.jsx)(s.a,{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup-scratch.html#get-esp-idf-windows-command-line",children:"estas instru\xe7\xf5es"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"instalando-o-esp-idf-e-ferramentas",children:"Instalando O ESP-IDF e ferramentas"}),"\n",(0,o.jsx)(s.p,{children:"Al\xe9m do ESP-IDF, voc\xea tamb\xe9m precisa instalar as ferramentas usadas pelo ESP-IDF, como compilador, depurador, pacotes Python, etc."}),"\n",(0,o.jsx)(s.h4,{id:"windows-1",children:"Windows"}),"\n",(0,o.jsx)(s.p,{children:"O ESP-IDF Tools Installer para Windows apresentado no passo 1 instala todas as ferramentas necess\xe1rias."}),"\n",(0,o.jsx)(s.p,{children:"Se voc\xea deseja instalar as ferramentas sem a ajuda do ESP-IDF Tools Installer, abra o Prompt de Comando e siga estas etapas:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd %userprofile%\\esp\\esp-idf\ninstall.bat\n"})}),"\n",(0,o.jsx)(s.p,{children:"Ou no Windows PowerShell"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd ~/esp/esp-idf\n./install.ps1\n"})}),"\n",(0,o.jsx)(s.h4,{id:"linux-e-macos-1",children:"Linux e macOS"}),"\n",(0,o.jsx)(s.p,{children:"No Linux ou macOS h\xe1 um script para instala\xe7\xe3o.Abra o terminal e execute:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd ~/esp/esp-idf\n./install.sh\n"})}),"\n",(0,o.jsx)(s.p,{children:"Ou se tiver usando o Fish:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd ~/esp/esp-idf\n./install.fish\n"})}),"\n",(0,o.jsx)(s.h3,{id:"configurando-as-vari\xe1veis-de-ambientes",children:"Configurando as vari\xe1veis de ambientes"}),"\n",(0,o.jsx)(s.p,{children:"As ferramentas instaladas ainda n\xe3o foram adicionadas \xe0 vari\xe1vel de ambiente PATH. Para tornar as ferramentas utiliz\xe1veis na linha de comando, algumas vari\xe1veis de ambiente devem ser definidas. ESP-IDF fornece alguns scripts que ajudam nesse processo."}),"\n",(0,o.jsx)(s.h4,{id:"windows-2",children:"Windows"}),"\n",(0,o.jsx)(s.p,{children:"O ESP-IDF Tools Installer para Windows cria um atalho \u201cESP-IDF Command Prompt\u201d no menu Iniciar. Este atalho abre o Prompt de Comando e configura todas as vari\xe1veis de ambiente necess\xe1rias. Voc\xea pode abrir este atalho e prosseguir para a pr\xf3xima etapa."}),"\n",(0,o.jsx)(s.p,{children:"Caso n\xe3o funcione e voc\xea precise configurar manualmente, execute os seguintes comandos:"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Prompt de Comando"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"%userprofile%\\esp\\esp-idf\\export.bat\n"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Windows PowerShell"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:".$HOME/esp/esp-idf/export.ps1\n"})}),"\n",(0,o.jsx)(s.h4,{id:"linux-e-macos-2",children:"Linux e macOS"}),"\n",(0,o.jsx)(s.p,{children:"No terminal execute:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:". $HOME/esp/esp-idf/export.sh\n"})}),"\n",(0,o.jsx)(s.p,{children:"Ou no Fish(suportado apenas em vers\xf5es a partir da 3.0.0):"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:". $HOME/esp/esp-idf/export.fish\n"})}),"\n",(0,o.jsx)(s.admonition,{title:"Importante",type:"important",children:(0,o.jsx)(s.p,{children:"Voc\xea precisa fazer isso toda vez que iniciar o terminal para usar o ESP-IDF."})}),"\n",(0,o.jsx)(s.h2,{id:"passo-3---criando-um-novo-projeto",children:"Passo 3 - Criando um novo projeto"}),"\n",(0,o.jsx)(s.p,{children:"Agora que j\xe1 temos as ferramentas instaladas, vamos fazer um exemplo para validar o funcionamento das mesmas. Vamos executar o exemplo blink que j\xe1 vem no IDF."}),"\n",(0,o.jsx)(s.h3,{id:"copiando-um-projeto-exemplo",children:"Copiando um projeto exemplo"}),"\n",(0,o.jsx)(s.p,{children:"Vamos copiar o projeto blink para preservarmos o exemplo presente na pasta do IDF:"}),"\n",(0,o.jsx)(s.h4,{id:"windows-3",children:"Windows"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd %userprofile%\\esp\nxcopy /e /i %IDF_PATH%\\examples\\get-started\\blink blink\n"})}),"\n",(0,o.jsx)(s.h4,{id:"linux-e-macos-3",children:"Linux e macOS"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd ~/esp\ncp -r $IDF_PATH/examples/get-started/blink .\n"})}),"\n",(0,o.jsx)(s.p,{children:"Fique a vontade para testar os outros exemplos tamb\xe9m."}),"\n",(0,o.jsx)(s.p,{children:"O sistema de compila\xe7\xe3o ESP-IDF n\xe3o oferece suporte a espa\xe7os nos caminhos para o ESP-IDF ou para projetos."}),"\n",(0,o.jsx)(s.h3,{id:"configura\xe7\xe3o",children:"Configura\xe7\xe3o"}),"\n",(0,o.jsx)(s.p,{children:"Agora vamos configurar o target para qual ser\xe1 compilado e j\xe1 fazer uma configura\xe7\xe3o no menuconfig. No nosso caso vamos trabalhar com o ESP32-S2:"}),"\n",(0,o.jsx)(s.h4,{id:"windows-4",children:"Windows"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd %userprofile%\\esp\\blink\nidf.py set-target esp32s2\nidf.py menuconfig\n"})}),"\n",(0,o.jsx)(s.h4,{id:"linux-e-macos-4",children:"Linux e macOS"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd ~/esp/blink\nidf.py set-target esp32s2\nidf.py menuconfig\n"})}),"\n",(0,o.jsxs)(s.p,{children:["Ser\xe1 aberto o menuconfig:\n",(0,o.jsx)(s.img,{alt:"menuconfig",src:a(30872).c+"",width:"866",height:"562"})]}),"\n",(0,o.jsxs)(s.p,{children:["Acesse a op\xe7\xe3o Component config ---\x3e\n",(0,o.jsx)(s.img,{alt:"menuconfig",src:a(15548).c+"",width:"866",height:"562"})]}),"\n",(0,o.jsxs)(s.p,{children:["Em seguida ESP System Settings  ---\x3e\n",(0,o.jsx)(s.img,{alt:"menuconfig",src:a(86856).c+"",width:"866",height:"562"})]}),"\n",(0,o.jsxs)(s.p,{children:["Agora selecione Channel for console output (Default: UART0)  ---\x3e\n",(0,o.jsx)(s.img,{alt:"menuconfig",src:a(36076).c+"",width:"866",height:"562"})]}),"\n",(0,o.jsxs)(s.p,{children:["E por fim, selecione (X) USB CDC:\n",(0,o.jsx)(s.img,{alt:"menuconfig",src:a(93120).c+"",width:"866",height:"562"})]}),"\n",(0,o.jsx)(s.p,{children:"Salve(S), Enter, enter, Saia do menu(ESC)"}),"\n",(0,o.jsx)(s.p,{children:"Essa configura\xe7\xe3o permitir\xe1 que usemos a USB no pr\xf3ximo upload."}),"\n",(0,o.jsx)(s.admonition,{title:"Importante",type:"important",children:(0,o.jsx)(s.p,{children:"Sempre que iniciar um projeto novo fa\xe7a essas configura\xe7\xe3o para que continue usando a USB como interface de programa\xe7\xe3o."})}),"\n",(0,o.jsx)(s.p,{children:"Para mais detalhes acesse:"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/zg9IMDaoImA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(s.h3,{id:"compilando-o-projeto-em-modo-dfu",children:"Compilando o projeto em modo DFU"}),"\n",(0,o.jsx)(s.p,{children:"A primeira compila\xe7\xe3o n\xf3s vamos fazer usando o modo DFU, que j\xe1 vem por padr\xe3o no ESP32-S2 permitindo o upload atrav\xe9s da USB:"}),"\n",(0,o.jsx)(s.p,{children:"Para crie a imagem DFU:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"idf.py dfu\n"})}),"\n",(0,o.jsx)(s.p,{children:"A primeira compila\xe7\xe3o pode demorar um pouco. Da at\xe9 pra ir pegar um caf\xe9 ;)"}),"\n",(0,o.jsx)(s.p,{children:"Ap\xf3s a compila\xe7\xe3o, conecte a Franzininho WiFi no computador. Antes de fazermos o upload \xe9 necess\xe1rio entrar no modo DFU. Para entrar no modo DFU pressione as teclas na seguinte sequencia:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"pressione e segure a tecla BOOT"}),"\n",(0,o.jsx)(s.li,{children:"pressione rapidamente e solte a tecla RESET"}),"\n",(0,o.jsx)(s.li,{children:"solte a tecla BOOT"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Dessa forma a placa entrar\xe1 no modo DFU e poder\xe1 receber o firmware atrav\xe9s da USB."}),"\n",(0,o.jsx)(s.p,{children:"Para fazer a grava\xe7\xe3o, digite:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"idf.py dfu-flash\n"})}),"\n",(0,o.jsx)(s.admonition,{title:"Dica",type:"tip",children:(0,o.jsxs)(s.p,{children:["Caso a grava\xe7\xe3o atrav\xe9s da USB n\xe3o funcione, veja esse ",(0,o.jsx)(s.a,{href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/api-guides/dfu.html#udev-rule-linux-only",children:"link com as instru\xe7\xf5es de configura\xe7\xf5es da USB"})]})}),"\n",(0,o.jsx)(s.p,{children:"Ap\xf3s alguns segundos a placa estar\xe1 gravada."}),"\n",(0,o.jsx)(s.p,{children:"Pressione novamente o bot\xe3o RESET."}),"\n",(0,o.jsx)(s.h3,{id:"compila\xe7\xe3o-grava\xe7\xe3o-e-monitor-em-modo-normal",children:"Compila\xe7\xe3o, grava\xe7\xe3o e monitor em modo normal"}),"\n",(0,o.jsx)(s.p,{children:"Agora voc\xea poder\xe1 compilar, gravar e monitorar usando a porta USB. Esse processo \xe9 id\xeantico ao que fazemos para desenvolver com o ESP32:"}),"\n",(0,o.jsx)(s.p,{children:"Compilar:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"idf.py build\n"})}),"\n",(0,o.jsx)(s.p,{children:"Gravar:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"idf.py -p PORT [-b BAUD] flash\n"})}),"\n",(0,o.jsx)(s.p,{children:"Monitorar:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"idf.py -p /dev/ttyUSB0 monitor\n"})}),"\n",(0,o.jsx)(s.p,{children:"Maravilha, voc\xea configurou o ambiente para trabalhar com o ESP-IDF."}),"\n",(0,o.jsx)(s.p,{children:"Caso queira trabalhar com a extens\xe3o para VSCODE, confira o video:"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/rxMg_zxO0q0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function p(e={}){const{wrapper:s}={...(0,n.MN)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},95788:(e,s,a)=>{a.d(s,{MN:()=>l});var o=a(11504);function n(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function i(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);s&&(o=o.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?i(Object(a),!0).forEach((function(s){n(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}function t(e,s){if(null==e)return{};var a,o,n=function(e,s){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],s.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),l=function(e){var s=o.useContext(d),a=s;return e&&(a="function"==typeof e?e(s):r(r({},s),e)),a},c={inlineCode:"code",wrapper:function(e){var s=e.children;return o.createElement(o.Fragment,{},s)}},p=o.forwardRef((function(e,s){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=t(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return a?o.createElement(h,r(r({ref:s},p),{},{components:a})):o.createElement(h,r({ref:s},p))}));p.displayName="MDXCreateElement"},30872:(e,s,a)=>{a.d(s,{c:()=>o});const o=a.p+"assets/images/1-cf224b69c503620285cee56dc7457999.png"},15548:(e,s,a)=>{a.d(s,{c:()=>o});const o=a.p+"assets/images/2-4806954a1b4006bb78b6e50a23eba7b5.png"},86856:(e,s,a)=>{a.d(s,{c:()=>o});const o=a.p+"assets/images/3-c0afeaa310f4501913ccaf8190c00334.png"},93120:(e,s,a)=>{a.d(s,{c:()=>o});const o=a.p+"assets/images/4-c250e820888c2d31288214e41376a1dd.png"},36076:(e,s,a)=>{a.d(s,{c:()=>o});const o=a.p+"assets/images/5-0821b04d00bb4ccc716759540cf7954a.png"}}]);