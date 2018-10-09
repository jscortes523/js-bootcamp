
getLocationInfo().then((location) => {

     getCountryInfo(location.countryCode).then((country) => {

        document.querySelector('#country-name').textContent = country.name

    }).catch((error) => {
        const errorElement = document.createElement('p')
        errorElement.textContent = error
    
        document.querySelector('#error-message').appendChild(errorElement)    
    })

    document.querySelector('#host-name').textContent = location.host
    document.querySelector('#ip-name').textContent = location.ip

}).catch((error) => {
    
    const errorElement = document.createElement('p')
    errorElement.textContent = error

    document.querySelector('#error-message').appendChild(errorElement)
})

/* const countryName = getCountryInfo(locationInfo.countryCode)

document.querySelector('#country-code').addEventListener("change",(e)=>{
    
    getCountryInfo(e.target.value).then((name) => {
        document.querySelector('#country-name').textContent = name
    }).catch((error) => {
        document.querySelector('#country-name').textContent = error
    })
    
})
 */

 getCurrentCountry().then((country) => {
     console.log(country.name)
 }).catch((error) => {
     console.log(error)
 })