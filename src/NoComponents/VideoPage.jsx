import React, { useState } from 'react';
import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import clonePng from '../ClasesGrabadas/clonGoogle.png';

import styles from './VideoPage.module.css';

const videosData = [
  { id: 1, title: "Clase 1: Clon de Google con HTML y CSS", url: "", thumbnail: clonePng, description: "En esta clase, aprenderemos los conceptos básicos de HTML." },
  { id: 2, title: "Clon de login form parte uno", url: "", description: "En esta clase, aprenderemos los fundamentos de CSS." },
  { id: 3, title: "Clon de login form parte dos", url: "", description: "En esta clase, aprenderemos los fundamentos de CSS." },
  { id: 4, title: "Clon de login form parte tres", url: "", description: "En esta clase, aprenderemos los fundamentos de CSS." }
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
