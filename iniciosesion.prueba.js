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
 // Mostrar un mensaje de bienvenida por unos segundos
      document.body.innerHTML = `<div style="text-align:center; margin-top: 20%; font-size: 2em; font-weight: bold; color: green;">
    ¡Bienvenido, ${loginUsername}! 😀
    </div>`;

// Recargar la página después de un retraso de 2 segundos
      setTimeout(function() {
     location.reload();  // Recarga la página actual
    }, 2000);  // Espera 2 segundos antes de recargar

} else {    
    alert('Usuario o contraseña incorrectos.');
  }
  
});
