import axios from 'axios';

const ATTRIBUTESBAR_API_BASE_URL = "http://localhost:8080/place/category/bar"
const ATTRIBUTESCAFE_API_BASE_URL = "http://localhost:8080/place/category/cafe"
const ATTRIBUTESRESTAURANT_API_BASE_URL = "http://localhost:8080/place/category/restaurant"


class AttributessService {
    getAttributesForBar(){
        return axios.get(ATTRIBUTESBAR_API_BASE_URL);
    }
    getAttributesForCafe(){
        return axios.get(ATTRIBUTESCAFE_API_BASE_URL);
    }
    getAttributesForRestaurant(){
        return axios.get(ATTRIBUTESRESTAURANT_API_BASE_URL);
    }
}

export default new AttributessService()