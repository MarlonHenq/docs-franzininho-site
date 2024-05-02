"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[1456],{48832:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(17624),r=n(95788);const o={id:"arduino-dht11",title:"Leitura DHT11",slug:"/franzininho-wifi/exemplos-arduino/dht11",description:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores na serial;",author:"Fabio Souza"},t=void 0,s={id:"FranzininhoWifi/exemplos-arduino/arduino-dht11",title:"Leitura DHT11",description:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores na serial;",source:"@site/docs/FranzininhoWifi/exemplos-arduino/dht11.md",sourceDirName:"FranzininhoWifi/exemplos-arduino",slug:"/franzininho-wifi/exemplos-arduino/dht11",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/dht11",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-arduino/dht11.md",tags:[],version:"current",frontMatter:{id:"arduino-dht11",title:"Leitura DHT11",slug:"/franzininho-wifi/exemplos-arduino/dht11",description:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores na serial;",author:"Fabio Souza"},sidebar:"docs",previous:{title:"Neopixel RGB LED Onboard",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/neopixel-onboard"},next:{title:"Primeiros Passos com MicroPython",permalink:"/en/docs/franzininho-wifi/exemplos-micropython/primeiros-passos"}},d={},l=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",level:2},{value:"Resultado",id:"resultado",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.MN)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores no terminal serial."}),"\n",(0,a.jsx)(i.h2,{id:"materiais-necess\xe1rios",children:"Materiais necess\xe1rios"}),"\n",(0,a.jsx)(i.p,{children:"Identifique os seguintes materiais necess\xe1rios para este projeto:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"1 Franzininho WiFi."}),"\n",(0,a.jsx)(i.li,{children:"1 Sensor DHT11"}),"\n",(0,a.jsx)(i.li,{children:"1 Resistor de 10k"}),"\n",(0,a.jsx)(i.li,{children:"1 Protoboard."}),"\n",(0,a.jsx)(i.li,{children:"Cabos de liga\xe7\xe3o."}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"circuito",children:"Circuito"}),"\n",(0,a.jsx)(i.p,{children:"Realize a montagem do circuito da maneira indicada pela figura a seguir:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Circuito DHT11",src:n(31748).c+"",width:"876",height:"1041"})}),"\n",(0,a.jsx)(i.h2,{id:"c\xf3digo",children:"C\xf3digo"}),"\n",(0,a.jsx)(i.p,{children:"Para usar o sensor DHT com a Franzininho WiFi no Arduino, precisamos instalar uma bibloteca. Vamos usar a biblioteca mantida pela Adafruit."}),"\n",(0,a.jsx)(i.p,{children:"Vamos instalar a biblioteca usando o gerenciador de biblitecas do Arduino. Acesso Ferramentas -> Gerenciar Bibliotecas. Procure por DHT e instale a bibloteca DHT sensor library da Adafruit:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Instala\xe7\xe3o da Biblioteca",src:n(27976).c+"",width:"894",height:"514"})}),"\n",(0,a.jsx)(i.p,{children:"Agora vamos fazer a leitura do sensor e imprimir os valores de temperatura e umidade no terminal serial."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-cpp",children:'/*************************************************************************************\n * Exemplo para leitura de sensor DHT11\n * \n * \n * Bibliotecas necessarias\n * DHT da Adafruit - Instalar pelo gerenciador de bibliotecas\n *  \n *  por: F\xe1bio Souza\n *************************************************************************************/\n\n#include "DHT.h"\n \n#define DHTPIN 2 \n#define DHTTYPE DHT11\n \nDHT dht(DHTPIN, DHTTYPE);\n\n\n/*********************************************************************************\n *  Fun\xe7\xe3o Setup\n *  Configura\xe7\xf5es iniciais da aplica\xe7\xe3o\n *********************************************************************************/\nvoid setup() \n{\nSerial.begin(19200);\nSerial.println("Teste de leitura do sensor DHT11");\ndht.begin();\n}\n\n/*********************************************************************************\n *  Fun\xe7\xe3o loop\n *********************************************************************************/\nvoid loop() \n{\n\n  float umidade = dht.readHumidity();\n  float temperatura = dht.readTemperature();\n\n  delay(500);\n  \n\n  // Se as vari\xe1veis temperatura e umidade n\xe3o forem valores v\xe1lidos, acusar\xe1 falha de leitura.\n  if (isnan(temperatura) || isnan(umidade)) \n  {\n  Serial.println("Falha na leitura do dht11...");\n  } \n  else //se n\xe3o, exibir\xe1 os valores lidos \n  {\n    //Imprime os dados no monitor serial\n    Serial.print("Umidade: ");\n    Serial.print(umidade);\n    Serial.print(" %\\t"); //tab\n    Serial.print("Temperatura: ");\n    Serial.print(temperatura);\n    Serial.println(" \xb0C");\n  }\n}\n'})}),"\n",(0,a.jsx)(i.h2,{id:"an\xe1lise-do-c\xf3digo",children:"An\xe1lise do c\xf3digo"}),"\n",(0,a.jsx)(i.p,{children:"Na primeira parte do c\xf3digo adicionamo as bibliotecas a serem usadas na aplica\xe7\xe3o e a instancia do DHT11:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-cpp",children:"#define DHTPIN 2 \n#define DHTTYPE DHT11\n \nDHT dht(DHTPIN, DHTTYPE);\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Na fun\xe7\xe3o ",(0,a.jsx)(i.code,{children:"setup()"})," fizemos a inicializa\xe7\xe3o do DHT11 e da comunica\xe7\xe3o Serial:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-cpp",children:'void setup() \n{\nSerial.begin(19200);\nSerial.println("Teste de leitura do sensor DHT11");\ndht.begin();\n}\n'})}),"\n",(0,a.jsxs)(i.p,{children:["No ",(0,a.jsx)(i.code,{children:"loop()"})," infinito fazemos a leitura da temperatura e umidade a cada 500 ms e imprimimos na serial. Caso ocorra falha na leitura do DHT11 \xe9 exibido uma mensagem de erro:"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-cpp",children:'void loop() \n{\n\n  float umidade = dht.readHumidity();\n  float temperatura = dht.readTemperature();\n\n  delay(500);\n  \n\n  // Se as vari\xe1veis temperatura e umidade n\xe3o forem valores v\xe1lidos, acusar\xe1 falha de leitura.\n  if (isnan(temperatura) || isnan(umidade)) \n  {\n  Serial.println("Falha na leitura do dht11...");\n  } \n  else //se n\xe3o, exibir\xe1 os valores lidos \n  {\n    //Imprime os dados no monitor serial\n    Serial.print("Umidade: ");\n    Serial.print(umidade);\n    Serial.print(" %\\t"); //tab\n    Serial.print("Temperatura: ");\n    Serial.print(temperatura);\n    Serial.println(" \xb0C");\n  }\n}\n'})}),"\n",(0,a.jsx)(i.h2,{id:"resultado",children:"Resultado"}),"\n",(0,a.jsx)(i.p,{children:"A figura a seguir exibe os valores lidos no monitor serial:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Terminal Serial",src:n(47077).c+"",width:"1065",height:"536"})}),"\n",(0,a.jsx)(i.h2,{id:"conclus\xe3o",children:"Conclus\xe3o"}),"\n",(0,a.jsx)(i.p,{children:"O sensor DHT11( e similares) possibilita que fa\xe7amos leitura de temperatura e umidade de uma forma simples e eficiente. Atrav\xe9s de 1 fio de comunica\xe7\xe3o conseguimos fazer a leitura das duas grandezas. Como a comunica\xe7\xe3o \xe9 um pouco complexa, o  uso de uma biblioteca facilita a comunica\xe7\xe3o com o dispositivo. A biblioteca mantida pela Adafruit \xe9 muito eficiente e est\xe1vel."}),"\n",(0,a.jsx)(i.admonition,{type:"info",children:(0,a.jsxs)(i.p,{children:["Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",(0,a.jsx)(i.a,{href:"https://discord.gg/H5kENmWGaz",children:"Discord"})]})}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Autor"}),(0,a.jsx)(i.th,{children:"F\xe1bio Souza"})]})}),(0,a.jsx)(i.tbody,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Data:"}),(0,a.jsx)(i.td,{children:"23/10/2021"})]})})]})]})}function u(e={}){const{wrapper:i}={...(0,r.MN)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},95788:(e,i,n)=>{n.d(i,{MN:()=>l});var a=n(11504);function r(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function t(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){r(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function s(e,i){if(null==e)return{};var n,a,r=function(e,i){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var i=a.useContext(d),n=i;return e&&(n="function"==typeof e?e(i):t(t({},i),e)),n},c={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},u=a.forwardRef((function(e,i){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,t(t({ref:i},u),{},{components:n})):a.createElement(h,t({ref:i},u))}));u.displayName="MDXCreateElement"},31748:(e,i,n)=>{n.d(i,{c:()=>a});const a=n.p+"assets/images/circuito-43a970745d9aaeec4fad97f720fd8811.png"},27976:(e,i,n)=>{n.d(i,{c:()=>a});const a=n.p+"assets/images/dht-lib-09d2b21ecd6956960598384892b76762.png"},47077:(e,i,n)=>{n.d(i,{c:()=>a});const a=n.p+"assets/images/valores-lidos-3a3d40d3f6f2a3488305949443f884a9.png"}}]);