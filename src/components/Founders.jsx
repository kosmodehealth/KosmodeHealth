import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin } from "react-icons/fa";

const Founders = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const founderRefs = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Title and divider animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(
      dividerRef.current,
      { width: 0 },
      {
        width: 96,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Founders cards staggered animation
    gsap.fromTo(
      founderRefs.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Reset refs array
  const setFounderRef = (el) => {
    if (el && !founderRefs.current.includes(el)) {
      founderRefs.current.push(el);
    }
  };

  return (
    <section id="founders" className="py-16 bg-[#8f9962]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ded9ba] mb-4" ref={titleRef}>
            Our Founders
          </h2>
          <div className="h-1 bg-[#ded9ba] mx-auto" ref={dividerRef}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Founder Florence Leong */}
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden" 
            ref={setFounderRef}
          >
            <div className="p-8">
              <div className="w-64 h-64 rounded-full bg-green-200 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/KosmodeHealth/images/florence-leong.jpg"
                  alt="Florence Leong"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#8f9962] text-center mb-4">Florence Leong</h3>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/florenceleong/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0077B5] hover:text-[#005582] transition-colors duration-300"
                >
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Founder "Dr. Huang Dejian */}
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            ref={setFounderRef}
          >
            <div className="p-8">
              <div className="w-64 h-64 rounded-full bg-green-200 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="/KosmodeHealth/images/HUANG-Dejian-1.jpg"
                  alt="Dr. Huang Dejian"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#8f9962] text-center mb-4">Dr. Huang Dejian</h3>
              <div className="flex justify-center">
                <a 
                  href="https://www.linkedin.com/in/huang-dejian-02972414/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#0077B5] hover:text-[#005582] transition-colors duration-300"
                >
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;