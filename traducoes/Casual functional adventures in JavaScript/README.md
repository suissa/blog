```

Artigo traduzido de: 
https://hackernoon.com/casual-functional-adventures-in-javascript-f2baec6c38de#.2xik2mmhw

```

# Aventuras funcionais ocasionais em JavaScript

<div style="text-align: center">
![recursion meme](https://raw.githubusercontent.com/suissa/blog/master/traducoes/imgs/recursion.png)
</div>

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


