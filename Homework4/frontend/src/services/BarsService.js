import axios from 'axios';

const BARS_API_BASE_URL = "https://bekend.azurewebsites.net/place/bars"


class BarsService {
    getBars(){
        return axios.get(BARS_API_BASE_URL);
    }
}

export default new BarsService()