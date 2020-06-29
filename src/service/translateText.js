import Language from "../components/service/LanguageContext"
function translateText(texts) {
    if (texts) {
        if (typeof texts === "string") {
            return texts
        } else {
            return texts[Language["_currentValue"]]
        }
    }
    
}

export default translateText