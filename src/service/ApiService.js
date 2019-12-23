import axios from 'axios';
// import url from '../url';

// const USER_API_BASE_URL = url;

class ApiService {

    // fetchUsers() {
    //     return axios.get(USER_API_BASE_URL);
    // }

    // fetchUserById(userId) {
    //     return axios.get(USER_API_BASE_URL + '/' + userId);
    // }

    // deleteUser(userId) {
    //     return axios.delete(USER_API_BASE_URL + '/' + userId);
    // }

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

    // editUser(user) {
    //     return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    // }

}

export default new ApiService();