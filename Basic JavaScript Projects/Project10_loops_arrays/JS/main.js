function Call_Loop() {  //While loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit; //The while loop is used to display the numbers 1 through 10 on the webpage.
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //For loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //The for loop is used to display the list of instruments in the array.
}
function array_Function() { //Array
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "."; //The array is used to display the word "eating" in the sentence.
}
function constant_function() { //Const
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"blue"}; //proerties values
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + "."; // The const is used to display the sentence with the properties of the Musical_Instrument object. The color property is changed and a new price property is added, but the type property cannot be changed because it is a constant.
}
const X = 10; // const cannot be changed, so this will cause an error if you try to change the value of X.
 document.write(X);
var Z = 10;
Z = 7; // var can be changed, so this will change the value of Z to 7.
document.write(Z);
var Y = 82;
document.write(Y);
{
    let Y = 33; 
    document.write("<br>" + Y); // let can be changed, but it is only available within the block it is defined in. So this will display 33, but outside of the block, Y will still be 82.
}
document.write("<br>" + Y);
var N = 82;
document.write(N);
{
    var N = 33;
    document.write("<br>" + N); // var can be changed and it is available globally, so this will change the value of N to 33 and display it.
}
document.write("<br>" + N); 
let car = { //Object with properties and method
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model; // The this keyword is used to refer to the properties of the car object within the description method.
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); // The object is used to display the description of the car on the webpage.