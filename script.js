// Project Relex Day!!!



// Data Base for the message Generator:
const messageData = {
    _places: ['Beach', 'Park', 'Moutain', 'Lake or River', 'Waterfall', 'Farm', 'Amusement park', 'Touristic City', 'Aquarium', 'museun'],
    _activites: ['truth dare', 'crafty day', 'spa day', 'bake off', 'camping', 'treasure hunt',
        'plant a tree', 'stargaze', 'workout', 'water ballon figth', 'horseback riding', 'read a book'],
    _foods: ['Picnic', 'Italian Food', 'Japanese Food', 'Mexican Food', 'Fancy eat',
        'Pizza', 'Junk Food', 'barbecue', 'street food', 'Potluck', 'Tematic eating'],
        

    // getters
    get places() {
        return this._places;
    },
    get activites() {
        return this._activites;
    },
    get foods() {
        return this._foods;
    },

    //setters
    set places(NewPlace) {
        if (typeof NewPlace === 'string' && NewPlace.length > 0 && !this._places.some((x) => x === NewPlace)) {
            this._places.push(NewPlace);
        }
    },
    set activites(NewActivite) {
        if (typeof NewActivite === 'string' && NewActivite.length > 0 && !this._activites.some((x) => x === NewActivite)) {
            this._activites.push(NewActivite);
        }
    },
    set foods(NewFood) {
        if (typeof NewFood === 'string' && NewFood.length > 0 && !this._foods.some((x) => x === NewFood)) {
            this._foods.push(NewFood);
        }
    },

}

// changing enurable propetries ( so they dont appear together if the getters on the for..in loop)
Object.defineProperties(messageData, {
    _places: {enumerable: false},
    _activites: {enumerable: false},
    _foods: {enumerable: false},
});


// Function for randonize message:
const random = (arr) => arr[Math.floor(Math.random() * (arr.length))]

// Function to get the message:
const message = () => {
    let aux = [];
    for (let key in messageData) {
        aux.push(random(messageData[key]))
        //console.log(key)
    }
    return aux;

}

/*
// Testing the setters
console.log(messageData.foods);
messageData.foods = 'test';
messageData._foods.push('test2')
console.log(messageData.foods);
*/

// Choosen the words:
messageChose = message();
//console.log(messageChose)

// Writing the complete message:
console.log();
 console.log('                TAKE A DAY FOR RELEX!                    ')
 console.log('=========================================================')
 //console.log(`You should go to a ${messageChose[0]}! Maybe do a ${messageChose[1]}, and you must try a ${messageChose[2]}!`)
 console.log(`    * Your lucky place for today: ${messageChose[0]}!`);
 console.log(`    * Maybe do this activite: ${messageChose[1]}!`);
 console.log(`    * You must try: ${messageChose[2]}!`);
 console.log();