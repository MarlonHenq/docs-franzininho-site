"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[8968],{93232:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>t});var n=i(17624),o=i(95788);const r={id:"pacote",title:"Configura\xe7\xe3o da Arduino IDE",slug:"/franzininho-diy/pacote",description:"Configura\xe7\xe3o da IDE Arduino para programa\xe7\xe3o da Franzininho"},c=void 0,s={id:"FranzininhoDIY/exemplos-arduino/pacote",title:"Configura\xe7\xe3o da Arduino IDE",description:"Configura\xe7\xe3o da IDE Arduino para programa\xe7\xe3o da Franzininho",source:"@site/docs/FranzininhoDIY/exemplos-arduino/pacote.md",sourceDirName:"FranzininhoDIY/exemplos-arduino",slug:"/franzininho-diy/pacote",permalink:"/en/docs/franzininho-diy/pacote",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/pacote.md",tags:[],version:"current",frontMatter:{id:"pacote",title:"Configura\xe7\xe3o da Arduino IDE",slug:"/franzininho-diy/pacote",description:"Configura\xe7\xe3o da IDE Arduino para programa\xe7\xe3o da Franzininho"},sidebar:"docs",previous:{title:"Instala\xe7\xe3o de drivers e configura\xe7\xe3o da USB",permalink:"/en/docs/franzininho-diy/drivers-micronucleus"},next:{title:"Entradas e Sa\xeddas Digitais",permalink:"/en/docs/franzininho-diy/entradas-saidas-digitais"}},d={},t=[{value:"Configura\xe7\xe3o da Arduino IDE",id:"configura\xe7\xe3o-da-arduino-ide",level:2},{value:"Upload de c\xf3digo",id:"upload-de-c\xf3digo",level:2},{value:"Resolvendo problemas de configura\xe7\xe3o e upload",id:"resolvendo-problemas-de-configura\xe7\xe3o-e-upload",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",strong:"strong",...(0,o.MN)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Para programa\xe7\xe3o da Franzininho DIY recomendamos o uso do pacote ATtinyCore, mantido pelo Spence Konde, ",(0,n.jsx)(a.a,{href:"https://github.com/SpenceKonde/ATTinyCore",children:"aqui"}),"."]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"Em breve teremos um pacote Franzininho que facilitar\xe1 o processo de configura\xe7\xe3o da IDE. Fique ligado(a) nas atualiza\xe7\xf5es."})}),"\n",(0,n.jsx)(a.h2,{id:"configura\xe7\xe3o-da-arduino-ide",children:"Configura\xe7\xe3o da Arduino IDE"}),"\n",(0,n.jsxs)(a.p,{children:["Ap\xf3s instalar a Arduino IDE(",(0,n.jsx)(a.a,{href:"https://www.arduino.cc/en/software",children:"baixe aqui"}),"), acesse **Arquivo -> Prefer\xeancias ** e cole a URL a seguir em ",(0,n.jsx)(a.strong,{children:"URL Adicionais Para Gerenciadores de Placas"}),":"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"http://drazzy.com/package_drazzy.com_index.json"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"URL ATTINY CORE",src:i(22324).c+"",width:"924",height:"620"})}),"\n",(0,n.jsxs)(a.p,{children:["Agora, abra o Gerenciador de placas, acesse: ",(0,n.jsx)(a.strong,{children:"Ferramentas -> Placa -> Gerenciador de placas"})," e procure por ",(0,n.jsx)(a.strong,{children:"ATTinyCore"}),". Ap\xf3s encontrar o pacote clique em instalar e aguarde a instala\xe7\xe3o:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Instala\xe7\xe3o do Pacote",src:i(4436).c+"",width:"884",height:"511"})}),"\n",(0,n.jsxs)(a.p,{children:["Pronto. agora vamos configurar a placa. Selecione a placa ",(0,n.jsx)(a.strong,{children:"ATTiny85 (Micronucleus/Digispark)"}),":"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Selecionando a Placa",src:i(18128).c+"",width:"1279",height:"1051"})}),"\n",(0,n.jsx)(a.p,{children:"As demais configura\xe7\xf5es devem ficar da seguinte forma:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Configura\xe7\xf5es",src:i(89212).c+"",width:"1003",height:"773"})}),"\n",(0,n.jsx)(a.p,{children:"Agora vamos carregar um Sketch para verificarmos se est\xe1 tudo certo e entendermos o processo Upload para a placa."}),"\n",(0,n.jsx)(a.h2,{id:"upload-de-c\xf3digo",children:"Upload de c\xf3digo"}),"\n",(0,n.jsxs)(a.p,{children:["Abra o exemplo Blink. Acesse ",(0,n.jsx)(a.strong,{children:"Arquivo -> Exemplos -> 01.Basics -> Blink"}),":"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Blink",src:i(14860).c+"",width:"1298",height:"1049"})}),"\n",(0,n.jsxs)(a.p,{children:["Agora vamos carregar o Sketch para a placa. Clique no bot\xe3o ",(0,n.jsx)(a.strong,{children:"Carregar"}),":"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Bot\xe3o upload",src:i(82703).c+"",width:"614",height:"137"})}),"\n",(0,n.jsx)(a.p,{children:"Ap\xf3s a compila\xe7\xe3o ser\xe1 exibida a seguinte mensagem:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"MEnsagem",src:i(4248).c+"",width:"1278",height:"344"})}),"\n",(0,n.jsx)(a.p,{children:"Conecte a placa na porta USB. Caso a placa ja esteja conectada pressione o bot\xe3o de reset ao ver essa mensagem. O c\xf3digo ser\xe1 carregado para a placa:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Carregando o c\xf3digo",src:i(51448).c+"",width:"1288",height:"508"})}),"\n",(0,n.jsx)(a.p,{children:"Ap\xf3s o upload o LED amarelo da placa passar\xe1 a piscar."}),"\n",(0,n.jsx)(a.p,{children:"Se voc\xea chegou at\xe9 aqui e n\xe3o teve nenhum problema, parab\xe9ns! Voc\xea j\xe1 pode testar os exemplos aqui na documenta\xe7\xe3o ou fazer os seus pr\xf3prios projetos."}),"\n",(0,n.jsx)(a.p,{children:"Caso tenha algum problema verifique se consegue resolver com as solu\xe7\xf5es a seguir."}),"\n",(0,n.jsx)(a.h2,{id:"resolvendo-problemas-de-configura\xe7\xe3o-e-upload",children:"Resolvendo problemas de configura\xe7\xe3o e upload"}),"\n",(0,n.jsx)(a.admonition,{type:"warning",children:(0,n.jsx)(a.p,{children:"Em breve"})})]})}function p(e={}){const{wrapper:a}={...(0,o.MN)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},95788:(e,a,i)=>{i.d(a,{MN:()=>t});var n=i(11504);function o(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function r(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){o(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function s(e,a){if(null==e)return{};var i,n,o=function(e,a){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||(o[i]=e[i]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=n.createContext({}),t=function(e){var a=n.useContext(d),i=a;return e&&(i="function"==typeof e?e(a):c(c({},a),e)),i},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var i=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=t(i),u=o,R=g["".concat(d,".").concat(u)]||g[u]||l[u]||r;return i?n.createElement(R,c(c({ref:a},p),{},{components:i})):n.createElement(R,c({ref:a},p))}));p.displayName="MDXCreateElement"},14860:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/blink-c2640cc259a421e9d06aa92307d788a5.png"},51448:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/carregando-c0711ebcf0c47f8fce010a68a84a1cd2.png"},89212:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/configuracoes-f556517325fcec046cac4c1f856f4d1d.png"},4436:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/instalacao-3eca2c3f3a57a5d014908f365c885b15.png"},4248:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/mensagem-ba029da44dd3c0bae107dfb4cbafefb5.png"},18128:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/placa-4f7ad0a641424b79a3582cf2da447822.png"},22324:(e,a,i)=>{i.d(a,{c:()=>n});const n=i.p+"assets/images/preferencias-9f46ca3123e37b55ac190aa0e68c18ab.png"},82703:(e,a,i)=>{i.d(a,{c:()=>n});const n="data:image/png;base64,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"}}]);