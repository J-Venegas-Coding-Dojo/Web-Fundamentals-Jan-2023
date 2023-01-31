function custom() {
    // we can include more code here if we want to
    console.log("this message is coming from script.js");
}


function example(element) {
    console.log("element clicked", element);
}


function turnOff(element) {
    element.innerText = "Off";
}

function hide(element) {
    element.remove();
}

function delay(element){
    setTimeout(over, 5000, element)
}


function over(element) {
   
    alert("mouseover");    
}
    
function out(element) {
    element.style.backgroundColor="blue";  
}

var clickAmount = 0

function increase(element){
    clickAmount+=1
    element.innerText = clickAmount;

}


