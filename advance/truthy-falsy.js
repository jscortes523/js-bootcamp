//Valores que siempre darán falso: false, undefined, cadena vacia, NaN, null, 0
//Todo lo que sea diferente a los valores anteriores dará verdadero

const giftBox = [] //Esta definida por lo tanto no es undefined ni null
const gift = giftBox[0] //Esta referencia no existe cuando el arreglo no tiene items

//Esta reducirá o evitará el uso constante de valores booleanos
console.log(gift ? gift : 'Sorry, there is not gifts')

//Tip: Si la condición implica comparar un valor diferente aquellos
// que dan falso, usar la condición booleana.