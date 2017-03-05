// ```
// SELECT ci_cod, ci_titulo, ci_vm, ci_vr, ci_erro, ci_incerteza, ci_erro_incerteza, ci_criterio_aceitacao 
// FROM items 
// WHERE ci_vm <> "0,00"
// GROUP BY ci_titulo
// ORDER BY ci_vm ASC
// ```

const reduzParaObjeto = (acc, cur) => Object.assign(acc, cur)

const fields = ['ci_cod', 'ci_titulo', 'ci_vm', 'ci_vr', 'ci_erro', 'ci_incerteza']

const select = (e, i) => fields.map( (f, pos) => ({[f]: e[f]}) )
                                .reduce( reduzParaObjeto, {})

const where = (e, i) => e.ci_vm !== "0,00"

const o_by = 'ci_vm'
const order = {'ASC': (a, b) => a - b, 'DESC': (a, b) => a + b}
const orderBy = (a, b) => 
  order.ASC(parseFloat(a[o_by].replace(',', '.')),parseFloat(b[o_by].replace(',', '.')))

const g_by = 'ci_titulo'
const groupBy = (select, element) => {
  (select[element[g_by]] = select[element[g_by]] || []).push(element)
  return select
} 

const arr = require('./items.js')

const resultado = arr.map(select).filter(where).sort(orderBy).reduce(groupBy, {})

console.log('resultado: \n', resultado)
