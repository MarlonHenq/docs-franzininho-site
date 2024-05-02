"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[1208],{90752:(A,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(17624),a=r(95788);const s={id:"franzininhoc0-arduino-primeiros-passos",title:"Primeiros passos com Arduino",slug:"/franzininho-c0/arduino-primeiros-passos",description:"Instala\xe7\xe3o e configura\xe7\xf5es da Arduino IDE para programar a Franzininho C0"},i=void 0,o={id:"franzininhoSTM32C0/exemplos-arduino/franzininhoc0-arduino-primeiros-passos",title:"Primeiros passos com Arduino",description:"Instala\xe7\xe3o e configura\xe7\xf5es da Arduino IDE para programar a Franzininho C0",source:"@site/docs/franzininhoSTM32C0/exemplos-arduino/primeiros-passos.md",sourceDirName:"franzininhoSTM32C0/exemplos-arduino",slug:"/franzininho-c0/arduino-primeiros-passos",permalink:"/en/docs/franzininho-c0/arduino-primeiros-passos",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/franzininhoSTM32C0/exemplos-arduino/primeiros-passos.md",tags:[],version:"current",frontMatter:{id:"franzininhoc0-arduino-primeiros-passos",title:"Primeiros passos com Arduino",slug:"/franzininho-c0/arduino-primeiros-passos",description:"Instala\xe7\xe3o e configura\xe7\xf5es da Arduino IDE para programar a Franzininho C0"},sidebar:"docs",previous:{title:"Arduino IDE TODO List",permalink:"/en/docs/franzininho-c0/arduino-todolist"},next:{title:"Identifica\xe7\xe3o dos Pinos no Ambiente Arduino",permalink:"/en/docs/franzininho-c0/arduino-identificacao-pinos"}},t={},d=[{value:"Grava\xe7\xe3o de Programas pela USB",id:"grava\xe7\xe3o-de-programas-pela-usb",level:2},{value:"Identifica\xe7\xe3o da Porta Serial",id:"identifica\xe7\xe3o-da-porta-serial",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3}];function c(A){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.MN)(),...A.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:'Os passos a seguir mostram a instala\xe7\xe3o e configura\xe7\xe3o da IDE Arduino para usar a op\xe7\xe3o de placa "Generic STM32C0" do pacote STM32duino. Futuramente esperamos ter uma op\xe7\xe3o de placa espec\xedfica para a Franzininho C0, eliminando a necessidade de algumas configura\xe7\xf5es e usando op\xe7\xf5es default mais adequadas para os pinos.'}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Instale a ",(0,n.jsx)(e.strong,{children:"IDE do Arduino"})," (se voc\xea n\xe3o tiver instalada) de ",(0,n.jsx)(e.a,{href:"https://www.arduino.cc/en/software",children:"https://www.arduino.cc/en/software"}),". As telas apresentadas foram capturadas com a vers\xe3o 2.2.1 para Windows."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Instale o ",(0,n.jsx)(e.strong,{children:"STM32CubeProgrammer"})," de ",(0,n.jsx)(e.a,{href:"https://www.st.com/en/development-tools/stm32cubeprog.html",children:"https://www.st.com/en/development-tools/stm32cubeprog.html"}),". Pode ser necess\xe1ro fazer um pequeno cadastro para baixar o instalador."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["Execute a IDE do Arduino. Entre em ",(0,n.jsx)(e.strong,{children:"File"}),", ",(0,n.jsx)(e.strong,{children:"Preferences"}),", Additional Boards Manager URLs e acrescente ",(0,n.jsx)(e.code,{children:"https://github.com/stm32duino/BoardManagerFiles/raw/main/package_stmicroelectronics_index.json"}),":"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Aditional Boards Manager URLs",src:r(12528).c+"",width:"797",height:"531"})}),"\n",(0,n.jsxs)(e.ol,{start:"4",children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:"Conecte a Franzininho C0 ao micro atrav\xe9s de um cabo USB. A placa ser\xe1 reconhecida como uma serial pelo sistema operacional."}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:['Selecione "Select other board and port..." no ',(0,n.jsx)(e.em,{children:"dropbox"})," na tarja superior da IDE."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Sele\xe7\xe3o da placa, parte 1",src:r(70876).c+"",width:"364",height:"246"})}),"\n",(0,n.jsxs)(e.ol,{start:"6",children:["\n",(0,n.jsxs)(e.li,{children:["Selecione a placa ",(0,n.jsx)(e.strong,{children:'"Generic STM32C0 series"'})," e a porta correspondente \xe0 placa (se tiver d\xfavida, veja adiante como identificar a serial)."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Sele\xe7\xe3o da placa, parte 2",src:r(80512).c+"",width:"696",height:"499"})}),"\n",(0,n.jsxs)(e.ol,{start:"7",children:["\n",(0,n.jsxs)(e.li,{children:["Use o menu ",(0,n.jsx)(e.strong,{children:"Tools"})," para acertar a configura\xe7\xe3o da placa:","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:'Board part number: "Generic C011F6Px"'}),"\n",(0,n.jsx)(e.li,{children:'Upload method: "STM32CubeProgrammer (Serial)"'}),"\n",(0,n.jsx)(e.li,{children:"U(S)ART support: \"Enabled (generic 'Serial')\""}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Configura\xe7\xe3o da placa",src:r(77568).c+"",width:"532",height:"521"})}),"\n",(0,n.jsx)(e.h2,{id:"grava\xe7\xe3o-de-programas-pela-usb",children:"Grava\xe7\xe3o de Programas pela USB"}),"\n",(0,n.jsx)(e.p,{children:"A configura\xe7\xe3o acima far\xe1 a carga de programas atrav\xe9s da USB. Para isto a placa precisa estar com o bootloader em execu\xe7\xe3o, o que \xe9 feito atrav\xe9s destes passos:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Aperte o bot\xe3o ",(0,n.jsx)(e.strong,{children:"BOOT"})," e o mantenha apertado"]}),"\n",(0,n.jsxs)(e.li,{children:["Aperte e solte o bot\xe3o ",(0,n.jsx)(e.strong,{children:"RST"})]}),"\n",(0,n.jsxs)(e.li,{children:["Solte o bot\xe3o ",(0,n.jsx)(e.strong,{children:"BOOT"})]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsxs)(e.em,{children:["A placa precisa estar executando o bootloader antes da IDE tentar carregar o programa, caso contr\xe1rio ser\xe1 apresentado um erro. O ideal \xe9 fazer o procedimento acima ",(0,n.jsx)(e.strong,{children:"antes"})," de apertar o bot\xe3o da IDE para compilar e carregar o programa."]})}),"\n",(0,n.jsx)(e.h2,{id:"identifica\xe7\xe3o-da-porta-serial",children:"Identifica\xe7\xe3o da Porta Serial"}),"\n",(0,n.jsx)(e.p,{children:"A Franzininho C0 utiliza um integrado CH340E para emular uma porta serial atrav\xe9s de uma conex\xe3o USB. As vers\xf5es mais recentes de Windows e Linux reconhecem esta serial sem a necessidade de instala\xe7\xe3o de um driver espec\xedfico."}),"\n",(0,n.jsx)(e.h3,{id:"windows",children:"Windows"}),"\n",(0,n.jsx)(e.p,{children:"O Windows associa um nome do tipo COMnn para os dispositivos seriais. De um modo geral, o Windows tenta usar sempre o mesmo nome para cada dispositivo (identificando o dispositivo pelo VendorID, ProductID e Serial Number informados pela USB)."}),"\n",(0,n.jsx)(e.p,{children:'O Gerenciador de Dispositivos mostra os dispositivos seriais embaixo de "Portas (COM e LPT)"'}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"Portas Seriais no Windows",src:r(8736).c+"",width:"311",height:"114"})}),"\n",(0,n.jsx)(e.p,{children:'A Franzininho C0 se apresenta como "USB-SERIAL CH340". Na d\xfavida, desconecte a placa e verifique quem sai da lista. Na figura acima, a Franzininho C0 est\xe1 em COM24.'}),"\n",(0,n.jsx)(e.h3,{id:"linux",children:"Linux"}),"\n",(0,n.jsx)(e.p,{children:"TBD"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Autor"}),(0,n.jsx)(e.th,{style:{textAlign:"left"},children:"Daniel Quadros"})]})}),(0,n.jsx)(e.tbody,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"Data:"}),(0,n.jsx)(e.td,{style:{textAlign:"left"},children:"15/10/2023"})]})})]})]})}function l(A={}){const{wrapper:e}={...(0,a.MN)(),...A.components};return e?(0,n.jsx)(e,{...A,children:(0,n.jsx)(c,{...A})}):c(A)}},95788:(A,e,r)=>{r.d(e,{MN:()=>d});var n=r(11504);function a(A,e,r){return e in A?Object.defineProperty(A,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):A[e]=r,A}function s(A,e){var r=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),r.push.apply(r,n)}return r}function i(A){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(A,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(r,e))}))}return A}function o(A,e){if(null==A)return{};var r,n,a=function(A,e){if(null==A)return{};var r,n,a={},s=Object.keys(A);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(a[r]=A[r]);return a}(A,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(A);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(A,r)&&(a[r]=A[r])}return a}var t=n.createContext({}),d=function(A){var e=n.useContext(t),r=e;return A&&(r="function"==typeof A?A(e):i(i({},e),A)),r},c={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},l=n.forwardRef((function(A,e){var r=A.components,a=A.mdxType,s=A.originalType,t=A.parentName,l=o(A,["components","mdxType","originalType","parentName"]),p=d(r),u=a,m=p["".concat(t,".").concat(u)]||p[u]||c[u]||s;return r?n.createElement(m,i(i({ref:e},l),{},{components:r})):n.createElement(m,i({ref:e},l))}));l.displayName="MDXCreateElement"},12528:(A,e,r)=>{r.d(e,{c:()=>n});const n=r.p+"assets/images/Arduino_BoardsManagerURLs-e9c0daf50910d122497173992f15453d.png"},77568:(A,e,r)=>{r.d(e,{c:()=>n});const n=r.p+"assets/images/Arduino_ConfigBoard-1f6098e22f84dc7e7e951ca126cbf3f2.png"},70876:(A,e,r)=>{r.d(e,{c:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAAD2CAMAAADFy00aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURTMzMzMzbgBtcAt0eBB4fG4zM24zbkNPek5bYU5be1dbYVlbcE5ja05gcFtjY1ZndW1PVG1PempbYXZbYXZbemZoZmd0dXRlZHZje3l2czMzjxh+giN4kypyrG4zj05blE5ojE5/lFZrlVl3j198mU1+s1Rto1R3qFl/s2pbhHZblGhtlmx3qHKOAACBhACBlACXnRmAgxiDkgSRtgChuSSGiSmMkjmEhTWElzKSlTCSrSOlrwWdxwKjzyuPyCSl1EeFhkKJmliEiFyDnk2GuEqfv1WHqlWFtV+XqFmYvUahpFShvWaJhWuClm6Rj3KNhnWGlHaelGqNqGqHuGqUs3OBpHKcpWW3uk6dy0OX01icyVSo01K25mOUxWahzGar2GO9wGO333Ktxnyr0XO3xHK212e66XW55VLD7G/AwX7KzHfD2HnE848zM48zbrBtM5JPephbYZhbeYdnZYFtf4Z3ZoJyc5tqZp5odph/YZ58cLB2VKt0Yatzf7V/YbV/eYxbhJhblIl1kYd4oqx5kLucAJ+OUo+RbpmDapieYZOef6aCYreGYrWCcLWUcrWyddGRM9KtAOeaAM6XVMGKZMeWZMOaddGeYdGecNKtUsGpddela9eqfOi+UuOvcOyxbue4ee7Bf5CMi5ivmZWlp6qSjaWRpLqllaumrpOzzIm+57CtxbXGnq/LqYbU1YbK6IjL+4bT/pfH5JLP/5rS6pnU/aPB3LzHx73L1brS16PG6K3X76fc+rDG6LLY+6rq1arq6qnn/rXq5rTp/rrx/86pkNG2p+i5leq9oda259fLj9HTlMbPtN3Co83ktO7Ij+XHnvrKjf/PnP/ShP7TlevGq+nGuu/RrO7Zs/7MpPzUrfvXt//lqf/ps//wu8XKycLO1M3RzsPS2dLNx9rSytPV1cXX59H/zM3h7sXo/cn3/9nj49bo89H/5tP7/ejYzevnxerl2eT8zOzx2v/qwvrp1f/9y//91uXn5uPr8+vx5+vx8fbo6v7+5/7+/gAAAN+TUhEAAAAJcEhZcwAADsMAAA7DAcdvqGQAABybSURBVHhe7Z0LeBzVdceNbVKFtrgtMQmx3CQtlK/YNVXIythNjGMIpoSUNElrN8IhpIldCGlqaB4tlNSGtqQhCTQQt5gUoVjFbhOwQ1QZyufWlSW5jyTYyDSSWK/wq58lZ1UHsbvSZu7Xc849M3Nn5s5jtaPVPuZve+ex91xZvzl75szcuWfnzE1UMSWwK6gEdgWVwK6gZg/2WMOIf+FZhf0s/1/qXM8Gw05dv+420LrrU7xDoyht5rWkWlesaE21zOMdDo2NiYZQoGevIIpS61bwTpeitFmUWmEptYh3Kkpgz21Zd9tTTBH01G3rWvgNRVHazFNQo1Ie705gtzJBRa38lqUobeYzY0Xz+S1TDQ+7VfFYU0+5onKUNhrWHtqNDruF2bnkiBJR2sxjvC45I0mjw1ZOe6rW8dukKG3MeN2K2Ygtp/trYBuTvFJP8oG9gsF5pOQbjjap+bfymqPNIoa7AtzdgduRk3hhT9z5ttO8Wkfygb1OE41Jits62rTMtWkrbaxEZNHceY60xOHaXtjD96/Zx6t1JD3sFGNTdGtqPrw+dZtFSW0D2OdbtJU2dsReNBdTvvm2c6tRWxNG2jeJ9EUX9vAWy7inqalpE29oZdzjeLsd2q+XZmiZvuCaIu2V+9bD+ramptfjT8ltbmp6S1aa+P0EV+elSw/7eolN0a0ppns9N3G3WWfTttu0MFmCDS8KbvU0qoc90NTUxVtSuc2Ah1585eTRjvi2YXu5P/2GiwAscF6Pe3ObN4n2S4rUKn0BvE8rb+iBv2Tt0QzB9pz6gDU6NsiKEe42t9q0rTZ23CDYK1Lz55mhW40jLtivnSHYufuvdsbtbeSXA+SAkUSc05dBe4Z92RdhkdvyRXm86G08BD18RB4A+vAztpXJ1Fd62JKZLZv1bbdxE08blTY3IcBSEjZdPnLo5iYoJ+z0BfDBBtj0T1Fus+Xo+KHvAoK/fQF99uGjDx468LY/ef2/A1T5Joo8m2TC/i9st15SNvsD2HbX+BYfBPhkYYRJX4ALOE5N38VOIO7A27DT9bFz6LVM5jj8dZ/jg2BbGYbK2gXbmcOZzXhLA5tcmmhzE5QTdu7Ot44C6Ne+suB53iNlf7zRBWHLuOctWeOe9eTr22FB/Dfxm9QOAjN9GizY/3sHeHEX0dzGb+EHxu4avbpdHgtoOnBNEY8D/ACMM9gJeD7+jHu65CfGRwPnnQfniPOczhIM28wwHKxdsF23nvisyVsK7FbzShJPk7TCTVCuMEJeff6C7/CmKSICjtXURb/nNviV0dMg/sICdiFz2GWDQ4ELtsHChJ3d3gUQ2XVlWGpHv9XBlicH4A3WXdiCKYuBS6YegE9IkH6AtPFHOuQP28ownKxdsBUp7bjJXPNsmEpx9LajiHoPxQ372jOi/SO8YYs/67CADzhoPcOWycbrexi2O6anLwAzE/Zo+3qgx7AJMbK2IgodOzOMYDhaTwkNJjISNu7DtMV4wPzM+Ahoe1gHnyApw3Cx9j9B2u2cJ8gU3eZrmZ8C97Zz7YATpHjhjR961PtfFdvInQAMf4IZtnlC83g2BgIGacLO0jkSYg4KDTisS77wil5tnyDhQA1IH1Y9WwqTmQC94P5ggvSwzbQOz3lO1r6pn3pMnKkfXCzOB8xAfp59RRmS+r3wRs1vQh9s8KkuRAe/qwmboTFs+SYx2YYkCSc1RdjGA+DJeIAw1QZT9Gt8B1M/3ACofLRwAYcLuwLmDFtmK9f8GHYq3KNKD9u6YAHaTtb6ixona/dFzby5LS1w1NDHaZuk3vjzwnZnIqzt8BlGT5OfcBM2ftSBE8OmN9kaYwB92i3YlFkTaeoJTwGUV6ARHhXlogaDFaxi4iFPufLnUTvcKT8epUgP244R8sLR0lPKpbgjjiislTYYNCiI4Po89d6II4vxwjYeWBsUEWtUPrBX+N0bUZIIR5sV83gFpLSBsMHph5mEsEJuRFGuXXfyge05/bEUx3a1sck72mDgwGjS6mTtcGxdGPneP/NKPckPdoyDB+DEKQzRSsBOBg8csHXDi54Bxiht5q9YtIhSP/UGazIs5oQd64BvSn2YIRnwBblg42MKDvk8yuBQ8ihDkAJgQ76hDMb4P6QT3iZ5SEcqEDac1GJ6/Gw+PX52ZQoubjRKYM+E5nkiCCl5sLKCahDHBtfmXziBXQElsCuoBHYFlcCuoBTYxZLE9nGocWAzu2IxgT3jSmBXUAnsCiqBXUElsCuoBHYFlcCuoBLYFVQtw5bPl9WQyob94BzSKt700ePUaLH+EEWDLR/B4+f8SI0HG/Sgh7RnT7sPZ1ICO0xsj4oA+/HFvKJTqbDbP/HY+U0fyhLs3Oe6rG2R/8r5TR/Iikeg5cBP7xfi79tyW77/mfMWfJc6mH3pYBdOsk7xDp3YHkVoIVCA9xqfxojSji/pc+ecA54HYQb2P86e/eBvnbu4eAgiykaRft1fcbOSYf/sd4TxQBvCxnkG1rZ4+Oai6L+02L9eiO0XboJ9XbnN12bFwK+OUg+zLh3s8Uy3VObUFO/yiu1RCPvQm7O4bF8FvJ/BtfynduPOF4HygxsR/5w52AT+5f+wB995+Vwk/QzYlwwbn2QdWFvM39GzbQPsM7dfXoLefVcXLPP3fWttMffno/Lp7LtLfrp3ZuSFXRDj3d2voIC5v2+zPQphA1CR/sXs4+jMtAcpG5/ec3gO/aKWZ3N8efzN2fTreuiI6GAbavcsBTbO3KD5Lt/8FXrMl7dxSoaAIJL/fM/LS3+8dRT4U1gHD4f9VSCtZ3fvpeXUiQDabI8Cghg+5mDYgGgCr7CHfHnOJoExY7cVsxE2tl2IsPcD7D3wofDAnrjzrd7Z1BI2ei9Nehm4pJjffN3duNPclrCh3SO7228WX8MXcH74gaU/tz4z8oFdkDoOtHkVNckNUGyPQoLo2awHF+Oew+zLIHBj1bMPQygZgDBCnv0MxG4P7OH7r/bOpt6O/isOX2PCBc++o+foncDR3E5TGIGYcei9D3eJw78JDi09u6phmzHbLenwUmyPMgkCVFx9fBXuyX+qC0LybnTpQ4sdnn3onP3Gp03P3g28vWGkXTObOv2m7wjxQxUuuu3hXzI9Hdz64Q1F8dilRbAF7EcvWjJaC7Dh1Ih/8C++WH9GstwCxPYoJMjxA0MEYD8MGcjL52LOgdnIOfutPBubQptzvv26/dKz94CdFrZnNjX4+3lNv4wer3g2RI0P27CNRyn1E/nPfRgRw4egFmCrLmwJowuvgtg+Djlh82zqCfds6jqQFzZmI36weQ3F9nHIAdtvNnU9qBTPzuzN2q7N9nHIAZtnU+fds6nrQaWFEV5DsX0ccoYR8mrvbOp6kBZ2xs+zeQ3F9nHIBRsusDWzqetBJXl2tz4bKVdO2H6zqetAJYaRSWNSyLjN9nHIBdtnNnUdyAvbJxvh3ZPmrSm2j0Me2PWYiaBK8+wKZCMo/Wzqoc8sWHjxKCTgCxZiCp7bDFcuQrz8C3BgjK/TerWrxDBii+3jkAe2djb1AFx9i5/AVTu8lf7jHpHbijtE+4WbRP5Pv4m3WqteWtizmo2gNLOp85/fT8vtt+PrE20A+9GnYfd9X90kjMkBvGKvepXk2ZXJRvRKL6UfaXyBfB62clu+/8GiGLiZ4nstw+4+ljmWecX1LwPHALIRbsT2ZemkXESCzSVt6M4SwL4sm9/yoy8fEI911RJsXgphwqaRGrzHh3/pH60D6+gx+2DzHlz0NjevCmpYCuw0uDHI+AJFE9jKbck+sTF3b7GmYQNuHu/1yP4YBMI2Oj+6FWEfBNK9V8l9WmXkIhLs/OflOdOO2VuyR5f+5ybRX8OwC6Ig5Fqw2Eqng3vyCJteJpYGjGyX4tl0GQ9Kvwlcm7KRLVnxyIIDMievXc/2H1JXxFZ6Sdj3AhZ68VGxJNhwXblg4Vo4fGaeDbAPQT5e47Ajia30ItgUQnoX+8MuzbPrQDMJO7+1ufmpewPCSCkxux40k7BRExsCWiaeHVFspZcFe2JpQBQpMWbXvmYC9lAzag9k282LA5+yS2BHFFuVpSRmRxRblaXEsyOKrcpRErOjiq3KUgI7otiqLCUxO6LYqiwlnh1RbFWOkpgdVWxVlhLYEcVWZSmJ2RHFVmWpQT37pV1xwjaHw0Ku1xs1Zh+JE/bQVcLovEqIYSDdGzQImXh2REk7Xx1cVTQ6N4bc9mu4mF0U+Z2nwbP7YoeNI2L5rXKcXa+G82wJ+6Udz8UKe2LJHpG/9986m/f02nP23Gq8mG16dqxhJL/kdhoV2wPBO/FsS6Znxwo7vxWfFqGYHTS63rgxO0bYkjXE7cX7MXbTulYN59lZo29HzJ4N6TUNi+FKEOvGi9k7djy7s0cc2bEj1hNkNDUcbF4m90YqoFmFnXh2RLFVOSo3ZvOz2rWj2vFsu5KOqTqBPXUCi1+45Cyqw1ZlqaSYXa+wJw2acOCSc6INW5WlaXp27Zaa46XLszPdypRH0lnXFDK2KkelxWwFtl+pua9tKIr2S4uH1ldrqTleqrCnCmcz3WPOklBTMwB72p6NhbdkabO/xYoC5jaVmjPu7hpaks3/2bersdQcL1XY4xAzMI44gvRMwPaN2cYkryhSYOM0A6x+dsdfy1JzvC0nlG0zS82dHrqWykhVUak5Xjphj2QyIxkn7PHM3jO8SmIrraxZYoHzDvw9e+LOt4WXmsO6ftd9CXea21gmitpRlTl4uUWeQ6unRhQvVdgnCPN45pjclMIifyptttLJHBbLb911cRBs35g9fP+aKKXmwG0dpeaOWqXm3lOlpeZ46fTsUzQb0pnrAW11B1v5iabl7U8HDYoFxOz2SKXmkOQhR6m5jxSNXqvU3Gerr9QcL52eDXEEorbDs+UxsMVWfpK3VgNHIANiNsAOLTWHMRtIWqXmIGDnv17lpeZ46T5BopyeXRLs9MU0QDMdz+ZSc7l6LDXHSxW2Ns92B3G20iu/VY48Bnu2NmbXdak5XjpgF4xMRinAwIru2eZQzXQ8m0vNvVaXpeZ46fFsR55HAtjK3F+20sliPa2YTV5dp6XmeKnALgi8N0KefZYrBJw8OeZOT9hKJ3NYDJeLSp7h237tmbotNcdLh2dPFTKZM+jFx/lU2Y3loUrKRqLIJ8+u41JzvNR7tl0M45QoLfWLJD3sOi41x0uvZ9OaXQ1DoGdHi9mRFZRn16OCPduGOzV51nmzhK3Kkp9n+5aaOx8uCrEExvt0pebSn73wwgsX0kV9lcrPs2W9IlWuG1NsVY58740ElppbAm/JUnNb8Ta1q9TcI1VysaiVFjYOi1FVeIccrGfUswNLzVGEoVJzX90Nu52l5o7KGmlVKj3sCGKrsuQbszXylJrL60rNyQpS1apZhe3r2RrJm9XyzhLAXpLNbfnRF9yl5nJbcTChajWbsEsag7Q8m6IJFVHM/uCW3L3FHyiwn/B/GLwaVDOe7Sw1d4hKzaWx1Jzi2RxjqlYzApuHxYzO5mbzLolWpcRs0W+WmjOzESo1J+8QMuxDVV5reCZgm8NiBzda91r1KsWzqdTc+RuKdp4NsA+v5QsgCbtaBnb9NCOeDTIfgg+qWFlSzK4Hje3csWOXEMO7/q/ysEv07NrX2PMiv/M5MRzzw/A4Www1FPgsQ0kxuw40BtSGdxXHd5yOEzbNFgOZzH3UcJ4N/4Z3Ie8YYZtDNRPM3EeNF7OB2pFdxVhhm6yPLrmJlr5qONj7IGbvi9ezzWExSLebm4OCdsPFbMhGnqOwHesJMpoaMWZLVR5248VsXlb9vZF60KzCbriYzcvEsyugsR2mZiFm8zLx7DCxVRxKYIeJreJQAjtMbFWGrC4S2GFiq3LVdzqBHS620oqHxfC7D4JuZwPqfS+d7tuXwA4TW+lkDouBqE6Un6CPPrxZkMAOE1v5yRqpCX64AGDvS2CHiq38xLADi58lYSSq2MpHcrbYwcCYTV0kJ8goYiu97CcYzHASpAS2VAHF606xlVb2DCYR+H2QrMaGTYiR8av0lLbzWWEWW+mksA5+lIHVuLALYjIvH4QHxgA743oI3hRb6aTOFguL2ahG9uyps4D4GDF+NTPimv5oia3iUCPDBsR7i4Xx7mMnT56ENeckMUtsFYemC5uf1a4d+cEGxqS92ZmDbfYRDbZdScdUncDuzhZPSM/uRs8unHzFVQ5jFjy7bmHvnZTRA31cVozKnHYFbraKQ6XCrqtSc1h7S9bNMWEfO+6JJWxVhqwuSobtV2ru4ZuLov/SYv/6Gio1B4h5pjquAexTQNwdR9gqDpUMG6ucDazFSjrbcP6juU2l5vJ3dcEyf9+3aqTUHMTsYvHECMCGJBA9ey86u6sACVvFIS9sQ9O9Ahtn8WKNqM3flKXmeFtOKHvELDU3Kkv/QW/VXGoOs2szZo9MIuwzU8e7zxSEeuHOVuXI7MMDe+LOt3pLFknYdqm5S4r5zdfdjTvNbQkb2j3CpeZuFrKuXzXXiAJ/xmxEidkYR1xBm63ikAf28P1XRyk1B27rKDWXtkrNvbd2Ss0BYpmNCIwe4zRrfRxzb1VspZVVRNHoDK6iKOWBjZOSIpSaQ7c97Cg1t6EoHrNKzV1UE6XmAPYURA/ybIzZIwCacm9VbKWTPSx28DcCBg+sLrSwQ0vNybp+dqk5gG08Wnul5jAHmTKzEYB9LNONQfv0T/h9Elv5ie5jTyz91+CRGiknbC41N9Egpeaoxq0Ss0/hujtos5WfELbRuTFkWEzKAbvRSs1ByLCvIPHeCGbZpVUZpplLw/LL3Hxl9uGAzaXm8o1Sag4SPshG7Dz7FIKmFEURW+klv1sMQJfu2dKrG6bUHPpzwfRszLNPYcAuHndWd2ErreRQDT6jEzx8wHLBhgvsBio1h45sZiMUs4snADTtsMVWOinDYkGebXXhhN1YpeYoUlvZCMZs2HjWHbTZSidzWAw0jTACaqBSczgGOVaADKRQOJvJjCF1HCiDC0k1aLNVHPLArsdMBKX3bACr6FQRgnZ398gp9eYIW5Ujsw8PbN9ScwsvlqXmMAX3lJrDy54FcEFZvfLCLojC+EjmGP+BvyNnisXXThWmHPehZtSzA0vNWcVdtuIOtdRcekmVXwbpPBskADn9maJV3quKreKQB3ZgqTmaDk+l5h59GnYrpea2V8lVua98YE/xH1rViq3KkNWFF7ZGnlJzOXepOaPz22/8md/Hd6tVPrDDxVZxKBJs+SU08s4SwL4sm9/yoy87Ss3lNu8Sxpd249tVqpqBnQY3Bpml5j6Ipeae2Ji7t2jD3gIxfKDmarFGEVuVI7OPSLCdpeYwZm/JHsVSc/1WGLnvgBCHbsa3q1Q149l0GQ9Kvwlc2y41d0Dm5HSCbP+wML5czSfJ2oGNpeYWrhV2ng2wD0E+bsMWj52/YBcuq1UzApuHxSaWBN6Hwi4e6sr9ZU9E2LWvmYBtDoulN4T6/9/15DqzCewwsZWfcKRmIgz2i79GSmCHia38FAV2UeQ6R1/83WICO0xs5SOaLZaDmL048DG7ox3Zb3xc+T/UuWYGtjJbLIj2QxRFbkxgh4mttFKGanL+s8WgC4ghD/1j4tmhYiudFNbmHHYfvfgxSP4S2KFiK53U2WLBU9e/8THjL55PYIeKrcqR2UcCO0xsFYcS2GFiqziUwA4TW5Uhq4sEdpjYKg6NNYz4F07CSAU0m7DNPhLYYWKrOJTADhNbxaEEdpjYqgxZXSSww8RWWlmzxWAl8N6IVAI7TGylkzksFnIXylICG3TW9U2yDrGVn3CkZjiEtdlHAhs03t3tj5ut/ISwez+6lZ+JD1YCGzSOz2mPjPGWS2zlI5wtZnQuHg35cjGpBHaxIMa79yLvY5O8xyG20kt+t1gneLWBL3pZXSSwQQC7WDgBuHWxhK204qEaLHobANtSAhuE05bgNHlcG7rZSidzWGwYwgj+C1MCG2RWYjgLzu0J3WylkzVbDFaCWJt9JLBBGEZIUxi6R5yhm63ikD/swXfxSpD8GoUa+zcwOiPMKCxdkWDD2dITutkqDqmwh29oSV1pzV7y4Mi7JtsM76s87JemPU3KHzZlI7yOzg2RO955kFYXCuyJ9z2PU8JMeXC4d/TurjjsMrw+yLOVK0gM284qUWwVhxTY6bU8j7F3eeo9WcKRvjHV2gU+3ZFKtQ2uXrZazuPoXZ1a2QOtWlZ3Db4DGuPe3jWplaPC+Ifv37jyAGwOvqMz1foJWPneGtlD53J8f7Ctd3mbGL4xtbJPwv6fG1Jv3yRE/yc7l+PS6E21fryDgA62Penoof/pzuWf7Eyl3m199EqTL+ypQsEK0gVOSNSozVZxSIFtdLZRzy/gBehNCDvfsUekrz5gdNL0jn52xhdWCTF07ajRiZ59eRe1GgaSvauE0bFSHrDBy/fD/tvFEGxPvB/oTcLxuEoMLQOb3PvRRnb2kyJ8oHpE/xUHYDccQOj6yJUEe+jy5x099L8dduflgZiO9LDPjhUyGKSnxoBvAU6PGc+VDVuVI7MPBbYwnly98l+AOeQyw9dkAfbQO2Fv5+70tZTWMGyZvXfupkMwiC3gyGBan/sdOACc2dN+MKDvuID3ad+7xOAV8HMHr5DvsTA09MOHAw4emec7qNiJu4d+TGlzHdOeSaKF/WoGUdNfmrfefcx7zc5WcUiFDfrhmj35jmWgK0aBTT+uLbtpCBFZfKR39d4kPRv34To2vHy/FVNp/+C7qA0aTnSsXrYMjh7upn6ogRB9N6TATPTD4YC21DX34e4Bm8Tu2Xg23HtGYMJ3Bm9H6W6PsFUccsEmcNJ74Lclz4bIrfHsr9yuwG4TvRRoTFCwH4/PC+CXuB/7BP+EtpIg9grvgYauyJKNhA1d0glCwnb2IGHH7dnFQoZrDEOgnsZ3HkST1YUKG3Zi/O2/it4FMPkOKltrxmyJnmL6MMZsDCME+yaIrGfwLQs2RVw4GkMrT2PExQOU72TYSsxGooPNlmfTjz4C29xDrsPqwfRsPFW2iYkPyB9fgnSwp8ZfwTBC0t+FArFV+ep7ToE9vGbZ8tanYQUyi9QtBGaio2U5JB6vQTZyFfym8IKS2YgYWrN8jwlbDN4ACUvR9mwzlxiUucQQJCv/3SZhQz6fat1JiY3xZEvrJ560YRtPppa3cRh5B/RwC65wNoKwxZHV797f+04xdGWP0YHBPLq0sJE0OPbJE7D03hWRYiut5LCY0YlX7WG3WCd2Vu8EJnlc4pMOdvEsBBC8gBnvHjk5Dc9WvltMDAXcHKE+jlTxd4tVBPakQdF6yls12xZb+QlHalB81vJVfufpRoM9vKuowp6C+DFCeUi3uyC8JbLzF8MO/U6gI7vUA17nkr8oBE4V9qtUEor++ro22flKfrcYOHbAGQS7MPr2NRzs/M7ssAK7WJg8SyfHKX3ahyI7P5mzxSaWhpwe8SPVaLCNvp4+G3ZB0Ks/aBTZ+ciawRT6ZVd9z8FLg8EWfc/+k+rZESTttLJYhzh2kcJXA8Lufi4+2OawWPgTUS9RxYpGg/3SjtPxwY4szPtAjQYbVHHYVhcJ7DCxVRxKYIeJreJQAjtMbFWOzD4S2GFiqzjE89YaQPwLzybsBlTFYTfy8Uo8u4KqCthHfp2fQxC9f8ArpWgQq+NyPWJb6Z/7qWk+VTNjihG2OVsMlkHTPDR9RIP9N//BKy6lf57uxXzt92jLlHFXaSOFlVB8sM1hsYPwL2hYLFB9pcM2qRp3PUNLVv6Pqs2vhfh/J4QrhJXqlWYAAAAASUVORK5CYII="},80512:(A,e,r)=>{r.d(e,{c:()=>n});const n=r.p+"assets/images/Arduino_SelectBoard_2-f9e271acb320f31ea713adf8a70205ca.png"},8736:(A,e,r)=>{r.d(e,{c:()=>n});const n="data:image/png;base64,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"}}]);