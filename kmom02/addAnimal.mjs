import { europeanAnimals, americanAnimals, africanAnimals } from "./animals.mjs";


/**
 *  * @module addAnimals 
 * @add {string} animal 
 * @by {string} continent 
 * @descripsion adds animal by continent 
 * 
 */
function addAnimal(continent, animal) {
    /* 
        let euro = continent.includes("europe");
        europeanAnimals.push(animal);
        console.log(euro); */
    if (continent = "europe") {
        europeanAnimals.push(animal);
        return europeanAnimals
    }
    if (continent = "africa") {
        africanAnimals.push(animal);
        return africanAnimals
    }
    if (continent = "america") {
        americanAnimals.push(animal);
        return americanAnimals
    };
}


console.log("europe", addAnimal("europe", "dog"), "africa", addAnimal("africa", "cat"));
/* console.log("africa", addAnimal("africa", "cat"));
console.log("america", addAnimal("america", "lion")) */

export { addAnimal }