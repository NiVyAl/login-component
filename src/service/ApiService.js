import axios from 'axios';

const url = "http://192.168.0.103:4000";

class ApiService {
    registration(data) {
        return axios.post(`${url}/users/registration`, data);
    }
    
    addUser(data) {
        return axios.post(`${url}/users/registration`, data);
    }

    addArticle1(data) {
        return axios.post(`${url}/article/save`, data);
    }

    log(data) {
        return axios.post(`${url}/auth`, data);
    }

    addFileDescription(description) {
        return axios.post(`${url}/article/saveFile`, description);
    }
}

export default new ApiService();