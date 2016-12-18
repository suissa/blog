# O entrelaçamento quântico e o JavaScript

![](http://www.sciencealert.com/images/articles/processed/Quantum-Entanglement_1024.jpg)

Como muitos sabem eu amo Física Quântica, não a toa adicionei o conceito de [Bóson]() e [Quark]() no [Atomic Design]() (Frontend) e no meu Atomic Design no Backend além do Quark também adicionei o [Hádron](), por isso quando estava vendo [esse vídeo](https://www.youtube.com/watch?v=NqsAMlWlhRM) no Youtube na hora me veio a cabeça duas coisas:

- prototype
- events

Espero que você esteja se perguntando o porquê pois eu irei discorrer sobre, entretanto precisamos entender sobre esse conceito que é deveras interessante.


> O entrelaçamento quântico (ou emaranhamento quântico, como é mais conhecido na comunidade científica) é um fenômeno da mecânica quântica que permite que dois ou mais objetos estejam de alguma forma tão ligados que um objeto não possa ser corretamente descrito sem que a sua contra-parte seja mencionada - mesmo que os objetos possam estar espacialmente separados por milhões de anos-luz. Isso leva a correlações muito fortes entre as propriedades físicas observáveis das diversas partículas subatômicas.
Essas fortes correlações fazem com que as medidas realizadas numa delas pareçam estar a influenciar instantaneamente à outra com a qual ficou entrelaçada, e sugerem que alguma influência estaria a propagar-se instantaneamente, apesar da separação entre eles. Mas o entrelaçamento quântico não permite a transmissão a uma velocidade superior à da velocidade da luz, porque nenhuma informação útil pode ser transmitida desse modo. Só é possível a transmissão de informação usando um conjunto de estados entrelaçados em conjugação com um canal de informação clássico - aquilo a que se chama o teletransporte quântico. Isto dá a entender que tudo está conectado por "forças" que não vemos e que permanecem no tempo, ou estão fora do sistema que denominamos, entendemos ou concebemos como sistema temporal.

*fonte: [https://pt.wikipedia.org/wiki/Entrela%C3%A7amento_qu%C3%A2ntico](https://pt.wikipedia.org/wiki/Entrela%C3%A7amento_qu%C3%A2ntico)*

> Na teoria, o entrelaçamento acontece quando duas partículas continuam conectadas apesar de estarem separadas. Dessa forma, o que acontece em uma partícula é refletido na outra. Por exemplo, um spin no sentido horário na primeira partícula será equivalente a um spin no sentido anti-horário na segunda, com o spin combinado das duas sendo zero. No entanto, medir uma partícula pode ser uma ação sobre ela, que, por sua vez, afetaria a outra partícula. Então seria impossível saber se a ação na segunda partícula é um resultado do entrelaçamento ou da medição.

*fonte: [http://revistagalileu.globo.com/Ciencia/noticia/2015/03/pesquisadores-demonstram-o-entrelacamento-quantico-entre-uma-particula-e-provam-que-einstein-estava-errado.html](http://revistagalileu.globo.com/Ciencia/noticia/2015/03/pesquisadores-demonstram-o-entrelacamento-quantico-entre-uma-particula-e-provam-que-einstein-estava-errado.html)*

![](http://cdn.zmescience.com/wp-content/uploads/2012/09/entangled_sm.jpg)

Creio que depois desse embasamento físico-teórico podemos partir para o código.

Inicialmente farei uma analogia entre como criar um par de fótons entrelaçados e Objetos no JavaScript, pelo nome "entrelaçamento/emaranhamento" podemos imaginar que devemos unir/juntar 2 fótons, porém na prática é o contrário.

Para criarmos um par de fótons entrelaçados devemos disparar um fóton contra um espelho que deve estar a 45 graus, para que ele possa dividir o fóton em dois, onde um terá spin -1 e o outro +1, para que sua soma seja 0.

Então vamos traduzir isso em código:

```
> const foton = {spin: 0}

> const entrelace = (foton) => Object.create(foton)

> fotonPar = entrelace(foton)
{}
> fotonImpar = entrelace(foton)
{}
> fotonPar.spin
0
> fotonImpar.spin
0
> fotonPar.spin = 1
1
> fotonImpar.spin = -1
-1
> fotonPar
{ spin: 1 }
> fotonImpar
{ spin: -1 }
```


https://en.wikipedia.org/wiki/Photon