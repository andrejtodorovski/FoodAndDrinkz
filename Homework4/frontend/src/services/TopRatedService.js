import axios from 'axios';

const TOP_RATED_API_BASE_URL = "http://localhost:8080/home/topRated"


class TopRatedService {
    getTopRated(){
        return axios.get(TOP_RATED_API_BASE_URL);
    }
}

export default new TopRatedService()