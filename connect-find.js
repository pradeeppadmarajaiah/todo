//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/Todo", (err, client) => {

  if (err) {
    return console.log("Unable to  connect to MongoDb");
  }
  console.log("DB connected successfully");

  db = client.db('Todo');

  var results=db.collection('Todos').find().toArray().then((docs) => {

  print(docs);

});

var print =(results) => {
  console.log(results);
}


var results=db.collection('Todos').find({name:'deep'}).toArray().then((docs) => {
console.log(docs);
console.log("*******************");
});

var results=db.collection('Todos').find().count().then((docs) => {
console.log("Count is " + docs);
console.log("*******************");
});


  client.close();

});
