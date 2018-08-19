let accountObject = {
    name: 'Juan Cortes',
    expenses: 0,
    income:0
}


//References from function --> Only can be set attributes
let addExpense = function(account, expense){
    account.expenses = account.expenses + expense //--> Solo atributos

    /*
    account = {new object declaration} No afecta el objeto referenciado
    */
}

//References set an attribute from his scope
addExpense(accountObject,250)
console.log(accountObject)

//Declare a variable than will be equal to created object
let otherAccount = accountObject
otherAccount.income = 12500 //establece un bind al objeto original, sólo permite afectar atributos
console.log(accountObject) 




//Challenge 
console.log('Challenge!!')

let myAccount = {
    name: 'Tato Cortes',
    expenses: 0,
    income:0
}

let addIncome = function(account, incomeValue){
    account.income = account.income + incomeValue
}

let resetAccount = function(account){
  
    //Choise 1
    account.expenses = 0
    account.income = 0

    //Choise 2
    /*return {
        name: account.name,
        expenses: 0,
        income: 0
    }*/
}

let accountSummary = function(account)
{
    let available = account.income - account.expenses
    return `Account for ${account.name} has $${available}. $${account.income} in income. $${account.expenses}`
}

addExpense(myAccount,2550)
addIncome(myAccount,9500)
console.log(accountSummary(myAccount))

resetAccount(myAccount)
console.log(accountSummary(myAccount))
