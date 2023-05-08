result = document.getElementById("Result");
function triangle_area() {
  var side3 = 6;
  var side1 = 5;
  var side2 = 7;
  var pm = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(pm * ((pm - side1) * (pm - side2) * (pm - side3)));
  console.log("The area is: " + area);
}
function animate_string(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // assuming no other children
  var text = textNode.data;

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}
/*Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050*/
function sundayFirstJanuary() {
  console.log("-----------------");
  for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0)
      console.log("First January is being on sunday in: " + year);
  }
}
/*Write a JavaScript program where the program takes a 
random integer between 1 to 10, the user is then prompted to input a guess number. 
If the user input matches with guess number, 
the program will display a message "Good Work" otherwise display a message "Not matched".*/
function guessNumber() {
  const num = Math.ceil(Math.random() * 10);
  console.log("Computer's number was: " + num);
  const gNum = prompt("Guess the number between 1 to 10");
  if (gNum == num) console.log("Good Work you matched the number");
  else console.log("Not matched, your number was: " + gNum);
}

/* Write a JavaScript program to calculate days left until next Christmas*/
function avvento() {
  console.log("-----------------------");
  today = new Date();
  var xmas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    xmas.setFullYear(xmas.getFullYear() + 1);
  }
  var one_day = 1000 * 60 * 60 * 24;
  console.log(
    Math.ceil((xmas.getTime() - today.getTime()) / one_day) +
      " days left until Christmas!"
  );
}
/*Write a JavaScript program to calculate
 multiplication and division of two numbers (input from user) */
function multiplyBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;

  document.getElementById("result").innerHTML = num1 * num2;
}
function divideBy() {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  if (num2 == 0)
    document.getElementById("result").textContent = "You can't divide per 0";
  else document.getElementById("result").innerHTML = num1 / num2;
}
/*Write a JavaScript program to get the website URL (loading page) */
function getLoadPage() {
  console.log(document.URL);
}
/*Write a JavaScript exercise to create a variable using a user-defined name */
function exercise13() {
  let var_name = "abcd";
  console.log(var_name);
}
/*Write a JavaScript exercise to get the extension of a filename*/
function getExtension() {
  filename = "system.php";
  console.log(filename.split(".").pop());
  filename = "abc.js";
  console.log(filename.split(".").pop());
}
/*Write a JavaScript program to compute the sum of the two given integers.
 If the two values are same, then returns triple their sum*/
function inputNumbers() {
  num1 = parseInt(document.getElementById("numb1").value);
  num2 = parseInt(document.getElementById("numb2").value);
}
function sum() {
  inputNumbers();
  if (num1 == num2) {
    document.getElementById("Result").innerHTML = num1 * 3;
  } else {
    document.getElementById("Result").innerHTML = num1 + num2;
  }
}
function sub() {
  inputNumbers();
  document.getElementById("Result").innerHTML = num1 - num2;
}
/*Write a JavaScript program to check from two given integers, 
whether one is positive and another one is negative. */
function sign() {
  num1 = parseInt(document.getElementById("numb1").value);
  document.getElementById("Result2").innerHTML = Math.sign(num1 + num2);
}

/*31. Write a JavaScript program to find the largest of three given integers.*/
