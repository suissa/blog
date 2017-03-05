# Strings - Em busca da substring perfeita

![](https://string.se/wordpress/wp-content/themes/string/assets/images/logotype.png)

A maioria dos programadores normalmente utiliza a função [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) para verificar se existe uma *String* "dentro" da outra, vamos ver esse exemplo da [MDN]():

```js
'Blue Whale'.indexOf('Blue');     // returns  0
'Blue Whale'.indexOf('Blute');    // returns -1
'Blue Whale'.indexOf('Whale', 0); // returns  5
'Blue Whale'.indexOf('Whale', 5); // returns  5
'Blue Whale'.indexOf('');         // returns  0
'Blue Whale'.indexOf('', 9);      // returns  9
'Blue Whale'.indexOf('', 10);     // returns 10
'Blue Whale'.indexOf('', 11);     // returns 10
```

Caso não encontre a substring a função retorna `-1`, caso encontre retornará sua posição em relação a *String*, porém possuimos outras funções que podem nos auxiliar nisso e, para mim, são melhores quando quero testar apenas se aquela substring exsite dentro da *String*.

## startsWith

Vamos **iniciar** com a [startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), se você entende Inglês deve ter entendido minha tentativa de piada se você não entende então saiba que essa função serve para pesquisar se a *String* começa com a substring, por exemplo:


```js
const str = 'É nóis que voa bruxão'

console.log(str.startsWith('É nois')) // true
console.log(str.startsWith('que voa')) // false
console.log(str.startsWith('bruxão', 15)) // true
```

Você deve ter percebido que se passarmos, como segundo parâmetro, a posição de início da busca podemos fazer essa pesquisa em qualquer parte da *String*, fora que ela retorna `true/false` o que normalmente é o valor que necessito. 

## endsWith

Mas não vamos **terminar** por aí, ainda temos a [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) que é basicamente o contrário da `startsWith`, com a diferença que a posição passada como segundo parâmetro será a definição do tamanho total para a busca nessa *String*, como podemos ver abaixo:

```js
const str = 'É nóis que voa bruxão'

console.log(str.endsWith('É nois')) // false
console.log(str.endsWith('que voa', 14)) // true
console.log(str.endsWith('bruxão')) // true
```

## includes

Porém a que eu mais uso é a [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) que faz essa busca em qualquer posição da *String* e a posição passada no segundo parâmetro é a definição do início da busca, bem simples também:


```js
const str = 'É nóis que voa bruxão'

console.log(str.includes('É nois', 1)) // false
console.log(str.includes('que voa')) // true
console.log(str.includes('bruxão')) // true
```

Agora quando você for fazer aquele teste com `indexOf` dentro de um `if` lembre que existem outras funções, beleza?? 

## Dicas

Aproveitando o ensejo darei ua dica marota de como capitalizar uma palavra ou frase:

```js
const s = 'suissa'
s[0].toUpperCase() + s.slice(1) //'Suissa'
```

Marotagem da boa essa né??
