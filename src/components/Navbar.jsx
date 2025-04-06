const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="px-6 py-4 shadow-md fixed w-full z-10 bg-[#8f9962]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img
            src="/KosmodeHealth/images/Kosmodehealth.png"
            alt="KosmodeHealth Logo"
            className="h-8 w-auto mr-2"
          />
          <span className="text-[#ded9ba] font-bold text-2xl">KosmodeHealth</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <span
            onClick={() => scrollToSection('#about')}
            className="text-[#ded9ba] hover:text-green-900 cursor-pointer"
          >
            About
          </span>
          <span
            onClick={() => scrollToSection('#founders')}
            className="text-[#ded9ba] hover:text-green-900 cursor-pointer"
          >
            Founders
          </span>
          <span
            onClick={() => scrollToSection('#technologies')}
            className="text-[#ded9ba] hover:text-green-900 cursor-pointer"
          >
            Technologies
          </span>
          <span
            onClick={() => scrollToSection('#industries')}
            className="text-[#ded9ba] hover:text-green-900 cursor-pointer"
          >
            Industries
          </span>
          <span
            onClick={() => scrollToSection('#products')}
            className="text-[#ded9ba] hover:text-green-900 cursor-pointer"
          >
            Products
          </span>
          <span
            onClick={() => scrollToSection('#contact')}
            className="text-[#ded9ba] hover:text-green-900 cursor-pointer"
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;