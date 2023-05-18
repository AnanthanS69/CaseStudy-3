function redirectToPage() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform username and password validation here
  if (username === "admin" && password === "12345") {
    window.location.href = "homepage.html";
  } else {
    // Handle invalid credentials or display an error message
    var errorElement = document.getElementById("error-message");
    errorElement.innerHTML = "Invalid username or password.";
  }
}

function ajreq() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var data = JSON.parse(this.responseText);
      var output = "<h2>To-Do List</h2><br>";
      var checkedCount = 0;
      
      for (let i = 0; i < 20; i++) {
        if (data[i].completed == 1) {
          output += `<input type="checkbox" checked>${data[i].title}<br>`;
          checkedCount++;
        } else {
          output += `<input type="checkbox">${data[i].title}<br>`;
        }
      }
      
      document.getElementById('htxt').innerHTML = output;
      
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function () {
          var additionalCheckedCount = document.querySelectorAll('input[type="checkbox"]:checked').length - checkedCount;
          if (additionalCheckedCount >= 5) {
            alert('Congrats. 5 Tasks have been Successfully Completed');
          }
        });
      }
    }
  }
  
  xhttp.open('GET', "https://jsonplaceholder.typicode.com/todos", true);
  xhttp.send();
}

function redirectToIndex(){
  window.location.replace("index.html");
}