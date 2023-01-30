function add(){
    var d1 = document.querySelector("#d1").value;
    var t1 = document.querySelector('#t1');

    var d2 = document.querySelector("#d2").value;
    var t2 = document.querySelector('#t2');

    var d3 = document.querySelector("#d3").value;
    var t3 = document.querySelector('#t3');

    var d4 = document.querySelector("#d4").value;
    var t4 = document.querySelector('#t4');

    var d5 = document.querySelector("#d5").value;
    var t5 = document.querySelector('#t5')


    t1.innerHTML = d1;
    t2.innerHTML = d2;
    t3.innerHTML = d3;
    t4.innerHTML = d4;
    t5.innerHTML = d5;
}

//------------------------------------------------------------------------------------------------------
let submit = document.querySelector(".submit");
let popup = document.querySelector(".popup");

submit.addEventListener("click",()=>{
    popup.classList.add("pactive")
})
function cpopup(){
    popup.classList.remove("pactive")
}

//------------------------------------------------------------------------------------------------------


function compute(){

    var d1 = document.querySelector("#d1").value;
    var d2 = document.querySelector("#d2").value;
    var d3 = document.querySelector("#d3").value;
    var d4 = document.querySelector("#d4").value;
    var d5 = document.querySelector("#d5").value;

let array = [parseFloat(d1),parseFloat(d2),parseFloat(d3),parseFloat(d4),parseFloat(d5)]

let total = array.reduce((tot,num)=>{
    return tot+=num;
})

console.log(total)

let gst=(total/100)*18;

total=total+gst;
//-------------------------------------------------------------------------
var gstt = document.querySelector("#gst")
var gsta = document.createElement("h4")

gsta.innerHTML = gst+"/-"
gstt.appendChild(gsta)

gsta.style.cssText="padding:20px; font-size:1.3rem; background-color:green; color:white; border-radius:0.5rem; text-align:center"

//--------------------------------------------------------------------------

if(total>=18000){
    total=total+500;
}
else{
    total=total+1000;
}
//----------------------------------------------------------------------------
let amount = document.createElement('h3');
var tab = document.querySelector("#amt")

amount.innerHTML = +total+'/-'
tab.appendChild(amount)

amount.style.cssText="padding:20px; font-size:1.3rem; background-color:green; color:white; border-radius:0.5rem; text-align:center"
}


//----------------------------------------------------------------------------
