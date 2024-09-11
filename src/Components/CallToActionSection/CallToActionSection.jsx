// src/components/CallToActionSection.js
import React from 'react';
import styles from './CallToActionSection.module.css';

function CallToActionSection() {
  return (
    <section className={styles.callToActionSection}>
      <div className={styles.ctaContainer}>
      <h2 className={styles.heading}>¿Listo para Comenzar?</h2>
      <p className={styles.subheading}>Animate y empezá a programar los proyectos que siempre soñaste</p>
      <button className={styles.ctaButton}>Inscribirse</button>
      </div>

    </section>
  );
}

export default CallToActionSection;
