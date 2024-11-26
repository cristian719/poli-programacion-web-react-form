import React, { useState, useEffect } from 'react';
import { createCurso, updateCurso } from '../../api/cursosApi';

const CursosForm = ({ cursoSeleccionado, actualizarListado }) => {
  // Inicializar los estados con los valores del estudiante seleccionado, si existen
  const [nombre, setNombre] = useState(cursoSeleccionado?.nombre || '');
  const [descripcion, setDescripcion] = useState(cursoSeleccionado?.descripcion|| '');

  // Actualizar el formulario si el cursoSeleccionado cambia
  useEffect(() => {
    if (cursoSeleccionado) {
      setNombre(cursoSeleccionado.nombre || '');
      setDescripcion(cursoSeleccionado.descripcion || '');
    }
  }, [cursoSeleccionado]);

  // Manejo del envío del formulario
  const manejarEnvio = async (e) => {
    e.preventDefault();
    setLoading(true); // Desactivar el botón mientras se hace la solicitud
    setError(null); // Limpiar errores previos

    const data = { nombre, descripcion };

    try {
      if (cursoSeleccionado?.id) {
        // Si hay un estudiante seleccionado, actualizarlo
        await updateEstudiante(estudianteSeleccionado.id, data);
      } else {
        // Si no, crear un nuevo estudiante
        await createEstudiante(data);
      }
      // Después de la acción, actualizar el listado y limpiar el formulario
      actualizarListado();
      setNombre('');
      setCorreo('');
      setCursoId('');
    } catch (error) {
      setError('Hubo un problema al procesar la solicitud. Intenta nuevamente.'); // Manejo de error
    } finally {
      setLoading(false); // Volver a habilitar el botón
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="container mt-4">
      <h3 className="mb-4">
        {estudianteSeleccionado?.id ? 'Actualizar Estudiante' : 'Registrar Estudiante'}
      </h3>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          id="correo"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="curso_id" className="form-label">Curso</label>
        <input
          type="number"
          className="form-control"
          id="curso_id"
          placeholder="ID del curso"
          value={curso_id}
          onChange={(e) => setCursoId(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
        onClick={() => {
          // Si no quieres que se recargue inmediatamente cuando esté deshabilitado, agrega una validación si es necesario
          if (!loading) {
            window.location.reload();  // Recarga la página después de hacer submit
          }
        }}
      >
        {loading ? 'Cargando...' : estudianteSeleccionado?.id ? 'Actualizar' : 'Registrar'}
      </button>
    </form>
  );
};

export default EstudiantesForm;