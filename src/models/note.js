// require mongoose lib
const mongoose = require('mongoose');

// define note's dabase schema
const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  {
    // assign createdAt and updatedAt fields with a Date type
    timestamps: true
  }
);

// define 'Note' model with the schema
const Note = mongoose.model('Note', noteSchema);

// export the module
module.exports = Note;
