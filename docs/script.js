document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "user" && password === "1201") {
    // Redirect to the next page
    window.location.href = "Bank.html";
  } else {
    document.getElementById("error").innerHTML = "Invalid username or password.";
  }
});
