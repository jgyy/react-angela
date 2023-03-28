import { MongoClient, Db } from "mongodb";
import * as assert from "assert";

const uri = "mongodb://127.0.0.1:27017";

const dbName = "fruitsDB";

const client = new MongoClient(uri);

client.connect().then(() => {
    console.log("Connected successfully to server");
    
    const db = client.db(dbName);
    
    insertDocuments(db, () => {
        client.close();
    });

    findDocuments(db, () => {
        client.close();
    });
});

const insertDocuments = function(db: Db, callback: any) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Insert some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kinda sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff!"
        }
    ]).then(result => {
        assert.equal(3, result.insertedCount);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

const findDocuments = function(db: Db, callback: any) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray().then(docs => {
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}