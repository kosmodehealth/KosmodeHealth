import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Technologies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      dividerRef.current,
      { width: 0, opacity: 0 },
      {
        width: "6rem",
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    cardsRef.current.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.03,
          boxShadow: "0 10px 30px rgba(0, 128, 0, 0.1)",
          duration: 0.3,
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        });
      });
    });

    return () => {
      cardsRef.current.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const addToCardsRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="technologies" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-[#8f9962] mb-4">Our Technologies</h2>
          <div ref={dividerRef} className="h-1 bg-[#8f9962] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Plant Extraction Technology",
              img: "/KosmodeHealth/images/plant-extraction.jpg",
              points: [
                "Sustainable, halal-certifiable extraction process",
                "Lower land footprint and reduced energy consumption",
                "Higher solvent recovery rates",
                "Continuous operation capabilities",
                "Produces high-purity extracts at one-tonne scale",
              ],
            },
            {
              title: "Plant Protein Composite (PPC™) Bio-Ink",
              img: "/KosmodeHealth/images/bioink-3.png",
              points: [
                "Blends plant proteins with other polymers",
                "Cost-effective alternative to animal protein-based biomaterials",
                "Reproducible formulation for 3D scaffold printing",
                "Sustainable source materials",
                "Customizable for various applications",
              ],
            },
            {
              title: "3D Scaffold Printing",
              img: "/KosmodeHealth/images/scaffolding.jpg",
              points: [
                "Customizable 3D-printed scaffolds",
                "Supports cell growth and differentiation",
                "Compatible with PPC™ bio-ink",
                "Biodegradable and biocompatible",
                "Designed for tissue engineering applications",
              ],
            },
          ].map((tech, idx) => (
            <div
              key={tech.title}
              ref={addToCardsRefs}
              className="bg-[#8f9962] rounded-lg shadow-md p-6 transition duration-300"
            >
              <img
                src={tech.img}
                alt={tech.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-[#ded9ba] mb-4">{tech.title}</h3>
              <ul className="text-white space-y-2">
                {tech.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
