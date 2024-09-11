import React, { useState } from 'react';
import CursoList from '../../Components/CursoList/CursoList';
import CursoDetail from '../../Components/CursoDetail/CursoDetail'
import ModuloDetail from '../../Components/ModuloDetail/ModuloDetail'
import ActividadDetail from '../../Components/ActividadDetail/ActividadDetail'
import data from '../../api.json'
import styles from './Cursos.module.css'


const Cursos = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [moduloSeleccionado, setModuloSeleccionado] = useState(null);
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);

  const handleSelectCurso = (cursoId) => {
    const curso = data.cursos.find(c => c.id === cursoId);
    setCursoSeleccionado(curso);
    setModuloSeleccionado(null); // Resetear modulo seleccionado
    setActividadSeleccionada(null); // Resetear actividad seleccionada
  };

  const handleSelectModulo = (moduloId) => {
    const modulo = cursoSeleccionado.modulos.find(m => m.id === moduloId);
    setModuloSeleccionado(modulo);
    setActividadSeleccionada(null); // Resetear actividad seleccionada
  };

  const handleSelectActividad = (actividadId) => {
    const actividad = moduloSeleccionado.actividades.find(a => a.id === actividadId);
    setActividadSeleccionada(actividad);
  };

  return (
    <div className={styles.mainContainerCourses}>
      <CursoList cursos={data.cursos} onSelectCurso={handleSelectCurso} />
      {cursoSeleccionado && <CursoDetail curso={cursoSeleccionado} onSelectModulo={handleSelectModulo} />}
      {moduloSeleccionado && <ModuloDetail modulo={moduloSeleccionado} onSelectActividad={handleSelectActividad} />}
      {actividadSeleccionada && <ActividadDetail actividad={actividadSeleccionada} />}
    </div>
  );
};

export default Cursos;
