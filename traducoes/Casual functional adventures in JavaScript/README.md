```

Artigo traduzido de: 
https://hackernoon.com/casual-functional-adventures-in-javascript-f2baec6c38de

```

# Aventuras funcionais ocasionais em JavaScript

![recursion meme](https://raw.githubusercontent.com/suissa/blog/master/traducoes/imgs/recursion.png)

Em uma tarde de quarta-feira aleatória, meu bom amigo Daniel Rodríguez deixa cair algumas linhas em um grupo do Telegram que compartilhamos com Adrián Obelmejias e Roberto von Schoettler, muito animado com sua nova percepção: 


> "Você já viu o *y-combinator* no ES6? É f*didamente lindo! " - ele escreveu. 


E compartilhou este trecho:


```js

const y = le => (f => f(f))(f => le(x => f(f)(x)))

```
*[Link para esse gist](https://gist.github.com/stefanmaric/689e54f7cb45e458489da3fe55c0680f#file-y-combinator-js)*

Nesse ponto, eu não tinha ideia do que era um *y-combinator* ou como esse pedaço de código funcionou; foi o início de uma busca espontânea de melhores respostas na terra da fantasia do JavaScript e eu estarei compartilhando nossas descobertas ingênuas hoje. Vou assumir que você tem alguma experiência com ES2015 e conceitos de programação funcional, porque, bem, claro que você tem, JavaScript funcional é quente como o inferno (**muito foda**) ultimamente.

## y-combinator

Antes dessa quarta-feira, a incubadora de startup por trás do Hacker News era a única "*y-combinator*" que eu conhecia, então eu tive que ir e ler sobre as funções de *y-combinator*; eu rapidamente compreendi a ideia e minha resposta ao trecho do Daniel não foi mais do que outro trecho:



```js

(y =>
  y(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2))(7)
)(le =>
  (f => f(f))(f => le(x => f(f)(x)))
) // 13

```
*[Link para esse gist](https://gist.github.com/stefanmaric/abd5a8070f2d1be20a5921d9b7fea57b.js)*


> Fibonacci foi a primeira função recursiva que me lembrei.


Você provavelmente está familiarizado com a recursão, é isso, uma função de auto-chamada, que é muito funcional e legal, certo? Não exatamente: o cálculo lambda não aceita declarações de função, ele permite apenas expressões de função anônimas e argumentos de função, o que significa que não é possível vincular funções a identificadores, portanto é impossível referir uma definição de função dentro de seu próprio corpo de função. É mais fácil entender esta limitação se você tentar escrever uma função recursiva de Fibonacci como uma *Anonymous Immediately Invoked Function Expression* vocês mesmos:


```js

// Faça esta IIFE anônima calcular o sétimo número na série fibonacci
// PD: Sem iteradores, deve ser um procedimento recursivo
(function (n) { 
  return // Onde está o seu Deus agora?
})(7)

```
*[Link para esse gist](https://gist.github.com/stefanmaric/a1447305b7d4df9127691a7a2e590000#file-seemingly-imposible-recursive-fib-function-js)*

A [função *y-combinator*](https://en.wikipedia.org/wiki/Fixed-point_combinator) é uma prova do Haskell Curry que a recursão pode ser expressa como um conjunto de regras de reescrita quando a recursão explícita é impossível, como no cálculo lambda. Pode não ser muito útil para o desenvolvimento diário, mas é muito interessante que você possa conseguir um estilo de programação puramente funcional em JavaScript.

Eu não explicarei a implementação do *y-combinator* em detalhes, você pode ler grandes explicações [aqui](http://matt.might.net/articles/implementation-of-recursive-fixed-point-y-combinator-in-javascript-for-memoization/) e [aqui](http://kestas.kuliukas.com/YCombinatorExplained/) em vez disso, mas eu posso expor isso em uma sintaxe menos [críptica](https://www.dicio.com.br/criptico/) para que você possa continuar lendo este artigo:

```js

(function (y) { // use y se quiser
  return y(function (fib) {
    return function /* fib */ (n) {
      return n <= 2 ? 1 : fib(n - 1) + fib(n - 2)
    }
  })(7)
})(function /* y */ (le) {
  // Eu intencionalmente fiz estes F's maiúsculo,
  // assim é mais fácil diferenciá-las das poucas f's linhas abaixo
  return (function (F) {
    return F(F)
  })(function (f) {
    return le(function (x) {
      return f(f)(x)
    })
  })
}) // 13

```
*[Link para esse gist](https://gist.github.com/stefanmaric/5dac3de81cd26fbf38750751509c71f5#file-pure-functional-y-combinator-in-plain-es5-js)*

> Observe como é fácil eliminar a declaração de função fib; alguma função que envolve aqui e ali e você está definido.



## Tail Call Optimization

I was really excited about this discovery, but I couldn’t avoid to be bothered about my poorly improvised fib function, I knew there was something growing exponentially while using that classic fib() + fib() so I started to rework the function to call itself only once:

Eu estava realmente animado com essa descoberta, mas não pude evitar ser incomodado com minha função improvisada de fib, eu sabia que havia algo crescendo exponencialmente ao usar esse fib () + fib () clássico, então comecei a retrabalhar a função para chamar-se apenas uma vez:

```js

// função fib original 
// O(2^n) complexidade
function fib (n) {
  return n <= 2 ? 1 : fib(n - 1) + fib(n - 2)
}

// função fib melhorada
// O(n+1) complexidade
function fib (n, current = 0, next = 1) {
  return n ? fib(n - 1, next, current + next) : current
}

```
*[Link para esse gist](https://gist.github.com/stefanmaric/6dd9e6b034fc0cb1e4b822faad8803c9#file-fib-functions-compared-js)*

> O mais tarde executa suave. O primeiro vai machucar a sua máquina, é uma *[fork bomb](https://en.wikipedia.org/wiki/Fork_bomb)*.

![fork bomb](https://upload.wikimedia.org/wikipedia/commons/5/52/Fork_bomb.svg)


Ótimo! A nova função cresce linearmente para `n = 30`, fib é chamada 31 vezes, enquanto usando o código original ela **estava sendo invocada cerca de um milhão de vezes para o mesmo `n`**, fazendo sua máquina sufocar no processo. E esta não foi a única melhoria que eu apresentei; quase sem perceber, eu estava tocando em outro conceito muito funcional:

> [...] uma *tail call* é uma chamada de sub-rotina realizada como a ação final de um procedimento. Se uma *tail call* pode levar à mesma sub-rotina sendo chamada novamente mais tarde na cadeia de chamada, a sub-rotina é dita ser *tail-recursive*, que é um caso especial de recursão.


A última ação da função `fib` original é uma [operação aritmética](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators), uma soma de números, enquanto a nova é uma chamada de função, significando que é escrita na forma *[tail-recursive](http://stackoverflow.com/a/37010)*. Ao lado da diferença de complexidade de tempo já mostrada, ela também se beneficia do *[Tail Call Optimization](https://benignbemine.github.io/2015/07/19/es6-tail-calls/)* introduzido no [ES2015](https://kangax.github.io/compat-table/es6/), que basicamente transforma a recursão em um `while-loop` sob o capô, ignorando a criação de novas camadas na [Function Call Stack](https://www.youtube.com/watch?v=8aGhZQkoFbQ), indo da complexidade de espaço linear `O(n)` para complexidade de espaço constante `O(1)`, permitindo que fib([Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)) eventualmente retorne `Infinity` (devido às [limitações](http://www.2ality.com/2012/07/large-integers.html) de número do JavaScript) sem retornar erro "***Maximum call stack size exceeded***" - melhor tarde e errado do que nunca, hein?
