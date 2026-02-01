# Countdown Timer

Projeto de um contador regressivo (countdown) desenvolvido com JavaScript puro e Tailwind CSS.  
O usuário define uma data futura e o sistema exibe, em tempo real, o tempo restante em dias, horas, minutos e segundos.

## Visão Geral

Este projeto tem como objetivo praticar conceitos fundamentais do front-end, como manipulação do DOM, controle de tempo com `setInterval`, cálculos de datas em JavaScript e estilização utilitária com Tailwind CSS.

A aplicação valida entradas inválidas, atualiza a interface dinamicamente e encerra a contagem automaticamente ao atingir a data final.

## Funcionalidades

- Seleção de data e hora futuras
- Contador regressivo em tempo real
- Exibição de dias, horas, minutos e segundos
- Validação de data inválida ou passada
- Encerramento automático da contagem
- Interface responsiva e minimalista

## Tecnologias Utilizadas

- HTML5
- JavaScript (ES6+)
- Tailwind CSS
- Bootstrap Icons

## Lógica do Funcionamento

1. O usuário seleciona uma data futura.
2. Ao iniciar a contagem, o sistema calcula a diferença entre a data atual e a data escolhida.
3. Um intervalo (`setInterval`) atualiza o contador a cada segundo.
4. Os valores são convertidos de milissegundos para dias, horas, minutos e segundos.
5. Quando a diferença chega a zero, o intervalo é encerrado e uma mensagem é exibida.
