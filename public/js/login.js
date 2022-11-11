const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const password = document.querySelector('#password-login').value.trim();
  
    if (password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);