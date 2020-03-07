const Express = require("express");
const App = Express();
const port = 80;

const cors = require("cors");
App.use(cors());

const Database = require("./Database.js");

let database = new Database();

App.get("/movies/title/:title", (req, res) => {
    let result = {"error": "Could not find a movie with that title!"};

    database.findTitle(req.params.title).then((movie) => {
        if(movie != null) {
            result = movie;
        }

        res.json(result);
    });
});

App.get("/movies/year/:year", (req, res) => {
    let result = {"error": "Could not find a movie with that year!"};

    database.findYear(req.params.year).then((movie) => {
        if(movie != null) {
            result = movie;
        }

        res.json(result);
    }); 
});

App.listen(port, () => {
    console.log("Server running!")
});