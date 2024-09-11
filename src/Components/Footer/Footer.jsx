import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h2>Zoti Code</h2>
                    <p>Aprender a programar nunca fue tan facíl!</p>
                </div>
                <div className={styles.section}>
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mail@gmail.com" className={styles.link}>mail@gmail.com</a></p>
                    <p>Phone: <a href="+5411202937492" className={styles.link}>+541120902312</a></p>
                </div>
                <div className={styles.section}>
                    <h3>Siguenos</h3>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.icon}><FaFacebook /></a>
                        <a href="#" className={styles.icon}><FaTwitter /></a>
                        <a href="#" className={styles.icon}><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className={styles.bottomBar}>
                <p> Zoti Code. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;