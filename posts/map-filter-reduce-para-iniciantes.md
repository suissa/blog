# Iniciantes

Explicação **didática** sobre `map`, `filter` e `reduce`, dando um exemplo de cada para todas as disciplinas escolares. Ideias são sempre bem-vindas!

## map

Mapeia cada valor do array para um valor novo.

```
const fn = (elemento, posicao) => console.log(elemento, posicao)
arr.map(fn)
```

Problemas que resolve:

- modificação dos valores atuais
- modificação das posições atuais

```js
const NUMEROS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mapear = (arr, fn) => arr.map(fn)

const elevadoAoQuadrado = (num) => num * num
const elevadoAoCubo = (num) => num * num * num
const posicoes = (num, posicao) => {
  if (posicao % 2 === 0) return 'posição par: ' + posicao
  else return 'posição ímpar: ' + posicao
}
const andaUmaPosicao = (num, posicao) => {
  if (posicao === 0) return NUMEROS[posicao+1]
  if (posicao !== NUMEROS.length-1 && posicao > 0) return NUMEROS[posicao+1]
  else return NUMEROS[0]
}
// Em uma linha com IF ternário
//const posicoes = (num, posicao) => (posicao % 2 === 0) ? `posição par: ${posicao}` : `posição ímpar: ${posicao}`


const aoQuadrado = mapear(NUMEROS, elevadoAoQuadrado)
// [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
const aoCubo = mapear(NUMEROS, elevadoAoCubo)
// [ 1, 8, 27, 64, 125, 216, 343, 512, 729 ]
const posicoesNoArray = mapear(NUMEROS, posicoes)
/* [ 'posição par: 0',
  'posição ímpar: 1',
  'posição par: 2',
  'posição ímpar: 3',
  'posição par: 4',
  'posição ímpar: 5',
  'posição par: 6',
  'posição ímpar: 7',
  'posição par: 8' ]
*/
const umaPosicaoParaFrente = mapear(NUMEROS, andaUmaPosicao)
// [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ]

const tudoJuntoEMisturado = NUMEROS.map(andaUmaPosicao).map(elevadoAoQuadrado).map(elevadoAoCubo)
// [ 64, 729, 4096, 15625, 46656, 117649, 262144, 531441, 1 ]
```

## filter

Fltra cada valor do array, caso o mesmo passe pelo teste condicional ele será adicionado à resposta.

```
const fn = (elemento) => {
  if (elemento > 3 ) return elemento
}
arr.map(fn)
```

Problemas que resolve:

- remoção dos elementos não desejados

```js
const filtrar = (arr, fn) => arr.filter(fn)

const apenasPares = (num) => (num % 2 === 0)
const apenasImpares = (num) => (num % 2 !== 0)

const pares = filtrar(NUMEROS, apenasPares)
const impares = filtrar(NUMEROS, apenasImpares)
```

## reduce

Reduz todos os elementos em apenas 1.

```
const fn = (acumulador, atual) => acumulador + atual
arr.reduce(fn)
```

Problemas que resolve:

- somatória
- média
- criação de 1 novo Objeto ou Array
- uma caralhada

```js
const reduzir = (arr, fn) => arr.reduce(fn)

```

## Exemplos didáticos

### Matemática

#### map

O conjunto A possui números inteiros e você precisa transformar todos seus elementos para o seu quadrado, como visto na imagem abaixo:

![Conjunto a ser transformado](https://raw.githubusercontent.com/suissa/blog/master/images/conjunto-map.jpg)

#### filter

#### reduce

### Física

#### map

#### filter

#### reduce

### Química

#### map

#### filter

#### reduce