import { motion } from 'framer-motion';
import './index.css';

export default function VideoSection() {
  return (
    <section className="section-container video-section">
      <h2 className="section-title">Experience Life at TIS</h2>

      <p className="section-subtitle">
        Take a virtual walk through our 22-acre world-class green campus
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="video-wrapper"
      >
        <video
          autoPlay
          controls
          muted
          playsInline
          className="video-player"
        >
          <source
            src="https://assets.tulas.edu.in/Desktop_TIS.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}