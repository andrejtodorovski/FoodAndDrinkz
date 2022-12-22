import axios from 'axios';

const PLACE_API_BASE_URL = "http://localhost:8080/place/"
const ADD_PLACE_API_BASE_URL = "http://localhost:8080/place/add"
const GET_CLOSEST_PLACES_BASE_URL = "http://localhost:8080/place/closest"

class PlaceService {
    getPlace(ID){
        return axios.get(PLACE_API_BASE_URL+ID);
    }
    addPlace(place){
        return axios.post(ADD_PLACE_API_BASE_URL, place)
    }
    findPlaces(location){
        return axios.post(GET_CLOSEST_PLACES_BASE_URL, location)
    }
}

export default new PlaceService()