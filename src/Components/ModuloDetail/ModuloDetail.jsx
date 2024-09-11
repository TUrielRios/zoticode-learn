import React from 'react';
import styles from './ModuloDetail.module.css'; // Importamos el módulo CSS

const ModuloDetail = ({ modulo, onSelectActividad }) => {
  if (!modulo) return <div>Selecciona un módulo para ver los detalles.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{modulo.titulo}</h2>
      <p className={styles.description}>{modulo.descripcion}</p>
      <h3>Actividades</h3>
      <ul className={styles.activityList}>
        {modulo.actividades.map(actividad => (
          <li key={actividad.id} className={styles.activityItem}>
            <button 
              className={styles.activityButton} 
              onClick={() => onSelectActividad(actividad.id)}
            >
              {actividad.nombre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuloDetail;
