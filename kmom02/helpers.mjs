import { addAnimal } from "./mjs/addAnimal.mjs";
import { africanAnimals, americanAnimals, europeanAnimals } from "./animals.mjs";
/**
 * @function prettyPrint exports all animals in a conntinent
 * @param {string} continent
 */
function prettyPrint (continent) {
    const animalsFromContinent = "";
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
    return animalsFromContinent;
}

/**
 *@function getAnimalsByContinent
 * @param {string} continent
 * @returns a random animal from the chosen continent.
 */
function getRandomAnimal (continent) {
    if (continent === "europe") {
        const randomAnimal = europeanAnimals[Math.floor(Math.random() * europeanAnimals.length)];
        console.log(randomAnimal);
        return randomAnimal;
    } else if (continent === "africa") {
        const randomAnimal = africanAnimals[Math.floor(Math.random() * africanAnimals.length)];
        console.log(randomAnimal);
        return randomAnimal;
    } else if (continent === "america") {
        const randomAnimal = americanAnimals[Math.floor(Math.random() * americanAnimals.length)];
        console.log(randomAnimal);
        return randomAnimal;
    }
};

/**
 *@funktion remove animal
 * @param {string} continent
 * @param {string} animal
 * @returns a random animal from the chosen continent.
 */
function removeAnimal (animal, continent) {
    if (continent === "europe") {
        for (let i = 0; i < europeanAnimals.length; i++) {
            if (europeanAnimals[i] === animal) {
                europeanAnimals.splice(i, 1);
            }
        }
    } else if (continent === "africa") {
        for (let i = 0; i < africanAnimals.length; i++) {
            if (africanAnimals[i] === animal) {
                africanAnimals.splice(i, 1);
            }
        }
    } else if (continent === "america") {
        for (let i = 0; i < americanAnimals.length; i++) {
            if (americanAnimals[i] === animal) {
                americanAnimals.splice(i, 1);
            }
        }
    }
};
/**
 *@function getAnimalsByContinent
 *@param {string} animal
 * @param {string} continent
 * @returns prettyprints all animals based on continent.
 */
function getAnimalsByContinent (animal, continent) {
    console.log(animal, continent);
    if (continent === "europe") {
        prettyPrint(europeanAnimals);
    } else if (continent === "africa") {
        prettyPrint(africanAnimals);
    } else if (continent === "america") {
        prettyPrint(americanAnimals);
    }
};
/**
 * @function allAnimals
 * @param continent prettyPrint all animals
 *  */
function allAnimals () {
    const euroAfrica = europeanAnimals.concat(africanAnimals);
    const ameuroAfrica = euroAfrica.concat(americanAnimals);
    return ameuroAfrica;
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
