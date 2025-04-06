import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Title and divider animation
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        }
      }
    );
    
    gsap.fromTo(
      dividerRef.current,
      { width: 0, opacity: 0 },
      { 
        width: "6rem", 
        opacity: 1, 
        duration: 1.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 80%",
        }
      }
    );
    
    // Left column text animation
    gsap.fromTo(
      leftColumnRef.current.querySelectorAll('p'),
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: "top 75%",
        }
      }
    );
    
    // Right column card animation
    gsap.fromTo(
      rightColumnRef.current,
      { x: 50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top 75%",
        }
      }
    );
    
    // Mission sections animation
    gsap.fromTo(
      rightColumnRef.current.querySelectorAll('div > div'),
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.4,
        delay: 0.5,
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top 70%",
        }
      }
    );
    
    // Clean up animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="w-screen py-16 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-5xl font-bold text-[#8f9962] mb-4">About Us</h2>
          <div ref={dividerRef} className="h-1 bg-[#8f9962] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={leftColumnRef}>
            <p className="text-lg text-gray-700 mb-6">
              KosmodeHealth is a deep-tech startup originating from the National University of Singapore's Food Science and Technology Department. Our mission is to expand access to health from nature, sustaining the health of people without compromising environmental well being.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Operating as a B2B enabler, KosmodeHealth leverages a Triple Technology Platform to repurpose food processing waste into functional ingredients for human nutrition in the agrifood industry and functional materials for human health in the biomedical industry.
            </p>
          </div>
          
          <div ref={rightColumnRef} className="bg-[#8f9962] p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#ded9ba] mb-6">Our Beliefs</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-[#ded9ba] mb-2">Sustainable Use of Resources</h4>
              <p className="text-white">
                We advocate for the utilization of spent grains, which would otherwise be discarded, to produce affordable, high-quality ingredients and materials. Our process gives a second life to food processing wastes by extracting proteins and fibers, serving as sustainable and economical sources for human nutrition and health.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-[#ded9ba] mb-2">Functional Staple Foods</h4>
              <p className="text-white">
                We believe in transforming staple foods into therapeutic options to address health management compliance issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;