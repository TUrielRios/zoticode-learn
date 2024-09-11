// src/components/VideoList.jsx
import styles from './VideoList.module.css';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className={styles.videoList}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoItem} onClick={() => onVideoSelect(video)}>  
          <h1 className={styles.title}>{video.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
