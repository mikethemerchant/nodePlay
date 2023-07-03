// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb+srv://mikethemerchant:mikethemerchant@mernauth.t8zxfnq.mongodb.net/?retryWrites=true&w=majority'

// MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
//     if(err) throw err;
//     console.log("Database created by MikeTheMerchant");
//     db.close();
// });


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mikethemerchant:mikethemerchant@mernauth.t8zxfnq.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    // create a collection
    const database = client.db("sample_mflix");
    const collection = database.collection("movies");
    // create a document to insert
    const doc = { name: "white", town: "MisterWhite" };
    const result = await collection.insertOne(doc);
    console.log(
        `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);