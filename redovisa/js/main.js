/**
 * A function to wrap it all in.
 */
(function() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    "use strict";
    let now = new Date();
    let day = days[now.getDay()];
    /**
    let hour = now.getHours();
    let minute = now.get now.getDay() */

    let element = document.getElementById("today");
    /* element.innerHTML = "<h1>" + now + " </h1>" */
    element.innerHTML = "<h1>" + day + " </h1>"

    console.log("JavaScript ready.");
})();