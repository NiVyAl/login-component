import cutPath from "./cutPath"

function getGetRequest() {
    let url = window.location.href;
    // cutPath(url, "right");
    let request = "";
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "=") {
            request = url.slice(i+1, url.length);
            return request
        }
    }
    return false // нет get запроса
}

export default getGetRequest;