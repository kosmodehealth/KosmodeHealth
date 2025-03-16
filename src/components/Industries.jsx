import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./standards/buttons.css";

const Industries = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const agrifoodCardRef = useRef(null);
  const biomedicalCardRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (!gsap) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Make sure elements are available before animating
    if (titleRef.current && dividerRef.current) {
      // Initial state - set elements to be invisible
      gsap.set(titleRef.current, { opacity: 0, y: 50 });
      gsap.set(dividerRef.current, { opacity: 0, width: 0 });
      gsap.set([agrifoodCardRef.current, biomedicalCardRef.current], { opacity: 0, y: 100 });
      
      // Create timeline for better control
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
      
      // Add animations to timeline
      tl.to(titleRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out" 
      })
      .to(dividerRef.current, { 
        opacity: 1, 
        width: "6rem", // w-24 in Tailwind equals 6rem
        duration: 0.6, 
        ease: "power2.out" 
      }, "-=0.4")
      .to(agrifoodCardRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out" 
      }, "-=0.2")
      .to(biomedicalCardRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power2.out" 
      }, "-=0.4");
      
      // Hover effects for Agrifood card
      if (agrifoodCardRef.current) {
        const agrifoodHeader = agrifoodCardRef.current.querySelector('.h-16');
        const agrifoodButton = agrifoodCardRef.current.querySelector('.button-85');
        
        agrifoodCardRef.current.addEventListener('mouseenter', () => {
          gsap.to(agrifoodHeader, { backgroundColor: '#166534', duration: 0.3 });
          gsap.to(agrifoodButton, { scale: 1.1, duration: 0.3 });
        });
        
        agrifoodCardRef.current.addEventListener('mouseleave', () => {
          gsap.to(agrifoodHeader, { backgroundColor: '#16a34a', duration: 0.3 });
          gsap.to(agrifoodButton, { scale: 1, duration: 0.3 });
        });
      }
      
      // Hover effects for Biomedical card
      if (biomedicalCardRef.current) {
        const biomedicalHeader = biomedicalCardRef.current.querySelector('.h-16');
        const biomedicalButton = biomedicalCardRef.current.querySelector('.button-85');
        
        biomedicalCardRef.current.addEventListener('mouseenter', () => {
          gsap.to(biomedicalHeader, { backgroundColor: '#166534', duration: 0.3 });
          gsap.to(biomedicalButton, { scale: 1.1, duration: 0.3 });
        });
        
        biomedicalCardRef.current.addEventListener('mouseleave', () => {
          gsap.to(biomedicalHeader, { backgroundColor: '#16a34a', duration: 0.3 });
          gsap.to(biomedicalButton, { scale: 1, duration: 0.3 });
        });
      }
    }
    
    return () => {
      // Clean up ScrollTrigger instances to prevent memory leaks
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <section id="industries" className="py-16 bg-green-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Industries & Services
          </h2>
          <div ref={dividerRef} className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Agrifood Industry */}
          <div ref={agrifoodCardRef} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="h-16 bg-green-600 flex items-center">
              <h3 className="text-2xl font-bold text-white px-6">Agrifood Industry</h3>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-700 mb-2">Extraction and Valorisation Services</h4>
                <p className="text-gray-700">
                  We assist agrifood companies in extracting valuable components from food processing waste, transforming them into functional food ingredients.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-700 mb-2">Functional Food Formulation Services</h4>
                <p className="text-gray-700">
                  We collaborate with food manufacturers to develop new functional food products using repurposed ingredients, promoting sustainability.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-green-700 mb-2">Consulting and Training</h4>
                <p className="text-gray-700">
                  We offer expertise on food waste valorisation, functional food formulation, and sustainable practices in the food industry.
                </p>
              </div>
            </div>
            <div className="flex justify-center -mt-1 mb-6">
              <Link to="/Agrifood">
                <button className="button-85">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          
          {/* Biomedical Industry */}
          <div ref={biomedicalCardRef} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="h-16 bg-green-600 flex items-center">
              <h3 className="text-2xl font-bold text-white px-6">Biomedical Industry</h3>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-700 mb-2">Custom Bio-Ink, Scaffold Design & Fabrication</h4>
                <p className="text-gray-700">
                  We tailor bio-inks and scaffolds to meet specific research or clinical needs, providing customized solutions for tissue engineering applications.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-green-700 mb-2">Consulting Services</h4>
                <p className="text-gray-700">
                  We provide guidance on tissue engineering and regenerative medicine projects, sharing our expertise to help advance biomedical research and applications.
                </p>
              </div>
            </div>
            <div className="flex justify-center -mt-1 mb-6">
              <Link to="/Biomedical">
                <button className="button-85">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;