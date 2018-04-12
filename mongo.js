var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://FHGDev:kingof@poc13@jshulkbot-f723z.mongodb.net/test";
MongoClient.connect(uri, (err, client) => {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});

MongoClient.on('ready', () => console.log("MongoDB Ready."))
