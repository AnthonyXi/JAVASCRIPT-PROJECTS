function full_Sentence() {  //Concat() methods
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // Add the 4 parts together
    document.getElementById("Concatenate").innerHTML = whole_sentence; // Concatenate strings into a sentence
}
function slice_Method() {  //Slice() methods
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); // Slice out a section of the sentence
    document.getElementById("Slice").innerHTML = Section; // Display the sliced section
}
function uppercase_Method() {  //toUpperCase() methods
    let text = document.getElementById("Uppercase").innerHTML;
    document.getElementById("Uppercase").innerHTML = text.toUpperCase(); // Convert text to uppercase
}
let text = "Please locate where 'locate' occurs!";// Search() methods
let index = text.search("locate"); // Search for the position of a substring
document.getElementById("search").innerHTML = index; 

function string_Method() {  //Number methods
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();// Convert number to string
}
function precision_Method() {  //toPrecision() methods
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10); // Format number to specified precision
}
let num = 5.56789;// toFixed() methods
let n = num.toFixed(); // Format number to fixed decimal places
document.getElementById("Fixed").innerHTML = n;