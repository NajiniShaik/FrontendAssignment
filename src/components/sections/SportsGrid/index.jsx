import { motion } from 'framer-motion';
import {
  Trophy,
  Target,
  Shield,
  Activity,
  Compass,
  Flame
} from 'lucide-react';
import './index.css';

const sports = [
  {
    name: 'Archery',
    icon: Target,
    desc: 'Professional outdoor shooting range with certified coaches.'
  },
  {
    name: 'Horse Riding',
    icon: Compass,
    desc: 'Equestrian training facility with trained horses and gear.'
  },
  {
    name: 'Shooting Range',
    icon: Shield,
    desc: '10m air-rifle indoor shooting range for competitive discipline.'
  },
  {
    name: 'Swimming',
    icon: Activity,
    desc: 'Half-Olympic size temperature-controlled swimming pool.'
  },
  {
    name: 'Lawn Tennis',
    icon: Trophy,
    desc: 'International standard synthetic hard courts.'
  },
  {
    name: 'Taekwondo & Athletics',
    icon: Flame,
    desc: 'Dedicated martial arts studio and 400m running track.'
  }
];

export default function SportsGrid() {
  return (
    <section id="sports" className="section-container">
      <h2 className="section-title">World-Class Sports & Facilities</h2>

      <p className="section-subtitle">
        Empowering students through 16+ Olympic-grade sports discipline
      </p>

      <div className="sports-grid">
        {sports.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="sports-card"
            >
              <div className="sports-icon-wrapper">
                <IconComponent size={28} color="#8B0000" />
              </div>

              <h3 className="sports-card-title">
                {item.name}
              </h3>

              <p className="sports-card-desc">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}