import { africanAnimals, americanAnimals, europeanAnimals } from './animals.mjs';

/**
 * @function prettyPrint exports all animals in a conntinent
 * @param {string} continent 
 */
function prettyPrint(continent) {
    console.log("--- REPORT ---", continent);

    if (continent.indexOf("africa") > -1) {
        let africa = africanAnimals.map(function(animal) {
            return '*   ' + animal;
        })
        console.log(africa)
    }
    if (continent.indexOf("america") > -1) {
        let america = americanAnimals.map(function(animal) {
            return '*   ' + animal;
        })
        console.log(america)
    }
    if (continent.indexOf("europe") > -1) {
        let europe = europeanAnimals.map(function(animal) {
            return '*   ' + animal;
        })
        console.log(europe)
    }
}


let reto = {

    prettyPrint: prettyPrint,
}

export { prettyPrint }