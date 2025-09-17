// js/maintenance.js - Verifica si el sitio está en mantenimiento

async function checkMaintenance() {
  try {
    const response = await fetch('maintenance.json');
    const config = await response.json();

    if (config.enabled) {
      const now = new Date();
      const start = new Date(config.startTime);
      const end = new Date(config.endTime);

      // Si estamos dentro del rango de mantenimiento
      if (now >= start && now <= end) {
        // Solo redirigimos si NO estamos ya en maintenance.html
        if (!window.location.pathname.includes('maintenance.html')) {
          window.location.href = 'maintenance.html';
        }
      }
    }
  } catch (error) {
    console.error('Error al verificar mantenimiento:', error);
    // Si falla, permitimos el acceso (fail-safe)
  }
}

// Ejecutar verificación al cargar cualquier página
if (typeof window !== 'undefined') {
  checkMaintenance();
}
