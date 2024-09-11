// src/VideoPage.jsx
import React, { useState } from 'react';
import VideoList from './VideoList.jsx';
import VideoPlayer from './VideoPlayer.jsx';

import styles from './VideoPage.module.css';

const videosData = [
  { id: 2, title: "Clon de login form parte uno", url: "https://vimeo.com/1008266300", description: "En esta clase, aprenderemos los fundamentos de CSS." },
  { id: 3, title: "Clon de login form parte dos", url: "https://vimeo.com/1008266670", description: "En esta clase, aprenderemos los fundamentos de CSS." },
  { id: 4, title: "Clon de login form parte tres", url: "https://vimeo.com/1008266871", description: "En esta clase, aprenderemos los fundamentos de CSS." }
];

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      <main className={styles.mainContainer}>
        <VideoList videos={videosData} onVideoSelect={setSelectedVideo} />
        <VideoPlayer video={selectedVideo} />
      </main>
    </div>
  );
};

export default VideoPage;
