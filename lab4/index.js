const Express = require("express");
const App = Express();
const port = 80;

const chalk = require("chalk");

const pokemons = require("json-pokemon");
const pokeDex = pokemons;

App.get("/id/:id", (req, res) => {
    let result = {"error" : "Sorry, Pokemon doesn't exist!"};

    pokeDex.forEach((value) => {
        if(value.id == req.params.id) {
            // console.log(req.path);
            result = value;
        }
    });

    if(result.error) {
        console.log(chalk.red(req.path));
    }
    else {
        console.log(chalk.green(req.path));
    }

    res.send(result);
});

App.get("/name/:name", (req, res) => {
    let result = {"error" : "Sorry, Pokemon doesn't exist!"};

    pokeDex.forEach((value) => {
        if(value.name.toLowerCase() == req.params.name) {
            // console.log(req.path);
            result = value;
        }
    });

    if(result.error) {
        console.log(chalk.red(req.path));
    }
    else {
        console.log(chalk.green(req.path));
    }

    res.send(result);
});

App.listen(port, function(){
    console.log("Server running!");
});