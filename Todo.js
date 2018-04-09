var mongoose = require("mongoose");

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: [true, 'text is required.'],
    minlength: [2, 'Min length is 6'],
    trim: true,
  },
  completed: {
    default: true,
    type: Boolean
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {
  Todo
};
