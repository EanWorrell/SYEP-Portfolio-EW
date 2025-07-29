// console.log("Hello World");

// let blue = 123;
// console.log(blue);
// console.log(typeof blue);

// console.log(10 + "eggs");
// console.log(10 + 8 + "eggs");
// console.log("eggs "+ 10 +8);

// console.log(6==3)

// //Both Conditions need to be true
// console.log(7>3)&&(10>8);

// //Only one condition must be true
// console.log(10>3)||(5>10);

// //If the statement is logical or not
// console.log(!5>3);

const hour = new Date().getHour();
let greeting = "";

if (hour<12){
    greeting = "Good morning☀️";
} else if (hour<18){
    greeting = "Good afternoon ";
}else{
    greeting = "Good evening ";
}

document.getElementById("greeting").innerText = greeting;