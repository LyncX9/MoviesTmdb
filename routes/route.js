const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie-controller');

router.get('/movie', movieController.searchMovie);
router.get('/movie/popular', movieController.showPopularMovie);

module.exports = router;
