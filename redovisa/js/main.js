/**
 * A function to wrap it all in.
 * @script
 * @day
 * @function getElementById("today")
 */
(function() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const day = days[now.getDay()];
    const element = document.getElementById("today");
    element.innerHTML = "<h1>" + day + " </h1>";
    /*  now.getHours(); */
    /**
        let minute = now.get now.getDay() */

    console.log("JavaScript ready.");
})();