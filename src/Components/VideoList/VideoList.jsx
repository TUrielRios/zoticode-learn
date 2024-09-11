// src/components/VideoList.js
import React from 'react';

const VideoList = () => {
  const videos = [
    { title: 'Clase 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'Clase 2', url: 'https://www.youtube.com/embed/9bZkp7q19f0' },
  ];

  return (
    <section id="videos">
      <h2>Videos de Clases</h2>
      <div>
        {videos.map((video, index) => (
          <div key={index}>
            <h3>{video.title}</h3>
            <iframe src={video.url} title={video.title} width="560" height="315"></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoList;
