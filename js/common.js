// js/common.js
// Función para mostrar mensajes de feedback
function showMessage(elementId, text, type) {
    const messageElement = document.getElementById(elementId);
    messageElement.textContent = text;
    messageElement.className = `message ${type}`; // 'success' o 'error'
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000); // Ocultar después de 5 segundos
}

// Función para obtener el usuario actual (simulado)
function getCurrentUser() {
    // En un proyecto real, esto vendría de una sesión o token.
    // Aquí, simplemente lo obtenemos de nuestra variable global.
    return currentUser;
}

// Función para actualizar la navegación si el usuario está logueado
function updateNavigation() {
    const navUserStatus = document.getElementById('nav-user-status');
    if (navUserStatus) { // Solo si existe el elemento en el HTML
        if (currentUser) {
            navUserStatus.innerHTML = `<span>Hola, ${currentUser.name}</span> <a href="#" id="logout-btn">(Salir)</a>`;
            // Añade el evento para salir
            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                currentUser = null; // Simula el cierre de sesión
                updateNavigation(); // Actualiza la nav
                alert('Sesión cerrada.');
                window.location.href = 'index.html'; // Redirige a inicio
            });
        } else {
            navUserStatus.innerHTML = `
                <a href="registro.html" class="nav-btn">Registrarse</a>
                <a href="inicio_sesion.html" class="nav-btn">Ingresar</a>
            `;
        }
    }
}

// Llama a esta función al cargar cualquier página para actualizar la nav
document.addEventListener('DOMContentLoaded', updateNavigation);