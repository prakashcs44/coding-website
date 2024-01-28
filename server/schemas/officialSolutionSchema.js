const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const solutionSchema = new Schema({
  problem:{
    type: Schema.Types.ObjectId,
    ref:"Problem",
    required:true
  },
  solution:{
    type:String,
    required:true
  }
});

// Create a model using the schema
const Solution = mongoose.model('Solution', solutionSchema);

module.exports = Solution;
