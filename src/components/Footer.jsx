const Footer = () => {
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
              <li><a href="#about" className="hover:text-green-300 transition duration-300">About Us</a></li>
              <li><a href="#founders" className="hover:text-green-300 transition duration-300">Our Founders</a></li>
              <li><a href="#technologies" className="hover:text-green-300 transition duration-300">Technologies</a></li>
              <li><a href="#industries" className="hover:text-green-300 transition duration-300">Industries & Services</a></li>
              <li><a href="#products" className="hover:text-green-300 transition duration-300">Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">
              Email:&nbsp;
              <a href="mailto:info@kosmodehealth.com" className="hover:text-green-300 transition duration-300">
                info@kosmodehealth.com
              </a>
            </p>
            <p className="mb-4">Address: 83 Science Park Drive #02-03/4 Singapore 118258</p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/KosmodeHealthSG/" className="hover:text-green-300 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/kosmodehealthsingapore/posts/?feedView=all" className="hover:text-green-300 transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.195c-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045A13.74 13.74 0 011.64 3.162a4.96 4.96 0 001.52 6.634 4.898 4.898 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.964 4.964 0 01-2.224.084 4.952 4.952 0 004.6 3.419A9.983 9.983 0 010 19.54a14.085 14.085 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.082 10.082 0 0024 4.57z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
