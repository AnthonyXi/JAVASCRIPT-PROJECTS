function Color_Function() { // Switch function
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {  // The switch statement
        case "Red":  
            Color_Output = "Red" + Color_String; 
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list."; 
    }
    document.getElementById("Output").innerHTML = Color_Output; // The output of the switch function
}
function Hello_World_Function() { // This is a function that uses the getElementByClassName method to display "Hello World!" in the HTML page
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "Hello World!"; // The output of the getElementByClassName method
}
const canvas = document.getElementById("ID_Name");
const ctx2 = canvas.getContext("2d");
const grd = ctx2.createLinearGradient(0, 0, 550, 0); // This is a variable that creates a linear gradient for the canvas
grd.addColorStop(0, "red"); // This is a method that adds a color stop to the gradient at the specified position
grd.addColorStop(0.5, "white"); // This is a method that adds a color stop to the gradient at the specified position
ctx2.fillStyle = grd; // This is a method that sets the fill style of the canvas to the gradient
ctx2.fillRect(20, 20, 650, 100); // This is a method that fills a rectangle on the canvas with the specified dimensions and position

var c = document.getElementById("ID_Name"); // This is a variable that uses the getElementById method to get the canvas element
var ctx = c.getContext("2d"); // This is a variable that uses the getContext method to get the 2D drawing context of the canvas
ctx.font = "45px Arial"; // This is a method that sets the font of the text to be displayed on the canvas
ctx.fillText("Hello! and Welcome!", 10, 167); // This is a method that displays the text "Hello World" on the canvas at the specified coordinates