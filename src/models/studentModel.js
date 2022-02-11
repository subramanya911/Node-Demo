const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const studentSchema = new Schema({
    name:  {type:String,required:true}, // String is shorthand for {type: String}
    rollNumber: Number,
    parent: {
      father: String,
      mother:  String
    }
  });

  const StudentModel = mongoose.model('Student', studentSchema, 'student');

  module.exports = { StudentModel };