var form = document.querySelector(".form");
var ungarbejder = document.getElementById("ungarbejder");
var timer = document.getElementById("antalTimer");
var løn = 68.75;


var profile = {};

form.addEventListener("submit", function(e) {
    var antalTimer = timer.value;

    var hours = parseInt(antalTimer);

    if(ungarbejder.value === "Nej") {
        løn = 123.83;
    }
    var søndag = løn * 1.3829818181818182 - løn;
    søndag = parseInt(søndag);
    
    
    var lørdag = løn * 1.344 - løn;
    lørdag = parseInt(lørdag);

    var aften = løn * 1.1953454545454545 - løn;
    aften = parseInt(aften);
    profile = {
    "Salary": løn,
    "Antal_timer": hours,
    "Søndag": søndag,
    "Lørdag": lørdag,
    "Aften": aften
    };

    sessionStorage.setItem("data", JSON.stringify(profile));   
    console.log(profile);

})
