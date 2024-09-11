// src/components/HeroSection.js
import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1>Aprender a programar nunca fue tan fácil</h1>
      <p>
        De cero a experto con variedad de proyectos reales en cada curso.
        ¡Empiece a aprender hoy!
      </p>
      <form className={styles.emailForm}>
        <input type="email" placeholder="Ingresar email" />
        <button type="submit">Inscribirse</button>
      </form>
    </section>
  );
}

export default HeroSection;
