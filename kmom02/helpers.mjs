import { addAnimal } from "./addAnimal.mjs";
import { africanAnimals, americanAnimals, europeanAnimals as allAnimals } from "./animals.mjs";
/**
 *
 * @param {string} continent
 * @returns a random animal from the chosen continent.
 */
function getRandomAnimal (continent) {
    if (continent == "europe") {
        console.log("europeanAnimals");
    } else if (continent == "africa") {
        const africa = africanAnimals.map(function (animal) {
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
function removeAnimal (animal, continent) {
    console.log(animal);
};
/**
 *
 * @param {string} continent
 * @returns a random animal from the chosen continent.
 */
function getAnimalsByContinent (animal, continent) {
    console.log(animal, continent);
};

const result = addAnimal("europe", "pigg");
console.log(getRandomAnimal("europe"), result);
export {
    getRandomAnimal,
    addAnimal,
    allAnimals,
    removeAnimal,
    getAnimalsByContinent
};
