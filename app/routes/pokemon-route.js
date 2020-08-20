const express = require('express'); 
const router = express.Router(); 

const pokemonController = require('../controller/pokemon-controller'); 

//Rutas endpoints
router.get('/:name', pokemonController.getPokemon); 
router.post('/', pokemonController.savePokemon);

module.exports = router; 