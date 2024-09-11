// src/components/Header.js
import React from 'react';
import styles from './Header.module.css';
import logo from '../../Assets/logo/logo-png.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="" />
      </div>
      <nav className={styles.nav}>
      <a href="/">Recursos</a>
        <a href="/">Cursos</a>
        <a href="/">Nosotros</a>
        <a href="/">Inscribite</a>

      </nav>
    </header>
  );
}

export default Header;
