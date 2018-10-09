const callbackExample = (callback) => {

    setTimeout( () => {
        callback(undefined,'Callback calling (two seconds waiting..)')
    },2000 )

}

callbackExample((error,data) => {
    if(error) {

    }else{
        console.log(data)
    }
})


const promiseExample = new Promise((resolve,reject) =>{

    setTimeout(() => {
        resolve('Promise calling is coming a little late (2,5 seconds...)')
        
    }, 2500);
})

promiseExample.then( (data) => {
    console.log(data)
}, (error) => {
    console.log(error)
} )


//Chainin Promise
const chaininPromise = (num) => new Promise((resolve,reject) =>{

    setTimeout(() => {

        typeof num === 'number' ? resolve(num*2) : reject('Argument must be a number')

    }, 500);
})

//Chainin calling
chaininPromise(3).then( (num) =>  {
    chaininPromise(num).then((num) => {
        console.log(`Multiplication = ${num}`)
    }, (err) => {
        console.log(err)
    })
},(err)=> {
    console.log(err)
})


//Chainin return
chaininPromise(4).then((num) => {
    return chaininPromise(num)
}).then( (num) => {
    return chaininPromise(num)
} ).then((num) => {
    console.log(num)
}).catch((err) => {
    console.log(`Error: ${err}`)
})