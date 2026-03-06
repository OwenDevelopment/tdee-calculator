function calculate(){

let age = document.getElementById("age").value
let gender = document.getElementById("gender").value
let height = document.getElementById("height").value
let weight = document.getElementById("weight").value
let activity = document.getElementById("activity").value

if(!age || !height || !weight){

document.getElementById("result").innerText = "Please fill all fields"

return
}

let bmr

if(gender=="male"){

bmr = 10*weight + 6.25*height - 5*age + 5

}else{

bmr = 10*weight + 6.25*height - 5*age -161

}

let tdee = bmr * activity

document.getElementById("result").innerText =

"Your TDEE: " + Math.round(tdee) + " calories/day"

}


/* DARK MODE */

const toggle = document.getElementById("toggleTheme")

toggle.onclick = function(){

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){

toggle.innerText="☀ Light Mode"

}else{

toggle.innerText="🌙 Dark Mode"

}

}