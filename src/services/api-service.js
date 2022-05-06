import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3"
const KEY = "04c27220ef2dd4b0aa9913b6cfeafdd6"

export const fetchTrending = async (page) =>{
    const response = await axios.get(`/trending/movie/day?api_key=${KEY}&page=${page}`)
    return {results: response.data.results, pages: response.data.total_pages}
}

export const searchMovies = async ( page,query) => {
    const response = await axios.get(`/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
    return {results: response.data.results, pages: response.data.total_pages}
}

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY}&language=en-US`);
    return {results: response.data, pages: null}
}

export const fetchMovieReviews = async (page,movieId ) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=${page}`);
    return {results: response.data.results, pages: response.data.total_pages}
}

export const fetchMovieCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);   
    return {results: response.data.cast, pages: response.data.total_pages}
}

