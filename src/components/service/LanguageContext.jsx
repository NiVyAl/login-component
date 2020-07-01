import React from 'react';

console.log(navigator.language);
let Language;
if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    if (lang === "en") {
        Language = React.createContext("en");
    }
    if (lang === "ru") {
        Language = React.createContext("ru");
    }
} else if (navigator.language || navigator.userLanguage !== "ru") {
    Language = React.createContext("en");
} else {
    Language = React.createContext("ru");
}




export default Language