# Suissa´s blog

**Último POST**


![](https://raw.githubusercontent.com/suissa/blog/master/images/fb-desafio-array.png)

[Link para a pergunta](https://www.facebook.com/groups/nodejsbrasil/permalink/938231559643465/)

E como eu não gostei de nenhuma das respostas dadas, como podem ver abaixo, quis resolver de outra forma.

**Não que seja a melhor e nem *funcional* é uma forma diferente de se resolver o mesmo problema.** O intuito aqui no  mostrar a mais correta nem a mais veloz, apenas mostrar outra opção.

![](https://raw.githubusercontent.com/suissa/blog/master/images/fb-desafio-array1.png)

![](https://raw.githubusercontent.com/suissa/blog/master/images/fb-desafio-array2.png)

## Minha Solução

Como eu não sou bobo nem nada reaproveitei as funções puras [de uma das repostas](https://jsfiddle.net/y6obeg0t/):


```js
const primeira = (el, i) => Math.pow(el, 2)
const segunda = (el, i) => el + ''
const terceira = (el, i) => el * -1
```

Beleza já temos as três funções que irão gerar os novos valores.

> E agora? Uso o `map`, `reduce`, `forEach`?

Como eu tenho um grande apreço pelo [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from), fiz há algum tempo esse módulo do npm [atomic-array](https://www.npmjs.com/package/atomic-array) utilizando-o, escolhi ele.

> **Não se engane!** 
> 
> Não foi apenas uma questão de gosto pessoal.


Entre na [documentação do Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) e leia essa parte: *Using arrow functions and Array.from*.

```js
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);      
// [2, 4, 6]


// Generate a sequence of numbers
Array.from({length: 5}, (v, k) => k);    
// [0, 1, 2, 3, 4]
```

> E aí já entendeu o porquê escolhi o `Array.from`?


Se analisarmos a primeira função veremos que passamos um *Array* e na sequência uma *arrow function* que irá gerar os novos valores.

> Muito fácil né?


Logo podemos fazer o seguinte:

```js
Array.from([1, 2, 3, 4, 5], (el) => Math.pow(el, 2))
```

ps: poderia passar o índice **também**, `(el, i)`, como no `map`, pois sabemos que é possível pelo segundo exemplo.

Agora podemos criar os 3 *Arrays* como pedido no *post*!

```js
Array.from([1, 2, 3, 4, 5], (el, i) => Math.pow(el, 2))
Array.from([1, 2, 3, 4, 5], (el, i) => el + '')
Array.from([1, 2, 3, 4, 5], (el, i) => el * -1)
```

> Mas pera aí Suissa, vai deixar zuado assim?

> **Óbvio que não né!** Venha comigo para essa mini-refatoração.


```js
const x = [1, 2, 3, 4, 5];
const primeira = (el) => Math.pow(el, 2)
const segunda = (el) => el + ''
const terceira = (el) => el * -1

const transform = (x) => ([
  Array.from(x, primeira),
  Array.from(x, segunda),
  Array.from(x, terceira),
])

console.log(transform(x))
/*[ [ 1, 4, 9, 16, 25 ],
  [ '1', '2', '3', '4', '5' ],
  [ -1, -2, -3, -4, -5 ] ]
*/
```

Caso o autor do *post* necessite de cada resposta em uma variável podemos fazer assim:


```js
const x = [1, 2, 3, 4, 5];
const primeira = (el) => Math.pow(el, 2)
const segunda = (el) => el + ''
const terceira = (el) => el * -1

const transform = (x) => ([
  Array.from(x, primeira),
  Array.from(x, segunda),
  Array.from(x, terceira),
])

const arr2 = transform(x)[0]
const arr3 = transform(x)[1]
const arr4 = transform(x)[2]

/*
> arr2
[ 1, 4, 9, 16, 25 ]
> arr3
[ '1', '2', '3', '4', '5' ]
> arr4
[ -1, -2, -3, -4, -5 ]
*/
```

ps: esse último exemplo APENAS DIDÁTICO, pois dessa forma vc está executando 3 vezes a mesma função, quando poderia armazenar em uma variável seu resultado e apenas acessar suas posições.

> E aí ficou bom? Caso tenha uma forma diferente de fazer por favor envie um PR adicionando-a abaixo.


## Outras soluções


```js
var x = [1, 2, 3, 4, 5];
var retObj = {
    arr1: [],
  arr2: [],
  arr3: []
};

var res = x.map(function (el, idx) {
    this.arr1.push( Math.pow(el, 2) );
    this.arr2.push( el + '' );
    this.arr3.push( el * -1);
    return el;
}, retObj);

console.log(retObj);
```
[Link para a solução acima](https://jsfiddle.net/y6obeg0t/)


```js
const input = [1, 2, 3, 4, 5]

const square = n => n * n
const negative = n => -n
const string = n => String(n)

const maps = [square, negative, string]

const output = input.reduce((acc, val) =>
  acc.map((arr, i) => arr.concat([maps[i](val)])),
  maps.map(() => [])
)

console.log(output)
```
[Link para a solução acima](https://repl.it/EmaG/2)


