
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

    const database = client.db("sample_mflix");
    const collection = database.collection("movies");
    const result = await collection.findOne({name: "Red"});
    console.log(
        `${result.town} documents returned with the _id: ${result._id}`,
    );

    //before update
    let query = { name: "white" };
    let queryResult = await collection.find(query).toArray();
    queryResult.map(() => { console.log(queryResult[0]) });
    
    // update
    query = { name: "white" };
    const updateDoc = {
      $set: {
        town: "whiteTown"
      },
    };
    const updateResult = await collection.updateOne(query, updateDoc);
    console.log(
        `${updateResult.matchedCount} documents were matched and ${updateResult.modifiedCount} document was updated.`,
    );
    // after update
    queryResult = await collection.find(query).toArray();
    queryResult.map(() => { console.log(queryResult[0]) });
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);