import axios from 'axios';

const MOST_VIEWED_API_BASE_URL = "http://localhost:8080/home/mostVisited"


class MostVisitedService {
    getMostVisited(){
        return axios.get(MOST_VIEWED_API_BASE_URL);
    }
}

export default new MostVisitedService()