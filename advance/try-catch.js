'use strict' //No permite la libertad en la no declaración y asignación de las variables
             //somete el código a validación sintactica

let calification = function(score,totalScore)
{   
    
    if(typeof score !== 'number' || typeof totalScore !=='number') throw Error('Both values must be number')
    
    const gradePercent = (score/totalScore)*100
    let possibleScore 
    
    if(gradePercent >= 90 && gradePercent <=100)
    {
        possibleScore = 'A'
    } else if(gradePercent < 90 && gradePercent >= 80 )
    {
        possibleScore = 'B'
    } else if(gradePercent < 80 && gradePercent >= 70 )
    {
        possibleScore = 'C'
    }else if(gradePercent < 70 && gradePercent >= 60 )
    {
        possibleScore = 'D'
    }else
    {
        possibleScore = 'F'
    }

    return possibleScore
}

try{
    const result = calification('p',10)
    console.log(result)
}catch(e){
    console.log(e.message)
}