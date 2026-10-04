import { motion } from 'framer-motion';

import './index.css';

export default function EnquiryCTA() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! Admissions team will contact you shortly.');
  };

  return (
    <section className="section-container enquiry-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="cta-box-container"
      >
        <div className="cta-text-column">
          <h2 className="cta-title">Begin Your Journey at TIS</h2>

          <p className="cta-description">
            Admissions are open for Academic Session 2026-27. Book a campus tour or speak with our admissions counsellors today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="cta-form">
          <input
            type="text"
            placeholder="Parent / Student Name"
            required
            className="cta-input"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="cta-input"
          />

          <select required className="cta-input">
            <option value="">Select Grade / Class</option>
            <option value="VI-VIII">Grade VI - VIII</option>
            <option value="IX-X">Grade IX - X</option>
            <option value="XI-XII">Grade XI - XII</option>
          </select>

          <button type="submit" className="cta-submit-btn">
            Submit Enquiry
          </button>
        </form>
      </motion.div>
    </section>
  );
}

