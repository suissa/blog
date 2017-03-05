# JS Funcional - Transformação de Dados para Iniciantes

Nesse artigo irei explicar sucintamente o uso de algumas funções *tão* lindas 
do JavaScript (Jean Suissa) para transformar dados. 

![transformers](http://sad.hasbro.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/df48be66f8202ba3aa2f218209e43523.png)

Você deve se perguntar:

> Que tipo de dado você quer transformar fi?

Imaginemos uma situação hipotética onde existe o seguinte objeto de retorno de uma requisição:

```js

const data = { 
    id: 666,
    name: 'Suissero Veio', 
    password: 'p3g4n4min43Bal4n5ap3g4n4min43Bal4n5ap3g4n4min43Bal4n5a',
    email: 'acerto@mizera.vi'  
}

```

Até aí tudo bem porque o `password` está *"encriptado"*, correto?

>- **Claaaaaaro que não!** 

Acredito que você saiba que o valor da senha **NUNCA** pode estar acessível dessa forma, 
logo *"achamos uma brecha de segurança"*.

**Como podemos resolver essa *treta*?**

Primeiramente precisamos analisar nossa entrada: ela é um Objeto.

Porém o título do artigo é `JS Funcional - Transformação de Dados para Iniciantes` então 
vamos pensar de uma forma *mais* funcional.

- um array com o nome do campo a ser *"limpado"*
- uma função para limpar o valor

**Entretanto, antes de criarmos a função devemos lembrar que nosssa entrada é um Objeto.** 

Sabendo disso, precisaremos testar se o Objeto possui os campos a serem limpados.

```js
const fieldsNotAllowed = [ 'password' ]
const notAllowed = ( field ) => fieldsNotAllowed.includes( field )

  Object.keys( data ).filter( notAllowed )

```

Essa mandinga do `Object.keys( obj )` nos ajuda a iniciar um encadeamento de funções pois 
retorna um *Array* com o nome das propriedades/chaves do Objeto.

```js

 > Object.keys({id: 666, active: true})
[ 'id', 'active' ]

```

Se o retorno é um *Array* podemos utilizar a função [filter]() para sabermos se o Objeto possui 
os campos e quais säo, pois poderemos adicionar mais campos no futuro, por isso usamos a função
`` para filtrar apenas os campos corretos.

```js

const notAllowed = ( field ) => fieldsNotAllowed.includes( field ) 

```


Veja como o *Array* `fieldsNotAllowed` veio a calhar agora, pois bastou testar se o `field`, que é
o nome de cada propriedade do Objeto, existe dentro desse *Array* com a função [includes]().

Fazendo o teste de mesa dessa etapa temos o seguinte:

```js

const data = { 
    id: 666,
    name: 'Suissero Veio', 
    password: 'p3g4n4min43Bal4n5ap3g4n4min43Bal4n5ap3g4n4min43Bal4n5a',
    email: 'acerto@mizera.vi'  
}

const fieldsNotAllowed = [ 'password' ]

const notAllowed = ( field ) => fieldsNotAllowed.includes( field )
const cleanSensitiveData = ( data ) => Object.keys( data )
                                                                      .filter( notAllowed )
                                                                     // .reduce( toNewObject , obj )


cleanSensitiveData( data )
// [ 'password' ]

```

Agora precisamos pensar em uma forma de limpar os campos sem mudar seu Objeto original. 

**Dados imutáveis <3**

> **Mas como isso tio Suissa???**

>- Apenas observe a malandragem.

> - Se precisamos retornar um Objeto, qual função você usaria? 
> 
> - Map? Filter? Reduce?

> - Posso adiantar-lhe a minha escolha: reduce.
> 
> **Por quê tio?**


![](https://pbs.twimg.com/profile_images/680771499389763584/fjOxGHkt.jpg)

> Porque iremos reduzir o Objeto de entrada em um Objeto novo de saída com os campos limpos.

Para fazermos isso utilizaremos a maracutaia do `Object.assign` para criarmos um Objeto novo,
o qual será uma *"junção"* (achar uma palavra melhor) de outros Objetos.

> **E como isso pode nos ajudar?**


Da seguinte forma:

```js

const toNewObject = ( obj, notAllowed ) => Object.assign( obj, { [notAllowed]: null } )

```

A constante `obj` é o Objeto original de entrada que virá via **segundo parâmetro** no `reduce`, logo
ela entra como o acumulador, na primeira posição, e o valor de cada posição do *Array*, com o nome
dos campos a serem limpos, vêm na segunda posição nomeado de `notAllowed`.

Quando fazemos isso `Object.assign( obj, { [notAllowed]: null } ` estamos retornando para o acumulador
um Objeto novo com a estrutura e valores do Original, `obj`,  *juntado* com `{ [notAllowed]: null } `.
Como a execução dessa função incia-se pelo último parâmetro, ela vem mesclando os Objetos da 
dirieita para esquerda o `obj` é sobrescrito com `{ [notAllowed]: null } `, limpando assim o valor dos
campos definidos anteriormente.

Vamos finalizar essa etapa do `reduce` assim:


```js

const data = { 
    id: 666,
    name: 'Suissero Veio', 
    password: 'p3g4n4min43Bal4n5ap3g4n4min43Bal4n5ap3g4n4min43Bal4n5a',
    email: 'acerto@mizera.vi'  
}

const fieldsNotAllowed = [ 'password' ]

const notAllowed = ( field ) => fieldsNotAllowed.includes( field )
const toNewObject = ( obj, notAllowed ) => Object.assign( obj, { [notAllowed]: null } )
const clearSensitiveData = ( data ) => Object.keys( data )
                                                                      .filter( notAllowed )
                                                                      .reduce( toNewObject , obj )


clearSensitiveData( data )
// [ 'password' ]

```


> Bah Suissa mas com um Objeto só é tranquilo no mamilo, quero ver com vários!



## Links para estudo

- [http://reactivex.io/learnrx/](http://reactivex.io/learnrx/)
- [https://github.com/fantasyland/fantasy-land](https://github.com/fantasyland/fantasy-land)
- [https://drboolean.gitbooks.io/mostly-adequate-guide/](https://drboolean.gitbooks.io/mostly-adequate-guide/)
- [http://reactivex.io/learnrx/](http://reactivex.io/learnrx/)
