/**
 * A function to wrap it all in.
 * @medelande
 * @förmidag "godförmiddag"
 * @eftermidag "eftermidag"
 */
(function() {
    const now = new Date();
    const hour = now.getHours();

    const element = document.getElementById("för-eftermiddag");
    element.innerHTML = "<h1>" + hour + " </h1>";
    console.log("JavaScript ready.");
    if (hour < 13) {
        const greeting = "Good day";
        element.innerHTML = "<h1>" + greeting + " </h1>";
    }
    if (hour > 13) {
        const greeting = "godeftermiddag";
        element.innerHTML = "<h1>" + greeting + " </h1>";
    }
})();