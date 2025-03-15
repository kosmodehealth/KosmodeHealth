import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-100 px-6 py-4 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img src="./images/Kosmodehealth.png" alt="KosmodeHealth Logo" className="h-8 w-auto mr-2" />
          <span className="text-green-800 font-bold text-2xl">KosmodeHealth</span>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-green-700 hover:text-green-900">About</a>
          <a href="#founders" className="text-green-700 hover:text-green-900">Founders</a>
          <a href="#technologies" className="text-green-700 hover:text-green-900">Technologies</a>
          <a href="#industries" className="text-green-700 hover:text-green-900">Industries</a>
          <a href="#products" className="text-green-700 hover:text-green-900">Products</a>
          <a href="#contact" className="text-green-700 hover:text-green-900">Contact</a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-green-700 hover:text-green-900">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-green-50 rounded-lg p-4">
          <div className="flex flex-col space-y-3">
            <a href="#about" className="text-green-700 hover:text-green-900">About</a>
            <a href="#founders" className="text-green-700 hover:text-green-900">Founders</a>
            <a href="#technologies" className="text-green-700 hover:text-green-900">Technologies</a>
            <a href="#industries" className="text-green-700 hover:text-green-900">Industries</a>
            <a href="#products" className="text-green-700 hover:text-green-900">Products</a>
            <a href="#contact" className="text-green-700 hover:text-green-900">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
