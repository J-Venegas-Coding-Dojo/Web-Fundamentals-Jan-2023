var clicks = 0

function increase(){
    clicks++;
    var clicksButton = document.querySelector("#target");
    clicksButton.innerHTML = "This button has been clicked this many times: " + clicks; 
    alert("Button has been clicked")
}


function like(idName){
    var span = document.querySelector(idName);
    span.innerText++
}