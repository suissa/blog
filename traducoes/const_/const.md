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


To understand the concept of variable better, let’s examine the following image where the generic relationship between a variable identifier (or variable name), its value, and the physical memory is being explained.



![](https://cdn-images-1.medium.com/max/800/1*Rl6eVEft2iRERw3VbEkzRw.png)