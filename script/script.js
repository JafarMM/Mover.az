let istifadechiler = document.getElementById("istifadechiler");
let mehsullar = document.getElementById("mehsullar");
let baglamalar = document.getElementById("baglamalar");
let emekdashlar = document.getElementById("emekdashlar");

function subscribers(){
    var istifadechiintervar = setInterval(function (){
        let number = Number(document.getElementById("istifadechiler").textContent);
        document.getElementById("istifadechiler").textContent=number+1;
        if(document.getElementById("istifadechiler").textContent==110){
           clearInterval(istifadechiintervar);
        };
    },15);
}
subscribers();

function orders(){
    var mehsullarinterval = setInterval(function (){
        let number = Number(document.getElementById("mehsullar").textContent);
        document.getElementById("mehsullar").textContent=number+1;
        if(document.getElementById("mehsullar").textContent==5){
           clearInterval(mehsullarinterval);
        };
    },200);
}
orders();

function packages(){
    var baglamalarinterval = setInterval(function (){
        let number = Number(document.getElementById("baglamalar").textContent);
        document.getElementById("baglamalar").textContent=number+1;
        if(document.getElementById("baglamalar").textContent==1){
           clearInterval(baglamalarinterval);
        };
    },1500);
}
packages();

function partners(){
    var emekdashlarinterval = setInterval(function (){
        let number = Number(document.getElementById("emekdashlar").textContent);
        document.getElementById("emekdashlar").textContent=number+1;
        if(document.getElementById("emekdashlar").textContent==100){
           clearInterval(emekdashlarinterval);
        };
    },20);
}
partners();