
const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

const newPokemon = [...pokemon];

console.log("1. an array of pokémon objects where the id is evenly divisible by 3")
console.log(newPokemon.filter(object => object.id % 3 === 0));

console.log("2. an array of pokémon objects that are 'fire' type")
console.log(newPokemon.filter(object => object.types.includes("fire")))

console.log("3. an array of pokémon objects that have more than one type")
console.log(newPokemon.filter(object => object.types.length > 1));

console.log("4. an array with just the names of the pokemon")
console.log(newPokemon.map(object => object.name));

console.log("5 .an array with just the names of pokémon with an id greater than 99")
console.log(newPokemon.filter(object => object.id > 99).map(p => p.name));

console.log("6 .an array with just the names of the pokémon whose only type is poison")
console.log(newPokemon.filter(object => object.types.length === 1 && object.types[0] === "poison").map(object => object.name));

console.log("7. an array containing just the first type of all the pokémon whose second type is 'flying'")
const flyingSecond = newPokemon.filter(object => object.types[1] === 'flying')
console.log(flyingSecond.map(object => ({ name: object.name, first_type: object.types[0] })))

console.log("8. a count of the number of pokémon that are 'normal' type")
console.log(newPokemon.filter(object => object.types.includes("normal")).length)
