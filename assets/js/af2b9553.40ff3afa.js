"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[2660],{68240:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>t,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=o(17624),s=o(95788);const a={id:"franzininho-wifi-espidf-05",title:"Primeiros passos com a AWS",slug:"/franzininho-wifi/exemplos-espidf/aws",description:"Primeiros passos para conectar a Franzininho WiFi na AWS via MQTT pelo AWS IoT Core.",author:"Ana Carolina Cabral (ana.cpmelo95@gmail.com)"},r=void 0,c={id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-05",title:"Primeiros passos com a AWS",description:"Primeiros passos para conectar a Franzininho WiFi na AWS via MQTT pelo AWS IoT Core.",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x05-AWS-IoT-Core.md",sourceDirName:"FranzininhoWifi/exemplos-espidf",slug:"/franzininho-wifi/exemplos-espidf/aws",permalink:"/docs/franzininho-wifi/exemplos-espidf/aws",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x05-AWS-IoT-Core.md",tags:[],version:"current",frontMatter:{id:"franzininho-wifi-espidf-05",title:"Primeiros passos com a AWS",slug:"/franzininho-wifi/exemplos-espidf/aws",description:"Primeiros passos para conectar a Franzininho WiFi na AWS via MQTT pelo AWS IoT Core.",author:"Ana Carolina Cabral (ana.cpmelo95@gmail.com)"},sidebar:"docs",previous:{title:"PWM com LEDC",permalink:"/docs/franzininho-wifi/exemplos-espidf/ledc"},next:{title:"Primeiros Passos",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/primeiros-passos"}},t={},d=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:3},{value:"AWS IOT Core",id:"aws-iot-core",level:3},{value:"Parte 1 - Criando a Franzininho na AWS",id:"parte-1---criando-a-franzininho-na-aws",level:3},{value:"Parte 2 - Conectando a Franzininho com ESP-IDF",id:"parte-2---conectando-a-franzininho-com-esp-idf",level:3},{value:"Parte 3 - Monitorando a Franzininho",id:"parte-3---monitorando-a-franzininho",level:3}];function l(e){const i={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.MN)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,n.jsxs)(i.p,{children:["Neste tutorial exploraremos a utiliza\xe7\xe3o do AWS IoT Core para conectar a placa Franzininho WiFi \xe0 nuvem utilizando o ESP-IDF. Al\xe9m do IoT Core, a AWS oferece v\xe1rias outras formas de conectar um dispositivo, como AWS IoT Greengrass Stream Manager ou AWS IoT SiteWise. Esses outros servi\xe7os para ingest\xe3o e visualiza\xe7\xe3o de dados podem ser vistos nesse ",(0,n.jsx)(i.a,{href:"https://aws.amazon.com/pt/blogs/iot/7-patterns-for-iot-data-ingestion-and-visualization-how-to-decide-what-works-best-for-your-use-case/",children:"link"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"aws-iot-core",children:"AWS IOT Core"}),"\n",(0,n.jsx)(i.p,{children:"O AWS IoT Core \xe9 o broker de mensagens que permite conectar dispositivos IoT com a nuvem AWS e seus diversos servi\xe7os. Atrav\xe9s dele, podemos criar, configurar e gerenciar nossos dispositivos."}),"\n",(0,n.jsx)(i.p,{children:"Atualmente suporta os seguintes protocolos de comunica\xe7\xe3o:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"MQTT"}),"\n",(0,n.jsx)(i.li,{children:"MQTT over WSS (Websockets Secure)"}),"\n",(0,n.jsx)(i.li,{children:"HTTPS"}),"\n",(0,n.jsx)(i.li,{children:"LoRaWAN"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Resumidamente, o servi\xe7o se baseia em:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Things:"})," Dispositivos (\u201ccoisas\u201d) que queremos conectar;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Jobs:"})," A\xe7\xf5es remotas que voc\xea pode agendar para realizar opera\xe7\xf5es nos seus dispositivos, como atualiza\xe7\xf5es de firmware;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Rules:"})," Regras atrav\xe9s das quais podemos direcionar as mensagens recebidas pelo broker para outros servi\xe7os da AWS, por exemplo, para armazenar dados no DynamoDB."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Seguran\xe7a:"})," onde \xe9 poss\xedvel gerenciar os certificados de autoriza\xe7\xe3o, pol\xedticas (policies) e papeis (roles) de autentica\xe7\xe3o."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"parte-1---criando-a-franzininho-na-aws",children:"Parte 1 - Criando a Franzininho na AWS"}),"\n",(0,n.jsx)(i.p,{children:"Para seguir o tutorial, voc\xea deve ter acesso ao console da AWS. Para come\xe7ar, vamos criar uma nova \u201ccoisa\u201d (thing) para representar nossa Franzininho na nuvem. Certifique-se que voc\xea est\xe1 na regi\xe3o mais pr\xf3xima antes de come\xe7ar, selecionando-a no menu do canto superior direito. Para o Brasil, a regi\xe3o \xe9 sa-east-1."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Na AWS, procure pelo servi\xe7o IoT Core (",(0,n.jsx)(i.code,{children:"Service > Internet of Things >  IoT core"}),") e crie uma nova \u201ccoisa\u201d em ",(0,n.jsx)(i.code,{children:"Manage > All devices > Things > Create new thing"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Vamos criar apenas um dispositivo (",(0,n.jsx)(i.em,{children:"Create a single thing"}),"), mas saiba que tamb\xe9m \xe9 poss\xedvel criar v\xe1rios de uma vez (",(0,n.jsx)(i.em,{children:"Create many things"}),"). Voc\xea precisar\xe1 especificar as propriedades desse dispositivo:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Thing name: o nome do seu dispositivo para identific\xe1-lo de forma \xfanica. Escolha sabiamente, pois essa propriedade n\xe3o pode ser alterada depois que o dispositivo \xe9 criado."}),"\n",(0,n.jsx)(i.li,{children:"Configura\xe7\xf5es adicionais: podem ser utilizadas para detalhar, organizar, gerenciar e pesquisar os dispositivos, como tipo, atributos ou grupos."}),"\n",(0,n.jsx)(i.li,{children:"Device shadow permite que o estado do seu dispositivo fique dispon\xedvel para outros servi\xe7os mesmo que ele n\xe3o esteja conectado."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Por enquanto, basta preencher o nome e prosseguir. Chamarei o meu carinhosamente de Franz."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Criar thing",src:o(49976).c+"",width:"808",height:"808"})}),"\n",(0,n.jsxs)(i.ol,{start:"3",children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Para conseguir se autenticar ao seriv\xe7o da AWS, cada dispositivo deve ter um certificado. Utilizaremos o gerado automaticamente (",(0,n.jsx)(i.em,{children:"Auto-generate a new certificate"}),"), mas voc\xea tamb\xe9m tem a op\xe7\xe3o de utilizar certificados pr\xf3prios."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Para gerenciar o n\xedvel de acesso desse certificado aos recursos, \xe9 preciso criar uma pol\xedtica de autoriza\xe7\xe3o (",(0,n.jsx)(i.em,{children:"policy"}),"), que \xe9 uma lista de a\xe7\xf5es permitidas ou proibidas para aquele certificado. Voc\xea pode criar uma pol\xedtica direto dessa aba, em ",(0,n.jsx)(i.em,{children:"Create policy"}),", ou pela barra de navega\xe7\xe3o do IoT Core em ",(0,n.jsx)(i.em,{children:"Security > Policies"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Uma ",(0,n.jsx)(i.em,{children:"policy"})," deve ter um nome e uma ou mais declara\xe7\xf5es (",(0,n.jsx)(i.em,{children:"statements"}),"). Cada declara\xe7\xe3o \xe9 composta por um ",(0,n.jsx)(i.strong,{children:"efeito"})," de uma ",(0,n.jsx)(i.strong,{children:"a\xe7\xe3o"})," \xe0 um ",(0,n.jsx)(i.strong,{children:"recurso"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["O ",(0,n.jsx)(i.strong,{children:"efeito"})," pode ser de permiss\xe3o (",(0,n.jsx)(i.em,{children:"allow"}),") ou proibi\xe7\xe3o (",(0,n.jsx)(i.em,{children:"deny"}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["As poss\xedveis ",(0,n.jsx)(i.strong,{children:"a\xe7\xf5es"})," desse servi\xe7o s\xe3o v\xe1rias, mas utilizaremos as seguintes principais:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"iot:Connect:"})," permite a conex\xe3o do dispositivo ao servi\xe7o;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"iot:Publish:"})," permite que o dispositivo publique mensagens no broker;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"iot:Receive:"})," permite que o dispositivo receba mensagem do broker;"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"iot:Subscribe:"})," permite que o dispositivo se inscreva nos t\xf3picos do broker."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["E o ",(0,n.jsx)(i.strong,{children:"recurso"})," \xe9 o nome do servi\xe7o da AWS que a a\xe7\xe3o vai se utilizar, neste caso ",(0,n.jsxs)(i.em,{children:["arn:aws:iot:",(0,n.jsx)(i.strong,{children:"region"}),":",(0,n.jsx)(i.strong,{children:"account-id"})]}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Voc\xea pode adicionar policies j\xe1 existentes utilizando a aba ",(0,n.jsx)(i.em,{children:"Policy Examples"})," ou cri\xe1-las manualmente. Para este exemplo, utilizei as seguintes pol\xedticas:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "iot:Connect",\n      "Resource": "arn:aws:iot:sa-east-1:<account-id>:client/${iot:Connection.Thing.ThingName}"\n    },\n    {\n      "Effect": "Allow",\n      "Action": "iot:Publish",\n      "Resource": "arn:aws:iot:sa-east-1:<account-id>:client/${iot:Connection.Thing.ThingName}"\n    },\n    {\n      "Effect": "Allow",\n      "Action": "iot:Subscribe",\n      "Resource": "arn:aws:iot:sa-east-1:<account-id>:topicfilter/${iot:Connection.Thing.ThingName}/*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": "iot:Publish",\n      "Resource": "arn:aws:iot:sa-east-1:<account-id>:topic/${iot:Connection.Thing.ThingName}/*"\n    },\n    {\n      "Effect": "Allow",\n      "Action": "iot:Receive",\n      "Resource": "arn:aws:iot:sa-east-1:<account-id>:topic/${iot:Connection.Thing.ThingName}/*"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:["Altere o ",(0,n.jsx)(i.code,{children:"<account-id>"})," para o n\xfamero da sua conta, dispon\xedvel no menu do canto superior direito."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Account ID",src:o(74868).c+"",width:"317",height:"423"})}),"\n",(0,n.jsxs)(i.ol,{start:"5",children:["\n",(0,n.jsx)(i.li,{children:"Por fim, baixe os arquivos de certificados e chaves que a AWS criou automaticamente para autenticar esse dispositivo. Este \xe9 o \xfanico momento que voc\xea conseguir\xe1 baixar as chaves para esse certificado, ent\xe3o guarde-as com carinho para utiliz\xe1-los no pr\xf3ximo passo."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"parte-2---conectando-a-franzininho-com-esp-idf",children:"Parte 2 - Conectando a Franzininho com ESP-IDF"}),"\n",(0,n.jsx)(i.p,{children:"Agora que temos nosso dispositivo configurado, precisamos escrever o firmware para conect\xe1-lo. A pr\xf3pria Espressif disponibiliza um SDK para comunica\xe7\xe3o com AWS IoT baseada no FreeRTOS. Para utilizar, basta clonar o reposit\xf3rio, preferencialmente direto na pasta de componentes do seu diret\xf3rio de instala\xe7\xe3o."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/espressif/esp-aws-iot <esp-dir-path>/esp-idf/components\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Dentro desse componente, j\xe1 s\xe3o disponibilizados alguns exemplos para utilizar com a AWS. Vamos come\xe7ar utilizando o exemplo b\xe1sico de MQTT em ",(0,n.jsx)(i.code,{children:"examples/mqtt/tls_mutual_auth"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Para configurar, utilizaremos o ",(0,n.jsx)(i.em,{children:"menuconfig"}),":"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Nas configura\xe7\xf5es do exemplo (",(0,n.jsx)(i.em,{children:"Example Configuration"}),"), insira o nome do dispositivo exatamente como foi criado na AWS (Franz, no meu caso) e o endpoint do broker MQTT, que est\xe1 dispon\xedvel no menu ",(0,n.jsx)(i.code,{children:"AWS IoT > Settings > Device endpoint"})," na sua conta do AWS. As demais configura\xe7\xf5es podem ser deixadas como padr\xe3o."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Device Endpoint",src:o(57664).c+"",width:"1136",height:"919"}),"\n",(0,n.jsx)(i.img,{alt:"Menuconfig",src:o(51516).c+"",width:"719",height:"146"})]}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Nas configura\xe7\xf5es de rede (",(0,n.jsx)(i.em,{children:"Example Connection Configuration"}),"), insira as configura\xe7\xf5es da sua rede Wi-Fi (SSID e senha)"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["O m\xe9todo padr\xe3o de autentica\xe7\xe3o com a AWS \xe9 utilizando credenciais PKI embarcadas no diret\xf3rio certs/. Lembra dos certificados que foram gerados automaticamente ao criar um dispositivo? \xc9 aqui que voc\xea vai coloc\xe1-los para embarcar no dispositivo. Copie o certificado, a chave ",(0,n.jsx)(i.strong,{children:"privada"})," e um dos certificados de root que voc\xea tinha armazenado anteriormente."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"cp certificate.pem.crt main/certs/client.crt\ncp private.pem.key main/certs/client.key\ncp AmazonRootCAx.pem main/certs/root_cert_auth.pem\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Com tudo configurado, \xe9 s\xf3 buildar e passar pra placa (siga o tutorial em ",(0,n.jsx)(i.a,{href:"https://docs.franzininho.com.br/docs/franzininho-wifi/exemplos-espidf/primeiros-passos",children:"Primeiros passos"}),"). Este exemplo se conecta ao broker MQTT, se sobrescreve no t\xf3pico ",(0,n.jsx)(i.code,{children:'CLIENT_IDENTIFIER "/example/topic\u201d'})," (Franz/example/topic, por exemplo) e publica mensagens de Hello World."]}),"\n",(0,n.jsx)(i.p,{children:"Sua conex\xe3o foi estabelecida com sucesso caso receba a mensagem a seguir:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"I (7329) coreMQTT: Connection accepted.\nI (7339) coreMQTT: Received MQTT CONNACK successfully from broker.\nI (7349) coreMQTT: MQTT connection established with the broker.\nI (7349) coreMQTT: MQTT connection successfully established with broker.\n"})}),"\n",(0,n.jsx)(i.h3,{id:"parte-3---monitorando-a-franzininho",children:"Parte 3 - Monitorando a Franzininho"}),"\n",(0,n.jsx)(i.p,{children:"Agora que a Franzininho est\xe1 conectado, podemos monitorar sua atividade pelo console da AWS."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Voc\xea pode ver as mensagens mais recentes em ",(0,n.jsx)(i.code,{children:"Manage > Things > Nome do seu dispositivo > Activity"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Menu Activity",src:o(6804).c+"",width:"1847",height:"858"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["E voc\xea tamb\xe9m pode interagir atrav\xe9s do MQTT Test Client, por exemplo, publicando no t\xf3pico ",(0,n.jsx)(i.code,{children:'CLIENT_IDENTIFIER "/example/topic\u201d'})," que estamos inscritos."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"MQTT Test Client",src:o(24020).c+"",width:"1486",height:"818"})}),"\n",(0,n.jsx)(i.p,{children:"A mensagem recebida pode ser vista na Franzininho:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:'I (17668) coreMQTT: Packet received. ReceivedBytes=66.\nI (17668) coreMQTT: De-serialized incoming PUBLISH packet: DeserializerResult=MQTTSuccess.\nI (17668) coreMQTT: State record updated. New state=MQTTPublishDone.\nI (17678) coreMQTT: Incoming QOS : 0.\nI (17678) coreMQTT: Incoming Publish Topic Name: Franz/example/topic matches subscribed topic.\nIncoming Publish message Packet Id is 0.\nIncoming Publish Message : {\n  "message": "Hello from AWS IoT console"\n}.\n'})}),"\n",(0,n.jsx)(i.p,{children:"E \xe9 isso, agora voc\xea pode brincar de Internet das Coisas com sua Franzininho WiFi utilizando a AWS!"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Autora"}),(0,n.jsx)(i.th,{children:(0,n.jsx)(i.a,{href:"https://github.com/carolcabral",children:"Ana Carolina Cabral "})})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Data:"}),(0,n.jsx)(i.td,{children:"07/01/2023"})]})})]})]})}function p(e={}){const{wrapper:i}={...(0,s.MN)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},95788:(e,i,o)=>{o.d(i,{MN:()=>d});var n=o(11504);function s(e,i,o){return i in e?Object.defineProperty(e,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[i]=o,e}function a(e,i){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?a(Object(o),!0).forEach((function(i){s(e,i,o[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))}))}return e}function c(e,i){if(null==e)return{};var o,n,s=function(e,i){if(null==e)return{};var o,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],i.indexOf(o)>=0||(s[o]=e[o]);return s}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],i.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var t=n.createContext({}),d=function(e){var i=n.useContext(t),o=i;return e&&(o="function"==typeof e?e(i):r(r({},i),e)),o},l={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},p=n.forwardRef((function(e,i){var o=e.components,s=e.mdxType,a=e.originalType,t=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(o),h=s,u=m["".concat(t,".").concat(h)]||m[h]||l[h]||a;return o?n.createElement(u,r(r({ref:i},p),{},{components:o})):n.createElement(u,r({ref:i},p))}));p.displayName="MDXCreateElement"},49976:(e,i,o)=>{o.d(i,{c:()=>n});const n=o.p+"assets/images/1-Create-thing-38ca8a9bbe949f6fd7bb29c1746f3175.png"},74868:(e,i,o)=>{o.d(i,{c:()=>n});const n=o.p+"assets/images/2-Account-id-4ac0bcea28543803571a6f1211af4495.png"},57664:(e,i,o)=>{o.d(i,{c:()=>n});const n=o.p+"assets/images/3.1-Device-endpoint-7109151e8d06555b5a4e706dc26d9d2f.png"},51516:(e,i,o)=>{o.d(i,{c:()=>n});const n=o.p+"assets/images/3.2-Menuconfig-49a52cb36a4edc9b1e00093697627052.png"},6804:(e,i,o)=>{o.d(i,{c:()=>n});const n=o.p+"assets/images/4-MenuActivity-37174ab453b4c48389ee792525762a0f.png"},24020:(e,i,o)=>{o.d(i,{c:()=>n});const n=o.p+"assets/images/5-MQTTTestClient-921841744c6883b3a1f1f80db1081d19.png"}}]);