var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var movieSchema = new Schema({
    title: {type: String, required:[true, 'title is required']},
    original_title: {type: String},
    overview: {type: String},
    poster_path: {type: String },
    backdrop_path: {type: String},
    movieDB_id: {type: Number},
    vote_average: {type: Number}
});

module.exports = mongoose.model('Movie', movieSchema);

