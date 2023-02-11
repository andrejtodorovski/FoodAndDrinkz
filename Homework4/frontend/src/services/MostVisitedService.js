import axios from 'axios';

const MOST_VIEWED_API_BASE_URL = "https://bekend.azurewebsites.net/home/mostVisited"


class MostVisitedService {
    getMostVisited(){
        return axios.get(MOST_VIEWED_API_BASE_URL);
    }
}

export default new MostVisitedService()