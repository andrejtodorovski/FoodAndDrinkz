import axios from 'axios';

const USER_API_BASE_URL = "https://bekend.azurewebsites.net/user/profile"


class UserService {
    getUser(){
        return axios.get(USER_API_BASE_URL);
    }
}

export default new UserService()