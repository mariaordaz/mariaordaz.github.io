import { useState, useEffect } from 'react'; // Añade useEffect al import
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  // El useEffect debe estar dentro del componente, antes del return
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
        header.style.backdropFilter = 'blur(10px)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.6)';
        header.style.backdropFilter = 'blur(8px)';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className="header">
      {/* El resto de tu JSX permanece igual */}
      <div className="header__logo">
        <a href="/">mariaordaz</a>
      </div>
      
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a 
              href="#home" 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => setActiveLink('home')}
            >
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a 
              href="#work" 
              className={activeLink === 'work' ? 'active' : ''}
              onClick={() => setActiveLink('work')}
            >
              Work
            </a>
          </li>
          <li className="header__nav-item">
            <a 
              href="#about" 
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => setActiveLink('about')}
            >
              About
            </a>
          </li>
          <li className="header__nav-item">
            <a 
              href="#contact" 
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => setActiveLink('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
