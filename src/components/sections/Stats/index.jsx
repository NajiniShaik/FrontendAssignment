import { motion } from 'framer-motion';
import './index.css';

const statsData = [
  { value: '22 Acres', label: 'Pollution-Free Campus' },
  { value: '16+', label: 'Olympic Sports Facilities' },
  { value: '6:1', label: 'Student-Teacher Ratio' },
  { value: '#1', label: 'Co-Ed Boarding School in Dehradun' },
];

export default function Stats() {
  return (
    <section className="section-container stats-section">
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="stats-card"
          >
            <h2 className="stats-value">{stat.value}</h2>
            <p className="stats-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
