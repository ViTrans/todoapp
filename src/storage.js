function setItemt(name,value){
    localStorage.setItem(name,value)
}
function getItemt(name){
   return localStorage.getItem(name)
}
function setJSONItemt(name,value){
    localStorage.setItem(name,JSON.stringify(value))
}
function getJSONItemt(name){
    const value = localStorage.getItem(name)
    return JSON.parse(value)
}
function removeItem(name){
    localStorage.removeItem(name)
}

exports.setItem = setItemt
exports.getItem = getItemt
exports.getJSONItemt = getJSONItemt
exports.clearItemt = removeItem
exports.setJSONItemt = setJSONItemt
exports.removeItem = removeItem
