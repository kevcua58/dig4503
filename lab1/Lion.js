const Cat = require("./Cat.js");

class Lion extends Cat {
    constructor(color, age, weight) {
        super(color, age); //calls the parent's constructor aka Cat
        this.weight = weight;
    }
}

module.exports = Lion;