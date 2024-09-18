import React from 'react';
import styles from './CursoList.module.css'; 

const CursoList = ({ cursos, onSelectCurso }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Lista de Cursos</h2>
      <ul className={styles.courseList}>
        {cursos.map(curso => (
          <li key={curso.id} className={styles.courseItem}>
            <button 
              className={styles.courseButton} 
              onClick={() => onSelectCurso(curso.id)} // Mantener la llamada a la función
            >
              <div>
                <span className={styles.courseName}>{curso.nombre}</span>
                <p>{curso.descripcion}</p>
                <div>{curso.duracion} horas</div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoList;
