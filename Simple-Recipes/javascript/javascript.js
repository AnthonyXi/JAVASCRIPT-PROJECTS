//RECIPE POP UP MODAL SECTION

//Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//Gets an <span> element that closes the modal
var closeBtns = document.getElementsByClassName("close-btn");

//When the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function(event) {
        modal = document.querySelector(event.target.getAttribute
        ("href"));
        modal.style.display = "block";
        
        setTimeout(function() {
            modal.style.display = "none";
        }, 10000);
    }
}

//When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//EMAIL VALIDATION

document.getElementById("contactForm").addEventListener("submit", function(event) {
    //Overrides the default browser refresh when the sumbit
    //button is pressed 
    event.preventDefault();

    //Variable to validate that each field is filled out
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    //Email pattern for checks are all symbols that would be needed
    //for an email address such as the @ and . and the text
    //that would come before, between, and after.\
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //Use this variable to display messages if fields are filled
    //out or thank you message
    const valMsg = document.getElementById("validateMsg");

    if (!firstName || !lastName  || !phone || !message) {
        //Checks if fields have  been filled out
        valMsg.innerHTML = "<p style='color: red;'>Please fill out all empty fields.</p>";
    } else if (!emailPattern.test(email)) {
        //Checks if there is a valid email
        valMsg.innerHTML = "<p style='color: red;'>Please enter a valid email address.</p>";
    } else {
        //If all fields are filled out and email is valid, display thank you message
        valMsg.innerHTML = "<p style='color: red;'>Thank you for contacting us, " + firstName + "!</p>";
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subscription: document.getElementById("subscription").checked
    };

    //Display what the user wrote in the console
    console.log(JSON.stringify(formData));
}
)