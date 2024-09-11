import React from 'react';
import styles from './ActividadDetail.module.css';
import MarkdownRenderer from '../../MarkdownRenderer'

const ActividadDetail = ({ actividad }) => {
  if (!actividad) return <div>Selecciona una actividad para ver los detalles.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{actividad.nombre}</h2>
      <p className={styles.details}>Tipo: {actividad.tipo}</p>
      
      {actividad.tipo === 'lectura' && (
        <MarkdownRenderer file={actividad.contenido} />  // Renderizamos el archivo .md
      )}
      
      {actividad.tipo === 'video' && (
        <video className={styles.video} src={actividad.contenido} controls />
      )}
      
      {actividad.tipo === 'ejercicio' && (
        <MarkdownRenderer file={actividad.contenido} />  // Renderizamos el archivo .md
      )}
    </div>
  );
};

export default ActividadDetail;
