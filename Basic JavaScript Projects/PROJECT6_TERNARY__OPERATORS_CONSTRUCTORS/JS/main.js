function Ride_Function() { //Ternary operator function
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; // If height is less than 52 cm, "You are too short", else "You are tall enough"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; // Display result
}
function Vehicle(Make, Model, Year, Color) { //New Keyword and Constructor function
    this.Vehicle_Make = Make;                // Assigning properties
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  // Creating new objects
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = // Displaying information about Erik's vehicle
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
function Person(first, last, age, city) { //Constructor function
    this.firstName = first;               // Assigning properties
    this.lastName = last;
    this.age = age;
    this.city = city;
}
const myFather = new Person("John", "Doe", 50, "Portland"); // Creating new object
function Person_Function() {
document.getElementById("Person_id").innerHTML = // Displaying information about myFather
"My father is " + myFather.firstName + " " + myFather.lastName + ", age " + myFather.age + ", from " + myFather.city + ".";
}
function count_Function() { //Nested function
    document.getElementById("Nested_Function").innerHTML = Count(); // Display result of Count function
    function Count() {
        var Starting_point = 9; // Initial value
        function Plus_one() {Starting_point += 1;} // Inner function to increment value
        Plus_one(); // Call inner function
        return Starting_point;
    }
}