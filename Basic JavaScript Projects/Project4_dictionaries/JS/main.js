function my_Dictionary() {                                          //Defining the function and naming it
    var Animal = {
        Species: "Dog",                                             //Defining key-value pairs and naming it
        Color: "Black",                                             //Defining key-value pairs and naming it    
        Breed: "Labrador",                                          //Defining key-value pairs and naming it
        Age: 5,                                                     //Defining key-value pairs and naming it    
        Sound: "Bark!"                                              //Defining key-value pairs and naming it
    };
    delete Animal.Sound; //Deleting a key-value pair from the dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Putting the value of the key into HTML element
}
