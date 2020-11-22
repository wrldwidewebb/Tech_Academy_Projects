function Ride_Function() {       // first function of the section set in a boolean enviornment yes or no greater than or equal to
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = `${Can_ride} to ride.`;
}

function Vehicle(Make, Model, Year, Color) {   //setting up a bank of keywords and what they specify to per person in this section
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function myFunction2() { //new and this implementation
    document.getElementById("New_and_This").innerHTML = "Jack drives a " + Jack.Vehicle_Year + Jack.Vehicle_Make + Jack.Vehicle_Model;
}

function count_Function() {   //nested function with a count attribute
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count () {
        var starting_Point = 9;
        function Plus_one() { starting_Point += 1;}
        Plus_one();
        return starting_Point;
        }
    }