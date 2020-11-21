document.write(typeof "Word"); // displays the word string


document.write(-3E310); //negative infinity
document.write(3E310);  //positive infinity

document.write(10>2); // true bolean
document.write(10<2); //false bolean

console.log(3+3); //use in dev tools for a quick calculator

document.write("ten" + 5); //combines a string with a number

document.write(10<3); // more boolean practice

document.write(10==10); //returns true value since the numbers are identical

document.write(3==11);  //returns false value since the numbers are different

document.write(5>2&&10>4); // logical operator format and work

X=2302
Y=2302
document.write(X === Y);  // compares two strings or numbers triple equal work

Z=2032
document.write(Y === Z);


document.write(5>10 || 10 > 20);  // more logical operator review

function not_Function() {                  // not function can switch out ! section to make it say true or false
    document.getElementById("Not").innerHTML= !(6>22);
}