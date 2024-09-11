import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ selectedVideo }) => {
  return (
    <div className={styles.videoPlayer}>
      {selectedVideo ? (
        <div>
          <h2>{selectedVideo.title}</h2>
          <video controls src={selectedVideo.url} className={styles.video} />
          <p>{selectedVideo.description}</p>
        </div>
      ) : (
        <p>Selecciona un video para ver</p>
      )}
    </div>
  );
};

export default VideoPlayer;
