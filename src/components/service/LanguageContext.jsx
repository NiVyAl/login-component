import React from 'react';

let Language;
// if ((localStorage.getItem("lang") === "ru") || (!localStorage.getItem("lang")) || (localStorage.getItem("lang") === null)) {
//     Language = React.createContext("ru");
// }
if (localStorage.getItem("lang") === "en") {
    Language = React.createContext("en");
} else {
    Language = React.createContext("ru");
}

export default Language