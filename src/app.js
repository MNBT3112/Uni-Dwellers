
function showSignUp() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.signup').style.display = 'flex';
    clearMessage();
    clearInputFields();
  }
  
  function clearInputFields() {
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';
  }
  function showLogin() {
    document.querySelector('.signup').style.display = 'none';
    document.querySelector('.login').style.display = 'flex';
    clearMessage();
    clearInputFields();
  }
  

  function showMessage(message, isSuccess) {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.style.backgroundColor = isSuccess ? 'rgba(0, 128, 0, 0.75)' : 'rgba(255, 0, 0, 0.75)';
    messageBox.classList.add('show');
    setTimeout(() => {
      messageBox.classList.remove('show');
    }, 3000);
  }
  

  function clearMessage() {
    const messageBox = document.getElementById('messageBox');
    messageBox.classList.remove('show');
  }
  
  
  function signUp() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
  
    if (username === '' || password === '') {
      showMessage('Please fill in all fields', false);
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const userExists = users.some(user => user.username === username);
  
    if (userExists) {
      showMessage('Username already exists', false);
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      showMessage('Sign-up successful', true);
      setTimeout(showLogin, 1000);
    }
  }
  

  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    if (username === '' || password === '') {
      showMessage('Please fill in all fields', false);
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      showMessage('Login successful', true);
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      showMessage('Invalid username or password', false);
    }
  }
  