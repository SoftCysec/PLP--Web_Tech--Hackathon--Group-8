var attempt = 4; // Variable to count number of attempts.

// Below function Executes on click of login button.
/*
function validate() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "user1234" && email == "plpgroup8@gmail.com" && password == "pass1234") {
        alert("Login successfully");
        window.location = "todo.html"; // Redirecting to the To-do list page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("input values does not match")
        alert("You have left " + attempt + " attempt;");

        // Disabling fields after 4 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}