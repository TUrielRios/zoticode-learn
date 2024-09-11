import React from 'react';
import Slider from 'react-slick';
import styles from './CoursesSlider.module.css';

const courses = [
  { id: 1, name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png' },
  { id: 2, name: 'CSS', image: 'https://cdn-icons-png.flaticon.com/512/919/919826.png' },
  { id: 3, name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { id: 4, name: 'React', image: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' },
  { id: 5, name: 'Node.js', image: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png' },
  { id: 6, name: 'SQL', image: 'https://logonoid.com/images/postgresql-logo.png' },
];

export const CoursesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.courses}>
      <h2 className={styles.title}>Nuestros Cursos</h2>
      <Slider {...settings} className={styles.slider}>
        {courses.map((course) => (
          <div key={course.id} className={styles.slide}>
            <div className={styles.card}>
              <img src={course.image} alt={course.name} className={styles.image} />
              <h3 className={styles.courseName}>{course.name}</h3>
              <a href="#" className={styles.button}>Saber más</a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
