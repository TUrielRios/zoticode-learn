// src/components/FeatureItem.js
import React from 'react';
import styles from './FeatureItem.module.css';

function FeatureItem({ icon, title, description }) {
  return (
    <div className={styles.featureItem}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default FeatureItem;
