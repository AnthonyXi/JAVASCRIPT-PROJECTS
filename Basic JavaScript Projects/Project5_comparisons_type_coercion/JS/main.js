document.write(typeof"Word");//Using typeof operator to show data types
document.write(typeof 3); //Using typeof operator to show data types
document.write("10" + 5); //Type coercion: converts number to string and concatenates

function my_Function() { //Function 1
    document.getElementById("Test").innerHTML = 0/0; //Comparison operator: returns true
}

function my_Function2() { //Function 2
    document.getElementById("Test2").innerHTML = isNaN('This is a string'); //isNaN function: returns true
}
function my_Function3() { //Function 3
    document.getElementById("Test3").innerHTML = isNaN('007'); //isNaN function: returns false
}

document.write(2E310); //Positive infinity
document.write(-3E310); //Negative infinity
document.write(10 > 2); //Comparison operator: returns true
document.write(10 < 2); //Comparison operator: returns false
console.log(2 + 2); //Using console.log to display result of addition
document.write(10 == 10); //Equality operator: returns true
document.write(3 == 11); //Equality operator: returns false