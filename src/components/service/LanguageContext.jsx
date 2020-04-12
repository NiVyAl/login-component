import React from 'react';

let Language;
if ((localStorage.getItem("lang") === "ru") || (!localStorage.getItem("lang"))) {
    Language = React.createContext("ru");
}
if (localStorage.getItem("lang") === "en") {
    Language = React.createContext("en");
}

export default Language