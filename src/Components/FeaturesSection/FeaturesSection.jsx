// src/components/FeaturesSection.jsx
import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import styles from './FeaturesSection.module.css';

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>

      <div className={styles.headings}>
      <h3 className={styles.subtitle}>- Descubre nuestras características únicas</h3>
      <h2 className={styles.title}>Aprende a tu ritmo, de la manera que prefieras</h2>
      </div>

      <div className={styles.featuresContainer}>
        <FeatureItem 
          icon="</>"
          title="Lecciones Interactivas"
          description="Aprende haciendo con nuestro entorno de codificación interactivo. Escribe y ejecuta código en tiempo real."
        />
        <FeatureItem 
          icon="🌐"
          title="Variedad de Proyectos"
          description="Explora una amplia gama de proyectos que te permitirán dominar distintas tecnologías y habilidades."
        />
        <FeatureItem 
          icon="⏰"
          title="A tu tiempo, cuando quieras"
          description="Estudia a tu propio ritmo sin preocuparte por fechas de caducidad. Acceso ilimitado a los cursos."
        />
      </div>
    </section>
  );
}

export default FeaturesSection;
