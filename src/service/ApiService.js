import axios from 'axios';
import { store } from '../store';

// const url = "http://localhost:4000";
const url = "http://192.168.0.109:4000";

export default class ApiService {
    static registration(data) {
        return axios.post(`${url}/users/registration`, data);
    }
    
    static addUser(data) {
        return axios.post(`${url}/users/addUser`, data);
    }

    static addArticle1(data) {
        return axios.post(`${url}/article/save`, data);
    }
    
    static addArticle2(data, articleId) {
        return axios.post(`${url}/article/saveFile?id=${articleId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    static log(data) {
        return axios.post(`${url}/auth`, data);
    }
    
    static test() {
        return axios.get(`${url}/users/test`);
    }
    
    static registrationConfirm(data) {
        return axios.post(`${url}/users/registrationConfirm`, data);
    }
    
    static getArticles(userId) { //все статьи для лоха
        return axios.get(`${url}/article/getArticles?of=0&to=10&id=${userId}`)
    } 

    static getAllArticles(userId) {  //для секретаря
        return axios.get(`${url}/article/getAllArticles?of=0&to=10`)
    }

    static getReviewerArticles(userId) {  //для проверяющего все статьи
        return axios.get(`${url}/article/getAllArticles?of=0&to=10`)
    }

    static getArticle(articleId) { // получить одну статью (по id)
        return axios.get(`${url}/article/getArticle?id=${articleId}`)
    }
    
    static addReview(data) {
        return axios.post(`${url}/review/save`, data);
    }

    static getAllCategories() {
        return axios.get(`${url}/category/getCategories`);
    }

    static getReviewers() {
        return axios.get(`${url}/reviewers/getReviewers?of=0&to=100`);
    }

    static logOut() {
        if (store.getState() != "log")
            return;

        const lang = localStorage.getItem("lang");
        localStorage.clear();
        localStorage.setItem("lang", lang);
        delete axios.defaults.headers.common.Authorization;
        store.dispatch({ type: "close" });
        window.location.reload();
    }
}