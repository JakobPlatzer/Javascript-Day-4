// basic exercise

// function submitInfo() {
//     let firstName = document.getElementById("fname").value;
//     let lastName = document.getElementById("lname").value;
//     let age = document.getElementById("age").value;
//     let profession = document.getElementById("profession").value;

//     console.log(`My name is ${firstName} ${lastName}, I'm ${age} years old.`);
//     document.getElementById("result").innerHTML = `My name is <span id="color">${firstName}</span> ${lastName}, I'm ${age} years old. I work in ${profession}`;

//     if (firstName.length >= 5) {
//         document.getElementById("color").style.color = "green";
//     } else {
//         document.getElementById("color").style.color = "red";
//     }

//     if (profession == "IT") {
//         document.getElementById("result").style.backgroundColor = "purple";
//     } else {
//         document.getElementById("result").style.backgroundColor = "yellow";
//     }
    
// }


// document.getElementById("btn").addEventListener("click", submitInfo);

// intermediate exercise 1

// let santaclaus1 = "shown";
// let santaclaus2 = "shown";
// let santaclaus3 = "shown";
// let santaclaus4 = "shown";

// function hideSanta1 () {
//     if (santaclaus1 == "shown") {
//         document.getElementById("santa1").style.opacity = "0";
//         document.getElementById("santa1").style.transition = "all 1s";
//         santaclaus1 = "hidden";
//     } else {
//         document.getElementById("santa1").style.opacity = "1";
//         santaclaus1 = "shown";
//     }
// }

// function hideSanta2 () {
//     if (santaclaus2 == "shown") {
//         document.getElementById("santa2").style.opacity = "0";
//         document.getElementById("santa2").style.transition = "all 1s";
//         santaclaus2 = "hidden";
//     } else {
//         document.getElementById("santa2").style.opacity = "1";
//         santaclaus2 = "shown";
//     }
// }
// function hideSanta3 () {
//     if (santaclaus3 == "shown") {
//         document.getElementById("santa3").style.opacity = "0";
//         document.getElementById("santa3").style.transition = "all 1s";
//         santaclaus3 = "hidden";
//     } else {
//         document.getElementById("santa3").style.opacity = "1";
//         santaclaus3 = "shown";
//     }
// }

// function hideSanta4 () {

//     if (santaclaus4 == "shown") {
//         document.getElementById("santa4").style.opacity = "0";
//         document.getElementById("santa4").style.transition = "all 1s";
//         santaclaus4 = "hidden";
//     } else {
//         document.getElementById("santa4").style.opacity = "1";
//         santaclaus4 = "shown";
//     }
// }

// document.getElementById("santa1").addEventListener("click", hideSanta1);
// document.getElementById("santa2").addEventListener("click", hideSanta2);
// document.getElementById("santa3").addEventListener("click", hideSanta3);
// document.getElementById("santa4").addEventListener("click", hideSanta4);

// Intermediate Exercise 2

function newBackgroundColor () {

    let randomNumber1 = Math.floor(Math.random() * 256)
    let randomNumber2 = Math.floor(Math.random() * 256)
    let randomNumber3 = Math.floor(Math.random() * 256)
    let newColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`

    console.log(randomNumber1, randomNumber2, randomNumber3)

    document.getElementById("body").style.backgroundColor = newColor;
    document.getElementById("body").style.transition = "1s";
}

document.getElementById("colorRandomizer").addEventListener("click", newBackgroundColor);