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