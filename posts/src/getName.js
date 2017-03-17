const getName = ( obj ) => obj.name

const getResult = ( data ) => data.map ? data.map( getName )  : getName( data )

const arr = [
  { name: 'Suissa', age: 32 },
  { name: 'Jesus', age: 2017 }
]

const obj = { name: 'Suissa', age: 32 }

console.log(`Nomes: `, getResult( arr ) )

console.log(`Nome: `, getResult( obj ) )