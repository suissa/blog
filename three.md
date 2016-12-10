

![]()


![Link para a pergunta](https://www.facebook.com/groups/nodejsbrasil/permalink/938231559643465/)


```js
const x = [1, 2, 3, 4, 5];
const primeira = (el, i) => Math.pow(el, 2)
const segunda = (el, i) => el + ''
const terceira = (el, i) => el * -1

const transform = (x) => ([
  Array.from(x, primeira),
  Array.from(x, segunda),
  Array.from(x, terceira),
])

console.log(transform(x))
```