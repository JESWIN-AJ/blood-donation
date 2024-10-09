var express = require('express');
var router = express.Router();


const { MongoClient } = require('mongodb');


router.get('/submit', function(req, res, next) {
  res.render('index');
  console.log('backto index');
});



router.post('/submit', async (req, res) => {


  const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
  try {
      console.log(req.body);
      await client.connect(); // Connect here or use a connection pool strategy

      const result = await client.db("blood").collection("users").insertOne(req.body);
      console.log("Inserted document:", result.insertedId);

    
  } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).send("Internal Server Error");



  } finally {
      await client.close(); // Ensure the client is closed after operation
  }
  res.render('index');
});

  


  module.exports = router;