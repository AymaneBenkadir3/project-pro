import React, { useState, useEffect } from 'react';
import { Menu, X, School } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <School
              size={32}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-primary'
              }`}
            />
            <div>
              <h1
                className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-primary'
                }`}
              >
                Association des Parents d'Élèves
              </h1>
              <p
                className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-secondary' : 'text-secondary'
                }`}
              >
                Ensemble pour un avenir scolaire meilleur
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text p-2"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-6 border-t border-gray-100">
          <nav className="flex flex-col space-y-4">
            <NavLinks isMobile onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  isScrolled?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  isScrolled,
  isMobile,
  onClick,
}) => {
  const linkStyle = isMobile
    ? 'block text-text hover:text-primary transition-colors'
    : `font-medium transition-colors duration-300 ${
        isScrolled ? 'text-text hover:text-primary' : 'text-text hover:text-primary'
      }`;

  return (
    <>
      <Link to="/" className={linkStyle} onClick={onClick}>
        Accueil
      </Link>
      <a href="#videos" className={linkStyle} onClick={onClick}>
        Vidéos
      </a>
      <a href="#contact" className={linkStyle} onClick={onClick}>
        Contact
      </a>
      <Link
        to="/join"
        className={`btn btn-primary text-sm ${isMobile ? 'mt-2' : ''}`}
        onClick={onClick}
      >
        Rejoindre l'association
      </Link>
    </>
  );
};

export default Header;