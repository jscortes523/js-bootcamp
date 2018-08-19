let calification = function(gradePercent)
{
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


let gradeCalculator = function(studentScore, topScore = 100)
{
    let scorePercent = (studentScore/topScore)*100

    let grade = calification(scorePercent)

    return `${studentScore}/${topScore} --> You got a ${grade} (${scorePercent}%)`
}


console.log(gradeCalculator(80))
console.log(gradeCalculator(70))
console.log(gradeCalculator(60))
console.log(gradeCalculator(32))
console.log(gradeCalculator(8,8.5))
