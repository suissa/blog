function Foton() {
  this.spin = 0
  this.mass = 0
  this.electric_charge = 0
  this.isEmited = false
}

Foton.prototype.observe = function() {
  this.isObserved = true
}

function FotonPar() {
  Foton.call(this)
  this.spin = 1
}

function FotonImpar() {
  Foton.call(this)
  this.spin = -1
}

function entrelaçar() {
  FotonPar.prototype = Object.create(Foton.prototype)
  FotonPar.prototype.constructor = FotonPar
  // FotonImpar.prototype = Object.create(Foton.prototype)
  // FotonImpar.prototype.constructor = FotonImpar
}

entrelaçar()

const fotonPar = new Foton()
const fotonImpar = new Foton()

console.log('fotonPar', fotonPar)
console.log('fotonImpar', fotonImpar)
fotonPar.observe()
console.log('fotonPar', fotonPar)
console.log('fotonImpar', fotonImpar)
// console.log('fotonImpar', fotonImpar)
