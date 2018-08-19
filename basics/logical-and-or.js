let isGuestOneVegan = false
let isGuestTwoVegan = false


if(isGuestOneVegan && isGuestTwoVegan)
{
    console.log('Only Vegan Food')
}
else if(isGuestOneVegan || isGuestTwoVegan)
{
    console.log('Offer some vegan dishes')
}
else
{
    console.log('Want meat!')
}