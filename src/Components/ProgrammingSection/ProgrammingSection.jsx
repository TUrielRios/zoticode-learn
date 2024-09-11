// ProgrammingSection.jsx
import React from 'react';
import Slider from 'react-slick';
import styles from './ProgrammingSection.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import taskimg from '../../Assets/taskmanager.jpg'
import ecommerce from '../../Assets/ecommerce.jpg'
import social from '../../Assets/social-media.jpeg'
import weather from '../../Assets/weather.png'
import portfolio from '../../Assets/portfolio.png'

const ProgrammingSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
  };

  const projects = [
    { 
      title: 'E-commerce Website', 
      description: 'Build a fully functional e-commerce site with shopping cart and checkout features.', 
      image: ecommerce 
    },
    { 
      title: 'Weather App', 
      description: 'Create a dynamic weather app using APIs to fetch and display weather data in real-time.', 
      image: weather
    },
    { 
      title: 'Social Media Dashboard', 
      description: 'Develop a dashboard to track social media analytics, manage posts, and more.', 
      image: social
    },
    { 
      title: 'Personal Portfolio', 
      description: 'Design and code a personal portfolio website to showcase your projects and skills.', 
      image: portfolio
    },
    { 
      title: 'Task Manager', 
      description: 'Create a productivity app to manage tasks, set deadlines, and track progress.', 
      image: taskimg 
    },
  ];

  return (
    <div className={styles.sectionContainer}>
    <h3 className={styles.subtitle}>- Explora los proyectos que podrás crear</h3>
      <h2 className={styles.title}>¡A programar se aprende programando!</h2>

      <Slider {...sliderSettings} className={styles.slider}>
        {projects.map((project, index) => (
          <div key={index} className={styles.slide}>
            <img src={project.image} alt={project.title} className={styles.slideImage} />
            <div className={styles.overlay}>
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProgrammingSection;
