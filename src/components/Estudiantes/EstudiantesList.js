import React, { useEffect, useState } from 'react';
import { getEstudiantes, deleteEstudiante } from '../../api/estudiantesApi';

const EstudiantesList = ({ seleccionarEstudiante }) => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para cargar
  const [error, setError] = useState(null); // Estado para manejar errores

  const cargarEstudiantes = async () => {
    try {
      const data = await getEstudiantes(); // Obtener los datos directamente
      console.log('Datos obtenidos:', data); // Verifica la estructura de los datos
      if (Array.isArray(data)) {
        setEstudiantes(data); // Establece los estudiantes si es un array
      } else {
        setError('Los datos obtenidos no son válidos.');
      }
    } catch (err) {
      console.error('Error al cargar los estudiantes:', err);
      setError('Hubo un problema al cargar los estudiantes.');
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  const eliminarEstudiante = async (id) => {
    try {
      await deleteEstudiante(id);
      cargarEstudiantes(); // Recargar la lista de estudiantes después de eliminar
    } catch (err) {
      setError('Hubo un problema al eliminar el estudiante.');
    }
  };

  useEffect(() => {
    cargarEstudiantes();
    console.log("cargando");
  }, []);

  if (loading) {
    return <p>Cargando estudiantes...</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Lista de Estudiantes</h2>
      {error && <p className="text-danger">{error}</p>}
      {estudiantes && estudiantes.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>ID del curso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante) => (
              <tr key={estudiante.id}>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.correo}</td>
                <td>{estudiante.curso_id}</td>
                <td>
                  <button
                    onClick={() => seleccionarEstudiante(estudiante)}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarEstudiante(estudiante.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay estudiantes disponibles.</p>
      )}
    </div>
  );
};

export default EstudiantesList;
