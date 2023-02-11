import axios from 'axios';

const FAVORITES_API_BASE_URL = "https://bekend.azurewebsites.net/user/favorites"


class FavoritesService {
    getFavoritePlaces(){
        return axios.get(FAVORITES_API_BASE_URL);
    }
}

export default new FavoritesService()