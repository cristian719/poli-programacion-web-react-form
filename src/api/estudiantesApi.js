import axios from 'axios';

// Configurar baseURL para evitar repetición en las rutas
const API_URL = 'http://127.0.0.1:5000/api/v1.0/';

// Crear instancia de axios con configuración predeterminada
const api = axios.create({
  baseURL: API_URL, // baseURL permite simplificar las rutas
  headers: {
    'Content-Type': 'application/json', // Asegura que el tipo de contenido sea JSON
  },
});

// Funciones de la API
export const getEstudiantes = async () => {
  try {
    const response = await api.get('estudiantes');
    return response.data; // Devolver solo los datos de la respuesta
  } catch (error) {
    console.error('Error al obtener los estudiantes', error);
    throw error; // Lanzar el error para que se maneje en el componente
  }
};


export const createEstudiante = async (data) => {
  try {
    const response = await api.post('estudiantes', data);
    return response.data;
  } catch (error) {
    console.error('Error al crear estudiante', error);
    throw error;
  }
};

export const updateEstudiante = async (id, data) => {
  try {
    const response = await api.put(`estudiantes/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar estudiante', error);
    throw error;
  }
};

export const deleteEstudiante = async (id) => {
  try {
    const response = await api.delete(`estudiantes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar estudiante', error);
    throw error;
  }
};
