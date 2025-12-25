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
document.write(10 > 2); //Comparison operator: returns as true
document.write(10 < 2); //Comparison operator: returns as false
console.log(2 + 2); //Using console.log to display result of addition
document.write(10 == 10); //Equality operator: returns as true
document.write(3 == 11); //Equality operator: returns as false
X= 10;
Y= 10;
document.write(X === Y); //Strict equality operator: returns as true
X= 82;
Y= "82";
document.write(X === Y); //Strict equality operator: returns as false
A= "Magnus";
B= "Magnus";
document.write(A === B); //Strict equality operator: returns as true
document.write(5 > 2 && 10 > 4); //AND operator: will returns as true
document.write(5 > 10 && 10 > 4); //AND operator: will returns as false
document.write(5 > 10 || 10 > 4); //OR operator: will returns as true
document.write(5 > 10 || 10 > 20); //OR operator: will returns as false
function not_Function4() {
    document.getElementById("Not").innerHTML = !(20 > 10); //NOT operator: returns as false
}
function not_Function5() {
    document.getElementById("Not2").innerHTML = !(5 > 10); //NOT operator: returns as true
}