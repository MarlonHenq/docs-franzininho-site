"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[560],{61052:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(17624),s=i(95788);const o={id:"circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",author:"Wallace Brito"},t=void 0,a={id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/hcsr04.md",sourceDirName:"FranzininhoWifi/exemplos-circuitpython",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/hcsr04.md",tags:[],version:"current",frontMatter:{id:"circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",author:"Wallace Brito"},sidebar:"docs",previous:{title:"Sensor de temperatura e umidade DHT11",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/dht11"},next:{title:"Servo motor",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/servo-motor"}},c={},d=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",level:2},{value:"Resultado",id:"resultado",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.MN)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython."}),"\n",(0,r.jsx)(n.h2,{id:"materiais-necess\xe1rios",children:"Materiais necess\xe1rios"}),"\n",(0,r.jsx)(n.p,{children:"Identifique os seguintes materiais necess\xe1rios para este projeto:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1 Franzininho WiFi."}),"\n",(0,r.jsx)(n.li,{children:"1 Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04."}),"\n",(0,r.jsx)(n.li,{children:"1 Protoboard."}),"\n",(0,r.jsx)(n.li,{children:"Cabos de liga\xe7\xe3o."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"circuito",children:"Circuito"}),"\n",(0,r.jsx)(n.p,{children:"A pr\xf3xima etapa consiste em realizar a montagem da maneira indicada pela figura a seguir:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Circuito HC-SR04",src:i(51956).c+"",width:"984",height:"918"})}),"\n",(0,r.jsx)(n.p,{children:"A tabela abaixo resume as conex\xf5es entre o sensor e a Franzininho:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"HC-SR04"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Franzininho WiFi"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Echo"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"GPIO35"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Trig"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"GPIO36"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Vcc"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"5v"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Gnd"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"GND"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"c\xf3digo",children:"C\xf3digo"}),"\n",(0,r.jsx)(n.p,{children:"Neste exemplo, vamos fazer o uso de uma biblioteca que implementa os m\xe9todos necess\xe1rios para uso do sensor."}),"\n",(0,r.jsxs)(n.p,{children:["As bibliotecas para o CircuitPython podem ser obtidas atrav\xe9s do endere\xe7o ",(0,r.jsx)(n.a,{href:"https://circuitpython.org/libraries",children:"https://circuitpython.org/libraries"}),". Escolha e baixe o arquivo de acordo com a vers\xe3o do CircuitPyhthon que voc\xea tem instalado na Franzininho WiFi."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Bibliotecas",src:i(73508).c+"",width:"1295",height:"465"})}),"\n",(0,r.jsx)(n.p,{children:"Em seguida, copie o arquivo diretamente para a pasta lib do sistema de arquivos da Franzininho WiFi:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"adafruit_hcsr04.mpy"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Implemente o programa abaixo no arquivo ",(0,r.jsx)(n.strong,{children:"code.py"})," que est\xe1 localizado na pasta raiz da Franzininho WiFi."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import board\nimport time\nimport adafruit_hcsr04\n\nsonar = adafruit_hcsr04.HCSR04(trigger_pin=board.IO36, echo_pin=board.IO35, timeout=0.5)\n\nwhile True:\n    try:\n        print((sonar.distance,))\n    except RuntimeError:\n        print("Retrying!")\n    time.sleep(0.1)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"an\xe1lise-do-c\xf3digo",children:"An\xe1lise do c\xf3digo"}),"\n",(0,r.jsxs)(n.p,{children:["Para acessar os pinos da placa precisamos importar o m\xf3dulo ",(0,r.jsx)(n.strong,{children:"board"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import board\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Como precisaremos fazer o uso do sleep, importamos o m\xf3dulo ",(0,r.jsx)(n.strong,{children:"time"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import time\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A biblioteca que vamos utilizar para realizar as leituras do sensor \xe9 o ",(0,r.jsx)(n.strong,{children:"adafruit_hcsr04"}),", importaremos esse m\xf3dulo:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import adafruit_hcsr04\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Em seguida criamos uma inst\xe2ncia da classe HCSR04, passando como par\xe2metro ",(0,r.jsx)(n.strong,{children:"trigger_pin"})," sendo o pino 36, o ",(0,r.jsx)(n.strong,{children:"echo_pin"})," o pino 35 e o ",(0,r.jsx)(n.strong,{children:"timeout"})," sendo 0.5 segundos.\nO ",(0,r.jsx)(n.strong,{children:"trigger_pin"})," (em portugu\xeas: Gatilho) tem a fun\xe7\xe3o de disparar uma esp\xe9cie de onda sonora ultrass\xf4nica, a qual ir\xe1 colidir com algum obst\xe1culo e retorna para o sensor fazendo com que o pino ",(0,r.jsx)(n.strong,{children:"echo_pin"})," envie pulsos para a Franzininho, o tempo desse processo ser\xe1 convertido em dist\xe2ncia. O par\xe2metro ",(0,r.jsx)(n.strong,{children:"timeout"})," \xe9 o tempo m\xe1ximo de leitura do sensor, que nesse caso \xe9 0.5 segundos.\nConforme podemos observar na pinagem, dispon\xedvel em ",(0,r.jsx)(n.a,{href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi",children:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"sonar = adafruit_hcsr04.HCSR04(trigger_pin=board.IO36, echo_pin=board.IO35, timeout=0.5)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["No loop infinito fazemos a leitura do valor de dist\xe2ncia a cada ",(0,r.jsx)(n.strong,{children:"0.1 segundos"})," atrav\xe9s dos m\xe9todo ",(0,r.jsx)(n.code,{children:"sonar.distance"}),", e imprimimos o valor lido no terminal serial. O valor retornado de ",(0,r.jsx)(n.code,{children:"sonar.distance"})," tem a unidade de medida cent\xedmetros."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'while True:\n    try:\n        print((sonar.distance,))\n    except RuntimeError:\n        print("Retrying!")\n    time.sleep(0.1)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"resultado",children:"Resultado"}),"\n",(0,r.jsx)(n.p,{children:"A figura a seguir exibe os valores lidos no terminal serial(REPL):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Terminal Serial",src:i(46636).c+"",width:"1141",height:"344"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",(0,r.jsx)(n.a,{href:"https://discord.gg/H5kENmWGaz",children:"Discord"})]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Autor"}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.a,{href:"mailto:wallacejsb@gmail.com",children:"Wallace Brito"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Data:"}),(0,r.jsx)(n.td,{children:"31/10/2021"})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.MN)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},95788:(e,n,i)=>{i.d(n,{MN:()=>d});var r=i(11504);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function t(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,r,s=function(e,n){if(null==e)return{};var i,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var c=r.createContext({}),d=function(e){var n=r.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):t(t({},n),e)),i},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var i=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=d(i),u=s,m=p["".concat(c,".").concat(u)]||p[u]||l[u]||o;return i?r.createElement(m,t(t({ref:n},h),{},{components:i})):r.createElement(m,t({ref:n},h))}));h.displayName="MDXCreateElement"},73508:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/libraries-43f696d429c655da2cf36dc63cfc72e0.png"},51956:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/circuito-sensor-hcsr04-36362e07b837238ba47b3c1f31c559ce.png"},46636:(e,n,i)=>{i.d(n,{c:()=>r});const r=i.p+"assets/images/leitura-sensor-hc-sr04-0c4c677c0a5e425cbba24731cb5f7f09.png"}}]);