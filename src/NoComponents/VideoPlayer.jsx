// src/components/VideoPlayer.jsx
import React from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div className={styles.placeholder}>Selecciona un video para reproducir</div>;
  }

  // Extraer el ID del video de Vimeo de la URL
  const videoId = video.url.split('/').pop().split('?')[0];

  return (
    <div className={styles.videoPlayer}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={video.title}
      ></iframe>
      <h2 className={styles.title}>{video.title}</h2>
      <p className={styles.description}>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
