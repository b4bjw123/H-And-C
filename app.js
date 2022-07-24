var H = [];
let C = [];
let Hooker = "";
let Coke = "";
let title = document.getElementById("title");
let h1 = document.getElementById("h1");

jQuery.get('H.csv', function(data) {
    H = data.split("\n");
    H = H.filter(n => n);
    // console.log(H);
});

jQuery.get('C.csv', function(data) {
    C = data.split("\n");
    C = C.filter(n => n);
    // console.log(C);
});

function randomInt(max){
    return Math.floor(Math.random()*max);
}

function generateH(){
    Hooker = H[randomInt(H.length)];
    // console.log(Hooker);
    // return Hooker;
}

function generateC(){
    Coke = C[randomInt(C.length)];
    // console.log(Coke);
    // return Coke;
}




setTimeout("generateC()",20);
setTimeout("generateH()",20);
setTimeout("set()",30);


function set(){

    title.textContent = Hooker+" & "+Coke;
    h1.textContent = Hooker+" & "+Coke
}
