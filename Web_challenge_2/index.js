function validateform() {
  var fname = document.form1.fname.value;
  var lname = document.form1.lname.value;
  var email = document.form1.email.value;
  var phoneno = document.form1.phoneno.value;
  var pass1 = document.form1.password.value;
  var pass2 = document.form1.cpassword.value;
  var confirm = document.form1.confirm.value;

  if (fname == null || fname == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Enter your first name!";
    return false;
  } else if (lname == null || lname == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Enter your Surname!";
    return false;
  } else if (email == null || email == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Enter your email address!";
    return false;
  } else if (phoneno == null || phoneno == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Enter your Phone Number!";
    return false;
  } else if (isNaN(phoneno)) {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Enter Numeric values only!";
    return false;
  } else if (phoneno.length < 10 || phoneno.length > 14) {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Phone number cannotbe " + phoneno.length + " Characters";
    return false;
  } else if (pass1 == null || pass1 == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Enter your Password";
    return false;
  } else if (pass1.length < 6) {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML =
      "Password length should be atleast 6";
    return false;
  } else if (pass2 == null || pass2 == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Confirm your Password";
    return false;
  } else if (pass1 !== pass2) {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "passwords don't match!";
    return false;
  } else if (confirm == null || confirm == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "mark the checkbox";
    return false;
  } else {
    if (email == "group8@gmail.com" && pass1 == "group8") {
      alert("You have logged in successfully! Welcome😍" + fname);
      window.location = "todo.html";
      return false;
    } else {
      alert("Kindly use the Default email and password");
      return false;
    }
  }
}
function validatelogin() {
  var email = document.form1.email.value;
  var pass1 = document.form1.password.value;

  if (email == null || email == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Enter your email!";
    return false;
  } else if (pass1 == null || pass1 == "") {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "Enter your password!";
    return false;
  }

  if (email == "group8@gmail.com" && pass1 == "group8") {
    alert("You have logged in successfully!");
    window.location = "todo.html";
    return false;
  } else {
    document.querySelector("#error").style.display = "block";
    document.getElementById("error").innerHTML = "failed login";
    return false;
  }
}
