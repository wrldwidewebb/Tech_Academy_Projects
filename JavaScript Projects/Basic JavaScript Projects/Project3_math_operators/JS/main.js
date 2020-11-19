function multiplyFunction () {
    var multiplicationandothers = 3 * 7 - (2+7) / 3;
    document.getElementById("Math").innerHTML = "2 * 9 = " + multiplicationandothers;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math1").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //negation function that I set up here
    var X = 10;
    document.getElementById("Math2").innerHTML = -X;
}

function randomath() {    //function using random math number generator
    var luckynumber = Math.random() * 100;
    document.getElementById("Math3").innerHTML = luckynumber;
}

function dplusdminus() {
    var upanddown = 6;
    upanddown++;
    document.getElementById("Math4").innerHTML = upanddown;
}

function dplusdminus2() {
    var upanddown2 = 6;
    upanddown2--;
    document.getElementById("Math5").innerHTML = upanddown2;
}

var X = 5;  //earlier course content using the double plus sign to add 1 to a number
X++;
document.write(X);

var Y = 5.25;   //earlier course work utilizing double minus to subtract by one whole number
Y--;
document.write(Y);

window.alert(Math.random());   //spam number pop up one

window.alert(Math.random() * 100);  //spam number pop up two