const Person = require("./Person.js");

class Kevin extends Person {
    constructor(name, favoriteColor) {
        super(name, favoriteColor);
    }
}

module.exports = Kevin;