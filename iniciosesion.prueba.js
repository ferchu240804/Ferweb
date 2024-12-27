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
 // Mostrar mensaje grande y reiniciar la página
 document.body.innerHTML = `<div style="text-align:center; margin-top: 20%; font-size: 2em; font-weight: bold; color: green;">
 Gracias por probar esta página 😀
</div>`;
setTimeout(() => {
 location.reload(); // Reinicia la página después de 3 segundos
}, 3000);
} else {
alert('Usuario o contraseña incorrectos.');
}
});