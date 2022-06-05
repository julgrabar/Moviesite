import axios from "axios";
const KEY = "04c27220ef2dd4b0aa9913b6cfeafdd6"
const movieInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const fetchTrending = async (page) =>{
    const response = await movieInstance.get(`/trending/movie/day?api_key=${KEY}&page=${page}`)
    return {results: response.data.results, pages: response.data.total_pages}
}

export const searchMovies = async ( page,query) => {
    const response = await movieInstance.get(`/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
    return {results: response.data.results, pages: response.data.total_pages}
}

export const fetchMovieDetails = async (movieId) => {
    const response = await movieInstance.get(`/movie/${movieId}?api_key=${KEY}&language=en-US`);
    return {results: response.data, pages: null}
}

export const fetchMovieReviews = async (page,movieId ) => {
    const response = await movieInstance.get(`/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=${page}`);
    return {results: response.data.results, pages: response.data.total_pages}
}

export const fetchMovieCredits = async (movieId) => {
    const response = await movieInstance.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);   
    return {results: response.data.cast, pages: response.data.total_pages}
}

export const authInstance = axios.create({
    baseURL: "https://notifications--app.herokuapp.com/api/"
})


export const signUp = async (userData) => {
    const response =await authInstance.post("/register/", userData);
    return response
}

export const login = async (userData) => {
    const response =await authInstance.post("/token/", userData);
    return {token: response.data, username: userData.username}
}
export const getUserData = async () => {
    const response =await authInstance.get("/user/");
    return response.data.username
}

export const logout = () =>{
    authInstance.defaults.headers.common['Authorization'] = ''
}

export const refreshTokenQuery = async (refreshToken) =>{
     const response =await axios.post("/token/refresh/",{refresh: refreshToken});
    return response.data.access
    // console.log(response.data.access)
}