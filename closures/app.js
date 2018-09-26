//Closure fundamental exercise
const  myFunction = () => {
  const message = 'This is the message of the first closure example'

  const printMessage = () => {
    return message
  }

  return printMessage

}

const myFirstExample = myFunction()
console.log(myFirstExample())


//Closure as object constructor or object factory
function creaSumador(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const suma5 = creaSumador(5);
  console.log(suma5)
  

  const suma10 = creaSumador(10);
  
  
  console.log(suma5(2));  // muestra 7
  console.log(suma10(2)); // muestra 12 

  const createCounter = () => {
    let count = 0

    return {
      increment()  { count++  },
      decrement()  { count-- },
      get() { return count }
    }
  }

  const counterInstance = createCounter()
  counterInstance.decrement()
  counterInstance.increment()
  counterInstance.increment()
  console.log(counterInstance.get())