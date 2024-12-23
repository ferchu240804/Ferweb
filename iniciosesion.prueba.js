   let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault();
    
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
    
     
      const usuarioExistente = usuarios.find(u => u.username === username);
      if (usuarioExistente) {
        alert('El usuario ya está registrado.');
        return;
      }
    
      usuarios.push({ username, password });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Usuario registrado con éxito.');
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
    
      const loginUsername = document.getElementById('loginUsername').value;
      const loginPassword = document.getElementById('loginPassword').value;
  
      const usuarioValido = usuarios.find(u => u.username === loginUsername && u.password === loginPassword);
      if (usuarioValido) {
        alert('Inicio de sesión exitoso. Bienvenido, ' + loginUsername + '!');
      } else {
        alert('Usuario o contraseña incorrectos.');
      }
    });