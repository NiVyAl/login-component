import axios from 'axios';

const url = "http://192.168.0.105:4000";

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
    
    test() {
        return axios.get(`${url}/users/test`);
    }
    
    registrationConfirm(data) {
        return axios.post(`${url}/users/registrationConfirm`, data);
    }
    
    getArticles(userId) { //все статьи для лоха
        return axios.get(`${url}/article/getArticles?of=0&to=10&id=${userId}`)
    } 

    getArticle(articleId) {
        return axios.get(`${url}/article/getArticle?id=${articleId}`)
    }

    getAllArticles(userId) {  //для проверяющего все статьи
        return axios.get(`${url}/article/getAllArticles`)
    }
    
    addReview(data) {
        return axios.post(`${url}/review/save`, data);
    }

    getAllCategories() {
        return axios.get(`${url}/category/getCategories`);
    }

    getReviewers() {
        return axios.get(`${url}/review/getReviewers/`);
    }
}

export default new ApiService();