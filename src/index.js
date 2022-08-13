
import { choice, remove } from './helpers';
import fruits from "./foods";



const fruitChoice = choice(fruits);
const numFruitsLeft = remove(fruits, fruitChoice)

console.log(`I'd like on ${fruitChoice}, please!`)
console.log(`Here you go: ${fruitChoice}`)
console.log(`Delicious! May I have another?`)
console.log(`I'm sorry, we are all out. we have ${numFruitsLeft.length} left.`)
