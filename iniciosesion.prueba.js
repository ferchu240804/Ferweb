 // Verifica si hay usuarios guardados en localStorage, si no, crea una lista vacía
 let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

 // Función para registrar usuarios
 document.getElementById('registerForm').addEventListener('submit', function(event) {
   event.preventDefault();

   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   // Verificar si el usuario ya existe
   const usuarioExistente = usuarios.find(u => u.username === username);
   if (usuarioExistente) {
     alert('El usuario ya está registrado.');
     return;
   }

   // Agregar el usuario a la lista y guardarlo en localStorage
   usuarios.push({ username, password });
   localStorage.setItem('usuarios', JSON.stringify(usuarios));
   alert('Usuario registrado con éxito.');
 });

 // Función para iniciar sesión
 document.getElementById('loginForm').addEventListener('submit', function(event) {
   event.preventDefault();

   const loginUsername = document.getElementById('loginUsername').value;
   const loginPassword = document.getElementById('loginPassword').value;

   // Verificar si los datos coinciden con un usuario registrado
   const usuarioValido = usuarios.find(u => u.username === loginUsername && u.password === loginPassword);
   if (usuarioValido) {
     alert('Inicio de sesión exitoso. Bienvenido, ' + loginUsername + '!');
   } else {
     alert('Usuario o contraseña incorrectos.');
   }
 });