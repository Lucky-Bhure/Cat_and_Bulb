let bulb = document.getElementById("bulb");
let cat = document.getElementById("cat");
let onbulb = document.getElementById("on");
let offbulb = document.getElementById("off");

// Function for ON the Bulb
function onbulbfun(){
    bulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    cat.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    onbulb.style.background = "green"; 
    offbulb.style.background = "grey";
}

// Function for OFF the Bulb
function offbulbfun(){
    bulb.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    cat.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    onbulb.style.background = "grey"; 
    offbulb.style.background = "red";
}

onbulb.addEventListener("click", onbulbfun);
offbulb.addEventListener("click",offbulbfun);