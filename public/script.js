function handleServerError() {
    // Code to handle the server error signal
    if(count >0 ) {
      //event.preventDefault(); // Prevent form submission

      var passwordInput = document.getElementById("password");
      var errorMessage = document.getElementById("error-message");
    
      // Check if password is incorrect
        if(count ==2) {
          errorMessage.textContent = "Invalid name/password combination";
        } else {
          errorMessage.textContent ="name/password combination already taken"
        }
    
        // Add red flash animation class
        passwordInput.classList.add("red-flash");
    
        // Remove the class after the animation completes
        setTimeout(function() {
          passwordInput.classList.remove("red-flash");
        }, 900);
      
    } else {
      alert("we good fam")

    }

   
  }

 