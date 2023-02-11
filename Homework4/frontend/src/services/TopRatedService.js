import axios from 'axios';

const TOP_RATED_API_BASE_URL = "https://bekend.azurewebsites.net/home/topRated"


class TopRatedService {
    getTopRated(){
        return axios.get(TOP_RATED_API_BASE_URL);
    }
}

export default new TopRatedService()