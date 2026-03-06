function calculateTDEE(){

    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let activity = document.getElementById("activity").value;

    let bmr;

    if(gender === "male"){
        bmr = 10*weight + 6.25*height - 5*age + 5;
    }
    else{
        bmr = 10*weight + 6.25*height - 5*age - 161;
    }

    let tdee = bmr * activity;

    document.getElementById("result").innerHTML =
        "Your TDEE is: " + Math.round(tdee) + " calories/day";
}