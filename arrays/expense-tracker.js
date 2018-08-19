const account = {
    name:'Juan Cortes',
    expenses:[],
    incomes:[],
    addExpense: function(expense,amount){
        this.expenses.push({
            name:expense,
            amount:amount
        })
    },
    addIncome:function(income,amount){
        this.incomes.push({
            description: income,
            amount: amount
        })
    },
    getAccountSummary:function(){
        let totalExpenses = 0
        let totalIncomes = 0
        this.expenses.forEach(function(expense,index){
            totalExpenses = totalExpenses+expense.amount
        })

        this.incomes.forEach(function(income,index){
            totalIncomes = totalIncomes+income.amount
        })

        return `${this.name} has a balance of $${totalIncomes-totalExpenses}. $${totalIncomes} in incomes and $${totalExpenses} in expenses.`
    }
}

account.addExpense('Gas',80000)
account.addExpense('Icetex',245000)
account.addExpense('Car credit',650000)
account.addIncome('Salary',2500000)
console.log(account.getAccountSummary())