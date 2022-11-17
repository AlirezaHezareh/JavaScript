import { africanAnimals, americanAnimals, europeanAnimals } from './animals.mjs';

/**
 * @function prettyPrint exports all animals in a conntinent
 * @param {string} continent
 */
function prettyPrint (continent) {
    console.log("--- REPORT ---", continent);

    if (continent.indexOf("africa") > -1) {
        const africa = africanAnimals.map(function (animal) {
            return '*   ' + animal;
        });
        console.log(africa);
    }
    if (continent.indexOf("america") > -1) {
        const america = americanAnimals.map(function (animal) {
            return '*   ' + animal;
        });
        console.log(america);
    }
    if (continent.indexOf("europe") > -1) {
        const europe = europeanAnimals.map(function (animal) {
            return '*   ' + animal;
        });
        console.log(europe);
    }
}

export { prettyPrint };
