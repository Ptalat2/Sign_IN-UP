function handleServerError() {
    // Code to handle the server error signal
    // For example, you can modify the DOM or perform any desired operations
    if(count> 0 ) {
      //event.preventDefault(); // Prevent form submission

      var passwordInput = document.getElementById("password");
      var errorMessage = document.getElementById("error-message");
    
      // Check if password is incorrect
      
        errorMessage.textContent = "Invalid name/password combination";
    
        // Add red flash animation class
        passwordInput.classList.add("red-flash");
    
        // Remove the class after the animation completes
        setTimeout(function() {
          passwordInput.classList.remove("red-flash");
        }, 1000);
      
    } else {
      alert("we good fam")

    }
  }

 