//document.getElementById("title").innerHTML = "JavaScript";
console.log("hello world");

//string
let myName = "John";
console.log(myName);

//numbers
let x = 5;
let g = 5;
console.log(x);
x-=g;
console.log(x);
console.log(g);


//object
let cup= {
    color: "Blue",
    price: 50,
    type: "Ceramic",
    new: true,
};
console.log(cup)

//array
let myArr = ["apple", "orange", "pineapple", 20, true];
console.log(myArr)


//arithmetic ops

let y = 4;
y++;

let z = 4;
// z--;

// console.log(y ** z);

//comparison operators
console.log(2 > 3);
console.log(2 < 3);
console.log(2 <= 3);
console.log(2 >= 3);
console.log(2 != 3);

if (4 < 3) {
  //action
  console.log("Yes 4 is greater than 3");
} else {
  console.log("4 is not less than 3");
}

if (2 > 2 && 4 > 4) {
  console.log("Okay");
} else {
  console.log("not ok");
}

let result = 50;

if (result == 40) {
  console.log("Pass");
} else if (result == 50) {
  console.log("Credit");
} else if (result == 90) {
  console.log("Excellent");
} else {
  console.log("No result");
}

let age = 18;

let beverages = age < 21 ? "juice" : "beer";

console.log(beverages);


function nameofunction() {
  console.log("Hello World");
}
//calling function
nameofunction();

//function with parameters
function addfunc(a, b, c) {
  console.log(a + b + c);
}
addfunc(2, 3, 4);

//arrow function
const checkRectangle=(height, width) => {
  console.log(height * width) ;
}
checkRectangle(3, 4);


document.getElementById("heading1").innerHTML = "Welcome to THE Javascript";
document.getElementById("heading1").style.color = "brown";
document.getElementById("heading1").style.fontSize = "50px";
document.getElementById("heading1").style.fontFamily = "sans-serif";

/*function with return attribute*/
function alert1() {
  return alert("Welcome to THE Javascript");
}

