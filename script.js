document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

if (path.includes('index.html') || path.endsWith('/')) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      window.location.href = 'pagina.html';
      return;
    }

    const loginBtn = document.querySelector('button');
    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        const usuario = document.getElementById('usuario').value.trim();
        const clave = document.getElementById('clave').value;

        const mensaje = document.getElementById('mensaje');
        const datos = JSON.parse(localStorage.getItem('user'));

        if (!usuario || !clave) {
          mensaje.textContent = 'Completa todos los campos.';
          return;
        }

        if (!datos) {
          mensaje.textContent = 'No hay usuarios registrados. Regístrate primero.';
          return;
        }

        if (usuario === datos.usuario && clave === datos.clave) {
          localStorage.setItem('isLoggedIn', 'true');
          mensaje.textContent = '';
          window.location.href = 'pagina.html';
        } else {
          mensaje.textContent = 'Usuario o contraseña incorrectos.';
        }
      });
    }

    const btnRegistrarse = document.getElementById('btn-registrarse');
    if (btnRegistrarse) {
      btnRegistrarse.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'registro.html';
      });
    }
}

if (path.includes('registro.html')) {
    const registroBtn = document.getElementById('btn-guardar-registro');
    if (registroBtn) {
      registroBtn.addEventListener('click', () => {
        const nuevoUsuario = document.getElementById('nuevoUsuario').value.trim();
        const nuevaClave = document.getElementById('nuevaClave').value;

        if (!nuevoUsuario || !nuevaClave) {
          alert('Por favor completa todos los campos.');
          return;
        }

        const datos = JSON.parse(localStorage.getItem('user'));
        if (datos && datos.usuario === nuevoUsuario) {
          alert('Este usuario ya está registrado.');
          return;
        }

        localStorage.setItem('user', JSON.stringify({
          usuario: nuevoUsuario,
          clave: nuevaClave
        }));
        alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
        window.location.href = 'index.html';
      });
    }
}

if (path.includes('pagina.html')) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      alert('Debes iniciar sesión para acceder.');
      window.location.href = 'index.html';
    }
  }
});