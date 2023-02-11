import axios from 'axios';

const CAFES_API_BASE_URL = "https://bekend.azurewebsites.net/place/cafes"


class CafesService {
    getCafes(){
        return axios.get(CAFES_API_BASE_URL);
    }
}

export default new CafesService()