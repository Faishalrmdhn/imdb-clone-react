import axios from 'axios'

const ApiService = {

    baseURL : process.env.REACT_APP_BASE_URL,
    config : {
        headers: {
            'accept': 'application/json',
            'Authorization' : process.env.REACT_APP_AUTHORIZATION,
        },
        params: {
            'api_key': process.env.REACT_APP_API_KEY
        }
    },
    nowPlaying(pageNumber = 1){
        return axios.get(`${this.baseURL}movie/now_playing?language=en-US&page=${pageNumber}`, {
            ...this.config
        })
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