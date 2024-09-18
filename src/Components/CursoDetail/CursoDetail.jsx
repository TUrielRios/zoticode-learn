import React from 'react';
import { useParams } from 'react-router-dom'; // Importar useParams
import data from '../../api.json'; // Asegúrate de que sea el path correcto al archivo de datos
import styles from './CursoDetail.module.css';
import { FaStar, FaUsers, FaClock, FaBook, FaCheck } from 'react-icons/fa'; // Ejemplo de íconos


const CursoDetail = () => {
  const { id } = useParams(); // Obtener el parámetro de la URL
  const curso = data.cursos.find(curso => curso.id === parseInt(id)); // Buscar el curso por ID

  if (!curso) return <div>Curso no encontrado</div>;

  return (
    <div className={styles.container}>
      <div className={styles.courseMain}>
        <div className={styles.courseContent}>
          {/* Course Image and Basic Info */}
          <img src={curso.imagen} alt={curso.nombre} className={styles.courseImage} />

          <h1 className={styles.courseTitle}>{curso.nombre}</h1>
          <p className={styles.courseDescription}>{curso.descripcion}</p>
          <div className={styles.courseStats}>
            <span className={styles.courseStat}>
              <FaStar className={styles.icon} id={styles.iconStar} />
              {curso.calificacion} ({curso.numeroDeOpiniones.toLocaleString()} opiniones)
            </span>
            <span className={styles.courseStat}>
              <FaUsers className={styles.icon} id={styles.iconUsers} />
              {curso.numeroDeEstudiantes.toLocaleString()} estudiantes
            </span>
            <span className={styles.courseStat}>
              <FaClock className={styles.icon} id={styles.iconClock} />
              {curso.duracion}
            </span>
            <span className={styles.courseStat}>
              <FaBook className={styles.icon} id={styles.iconBook} />
              {curso.numeroDeModulos} módulos
            </span>
          </div>
          <div className={styles.learningSection}>
            <h2 className={styles.sectionTitle}>Lo que aprenderás</h2>
            <ul className={styles.skillsList}>
              {curso.habilidadesGanadas.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  <FaCheck className={styles.checkIcon} />
                  <span className={styles.skillText}>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Course Details Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.price}>{curso.precio}</div>
            <button className={styles.enrollButton}>Inscribirse</button>
            <div className={styles.sidebarInfo}>
              <div>
                <h3 className={styles.infoTitle}>Nivel</h3>
                <p>{curso.nivel}</p>
              </div>
              <div>
                <h3 className={styles.infoTitle}>Idioma</h3>
                <p>{curso.idioma}</p>
              </div>
              <div>
                <h3 className={styles.infoTitle}>Prerrequisitos</h3>
                <p>{curso.prerrequisitos}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className={styles.courseModules}>
        <h2 className={styles.sectionTitle}>Contenido del curso</h2>
        <div className={styles.modulesList}>
          {curso.modulos.map((module) => (
            <div key={module.id} className={styles.moduleItem}>
              <h3 className={styles.moduleTitle}>{module.titulo}</h3>
              <p className={styles.moduleDescription}>{module.descripcion}</p>
              <div className={styles.moduleDuration}>
                <FaClock className={styles.icon} />
                {module.duracion}
              </div>
              <ul className={styles.activitiesList}>
                {module.actividades.map((activity) => (
                  <li key={activity.id} className={styles.activityItem}>
                    <span
                      className={`${styles.activityIndicator} ${
                        activity.tipo === 'lectura' ? styles.lecture : styles.practice
                      }`}
                    ></span>
                    <span className={styles.activityText}>{activity.nombre}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      {/* Resources Included */}
      <div className={styles.resourcesSection}>
        <h2 className={styles.sectionTitle}>Recursos incluidos</h2>
        <ul className={styles.resourcesList}>
          {curso.recursosIncluidos.map((recurso, index) => (
            <li key={index} className={styles.resourceItem}>
              <FaCheck className={styles.checkIcon} />
              <span className={styles.resourceText}>{recurso}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    // <div className={styles.cursoDetail}>
    //   <div className={styles.cursoHeader}>
    //     <img src={curso.imagen} alt={curso.nombre} className={styles.cursoImagenDetalle} />
    //     <div className={styles.cursoInfo}>
    //       <h1>{curso.nombre}</h1>
    //       <p>{curso.descripcion}</p>
    //       <div className={styles.cursoRating}>Rating: {curso.rating} ({curso.numRatings} ratings)</div>
    //       <div className={styles.cursoStudents}>{curso.estudiantes} students enrolled</div>
    //       <button className={styles.cursoStartButton}>Start</button>
    //     </div>
    //   </div>

    //   <div className={styles.cursoResumen}>
    //     <div><strong>Skill level</strong> <span>{curso.nivel}</span></div>
    //     <div><strong>Time to complete</strong> <span>{curso.duracion}</span></div>
    //     <div><strong>Projects</strong> <span>{curso.proyectos}</span></div>
    //     <div><strong>Prerequisites</strong> <span>{curso.prerrequisitos}</span></div>
    //   </div>

    //   <div className={styles.cursoIncludes}>
    //     <h3>This course includes:</h3>
    //     <ul>
    //       {curso.includes && curso.includes.map((item, index) => <li key={index}>{item}</li>)}
    //     </ul>
    //   </div>

    //   <div className={styles.cursoHabilidades}>
    //     <h3>Skills you'll gain:</h3>
    //     <ul>
    //       {curso.habilidades && curso.habilidades.map((habilidad, index) => <li key={index}>{habilidad}</li>)}
    //     </ul>
    //   </div>

    //   <div className={styles.cursoModulos}>
    //     <h3>Course Modules:</h3>
    //     {curso.modulos && curso.modulos.map((modulo) => (
    //       <div key={modulo.id} className={styles.moduloCard}>
    //         <h4>{modulo.titulo}</h4>
    //         <p>{modulo.descripcion}</p>
    //         <div className={styles.moduloDuracion}>Duration: {modulo.duracion}</div>
    //         <div className={styles.moduloActividades}>
    //           <h5>Activities:</h5>
    //           <ul>
    //             {modulo.actividades && modulo.actividades.map((actividad) => (
    //               <li key={actividad.id}>{actividad.nombre}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default CursoDetail;
