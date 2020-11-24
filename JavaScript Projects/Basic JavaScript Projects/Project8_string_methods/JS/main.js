function full_Sentence() { //concat function sentence structure and layout
    var part_1 = "I am going";
    var part_2 = " to keep writing";
    var part_3 = " until this sentence";
    var part_4 = " is completed.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("customtag1").innerHTML = whole_sentence;
}


function slice_Method() {  //this slice method identifies and executes the section variable specifiations on the line of the first var
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section;
}

var str = "Hello World!";   //all uppercase challenge function
var res = str.toUpperCase();
document.write(res);

var str = "Mr. Blue has a blue house"; //search function challenge
var n = str.search("blue");

function string_Method() {  //string method function
    var X =182;
    document.getElementById("numberstoString").innerHTML = X.toString();
}

function precision_Method() { // precision function that cuts down the variable number into 5 digits
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
}