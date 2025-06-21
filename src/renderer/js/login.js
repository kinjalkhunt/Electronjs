document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('error');

  // Simple hardcoded check (replace with real authentication in production)
  if (username === 'admin' && password === 'password') {
    errorDiv.style.display = 'none';
    alert('Login successful!');
    // You can redirect or load another window here
  } else {
    errorDiv.textContent = 'Invalid username or password';
    errorDiv.style.display = 'block';
  }
}); 