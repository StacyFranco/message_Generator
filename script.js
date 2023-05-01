// Project Relex Day!!!

// Data Base for the message Generator:
const places = ['Beach','Park','Moutain','Lake or River','Waterfall','Farm','Amusement park','Touristic City','Aquarium','museun'];
const activites = ['truth dare','crafty day','spa day','bake off', 'camping','treasure hunt',
 'plant a tree','stargaze','workout','water ballon figth','horseback riding','read a book'];
const foods = ['Picnic','Italian Food','Japanese Food','Mexican Food','Fancy eat',
 'Pizza','Junk Food','barbecue','street food','Potluck', 'Tematic eating'];


// Function for randonize message:
const random = (arr) => arr[Math.floor(Math.random()*(arr.length))]

// Choosen the words:
const place = random(places);
const activite = random(activites);
const food = random(foods);
  

// Writing the complete message:
console.log('                TAKE A DAY FOR RELEX!                    ')
console.log('=========================================================')
console.log(`You should go to a ${place}! Maybe do a ${activite}, and you must try a ${food}!`)