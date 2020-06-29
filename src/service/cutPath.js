function cutPath(symbol, direction) {
    let text = "";
    for (let i = symbol.length; i > 0; i--) {
        if ((symbol[i] === "\\") || (symbol[i] === "/")) {
            text = symbol.slice(i+1, symbol.length);
            return text
        }
    }
    return false
}

export default cutPath;