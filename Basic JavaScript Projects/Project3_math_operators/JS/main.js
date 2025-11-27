function addition_Function() {                                        //Defining function and naming it
    var addition = 2 + 2;                                             //Defining variable
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;//Putting the value of the variable
}
function subtraction_Function() {                                               //Defining function and naming it
    var subtraction = 5 - 2;                                                    //Defining variable
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + subtraction;//Putting the value of the variable
}
function multiplication_Function() {                                               //Defining function and naming it
    var simple_Math = 6 * 8;                                                       //Defining variable
    document.getElementById("Multiplication").innerHTML = "6 * 8 = " + simple_Math;//Putting the value of the variable
}
function division_Function() {                                                //Defining function and naming it
    var simple_Math = 48 / 6;                                                 //Defining variable
    document.getElementById("Division").innerHTML = "48 / 6 = " + simple_Math;//Putting the value of the variable
}

function more_Math() {                                                                                                                           //Defining function and naming it
    var simple_Math = (1 + 2) * 10 / 2 - 5;                                                                                                      //Defining variable
    document.getElementById("Multiple").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;//Putting the value of the variable
}

function modulus_Operator() {                                                                                        //Defining function and naming it
    var simple_Math = 25 % 6;                                                                                        //Defining variable
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;//Putting the value of the variable
}

function negation_Operator() {                                             //Defining function and naming it
    var x = 10;                                                            //Defining variable
    document.getElementById("Negation").innerHTML = -x;                    //Putting the value of the variable
}

function increment_Operator() {                                         //Defining function and naming it
    var X = 5;                                                        //Defining variable
    X++;
    document.write(X);                                                  //Putting the value of the variable
}

function decrement_Operator() {                                         //Defining function and naming it
    var X = 5.25;                                                        //Defining variable
    X--;
    document.write(X);                                                  //Putting the value of the variable
}

window.alert(Math.random());        //Generates a random number between 0 and 1 and displays it in an alert box

window.alert(Math.random() * 100); //Generates a random number between 0 and 100 and displays it in an alert box

function MathPI() {
    let circumference = 2 * Math.PI * 5; // Calculate circumference of a circle with radius 5
    document.getElementById("PI").innerHTML = Math.PI; //Putting the value of PI into HTML element
}