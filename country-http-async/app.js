
document.querySelector('#country-code').addEventListener("change",(e)=>{

    
    getCountryInfo(e.target.value,(error, country) => {

        if(error){
            document.querySelector('#country-name').textContent
        }else{
            document.querySelector('#country-name').textContent = country.name
        }

    })
    
})

