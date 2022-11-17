import { europeanAnimals, americanAnimals, africanAnimals } from "./animals.mjs";

/**
 *  * @module addAnimals
 * @add {string} animal
 * @by {string} continent
 * @descripsion adds animal by continent
 *
 */
function addAnimal (continent, animal) {
    /*
        let euro = continent.includes("europe");
        europeanAnimals.push(animal);
        console.log(euro); */
    if (continent == "europe") {
        const europe = europeanAnimals.push(animal);
        return animal + " added to " + continent;
    }
    if (continent == "africa") {
        africanAnimals.push(animal);
        return animal + "added to " + continent;
    }
    if (continent == "america") {
        americanAnimals.push(animal);
        return animal + "added to " + continent;
    }
    if (continent == "") {
        americanAnimals.push(animal);
        africanAnimals.push(animal);
        europeanAnimals.push(animal);
        return americanAnimals + africanAnimals + europeanAnimals;
    }
}
console.log(addAnimal("europe", "cat"));

console.log(addAnimal("africa", "elefant"));
console.log(addAnimal("", "hel"));

export { addAnimal };
