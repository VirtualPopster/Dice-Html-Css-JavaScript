let one  = document.getElementById('1');    
let two = document.getElementById('2');   
let three  = document.getElementById('3');   
let four  = document.getElementById('4');   
let five = document.getElementById('5');   
let six = document.getElementById('6');   
let sev  = document.getElementById('7');
let eight  = document.getElementById('8'); 
let nine  = document.getElementById('9'); 
one.innerHTML=" ";
two.innerHTML=" ";
three.innerHTML=" ";
four.innerHTML=" ";
five.innerHTML=" ";
six.innerHTML=" ";
sev.innerHTML=" ";
eight.innerHTML=" ";
nine.innerHTML=" "; 
function PLayAudio() {
    let aud = new Audio('assets\hui.mp3');
    aud.play();

    
}

document.getElementById('trigger').addEventListener('click',function test() {
    // Generate a random number between 1 and 6 (inclusive)
    // Generate a random number between 1 and 6 (inclusive)
PLayAudio()      
var randomNumber = Math.floor(Math.random() * 6) + 1;

if (randomNumber==1) {
     
   one.innerHTML=" ";
   two.innerHTML=" ";
   three.innerHTML=" ";
   four.innerHTML=" ";
   five.innerHTML="O";
   six.innerHTML=" ";
   sev.innerHTML=" ";
   eight.innerHTML=" ";
   nine.innerHTML=" ";
    
}
if(randomNumber ==2){
    one.innerHTML=" ";
    two.innerHTML=" ";
    three.innerHTML=" ";
    four.innerHTML="O";
    five.innerHTML=" ";
    six.innerHTML="O";
    sev.innerHTML=" ";
    eight.innerHTML=" ";
    nine.innerHTML=" ";
   
}
if (randomNumber ==3) {
    one.innerHTML=" ";
    two.innerHTML=" ";
    three.innerHTML=" ";
    four.innerHTML="O";
    five.innerHTML="O";
    six.innerHTML="O";
    sev.innerHTML=" ";
    eight.innerHTML=" ";
    nine.innerHTML=" ";
    
    
}
if (randomNumber==4) {
   
    one.innerHTML="O";
    two.innerHTML=" ";
    three.innerHTML="O";
    four.innerHTML=" ";
    five.innerHTML=" ";
    six.innerHTML=" " ;
    sev.innerHTML="O";
    eight.innerHTML=" ";
    nine.innerHTML="O";
    
}
if (randomNumber==5) {
    one.innerHTML="O";
    two.innerHTML=" ";
    three.innerHTML="O";
    four.innerHTML=" ";
    five.innerHTML="O";
    six.innerHTML=" ";
    sev.innerHTML="O";
    eight.innerHTML=" ";
    nine.innerHTML="O";

    
}
if (randomNumber==6) {
 
    one.innerHTML="O";
    two.innerHTML="O";
    three.innerHTML="O";
    four.innerHTML=" ";
    five.innerHTML=" ";
    six.innerHTML=" ";
    sev.innerHTML="O";
    eight.innerHTML="O";
    nine.innerHTML="O";
}
                              

})