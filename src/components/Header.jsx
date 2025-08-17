import { useState, useEffect } from 'react'; // Añade useEffect al import
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  // El useEffect debe estar dentro del componente, antes del return
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.style.padding = '1rem 5%';
        header.style.background = 'rgba(255, 255, 255, 0.98)'; // Más opaco al hacer scroll
      } else {
        header.style.padding = '2rem 5%';
        header.style.background = 'rgba(255, 255, 255, 0.9)';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Array de dependencias vacío para que solo se ejecute una vez

  return (
    <header className="header">
      {/* El resto de tu JSX permanece igual */}
      ...
    </header>
  );
};

export default Header;