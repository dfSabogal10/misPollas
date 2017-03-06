var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var url = 'mongodb://javier:123456789@ds119020.mlab.com:19020/mispollas';
var request = require('request');
exports.User = User;


var User = function (name) {
};


exports.list = (req, res) => {
    // Use connect method to connect to the server
    MongoClient.connect( url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to Database");
      var userID= req.param('userID');
      // Get the documents collection
      var collection = db.collection( "usuarios" );

      collection.find({"userID":userID}).toArray(function(err, docs) {
        assert.equal(err, null);
        res.json(docs);
        db.close();

        console.log("Found the following records" + docs );

      });


    });

  }
