const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb+srv://kevincua:0ohIK1BcqtySMqeO@cluster0-tc9sb.mongodb.net/";

class Database {
    constructor() {
        this.collection = null;
        this.connection = null;

        MongoClient.connect(URL, (error, connection) => {
            if(error) {
                throw error;
            }

            this.connection = connection;

            let database = connection.db("DIG4503-78");

            this.collection = database.collection("Movies");
        });
    }

    findTitle(title) {
        if(this.collection != null) {
            return this.collection.findOne({"title": title})
        }
    }

    findYear(year) {
        year = parseInt(year);

        if(this.collection != null) {
            return this.collection.find({"year": year}).limit(100).toArray();
        }
    }
}

module.exports = Database;