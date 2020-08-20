const services = require('../services/pokemon-services');

async function getPokemon(req, res) {

    const name = req.name;

    if (!name) {
        throw 'Missing pokemon name.';
    }

    services.getPokemon(name).then((result) => {
        res.status(200).json(result);

    }).catch((error) => {
        res.status(500).send(`Error: ${error}`);
    });

}

async function savePokemon(req, res) {

    const type = req.body.type;

    if (!type) {
        throw 'Missing pokemon type.';
    }

    services.getTypePokemon(type).then((result) => {
          res.status(200).json(result); 

    }).catch((error) => {
        res.status(500).send(`Error: ${error}`);
    });

}

module.exports = {
    getPokemon,
    savePokemon
}