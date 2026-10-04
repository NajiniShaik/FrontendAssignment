import { useState } from 'react';
import { Phone, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

export default function Navbar({ theme, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar-header">

      {/* Top Bar */}
      <div className="navbar-top-bar">
        <div className="navbar-top-info">
          <span>
            <Phone size={14} />
            +91-9837983791
          </span>

          <span>
            <Mail size={14} />
            info@tis.edu.in
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="navbar">
        <div className="navbar-logo">
          TULAS <span>INTERNATIONAL</span>
        </div>

        {/* Desktop Menu Links */}
        <div className="desktop-links navbar-links">
          <a href="#about" className="navbar-link">
            About
          </a>

          <a href="#sports" className="navbar-link">
            Sports & Facilities
          </a>

          <a href="#reviews" className="navbar-link">
            Testimonials
          </a>
        </div>

        <div className="navbar-right-actions">

          {/* Theme Switcher */}
          <motion.button
            whileTap={{ scale: 0.85, rotate: 180 }}
            onClick={toggleTheme}
            className="navbar-action-btn"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Moon size={20} color="#0f172a" />
            ) : (
              <Sun size={20} color="#fbbf24" />
            )}
          </motion.button>

          {/* Desktop CTA Button */}
          <button className="btn-primary desktop-links">
            Apply Now
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="hamburger-btn navbar-action-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <X size={22} color="var(--text-heading)" />
            ) : (
              <Menu size={22} color="var(--text-heading)" />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Dropdown Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-link"
            >
              About
            </a>

            <a
              href="#sports"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-link"
            >
              Sports & Facilities
            </a>

            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-link"
            >
              Testimonials
            </a>

            <button className="btn-primary mobile-apply-btn">
              Apply Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

