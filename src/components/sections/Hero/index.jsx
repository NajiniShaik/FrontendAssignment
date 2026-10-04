import { motion } from 'framer-motion';
import './index.css';

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-content"
      >
        <span className="hero-badge">Top Co-Ed Boarding School in Dehradun</span>

        <h1 className="hero-title">
          Preparing Global Leaders With Modern Education
        </h1>

        <p className="hero-description">
          CBSE Curriculum | 22-Acre Pollution-Free Campus | 16+ Olympic Sports
        </p>

        <div className="hero-btn-group">
          <button
            className="btn-primary hero-primary-btn"
          >
            Book a Campus Tour
          </button>

          <button className="hero-secondary-btn">
            Explore Programs
          </button>
        </div>
      </motion.div>
    </section>
  );
}

