import axios from 'axios';

const RESTAURANTS_API_BASE_URL = "http://localhost:8080/restaurants"


class RestaurantsService {
    getRestaurants(){
        return axios.get(RESTAURANTS_API_BASE_URL);
    }
}

export default new RestaurantsService()