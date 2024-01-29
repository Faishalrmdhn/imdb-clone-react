import axios from 'axios'

const ApiService = {

    baseURL : process.env.REACT_APP_BASE_URL,
    config : {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODFiYWI3YjhhYzUzNGM5Y2ZkZjcxODllNmIwMTYzMiIsInN1YiI6IjY1YjBjN2M0YTMxNDQwMDE5MzVhYTI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l7z-b1nOMIdBqLiBq0W1aqcRIQ2c_u7OtKAIG7d2Lg8'
        },
        params: {
            'api_key': process.env.REACT_APP_API_KEY
        }
    },

    popularMovies(){
        return axios.get(`${this.baseURL}discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`,{
            params: {
                ...this.config.params
            }
        })
    },
    favoriteMovies(){
        return axios.get(`${this.baseURL}account/20942960/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`, {
            ...this.config
        })
    }
}

export default ApiService