import React from 'react';
import  HeroSection  from '../../Components/HeroSection/HeroSection';
import FeaturesSection from '../../Components/FeaturesSection/FeaturesSection';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';
import CallToActionSection from '../../Components/CallToActionSection/CallToActionSection';
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection'
import ProgrammingSection from '../../Components/ProgrammingSection/ProgrammingSection';
import styles from './Home.module.css'





function Home() {
  return (
    <div className={styles.homeContainer}>
        <HeroSection />
        <ProgrammingSection />
        <FeaturesSection />
        <PopularCourses/>
        <TestimonialsSection />
        <CallToActionSection />
    </div>
  );
}

export default Home;
