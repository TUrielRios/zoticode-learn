import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CourseOverview.module.css';

function CourseOverview() {
  const navigate = useNavigate();

  const startCourse = () => {
    navigate('/lesson/1', { target: '_blank' }); // Abre la primera lección en una nueva pestaña
  };

  return (
    <div className={styles.courseDetail}>
      <h1>Curso de HTML y CSS</h1>
      <p>Descripción del curso...</p>
      <button onClick={startCourse} className={styles.startButton}>Comenzar Curso</button>
    </div>
  );
}

export default CourseOverview;
