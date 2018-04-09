//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/Todo", (err, client) => {

  if (err) {
    return console.log("Unable to  connect to MongoDb");
  }
  console.log("DB connected successfully");

  db = client.db('Todo');

  var results=db.collection('Todos').findOneAndUpdate({_id : new ObjectID ('5abb5d5a202c4e0530e636de')},
{
  $set :{ name : 'rocking star'}
},{ returnOriginal: false}).then((res)=> {
console.log(res);

});



  client.close();

});
