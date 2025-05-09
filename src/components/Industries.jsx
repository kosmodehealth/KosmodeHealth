import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./standards/buttons.css";

const Industries = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const agrifoodCardRef = useRef(null);
  const biomedicalCardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(titleRef.current, { opacity: 0, y: 50 });
    gsap.set(dividerRef.current, { opacity: 0, width: 0 });
    gsap.set([agrifoodCardRef.current, biomedicalCardRef.current], { opacity: 0, y: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
      .to(dividerRef.current, { opacity: 1, width: "6rem", duration: 0.6, ease: "power2.out" }, "-=0.4")
      .to(agrifoodCardRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.2")
      .to(biomedicalCardRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

    const addHoverEffects = (ref) => {
      const header = ref.querySelector('.h-16');
      const button = ref.querySelector('.button-85');

      ref.addEventListener('mouseenter', () => {
        gsap.to(header, { duration: 0.3 });
        gsap.to(button, { scale: 1.1, duration: 0.3 });
      });

      ref.addEventListener('mouseleave', () => {
        gsap.to(header, { duration: 0.3 });
        gsap.to(button, { scale: 1, duration: 0.3 });
      });
    };

    addHoverEffects(agrifoodCardRef.current);
    addHoverEffects(biomedicalCardRef.current);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="industries" className="py-16 bg-[#8f9962]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-[#ded9ba] mb-4">
            Industries & Services
          </h2>
          <div ref={dividerRef} className="w-24 h-1 bg-[#ded9ba] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Agrifood Industry */}
          <div ref={agrifoodCardRef} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src="/KosmodeHealth/images/agrifood.jpg" alt="Agrifood Industry" className="w-full h-48 object-cover" />
            <div className="h-16 bg-[#ded9ba] flex items-center">
              <h3 className="text-2xl font-bold text-[#8f9962] px-6">Agrifood Industry</h3>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#8f9962] mb-2">Extraction and Valorisation Services</h4>
                <p className="text-gray-700">
                  We assist agrifood companies in extracting valuable components from food processing waste, transforming them into functional food ingredients.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#8f9962] mb-2">Functional Food Formulation Services</h4>
                <p className="text-gray-700">
                  We collaborate with food manufacturers to develop new functional food products using repurposed ingredients, promoting sustainability.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#8f9962] mb-2">Consulting and Training</h4>
                <p className="text-gray-700">
                  We offer expertise on food waste valorisation, functional food formulation, and sustainable practices in the food industry.
                </p>
              </div>
            </div>
            <div className="flex justify-center -mt-1 mb-6">
              <Link to="/Agrifood">
                <button className="button-85">Learn More</button>
              </Link>
            </div>
          </div>

          {/* Biomedical Industry */}
          <div ref={biomedicalCardRef} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src="/KosmodeHealth/images/biomed.jpg" alt="Biomedical Industry" className="w-full h-48 object-cover" />
            <div className="h-16 bg-[#ded9ba] flex items-center">
              <h3 className="text-2xl font-bold text-[#8f9962] px-6">Biomedical Industry</h3>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-[#8f9962] mb-2">Custom Bio-Ink, Scaffold Design & Fabrication</h4>
                <p className="text-gray-700">
                  We tailor bio-inks and scaffolds to meet specific research or clinical needs, providing customized solutions for tissue engineering applications.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#8f9962] mb-2">Consulting Services</h4>
                <p className="text-gray-700">
                  We provide guidance on tissue engineering and regenerative medicine projects, sharing our expertise to help advance biomedical research and applications.
                </p>
              </div>
            </div>
            <div className="flex justify-center -mt-1 mb-6">
              <Link to="/Biomedical">
                <button className="button-85">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
