const axios = require('axios');

// get request 
//https://pokeapi.co/api/v2/pokemon/{nombre}
// post request 
//https://pokeapi.co/api/v2/type/{tipo}

// comun 
//https://pokeapi.co/api/v2/


async function getPokemon(name) {

    const config = {
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${name}`
    }

    try {
        let response = await axios(config)
        return response;
    } catch (error) {
        console.error(error);
    }
} 


async function getTypePokemon(type) {

    const config = {
        method: 'get',
        url: `https://pokeapi.co/api/v2/type/${type}`
    }

    try {
        let response = await axios(config)
        let pokemons = new Array(); 

        response.data.pokemon.map(pokemon => {
            let actual = { name : pokemon.pokemon.name }
            pokemons.push(actual);
          })

        let result = {
            type: response.data.name,
            pokemons: pokemons
        }
    
        return result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getPokemon,
    getTypePokemon
}