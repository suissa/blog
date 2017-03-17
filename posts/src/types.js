const VALUES = [ 0, '0', false, null, undefined, 1, -1, {}, () => {} ]

const MY_REAL_VALUE = 0

const testMyValue = ( MY_REAL_VALUE ) => ( value ) => value == MY_REAL_VALUE

const result = VALUES.filter( testMyValue( MY_REAL_VALUE ) )

console.log(`Os seguinte valores foram iguais a ${MY_REAL_VALUE}: \n `, result)

/* 
Os seguinte valores foram iguais a 0: 
  [ 0, '0', false ]
*/