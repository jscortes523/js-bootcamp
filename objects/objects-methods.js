let restaurant = {
    name:'Kuty',
    guestCapacity:100,
    guestCount:0,
    checkAvailability: function(partySize){
        let seatLeft = this.guestCapacity - this.guestCount
        return seatLeft >= partySize
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(85)
console.log(restaurant.checkAvailability(26))

restaurant.removeParty(50)
console.log(restaurant.checkAvailability(30))