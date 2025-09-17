// js/app.js - Lógica compartida para toda la web

function logout() {
  localStorage.removeItem('user');
  alert('Has cerrado sesión.');
  window.location.href = '../index.html';
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user')) || null;
}

// Puedes agregar más funciones aquí:
// - Validar sesión en cada página
// - Redirigir si no está logueado
// - etc.
