// js/common.js

// Declarar currentUser como una variable global aquí, para que todas las funciones en common.js
// y en las otras páginas (que incluyan common.js) puedan accederla y modificarla.
// Se inicializa a null, y getCurrentUser() se encargará de cargarla desde localStorage.
let currentUser = null; // Esta variable contendrá el objeto del usuario logueado.

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

// Función para obtener el usuario actual desde localStorage
// y actualizar la variable global 'currentUser'.
function getCurrentUser() {
    const userString = localStorage.getItem('loggedInUser'); // Lee la cadena JSON de localStorage
    if (userString) {
        currentUser = JSON.parse(userString); // Convierte la cadena JSON de vuelta a un objeto JavaScript
    } else {
        currentUser = null; // Si no hay nada en localStorage, no hay usuario logueado
    }
    return currentUser; // Devuelve el objeto del usuario (o null)
}

// Función para simular el cierre de sesión
function logoutUser() {
    localStorage.removeItem('loggedInUser'); // Elimina la clave del usuario de localStorage
    currentUser = null; // Establece la variable global a null
    updateNavigation(); // Actualiza la barra de navegación para mostrar "Ingresar/Registrarse"
    alert('Sesión cerrada.'); // Mensaje de confirmación
    window.location.href = 'index.html'; // Redirige a la página principal
}

// Función para actualizar la navegación si el usuario está logueado
function updateNavigation() {
    // ¡CRUCIAL! Llama a getCurrentUser() al inicio para cargar el usuario desde localStorage
    // cada vez que esta función se ejecuta (ej. al cargar una página).
    getCurrentUser();

    const navUserStatus = document.getElementById('nav-user-status');
    if (navUserStatus) { // Solo si existe el elemento en el HTML
        if (currentUser) {
            // Si hay un usuario logueado, muestra su nombre y botón de salir
            navUserStatus.innerHTML = `<span>Hola, ${currentUser.name}</span> <a href="#" id="logout-btn">(Salir)</a>`;
            // Añade el evento para el botón de salir
            document.getElementById('logout-btn').addEventListener('click', logoutUser);
        } else {
            // Si no hay usuario, muestra los botones de login y registro
            navUserStatus.innerHTML = `
                <a href="registro.html" class="nav-btn">Registrarse</a>
                <a href="inicio_sesion.html" class="nav-btn">Ingresar</a>
            `;
        }
    }
}

// Llama a esta función al cargar CUALQUIER página para inicializar la navegación
document.addEventListener('DOMContentLoaded', updateNavigation);
