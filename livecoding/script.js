// function printInfo() {
//     let fname = document.getElementById("fname").value;
//     let lname = document.getElementById("lname").value;

//     // document.getElementById("result").innerHTML = "<span id='color'>" + fname + "</span> " + lname;


//     // if (fname.length >= 5) {
//     //     document.getElementById("color").style.color = "green";
//     // } else {
//     //     document.getElementById("color").style.color = "red";
//     // }

//     // console.log(fname, lname);

//     // let color = "red";
//     // if (fname.length >= 5) {
//     //     color = "green";
//     // }

//     // document.getElementById("result").innerHTML = `<span style="color : ${color}">${fname}</span> ${lname}`;

//     // if (fname.length >= 5) {
//     //     document.getElementById("result").innerHTML = `<span style="color: green">${fname}</span>  ${lname}`;
//     // } else {
//     //     document.getElementById("result").innerHTML = `<span style="color: red">${fname}</span>  ${lname}`;
//     // }

//     if (fname.length >= 5) {
//         document.getElementById("result").innerHTML = `<span class="text-success">${fname}</span>  ${lname}`;
//     } else {
//         document.getElementById("result").innerHTML = `<span class="text-danger">${fname}</span>  ${lname}`;
//     }
// }

// document.getElementById("btn").addEventListener("click", printInfo);

// let navbar = "hidden";

// function toggleNavbar() {
//     if (navbar == "hidden") {
//         document.getElementById("navbar").style.opacity = "1";
//         document.getElementById("navbar").style.transition = "all 1s";
//         navbar = "showen";
//     } else {
//         document.getElementById("navbar").style.opacity = "0";

//         navbar = "hidden";
//     }
// }

// document.getElementById("menu").addEventListener("click", toggleNavbar);

function createTask() {
    let task = document.getElementById("demo").value;
    document.getElementById("list").innerHTML += `<li class="li"><a href="#">${task}</a></li>`;

    let lis = document.getElementsByClassName("li");

    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", function() {
            this.remove(); // addToCart()
            // console.log(this)
        })
    }

}

document.getElementById("btn").addEventListener("click", createTask);