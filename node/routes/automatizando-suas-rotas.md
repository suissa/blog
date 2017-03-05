#PORRA ESSE BLOG ME FODEO!!


#PERDI TODO O TEXTO!!!!


Como eu perdi todo meu texto deixarei o código pelo menos para vocês, depois que eu me acalmar re-escrevo **essa bosta!!!**

Primeiro o módulo para pegar os nomes dos módulos pelas suas pastas:

```js
const fs = require('fs')
const path = require('path')
const MODULES_PATH = './server/modules'
const IGNORE_MODULES = ['app', 'router']

const isDir = (srcpath, file) => fs.statSync(path.join(srcpath, file)).isDirectory()
const getModules = (srcpath) => {
  return fs.readdirSync(srcpath).filter((module) => {
    return (isDir(srcpath, module) && !IGNORE_MODULES.includes(module.toLowerCase()))
  })
}

module.exports = getModules(MODULES_PATH)
```

```js
const MODULES_PATH = './../../'
const router = require('express').Router()

router.get('/', function(request, response, next) {
  response.send('PONG')
})

const modules = require('../../../../scripts/getModules.js')
modules.map((el, i) => {
  router.use('/'+el.toLowerCase()+'s', require(MODULES_PATH+el+'/routes'))
})

module.exports = router
```
