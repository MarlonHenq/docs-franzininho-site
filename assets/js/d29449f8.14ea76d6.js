"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[560],{61052:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(17624),s=n(95788);const o={id:"circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",author:"Wallace Brito"},t=void 0,a={id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/hcsr04.md",sourceDirName:"FranzininhoWifi/exemplos-circuitpython",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/hcsr04.md",tags:[],version:"current",frontMatter:{id:"circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",author:"Wallace Brito"},sidebar:"docs",previous:{title:"Sensor de temperatura e umidade DHT11",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/dht11"},next:{title:"Servo motor",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/servo-motor"}},c={},d=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",level:2},{value:"Resultado",id:"resultado",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.MN)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython."}),"\n",(0,r.jsx)(i.h2,{id:"materiais-necess\xe1rios",children:"Materiais necess\xe1rios"}),"\n",(0,r.jsx)(i.p,{children:"Identifique os seguintes materiais necess\xe1rios para este projeto:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"1 Franzininho WiFi."}),"\n",(0,r.jsx)(i.li,{children:"1 Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04."}),"\n",(0,r.jsx)(i.li,{children:"1 Protoboard."}),"\n",(0,r.jsx)(i.li,{children:"Cabos de liga\xe7\xe3o."}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"circuito",children:"Circuito"}),"\n",(0,r.jsx)(i.p,{children:"A pr\xf3xima etapa consiste em realizar a montagem da maneira indicada pela figura a seguir:"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Circuito HC-SR04",src:n(51956).c+"",width:"984",height:"918"})}),"\n",(0,r.jsx)(i.p,{children:"A tabela abaixo resume as conex\xf5es entre o sensor e a Franzininho:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{style:{textAlign:"center"},children:"HC-SR04"}),(0,r.jsx)(i.th,{style:{textAlign:"center"},children:"Franzininho WiFi"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"Echo"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"GPIO35"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"Trig"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"GPIO36"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"Vcc"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"5v"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"Gnd"}),(0,r.jsx)(i.td,{style:{textAlign:"center"},children:"GND"})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"c\xf3digo",children:"C\xf3digo"}),"\n",(0,r.jsx)(i.p,{children:"Neste exemplo, vamos fazer o uso de uma biblioteca que implementa os m\xe9todos necess\xe1rios para uso do sensor."}),"\n",(0,r.jsxs)(i.p,{children:["As bibliotecas para o CircuitPython podem ser obtidas atrav\xe9s do endere\xe7o ",(0,r.jsx)(i.a,{href:"https://circuitpython.org/libraries",children:"https://circuitpython.org/libraries"}),". Escolha e baixe o arquivo de acordo com a vers\xe3o do CircuitPyhthon que voc\xea tem instalado na Franzininho WiFi."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Bibliotecas",src:n(73508).c+"",width:"1295",height:"465"})}),"\n",(0,r.jsx)(i.p,{children:"Em seguida, copie o arquivo diretamente para a pasta lib do sistema de arquivos da Franzininho WiFi:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"adafruit_hcsr04.mpy"}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["Implemente o programa abaixo no arquivo ",(0,r.jsx)(i.strong,{children:"code.py"})," que est\xe1 localizado na pasta raiz da Franzininho WiFi."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:'import board\nimport time\nimport adafruit_hcsr04\n\nsonar = adafruit_hcsr04.HCSR04(trigger_pin=board.IO36, echo_pin=board.IO35, timeout=0.5)\n\nwhile True:\n    try:\n        print((sonar.distance,))\n    except RuntimeError:\n        print("Retrying!")\n    time.sleep(0.1)\n'})}),"\n",(0,r.jsx)(i.h2,{id:"an\xe1lise-do-c\xf3digo",children:"An\xe1lise do c\xf3digo"}),"\n",(0,r.jsxs)(i.p,{children:["Para acessar os pinos da placa precisamos importar o m\xf3dulo ",(0,r.jsx)(i.strong,{children:"board"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"import board\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Como precisaremos fazer o uso do sleep, importamos o m\xf3dulo ",(0,r.jsx)(i.strong,{children:"time"}),":"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"import time\n"})}),"\n",(0,r.jsxs)(i.p,{children:["A biblioteca que vamos utilizar para realizar as leituras do sensor \xe9 o ",(0,r.jsx)(i.strong,{children:"adafruit_hcsr04"}),", importaremos esse m\xf3dulo:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"import adafruit_hcsr04\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Em seguida criamos uma inst\xe2ncia da classe HCSR04, passando como par\xe2metro ",(0,r.jsx)(i.strong,{children:"trigger_pin"})," sendo o pino 36, o ",(0,r.jsx)(i.strong,{children:"echo_pin"})," o pino 35 e o ",(0,r.jsx)(i.strong,{children:"timeout"})," sendo 0.5 segundos.\nO ",(0,r.jsx)(i.strong,{children:"trigger_pin"})," (em portugu\xeas: Gatilho) tem a fun\xe7\xe3o de disparar uma esp\xe9cie de onda sonora ultrass\xf4nica, a qual ir\xe1 colidir com algum obst\xe1culo e retorna para o sensor fazendo com que o pino ",(0,r.jsx)(i.strong,{children:"echo_pin"})," envie pulsos para a Franzininho, o tempo desse processo ser\xe1 convertido em dist\xe2ncia. O par\xe2metro ",(0,r.jsx)(i.strong,{children:"timeout"})," \xe9 o tempo m\xe1ximo de leitura do sensor, que nesse caso \xe9 0.5 segundos.\nConforme podemos observar na pinagem, dispon\xedvel em ",(0,r.jsx)(i.a,{href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi",children:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi"})]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"sonar = adafruit_hcsr04.HCSR04(trigger_pin=board.IO36, echo_pin=board.IO35, timeout=0.5)\n"})}),"\n",(0,r.jsxs)(i.p,{children:["No loop infinito fazemos a leitura do valor de dist\xe2ncia a cada ",(0,r.jsx)(i.strong,{children:"0.1 segundos"})," atrav\xe9s dos m\xe9todo ",(0,r.jsx)(i.code,{children:"sonar.distance"}),", e imprimimos o valor lido no terminal serial. O valor retornado de ",(0,r.jsx)(i.code,{children:"sonar.distance"})," tem a unidade de medida cent\xedmetros."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:'while True:\n    try:\n        print((sonar.distance,))\n    except RuntimeError:\n        print("Retrying!")\n    time.sleep(0.1)\n'})}),"\n",(0,r.jsx)(i.h2,{id:"resultado",children:"Resultado"}),"\n",(0,r.jsx)(i.p,{children:"A figura a seguir exibe os valores lidos no terminal serial(REPL):"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Terminal Serial",src:n(46636).c+"",width:"1141",height:"344"})}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsxs)(i.p,{children:["Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",(0,r.jsx)(i.a,{href:"https://discord.gg/H5kENmWGaz",children:"Discord"})]})}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Autor"}),(0,r.jsx)(i.th,{children:(0,r.jsx)(i.a,{href:"mailto:wallacejsb@gmail.com",children:"Wallace Brito"})})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Data:"}),(0,r.jsx)(i.td,{children:"31/10/2021"})]})})]})]})}function h(e={}){const{wrapper:i}={...(0,s.MN)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},95788:(e,i,n)=>{n.d(i,{MN:()=>d});var r=n(11504);function s(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,r)}return n}function t(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){s(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function a(e,i){if(null==e)return{};var n,r,s=function(e,i){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||(s[n]=e[n]);return s}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),d=function(e){var i=r.useContext(c),n=i;return e&&(n="function"==typeof e?e(i):t(t({},i),e)),n},l={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},h=r.forwardRef((function(e,i){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=d(n),u=s,m=p["".concat(c,".").concat(u)]||p[u]||l[u]||o;return n?r.createElement(m,t(t({ref:i},h),{},{components:n})):r.createElement(m,t({ref:i},h))}));h.displayName="MDXCreateElement"},73508:(e,i,n)=>{n.d(i,{c:()=>r});const r=n.p+"assets/images/libraries-43f696d429c655da2cf36dc63cfc72e0.png"},51956:(e,i,n)=>{n.d(i,{c:()=>r});const r=n.p+"assets/images/circuito-sensor-hcsr04-36362e07b837238ba47b3c1f31c559ce.png"},46636:(e,i,n)=>{n.d(i,{c:()=>r});const r=n.p+"assets/images/leitura-sensor-hc-sr04-0c4c677c0a5e425cbba24731cb5f7f09.png"}}]);