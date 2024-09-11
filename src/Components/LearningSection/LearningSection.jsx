// LearningSection.jsx
import React from 'react';
import styles from './LearningSection.module.css';

const LearningSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.leftPanel}>
        <h1 className={styles.title}>The platform</h1>
        <h2 className={styles.subtitle}>Hands-on learning</h2>
        <div className={styles.infoBox}>
          <h3 className={styles.infoTitle}>AI-assisted learning</h3>
          <p className={styles.description}>
            Make progress faster with our AI Learning Assistant, a tool that automatically understands your current course, instructions, and solution code — and gives you instant, personalized feedback.
          </p>
          <ul className={styles.featuresList}>
            <li>Real-world projects</li>
            <li>Job-readiness checker</li>
            <li>Interview simulator</li>
            <li>Assessments</li>
          </ul>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Get started</button>
          <button className={styles.button}>Explore features</button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <img
          src="path/to/your/image.png"
          alt="AI Learning Interface"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default LearningSection;
