(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return i})),a.d(o,"metadata",(function(){return s})),a.d(o,"toc",(function(){return c})),a.d(o,"default",(function(){return m}));var n=a(3),t=a(7),r=(a(0),a(132)),i={id:"0x06_contadores",title:"06 - Contador de pulsos externos",slug:"/franzininho-diy/exemplos-avr-libc/0x06_contadores",description:"Nesses tr\xeas exemplos vamos explorar gradativamente como fazer um contador de eventos externos no Franzininho DIY",authors:"Eduardo Due\xf1as",date:"05/05/2021",some_url:"https://github.com/EduardoDuenas"},s={unversionedId:"FranzininhoDIY/exemplos-avr-libc/0x06_contadores",id:"FranzininhoDIY/exemplos-avr-libc/0x06_contadores",isDocsHomePage:!1,title:"06 - Contador de pulsos externos",description:"Nesses tr\xeas exemplos vamos explorar gradativamente como fazer um contador de eventos externos no Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/0x06_contadores.md",slug:"/franzininho-diy/exemplos-avr-libc/0x06_contadores",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/0x06_contadores",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/master/docs/FranzininhoDIY/exemplos-avr-libc/0x06_contadores.md",version:"current",sidebar:"docs",previous:{title:"05 - Timer 0 - Interrup\xe7\xe3o",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/0x05_timer0_int"},next:{title:"07 - Instrumento musical com Buzzer",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/0x07_buzzer"}},c=[{value:"<strong>Recursos necess\xe1rios</strong>",id:"recursos-necess\xe1rios",children:[]},{value:"<strong>Contadores</strong>",id:"contadores",children:[{value:"<strong>Contador_v1</strong>",id:"contador_v1",children:[]},{value:"<strong>Contador_v2</strong>",id:"contador_v2",children:[]},{value:"<strong>Contador_v3</strong>",id:"contador_v3",children:[]}]},{value:"<strong>Conclus\xe3o</strong>",id:"conclus\xe3o",children:[]},{value:"Gloss\xe1rio",id:"gloss\xe1rio",children:[]}],d={toc:c};function m(e){var o=e.components,i=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,i,{components:o,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nesses tr\xeas exemplos vamos explorar gradativamente como fazer um contador de eventos externos no Franzininho DIY. Vamos explorar as formas mais simples e as mais complexas de contar eventos e as vantagens de cada uma. Nesses exemplos vamos aprender a usar o timer e a fazer debounce, necess\xe1rio para lermos apenas eventos v\xe1lidos e n\xe3o ler o mesmo evento mais de uma vez."),Object(r.b)("p",null,"Boa pr\xe1tica!"),Object(r.b)("h2",{id:"recursos-necess\xe1rios"},Object(r.b)("strong",{parentName:"h2"},"Recursos necess\xe1rios")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Franzininho DIY (com Micronucleos)"),Object(r.b)("li",{parentName:"ul"},"4 LEDs de 3mm"),Object(r.b)("li",{parentName:"ul"},"4 resistores de 200\u03a9"),Object(r.b)("li",{parentName:"ul"},"1 resistor de 10k\u03a9"),Object(r.b)("li",{parentName:"ul"},"1 chave tactil"),Object(r.b)("li",{parentName:"ul"},"7 jumpers macho-f\xeamea"),Object(r.b)("li",{parentName:"ul"},"7 jumpers macho-macho")),Object(r.b)("h2",{id:"contadores"},Object(r.b)("strong",{parentName:"h2"},"Contadores")),Object(r.b)("p",null,"Temos tr\xeas exemplos de contadores da vers\xe3o 1 a 3, e aumentando a complexidade do c\xf3digo e dos recursos utilizados."),Object(r.b)("h3",{id:"contador_v1"},Object(r.b)("strong",{parentName:"h3"},"Contador_v1")),Object(r.b)("p",null,"Nesse exemplo vamos utilizar loops para fazer a verifica\xe7\xe3o de eventos. Essa forma de se fazer a contagem, apesar de ser mais simples de se entender e criar, \xe9 pouco eficiente, tanto a n\xedvel de processamento, quanto ao de energia."),Object(r.b)("p",null,"O programa \xe9 um c\xf3digo em linguagem C e faz uso dos nomes dos registradores definidos na biblioteca ",Object(r.b)("inlineCode",{parentName:"p"},"avr/io.h"),". Para melhor entendimento recomendo ler os coment\xe1rios do c\xf3digo e o datasheet do ATtiny85."),Object(r.b)("h4",{id:"c\xf3digo"},Object(r.b)("strong",{parentName:"h4"},"C\xf3digo")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"/**\n * @file main.c\n * @author Eduardo Due\xf1as\n * @brief Exemplo de contador de eventos\n * @version 1.0\n * @date 06/04/2021\n *\n * \xfaltima modifica\xe7\xe3o: 05/05/2021\n */\n#include <avr/io.h>\n\n#define F_CPU 16500000L        // Frequ\xeancia de CLK\n\n// Macros\n#define setBit(valor,bit)      (valor |= (1 << bit))\n#define clearBit(valor,bit)    (valor &= ~(1 << bit))\n#define toogleBit(valor,bit)   (valor ^= (1 << bit))\n#define testBit(valor,bit)     (valor & (1 << bit))\n\n// Debounce da chave t\xe1ctil para desconsiderarmos ru\xeddo e bouncing do bot\xe3o\nchar debounce(int pino) {\n    unsigned int i;\n    for (i = 0; i < 20000; i++) {   // Testa o pino v\xe1rias vezes para evitar leituras erradas\n      if (!(testBit(PINB, pino))) { // Testa se o pino deixou de ser 1\n          return 0;            // Se sim, retorna falso\n      }\n    }\n    return 1;                  // Retorna verdadeiro\n}\n\nint main(void) {\n    // Configura\xe7\xe3o de PORTB\n    clearBit(DDRB, PB0);       // Configura PB0 como entrada\n    setBit(DDRB, PB1);         // Configura PB1 como saida\n    setBit(DDRB, PB2);         // Configura PB2 como saida\n    setBit(DDRB, PB3);         // Configura PB3 como saida\n    setBit(DDRB, PB4);         // Configura PB4 como saida\n\n    PORTB &= 0xE1;             // Manda 0 para PB[4:1]\n\n    unsigned char count = 0;\n\n    for (;;) {                    // loop infinito\n        if (testBit(PINB, PB0)) { // Testa se PB0 \xe9 1\n            if (debounce(PB0)) {  // Verifica se realmente foi um aperto de bot\xe3o\n              count++;            // Se sim, incrementa o contador\n              while (testBit(PINB, PB0)) {} // Espera o bot\xe3o parar de ser pressionado\n            }\n        }\n        count = count % 0x10;     // Limpa o overflow do contador\n        PORTB = ((PORTB & 0xE1) | (count << 1)); // Manda o contador para PB[4:1]\n    }\n}\n")),Object(r.b)("h4",{id:"montagem"},Object(r.b)("strong",{parentName:"h4"},"Montagem")),Object(r.b)("p",null,Object(r.b)("img",{alt:"circuito contador",src:a(255).default})),Object(r.b)("p",null,"Como mostrado na imagem, os LEDs s\xe3o ligados nas sa\xeddas PortB","[4:1]"," e o bot\xe3o no PortB","[0]","."),Object(r.b)("h4",{id:"compila\xe7\xe3o-e-upload"},Object(r.b)("strong",{parentName:"h4"},"Compila\xe7\xe3o e upload")),Object(r.b)("p",null,"Para compilar o programa, assim como nos programas anteriores, acesse a pasta do exemplo e em seguida o comando ",Object(r.b)("inlineCode",{parentName:"p"},"make"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"exemplos-avr-libc/exemplos/contador$ make\n")),Object(r.b)("p",null,"Como j\xe1 temos o makerfile configurado na pasta, ser\xe1 feita compila\xe7\xe3o e deve aparecer a seguinte mensagem:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n")),Object(r.b)("p",null,"Conecte a placa em uma entrada USB ou, caso a Franzininho j\xe1 esteja conectada, aperte o bot\xe3o de reset para iniciar o upload."),Object(r.b)("h4",{id:"resultado"},Object(r.b)("strong",{parentName:"h4"},"Resultado")),Object(r.b)("p",null,"Os LEDs devem mostrar a contagem de apertos do bot\xe3o de forma bin\xe1ria resetando em 0x10 ou quando resetada a placa."),Object(r.b)("h4",{id:"an\xe1lise"},Object(r.b)("strong",{parentName:"h4"},"An\xe1lise")),Object(r.b)("p",null,"Esse c\xf3digo \xe9 de simples compreens\xe3o usando apenas um ",Object(r.b)("inlineCode",{parentName:"p"},"for")," para checar continuamente se o bot\xe3o foi apertado, chamando uma fun\xe7\xe3o debounce caso a leitura seja 1, incrementando o contador se for confirmado que a leitura \xe9 v\xe1lida, esperando  o bot\xe3o ser solto e mandando o valor para as sa\xeddas."),Object(r.b)("p",null,"De forma geral esse c\xf3digo funciona, mas h\xe1 muito desperd\xedcio de processamento, pois h\xe1 muitos momentos que o processador n\xe3o est\xe1 fazendo nada, apenas esperando algo acontecer ou um certo tempo passar, nesse tempo ele poderia estar fazendo outra tarefas ou ficar em modo econ\xf4mico de energia, que veremos nos pr\xf3ximos exemplos."),Object(r.b)("h3",{id:"contador_v2"},Object(r.b)("strong",{parentName:"h3"},"Contador_v2")),Object(r.b)("p",null,"Nesse exemplo vamos come\xe7ar a usar interrup\xe7\xf5es para ler os pulsos. Vamos ver quais s\xe3o as vantagens desse m\xe9todo e o que pode ser melhorado."),Object(r.b)("p",null,"O programa \xe9 um c\xf3digo em linguagem C e faz uso dos nomes dos registradores definidos na biblioteca ",Object(r.b)("inlineCode",{parentName:"p"},"avr/io.h")," e a biblioteca ",Object(r.b)("inlineCode",{parentName:"p"},"avr/interrupt.h"),". Para melhor entendimento recomendo ler os coment\xe1rios do c\xf3digo e o datasheet do ATtiny85."),Object(r.b)("h4",{id:"c\xf3digo-1"},Object(r.b)("strong",{parentName:"h4"},"C\xf3digo")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"/**\n * @file main.c\n * @author Eduardo Due\xf1as\n * @brief Exemplo de contador de eventos com tratamento por interrup\xe7\xe3o\n * @version 1.0\n * @date 19/04/2021\n *\n * \xfaltima modifica\xe7\xe3o: 05/05/2021\n *\n * O programa \xe9 um desenvolvimento em cima do contador uma com altera\xe7\xf5es na leitura do pulso para leitura por interrup\xe7\xe3o,\n * possibilitando o uso do microcontrolador para outras fun\xe7\xf5es junto do contador\n */\n#include <avr/io.h>\n#include <avr/interrupt.h>\n\n#define F_CPU 16500000L        // Frequ\xeancia de CLK\n\n// Macros\n#define setBit(valor,bit)      (valor |= (1 << bit))\n#define clearBit(valor,bit)    (valor &= ~(1 << bit))\n#define toogleBit(valor,bit)   (valor ^= (1 << bit))\n#define testBit(valor,bit)     (valor & (1 << bit))\n\nvolatile unsigned char count = 0;   // Contador\n\nISR(INT0_vect) {\n  cli();                       // Desabilita interrup\xe7\xf5es globais durante o tratamento da interrup\xe7\xe3o\n  if (debounce(PB2)) {         // Se o bot\xe3o foi realmente apertado incrementa cont e manda para os LEDs\n    count++;                   // Incrementa o contador\n    count %= 0x10;             // Limpa o excesso\n    PORTB = ((PORTB & 0xE7) | ((count >> 2) << 3)); // Manda os dois bits mais significativos de cont para PB[4:3]\n    PORTB = ((PORTB & 0xFC) | (count & 0x03));      // Manda os dois bits menos significativos de cont para PB[1:0]\n  }\n  sei();                       // Reabilita interrup\xe7\xf5es globais\n}\n\n// Debounce da chave tactil para desconsiderarmos ru\xeddo e bouncing do bot\xe3o\nchar debounce(int pino) {\n  unsigned int i;\n\n  for (i = 0; i < 20000; i++) {   // Testa o pino v\xe1rias vezes para evitar leituras erradas\n    if (!(testBit(PINB, pino))) { // Testa se o pino deixou de ser 1\n      return 0;                   // Se sim, retorna falso\n    }\n  }\n\n  return 1;                       // Retorna verdadeiro\n}\n\nint main(void) {\n    // Configura\xe7\xe3o de PORTB\n    clearBit(DDRB, PB2);       // Configura PB2 como entrada\n    setBit(DDRB, PB0);         // Configura PB0 como sa\xedda\n    setBit(DDRB, PB1);         // Configura PB1 como sa\xedda\n    setBit(DDRB, PB3);         // Configura PB3 como sa\xedda\n    setBit(DDRB, PB4);         // Configura PB4 como sa\xedda\n\n    PORTB &= 0xE4;             // Manda 0 para PB[4:3] e PB[1:0]\n\n    //Configura\xe7\xe3o de Interrup\xe7\xe3o externa\n    GIMSK |= (1 << INT0);      // Habilita interrup\xe7\xf5es externas no INT0\n    MCUCR |= 0x03;             // Seta interrup\xe7\xf5es para borda de subida\n    sei();                     // Habilita interrup\xe7\xf5es globais\n\n\n    for (;;) {                 // Loop infinito\n        // Aqui voc\xea pode colocar outra aplica\xe7\xe3o para rodar simultaneamente ao contador\n    }\n}\n")),Object(r.b)("h4",{id:"montagem-1"},Object(r.b)("strong",{parentName:"h4"},"Montagem")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito contador V2",src:a(256).default})),Object(r.b)("p",null,"Como mostrado na imagem, os LEDs s\xe3o ligados nas sa\xeddas PORTB","[4:3]"," e ","[1:0]"," e o bot\xe3o na entrada PORTB","[2]","."),Object(r.b)("h4",{id:"compila\xe7\xe3o-e-upload-1"},Object(r.b)("strong",{parentName:"h4"},"Compila\xe7\xe3o e upload")),Object(r.b)("p",null,"Para compilar o programa, assim como nos programas anteriores, acesse a pasta do exemplo e em seguida o comando ",Object(r.b)("inlineCode",{parentName:"p"},"make"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"exemplos-avr-libc/exemplos/contador_v2$ make\n")),Object(r.b)("p",null,"Como j\xe1 temos o makerfile configurado na pasta, ser\xe1 feita compila\xe7\xe3o e deve aparecer a seguinte mensagem:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n")),Object(r.b)("p",null,"Conecte a placa em uma entrada USB ou, caso a Franzininho j\xe1 esteja conectada, aperte o bot\xe3o de reset para iniciar o upload."),Object(r.b)("h4",{id:"resultado-1"},Object(r.b)("strong",{parentName:"h4"},"Resultado")),Object(r.b)("p",null,"Assim como no \xfaltimo exemplo, os LEDs devem mostrar a contagem de eventos, mostrando em bin\xe1rio at\xe9 15."),Object(r.b)("h4",{id:"an\xe1lise-1"},Object(r.b)("strong",{parentName:"h4"},"An\xe1lise")),Object(r.b)("p",null,"Esse exemplo tem um c\xf3digo um pouco mais complexo, podendo fazer diferentes tarefas ao mesmo tempo com o uso de interrup\xe7\xf5es."),Object(r.b)("p",null,"Interrup\xe7\xf5es s\xe3o, de forma simples, instru\xe7\xf5es de alta prioridade, que fazem o processador parar o que est\xe1 fazendo, guardar o estado atual, executar as instru\xe7\xf5es da interrup\xe7\xe3o e voltar para o estado anterior, continuando normalmente com o programa. Elas s\xe3o extremamente \xfateis para tarefas que precisam de uma precis\xe3o de tempo alta ou eventos ass\xedncronos."),Object(r.b)("p",null,"Por\xe9m, apesar do exemplo dois fazer uso de interrup\xe7\xf5es, ele passa muito tempo nela, o que atrasa o andamento de um poss\xedvel outro programa que estaria rodando na ",Object(r.b)("inlineCode",{parentName:"p"},"main"),". Por\xe9m, grande parte do tempo que \xe9 gasto na interrup\xe7\xe3o est\xe1 atrelado ao debounce, que consiste basicamente de checagens em certos per\xedodos de tempo. Podemos ent\xe3o otimizar o uso do processador saindo da interrup\xe7\xe3o entre as checagens, uma vez que ele est\xe1 apenas esperando para fazer o pr\xf3ximo teste. Veremos isso e o modo de economia de energia no contador_v3."),Object(r.b)("h3",{id:"contador_v3"},Object(r.b)("strong",{parentName:"h3"},"Contador_v3")),Object(r.b)("p",null,"Nesse exemplo vamos otimizar o processamento no c\xf3digo utilizando interrup\xe7\xf5es para as esperas do debounce, tamb\xe9m veremos uma alternativa para diminuir o consumo de energia em momentos em que o processador est\xe1 esperando algum evento, caso voc\xea n\xe3o precise de outra rotina."),Object(r.b)("p",null,"Esse programa \xe9 um c\xf3digo em linguagem C e faz uso dos nomes dos registradores definidos na biblioteca ",Object(r.b)("inlineCode",{parentName:"p"},"avr/io.h")," e a biblioteca ",Object(r.b)("inlineCode",{parentName:"p"},"avr/interrupt.h"),". Para melhor entendimento recomendo ler os coment\xe1rios do c\xf3digo e o datasheet do ATtiny85."),Object(r.b)("h4",{id:"c\xf3digo-2"},Object(r.b)("strong",{parentName:"h4"},"C\xf3digo")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"/**\n * @file main.c\n * @author Eduardo Due\xf1as\n * @brief Exemplo de contador de eventos com tratamento por interrup\xe7\xe3o\n * @version 1.0\n * @date 20/04/2021\n *\n * \xfaltima modifica\xe7\xe3o: 05/05/2021\n *\n * O programa \xe9 um desenvolvimento em cima do contador_v2 uma com altera\xe7\xf5es no loop infinito que\n * havia ficado em aberto para outras aplica\xe7\xf5es para o modo sleep para diminuir o gasto de energia e\n * alterar o debounce para interrup\xe7\xe3o, aumentando a efici\xeancia do c\xf3digo. O c\xf3digo pode ser usado com\n * outras aplica\xe7\xf5es no lugar do sleep.\n */\n\n#include <avr/io.h>\n#include <avr/interrupt.h>\n#include <avr/sleep.h>\n\n#define F_CPU 16500000L        // Frequ\xeancia de CLK\n\n#define setBit(valor,bit)      (valor |= (1 << bit))\n#define clearBit(valor,bit)    (valor &= ~(1 << bit))\n#define toogleBit(valor,bit)   (valor ^= (1 << bit))\n#define testBit(valor,bit)     (valor & (1 << bit))\n\nvolatile unsigned char count = 0; // Contador\nvolatile unsigned char test = 0;  // Quantidade de testes do debounce\n\nunsigned int pin = 0;             // Pino do debounce\n\n// Debounce da chave tactil para desconsiderarmos ruido e bouncing do bot\xe3o\nchar debounce(int pino) {\n    pin = pino;\n    // Coloca um timer para cada 1000 ciclos de clk para testar a chave tactil\n    TCNT0 = 131;               // Overflow-(ciclos/Prescaler)=256-(1000/8)=131\n    setBit(TIMSK, TOIE0);      // Habilita interrup\xe7\xf5es por timer overflow\n    test = 0;                  // Limpa test\n}\n\nISR(INT0_vect) {               // Tratamento de interrup\xe7\xf5es de pulso externo\n    clearBit(GIMSK, INT0);     // Desabilita interrup\xe7\xf5es do INT0 durante o tratamento da interrup\xe7\xe3o\n    debounce(PB2);\n}\n\nISR(TIMER0_OVF_vect) {         // Tratamento de interrup\xe7\xf5es de timer overflow\n    TCNT0 = 131;               // Seta denovo o timer para 131\n    if (testBit(PINB, pin)) {  // Se o bot\xe3o continua apertado\n        test++;                // Incrementa test\n        if (test >= 20) {      // Se testou o suficiente (no caso 20 vezes)\n            count++;           // Incrementa o contador\n            count %= 0x10;     // Limpa o excesso\n            PORTB = ((PORTB & 0xE7) | ((count >> 2) << 3)); // Manda os dois bits mais significativos de cont para PB[4:3]\n            PORTB = ((PORTB & 0xFC) | (count & 0x03));  // Manda os dois bits menos significativos de cont para PB[1:0]\n            clearBit(TIMSK, TOIE0); // Desabilita interrup\xe7\xf5es por timer overflow\n            setBit(GIMSK, INT0);    // Reabilita interrup\xe7\xf5es externas no INT0\n        }\n    }\n    else {\n      clearBit(TIMSK, TOIE0); // Desabilita interrup\xe7\xf5es por timer overflow\n      setBit(GIMSK, INT0);    // Reabilita interrup\xe7\xf5es externas no INT0\n    }\n}\n\nint main(void) {\n    // Configura\xe7\xe3o de PORTB\n    clearBit(DDRB, PB2);       // Configura PB2 como entrada\n    setBit(DDRB, PB0);         // Configura PB0 como saida\n    setBit(DDRB, PB1);         // Configura PB1 como saida\n    setBit(DDRB, PB3);         // Configura PB3 como saida\n    setBit(DDRB, PB4);         // Configura PB4 como saida\n\n    PORTB &= 0xE4;             // Manda 0 para PB[4:3] e PB[1:0]\n\n    // Configura\xe7\xe3o do timer\n    TCCR0A = 0x00;             // Modo Normal\n    TCCR0B = 0x00;\n    TCCR0B |= 0x02;            // Prescaler de 8\n\n\n    // Configura\xe7\xe3o do modo sleep\n    clearBit(MCUCR, SM0);      // Configura sleep mode como idle\n    clearBit(MCUCR, SM1);\n\n    // Configura\xe7\xe3o de Interrup\xe7\xe3o externa\n    setBit(GIMSK, INT0);       // Habilita interrup\xe7\xf5es externas no INT0\n    MCUCR |= 0x03;             // Seta interrup\xe7\xf5es para borda de subida\n    sei();                     // Habilita interrup\xe7\xf5es globais\n\n    for (;;) {                 // Loop infinito\n      // Aqui voc\xea pode colocar outra aplica\xe7\xe3o para rodar simultaneamente ao contador no lugar do sleep\n      sleep_mode();            // Entra no sleep mode\n    }\n}\n")),Object(r.b)("h4",{id:"montagem-2"},Object(r.b)("strong",{parentName:"h4"},"Montagem")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito contador V3",src:a(257).default})),Object(r.b)("p",null,"Como mostrado na imagem, os LEDs s\xe3o ligados nas sa\xeddas PORTB","[4:3]"," e ","[1:0]"," e o bot\xe3o na entrada PORTB","[2]",", assim como no exemplo dois."),Object(r.b)("h4",{id:"compila\xe7\xe3o-e-upload-2"},Object(r.b)("strong",{parentName:"h4"},"Compila\xe7\xe3o e upload")),Object(r.b)("p",null,"Para compilar o programa, assim como nos programas anteriores, acesse a pasta do exemplo e em seguida o comando ",Object(r.b)("inlineCode",{parentName:"p"},"make"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"exemplos-avr-libc/exemplos/contador_v3$ make\n")),Object(r.b)("p",null,"Como j\xe1 temos o makerfile configurado na pasta, ser\xe1 feita compila\xe7\xe3o e deve aparecer a seguinte mensagem:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n")),Object(r.b)("p",null,"Conecte a placa em uma entrada USB ou, caso a Franzininho j\xe1 esteja conectada, aperte o bot\xe3o de reset para iniciar o upload."),Object(r.b)("h4",{id:"resultado-2"},Object(r.b)("strong",{parentName:"h4"},"Resultado")),Object(r.b)("p",null,"Assim como nos exemplos anteriores, os LEDs do circuito devem mostrar a contagem de pulsos at\xe9 15 em bin\xe1rio."),Object(r.b)("h4",{id:"an\xe1lise-2"},Object(r.b)("strong",{parentName:"h4"},"An\xe1lise")),Object(r.b)("p",null,"Neste c\xf3digo adicionamos um pouco mais de complexidade, aumentando o uso de interrup\xe7\xf5es, al\xe9m do uso do timer e do modo Sleep."),Object(r.b)("p",null,"O modo Sleep \xe9 um mode de opera\xe7\xe3o no qual, de forma b\xe1sica, se desliga alguns m\xf3dulos do microcontrolador at\xe9 que alguma interrup\xe7\xe3o ocorra, o que pode diminuir o consumo de energia de forma dr\xe1stica. No caso do c\xf3digo do exemplo, utilizamos o modo Idle que no ATtiny85 desliga os CLKs da CPU e FLASH, podendo se desligar opcionalmente o CLK do ADC."),Object(r.b)("p",null,"O timer nesse exemplo est\xe1 configurado como em modo normal, com prescaler de 8, o que faz ele incrementar o timer uma vez a cada 8 ciclos de CLK. A forma adotada para a contagem do tempo foi a interrup\xe7\xe3o por timer overflow, ou seja, sempre que o valor m\xe1ximo do timer for atingido ele gera uma interrup\xe7\xe3o. Para conseguirmos os 1000 ciclos que queremos calculamos ",Object(r.b)("inlineCode",{parentName:"p"},"overflow -(ciclos/Prescaler)"),", que nos d\xe1 ",Object(r.b)("inlineCode",{parentName:"p"},"256 -(1000/8) = 131"),", e setamos o valor do timer nesse valor para que falte o tempo que desejamos para a interrup\xe7\xe3o."),Object(r.b)("p",null,"O uso de interrup\xe7\xf5es do timer para o debounce diminui consideravelmente o tempo que o processador consome em execu\xe7\xe3o do tratamento do evento, o que melhora o processamento das rotinas paralelas, ou no caso, permite que o processador fique mais tempo no modo Sleep, diminuindo o consumo de energia ou em caso de alimenta\xe7\xe3o por baterias, aumenta a vida \xfatil da da fonte."),Object(r.b)("h2",{id:"conclus\xe3o"},Object(r.b)("strong",{parentName:"h2"},"Conclus\xe3o")),Object(r.b)("p",null,"De forma geral, todas as tr\xeas formas de se fazer o c\xf3digo funcionam, e ao servirem seu prop\xf3sito n\xe3o est\xe3o erradas. Por\xe9m, como programadores, principalmente de sistemas embarcados, \xe9 uma \xf3tima pr\xe1tica conseguirmos fazer um c\xf3digo eficiente, de forma a n\xe3o se tornar um empecilho no futuro, seja por usarmos muita mem\xf3ria ou deixarmos o processador muito lento e termos que refazer algo pronto do zero. Por isso \xe9 importante saber quais s\xe3o as vantagens e desvantagens de cada m\xe9todo para podermos sempre utilizar o que melhor se adequa \xe0s nossas necessidades."),Object(r.b)("h2",{id:"gloss\xe1rio"},"Gloss\xe1rio"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Setar: colocar um novo valor em um registrador. Para um bit \xe9 convencionado setar, muda-lo para valor 1, e clear (limpar), muda-lo para valor 0"),Object(r.b)("li",{parentName:"ul"},"Chave tactil/Push button: bot\xe3o"),Object(r.b)("li",{parentName:"ul"},"Debounce: corre\xe7\xe3o do efeito de bouncing (efeito que ocorre em chaves que fazem r\xe1pidas conex\xf5es e desconex\xf5es antes de se estabilizar)"),Object(r.b)("li",{parentName:"ul"},"Resetar: reiniciar"),Object(r.b)("li",{parentName:"ul"},"Timer: circuito eletr\xf4nico dedicado a contagem de tempo")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Autor"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:"https://github.com/EduardoDuenas"}),"Eduardo Due\xf1as")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data:"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"05/05/2020")))))}m.isMDXComponent=!0},132:function(e,o,a){"use strict";a.d(o,"a",(function(){return l})),a.d(o,"b",(function(){return b}));var n=a(0),t=a.n(n);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function i(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?i(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function c(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=t.a.createContext({}),m=function(e){var o=t.a.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},l=function(e){var o=m(e.components);return t.a.createElement(d.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},p=t.a.forwardRef((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=m(a),p=n,b=l["".concat(i,".").concat(p)]||l[p]||u[p]||r;return a?t.a.createElement(b,s(s({ref:o},d),{},{components:a})):t.a.createElement(b,s({ref:o},d))}));function b(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},255:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/Exemplo_Contador_Circuito-a726ec616f1978417fe735405b5dadd9.png"},256:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/Exemplo_Contador_Circuito_v2-cb27b793816afd0d2a3b33b95b9e734f.png"},257:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/Exemplo_Contador_Circuito_v3-cb27b793816afd0d2a3b33b95b9e734f.png"}}]);