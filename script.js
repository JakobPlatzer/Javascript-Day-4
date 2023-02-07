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

let santaclaus = "shown";

function hideSanta () {
    if (santaclaus == "shown") {
        document.getElementById(santa1).style.opacity = "0";
        document.getElementById(santa1).style.transition = "all 1s";
        santaclaus = "hidden";
    } else {
        document.getElementById(santa1).style.opacity = "1";
        santaclaus = "shown";
    }
}

document.getElementById(santa1).addEventListener("click", hideSanta);