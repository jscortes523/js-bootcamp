
document.querySelector('#country-code').addEventListener("change",(e)=>{
    
    getCountryInfo(e.target.value).then((name) => {
        document.querySelector('#country-name').textContent = name
    }).catch((error) => {
        document.querySelector('#country-name').textContent = error
    })
    
})

