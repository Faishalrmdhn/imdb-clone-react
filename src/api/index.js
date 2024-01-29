import axios from 'axios'

const ApiService = {

    baseURL : process.env.BASE_URL || 'https://api.themoviedb.org/3/',
    config : {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            'api_key': process.env.API_KEY
        }
    },

    popularMovies(){
        return axios.get(`${this.baseURL}discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc`)
    }
}

export default ApiService