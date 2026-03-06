function login(){

let user=document.getElementById("username").value
let pass=document.getElementById("password").value

if(user && pass){

localStorage.setItem("user",user)

window.location="dashboard.html"

}else{

document.getElementById("loginMsg").innerText="Enter username"

}

}

function logout(){

localStorage.removeItem("user")

window.location="index.html"

}

function go(page){

window.location=page

}

/* meal */

function suggestMeal(){

let meals=[

"Chicken rice",

"Salmon potato",

"Egg avocado",

"Greek yogurt",

"Steak brown rice"

]

let meal=meals[Math.floor(Math.random()*meals.length)]

document.getElementById("meal").innerText=meal

}

/* workout */

function calculateWorkout(){

let w=document.getElementById("weight").value
let t=document.getElementById("workoutType").value
let m=document.getElementById("duration").value

let c=Math.round(t*w*m/60)

document.getElementById("burned").innerText=c+" kcal burned"

}