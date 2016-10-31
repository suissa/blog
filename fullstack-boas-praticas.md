# Boas práticas para desenvolver um sistema completo em JS

Aqui irei abordar algumas boas práticas que eu sigo e sempre indico aos meus alunos.

Então nosso sistema irá conter tanto o *Frontend* como o *Backend*, agora eu lhe pergunto:

> Como você começaria suas pastas?

**Eu começo separando em 2**:

- client
- server

> Pronto assim já não deixamos muita bagunça na raíz!

## Server

Na pasta do *Backend* é onde colocaremos nosso maravilindo Node.js, caso você queira iniciar um projeto com Express pode usar o `express-generator`: `npm i -g express-generator`

Depois basta entrar na pasta `server` e executar: `express .`

Você verá que ele irá criar os seguintes arquivos/pastas:

- app.js       
- bin          
- package.json 
- public       
- routes       
- views

**Agora irei dar uma dica MUITOOOO IMPORTANTE!!!**

> Não separe suas pastas por funcionalidade, por exemplo: `controllers`, `schemas`, `routes`!!!

> Sabe por quê?

Pense comigo que temos o módulo de `User` e ele tem 1 controller.js, 1 schema.js, 1 model.js e 1 routes.js. Cada um em sua pasta separada, OK?

Agora quando você for fazer o próximo sistema e quiser reutilizar esse módulo como você faria?

> Entrando em cada pasta e copiando os arquivos?

![](https://media.giphy.com/media/O94iUIeEF8nwk/giphy.gif)

> Podemos fazer bem melhor powww!

Basta separar por módulos, por exemplo criando uma pasta `modules` e dentro dela a pasta `User` a qual conterá os seguintes arquivos:

- controller.js
- model.js
- schema.js
- routes.js

Agora quando você quiser reaproveitar esse módulo basta copiar a pasta `User` e colar em `modules` do outro projeto! 
