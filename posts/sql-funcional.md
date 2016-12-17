# SQL

Vamos usar o seguinte array:

```js
const arr = [
  {
      "ci_cod": 11122016100,
      "ci_titulo": "MEDIÇÕES EXTERNA",
      "ci_vm": "0,00",
      "ci_vr": "0,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,00",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,00",
      "ci_criterio_aceitacao": "0,00",
      "ci_situacao": "------",
      "_id": "584e2f7a3e663748e71c1fd3",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016101,
      "ci_titulo": "MEDIÇÕES EXTERNA",
      "ci_vm": "1,30",
      "ci_vr": "1,30",
      "ci_erro": "0,00",
      "ci_incerteza": "0,01",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,01",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fd2",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016102,
      "ci_titulo": "MEDIÇÕES EXTERNA",
      "ci_vm": "100,00",
      "ci_vr": "100,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,01",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,01",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fd1",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016103,
      "ci_titulo": "MEDIÇÕES EXTERNA",
      "ci_vm": "200,00",
      "ci_vr": "200,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,01",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,01",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fd0",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016104,
      "ci_titulo": "MEDIÇÕES EXTERNA",
      "ci_vm": "300,00",
      "ci_vr": "300,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,01",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,01",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fcf",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016105,
      "ci_titulo": "MEDIÇÕES EXTERNA",
      "ci_vm": "500,00",
      "ci_vr": "500,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,01",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,01",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fce",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016106,
      "ci_titulo": "MEDIÇÕES EXTERNA",
      "ci_vm": "592,00",
      "ci_vr": "592,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,01",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,01",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fcd",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016107,
      "ci_titulo": "MEDIÇÃO INTERNA",
      "ci_vm": "40,00",
      "ci_vr": "39,998",
      "ci_erro": "0,002",
      "ci_incerteza": "0,010",
      "ci_unidade": "0",
      "ci_erro_incerteza": "0,012",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fcc",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016108,
      "ci_titulo": "MEDIÇÃO PROFUNDIDADE",
      "ci_vm": "0,00",
      "ci_vr": "0,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,00",
      "ci_unidade": "0,00",
      "ci_erro_incerteza": "0,00",
      "ci_criterio_aceitacao": "0,00",
      "ci_situacao": "-------",
      "_id": "584e2f7a3e663748e71c1fcb",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016109,
      "ci_titulo": "MEDIÇÃO RESSALTO",
      "ci_vm": "50,00",
      "ci_vr": "50,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,01",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,01",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fca",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016110,
      "ci_titulo": "PARELELISMO",
      "ci_vm": "0,00",
      "ci_vr": "0,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,00",
      "ci_unidade": "-------",
      "ci_erro_incerteza": "0,00",
      "ci_criterio_aceitacao": "0,00",
      "ci_situacao": "-------",
      "_id": "584e2f7a3e663748e71c1fc9",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016111,
      "ci_titulo": "EXTERNA",
      "ci_vm": "25,00",
      "ci_vr": "25,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,01",
      "ci_unidade": "mm",
      "ci_erro_incerteza": "0,01",
      "ci_criterio_aceitacao": "0,18",
      "ci_situacao": "aprovado",
      "_id": "584e2f7a3e663748e71c1fc8",
      "ci_subtitulo": false
  },
  {
      "ci_cod": 11122016112,
      "ci_titulo": "INTERNA",
      "ci_vm": "0,00",
      "ci_vr": "0,00",
      "ci_erro": "0,00",
      "ci_incerteza": "0,00",
      "ci_unidade": "-------",
      "ci_erro_incerteza": "0,00",
      "ci_criterio_aceitacao": "0,00",
      "ci_situacao": "-------",
      "_id": "584e2f7a3e663748e71c1fc7",
      "ci_subtitulo": false
  }
]
```

## select

Vamos selecionar apenas o campo `ci_titulo`:

```js
> const field = 'ci_titulo'
> const select = (e, i) => ({ [field]: e[field] })
> arr.map(select)
[ { c_titulo: 'MEDIÇÕES EXTERNA' },
  { c_titulo: 'MEDIÇÕES EXTERNA' },
  { c_titulo: 'MEDIÇÕES EXTERNA' },
  { c_titulo: 'MEDIÇÕES EXTERNA' },
  { c_titulo: 'MEDIÇÕES EXTERNA' },
  { c_titulo: 'MEDIÇÕES EXTERNA' },
  { c_titulo: 'MEDIÇÕES EXTERNA' },
  { c_titulo: 'MEDIÇÃO INTERNA' },
  { c_titulo: 'MEDIÇÃO PROFUNDIDADE' },
  { c_titulo: 'MEDIÇÃO RESSALTO' },
  { c_titulo: 'PARELELISMO' },
  { c_titulo: 'EXTERNA' },
  { c_titulo: 'INTERNA' } ]

```

Ou escolhendo vários campos:


```js
> const fields = ['ci_titulo', 'ci_cod', 'ci_vm']
> const select = (e, i) => fields.map( (f, pos) => ({[f]: e[f]}) ).reduce((acc, cur) => Object.assign(acc, cur), {})
> arr.map(select)
[ { ci_titulo: 'MEDIÇÕES EXTERNA', ci_cod: 11122016100, ci_vm: '0,00' },
  { ci_titulo: 'MEDIÇÕES EXTERNA', ci_cod: 11122016101, ci_vm: '1,30' },
  { ci_titulo: 'MEDIÇÕES EXTERNA', ci_cod: 11122016102, ci_vm: '100,00' },
  { ci_titulo: 'MEDIÇÕES EXTERNA', ci_cod: 11122016103, ci_vm: '200,00' },
  { ci_titulo: 'MEDIÇÕES EXTERNA', ci_cod: 11122016104, ci_vm: '300,00' },
  { ci_titulo: 'MEDIÇÕES EXTERNA', ci_cod: 11122016105, ci_vm: '500,00' },
  { ci_titulo: 'MEDIÇÕES EXTERNA', ci_cod: 11122016106, ci_vm: '592,00' },
  { ci_titulo: 'MEDIÇÃO INTERNA', ci_cod: 11122016107, ci_vm: '40,00' },
  { ci_titulo: 'MEDIÇÃO PROFUNDIDADE', ci_cod: 11122016108, ci_vm: '0,00' },
  { ci_titulo: 'MEDIÇÃO RESSALTO', ci_cod: 11122016109, ci_vm: '50,00' },
  { ci_titulo: 'PARELELISMO', ci_cod: 11122016110, ci_vm: '0,00' },
  { ci_titulo: 'EXTERNA', ci_cod: 11122016111, ci_vm: '25,00' },
  { ci_titulo: 'INTERNA', ci_cod: 11122016112, ci_vm: '0,00' } ]

```

## where

```js
> const where = (e, i) => parseFloat(e.ci_vm.replace(',', '.')) >= 500 
> arr.filter(where)
[ { ci_cod: 11122016105,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '500,00',
    ci_vr: '500,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fce',
    ci_subtitulo: false },
  { ci_cod: 11122016106,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '592,00',
    ci_vr: '592,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fcd',
    ci_subtitulo: false } ]
```


## order by
```js
> const by = 'ci_vm'
> const order = {'ASC': (a, b) => a - b, 'DESC': (a, b) => a + b}
> const orderBy = (a, b) => order.ASC(parseFloat(a[by].replace(',', '.')),parseFloat(b[by].replace(',', '.')))
> arr.sort(orderBy)
[ { ci_cod: 11122016100,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '0,00',
    ci_vr: '0,00',
    ci_erro: '0,00',
    ci_incerteza: '0,00',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,00',
    ci_criterio_aceitacao: '0,00',
    ci_situacao: '------',
    _id: '584e2f7a3e663748e71c1fd3',
    ci_subtitulo: false },
  { ci_cod: 11122016112,
    ci_titulo: 'INTERNA',
    ci_vm: '0,00',
    ci_vr: '0,00',
    ci_erro: '0,00',
    ci_incerteza: '0,00',
    ci_unidade: '-------',
    ci_erro_incerteza: '0,00',
    ci_criterio_aceitacao: '0,00',
    ci_situacao: '-------',
    _id: '584e2f7a3e663748e71c1fc7',
    ci_subtitulo: false },
  { ci_cod: 11122016110,
    ci_titulo: 'PARELELISMO',
    ci_vm: '0,00',
    ci_vr: '0,00',
    ci_erro: '0,00',
    ci_incerteza: '0,00',
    ci_unidade: '-------',
    ci_erro_incerteza: '0,00',
    ci_criterio_aceitacao: '0,00',
    ci_situacao: '-------',
    _id: '584e2f7a3e663748e71c1fc9',
    ci_subtitulo: false },
  { ci_cod: 11122016108,
    ci_titulo: 'MEDIÇÃO PROFUNDIDADE',
    ci_vm: '0,00',
    ci_vr: '0,00',
    ci_erro: '0,00',
    ci_incerteza: '0,00',
    ci_unidade: '0,00',
    ci_erro_incerteza: '0,00',
    ci_criterio_aceitacao: '0,00',
    ci_situacao: '-------',
    _id: '584e2f7a3e663748e71c1fcb',
    ci_subtitulo: false },
  { ci_cod: 11122016101,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '1,30',
    ci_vr: '1,30',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fd2',
    ci_subtitulo: false },
  { ci_cod: 11122016111,
    ci_titulo: 'EXTERNA',
    ci_vm: '25,00',
    ci_vr: '25,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fc8',
    ci_subtitulo: false },
  { ci_cod: 11122016107,
    ci_titulo: 'MEDIÇÃO INTERNA',
    ci_vm: '40,00',
    ci_vr: '39,998',
    ci_erro: '0,002',
    ci_incerteza: '0,010',
    ci_unidade: '0',
    ci_erro_incerteza: '0,012',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fcc',
    ci_subtitulo: false },
  { ci_cod: 11122016109,
    ci_titulo: 'MEDIÇÃO RESSALTO',
    ci_vm: '50,00',
    ci_vr: '50,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fca',
    ci_subtitulo: false },
  { ci_cod: 11122016102,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '100,00',
    ci_vr: '100,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fd1',
    ci_subtitulo: false },
  { ci_cod: 11122016103,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '200,00',
    ci_vr: '200,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fd0',
    ci_subtitulo: false },
  { ci_cod: 11122016104,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '300,00',
    ci_vr: '300,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fcf',
    ci_subtitulo: false },
  { ci_cod: 11122016105,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '500,00',
    ci_vr: '500,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fce',
    ci_subtitulo: false },
  { ci_cod: 11122016106,
    ci_titulo: 'MEDIÇÕES EXTERNA',
    ci_vm: '592,00',
    ci_vr: '592,00',
    ci_erro: '0,00',
    ci_incerteza: '0,01',
    ci_unidade: 'mm',
    ci_erro_incerteza: '0,01',
    ci_criterio_aceitacao: '0,18',
    ci_situacao: 'aprovado',
    _id: '584e2f7a3e663748e71c1fcd',
    ci_subtitulo: false } ]

```

## group by

```js
const by = 'ci_titulo'
const groupBy = (select, element) => {
  (select[element[by]] = select[element[by]] || []).push(element)
  return select
} 
> arr.reduce(g, {})
{ 'MEDIÇÕES EXTERNA': 
   [ { ci_cod: 11122016100,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '0,00',
       ci_vr: '0,00',
       ci_erro: '0,00',
       ci_incerteza: '0,00',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,00',
       ci_criterio_aceitacao: '0,00',
       ci_situacao: '------',
       _id: '584e2f7a3e663748e71c1fd3',
       ci_subtitulo: false },
     { ci_cod: 11122016101,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '1,30',
       ci_vr: '1,30',
       ci_erro: '0,00',
       ci_incerteza: '0,01',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,01',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fd2',
       ci_subtitulo: false },
     { ci_cod: 11122016102,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '100,00',
       ci_vr: '100,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,01',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fd1',
       ci_subtitulo: false },
     { ci_cod: 11122016103,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '200,00',
       ci_vr: '200,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,01',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fd0',
       ci_subtitulo: false },
     { ci_cod: 11122016104,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '300,00',
       ci_vr: '300,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,01',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fcf',
       ci_subtitulo: false },
     { ci_cod: 11122016105,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '500,00',
       ci_vr: '500,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,01',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fce',
       ci_subtitulo: false },
     { ci_cod: 11122016106,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '592,00',
       ci_vr: '592,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,01',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fcd',
       ci_subtitulo: false } ],
  'MEDIÇÃO INTERNA': 
   [ { ci_cod: 11122016107,
       ci_titulo: 'MEDIÇÃO INTERNA',
       ci_vm: '40,00',
       ci_vr: '39,998',
       ci_erro: '0,002',
       ci_incerteza: '0,010',
       ci_unidade: '0',
       ci_erro_incerteza: '0,012',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fcc',
       ci_subtitulo: false } ],
  'MEDIÇÃO PROFUNDIDADE': 
   [ { ci_cod: 11122016108,
       ci_titulo: 'MEDIÇÃO PROFUNDIDADE',
       ci_vm: '0,00',
       ci_vr: '0,00',
       ci_erro: '0,00',
       ci_incerteza: '0,00',
       ci_unidade: '0,00',
       ci_erro_incerteza: '0,00',
       ci_criterio_aceitacao: '0,00',
       ci_situacao: '-------',
       _id: '584e2f7a3e663748e71c1fcb',
       ci_subtitulo: false } ],
  'MEDIÇÃO RESSALTO': 
   [ { ci_cod: 11122016109,
       ci_titulo: 'MEDIÇÃO RESSALTO',
       ci_vm: '50,00',
       ci_vr: '50,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,01',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fca',
       ci_subtitulo: false } ],
  PARELELISMO: 
   [ { ci_cod: 11122016110,
       ci_titulo: 'PARELELISMO',
       ci_vm: '0,00',
       ci_vr: '0,00',
       ci_erro: '0,00',
       ci_incerteza: '0,00',
       ci_unidade: '-------',
       ci_erro_incerteza: '0,00',
       ci_criterio_aceitacao: '0,00',
       ci_situacao: '-------',
       _id: '584e2f7a3e663748e71c1fc9',
       ci_subtitulo: false } ],
  EXTERNA: 
   [ { ci_cod: 11122016111,
       ci_titulo: 'EXTERNA',
       ci_vm: '25,00',
       ci_vr: '25,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01',
       ci_unidade: 'mm',
       ci_erro_incerteza: '0,01',
       ci_criterio_aceitacao: '0,18',
       ci_situacao: 'aprovado',
       _id: '584e2f7a3e663748e71c1fc8',
       ci_subtitulo: false } ],
  INTERNA: 
   [ { ci_cod: 11122016112,
       ci_titulo: 'INTERNA',
       ci_vm: '0,00',
       ci_vr: '0,00',
       ci_erro: '0,00',
       ci_incerteza: '0,00',
       ci_unidade: '-------',
       ci_erro_incerteza: '0,00',
       ci_criterio_aceitacao: '0,00',
       ci_situacao: '-------',
       _id: '584e2f7a3e663748e71c1fc7',
       ci_subtitulo: false } ] }

```

## Traduzindo uma query SQL para JS

Faremos a seguinte query:

```
SELECT ci_cod, ci_titulo, ci_vm, ci_vr, ci_erro, ci_incerteza, ci_erro_incerteza, ci_criterio_aceitacao 
FROM items 
WHERE ci_vm <> "0,00"
GROUP BY ci_titulo
ORDER BY ci_vm ASC
```

Agora reusando nossas funções anteriores:

```
const fields = ['ci_cod', 'ci_titulo', 'ci_vm', 'ci_vr', 'ci_erro', 'ci_incerteza']

const select = (e, i) => fields.map( (f, pos) => ({[f]: e[f]}) ).reduce((acc, cur) => Object.assign(acc, cur), {})

const where = (e, i) => e.ci_vm !== "0,00"

const g_by = 'ci_titulo'
const groupBy = (select, element) => {
  (select[element[g_by]] = select[element[g_by]] || []).push(element)
  return select
} 

const o_by = 'ci_vm'
const order = {'ASC': (a, b) => a - b, 'DESC': (a, b) => a + b}
const orderBy = (a, b) => order.ASC(parseFloat(a[o_by].replace(',', '.')),parseFloat(b[o_by].replace(',', '.')))

arr.map(select).filter(where).sort(orderBy).reduce(groupBy, {})
{ 'MEDIÇÕES EXTERNA': 
   [ { ci_cod: 11122016101,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '1,30',
       ci_vr: '1,30',
       ci_erro: '0,00',
       ci_incerteza: '0,01' },
     { ci_cod: 11122016102,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '100,00',
       ci_vr: '100,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01' },
     { ci_cod: 11122016103,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '200,00',
       ci_vr: '200,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01' },
     { ci_cod: 11122016104,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '300,00',
       ci_vr: '300,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01' },
     { ci_cod: 11122016105,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '500,00',
       ci_vr: '500,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01' },
     { ci_cod: 11122016106,
       ci_titulo: 'MEDIÇÕES EXTERNA',
       ci_vm: '592,00',
       ci_vr: '592,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01' } ],
  EXTERNA: 
   [ { ci_cod: 11122016111,
       ci_titulo: 'EXTERNA',
       ci_vm: '25,00',
       ci_vr: '25,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01' } ],
  'MEDIÇÃO INTERNA': 
   [ { ci_cod: 11122016107,
       ci_titulo: 'MEDIÇÃO INTERNA',
       ci_vm: '40,00',
       ci_vr: '39,998',
       ci_erro: '0,002',
       ci_incerteza: '0,010' } ],
  'MEDIÇÃO RESSALTO': 
   [ { ci_cod: 11122016109,
       ci_titulo: 'MEDIÇÃO RESSALTO',
       ci_vm: '50,00',
       ci_vr: '50,00',
       ci_erro: '0,00',
       ci_incerteza: '0,01' } ] }
```

Então veja só como é simples trabalhar com dados no JavaScript!

```js

SELECT ci_cod, ci_titulo, ci_vm, ci_vr, ci_erro, ci_incerteza, ci_erro_incerteza, ci_criterio_aceitacao 
FROM items 
WHERE ci_vm <> "0,00"
GROUP BY ci_titulo
ORDER BY ci_vm ASC

// VIROU ISSO

arr.map(select).filter(where).sort(orderBy).reduce(groupBy, {})
```
