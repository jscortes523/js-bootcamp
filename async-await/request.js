
const getCountryInfo =async (code) => {
    
    const response = await fetch(`http://restcountries.eu/rest/v2/alpha/${code.toLowerCase()}`)

    if(response.status === 200){
        return await response.json()

    }else{
        throw new Error('Country cant Fetch!!')
    }
    // }).then((country)=>{
    //     return country.name
    // })

}

const getCurrentCountry = async() => {

    const currentLocation = await getLocationInfo()
    
    return  getCountryInfo(currentLocation.countryCode)
}

const getLocationInfo = async () => {

    const TOKEN = '622a3230ed8c45'

    const response = await fetch(`https://ipinfo.io/json?token=${TOKEN}`)

    if(response.status === 200){
        const location = await response.json()

        return {
            countryCode: location.country,
            host: location.hostname,
            ip:location.ip            
        }

    }else{
        throw new Error('Your Location not Found')
    }
}


