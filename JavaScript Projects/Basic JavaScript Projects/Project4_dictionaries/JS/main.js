function my_Dictionary() {    // setting up a kvp dictionary
    var vehicle = {
        make: "Ford",         // different key values within the dictionary
        model:"Bronco",
        year:"1993",
        owner:"OJ Simpson"   
     };
     delete vehicle.make;    // deleting the make from the dictionary
     document.getElementById("Dictionary").innerHTML=vehicle.owner;

     document.getElementById("Dictionary2").innerHTML=vehicle.make;
}

