/**
 * if förmiddag console.log godförmiddag
 * else if eftermiddag console.log godeftermiddag
 */


(function() {
    let now = new Date();
    let element = document.getElementById("för-eftermiddag");
    element.innerHTML = "<h1>" + now + "</h1>"
    console.log("js ready")
})