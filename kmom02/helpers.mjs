import { addAnimal } from "./mjs/addAnimal.mjs";
import { africanAnimals, americanAnimals, europeanAnimals } from "./animals.mjs";
/**
 * @function prettyPrint exports all animals in a conntinent
 * @param {string} continent
 */
function prettyPrint(continent) {
    let animalsFromContinent = ""
    console.log("--- REPORT ---", continent);

    if (continent.indexOf("africa") > -1) {
        const africa = africanAnimals.map(function(animal) {
            return '*   ' + animal;
        });
        console.log(africa)
    }
    if (continent.indexOf("america") > -1) {
        const america = americanAnimals.map(function(animal) {
            return '*   ' + animal;
        });
        console.log(america)
    }
    if (continent.indexOf("europe") > -1) {
        const europe = europeanAnimals.map(function(animal) {
            return '*   ' + animal;
        });
        console.log(europe)
    }
    return animalsFromContinent
}


/**
 *@function getAnimalsByContinent
 * @param {string} continent
 * @returns a random animal from the chosen continent.
 */
function getRandomAnimal(continent) {
    if (continent == "europe") {
        console.log("europeanAnimals");
    } else if (continent == "africa") {
        const africa = africanAnimals.map(function(animal) {
            return animal;
        });
    } else if (continent == "america") {}
    const randomAnimal = allAnimals[Math.floor(Math.random() * allAnimals.length)];
    return randomAnimal;
};
/**
 *
 * @param {string} continent
 * @returns a random animal from the chosen continent.
 */
function removeAnimal(animal, continent) {
    console.log(animal);
};
/**
 *
 * @param {string} continent
 * @returns a random animal from the chosen continent.
 */
function getAnimalsByContinent(animal, continent) {
    console.log(animal, continent);
};

function allAnimals(continent) {
    if (continent = "europe") {
        prettyPrint(europeanAnimals)
    }

}

/* const result = addAnimal("europe", "pigg"); */
/* console.log(getRandomAnimal("europe"), result); */

export {
    getRandomAnimal,
    addAnimal,
    allAnimals,
    removeAnimal,
    getAnimalsByContinent,
    prettyPrint
};