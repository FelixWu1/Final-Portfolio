 function intro() {
  var name = document.getElementById("name").value;
  var grade = document.getElementById("grade").value;
  var gpa = document.getElementById("gpa").value;
  var multiply = (5*10);
  var age = (2050-1985);
  var result = "Your name is " + name + "." + "\n" + "<br>" + "Your Grade is " + grade + "." + "\n" + "<br>" + "Your GPA is " + gpa + "." + "\n" + "<br>" +"Five times ten equals " + multiply + " in 2050, I will be " + age + " years old.";

    document.getElementById("result").innerHTML = result;
}

function average() {
  var values = [];

  var text = document.getElementById("average").value;
  const array = text.split(',');

  var totalValues = array.length;
  for (var i = 0; i < totalValues; i ++) {
    values[i] = array[i];
  }

  var sum = 0;
  for (var i = 0; i < totalValues; i++) {
    sum += parseInt(values[i]);
  }

  console.log(text);
  console.log(array);
  console.log(values);
  var result = (sum/totalValues);
  document.getElementById("result").innerHTML = "The average of your values is: " + result;
}

function countChange() {
var quarters = document.getElementById("quarters").value;
var dimes = document.getElementById("dimes").value;
var nickels = document.getElementById("nickels").value;
var pennies = document.getElementById("pennies").value;

var sum = parseInt(quarters*25) + parseInt(dimes*10) + parseInt(nickels*5) + parseInt(pennies);

document.getElementById("result").innerHTML = ("$" +(sum/100))

}

var rolls = "";

function rollDie() {

  var die = Math.round(Math.random()*5) + 1;

  var image = "images/die" + die + ".jpg";
  document.getElementById("dieHolder").src=image;
  rolls += die;
  
  console.log(rolls);
  document.getElementById("rolls").innerHTML = rolls;
  
  
}

function convertTemperature(){

  var getChoice = document.getElementById("temp").value;

  if (getChoice == "toF"){
    calculateToF();
  } else{
    calculateToC();
  }
  
}

function calculateToF() {
var value = document.getElementById("temperature").value;
  var f = 0;
  f = ((value * 1.8) + 32);
  document.getElementById("result").innerHTML = "Farenheit: " + f;
  
}

function calculateToC() {
var value = document.getElementById("temperature").value;
  var c = 0;
  c = ((value - 32) * .55555555555);
  document.getElementById("result").innerHTML = "Celsius: " + c;  
}

 function questions() {
  var names = document.getElementById("names").value;
  var age = document.getElementById("age").value;
  var school = document.getElementById("school").value;
  var food = document.getElementById("food").value;
  var sport = document.getElementById("sport").value;
  var result = "Your name is " + names + "," + "\n" + "and you're " + age + " years old." + "\n" + "You attend " + school + "." + "\n" +"You like to eat " + food + " and your favorite is " + sport + ".";

    document.getElementById("result").innerHTML = result;
}

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

var rolls = "";

function rollDie() {

  var die = Math.round(Math.random()*5) + 1;

  var image = "images/die" + die + ".jpg";
  document.getElementById("dieHolder").src=image;
  rolls += die;
  
  console.log(rolls);
  document.getElementById("rolls").innerHTML = rolls;
  
  
}