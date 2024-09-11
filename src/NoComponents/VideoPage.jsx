import React, { useState } from 'react';
import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import googleClone from '../ClasesGrabadas/clon-google.mp4';
import clonePng from '../ClasesGrabadas/clonGoogle.png';
import login1 from '../ClasesGrabadas/loginClone 1.mp4';
import login2 from '../ClasesGrabadas/loginClone2.mp4';
import login3 from '../ClasesGrabadas/loginClone3.mp4';
import styles from './VideoPage.module.css';

const videosData = [
  { id: 1, title: "Clase 1: Clon de Google con HTML y CSS", url: googleClone, thumbnail: clonePng, description: "En esta clase, aprenderemos los conceptos básicos de HTML." },
  { id: 2, title: "Clon de login form parte uno", url: login1, description: "En esta clase, aprenderemos los fundamentos de CSS." },
  { id: 3, title: "Clon de login form parte dos", url: login2, description: "En esta clase, aprenderemos los fundamentos de CSS." },
  { id: 4, title: "Clon de login form parte tres", url: login3, description: "En esta clase, aprenderemos los fundamentos de CSS." }
];

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <main className={styles.mainContainer}>
        <VideoList videos={videosData} onVideoSelect={setSelectedVideo} />
        <VideoPlayer selectedVideo={selectedVideo} />
      </main>
    </div>
  );
};

export default VideoPage;
