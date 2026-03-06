function calculate() {

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let age = Number(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let activity = Number(document.getElementById("activity").value);

    let bmr;

    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let tdee = bmr * activity;

    let maintain = tdee;
    let cut = tdee - 500;
    let bulk = tdee + 500;

    document.getElementById("result").innerText =
        "TDEE: " + Math.round(tdee) + " kcal/day";

    document.getElementById("maintain").innerText =
        "Maintain calories: " + Math.round(maintain);

    document.getElementById("cut").innerText =
        "Cutting calories (giảm cân): " + Math.round(cut);

    document.getElementById("bulk").innerText =
        "Bulking calories (tăng cân): " + Math.round(bulk);
}