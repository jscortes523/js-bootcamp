const getTwoTimes = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num*2) : reject('Man is not a number, DONKEY!')
    },200)
})

const getProcess = async () =>{
    let data = await getTwoTimes(4)
    data = await getTwoTimes(data)

    return data
}

getProcess( ).then((data) => {
    console.log(`Final Result: ${data}`)
}).catch((error) => {
    console.log('Error was ',error)
})