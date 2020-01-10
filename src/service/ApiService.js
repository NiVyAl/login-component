import axios from 'axios';
// import url from '../url';

// const USER_API_BASE_URL = url;

class ApiService {
    addUser(data) {
        return axios.post("http://localhost:4000/users/registration", data);
    }

    addArticle1(data) {
        return axios.post("http://localhost:4000/article/save", data);
    }

    log(data) {
        return axios.post("http://localhost:4000/users/auth", data);
    }

    addFileDescription(description) {
        return axios.post("http://localhost:4000/article/saveFile", description);
    }
}

export default new ApiService();