import React from 'react';
import styles from './CursoDetail.module.css';

const CursoDetail = ({ curso }) => {
  if (!curso) return <div>Seleccione un curso para ver los detalles</div>;

  return (
    <div className={styles.cursoDetail}>
      {/* Cabecera del curso */}
      <div className={styles.cursoHeader}>
        <img
          src={curso.imagen} 
          alt={curso.nombre} 
          className={styles.cursoImagenDetalle}
        />
        <div className={styles.cursoInfo}>
          <h1>{curso.nombre}</h1>
          <p>{curso.descripcion}</p>
          <div className={styles.cursoRating}>Rating: {curso.rating} ({curso.numRatings} ratings)</div>
          <div className={styles.cursoStudents}>{curso.estudiantes} students enrolled</div>
          <button className={styles.cursoStartButton}>Start</button>
        </div>
      </div>

      {/* Resumen del curso */}
      <div className={styles.cursoResumen}>
        <div>
          <strong>Skill level</strong>
          <span>{curso.nivel}</span>
        </div>
        <div>
          <strong>Time to complete</strong>
          <span>{curso.duracion}</span>
        </div>
        <div>
          <strong>Projects</strong>
          <span>{curso.proyectos}</span>
        </div>
        <div>
          <strong>Prerequisites</strong>
          <span>{curso.prerrequisitos}</span>
        </div>
      </div>

      {/* Este curso incluye */}
      <div className={styles.cursoIncludes}>
        <h3>This course includes:</h3>
        <ul>
          {curso.includes && curso.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Habilidades que ganarás */}
      <div className={styles.cursoHabilidades}>
        <h3>Skills you'll gain:</h3>
        <ul>
          {curso.habilidades && curso.habilidades.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </div>

      {/* Módulos del curso */}
      <div className={styles.cursoModulos}>
        <h3>Course Modules:</h3>
        {curso.modulos && curso.modulos.map((modulo) => (
          <div key={modulo.id} className={styles.moduloCard}>
            <h4>{modulo.titulo}</h4>
            <p>{modulo.descripcion}</p>
            <div className={styles.moduloDuracion}>Duration: {modulo.duracion}</div>
            <div className={styles.moduloActividades}>
              <h5>Activities:</h5>
              <ul>
                {modulo.actividades && modulo.actividades.map((actividad) => (
                  <li key={actividad.id}>{actividad.nombre}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursoDetail;
