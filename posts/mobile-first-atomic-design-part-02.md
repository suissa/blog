
### Main

![Imagem mostrando o main do layout](https://cldup.com/crlHJwsVrE.jpg)

Vamos iniciar criando uma seção para o vídeo de chamada do curso.

![Imagem mostrando a seção da chamada do vídeo](https://cldup.com/UYtqmRxICy.jpg)

```
main  
  article
    h1.atom-title-primary
      | Quer aprender Javascript de VERDADE?
    .molecule-video-chamada
      video.atom-video(src='https://www.youtube.com/watch?v=gS7oD8r9YSY')
    h2.atom-title-secondary Aprenda, capacite-se e destaque-se no mercado.
    p
      | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, 
      | incidunt! Quis culpa ex, provident nesciunt minima recusandae 
      | veniam nihil accusantium, id deleniti doloremque ut sit iste 
      | officiis commodi asperiores laudantium.

```

Encapsulamos em um article seguindo a [orientação do HTML5](http://alistapart.com/article/previewofhtml5), vamos iniciar estilizando o `atom-title-primary`:

```
.atom-title-primary
  @extend $atom-title
  color: $branco
  font-size: 2rem
  text-align: center

```

Em `bosons/boson-typo` criamos o `$atom-title`:

```
$atom-title
  font-weight: 800
  clear: both

```

![Tela com o título primário no mobile](https://cldup.com/eXp2urUvYT.png) ![Tela com o título primário no desktop](https://cldup.com/076FJ4wOeV.png)

### Vídeo de chamada

![Imagem mostrando o vídeo e o fundo preto](https://cldup.com/yzTncJr2zA.jpg)

Agora vamos chegar em um ponto crítico do nosso projeto, pois haverá uma grande mudança de layout do `mobile` para o `desktop`.

```
$atom-video
  width: 100%
  max-width: 100%
  min-height: 16rem
  @media (min-width: $tablet-size)
    min-height: 30rem
  @media (min-width: $desktop-size)
    min-height: 35rem

.atom-video-chamada-curso
  @extend $atom-video

```

![Tela mostrando o video no mobile](https://cldup.com/p04NSAcmLE.png) ![Tela mostrando o video no tablet](https://cldup.com/mjzhKzN3OC.png) ![Tela mostrando o video no desktop](https://cldup.com/HAtQJcgCQv.png)

Porém no layout o vídeo fica dentro de um notebook, no `desktop`, que precisamos usar de fundo para esse vídeo.

![](https://cldup.com/dvYuOZspaT.png)

Refatorando nossa view:

```
section.molecule-video-chamada  
  iframe.atom-video-chamada-curso(src='//www.youtube.com/embed/gS7oD8r9YSY',
                                  frameborder='0',
                                  allowfullscreen='')

```

E nosso visual:

```
$atom-video
  width: 100%
  max-width: 100%
  min-height: 16rem
  display: block
  @media (min-width: $tablet-size)
    min-height: 30rem
  @media (min-width: $desktop-size)
    min-height: 340px
    width: 550px
    margin: 0 auto
    position: relative
    top: 40px

.atom-video-chamada-curso
  @extend $atom-video

```

E precisamos adicionar o fundo na nossa `section` para que o vídeo fique inserido nele.

```
.molecule-video-chamada
  @media (min-width: $desktop-size)
    background: url('../img/video-mac-bg.png') no-repeat top center
    height: 500px

```

![Tela mostrando o vídeo inserido em um notebook quando estiver no desktop](https://cldup.com/6zcl__9v9y.png)

Legal porém nós estamos adicionando regras específicas para o vídeo, porém elas só serão usadas na seção da chamada do curso, logo eu vou passar essas regras para modificar esse átomo apenas nesse contexto. Bom vamos ao código que ficará mais fácil de entender:

```
.molecule-video-chamada
  @media (min-width: $desktop-size)
    background: url('../img/video-mac-bg.png') no-repeat top center
    height: 500px
    .atom-video-chamada-curso
      min-height: 340px
      width: 550px
      margin: 0 auto
      position: relative
      top: 40px

```

Nesse caso `atom-video-chamada-curso` apenas entrará no formato para caber nesse fundo `background: url('../img/video-mac-bg.png')` se estiver dentro da molécula `molecule-video-chamada` e com a _media query_ `@media (min-width: $desktop-size)`.

**Nesse momento percebi que estava usando um azul `#4161af` setado no `background-color` do html, mudei para `$azul-claro` para utilizar do nosso padrão setado nas variáveis, por isso o fundo será diferente daqui para frente.**

Agora para finalizar a parte do vídeo sua sessão possui um fundo escuro e continua com um fundo branco. Adicionei as seguintes regras no `main.styl`, depois precisamos refatorar:

```
body  
  background-color: $azul-claro
header  
  height: 7.4rem
main  
  background-color: $branco
  padding-bottom: 4em

```

E refatorei a `view`:

```
main  
  article
    div.molecule-curso-chamada
      h1.atom-title-primary
        | Quer aprender Javascript de VERDADE?
      section.molecule-video-chamada
        iframe.atom-video-chamada-curso(src='//www.youtube.com/embed/gS7oD8r9YSY',
                                        frameborder='0',
                                        allowfullscreen='')

    h2.atom-title-secondary Aprenda, capacite-se e destaque-se no mercado.
    p
      | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, 
      | incidunt! Quis culpa ex, provident nesciunt minima recusandae 
      | veniam nihil accusantium, id deleniti doloremque ut sit iste 
      | officiis commodi asperiores laudantium.

```

### Título secundário

Vamos iniciar a criação do `atom-title-secondary`.

```
.atom-title-secondary
  @extend $atom-title
  color: $azul-claro
  text-align: center

```

Perceba que estamos re-usando o _placeholder_ `atom-title` e só modificamos sua cor e seu alinhamento.

![Tela mostrando o título secundário no mobile](https://cldup.com/_D6tLyQdKY.png) ![Tela mostrando o título secundário no desktop](https://cldup.com/hZuMbfXQRA.png)

Antes de continuarmos vamos pegar uma font diferente no [Google Fonts](http://www.google.com/fonts)

Alterando o arquivo `atom-title` deixamos ele assim:

```
@import url(http://fonts.googleapis.com/css?family=Coda)

.atom-title-primary
  @extend $atom-title
  color: $branco
  font-family: 'Coda', cursive
  font-size: 2.8rem
  text-align: center

.atom-title-secondary
  @extend $atom-title
  color: $azul-claro
  font-family: 'Coda', cursive
  font-size: 2rem
  text-align: center

```

_ps: não esquecer de chamar no index.jade_

```
link(rel='stylesheet', type='text/css', href='http://fonts.googleapis.com/css?family=Coda')  

```

Agora sim já está ficando com uma cara mais agradável.

![Mostrando nova fonte no mobile](https://cldup.com/JtP6y3sAYJ.png) ![Mostrando nova fonte no desktop](https://cldup.com/2U1MA2JUMb.png)

Para deixar com o fundo que tem no layout precisei modificar um pouco a estrutura da `view`:

```
section.molecule-curso-chamada  
  h1.atom-title-primary
    | Quer aprender Javascript de VERDADE?
  div.molecule-video-chamada
    iframe.atom-video-chamada-curso(src='//www.youtube.com/embed/gS7oD8r9YSY',
                                    frameborder='0',
                                    allowfullscreen='')
  div.molecule-video-text
    h2.atom-title-secondary Aprenda, capacite-se e destaque-se no mercado.
    p.atom-text-video-chamada
    | Não perca essa grande oportunidade de se diferenciar no mercado
    | tendo em vista que o Javascript só cresce cada vez mais.

```

Separando em 2 blocos pois preciso o contexto/fundo do texto da chamada será diferente do vídeo. Logo precisei criar a molécula `molecule-video-text`:

```
.molecule-video-text
  background-color: $branco
  padding-top: 2rem

```

Desse jeito nossa tela no `mobile` ficará assim:

![tela mostrando a divisão entre o vídeo e a sessão abaixo no mobile](https://cldup.com/0wgHKBQYbr.png)

#### Texto de chamada do curso

Vamos no `boson-typo` e criar o _placeholder_ `atom-text` e adicionar umas variáveis:

```
$font-family = 'Myriad Pro, Sans serif'
$font-bold = 'normal'
$font-size-base = 16px
$font-align = 'left'

$atom-text
  font-weight: $font-bold
  font-family: $font-family
  text-align: $font-align

```

Agora usamos no átomo `atom-text-video-chamada` criando o arquivo `atom-text`:

```
@import url(http://fonts.googleapis.com/css?family=Coda)

.atom-text-video-chamada
  @extend $atom-text
  color: $azul-cinza-claro
  font-size: 1.4rem
  margin: 0 auto
  text-align: center
  width: 90%
  @media(min-width: $desktop-size)
    width: 80%
  @media(min-width: $desktop-medium-size)
    width: 50%

```

Já adicionei o comportamento responsivo como o Atomic Design nos diz, nesse caso o texto não ficará apenas em uma linha quando a tela for muito grande, depois podemos refatorar quando começarmos a etapa do `Template` que é onde setamos a Arquitetura da nossa página utilizando um _grid_.

![Texto mostrado no mobile](https://cldup.com/_XP28AXvA8.png) ![Texto mostrado no tablet](https://cldup.com/rj8EgulaWL.png) ![Texto mostrado no desktop](https://cldup.com/7iPyJMPN5j.png) ![Texto mostrado no desktop maior](https://cldup.com/Vfgk0A3l00.png)

Agora nosso componente do texto já está finalizado com sua responsividade, porém ainda precisamos fazer mais uma coisinha ...

# Hora da REFATORAÇÃO

![imagem da Hora da Aventura](http://img2.wikia.nocookie.net/__cb20130504060912/tudosobrehoradeaventura/pt-br/images/8/89/Hora_de_aventura_by_angieeditions09-d5elww0.png)

Percebeu que estamos chamando a mesma _font_ em 2 arquivos diferentes? Bom como essa será a _font_ padrão do projeto vamos adicionar essa _font_, em `boson-typo`:

```
@import url(http://fonts.googleapis.com/css?family=Coda)

$font-family = 'Coda', cursive
$font-bold = normal
$font-size-base = 16px
$font-align = left

// Setando a font-size base para o REM
html  
  font-size: $font-size-base
  font-family: $font-family

```

Aproveitamos já para setar no `html` o tamanho e a família da _font_, o interessante de usar REM é que para aumentar ou diminuirmos nossos textos basta mudar o tamanho da _font_ no `html` e retiramos a chamada de `atom-text` e `atom-title`.

Com isso precisamos dar uma corrigida nos tamanhos das _fonts_ do **menu** e do **botão matricule-se**.

Vamos mudar o tamanho das _fonts_ do `atom-link-menu`:

```
.atom-link-menu
  @extend $atom-link
  color: #fff
  text-transform: uppercase
  font-size: 1rem
  // font maior para o tablet por causa do espaço
  @media (min-width: $tablet-size)
    font-size: 1.3rem
    // font menor para o desktop para deixar horizontal
  @media (min-width: $desktop-size)
    font-size: 0.9rem
    letter-spacing: 0.0625*2rem

```

E do _placeholder_ `atom-button-matricule-se` pois como ele é extendido no átomo `atom-button-matricule-se-small` não precisamos mudar em mais nenhum lugar.

```
$atom-button-matricule-se
  @extend $atom-button
  background-color: $verde-claro
  color: $branco
  font-size: 0.8rem
  font-weight: 800
  text-transform: uppercase
  letter-spacing: 0.0625*1rem
  padding-top: 8px

```

Para corrigir o espaçamento entre as seções vamos retirar o margin de cima do `atom-title-secondary`:

```
.atom-title-secondary
  @extend $atom-title
  color: $azul-claro
  font-family: 'Coda', cursive
  font-size: 2rem
  margin-top: 0
  text-align: center

```

E mudar quando for `desktop` retirar o `padding-top` de `molecule-video-text`:

```
.molecule-video-text
  background-color: $branco
  padding-top: 2rem
  @media (min-width: $desktop-size)
    padding-top: 0

```

Ótimo agora o `header` já está ajeitadinho.

![tela mostrando o header no mobile](https://cldup.com/TEBjM8jCz0.png) ![tela mostrando o header no tablet](https://cldup.com/9g49_UKvak.png) ![tela mostrando o header no desktop](https://cldup.com/EdUUvN26UD.png)

![Voltemos ao assunto por favor](http://estragafilmes.blog.br/wp-content/uploads/2011/06/DE-VOLTA-PARA-O-FUTURO.jpg)

Vamos voltar para o layout e ver qual o próximo componente a ser estilizado.

[Parte 3](http://nomadev.com.br/passo-a-passo-como-desenvolver-com-atomic-design-mobile-first-e-stylus-parte-3/)
