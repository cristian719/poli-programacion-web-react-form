import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api/v1.0/profesores';

export const getProfesores = async () => axios.get(API_URL);

export const createProfesor = async (data) => axios.post(API_URL, data);

export const updateProfesor = async (id, data) => axios.put(`${API_URL}/${id}`, data);

export const deleteProfesor = async (id) => axios.delete(`${API_URL}/${id}`);
