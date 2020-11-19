
window.alert("Hey guys, feel free to look around")
var Family = "The Doghouse", Dog1 = "Jax", Dog2 = "Louie", Dog3 = "Gus", Dog4 = "Bear", description = "Never let this family out or they will say \"Woof\"!"
var concat = "John said, \"No!\"", nating = "Bill said, \"Yes!\""


var Family = Family.fontcolor("green");
var Dog4 = Dog4.fontcolor("purple");
var Dog3 = Dog3.fontcolor("yellow");
var Dog2 = Dog2.fontcolor("tan")
var Dog1 = Dog1.fontcolor("brown")

document.write(Dog4, Dog2, Dog1, description);

document.write(concat + nating)

document.write(21 + 21)

function My_First_Function() {       //defining function with a name
    var str = "This text is pretty green!"; //defining variable with a string value
    var result = str.fontcolor("green"); //fontcolor method changes text of str variable
    document.getElementById("Green_Text") .innerHTML = result; //inserting value of result in html element wiht greentext id
}