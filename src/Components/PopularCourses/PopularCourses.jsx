// src/components/PopularCourses.js
import React, { useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import styles from './PopularCourses.module.css';

const courses = [
  { title: "Learn How to Use ChatGPT", description: "Ready to dive into the world of Generative AI? Learn how ChatGPT works, how to use ChatGPT in your everyday life...", duration: "1 hour" },
  { title: "Learn HTML", description: "Start at the beginning by learning HTML basics – an important foundation for building and editing web pages.", duration: "7 hours" },
  { title: "Learn JavaScript", description: "Learn how to use JavaScript – a powerful and flexible programming language for adding website interactivity.", duration: "15 hours" },
  { title: "Learn SQL", description: "In this SQL course, you'll learn how to manage large datasets and analyze real data using the standard data management...", duration: "5 hours" }
];

function PopularCourses() {
  const [selectedCategory, setSelectedCategory] = useState("Free");

  return (
    <section className={styles.popularCourses}>
      <div className={styles.headings}>
      <h3 className={styles.subtitle}>- Nuestros cursos</h3>
      <h2 className={styles.heading}>¡Elegí el que más se ajuste a vos!</h2>
      </div>


      <div className={styles.filters}>
        <button onClick={() => setSelectedCategory("All")} className={selectedCategory === "All" ? styles.active : ''}>All</button>
        <button onClick={() => setSelectedCategory("Free")} className={selectedCategory === "Free" ? styles.active : ''}>Free</button>
        <button onClick={() => setSelectedCategory("New to coding")} className={selectedCategory === "New to coding" ? styles.active : ''}>New to coding</button>
        <button onClick={() => setSelectedCategory("Most popular")} className={selectedCategory === "Most popular" ? styles.active : ''}>Most popular</button>
        <button onClick={() => setSelectedCategory("Skill paths")} className={selectedCategory === "Skill paths" ? styles.active : ''}>Skill paths</button>
        <button onClick={() => setSelectedCategory("Career paths")} className={selectedCategory === "Career paths" ? styles.active : ''}>Career paths</button>
      </div>
      <div className={styles.courseGrid}>
        {courses.map((course, index) => (
          <CourseCard 
            key={index}
            title={course.title}
            description={course.description}
            duration={course.duration}
          />
        ))}
      </div>
      <button className={styles.exploreButton}>Explore Full Catalog</button>
    </section>
  );
}

export default PopularCourses;
