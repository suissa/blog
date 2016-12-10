![Parte do layout que mostra a listagem dos cursos](https://cldup.com/kaAk0gAfVr.jpg)

Então vamos criar a estrutura da nossa `view`:

```
article.aulas-wrapper  
  h3.atom-title-section Confira nossas aulas
  p Essa é a lista das aulas que fazem parte desse curso
  section.molecule-box-curso
    div.molecule-box-curso-wrapper
      img.atom-curso-thumb( src='img/thumb-video-aula.jpg', 
                            alt='Thumbnail do vídeo da aula desse curso')
      h4.atom-title-curso
        | Nome da aula
      p.atom-curso-resume
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, 
        | commodi, officia...
    div.molecule-box-curso-wrapper
      img.atom-curso-thumb( src='img/thumb-video-aula.jpg', 
                            alt='Thumbnail do vídeo da aula desse curso')
      h4.atom-title-curso
        | Nome da aula
      p.atom-curso-resume
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, 
        | commodi, officia...
    div.molecule-box-curso-wrapper
      img.atom-curso-thumb( src='img/thumb-video-aula.jpg', 
                            alt='Thumbnail do vídeo da aula desse curso')
      h4.atom-title-curso
        | Nome da aula
      p.atom-curso-resume
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, 
        | commodi, officia...
    div.molecule-box-curso-wrapper
      button.atom-button-ver-mais ver mais

```

_Lembrando que ela pode ser refatorada quando necessário._

Sem nenhuma estilização nossa view estará assim:

![tela mostrando a listagem das aulas sem estilo](https://cldup.com/frvHn1hLU2.png)

Primeiro vamos colocar a cor correta na seção, no `main.styl` criamos a seguinte regra:

```
.aulas-wrapper
  background-color: $azul-cinza-escuro

```

E vamos mudar a cor de cada caixa que contém a aula.

```
.molecule-box-curso-wrapper
  background-color: $branco

```

Porém como estamos fazendo Mobile-first vamos mudar a aquitetura dessa caixa colocando o vídeo na esquerda e o conteúdo de texto na direita, antes vamos criar o átomo da thumbnail.

```
.atom-curso-thumb
  @extend $atom-img

```

E depois vamos estilizar o componente no contexto dessa molécula sem precisar que modifiquemos nossos átomos.

```
.molecule-box-curso-wrapper
  background-color: $branco
  margin-bottom: 1rem
  padding-top: 0.2rem
  clear: both
  width: 100%
  max-width: 100%
  height: 12rem
  .atom-curso-thumb
    margin-top: 1rem
    display: inline-block
    width: 30%
    float: left
  .atom-title-curso,
  .atom-curso-resume
    float: left
    width: 55%
    margin-left: 1rem

```

![atenção agora!](https://cldup.com/7bqkq5IjH8.jpg)

Percebeu que os átomos só ganham esses estilos específicos pois estão dentros dessa molécula, que nesse contexto adiciona propriedades e/ou subistitui.

Dessa forma quando finalizarmos a criação de todos os átomos não seria mais necessário mexer neles, ainda precisamos refatorar nossos outros códigos, mas essa será a etapa após a finalização da estilização visual.

Trabalhando com o Atomic Design você só precisará modificar futuramente as regras específicas das suas moléculas e organismos, conseguindo re-usar os mesmos átomos sempre.

Além do mais que criando-os genéricamente com variáveis em seus valores é bem simples criar um tema e mudar automaticamente, mas isso ficará para um próximo artigo.

A nossa listagem agora está assim:

![Listagem das aulas atualizada com layout quase correto](https://cldup.com/0aNHug9zq1.png)

Agora estilizamos os textos, sempre da molecule-box-curso-wrapper.

```
.molecule-box-curso-wrapper
  background-color: $branco
  margin-bottom: 1rem
  padding-top: 0.2rem
  clear: both
  width: 100%
  max-width: 100%
  height: 12rem
  .atom-curso-thumb
    margin-top: 1rem
    display: inline-block
    width: 30%
    float: left
  .atom-title-curso,
  .atom-curso-resume
    float: left
    width: 60%
    margin-left: 1rem
  .atom-title-curso
    font-size: 1.6rem
    margin-bottom: 0
  .atom-curso-resume
    font-size: 1.4rem

```

Pronto do jeito que queríamos.

![Listagem das aulas com o layout correto](https://cldup.com/rhdNxuhVvD-3000x3000.png)

Só nos falta estilizar a caixa do ver mais.

Escolhi a _font_ `Arial Black` besse exemplo por ser uma _font_ mais grossa e ser [cross-plataform](http://templates.mailchimp.com/design/typography/), mas também podemos usar svg.

```
svg.icon.icon--plus(viewBox="0 0 5 5",  
                    xmlns="http://www.w3.org/2000/svg")
  path(d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z")

```

Retirado de: [http://codepen.io/chrisnager/pen/armzk](http://codepen.io/chrisnager/pen/armzk)
Dica do [Willian Justen](https://github.com/willianjusten/).

Voltando ao que interessa, antes de tudo vamos refatorar o botão `ver mais`:

```
div.molecule-box-ver-mais-wrapper  
  a.atom-button-ver-mais
    span.quark-icon-plus +
    span.quark-button-text ver mais

```

E então criar nossa base para o botão dentro de `atom-button`:

```
// Definimos nossos quarks que se agruparão
// para formar o átomo do botão
$boson-icon-plus
  font-family: 'Arial Black'

$boson-button-text
  font-style: none
  font-weight: normal
  text-align: center

// Definimos nossos quarks que se agruparão
// para formar o átomo do botão
.quark-icon-plus
  @extend $boson-icon-plus

.quark-button-text
  @extend $boson-button-text

// Definimos apenas as marcações desse contexto
.atom-button-ver-mais
  background: none
  border: 0
  display: block
  text-align: center
  color: $verde-claro
  min-height: 8rem
  .quark-icon-plus
    display: block
    clear: both
    font-size: 8rem
  .quark-button-text
    display: block
    clear: both
    font-size: 1.6rem
    text-transform: uppercase
    position: relative;
    top: -2.2rem;

```

_Necessário refatoração_

Quero testar uma nova nomenclatura, depois refatoraremos o resto, para elementos, pois criando o botão `atom-button-ver-mais` percebi que ele possuía 2 átomo internos:

*   atom-icon-plus
*   atom-button-text

Logo peguei-me perguntando:

*   Mas bah átomo dento de átomo? Será que não posso fazer uma outra analogia?

Bom, bóson não é porque ele está "criado/instanciado", então pensei nos [Quarks](http://pt.wikipedia.org/wiki/Quark).

> O quark, na física de partículas, é uma partícula elementar e um dos dois elementos básicos que constituem a matéria (o outro é o lépton). Quarks se combinam para formar partículas...

No caso o botão seria nossa matéria formada por 2 quarks:

*   quark-icon-plus
*   quark-button-text

Vamos ver se essa nomenclatura atenderá até o final do projeto.

![Tela mostrando a listagem das aulas e o botão ver mais](https://cldup.com/qZdl3najti.png)

Repositório oficial: [https://github.com/suissa/javascript-curso-site](https://github.com/suissa/javascript-curso-site)
