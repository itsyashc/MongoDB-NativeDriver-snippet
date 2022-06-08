// Importing MongoClient from mongodb driver
const { MongoClient } = require("mongodb");

// Conencting to a local port
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

connect();

// ESNext syntax using async-await
async function connect() {
  try {
    await client.connect();
    const db = client.db("fruitsDB");
    console.log(`Successfully connected to db ${db.databaseName}`);

    //To create a collection
    const fruits = db.collection("fruits");

    // Insertion
    // const fruitInsertion = await fruits.insertMany([
    //   {
    //     name: "Banana",
    //     choice: "like it",
    //     availability: "easy",
    //   },
    //   {
    //     name: "Apple",
    //     choice: "like it",
    //     availability: "easy but expensive",
    //   },
    //   {
    //     name: "Mango",
    //     choice: "like it very much",
    //     availability: "seasonal",
    //   },
    // ]);
    // console.log(fruitInsertion.insertedCount);

    //update
    // const fruitUpdate = await fruits.updateOne(
    //   { "name": "Apple" },
    //   { "$set": { "choice": "It's okay." } }
    // );
    // console.log(fruitUpdate.modifiedCount);

    //Delete
    // const fruitDelete = await fruits.deleteOne({ "name": "Apple" });
    // console.log(fruitDelete.deletedCount);

    // Display/Read
    const fruitFind = fruits.find();
    const data = await fruitFind.toArray();
    console.table(data);

  } catch (err) {
    console.error(`we encountered ${err}`);
  } finally {
    client.close();
  }
}
