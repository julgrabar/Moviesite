import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3"
const KEY = "04c27220ef2dd4b0aa9913b6cfeafdd6"

export const fetchTrending = async () =>{
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}`)
    return response.data.results;
}

export const searchMovies = async (query, page=1) => {
    const response = await axios.get(`/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
    return response.data.results;
}

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY}&language=en-US`);
    return response.data;
}

export const fetchMovieReviews = async (movieId, page=1) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=${page}`);
    return response.data.results;
}

export const fetchMovieCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
    return response.data.cast;
}