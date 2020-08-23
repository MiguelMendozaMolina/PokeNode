const services = require('../services/pokemon-services');
const MongoClient = require('mongodb').MongoClient;
const constants = require('../constants/poke-constants');

async function getPokemon(req, res) {

    const name = req.params.name;

    if (!name) {
        throw 'Missing pokemon name.';
    }

    services.getPokemon(name).then((result) => {
        res.status(200).send(result.data);
    }).catch((error) => {
        res.status(500).send(`Error: ${error}`);
    });
}

async function savePokemon(req, res) {

    const type = req.body.type;

    if (!type) {
        throw 'Missing pokemon type.';
    }

    const client = new MongoClient(constants.DB_URL, { useUnifiedTopology: true });

    client.connect(function (err) {

        if (err) throw err;
        console.log("Connected successfully to server");

        const db = client.db(constants.DB_NAME);

        services.getTypePokemon(type).then((result) => {

            db.collection(constants.DB_COLLECTION).insertOne(result, function (err, res) {
                if (err) throw err;
                console.log("1 document inserted");
            });

            res.status(200).send(result);  

        }).catch((error) => {
            res.status(500).send(`Error: ${error}`);
        });
    }); 
}

module.exports = {
    getPokemon,
    savePokemon
}