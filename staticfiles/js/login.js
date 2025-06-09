// Open the Log In modal when the user clicks the Log In link
document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('authModal').style.display = 'block';
    document.getElementById('modalTitle').textContent = "Log In";
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
  });
  
  // Close the modal when the user clicks the close button
  document.getElementById('closeAuthModal').addEventListener('click', function() {
    document.getElementById('authModal').style.display = 'none';
  });
  
  // Handle Log In submission
  document.getElementById('loginSubmit').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
      alert("Logged in successfully!");
      document.getElementById('authModal').style.display = 'none';
      // Enable buttons once logged in
      toggleExploreNowButton();
    } else {
      alert("Please enter both username and password.");
    }
  });
  
  // Handle Register submission
  document.getElementById('registerSubmit').addEventListener('click', function() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    
    if (newUsername && newPassword) {
      alert("You have registered successfully!");
      document.getElementById('authModal').style.display = 'none';
      // Switch to log in form after registration
      alert("Now you can log in!");
    } else {
      alert("Please fill out both fields.");
    }
  });
  
  // Show Register form inside the modal
  document.getElementById('showRegisterForm').addEventListener('click', function() {
    document.getElementById('modalTitle').textContent = "Register";
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
  });
  
  // Show Log In form inside the modal
  document.getElementById('showLoginForm').addEventListener('click', function() {
    document.getElementById('modalTitle').textContent = "Log In";
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
  });
  
  // Function to enable Explore Now button after login
  function toggleExploreNowButton() {
    document.getElementById("exploreNowButton").disabled = false;
  }
  