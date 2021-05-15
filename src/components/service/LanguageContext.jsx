import React from 'react';

/**
 * Определение языка установленного в localStorage.
 */
let Language;

if (localStorage.getItem("lang") === "en") {
    Language = React.createContext("en");
} else {
    Language = React.createContext("ru");
}

export default Language