// src/components/TestimonialsSection.js
import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  { quote: "This platform changed my life. I learned so much in just a few weeks!", author: "John Doe", role: "Web Developer" },
  { quote: "The courses are very well structured and easy to follow. Highly recommend!", author: "Jane Smith", role: "UI/UX Designer" },
  { quote: "Amazing learning experience! The instructors are top-notch.", author: "Carlos Perez", role: "Data Scientist" },
  { quote: "This platform changed my life. I learned so much in just a few weeks!", author: "John Doe", role: "Web Developer" },
  { quote: "The courses are very well structured and easy to follow. Highly recommend!", author: "Jane Smith", role: "UI/UX Designer" },
  { quote: "Amazing learning experience! The instructors are top-notch.", author: "Carlos Perez", role: "Data Scientist" }

];

function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.heading}>What Our Students Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
