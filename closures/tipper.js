const createTipper = (percentage) => {
    const tipPercent = percentage/100

    return (billValue) => {
        return billValue * tipPercent
    }
}

const tipper15 = createTipper(15)
console.log(tipper15(1000))

const tipper20 = createTipper(20)
console.log(tipper20(35000))