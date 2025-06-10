// js/data.js

// Datos de usuarios (simulados)
const users = [
    { id: 'u001', username: 'admin@autorenta.com', password: 'password123', name: 'Administrador', role: 'admin' },
    { id: 'u002', username: 'cliente@mail.com', password: 'password456', name: 'Cliente Ej.', role: 'client' }
];

// Datos de vehículos (simulados)
let vehicles = [
    {
        id: 'v001',
        image: 'img/coche1.jpg',
        model: 'Kia Seltos',
        licensePlate: 'ABC-123',
        lastClient: 'Juan Pérez',
        status: 'available', // 'available', 'rented', 'maintenance', 'cleaning'
        dailyRate: 45 // USD
    },
    {
        id: 'v002',
        image: 'img/coche2.jpg',
        model: 'Dodge Charger',
        licensePlate: 'XYZ-456',
        lastClient: 'Ana Gómez',
        status: 'available', // CAMBIADO a 'available' para que aparezca en el selector de vehículos
        dailyRate: 60
    },
    {
        id: 'v003',
        image: 'img/coche3.jpg',
        model: 'Volkswagen Jetta',
        licensePlate: 'LMN-789',
        lastClient: 'N/A',
        status: 'available', // CAMBIADO a 'available'
        dailyRate: 35
    },
    {
        id: 'v004',
        image: 'img/coche4.jpg',
        model: 'Suzuki Swift',
        licensePlate: 'PQR-012',
        lastClient: 'Carlos Ruiz',
        status: 'available', // CAMBIADO a 'available'
        dailyRate: 50
    },
    {
        id: 'v005',
        image: 'img/coche5.jpg',
        model: 'Mazda 3 Skyactiv',
        licensePlate: 'TUV-345',
        lastClient: 'Sofía Díaz',
        status: 'available',
        dailyRate: 55
    },
    {
        id: 'v006',
        image: 'img/coche6.jpg',
        model: 'Nissan NP300',
        licensePlate: 'FGH-678',
        lastClient: 'Pedro Solíz',
        status: 'available',
        dailyRate: 48
    }
];

// Datos de reservas (simulados)
let reservations = [
    { id: 'r001', vehicleId: 'v002', userId: 'u002', startDate: '2025-05-20', endDate: '2025-05-25', status: 'confirmed', totalCost: 300 },
    { id: 'r002', vehicleId: 'v003', userId: 'u002', startDate: '2025-05-26', endDate: '2025-05-28', status: 'pending', totalCost: 105 },
    { id: 'r003', vehicleId: 'v001', userId: 'u001', startDate: '2025-06-01', endDate: '2025-06-05', status: 'confirmed', totalCost: 225 }
];

// Datos de mantenimiento (simulados)
let maintenances = [
    { id: 'm001', vehicleId: 'v003', date: '2025-05-15', type: 'Revisión General', notes: 'Cambio de aceite y filtros.', status: 'completed' },
    { id: 'm002', vehicleId: 'v001', date: '2025-06-10', type: 'Frenos', notes: 'Pastillas delanteras, pendiente.', status: 'pending' }
];

// Función para generar un ID único simple (solo para este proyecto)
function generateId(prefix) {
    return prefix + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}
