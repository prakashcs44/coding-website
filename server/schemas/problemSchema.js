const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const problemSchema = new Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    constraints: String,
    examples: [{
        input: String,
        output: String,
        explanation: String
    }],
    is_premium: Number,
    difficulty: String,
    solution_link: String,
    acceptance_rate: Number,
    frequency: Number,
    url: String,
    discuss_count: Number,
    accepted: String,
    submissions: String,
    companies: String,
    related_topics: String,
    likes: Number,
    dislikes: Number,
    rating: Number,
    asked_by_faang: Number,
    similar_questions: String,
    bpcode: String
});

// Create a model using the schema
const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
