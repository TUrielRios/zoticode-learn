// src/components/TestimonialCard.js
import React from 'react';
import styles from './TestimonialCard.module.css';

function TestimonialCard({ quote, author, role }) {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.quote}>"{quote}"</p>
      <p className={styles.author}>- {author}, <span className={styles.role}>{role}</span></p>
    </div>
  );
}

export default TestimonialCard;
