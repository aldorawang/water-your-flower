function revealMessage(){
    document.getElementById("message").style.display = "block";
}

function box(){
    let query = window.matchMedia("(max-width: 525px)");

    if(query.matches){
    alert("Great Job!");
    }
    else{}
}

function messageBox(){
alert("Hey there!");
alert("How are you?");
alert("What to water a baby flower?");
}

messageBox();
box();