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
export const getCursos = async () => {
  try {
    const response = await api.get('cursos');
    return response.data; // Devolver solo los datos de la respuesta
  } catch (error) {
    console.error('Error al obtener los cursos', error);
    throw error; // Lanzar el error para que se maneje en el componente
  }
};


export const createCurso = async (data) => {
  try {
    const response = await api.post('cursos', data);
    return response.data;
  } catch (error) {
    console.error('Error al crear curso', error);
    throw error;
  }
};

export const updateCurso = async (id, data) => {
  try {
    const response = await api.put(`cursos/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar cursos', error);
    throw error;
  }
};

export const deleteCurso = async (id) => {
  try {
    const response = await api.delete(`cursos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar cursos', error);
    throw error;
  }
};