import { africanAnimals, americanAnimals, europeanAnimals } from "../animals.mjs";

/** 
 * @function allAnimals
 * @param continent prettyPrint all animals
 *  */
function allAnimals() {
    var euro_africa = europeanAnimals.concat(africanAnimals)
    var ameuro_africa = euro_africa.concat(americanAnimals)
    return ameuro_africa

}

console.log(allAnimals().length)