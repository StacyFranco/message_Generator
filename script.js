// Project Relax Day!!!



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
    set activites(NewActivity) {
        if (typeof NewActivity === 'string' && NewActivity.length > 0 && !this._activites.some((x) => x === NewActivity)) {
            this._activites.push(NewActivity);
        }
    },
    set foods(NewFood) {
        if (typeof NewFood === 'string' && NewFood.length > 0 && !this._foods.some((x) => x === NewFood)) {
            this._foods.push(NewFood);
        }
    },

}

// changing enumerable properties ( so they don't appear together if the getters on the for..in loop)
Object.defineProperties(messageData, {
    _places: {enumerable: false},
    _activites: {enumerable: false},
    _foods: {enumerable: false},
});


// Function for randomize message:
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
messageChoosed = message();
//console.log(messageChose)

// Writing the complete message:
console.log();
 console.log('                TAKE A DAY FOR RELAX!                    ')
 console.log('=========================================================')
 //console.log(`You should go to a ${messageChose[0]}! Maybe do a ${messageChose[1]}, and you must try a ${messageChose[2]}!`)
 console.log(`    * Your lucky place for today: ${messageChoosed[0]}!`);
 console.log(`    * Maybe do this activity: ${messageChoosed[1]}!`);
 console.log(`    * You must try: ${messageChoosed[2]}!`);
 console.log();