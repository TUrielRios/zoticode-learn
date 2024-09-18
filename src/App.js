import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- Cambiado aquí
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cursos from './Pages/Cursos/Cursos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseOverview from './Lessons/CourseOverview'
import Lesson from './Lessons/Lesson';
import styles from './App.module.css';
import VideoPage from './NoComponents/VideoPage';
import CursoDetail from './Components/CursoDetail/CursoDetail';

function App() {
  return (
    <Router> {/* Cambiado de Routes a Router */}
      <Header />
      <main className={styles.contentContainer}>
        <Routes> {/* Este es el contenedor correcto para Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/alumnos" element={<VideoPage />} />
          <Route path="/lesson" element={<CourseOverview />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/cursos/:id" element={<CursoDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
