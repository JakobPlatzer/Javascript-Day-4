function submitInfo() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    console.log(`My name is ${firstName} ${lastName}, I'm ${age} years old.`);
    document.getElementById(divFirstName).innerHTML = `My name is ${firstName} ${lastName}, I'm ${age} years old.`;
    
}


document.getElementById("btn").addEventListener("click", submitInfo);