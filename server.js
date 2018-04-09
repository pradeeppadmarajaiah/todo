var express = require('express');
var bodyParser = require('body-parser')
const {MongoClient, ObjectID} = require('mongodb');
var {
  mongoose
} = require('./mongoose')

var {
  Todo
} = require('./Todo')

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
  console.log(req.body);
});


app.get('/todos/:id', (req, res) => {
  var id = req.params.id;


  const port=process.env.PORT||3000;
  Todo.findById(id).then((todo) => {
    if (!todo) {
        res.status(400).send("Unknown");
    }
    res.send(todo);
  }
,(e) =>{ res.status(400).send("eROOR WHILE SENDING");}
)

});


app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });

  }, (e) => {
    res.status(400).send(e);
  });
})



app.listen(port,
  () => {
    console.log(`started on ${port} port`);
  });
