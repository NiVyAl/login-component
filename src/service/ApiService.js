import axios from 'axios';
import { store } from '../store';

// axios.defaults.baseURL = "http://localhost:4000";
// axios.defaults.baseURL = "http://192.168.0.107:4000";
axios.defaults.baseURL = "http://192.168.0.100:4000";

export default class ApiService {
    static registration(data) {
        return axios.post(`users/registration`, data);
    }
    
    static addUser(data) {
        return axios.post(`users/addUser`, data);
    }

    static addArticle1(data) {
        return axios.post(`article/save`, data);
    }
    
    static addArticle2(data, articleId) {
        return axios.post(`article/saveFile?id=${articleId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    static log(data) {
        return axios.post(`auth`, data);
    }
    
    static test() {
        return axios.get(`users/test`);
    }
    
    static registrationConfirm(data) {
        return axios.post(`users/registrationConfirm`, data);
    }
    
    static getArticles(userId) { //все статьи для лоха
        return axios.get(`article/getArticles?id=${userId}`)
        // return axios.get(`article/downloadFile/C:\\Users\\admin\\Pictures\\files\\11\\0\\4WDnSHhZBjk.jpg`)
    } 

    static getAllArticles(userId) {  //для секретаря
        return axios.get(`article/getAllArticles?id=${userId}`)
    }

    static getReviewerArticles(userId) {  //для проверяющего все статьи
        return axios.get(`article/getArticles?of=0&to=10&id=${userId}`) // для теста
        // return axios.get(`article/getAllArticles?of=0&to=10`) // раскомментировать
    }

    static getArticle(articleId) { // получить одну статью (по id)
        return axios.get(`article/getArticle?id=${articleId}`)
    }

    static getArticlesByCategoy(category) { // получить список статей по категории
        return axios.get(`article/getArticlesByCategory?category=${category}`)
    }
    
    static addReview(data) {
        return axios.post(`review/save`, data);
    }

    static getAllCategories() {
        return axios.get(`category/getCategories`);
    }

    static getReviewers() {
        // return axios.get(`reviewers/getReviewers?of=0&to=100`);
        return axios.get(`reviewers/getReviewers`);
    }

    static logOut() {
        if (store.getState() !== "log")
            return;

        const lang = localStorage.getItem("lang");
        localStorage.clear();
        localStorage.setItem("lang", lang);
        delete axios.defaults.headers.common.Authorization;
        store.dispatch({ type: "close" });
        window.location.reload();
    }

    static addReviewerToArticle(data) {
        return axios.post(`reviewers/appointAll`, data);
    }

    static getArticleStatusString(verdict) {
        switch (verdict) {
            case("PROCESSING"):
                return "Находится на рецензировании"
                break;
            case("APPROVED"):
                return "Принята"
                break;
            case("REJECTED"):
                return "Отклонена"
                break;
            case("WAITING_REVIEWER"):
                return "Ожидает выбора рецензента"
                break;
            default:
                return ""
        }
    }

    /**
     * Категории статей журнала (Химия, Химическая технология, Информатика, вычислительная техника и управление)
     */
    static ArticlesCategories = [{id: "02.00.00", text: "Химия (02.00.00)"}, {id: "05.17.00", text: "Химическая технология (05.17.00)"}, {id: "05.13.00", text: "Информатика, вычислительная техника и управление (05.13.00)"}];
}