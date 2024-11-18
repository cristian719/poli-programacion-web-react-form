import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EstudiantesForm from './components/Estudiantes/EstudiantesForm';
import EstudiantesList from './components/Estudiantes/EstudiantesList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState(null);

  const actualizarListado = () => {
    setEstudianteSeleccionado(null);
  };

  return (
    <Router>
      <div>
        {/* Navbar de Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/estudiantes">Estudiantes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profesores">Profesores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cursos">Cursos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Rutas para las diferentes páginas */}
        <Routes>
          <Route path="/estudiantes" element={
            <div className="container mt-4">
              <h2>Gestión de estudiantes Politecnico Internacional</h2>
              <hr/>
              <EstudiantesForm
                estudianteSeleccionado={estudianteSeleccionado}
                actualizarListado={actualizarListado}
              />
              <hr/>
              <EstudiantesList
                seleccionarEstudiante={setEstudianteSeleccionado}
              />
              <br></br>
              <br></br>
            </div>
          } />
          
          <Route path="/profesores" element={
            <div className="container mt-4">
              <h2>Profesores</h2>
              {/* Aquí puedes agregar el componente correspondiente de Profesores */}
              <p>Contenido de Profesores</p>
            </div>
          } />
          
          <Route path="/cursos" element={
            <div className="container mt-4">
              <h2>Cursos</h2>
              {/* Aquí puedes agregar el componente correspondiente de Cursos */}
              <p>Contenido de Cursos</p>
            </div>
          } />
          
          {/* Ruta por defecto */}
          <Route path="/" element={
            <div className="container mt-4">
              <h2>Bienvenido a la Gestión</h2>
              <p>Selecciona una opción del menú.</p>
            </div>
          } />
        </Routes>
        {/* Footer */}
        <footer className="bg-light text-center text-lg-start mt-4">
          <div className="container p-4">
            <p className="mb-0">© 2024 Gestión de Estudiantes. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
