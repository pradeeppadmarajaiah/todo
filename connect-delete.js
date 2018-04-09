//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/Todo", (err, client) => {

  if (err) {
    return console.log("Unable to  connect to MongoDb");
  }
  console.log("DB connected successfully");

  db = client.db('Todo');

  var results=db.collection('Todos').deleteOne({name:'raj'}).then((res)=> {
console.log(res);

});



  client.close();

});
