const herName = 'Andrea Lopez'

//Asignación del valor usando el operador condicional
const loveMe = herName.toLowerCase().includes('andrea lopez') ? 'Love Me' : 'Avoid me'

console.log(`${herName} ${loveMe}`)

//También se puede usar haciendo llamado a funciones

const showLove = () => console.log('Falling in love')

const failLove = () => console.log('Abort! Jump! Dont touch!')

herName.length >= 9 ? showLove() : failLove()

//Challange
const teamMember = ['Andrea','Juan','Chowie','Tato']

const teamApproved = () => `Team size: ${teamMember.length}`
const teamInvalid = () => 'Too many members on your team'

const teamApproval = teamMember.length <= 3 ? teamApproved() : teamInvalid()

console.log(teamApproval)