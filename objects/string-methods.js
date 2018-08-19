let password = 'ionPaSSord212'

//onsole.log(password.toLowerCase().includes('password'))

let isValidPassword = function(password)
{
    
    let lowerPass = password.toLowerCase()
    return password.length > 8 && !lowerPass.includes('password')
}

console.log(isValidPassword(password))