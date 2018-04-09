var {
  mongoose
} = require('./mongoose');
const {MongoClient, ObjectID} = require('mongodb');


var {
  Todo
} = require('./Todo');

var id = "5ac717dd403a9b5294aa035a";

if(ObjectID.isValid(id)){
  console.log("Id is valid");


Todo.find({
  _id: id
}).then((todos) => {
  console.log("Find:" +
    todos);
})


Todo.findOne({
  _id: id
}).then((todo) => {
  console.log("Find one:" +
    todo);
})


Todo.findById(id).then((todo) => {

if(!todo) {
  return console.log(`id not exists`);
}

  console.log("Find By Id : " +
    todo);
}).catch((e)=>console.log(e));


}
else {
  console.log("Id not valid");
}
