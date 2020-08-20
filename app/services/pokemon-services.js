const axios = require('axios');

// get request 
//https://pokeapi.co/api/v2/pokemon/{nombre}
// post request 
//https://pokeapi.co/api/v2/type/{tipo}

// comun 
//https://pokeapi.co/api/v2/

const getPokemon = (name) => {
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
            console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
}

const getTypePokemon = (type) => {
    axios
        .get(`https://pokeapi.co/api/v2/type/${type}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}

/* async function getPokemon(name) {
    const config = {
        method: 'get',
        url:`https://pokeapi.co/api/v2/pokemon/${name}`
    }

    let res = await axios(config)
    console.log(res); */


   /*  try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    } */
 /*  } */

  //async function postPokemon(type) {
      
   /*  try {
      const response = await axios.post(`https://pokeapi.co/api/v2/pokemon/${tipo}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    } */
  //}

  module.exports = {
      getPokemon,
      getTypePokemon
  }