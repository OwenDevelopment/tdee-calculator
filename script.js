function calculate(){

let weight = parseFloat(document.getElementById("weight").value);
let height = parseFloat(document.getElementById("height").value);
let age = parseFloat(document.getElementById("age").value);
let gender = document.getElementById("gender").value;
let activity = parseFloat(document.getElementById("activity").value);

if(!weight || !height || !age){
alert("Please fill all fields");
return;
}

let bmr;

if(gender === "male"){
bmr = 10*weight + 6.25*height - 5*age + 5;
}else{
bmr = 10*weight + 6.25*height - 5*age - 161;
}

let tdee = Math.round(bmr * activity);

let cut = tdee - 500;
let bulk = tdee + 300;

let bmi = (weight / ((height/100)*(height/100))).toFixed(1);

document.getElementById("bmr").innerText = "BMR: " + Math.round(bmr) + " kcal";
document.getElementById("tdee").innerText = "TDEE: " + tdee + " kcal";
document.getElementById("cut").innerText = "Cutting Calories: " + cut + " kcal";
document.getElementById("maintain").innerText = "Maintenance: " + tdee + " kcal";
document.getElementById("bulk").innerText = "Bulking Calories: " + bulk + " kcal";
document.getElementById("bmi").innerText = "BMI: " + bmi;

}

document.getElementById("darkToggle").onclick = function(){
document.body.classList.toggle("dark");
};