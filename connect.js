//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/Todo", (err, client) => {

  if (err) {
    return console.log("Unable to  connect to MongoDb");
  }
  console.log("DB connected successfully");

  db = client.db('Todo');

  db.collection('Todos').insertOne({
    name: 'raj',
    age: 35,
    hobby: 'sleeping'
  }, (err, data) => {
    if (err) {
      return console.log("Unable to  insert to Todos");
    }
    console.log(`Collection length is : ${data.ops.length}`)
    console.log(JSON.stringify(data.ops, undefined, 2));
  });

db.collection('Todos').insertMany(
[{
  name: 'deep',
  age: 35,
  hobby: 'sleeping'
},{
  name: 'deep1',
  age: 35,
  hobby: 'sleeping'
}],(err,data) =>{});

  client.close();

});
