Passo a passo que realizei para criar o projeto incluindo a instalação

Criei uma pasta no local C chamada Celcoin
Selecionei a pasta e abri com o VSCODE
Abri novo terminal ultizando o "Bash"
Realizei o comando NPM Install para informar nome do projeto, repositório e demais informações contidas no arquivo package.json
Instalei o Cypress versão 9.5.0 utilizando o comando Npm install -D cypress@9.5.0
Realizei o comando npx cypress open
Por fim, comitei o projeto para o meu git hub,  no repositório Celcoin

Comentários:
Foi um grande desafio para mim este teste de automação, porque até ser desafiada eu não tinha realizado efetivamente nenhum teste com o Cypress. 

Mas minha vontade de completar o desafio foi maior.

Busquei por informações na documentação do Cypress, por vídeos e dicas de colegas da comunidade quando esbarrava em uma situação que não conseguia pensar como continuar, porém, todo o código foi feito por mim e de forma a demonstrar meus conhecimentos básicos sobre a ferramenta.

Aprendi a usar o especionar da ferramenta cypress
cy.get busca a informação.
type insere.
cy.wait(3000) para que o comando aguarde o período de 30 segundos, de forma a dar mais tempo e evitando erro por time-out

consegue utilizar o clear atravé do entendimento que obtive desenvolvendo o projeto.

o comando abaixo, busquei para evitar que ao repetir o teste, aconteça falha devido o email já ser cadastrado.

O comando combina a palavra cadastro com o horário que estou inserido a informação, incluindo os milesegundos de forma a não repetir as informações.

const timestamp = new Date ().getTime()
    const email =`cadastro-${timestamp}@mail.com`;
    cy.get('#email_create').type(email) 

# Celcoin
# teste
