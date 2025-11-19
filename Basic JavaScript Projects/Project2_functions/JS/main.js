function My_First_Function() {                       //Defining function and naming it
    var str = "It is ";                 //Defining variable and giving it
                                                         //string value
    document.getElementById("Button_Text").innerHTML =str+Date(); //Putting the value of the variable
                                                            //into HTML elementFromPoint with the "Button_Text" id                                                        
}
function myFunction() {
    var sentence = "I am learning"; //Defining variable sentence
    sentence += " a lot from this book!"; //Concatenating string to sentence
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value of the variable
}                                             