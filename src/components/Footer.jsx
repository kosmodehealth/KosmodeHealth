const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">KosmodeHealth</h3>
            <p className="mb-4">Expanding access to health from nature through sustainable solutions and innovative technology.</p>
            <p>&copy; {new Date().getFullYear()} KosmodeHealth. All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><span onClick={() => scrollToSection('about')} className="text-green-300 hover:text-green-600 transition duration-300 cursor-pointer underline">About Us</span></li>
              <li><span onClick={() => scrollToSection('founders')} className="text-green-300 hover:text-green-600 transition duration-300 cursor-pointer underline">Our Founders</span></li>
              <li><span onClick={() => scrollToSection('technologies')} className="text-green-300 hover:text-green-600 transition duration-300 cursor-pointer underline">Technologies</span></li>
              <li><span onClick={() => scrollToSection('industries')} className="text-green-300 hover:text-green-600 transition duration-300 cursor-pointer underline">Industries & Services</span></li>
              <li><span onClick={() => scrollToSection('products')} className="text-green-300 hover:text-green-600 transition duration-300 cursor-pointer underline">Products</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">
              Email:&nbsp;
              <span onClick={() => window.location.href = 'mailto:info@kosmodehealth.com'} className="text-green-300 hover:text-green-600 transition duration-300 cursor-pointer underline">
                info@kosmodehealth.com
              </span>
            </p>
            <p className="mb-4">Address: 83 Science Park Drive #02-03/4 Singapore 118258</p>
            
            <div className="flex space-x-4">
              <span onClick={() => window.open('https://www.facebook.com/KosmodeHealthSG/', '_blank')} className="text-green-300 hover:text-green-600 transition duration-300 cursor-pointer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </span>
              <span onClick={() => window.open('https://www.linkedin.com/company/kosmodehealthsingapore/posts/?feedView=all', '_blank')} className="text-green-300 hover:text-green-600 transition duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;