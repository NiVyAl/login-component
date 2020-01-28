import axios from 'axios';

const url = "http://localhost:4000";

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
    
    addArticle2(data, articleId) {
        return axios.post(`${url}/article/saveFile?id=${articleId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    log(data) {
        return axios.post(`${url}/auth`, data);
    }

    // addFileDescription(description) {
    //     return axios.post(`${url}/article/saveFile`, description);
    // }
    
    test() {
        return axios.get(`${url}/users/test`);
    }
    
    registrationConfirm(data) {
        return axios.post(`${url}/users/registrationConfirm`, data);
    }
    
    getArticles(userId) {
        return axios.get(`${url}/article/getArticles?of=0&to=10&id=${userId}`)
    } 

    getArticle(articleId) {
        return axios.get(`${url}/article/getArticle?id=${articleId}`)
    }

    getAllArticles() {
        return axios.get(`${url}/article/getAllArticles`)
    }
}

export default new ApiService();