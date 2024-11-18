import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/v1.0/cursos';

export const getCursos = async () => axios.get(API_URL);

export const createCurso = async (data) => axios.post(API_URL, data);

export const updateCurso = async (id, data) => axios.put(`${API_URL}/${id}`, data);

export const deleteCurso = async (id) => axios.delete(`${API_URL}/${id}`);