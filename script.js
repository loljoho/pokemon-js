// array of player's pokemon
var playerPokemon = [
  "Magikarp",   // playerPokemon[0]
  "Abra",       // playerPokemon[1]
  "Magikarp",   // playerPokemon[2]
  "Mew",        // playerPokemon[3]
  "Pikachu"     // playerPokemon[4]
];

getPokemonList();             // viewing your pokemon
catchPokemon("Charmander");   // catching a pokemon
getPokemonList();             // viewing your pokemon again
catchPokemon("Squirtle");     // catching a pokemon
getPokemonList();             // viewing your pokemon again

// function to get list of player's pokemon
function getPokemonList() {
  // for loop to iterate through the array elements
  for (var i = 0; i < playerPokemon.length; i++) {
    // TODO: comment out for loop logic
    console.log("Pokemon #" 
      + (i + 1) 
      + ": " 
      + playerPokemon[i]
    );
  }
}

// function to catch a wild pokemon
function catchPokemon(wildPokemon) {
  // make sure the player can only have a max of 6 pokemon
  if (playerPokemon.length < 6) {
    // add wild pokemon to array of player"s pokemon
    playerPokemon.push(wildPokemon);
    console.log("You caught a " + wildPokemon + "!");
  } else {
    console.log("You already have 6 Pokemon!");
  }
}