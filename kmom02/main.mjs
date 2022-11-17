/**
 * @module main runs the main code.
 */

import { prettyPrint } from "./prettyPrint.mjs";
import { addAnimal } from "./addAnimal.mjs";



let pig = addAnimal("europe", "pig")
prettyPrint("europe")
prettyPrint("america")

export { addAnimal }