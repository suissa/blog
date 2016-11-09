# Você sabe de onde vem o bit?

Estava eu desafiando/ensinando alguns programadores iniciantes em um grupo no Telegram, onde questionei-os quem conseguiria inferir o que acontece [nesse exercício](https://github.com/Webschool-io/JavaScript-Obrigatorio/blob/master/docs/bitwise.md):

```js
> 20..toString(2)
'10100'
> 20 >> 1
10
> 20 >> 2
5
> 20 >> 3
2
> 10..toString(2)
'1010'
> 5..toString(2)
'101'
> 2..toString(2)
'10'
``` 

> Você consegue inferir o que acontece? Bom mas esse não é foco desse artigo.

![imagine](http://www.localfoodscampus.com/explore/wp-content/uploads/2015/05/imagine.jpg)

> Imagine um mundo feito apenas de 2 valores: 0 e 1.

> **Se tivéssemos apenas 2 cores ia ser uma bosta né?!**

> Então... toda a computação baseia-se apenas nesses valores.

Se isso não deixar-lhe curioso não sei mais o que pode.

> Consegue imaginar que tudo que você vê agora nessa tela pode ser resumido em agrupamentos de 0s e 1s.

Para matar a sua curiosidade explicarei de forma bem simples como **o seu computador** trabalha, 

Deixar-lhe-eis com uma pergunta que minha mulher, química/professora, fez-me esses dias:

> O que é o bit? Ele é elétrico, magnético, onda ou luz?

**Ahhhhh essa é fácil né?!!!**

> Depende.

Antes de tudo você precisa saber de onde eles vêm. 

No seu computador, mais precisamente no seu processador, existem milhões de transistores, que são pecinhas, atualmente nanométricas, feitas de cristais de silício. E seu papel como protagonista é de "deixar passar" ou não uma corrente elétrica.

> Como você imagina que isso seja possível?

![transistor](http://www.tandyonline.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/c/bc635-transistor.png)

> O transistor é considerado por muitos uma das maiores descobertas ou invenções da história moderna, tendo tornado possível a revolução dos computadores e equipamentos eletrônicos. 

> Por exemplo, o microprocessador Cell do console Playstation 3 tem aproximadamente 234 milhões de transistores, usando uma arquitetura de fabricação de 45 nanômetros, ou seja, a porta de controle de cada transistor tem apenas 45 milionésimos de um milímetro.


## Refêrencias teóricas

- [Química Inorgânica não tão Concisa, Lee, J.D. - pag 35]() 
- [https://pt.wikipedia.org/wiki/Trans%C3%ADstor](https://pt.wikipedia.org/wiki/Trans%C3%ADstor)
