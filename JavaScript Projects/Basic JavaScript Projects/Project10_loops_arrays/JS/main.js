function Call_Loop() {   //work with while loops counting to 22 in this case
    var Digit = "";
    var X = 1;
    while (X < 23) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction() {   //challenge section for counting characters in a string function
    var str = "Hello how many characters could be in this string?!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
  }

var Instruments = ["Guitar", "Piano", "Drums", "Xylophone", "Bass", "Clarinet", "Trumpet", "Flute"]; //more work with loops
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}  

function array_Function() { //first array function multiple options and you specify in get element by id section
    var badgerpic = [];
    badgerpic[0] = "working out";
    badgerpic[1] = "cheering";
    badgerpic[2] = "eating";
    document.getElementById("Array").innerHTML = "In this picture, the badger is " + badgerpic[0] + ".";
}

function constant_function() { //work with constants 
    const Musical_Instrument = {type: "guitar", brand: "Gibson", color:"orange"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
}

var X = 82; //utilizing let keyword only impacts within that bracket range or the block scope of things
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);