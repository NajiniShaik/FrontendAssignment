
import { MapPin, Phone, Mail } from 'lucide-react';
import './index.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-container footer-container">
        <div className="footer-grid">

          <div>
            <h3 className="footer-title">
              TULAS INTERNATIONAL SCHOOL
            </h3>

            <p className="footer-description">
              Dehradun's premier co-ed boarding school offering modern CBSE
              education, state-of-the-art sports facilities, and holistic
              character building.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Contact Info</h4>

            <ul className="footer-list">
              <li className="footer-item">
                <MapPin size={16} color="#D97706" />
                Dhoolkot, PO Selakui, Chakrata Road, Dehradun
              </li>

              <li className="footer-item">
                <Phone size={16} color="#D97706" />
                +91-9837983791
              </li>

              <li className="footer-item">
                <Mail size={16} color="#D97706" />
                info@tis.edu.in
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>

            <ul className="footer-list">
              <li>
                <a href="#about" className="footer-link">
                  About Campus
                </a>
              </li>

              <li>
                <a href="#sports" className="footer-link">
                  Sports Facilities
                </a>
              </li>

              <li>
                <a href="#reviews" className="footer-link">
                  Parent Reviews
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Tulas International School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

