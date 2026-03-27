function validateForm() {   // This function validates the form input. It checks if the "fname" field is empty and alerts the user if it is. It returns false to prevent form submission if the validation fails.
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}