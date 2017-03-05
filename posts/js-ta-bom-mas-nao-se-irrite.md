# JavaScript - Tá bom mas não se irrite

![Tá bom mas não se irrite](https://raw.githubusercontent.com/suissa/blog/master/images/mas-nao-se-irrite.jpg)

Provavelmente você já deve ter lido diversos *posts* falando o quão [difícil]() ou o quão [prazeroso]() é programar com JavaScript hoje em dia, então chegou a hora de eu dar a minha visão!

## Por onde começar?

> **Agora falarei algo que uns 90% dos devs não devem concordar, mas é APENAS minha opinião como professor.**

### COMECEM PELO NODE!!!

> Ai mas usando framework fica fácil Suissa!

Primeiramente:

> PAU NO SEU CU SE VC ACHA QUE O NODE.js EH UM FRAMEWORK!!!

Bom se você não sabe ler ou lhe contaram essa lorota vamos ler lá no [site oficial](https://nodejs.org/en/):

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

**Queo que você leia novamente essa parte!**

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Agora vou lhe fazer mais uma pergunta:

> No que que você acha que a PORRA do Chrome roda o JS? Dica: começa com V!

![V8](https://images-na.ssl-images-amazon.com/images/I/31-wgaUoc9L._SY300_.jpg)


Então agora sabendo que tanto o Chrome como o Node.js rodam, basicamente, com o mesmo motor se você falar que o Node.js é um framework além de ser burro está falando que o Chrome também é um framework, mas sabe principalmente porque ele não é um framework?

> Porque ele não tem uma arquitetura rígida que você deve seguir para que seu código funcione, como no Angular por exemplo.

Eu não indico quem está começando a estudar JS começar pelo Navegador porque basicamente ele terá que aprender HTML e CSS para fazer algo decente, agora no backend não precisa. E se o aluno quer aprender a **programar** mesmo, IMHO, a melhor forma é no backend pois ele aprenderá muitos conceitos que podderá utilizar em qualquer outra linguagem de programação, agora no frontend será aplicado apenas aos navegadores.

## A melhor forma de aprender JS/programação

> Não! Não comece pelo React!

Eu, como professor, percebi que uma forma muito boa de ensinar JS (ou programação) é convertendo o conhecimento pré-existente do aluno em lógica e algoritmo para depois mostrar na programação.

Digo isso com conhecimento de causa dando um exemplo bem simples.

Então começamos a fazer [funções simples de matemática](https://github.com/fpchemical/funcoes-matematicas) que ela sempre usava. Aí que vem o interessante de estar utilizando o Node.js, pois precisei ensinar ela a trabalhar com o terminal e a **executar** um arquivo `.js` 


## Exemplos

### Testar se um número é par

> Muito fácil essa Suissa VSF!!!

> \- Beleza! Olhe o que mais de 90% respodem:


<br>

```js

const número = 64

éPar = ( número ) => ( número % 2 === 0 ) ? true : false

console.log(`O número ${número} é par? `, éPar( número ))
// O número 64 é par?  true

```


<br>
<br>

> \- Ridicularmente *(outro advérbio de modo)* fácil não?
>
> Para vc que ñ entendeu o código vou explicar.

A função `éPar` recebe um número, que será testado **se o resultado desse número dividido por 2 dá 0**, esse é o operador de [mod (%)](), **se um número é divisível por 2 então ele é par**.

Analise o seguinte teste lógico: `( número % 2 === 0 ) ? true : false`.

```

Se um número dividido por 2 é igual a 0 

  Então retorne verdadeiro

  Senão retorne falso


```

Até aí nada de novo, porém temos algums peculariedades do JavaScript.


> Ta certo uai
>
> \- Posso lhe mostrar como eu melhoraria?


Perceba que a função tem a seguinte assinatura: ` Number -> Boolean `.

O que significa que ela recebe um tipo `Number` e retorna um tipo `Boolean`, ou seja, é uma 
função de validação, nesse caso testa se o número **é PAR ou não**.

Porém entenda que no JavaScript se você quiser retornar um tipo `Boolean` de um teste 
lógico você não precisa retornar `true` ou `false`, pois esses valores são exatamente 
o que um teste lógico, do tipo `if`, retorna como função.

> **O que Suissa!!!? O `if` é uma função?
>
> \- Olha eu não posso lhe afirmar pois não li em nenhum lugar, mas pense comigo...
>
> \- Como é executada uma função no JavaScript??
>
> **Com parêntesis e pah.**
>
> \- Correto, então me acompanhe...


```js

const número = 42

const é = ( teste ) => {
  
  if ( teste ) return true
  else return false
}

console.log( `O número ${número} é par? ${é(número)}`)
// O número 42 é par? true

```

A chamada dessa função é `é(número)`, se traduzirmos para o Inglês teremos:
`if(number)`. O que é exatamente o que já temos nativamente no JavaScript, logo?

> Logo o `if` é uma funçnao Suissa.
>
> \- Muito bem!
>
> \- Mas porque eu dei toda essa volta?

Perceba que internamente o `é/if` retorna um tipo `Boolean (true|false)`, logo:

<br>

> \- Por que você precisa explicitar esse valor de retorno, 
> sendo que isso já acontece naturalmente?

<br>

Sabendo disso, podemos refatorar para isso:

<br>


```js

const número = 64

éPar = ( número ) => ( número % 2 === 0 )

console.log(`O número ${número} é par? `, éPar( número ))
// O número 64 é par?  true

```


> E cade o nosso `é/if`?
>
> \- Se você não percebeu vou lhe apresentar, esse é O **if ternário**.


## IF Ternário


> "O `if ternário` é uma das coisas mais lindas do JavaScript" - *Suissa*

<br>

Em vez de escrever isso:

```js

if ( número % 2 === 0 ) return true
else return false

```

Eu posso escrever isso:

```js

( número % 2 === 0 ) ? true : false

```

> \- **Que é a mesma coisa!**

Analise comigo:



```js

( número % 2 === 0 ) => // SE
  ? true // ENTAO
  : false // SENAO

```


> \- **Fácil né!?**
>
> Mas por que ele é uma das coisas mais lindas do JavaScript?
>
> Ahhhhhh... Vem comigo


## Arrow Functions

Nosso `é` com *Arrow Function* fica assim:

```js

const é = ( teste ) => ( teste ) ? true : false

```

Mas se ela fosse escrita com o `if` normal ela teria que ser assim:

```js

const é = ( teste ) => {
  
  if ( teste ) return true
  else return false
}

```

> \- **Sabes o porquê(*porque como sinônimo sempre é junto e com acento*) disso?**
>
> \- **Porque quando usamos o `if ternario` ele tem a ÚNICA função de retornar algo.**

<br>

Analise esse exemplo:

<br>

```js

const Component = ( config ) => {
  
  const shape = ( config.pi ) ? `circle` : `square`
  const color = ( config.color ) ? config.color : `white`

  return { shape, color }
}

```

## Tipagem

Como todos sabemos o JavaScript é **fracamente e dinamicamente tipado**, *note que qualquer advérvbio de modo (fraco/fracamente e dinâmico/dinamicamente) perde seu acento porque a sílaba tônica vem antes da antepenúltima sílaba, a proparoxítona, pode-se perceber essa regra com rápido/rapidamente*, logo **um Tipo no JavaScript pode mudar sua natureza, por assim dizer**.

Vamos analisar o seguinte caso:

```js

const VALUES = [ 0, '0', false, null, undefined ]

const MY_REAL_VALUE = 0

const testMyValue = ( MY_REAL_VALUE ) => ( value ) => value == MY_REAL_VALUE

const result = VALUES.filter( testMyValue( MY_REAL_VALUE ) )

console.log(`Os seguinte valores foram iguais a ${MY_REAL_VALUE}: \n `, result)

/* 
Os seguinte valores foram iguais a 0: 
  [ 0, '0', false ]
*/

```

Logo podemos inferir que o valor 






```js

éPar = ( número ) => ( número % 2 === 0 ) ? true : false


