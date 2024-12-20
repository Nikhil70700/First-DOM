// // FOUR Pillars of DOM--->

// // 1. Selection of an Elements
// // 2. Changing HTML
// // 3. Changing CSS
// // 4.EVent Listener
// //!--------------------------------------------------------------------


//  // 1. Selection of an Elements--------->>>


//  var a = document.querySelector("h1")
//  console.log(a);



//  // 2. Changing HTML
//  a.innerHTML="Changed HTML"



//  // 3. Changing CSS
//  a.style.color="red"
//  a.style.backgroundColor="black"
//  a.style.cursor="pointer"



//  // 4.Event Listener
//  a.addEventListener("click",function(){
//     a.innerHTML="Badal gya hu mai teri Ex ki tarh"
//     a.style.color="yellow"
//     a.style.backgroundColor="black"

//     alert("4 Pillers Distroyed")
//  })

// ---------------------------------------------------



var bulb=document.querySelector("#bulb")
var btn=document.querySelector("button")

var count=0;
btn.addEventListener("click",function(){
    if(count==0){
        bulb.style.backgroundColor="yellow"; 
        bulb.style.boxShadow="50px 50px 100px 100px #e09d4b"
        bulb.style.border="0px";
        btn.innerHTML="Off"
        btn.style.backgroundColor="red"
        console.log("Bulb jal gya re ");
        count=1;
    } 
    
   
    else{
        bulb.style.backgroundColor="transparent";
        bulb.style.boxShadow="none"
        console.log("Bulb Bujh gya re Baba ");
        btn.innerHTML="on"         
        btn.style.backgroundColor="green"
        count=0;
        
        

    }
    
})

// ---------------------------------------------------2

var h=document.querySelector("h1")
console.log(h,"Will Print 1st H1 ");

// what if i want to select all h1....?
var hh=document.querySelectorAll("h1")
console.log(hh,"Will print all H1,but in the form of Node list slightly similar to  arrray)");

hh.forEach(function(elem){
    console.log(elem);//Will print all h1 individually
})


// ---------------------3

var hay=document.getElementById("hey")
hay.innerHTML="Bhag ja yha se"  //differenve niche hai
hey.textContent="Kya be kaisa hai"//difference niche hai
hey.innerHTML="<h1 >CHla ja yha se </h1." //In case of using innerHTML we will get our text in h1 format but,
hey.textContent="<h1>bhagoooooooooooooo</h1>" // it willl print like <h1>bhagoooooooooooooo</h1>
