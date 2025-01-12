const createMovie = (movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview || 'No description available',
    backdrop_path: movie.backdrop_path,
    release_date: movie.release_date,
});

module.exports = createMovie;
