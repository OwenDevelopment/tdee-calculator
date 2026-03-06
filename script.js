let chart;

const toggle=document.getElementById("toggleTheme");

toggle.onclick=()=>{

document.body.classList.toggle("dark");

toggle.textContent=document.body.classList.contains("dark")?"☀":"🌙";

};

function calculate(){

let gender=document.getElementById("gender").value;

let age=parseFloat(document.getElementById("age").value);

let weight=parseFloat(document.getElementById("weight").value);

let height=parseFloat(document.getElementById("height").value);

let activity=parseFloat(document.getElementById("activity").value);

if(!age||!weight||!height){

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

let bmi=(weight/((height/100)**2)).toFixed(1);

let cut=tdee-500;

let bulk=tdee+300;

let protein=Math.round((tdee*0.3)/4);

let carbs=Math.round((tdee*0.4)/4);

let fat=Math.round((tdee*0.3)/9);

document.getElementById("result").innerHTML=

`
<b>TDEE:</b> ${tdee} kcal<br><br>

<b>BMI:</b> ${bmi}<br><br>

<b>Calories</b><br>
Cut: ${cut}<br>
Maintain: ${tdee}<br>
Bulk: ${bulk}<br><br>

<b>Macros</b><br>
Protein: ${protein}g<br>
Carbs: ${carbs}g<br>
Fat: ${fat}g
`;

drawChart(cut,tdee,bulk);

}

function drawChart(cut,maintain,bulk){

let ctx=document.getElementById("chart");

if(chart) chart.destroy();

chart=new Chart(ctx,{

type:"doughnut",

data:{

labels:["Cut","Maintain","Bulk"],

datasets:[{

data:[cut,maintain,bulk]

}]

}

});

}