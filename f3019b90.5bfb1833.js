(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{145:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return c})),o.d(n,"metadata",(function(){return l})),o.d(n,"toc",(function(){return d})),o.d(n,"default",(function(){return u}));var i=o(3),t=o(7),a=(o(0),o(156)),r=["components"],c={id:"brilho-led",title:"Controle brilho de LED",slug:"/franzininho-diy/brilho-led",description:"Esse exemplo exibe como controlar a intensidade do LED usando a fun\xe7\xe3o analogWrite() na Franzininho DIY."},l={unversionedId:"FranzininhoDIY/exemplos-arduino/brilho-led",id:"FranzininhoDIY/exemplos-arduino/brilho-led",isDocsHomePage:!1,title:"Controle brilho de LED",description:"Esse exemplo exibe como controlar a intensidade do LED usando a fun\xe7\xe3o analogWrite() na Franzininho DIY.",source:"@site/docs/FranzininhoDIY/exemplos-arduino/brilho-led.md",slug:"/franzininho-diy/brilho-led",permalink:"/docs-franzininho-site/docs/franzininho-diy/brilho-led",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/brilho-led.md",version:"current",sidebar:"docs",previous:{title:"Pisca LED",permalink:"/docs-franzininho-site/docs/franzininho-diy/pisca-led"},next:{title:"Leitura de Tecla",permalink:"/docs-franzininho-site/docs/franzininho-diy/leitura-tecla"}},d=[{value:"Circuito",id:"circuito",children:[]},{value:"Sketch",id:"sketch",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Video de Funcionamento",id:"video-de-funcionamento",children:[]}],s={toc:d};function u(e){var n=e.components,c=Object(t.a)(e,r);return Object(a.b)("wrapper",Object(i.a)({},s,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Esse exemplo exibe como controlar a intensidade de um LED usando a fun\xe7\xe3o analogWrite() na Franzininho DIY."),Object(a.b)("h1",{id:"materiais"},"Materiais"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Placa Franzininho;"),Object(a.b)("li",{parentName:"ul"},"Protoboard;"),Object(a.b)("li",{parentName:"ul"},"LED 3mm;"),Object(a.b)("li",{parentName:"ul"},"Resistor 330;"),Object(a.b)("li",{parentName:"ul"},"Jumpers macho/f\xeamea;")),Object(a.b)("h2",{id:"circuito"},"Circuito"),Object(a.b)("p",null,"Na protoboard voc\xea pode montar o circuito para acionamento do LED da seguinte forma:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Circuito",src:o(397).default})),Object(a.b)("h2",{id:"sketch"},"Sketch"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Franzininho\n  Exemplo: Controle Brilho de LED - PWM\n  Esse exemplo exibe como controlar a intensidade de brilho de um LED usando PWM\n*/\n\nconst int LED = 1; //pino para o LED\nint i = 0;        //utilizaremos essa vari\xe1vel para contagem auxiliar\n\nvoid setup() {\n pinMode(LED,OUTPUT); //configura o pino do LED como uma sa\xedda\n}\n\nvoid loop() {\n  //faz um loop de 0 a 255 (acende gradualmente)\n  for (i = 0; i<255; i++) {\n    analogWrite (LED, i);  // define o brilho do LED\n    delay (10); //espere 10ms, pois analogwrite \xe9 um instant\xe2neo e n\xe3o ver\xedamos nenhuma altera\xe7\xe3o\n  }\n\n  delay(1000);\n\n  //faz um loop de 255 a 1 (apaga gradualmente)\n  for (i = 255; i > 0; i--) {  \n   analogWrite(LED, i); //define o brilho do LED\n   delay(10);          //aguarda 10ms\n  }\n\n  delay(1000);\n}\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Saidas PWM")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Verifique no pinout da Franzininho DIY quais os pinos possuem fun\xe7\xe3o de sa\xedda PWM"))),Object(a.b)("h2",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(a.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311359730520949312?view=diagram"}),Object(a.b)("h2",{id:"video-de-funcionamento"},"Video de Funcionamento"),Object(a.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/0W5Dos0NHsE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0},156:function(e,n,o){"use strict";o.d(n,"a",(function(){return u})),o.d(n,"b",(function(){return b}));var i=o(0),t=o.n(i);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,i,t=function(e,n){if(null==e)return{};var o,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=t.a.createContext({}),s=function(e){var n=t.a.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},u=function(e){var n=s(e.components);return t.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(e,n){var o=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=i,b=u["".concat(r,".").concat(m)]||u[m]||p[m]||a;return o?t.a.createElement(b,c(c({ref:n},d),{},{components:o})):t.a.createElement(b,c({ref:n},d))}));function b(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var d=2;d<a;d++)r[d]=o[d];return t.a.createElement.apply(null,r)}return t.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},397:function(e,n,o){"use strict";o.r(n),n.default=o.p+"assets/images/brilho-led-circuito-cafaefb0f69ebc87e542c140ed6f0f67.png"}}]);