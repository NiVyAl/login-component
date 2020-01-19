import axios from 'axios';

const url = "http://192.168.0.104:4000";

class ApiService {
    registration(data) {
        return axios.post(`${url}/users/registration`, data);
    }
    
    addUser(data) {
        return axios.post(`${url}/users/addUser`, data);
    }

    addArticle1(data) {
        return axios.post(`${url}/article/save`, data);
    }
    
    addArticle2(data) {
        return axios.post(`${url}/article/saveFile`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    log(data) {
        return axios.post(`${url}/auth`, data);
    }

    addFileDescription(description) {
        return axios.post(`${url}/article/saveFile`, description);
    }
    
    test() {
        return axios.get(`${url}/users/test`);
    }
    
    registrationConfirm(data) {
        return axios.post(`${url}/users/registrationConfirm`, data);
    }
}

export default new ApiService();