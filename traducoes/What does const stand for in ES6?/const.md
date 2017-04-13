https://medium.com/the-node-js-collection/what-does-const-stand-for-in-es6-f7ab3d9e06fc

# O que significa `const` no ES6?


Se você vem de uma linguagem de programação *C-like*, você pode se perguntar por que o primeiro código JavaScript ES6 é válido, mas o segundo programa C (como você bem sabe) fará com que o compilador falhe.

```

# JavaScript
const numbers = [1, 2, 3, 4, 6]
numbers[4] = 5
console.log(numbers[4]) // print 5 

# C
const int numbers[] = {1, 2, 3, 4, 6};
numbers[4] = 5; // error: read-only variable is not assignable
printf("%d\n", numbers[4]); 

```

A razão pela qual é porque em C, `const` define uma variável somente leitura que não é modificável, enquanto que em JavaScript, não se trata de imutabilidade de valor. Ele não indica que o valor de uma variável é constante ou somente leitura. Em vez disso, ele cria uma vinculação imutável (uma referência somente leitura para o valor) e garante que nenhuma reatribuição acontecerá. Com isso dito, o código a seguir irá lançar um erro em tempo de execução.

```

const numbers = [1, 2, 3, 4, 6]
numbers = [7, 8, 9, 10, 11] // error: assignment to constant variable
console.log(numbers[4])

```


Para entender melhor o conceito de variável, vamos examinar a seguinte imagem onde a relação genérica entre um identificador de variável (ou nome de variável), seu valor e a memória física está sendo explicada.

![](https://cdn-images-1.medium.com/max/800/1*Rl6eVEft2iRERw3VbEkzRw.png)

Como você pode ver a partir da imagem, um identificador de variável se refere a uma célula de memória física através de um endereço (referência) em que o valor atribuído à variável é armazenado. Uma variável somente leitura não permite que seu valor seja alterado. Uma referência somente leitura para o valor simplesmente não permite que o identificador de variável seja reatribuído, mas o valor mantido pelo próprio identificador ainda pode ser alterado. Por exemplo, em JavaScript, quando o valor é um objeto, o próprio objeto pode ser alterado.

## Como tornar um valor imutável


[Tipos de dados primitivos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) são sempre imutáveis ​​por causa de sua natureza. O snippet de código a seguir explica intuitivamente o porquê.


```

# Example 1
const a = 10
a = a + 1 // error: assignment to constant variable
# Example 2
const isTrue = true
isTrue = false // error: assignment to constant variable
# Example 3
const sLower = 'hello world'
const sUpper = sLower.toUpperCase() // create a new string
console.log(sLower) // print hello world
console.log(sUpper) // print HELLO WORLD

```


Para tornar imutáveis ​​os valores de um objeto, você pode usar `Object.freeze()`. No entanto, ele só funciona em objetos de par de valor de propriedade, o que significa que ele não funcionará com outros objetos, como `Date`, `Map` and `Set`.

```

# Example 4
const me = Object.freeze({name: “Jacopo”})
me.age = 28
console.log(me.age) // print undefined
# Example 5
const arr = Object.freeze([-1, 1, 2, 3])
arr[0] = 0
console.log(arr[0]) // print -1
# Example 6
const me = Object.freeze({
  name: 'Jacopo', 
  pet: {
    type: 'dog',
    name: 'Spock'
  }
})
me.pet.name = 'Rocky'
me.pet.breed = 'German Shepherd'
console.log(me.pet.name) // print Rocky
console.log(me.pet.breed) // print German Shepherd

```

Como você pode ver no último exemplo, objetos aninhados dentro de um objeto congelado ainda podem ser mutados. Para tornar os valores de objeto totalmente imutáveis, convém usar um método `deepFreeze()`` personalizado. Outra opção é usar [Immutable.js](https://facebook.github.io/immutable-js/), uma biblioteca que simplesmente não transforma objetos em imutáveis, mas sim fornece muitas estruturas de dados persistentes imutáveis, incluindo *List*, *Stack*, *Map*, *OrderedMap*, *Set*, *OrderedSet* e *Record*.



## var, let ou const?

> **Por favor leia com atenção a afirmação abaixo! **

No ES6, os desenvolvedores **NUNCA** devem usar `var` para definir uma variável ou uma constante. Na verdade, agora é o sinal mais fraco disponível quando você define uma variável em JavaScript.



Uma variável bem definida não deve ser usada para representar conceitos múltiplos. Isso garante que o código é mais limpo e mais compreensível. Como no JavaScript `const` significa que o identificador não pode ser reatribuído, é preferível usar `const` para todos os identificadores no programa que não devem ser reatribuídos. No entanto, quando os identificadores precisam ser reatribuídos, os programadores então devem usar `let`. Este é geralmente o caso de contadores em uma construção de *loop* ou troca/swap de valores em sub-rotinas de algoritmos.


## Dever de casa

Recapitulando os *insights*: se você programa com ES6, use `const` por padrão, não use `var`, e use `let` onde reatribuição é necessária.



## Adendo do Suissa


Como eu sempre digo aos meus alunos...