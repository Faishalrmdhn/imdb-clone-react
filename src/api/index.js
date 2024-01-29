import axios from 'axios'

const ApiService = {

    baseURL : process.env.REACT_APP_BASE_URL,
    config : {
        headers: {
            'Content-Type': 'application/json'
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
    }
}

export default ApiService