# My Atomic Design Patterns

Como no Atomic Design tudo deve começar do micro para o macro precisamos pensar um pouco diferente do normal, não iniciamos pensando no objeto como um todo, mas sim nas partes que compõe o mesmo.

> Quando falo sobre *Atomic* o que vem na sua mente?

> Provavelmente você, pela tradução automática, deve ter falado átomo, correto?

Perfeito! Agora vamos pensar qual seria sua funcionalidade maior. 

Tudo que "observamos" no Universo é constituído de átomos, porém se eles não se ligassem não teríamos o Universo como ele é, pois a "matéria" que realmente percebemos é uma composição desses átomos.

Antes de continuarmos precisamos lembrar dos conceitos de agregação e composição, até porque eu mesmo inverto eles as vezes.

Baseando-se na [UML]() podemos dizer que:

> Agregação é um relacionamento onde a **parte** pode existir independentemente do **todo**. Exemplo:  e Estudante, se você fechar a Escola (olá Alckmin) os Estudantes ainda existirão.
> 
> (colcoar exemplo da Feijoada)
> 
> > Composição é um relacionamento onde a **parte** não pode existir independentemente do **todo**. Exemplo: Porco e Bacon, se não existir o Porco o Bacon **não** existirá mais.

Sabendo disso e que uma Molécula é *feita* de átomos, podemos inferir que a Molécula é uma agregação de Átomos, pois se a mesma não existisse ainda teríamos os Átomos. 

Farei um leve adendo químico agora.

O estado fundamental do elemento é formado por 1 par de átomos, você não encontrará na natureza um átomo de Ferro sozinho, por exemplo, ele sempre estará ligado a outro igual.
**Entretanto* os gases nobres não fazem ligação com ninguém**, por isso os Átomos, pelo menos dos gases nobres, podem existir sem necessitar de uma Molécula.

Para demonstrar esse conceito mais facilmente vamos conferir o código abaixo:

```js
let Agua = {
  atoms: ['H', 'H', 'O']
} 

const destroiAgua = () => Agua = null

destroiAgua()

const mostraElemento = (elemento) => console.log(elemento)

mostraElemento(Agua) //null
```

Porém nesse código se destruirmos a Molécula seus átomos deixarão de existir pois foram criados "dentro delas", para colocarmos no conceito visto anteriormente precisamos separar os Átomos das Moléculas, conceitualmente podemos fazer assim:

```js
let H = {protons: 1, neutrons: 0, eletrons: 1}
let O = {protons: 8, neutrons: 8, eletrons: 8}
let Agua = {
  atoms: [H, H, O]
} 

const destroiAgua = () => Agua = null

destroiAgua()

const mostraElemento = (elemento) => console.log(elemento)

mostraElemento(Agua) // null
mostraElemento(H) // {protons: 1, neutrons: 0, eletrons: 1}
mostraElemento(O) // {protons: 8, neutrons: 8, eletrons: 8}
```

Dessa forma nós estamos criando a molécula da água agregando os átomos de Hidrogênio e Oxigênio, entretanto para essa criação ocorrer existe a necessidade de uma reação chamada de síntese, onde duas ou mais substâncias se unem para formar **apenas** uma substância composta.

Levando esse conceito para a programação podemos dizer que essa reação é uma construtora da molécula, para que ela seja criada é necessário que ela receba os átomos que a constituirão, por exemplo:

```js
const mostraElemento = (elemento) => console.log(elemento)

let H = {protons: 1, neutrons: 0, eletrons: 1}
let O = {protons: 8, neutrons: 8, eletrons: 8}

function Molecula (atomos) { this.atomos = atomos }

let Agua = new Molecula([H, H, O])

mostraElemento(Agua) 
/*
Molecula {
  atomos: 
   [ { protons: 1, neutrons: 0, eletrons: 1 },
     { protons: 1, neutrons: 0, eletrons: 1 },
     { protons: 8, neutrons: 8, eletrons: 8 } ] }
*/

const destroiAgua = () => Agua = null

destroiAgua()

mostraElemento(Agua) // null
mostraElemento(H) // {protons: 1, neutrons: 0, eletrons: 1}
mostraElemento(O) // {protons: 8, neutrons: 8, eletrons: 8}
```

Agora possuímos uma função construtora para qualquer tipo de Molécula, entretanto essas Moléculas podem reagir com outras e também com Átomos.

Na Química (Inorgânica) existem quatro reações básicas:

- Síntese
- Decomposição
- Simples Troca
- Dupla Troca

Vamos inciar falando apenas das duas primeiras, já que uma é o inverso da outra, só pelo seus nomes já podemos imaginar o que fazem. 

Na Síntese dois ou mais átomos devem reagir para formar uma substância.
Na Decomposição uma substância irá ser dividida em duas ou mais substâncias menores.

Levando isso em consideração, vamos criar essas reações. (utilizando o código anterior como base)

```js
// Adicionado ao código anterior
const agregar = Object.assign
const sintetizar = (molecula, substancia) => agregar(molecula, substancia)
const Sintese = (substancias) => substancias.reduce(sintetizar, {})


let N = {protons: 7, neutrons: 0, eletrons: 7}
let N2 = new Molecula([N, N])
/* Molecula {
  atomos: 
   [ { protons: 4, neutrons: 0, eletrons: 4 },
     { protons: 4, neutrons: 0, eletrons: 4 } ] 
}*/
let H2 = new Molecula([H, H])/* Molecula {
  atomos: 
   [ { protons: 1, neutrons: 0, eletrons: 1 },
     { protons: 1, neutrons: 0, eletrons: 1 } ] 
}*/
let Amonia = Sintese([N2, H2])
/*
Amonia
{ atomos: 
   [ { protons: 4, neutrons: 0, eletrons: 4 },
     { protons: 1, neutrons: 0, eletrons: 1 } ] }
*/

```