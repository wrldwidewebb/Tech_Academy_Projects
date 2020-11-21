function my_Dictionary() {
    var vehicle = {
        make: "Ford",
        model:"Bronco",
        year:"1993",
        owner:"OJ Simpson"   
     };
     delete vehicle.make;
     document.getElementById("Dictionary").innerHTML=vehicle.owner;

     document.getElementById("Dictionary2").innerHTML=vehicle.make;
}

