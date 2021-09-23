canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPresses);

    if((keyPressed>=97 && keyPresses<=122)(keyPresses>=65 && keyPressed<=90))
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed Alphabet Key";
        console.log("alphabet key");
    }

    if(keyPressed>=48 && keyPressed<=57)
    {
        numberkey();
        document.getElementById("d1").innerHTML="You pressed Number Key";
        console.log("number key");
    }

    if(keyPressed>=37 && keyPressed<=40)
    {
        arrowkey();
        document.getElementById("d1").innerHTML="You pressed Arrow Key";
        console.log("arrow key");
    }

    if(keyPressed==17 && keyPressed==18 && keyPressed==27)
    {
        specialkey();
        document.getElementById("d1").innerHTML="You pressed Special Key";
        console.log("special key");
    }

    if(keyPressed>=48 && keyPressed<=57)
    {
        numberkey();
        document.getElementById("d1").innerHTML="You pressed Number Key";
        console.log("number key");
    }

    if(keypressed=="17"){
        specialkey();
        document.getElementById("d1").innerHTML="You pressed Special Key";
        console.log("special key");
     }

     if(keypressed=="18"){
        specialkey();
        document.getElementById("d1").innerHTML="You pressed Special Key";
        console.log("special key");
     }

     if(keypressed=="27"){
        specialkey();
        document.getElementById("d1").innerHTML="You pressed Special Key";
        console.log("special key");
     }

    else;
        otherkey();
        document.getElementById("d1").innerHTML="You pressed other Key";
        console.log("other key");
     }  


function aplhabetkey(){
    img_image="Alpkey.png";
    add();
}

function numberkey(){
    img_image="numkey.png";
    add();
}

function specialkey(){
    img_image="spkey.png";
    add();
}

function numberkey(){
    img_image="otherkey";
    add();
}