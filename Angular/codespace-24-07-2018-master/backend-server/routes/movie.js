var express = require('express');

var app = express();

var Movie = require('../models/movie');

/* 
===========================================
Get all movies
===========================================
*/
app.get('/', (req, res, next) => {

    var nextPage = req.query.next || 0;
    nextPage = Number(nextPage);

    Movie.find({})
    .skip(nextPage)
    .limit(5)
    .exec(
        
        (err, movies) => {
        if( err ) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error loading movies',
                errors: err
            })
        }

        Movie.count({}, (err, count) => {

            res.status(200).json({
                ok: true,
                movies: movies,
                total: count
            });

        });
    });
});

/* 
===========================================
Create a new movie
===========================================
*/

app.post('/', (req, res) => {

    var body = req.body;

    var newMovie = new Movie({
        title: body.title,
        original_title: body.original_title,
        overview: body.overview,
        poster_path: body.poster_path,
        backdrop_path: body.backdrop_path,
        movieDB_id: body.movieDB_id,
        vote_average: body.vote_average,
    });

    newMovie.save((err, savedMovie )=> {
        if( err ){
            return res.status(400).json({
                ok: false,
                mensaje: 'Error creating movie',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            movie: savedMovie,
        });
    });

});

module.exports = app;