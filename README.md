#### Primeiros passos:

- Baixe O Projeto
- Utilize o Vscode
- O documento com os comados está em Cypress/Integration/celcoin.spec.json
- Cypress versão 9.5.0


#### Como fiz o projeto para teste?

- Criei uma pasta no local C chamada Celcoin
- Selecionei a pasta e abri com o VSCODE
- Abri novo terminal ultizando no tema "Git Bash"
- Realizei o comando NPM Install para informar nome do projeto, repositório e demais informações contidas no arquivo package.json
- Instalei o Cypress versão 9.5.0 utilizando o comando Npm install -D cypress@9.5.0
- Fiz o comando npx cypress open
- Por fim, comitei o projeto para o meu git hub,  no repositório Celcoin

Foi um grande desafio para mim este teste de automação, porque até ser desafiada, eu ainda não tinha realizado efetivamente nenhum teste com o Cypress, mas minha vontade de completar o desafio foi maior. Busquei por informações na documentação do Cypress, por vídeos e dicas de colegas da comunidade. Quando esbarrava em alguma situação que não conseguia pensar em como continuar, obtive orientações para conseguir seguir em frente, porém, todo o código foi feito por mim e de forma a demonstrar meus conhecimentos básicos sobre a ferramenta.

##### O que eu aprendi?
- Utilizar o especionar da ferramenta cypress 
- cy.get (busca a informação)
- type insere. 
- cy.wait(3000) para que o comando aguarde o período de 30 segundos, diminuindo erros por time-out. 
- Clear para apagar a informação do campo, este eu consegui atravé do entendimento que obtive desenvolvendo o projeto.

- O comando abaixo, busquei para evitar que ao repetir o teste, aconteça falha devido o email já ser cadastrado, ele combina a palavra cadastro com o horário que estou inserido a informação, incluíndo os milesegundos de forma a não repetir as informações. 

const timestamp = new Date ().getTime() const email=cadastro-${timestamp}@mail.com; cy.get('#email_create').type(email)

##### Agradeço pela oportunidade, espero ter atingido as expectativas.
##### Ass: Sheyla Lima Damasceno
