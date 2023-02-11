import axios from 'axios';

const CLOSEST_API_BASE_URL = "https://bekend.azurewebsites.net/place/closest"


class ClosestService {
    getClosest(){
        return axios.get(CLOSEST_API_BASE_URL);
    }
}

export default new ClosestService()