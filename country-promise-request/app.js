
document.querySelector('#country-code').addEventListener("change",(e)=>{

    
    getCountryInfo(e.target.value).then((country) => {
        document.querySelector('#country-name').textContent = country.name
    }, (error) => {
        document.querySelector('#country-name').textContent = error
    })
    
})

