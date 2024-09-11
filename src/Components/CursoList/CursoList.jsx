import React from 'react';
import styles from './CursoList.module.css'; // Importamos el módulo CSS

const CursoList = ({ cursos, onSelectCurso }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Lista de Cursos</h2>
      <ul className={styles.courseList}>
        {cursos.map(curso => (
          <li key={curso.id} className={styles.courseItem}>
            <button 
              className={styles.courseButton} 
              onClick={() => onSelectCurso(curso.id)}
            >
              {curso.nombre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoList;
