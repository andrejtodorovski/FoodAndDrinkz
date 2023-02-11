import axios from 'axios';

const ADMIN_API_BASE_URL = "https://bekend.azurewebsites.net/user/getadmin"


class AdminService {
    getAdmin(){
        return axios.get(ADMIN_API_BASE_URL);
    }
}

export default new AdminService()