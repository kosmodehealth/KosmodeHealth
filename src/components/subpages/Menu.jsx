import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { gsap } from 'gsap';
import './action.css';
import '../standards/buttons.css';

const Menu = ({ isMenuOpen }) => { 
  const menuRef = useRef(null);
  
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      gsap.to(menuRef.current, { x: '100%', opacity: 0, duration: 0.5, ease: 'power3.in' });
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page__style">
        <div className="menu" ref={menuRef} style={{ transform: 'translateX(100%)', opacity: 0 }}>
            <h2 className="flex items-center justify-center text-3xl mt-5 font-bold text-white tracking-wide relative">
                <span className="menu-title relative">
                    Menu
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
                </span>
            </h2>
            <div className="flex flex-col items-center justify-center space-y-4 mt-4">
                <button 
                  className="button-57 w-[200px] md:w-[300px] transition-colors duration-300 tracking-wide" 
                  data-content="Click to Scroll" 
                  onClick={() => scrollToSection('#about')}
                >
                  About
                </button>
                <button 
                  className="button-57 w-[200px] md:w-[300px] transition-colors duration-300 font-medium tracking-wide" 
                  data-content="Click to Scroll" 
                  onClick={() => scrollToSection('#founders')}
                >
                  Founders
                </button>
                <button
                  className="button-57 w-[200px] md:w-[300px] transition-colors duration-300 font-medium tracking-wide" 
                  data-content="Click to Scroll" 
                  onClick={() => scrollToSection('#technologies')}
                >
                  Technologies
                </button>
                <button 
                  className="button-57 w-[200px] md:w-[300px] transition-colors duration-300 font-medium tracking-wide" 
                  data-content="Click to Scroll" 
                  onClick={() => scrollToSection('#industries')}
                >
                  Industries
                </button>
                <button 
                  className="button-57 w-[200px] md:w-[300px] transition-colors duration-300 font-medium tracking-wide" 
                  data-content="Click to Scroll" 
                  onClick={() => scrollToSection('#products')}
                >
                  Product
                </button>
                <button 
                  className="button-57 w-[200px] md:w-[300px] transition-colors duration-300 font-medium tracking-wide" 
                  data-content="Click to Scroll" 
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact
                </button>
            </div>

            <p className="flex items-center justify-center text-black transition-colors duration-300 mt-4 italic text-sm tracking-wide text-white">
              Coded by Jordan Low Jun Yi
            </p>
            <div className="flex items-center justify-center space-x-4">
                <div
                    className="social-link transform transition-transform duration-300 hover:scale-110"
                    onClick={() => { window.open('https://doux124.github.io/jordan/', '_blank'); }}
                >
                    <FaGithub size={20} />
                </div>
                <div
                    className="social-link transform transition-transform duration-300 hover:scale-110"
                    onClick={() => { window.open('https://www.linkedin.com/in/jordan-low-jun-yi-69a150279/', '_blank'); }}
                >
                    <FaLinkedin size={20} />
                </div>
                <div
                    className="social-link transform transition-transform duration-300 hover:scale-110"
                    onClick={() => { window.open('mailto:onezeroten124@gmail.com?subject=Contact%20from%20Website&body=Hi%20Jordan,', '_blank'); }}
                >
                    <FaEnvelope size={20} />
                </div>
                <div
                    className="social-link transform transition-transform duration-300 hover:scale-110"
                    onClick={() => { window.open('https://scholar.google.com/citations?hl=en&user=O6M8clAAAAAJ', '_blank'); }}
                >
                    <FaGraduationCap size={20} />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Menu;