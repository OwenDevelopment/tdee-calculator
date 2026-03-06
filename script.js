function calculate(){

let gender = document.getElementById("gender").value;

let age = parseFloat(document.getElementById("age").value);

let weight = parseFloat(document.getElementById("weight").value);

let height = parseFloat(document.getElementById("height").value);

let activity = parseFloat(document.getElementById("activity").value);

if(!age || !weight || !height){

alert("Please fill all fields");

return;

}

let bmr;

if(gender==="male"){

bmr = 10*weight + 6.25*height - 5*age + 5;

}else{

bmr = 10*weight + 6.25*height - 5*age - 161;

}

let tdee = Math.round(bmr*activity);

let bmi = weight/((height/100)**2);

bmi = bmi.toFixed(1);

let cut = tdee - 500;

let bulk = tdee + 300;

document.getElementById("result").innerHTML =

`
<b>TDEE:</b> ${tdee} kcal/day<br><br>

<b>BMI:</b> ${bmi}<br><br>

<b>Cut:</b> ${cut} kcal<br>

<b>Maintain:</b> ${tdee} kcal<br>

<b>Bulk:</b> ${bulk} kcal
`;

}