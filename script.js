// array of player's pokemon
var playerPokemon = [
  {
    "name": "Magikarp",
    "type": "water",
    "level": 5
  },
  {
    "name": "Abra",
    "type": "psychic",
    "level": 5
  },
  {
    "name": "Magikarp",
    "type": "water",
    "level": 5
  },
  {
    "name": "Mew",
    "type": "psychic",
    "level": 5
  },
  {
    "name": "Pikachu",
    "type": "electric",
    "level": 5
  }
];

getPokemonList();             // viewing your pokemon
catchPokemon({
  "name": "Charmander",
  "type": "fire",
  "level": 5
});                           // catching a pokemon
getPokemonList();             // viewing your pokemon again

// function to get list of player's pokemon
function getPokemonList() {
  // for loop to iterate through the array elements
  for (var i = 0; i < playerPokemon.length; i++) {
    // TODO: comment out for loop logic
    console.log("Pokemon #" 
      + (i + 1) 
      + ": " 
      + playerPokemon[i].name);
  }
}

// function to catch a wild pokemon
function catchPokemon(wildPokemon) {
  // make sure the player can only have a max of 6 pokemon
  if (playerPokemon.length < 6) {
    // add wild pokemon to array of player"s pokemon
    playerPokemon.push(wildPokemon);
    console.log("You caught a " + wildPokemon.name + "!");
  } else {
    console.log("You already have 6 Pokemon!");
  }
}