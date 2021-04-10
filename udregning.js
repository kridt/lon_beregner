var theProfile = JSON.parse(sessionStorage.getItem("data"));

var antalTimer = theProfile.Antal_timer;
var sats = theProfile.Salary;
var amBidrag = 0.92;
var displayLøn = document.querySelector(".løn");

var løn = (sats * antalTimer) * amBidrag;

løn = løn.toFixed(2)

 displayLøn.innerHTML = `
    <h1>${løn}kr</h1>
`
 


console.log(sats);