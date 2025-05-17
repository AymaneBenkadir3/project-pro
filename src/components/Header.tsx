import React, { useState, useEffect } from 'react';
import { Menu, X, School } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-gradient-to-r from-[#f0f4ff] via-white to-[#f0f4ff] py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center px-4 md:px-10">
        {/* Logo & Title */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition duration-300"
        >
          <School
            size={32}
            className="text-primary group-hover:rotate-12 transition-transform"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              جمال الدين المهياوي
            </h1>
            <p className="text-sm md:text-base text-secondary leading-tight">
              Association des Parents d'Élèves
              <br />
              <span className="text-gray-500">Pour un avenir scolaire meilleur</span>
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <NavLinks isScrolled={isScrolled} />
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white px-6 py-4 shadow-xl rounded-b-lg"
        >
          <nav className="flex flex-col gap-4">
            <NavLinks isMobile onClick={() => setIsMenuOpen(false)} />
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

interface NavLinksProps {
  isScrolled?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  
  isMobile,
  onClick,
}) => {
  const baseStyle = `relative font-medium transition duration-300`;
  const desktopLink =
    'text-gray-800 hover:text-primary before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full before:rounded';
  const mobileLink = 'text-gray-800 hover:text-primary';

  return (
    <>
      <Link
        to="/"
        onClick={onClick}
        className={`${baseStyle} ${isMobile ? mobileLink : desktopLink}`}
      >
        Accueil
      </Link>
      <a
        href="#videos"
        onClick={onClick}
        className={`${baseStyle} ${isMobile ? mobileLink : desktopLink}`}
      >
        Vidéos
      </a>
      <a
        href="#contact"
        onClick={onClick}
        className={`${baseStyle} ${isMobile ? mobileLink : desktopLink}`}
      >
        Contact
      </a>
      <Link
        to="/join"
        onClick={onClick}
        className={`bg-primary text-white font-semibold px-5 py-2 rounded-full shadow hover:from-blue-500 hover:to-blue-300 transition-all duration-300 text-sm text-center ${
          isMobile ? 'mt-3' : 'ml-4'
        }`}
      >
        Rejoindre l'association
      </Link>
    </>
  );
};

export default Header;
