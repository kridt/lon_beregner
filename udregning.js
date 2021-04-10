var theProfile = JSON.parse(sessionStorage.getItem("data"));
var antalTimer = theProfile.Antal_timer;
var sats = theProfile.Salary;
var amBidrag = 0.92;
var displayLøn = document.querySelector(".løn");
var løn = (sats * antalTimer) * amBidrag;
var back = "https://kridt.github.io/lon_beregner/";
var tilbageKnap = document.querySelector(".back");

var url = window.location.hostname;

if(url === "127.0.0.1") {
    back = "/"
} else{
    back = "https://kridt.github.io/lon_beregner/"
}

tilbageKnap.innerHTML = `
    <a href="${back}">Tilbage</a>
` 

console.log(back);

løn = løn.toFixed(2)

 displayLøn.innerHTML = `
    <h1>${løn}kr</h1>
`
 
