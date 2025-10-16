import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = 'e02b506f61bd901c1343ad5a417c5c8a';

const getTrendingMovies = () => {
    return axios.get(`${movieBaseUrl}/trending/movie/week?api_key=${apiKey}`);
};

const getMoviesByGenre = (genreId) => {
    return axios.get(`${movieBaseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}&sort_by=popularity.desc`);
};

const getGenres = () => {
    return axios.get(`${movieBaseUrl}/genre/movie/list?api_key=${apiKey}`);
};

const getMovieVideos = (movieId) => {
    return axios.get(`${movieBaseUrl}/movie/${movieId}/videos?api_key=${apiKey}`);
};

const getTrendingMoviesWithVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/movie/week?api_key=${apiKey}&append_to_response=videos`);
};

export default {
    getTrendingMovies,
    getMoviesByGenre,
    getGenres,
    getMovieVideos,
    getTrendingMoviesWithVideos
};
export { getTrendingMovies, getMoviesByGenre, getGenres, getMovieVideos, getTrendingMoviesWithVideos };