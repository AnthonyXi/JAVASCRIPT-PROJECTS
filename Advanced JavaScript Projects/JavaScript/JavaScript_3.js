function displayType(character) {   // This function takes a character element as an argument, retrieves the value of the "data-character-type" attribute, and displays an alert with the character type and the universe they belong to.
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the" + character.innerHTML + " universe!");
}