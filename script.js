//your JS code here. If required.
// Function to capitalize the name when the input field loses focus
function capitalizeName() {
    // Get the input field by id 'fname'
    var inputField = document.getElementById("fname");
    // Convert the value to uppercase and update the input field
    inputField.value = inputField.value.toUpperCase();
}
