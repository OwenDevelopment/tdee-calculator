let calorieChart;
let macroChart;

function calculate(){

let weight=parseFloat(document.getElementById("weight").value);

let height=parseFloat(document.getElementById("height").value);

let age=parseFloat(document.getElementById("age").value);

let gender=document.getElementById("gender").value;

let activity=parseFloat(document.getElementById("activity").value);


if(!weight||!height||!age){

alert("Please fill all fields");

return;

}


let bmr;

if(gender==="male"){

bmr=10*weight+6.25*height-5*age+5;

}else{

bmr=10*weight+6.25*height-5*age-161;

}


let tdee=Math.round(bmr*activity);

let cut=tdee-500;

let bulk=tdee+300;

let bmi=(weight/((height/100)*(height/100))).toFixed(1);


/* macros */

let protein=Math.round(weight*2);

let fat=Math.round(weight*0.8);

let proteinCal=protein*4;

let fatCal=fat*9;

let carbCal=tdee-proteinCal-fatCal;

let carb=Math.round(carbCal/4);


document.getElementById("bmr").innerText=Math.round(bmr);

document.getElementById("tdee").innerText=tdee;

document.getElementById("bmi").innerText=bmi;


document.getElementById("cut").innerText="Cut Calories: "+cut;

document.getElementById("maintain").innerText="Maintain: "+tdee;

document.getElementById("bulk").innerText="Bulk: "+bulk;


document.getElementById("protein").innerText="Protein: "+protein+" g";

document.getElementById("carb").innerText="Carbs: "+carb+" g";

document.getElementById("fat").innerText="Fat: "+fat+" g";


drawCalorieChart(cut,tdee,bulk);

drawMacroChart(protein,carb,fat);


saveHistory(tdee,bmi);

}


function drawCalorieChart(cut,maintain,bulk){

let ctx=document.getElementById("calorieChart");

if(calorieChart){

calorieChart.destroy();

}

calorieChart=new Chart(ctx,{

type:"bar",

data:{

labels:["Cut","Maintain","Bulk"],

datasets:[{

label:"Calories",

data:[cut,maintain,bulk]

}]

}

});

}


function drawMacroChart(protein,carb,fat){

let ctx=document.getElementById("macroChart");

if(macroChart){

macroChart.destroy();

}

macroChart=new Chart(ctx,{

type:"pie",

data:{

labels:["Protein","Carbs","Fat"],

datasets:[{

data:[protein,carb,fat]

}]

}

});

}


function saveHistory(tdee,bmi){

let history=JSON.parse(localStorage.getItem("history"))||[];

history.push({

tdee:tdee,

bmi:bmi

});


localStorage.setItem("history",JSON.stringify(history));


renderHistory();

}


function renderHistory(){

let history=JSON.parse(localStorage.getItem("history"))||[];

let list=document.getElementById("history");

list.innerHTML="";


history.slice(-5).reverse().forEach(item=>{

let li=document.createElement("li");

li.textContent="TDEE: "+item.tdee+" | BMI: "+item.bmi;

list.appendChild(li);

});

}


renderHistory();


document.getElementById("darkToggle").onclick=function(){

document.body.classList.toggle("dark");

};