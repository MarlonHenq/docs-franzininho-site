"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[9484],{41828:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var a=n(17624),r=n(95788);const i={id:"contadores",title:"Contador de pulsos externos",slug:"/franzininho-diy/exemplos-avr-libc/contadores",description:"Nesses tr\xeas exemplos vamos explorar gradativamente como fazer um contador de eventos externos no Franzininho DIY",authors:"Eduardo Due\xf1as",date:"05/05/2021",some_url:"https://github.com/EduardoDuenas"},s=void 0,t={id:"FranzininhoDIY/exemplos-avr-libc/contadores",title:"Contador de pulsos externos",description:"Nesses tr\xeas exemplos vamos explorar gradativamente como fazer um contador de eventos externos no Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/contadores.md",sourceDirName:"FranzininhoDIY/exemplos-avr-libc",slug:"/franzininho-diy/exemplos-avr-libc/contadores",permalink:"/docs/franzininho-diy/exemplos-avr-libc/contadores",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/contadores.md",tags:[],version:"current",frontMatter:{id:"contadores",title:"Contador de pulsos externos",slug:"/franzininho-diy/exemplos-avr-libc/contadores",description:"Nesses tr\xeas exemplos vamos explorar gradativamente como fazer um contador de eventos externos no Franzininho DIY",authors:"Eduardo Due\xf1as",date:"05/05/2021",some_url:"https://github.com/EduardoDuenas"},sidebar:"docs",previous:{title:"Timer 0 - Interrup\xe7\xe3o",permalink:"/docs/franzininho-diy/exemplos-avr-libc/timer0-int"},next:{title:"Instrumento musical com Buzzer",permalink:"/docs/franzininho-diy/exemplos-avr-libc/buzzer"}},d={},c=[{value:"<strong>Recursos necess\xe1rios</strong>",id:"recursos-necess\xe1rios",level:2},{value:"<strong>Contadores</strong>",id:"contadores",level:2},{value:"<strong>Contador_v1</strong>",id:"contador_v1",level:3},{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo",level:4},{value:"<strong>Montagem</strong>",id:"montagem",level:4},{value:"<strong>Compila\xe7\xe3o e upload</strong>",id:"compila\xe7\xe3o-e-upload",level:4},{value:"<strong>Resultado</strong>",id:"resultado",level:4},{value:"<strong>An\xe1lise</strong>",id:"an\xe1lise",level:4},{value:"<strong>Contador_v2</strong>",id:"contador_v2",level:3},{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo-1",level:4},{value:"<strong>Montagem</strong>",id:"montagem-1",level:4},{value:"<strong>Compila\xe7\xe3o e upload</strong>",id:"compila\xe7\xe3o-e-upload-1",level:4},{value:"<strong>Resultado</strong>",id:"resultado-1",level:4},{value:"<strong>An\xe1lise</strong>",id:"an\xe1lise-1",level:4},{value:"<strong>Contador_v3</strong>",id:"contador_v3",level:3},{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo-2",level:4},{value:"<strong>Montagem</strong>",id:"montagem-2",level:4},{value:"<strong>Compila\xe7\xe3o e upload</strong>",id:"compila\xe7\xe3o-e-upload-2",level:4},{value:"<strong>Resultado</strong>",id:"resultado-2",level:4},{value:"<strong>An\xe1lise</strong>",id:"an\xe1lise-2",level:4},{value:"<strong>Conclus\xe3o</strong>",id:"conclus\xe3o",level:2},{value:"Gloss\xe1rio",id:"gloss\xe1rio",level:2}];function l(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.MN)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"Nesses tr\xeas exemplos vamos explorar gradativamente como fazer um contador de eventos externos no Franzininho DIY. Vamos explorar as formas mais simples e as mais complexas de contar eventos e as vantagens de cada uma. Nesses exemplos vamos aprender a usar o timer e a fazer debounce, necess\xe1rio para lermos apenas eventos v\xe1lidos e n\xe3o ler o mesmo evento mais de uma vez."}),"\n",(0,a.jsx)(o.p,{children:"Boa pr\xe1tica!"}),"\n",(0,a.jsx)(o.h2,{id:"recursos-necess\xe1rios",children:(0,a.jsx)(o.strong,{children:"Recursos necess\xe1rios"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Franzininho DIY (com Micronucleos)"}),"\n",(0,a.jsx)(o.li,{children:"4 LEDs de 3mm"}),"\n",(0,a.jsx)(o.li,{children:"4 resistores de 200\u03a9"}),"\n",(0,a.jsx)(o.li,{children:"1 resistor de 10k\u03a9"}),"\n",(0,a.jsx)(o.li,{children:"1 chave tactil"}),"\n",(0,a.jsx)(o.li,{children:"7 jumpers macho-f\xeamea"}),"\n",(0,a.jsx)(o.li,{children:"7 jumpers macho-macho"}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"contadores",children:(0,a.jsx)(o.strong,{children:"Contadores"})}),"\n",(0,a.jsx)(o.p,{children:"Temos tr\xeas exemplos de contadores da vers\xe3o 1 a 3, e aumentando a complexidade do c\xf3digo e dos recursos utilizados."}),"\n",(0,a.jsx)(o.h3,{id:"contador_v1",children:(0,a.jsx)(o.strong,{children:"Contador_v1"})}),"\n",(0,a.jsx)(o.p,{children:"Nesse exemplo vamos utilizar loops para fazer a verifica\xe7\xe3o de eventos. Essa forma de se fazer a contagem, apesar de ser mais simples de se entender e criar, \xe9 pouco eficiente, tanto a n\xedvel de processamento, quanto ao de energia."}),"\n",(0,a.jsxs)(o.p,{children:["O programa \xe9 um c\xf3digo em linguagem C e faz uso dos nomes dos registradores definidos na biblioteca ",(0,a.jsx)(o.code,{children:"avr/io.h"}),". Para melhor entendimento recomendo ler os coment\xe1rios do c\xf3digo e o datasheet do ATtiny85."]}),"\n",(0,a.jsx)(o.h4,{id:"c\xf3digo",children:(0,a.jsx)(o.strong,{children:"C\xf3digo"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-c",children:"/**\n * @file main.c\n * @author Eduardo Due\xf1as\n * @brief Exemplo de contador de eventos\n * @version 1.0\n * @date 06/04/2021\n *\n * \xfaltima modifica\xe7\xe3o: 05/05/2021\n */\n#include <avr/io.h>\n\n#define F_CPU 16500000L        // Frequ\xeancia de CLK\n\n// Macros\n#define setBit(valor,bit)      (valor |= (1 << bit))\n#define clearBit(valor,bit)    (valor &= ~(1 << bit))\n#define toogleBit(valor,bit)   (valor ^= (1 << bit))\n#define testBit(valor,bit)     (valor & (1 << bit))\n\n// Debounce da chave t\xe1ctil para desconsiderarmos ru\xeddo e bouncing do bot\xe3o\nchar debounce(int pino) {\n    unsigned int i;\n    for (i = 0; i < 20000; i++) {   // Testa o pino v\xe1rias vezes para evitar leituras erradas\n      if (!(testBit(PINB, pino))) { // Testa se o pino deixou de ser 1\n          return 0;            // Se sim, retorna falso\n      }\n    }\n    return 1;                  // Retorna verdadeiro\n}\n\nint main(void) {\n    // Configura\xe7\xe3o de PORTB\n    clearBit(DDRB, PB0);       // Configura PB0 como entrada\n    setBit(DDRB, PB1);         // Configura PB1 como saida\n    setBit(DDRB, PB2);         // Configura PB2 como saida\n    setBit(DDRB, PB3);         // Configura PB3 como saida\n    setBit(DDRB, PB4);         // Configura PB4 como saida\n\n    PORTB &= 0xE1;             // Manda 0 para PB[4:1]\n\n    unsigned char count = 0;\n\n    for (;;) {                    // loop infinito\n        if (testBit(PINB, PB0)) { // Testa se PB0 \xe9 1\n            if (debounce(PB0)) {  // Verifica se realmente foi um aperto de bot\xe3o\n              count++;            // Se sim, incrementa o contador\n              while (testBit(PINB, PB0)) {} // Espera o bot\xe3o parar de ser pressionado\n            }\n        }\n        count = count % 0x10;     // Limpa o overflow do contador\n        PORTB = ((PORTB & 0xE1) | (count << 1)); // Manda o contador para PB[4:1]\n    }\n}\n"})}),"\n",(0,a.jsx)(o.h4,{id:"montagem",children:(0,a.jsx)(o.strong,{children:"Montagem"})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"circuito contador",src:n(44663).c+"",width:"2589",height:"1152"})}),"\n",(0,a.jsx)(o.p,{children:"Como mostrado na imagem, os LEDs s\xe3o ligados nas sa\xeddas PortB[4:1] e o bot\xe3o no PortB[0]."}),"\n",(0,a.jsx)(o.h4,{id:"compila\xe7\xe3o-e-upload",children:(0,a.jsx)(o.strong,{children:"Compila\xe7\xe3o e upload"})}),"\n",(0,a.jsxs)(o.p,{children:["Para compilar o programa, assim como nos programas anteriores, acesse a pasta do exemplo e em seguida o comando ",(0,a.jsx)(o.code,{children:"make"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"exemplos-avr-libc/exemplos/contador$ make\n"})}),"\n",(0,a.jsx)(o.p,{children:"Como j\xe1 temos o makerfile configurado na pasta, ser\xe1 feita compila\xe7\xe3o e deve aparecer a seguinte mensagem:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n"})}),"\n",(0,a.jsx)(o.p,{children:"Conecte a placa em uma entrada USB ou, caso a Franzininho j\xe1 esteja conectada, aperte o bot\xe3o de reset para iniciar o upload."}),"\n",(0,a.jsx)(o.h4,{id:"resultado",children:(0,a.jsx)(o.strong,{children:"Resultado"})}),"\n",(0,a.jsx)(o.p,{children:"Os LEDs devem mostrar a contagem de apertos do bot\xe3o de forma bin\xe1ria resetando em 0x10 ou quando resetada a placa."}),"\n",(0,a.jsx)(o.h4,{id:"an\xe1lise",children:(0,a.jsx)(o.strong,{children:"An\xe1lise"})}),"\n",(0,a.jsxs)(o.p,{children:["Esse c\xf3digo \xe9 de simples compreens\xe3o usando apenas um ",(0,a.jsx)(o.code,{children:"for"})," para checar continuamente se o bot\xe3o foi apertado, chamando uma fun\xe7\xe3o debounce caso a leitura seja 1, incrementando o contador se for confirmado que a leitura \xe9 v\xe1lida, esperando  o bot\xe3o ser solto e mandando o valor para as sa\xeddas."]}),"\n",(0,a.jsx)(o.p,{children:"De forma geral esse c\xf3digo funciona, mas h\xe1 muito desperd\xedcio de processamento, pois h\xe1 muitos momentos que o processador n\xe3o est\xe1 fazendo nada, apenas esperando algo acontecer ou um certo tempo passar, nesse tempo ele poderia estar fazendo outra tarefas ou ficar em modo econ\xf4mico de energia, que veremos nos pr\xf3ximos exemplos."}),"\n",(0,a.jsx)(o.h3,{id:"contador_v2",children:(0,a.jsx)(o.strong,{children:"Contador_v2"})}),"\n",(0,a.jsx)(o.p,{children:"Nesse exemplo vamos come\xe7ar a usar interrup\xe7\xf5es para ler os pulsos. Vamos ver quais s\xe3o as vantagens desse m\xe9todo e o que pode ser melhorado."}),"\n",(0,a.jsxs)(o.p,{children:["O programa \xe9 um c\xf3digo em linguagem C e faz uso dos nomes dos registradores definidos na biblioteca ",(0,a.jsx)(o.code,{children:"avr/io.h"})," e a biblioteca ",(0,a.jsx)(o.code,{children:"avr/interrupt.h"}),". Para melhor entendimento recomendo ler os coment\xe1rios do c\xf3digo e o datasheet do ATtiny85."]}),"\n",(0,a.jsx)(o.h4,{id:"c\xf3digo-1",children:(0,a.jsx)(o.strong,{children:"C\xf3digo"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-c",children:"/**\n * @file main.c\n * @author Eduardo Due\xf1as\n * @brief Exemplo de contador de eventos com tratamento por interrup\xe7\xe3o\n * @version 1.0\n * @date 19/04/2021\n *\n * \xfaltima modifica\xe7\xe3o: 05/05/2021\n *\n * O programa \xe9 um desenvolvimento em cima do contador uma com altera\xe7\xf5es na leitura do pulso para leitura por interrup\xe7\xe3o,\n * possibilitando o uso do microcontrolador para outras fun\xe7\xf5es junto do contador\n */\n#include <avr/io.h>\n#include <avr/interrupt.h>\n\n#define F_CPU 16500000L        // Frequ\xeancia de CLK\n\n// Macros\n#define setBit(valor,bit)      (valor |= (1 << bit))\n#define clearBit(valor,bit)    (valor &= ~(1 << bit))\n#define toogleBit(valor,bit)   (valor ^= (1 << bit))\n#define testBit(valor,bit)     (valor & (1 << bit))\n\nvolatile unsigned char count = 0;   // Contador\n\nISR(INT0_vect) {\n  cli();                       // Desabilita interrup\xe7\xf5es globais durante o tratamento da interrup\xe7\xe3o\n  if (debounce(PB2)) {         // Se o bot\xe3o foi realmente apertado incrementa cont e manda para os LEDs\n    count++;                   // Incrementa o contador\n    count %= 0x10;             // Limpa o excesso\n    PORTB = ((PORTB & 0xE7) | ((count >> 2) << 3)); // Manda os dois bits mais significativos de cont para PB[4:3]\n    PORTB = ((PORTB & 0xFC) | (count & 0x03));      // Manda os dois bits menos significativos de cont para PB[1:0]\n  }\n  sei();                       // Reabilita interrup\xe7\xf5es globais\n}\n\n// Debounce da chave tactil para desconsiderarmos ru\xeddo e bouncing do bot\xe3o\nchar debounce(int pino) {\n  unsigned int i;\n\n  for (i = 0; i < 20000; i++) {   // Testa o pino v\xe1rias vezes para evitar leituras erradas\n    if (!(testBit(PINB, pino))) { // Testa se o pino deixou de ser 1\n      return 0;                   // Se sim, retorna falso\n    }\n  }\n\n  return 1;                       // Retorna verdadeiro\n}\n\nint main(void) {\n    // Configura\xe7\xe3o de PORTB\n    clearBit(DDRB, PB2);       // Configura PB2 como entrada\n    setBit(DDRB, PB0);         // Configura PB0 como sa\xedda\n    setBit(DDRB, PB1);         // Configura PB1 como sa\xedda\n    setBit(DDRB, PB3);         // Configura PB3 como sa\xedda\n    setBit(DDRB, PB4);         // Configura PB4 como sa\xedda\n\n    PORTB &= 0xE4;             // Manda 0 para PB[4:3] e PB[1:0]\n\n    //Configura\xe7\xe3o de Interrup\xe7\xe3o externa\n    GIMSK |= (1 << INT0);      // Habilita interrup\xe7\xf5es externas no INT0\n    MCUCR |= 0x03;             // Seta interrup\xe7\xf5es para borda de subida\n    sei();                     // Habilita interrup\xe7\xf5es globais\n\n\n    for (;;) {                 // Loop infinito\n        // Aqui voc\xea pode colocar outra aplica\xe7\xe3o para rodar simultaneamente ao contador\n    }\n}\n"})}),"\n",(0,a.jsx)(o.h4,{id:"montagem-1",children:(0,a.jsx)(o.strong,{children:"Montagem"})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Circuito contador V2",src:n(1424).c+"",width:"2589",height:"1185"})}),"\n",(0,a.jsx)(o.p,{children:"Como mostrado na imagem, os LEDs s\xe3o ligados nas sa\xeddas PORTB[4:3] e [1:0] e o bot\xe3o na entrada PORTB[2]."}),"\n",(0,a.jsx)(o.h4,{id:"compila\xe7\xe3o-e-upload-1",children:(0,a.jsx)(o.strong,{children:"Compila\xe7\xe3o e upload"})}),"\n",(0,a.jsxs)(o.p,{children:["Para compilar o programa, assim como nos programas anteriores, acesse a pasta do exemplo e em seguida o comando ",(0,a.jsx)(o.code,{children:"make"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"exemplos-avr-libc/exemplos/contador_v2$ make\n"})}),"\n",(0,a.jsx)(o.p,{children:"Como j\xe1 temos o makerfile configurado na pasta, ser\xe1 feita compila\xe7\xe3o e deve aparecer a seguinte mensagem:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n"})}),"\n",(0,a.jsx)(o.p,{children:"Conecte a placa em uma entrada USB ou, caso a Franzininho j\xe1 esteja conectada, aperte o bot\xe3o de reset para iniciar o upload."}),"\n",(0,a.jsx)(o.h4,{id:"resultado-1",children:(0,a.jsx)(o.strong,{children:"Resultado"})}),"\n",(0,a.jsx)(o.p,{children:"Assim como no \xfaltimo exemplo, os LEDs devem mostrar a contagem de eventos, mostrando em bin\xe1rio at\xe9 15."}),"\n",(0,a.jsx)(o.h4,{id:"an\xe1lise-1",children:(0,a.jsx)(o.strong,{children:"An\xe1lise"})}),"\n",(0,a.jsx)(o.p,{children:"Esse exemplo tem um c\xf3digo um pouco mais complexo, podendo fazer diferentes tarefas ao mesmo tempo com o uso de interrup\xe7\xf5es."}),"\n",(0,a.jsx)(o.p,{children:"Interrup\xe7\xf5es s\xe3o, de forma simples, instru\xe7\xf5es de alta prioridade, que fazem o processador parar o que est\xe1 fazendo, guardar o estado atual, executar as instru\xe7\xf5es da interrup\xe7\xe3o e voltar para o estado anterior, continuando normalmente com o programa. Elas s\xe3o extremamente \xfateis para tarefas que precisam de uma precis\xe3o de tempo alta ou eventos ass\xedncronos."}),"\n",(0,a.jsxs)(o.p,{children:["Por\xe9m, apesar do exemplo dois fazer uso de interrup\xe7\xf5es, ele passa muito tempo nela, o que atrasa o andamento de um poss\xedvel outro programa que estaria rodando na ",(0,a.jsx)(o.code,{children:"main"}),". Por\xe9m, grande parte do tempo que \xe9 gasto na interrup\xe7\xe3o est\xe1 atrelado ao debounce, que consiste basicamente de checagens em certos per\xedodos de tempo. Podemos ent\xe3o otimizar o uso do processador saindo da interrup\xe7\xe3o entre as checagens, uma vez que ele est\xe1 apenas esperando para fazer o pr\xf3ximo teste. Veremos isso e o modo de economia de energia no contador_v3."]}),"\n",(0,a.jsx)(o.h3,{id:"contador_v3",children:(0,a.jsx)(o.strong,{children:"Contador_v3"})}),"\n",(0,a.jsx)(o.p,{children:"Nesse exemplo vamos otimizar o processamento no c\xf3digo utilizando interrup\xe7\xf5es para as esperas do debounce, tamb\xe9m veremos uma alternativa para diminuir o consumo de energia em momentos em que o processador est\xe1 esperando algum evento, caso voc\xea n\xe3o precise de outra rotina."}),"\n",(0,a.jsxs)(o.p,{children:["Esse programa \xe9 um c\xf3digo em linguagem C e faz uso dos nomes dos registradores definidos na biblioteca ",(0,a.jsx)(o.code,{children:"avr/io.h"})," e a biblioteca ",(0,a.jsx)(o.code,{children:"avr/interrupt.h"}),". Para melhor entendimento recomendo ler os coment\xe1rios do c\xf3digo e o datasheet do ATtiny85."]}),"\n",(0,a.jsx)(o.h4,{id:"c\xf3digo-2",children:(0,a.jsx)(o.strong,{children:"C\xf3digo"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-c",children:"/**\n * @file main.c\n * @author Eduardo Due\xf1as\n * @brief Exemplo de contador de eventos com tratamento por interrup\xe7\xe3o\n * @version 1.0\n * @date 20/04/2021\n *\n * \xfaltima modifica\xe7\xe3o: 05/05/2021\n *\n * O programa \xe9 um desenvolvimento em cima do contador_v2 uma com altera\xe7\xf5es no loop infinito que\n * havia ficado em aberto para outras aplica\xe7\xf5es para o modo sleep para diminuir o gasto de energia e\n * alterar o debounce para interrup\xe7\xe3o, aumentando a efici\xeancia do c\xf3digo. O c\xf3digo pode ser usado com\n * outras aplica\xe7\xf5es no lugar do sleep.\n */\n\n#include <avr/io.h>\n#include <avr/interrupt.h>\n#include <avr/sleep.h>\n\n#define F_CPU 16500000L        // Frequ\xeancia de CLK\n\n#define setBit(valor,bit)      (valor |= (1 << bit))\n#define clearBit(valor,bit)    (valor &= ~(1 << bit))\n#define toogleBit(valor,bit)   (valor ^= (1 << bit))\n#define testBit(valor,bit)     (valor & (1 << bit))\n\nvolatile unsigned char count = 0; // Contador\nvolatile unsigned char test = 0;  // Quantidade de testes do debounce\n\nunsigned int pin = 0;             // Pino do debounce\n\n// Debounce da chave tactil para desconsiderarmos ruido e bouncing do bot\xe3o\nchar debounce(int pino) {\n    pin = pino;\n    // Coloca um timer para cada 1000 ciclos de clk para testar a chave tactil\n    TCNT0 = 131;               // Overflow-(ciclos/Prescaler)=256-(1000/8)=131\n    setBit(TIMSK, TOIE0);      // Habilita interrup\xe7\xf5es por timer overflow\n    test = 0;                  // Limpa test\n}\n\nISR(INT0_vect) {               // Tratamento de interrup\xe7\xf5es de pulso externo\n    clearBit(GIMSK, INT0);     // Desabilita interrup\xe7\xf5es do INT0 durante o tratamento da interrup\xe7\xe3o\n    debounce(PB2);\n}\n\nISR(TIMER0_OVF_vect) {         // Tratamento de interrup\xe7\xf5es de timer overflow\n    TCNT0 = 131;               // Seta denovo o timer para 131\n    if (testBit(PINB, pin)) {  // Se o bot\xe3o continua apertado\n        test++;                // Incrementa test\n        if (test >= 20) {      // Se testou o suficiente (no caso 20 vezes)\n            count++;           // Incrementa o contador\n            count %= 0x10;     // Limpa o excesso\n            PORTB = ((PORTB & 0xE7) | ((count >> 2) << 3)); // Manda os dois bits mais significativos de cont para PB[4:3]\n            PORTB = ((PORTB & 0xFC) | (count & 0x03));  // Manda os dois bits menos significativos de cont para PB[1:0]\n            clearBit(TIMSK, TOIE0); // Desabilita interrup\xe7\xf5es por timer overflow\n            setBit(GIMSK, INT0);    // Reabilita interrup\xe7\xf5es externas no INT0\n        }\n    }\n    else {\n      clearBit(TIMSK, TOIE0); // Desabilita interrup\xe7\xf5es por timer overflow\n      setBit(GIMSK, INT0);    // Reabilita interrup\xe7\xf5es externas no INT0\n    }\n}\n\nint main(void) {\n    // Configura\xe7\xe3o de PORTB\n    clearBit(DDRB, PB2);       // Configura PB2 como entrada\n    setBit(DDRB, PB0);         // Configura PB0 como saida\n    setBit(DDRB, PB1);         // Configura PB1 como saida\n    setBit(DDRB, PB3);         // Configura PB3 como saida\n    setBit(DDRB, PB4);         // Configura PB4 como saida\n\n    PORTB &= 0xE4;             // Manda 0 para PB[4:3] e PB[1:0]\n\n    // Configura\xe7\xe3o do timer\n    TCCR0A = 0x00;             // Modo Normal\n    TCCR0B = 0x00;\n    TCCR0B |= 0x02;            // Prescaler de 8\n\n\n    // Configura\xe7\xe3o do modo sleep\n    clearBit(MCUCR, SM0);      // Configura sleep mode como idle\n    clearBit(MCUCR, SM1);\n\n    // Configura\xe7\xe3o de Interrup\xe7\xe3o externa\n    setBit(GIMSK, INT0);       // Habilita interrup\xe7\xf5es externas no INT0\n    MCUCR |= 0x03;             // Seta interrup\xe7\xf5es para borda de subida\n    sei();                     // Habilita interrup\xe7\xf5es globais\n\n    for (;;) {                 // Loop infinito\n      // Aqui voc\xea pode colocar outra aplica\xe7\xe3o para rodar simultaneamente ao contador no lugar do sleep\n      sleep_mode();            // Entra no sleep mode\n    }\n}\n"})}),"\n",(0,a.jsx)(o.h4,{id:"montagem-2",children:(0,a.jsx)(o.strong,{children:"Montagem"})}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.img,{alt:"Circuito contador V3",src:n(48276).c+"",width:"2589",height:"1185"})}),"\n",(0,a.jsx)(o.p,{children:"Como mostrado na imagem, os LEDs s\xe3o ligados nas sa\xeddas PORTB[4:3] e [1:0] e o bot\xe3o na entrada PORTB[2], assim como no exemplo dois."}),"\n",(0,a.jsx)(o.h4,{id:"compila\xe7\xe3o-e-upload-2",children:(0,a.jsx)(o.strong,{children:"Compila\xe7\xe3o e upload"})}),"\n",(0,a.jsxs)(o.p,{children:["Para compilar o programa, assim como nos programas anteriores, acesse a pasta do exemplo e em seguida o comando ",(0,a.jsx)(o.code,{children:"make"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"exemplos-avr-libc/exemplos/contador_v3$ make\n"})}),"\n",(0,a.jsx)(o.p,{children:"Como j\xe1 temos o makerfile configurado na pasta, ser\xe1 feita compila\xe7\xe3o e deve aparecer a seguinte mensagem:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{children:"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n"})}),"\n",(0,a.jsx)(o.p,{children:"Conecte a placa em uma entrada USB ou, caso a Franzininho j\xe1 esteja conectada, aperte o bot\xe3o de reset para iniciar o upload."}),"\n",(0,a.jsx)(o.h4,{id:"resultado-2",children:(0,a.jsx)(o.strong,{children:"Resultado"})}),"\n",(0,a.jsx)(o.p,{children:"Assim como nos exemplos anteriores, os LEDs do circuito devem mostrar a contagem de pulsos at\xe9 15 em bin\xe1rio."}),"\n",(0,a.jsx)(o.h4,{id:"an\xe1lise-2",children:(0,a.jsx)(o.strong,{children:"An\xe1lise"})}),"\n",(0,a.jsx)(o.p,{children:"Neste c\xf3digo adicionamos um pouco mais de complexidade, aumentando o uso de interrup\xe7\xf5es, al\xe9m do uso do timer e do modo Sleep."}),"\n",(0,a.jsx)(o.p,{children:"O modo Sleep \xe9 um mode de opera\xe7\xe3o no qual, de forma b\xe1sica, se desliga alguns m\xf3dulos do microcontrolador at\xe9 que alguma interrup\xe7\xe3o ocorra, o que pode diminuir o consumo de energia de forma dr\xe1stica. No caso do c\xf3digo do exemplo, utilizamos o modo Idle que no ATtiny85 desliga os CLKs da CPU e FLASH, podendo se desligar opcionalmente o CLK do ADC."}),"\n",(0,a.jsxs)(o.p,{children:["O timer nesse exemplo est\xe1 configurado como em modo normal, com prescaler de 8, o que faz ele incrementar o timer uma vez a cada 8 ciclos de CLK. A forma adotada para a contagem do tempo foi a interrup\xe7\xe3o por timer overflow, ou seja, sempre que o valor m\xe1ximo do timer for atingido ele gera uma interrup\xe7\xe3o. Para conseguirmos os 1000 ciclos que queremos calculamos ",(0,a.jsx)(o.code,{children:"overflow -(ciclos/Prescaler)"}),", que nos d\xe1 ",(0,a.jsx)(o.code,{children:"256 -(1000/8) = 131"}),", e setamos o valor do timer nesse valor para que falte o tempo que desejamos para a interrup\xe7\xe3o."]}),"\n",(0,a.jsx)(o.p,{children:"O uso de interrup\xe7\xf5es do timer para o debounce diminui consideravelmente o tempo que o processador consome em execu\xe7\xe3o do tratamento do evento, o que melhora o processamento das rotinas paralelas, ou no caso, permite que o processador fique mais tempo no modo Sleep, diminuindo o consumo de energia ou em caso de alimenta\xe7\xe3o por baterias, aumenta a vida \xfatil da da fonte."}),"\n",(0,a.jsx)(o.h2,{id:"conclus\xe3o",children:(0,a.jsx)(o.strong,{children:"Conclus\xe3o"})}),"\n",(0,a.jsx)(o.p,{children:"De forma geral, todas as tr\xeas formas de se fazer o c\xf3digo funcionam, e ao servirem seu prop\xf3sito n\xe3o est\xe3o erradas. Por\xe9m, como programadores, principalmente de sistemas embarcados, \xe9 uma \xf3tima pr\xe1tica conseguirmos fazer um c\xf3digo eficiente, de forma a n\xe3o se tornar um empecilho no futuro, seja por usarmos muita mem\xf3ria ou deixarmos o processador muito lento e termos que refazer algo pronto do zero. Por isso \xe9 importante saber quais s\xe3o as vantagens e desvantagens de cada m\xe9todo para podermos sempre utilizar o que melhor se adequa \xe0s nossas necessidades."}),"\n",(0,a.jsx)(o.h2,{id:"gloss\xe1rio",children:"Gloss\xe1rio"}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsx)(o.li,{children:"Setar: colocar um novo valor em um registrador. Para um bit \xe9 convencionado setar, muda-lo para valor 1, e clear (limpar), muda-lo para valor 0"}),"\n",(0,a.jsx)(o.li,{children:"Chave tactil/Push button: bot\xe3o"}),"\n",(0,a.jsx)(o.li,{children:"Debounce: corre\xe7\xe3o do efeito de bouncing (efeito que ocorre em chaves que fazem r\xe1pidas conex\xf5es e desconex\xf5es antes de se estabilizar)"}),"\n",(0,a.jsx)(o.li,{children:"Resetar: reiniciar"}),"\n",(0,a.jsx)(o.li,{children:"Timer: circuito eletr\xf4nico dedicado a contagem de tempo"}),"\n"]}),"\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Autor"}),(0,a.jsx)(o.th,{children:(0,a.jsx)(o.a,{href:"https://github.com/EduardoDuenas",children:"Eduardo Due\xf1as"})})]})}),(0,a.jsx)(o.tbody,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Data:"}),(0,a.jsx)(o.td,{children:"05/05/2020"})]})})]})]})}function m(e={}){const{wrapper:o}={...(0,r.MN)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},95788:(e,o,n)=>{n.d(o,{MN:()=>c});var a=n(11504);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function t(e,o){if(null==e)return{};var n,a,r=function(e,o){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var o=a.useContext(d),n=o;return e&&(n="function"==typeof e?e(o):s(s({},o),e)),n},l={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=t(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,g=u["".concat(d,".").concat(p)]||u[p]||l[p]||i;return n?a.createElement(g,s(s({ref:o},m),{},{components:n})):a.createElement(g,s({ref:o},m))}));m.displayName="MDXCreateElement"},44663:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/Exemplo_Contador_Circuito-a726ec616f1978417fe735405b5dadd9.png"},1424:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/Exemplo_Contador_Circuito_v2-cb27b793816afd0d2a3b33b95b9e734f.png"},48276:(e,o,n)=>{n.d(o,{c:()=>a});const a=n.p+"assets/images/Exemplo_Contador_Circuito_v3-cb27b793816afd0d2a3b33b95b9e734f.png"}}]);