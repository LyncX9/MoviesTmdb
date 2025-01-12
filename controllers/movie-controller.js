const cache = require('../config/cache');
const tmdb = require('../config/tmdb');
const createMovie = require('../models/movie-model');

const searchMovie = async (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({
            message: 'Query parameter is required',
        });
    }

    if (cache.has(query)) {
        console.log('Fetch data from cache');
        return res.status(200).json(cache.get(query));
    }

    try {
        const response = await tmdb.get('/search/movie', { params: { query } });
        const movieResult = response.data.results.map(createMovie);
        cache.set(query, movieResult);

        return res.status(200).json(movieResult);
    } catch (error) {
        console.error('Error fetching movies:', error.message);
        return res.status(500).json({
            message: 'Error fetching movies',
            error: error.message,
        });
    }
};

const showPopularMovie = async (req, res) => {
    try {
        const response = await tmdb.get('/movie/popular');
        const movieResult = response.data.results.map(createMovie);

        return res.status(200).json(movieResult);
    } catch (error) {
        console.error('Error fetching popular movies:', error.message);
        return res.status(500).json({
            message: 'Error fetching popular movies',
            error: error.message,
        });
    }
};

module.exports = { searchMovie, showPopularMovie };
