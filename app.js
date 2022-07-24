var H = [];
let C = [];
let Hooker = "";
let Coke = "";
let title = document.getElementById("title");
let h1 = document.getElementById("h1");

jQuery.get('H.txt', function(data) {
    H = data.split("\n");
    H = H.filter(n => n);
    // console.log(H);
});

jQuery.get('C.txt', function(data) {
    C = data.split("\n");
    C = C.filter(n => n);
    // console.log(C);
});

function randomInt(max){
    return Math.floor(Math.random()*max-1);
}

function generateH(){
    Hooker = H[randomInt(H.length)];
}

function generateC(){
    Coke = C[randomInt(C.length)];
}




setTimeout("generateC()",20);
setTimeout("generateH()",40);
setTimeout("set()",60);


function set(){

    title.textContent = Hooker+" & "+Coke;
    h1.textContent = Hooker+" & "+Coke
}
