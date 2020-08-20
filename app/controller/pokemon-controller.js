const services = require('../services/pokemon-services');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


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

    // Connection URL
    const url = 'mongodb://localhost:27017';
    // Database Name
    const dbName = 'pokenode';

    // Create a new MongoClient
    const client = new MongoClient(url, { useUnifiedTopology: true });

    // Use connect method to connect to the Server
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        var myobj = { name: "Company Inc", address: "Highway 37" };
        db.collection("customers_test").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });

    });


    const type = req.body.type;

    if (!type) {
        throw 'Missing pokemon type.';
    }

    services.getTypePokemon(type).then((result) => {
        res.status(200).send(result.data);

    }).catch((error) => {
        res.status(500).send(`Error: ${error}`);
    });

}

module.exports = {
    getPokemon,
    savePokemon
}