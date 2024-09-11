// src/components/CourseCard.js
import React from 'react';
import styles from './CourseCard.module.css';

function CourseCard({ title, description, duration }) {
  return (
    <div className={styles.courseCard}>
      <div className={styles.courseType}>Free course</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.level}>Beginner Friendly</span>
        <span className={styles.duration}>{duration}</span>
      </div>
    </div>
  );
}

export default CourseCard;
