(function () {
    'use strict';

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const persons = [
        "Nelson Mandela",
        "John F. Kennedy",
        "Ifti Nasim",
        "Malcolm X",
        "Sojourner Truth",
        "Eleanor Roosevelt",
        "Rosa Parks"
    ];
    const years = [
        "1918 - 2013",
        "1917 - 1963",
        "1946 - 2011",
        "1925 - 1965",
        "1797 - 1883",
        "1884 - 1962",
        "1913 - 2005"
    ];
    console.log("Script ready!");

    let myBtn = document.getElementById("start")
    let count = 0
    window.addEventListener("click", function(event){
        myBtn.innerText = "Display card "+ (count+1);
        if (count < colors.length){
            count += 1;
        }else{
            myBtn.style.display = "none"

        } 
        
    });

    myBtn.addEventListener("click", function(event) {
        document.getElementsByClassName("rektangel");
        let element = document.createElement("div");
        element.className = "rektangel";
        element.style.backgroundColor = colors[count];
        element.addEventListener("mouseover", function(event){
            event.target.style.border = "thick solid #ddd343";
        });
        addEventListener('mouseout', (event) => {
            event.target.style.border = "none";
        });

        addEventListener("click", function(event){
            event.target.style.backgroundColor = colors[(count+3)];
            event.target.innerText = persons[count];

        });
        document.body.appendChild(element);

    });
})();


