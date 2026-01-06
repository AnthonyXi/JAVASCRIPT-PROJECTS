var X = 10;                          //Global variable
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
function Add_numbers_3() {           //Local variable
    var X = 10;                      //X is only defined within this function
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_3();
Add_numbers_4();                    //This will cause an error because X is not defined in this scope
if (1 < 2) {
    document.write("The left number is smaller than the number on the right.");  //If statement 
}
function get_Date(){         //If statement with date and time
    if (new Date().getHours() < 18) {  //If current hour is less than 18 (6 PM)
        document.getElementById("greet").innerHTML = "How are you today?"; // Display greeting
    }
}
function Age_Function() {   //If, else statement
    Age = document.getElementById("Age").value; // Get age input
    if (Age >= 18) { // If age is 18 or older
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; // Display result
}
function Time_function() { //else if statement
    var Time = new Date().getHours(); // Get current hour
    var Reply;
    if (Time < 12 == Time > 0) { // If time is before noon
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { // If time is between noon and 6 PM
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."; // If time is 6 PM or later
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // Display result
}