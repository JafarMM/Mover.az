//changetext function on down navbar
function terziniyenile(e, n){
    setInterval(function(){ 
        document.getElementById("yenilepart").innerHTML=n;
     }, e);
}
terziniyenile(1500, "Terzini");
terziniyenile(3000, "Geyimini");
terziniyenile(4500, "Mover ilə");
terziniyenile(6000, "Kuryerini");
terziniyenile(7500, "Evini");


//statistics number function 
function subscribers(e,n,f){
    var istifadechiintervar = setInterval(function (){
        let number = Number(document.getElementById(f).textContent);
        document.getElementById(f).textContent=number+1;
        if(document.getElementById(f).textContent==e){
           clearInterval(istifadechiintervar);
        };
    },n);
}
subscribers(110,25,"istifadechiler");
subscribers(5,400,"mehsullar");
subscribers(1,1800,"baglamalar");
subscribers(100,30,"emekdashlar");
 

