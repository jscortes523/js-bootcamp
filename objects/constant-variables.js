const dog = {
   kind: 'Canine',
   name: 'Tato'
}

//No se puede modificar el objeto pero si sus atributos
//Constentes aquellos que no son reasingnadas durante el proceso de ejecución o alcance del bloque de código
/*dog = {
    kind: 'Canine',
   name: 'Daisy'
}*/

dog.kind = 'New Canine'

console.log(dog) 