/**
 * @module main runs the main code.
 */

import { prettyPrint } from "./prettyPrint.mjs";
import { addAnimal } from "./addAnimal.mjs";
import { sortAnimals } from "./report.mjs";

/* let pig = addAnimal("europe", "pig") */
prettyPrint("europe");
prettyPrint("america");

sortAnimals();

export { addAnimal };
