import axios from 'axios';

const RESTAURANTS_API_BASE_URL = "https://bekend.azurewebsites.net/place/restaurants"


class RestaurantsService {
    getRestaurants(){
        return axios.get(RESTAURANTS_API_BASE_URL);
    }
}

export default new RestaurantsService()