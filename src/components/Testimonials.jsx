import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Testimonials = () => {
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
          start: "top 80%"
        }
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
          start: "top 80%"
        }
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
          start: "top 70%"
        }
      }
    );

    cardsRef.current.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -10, 
          scale: 1.03, 
          boxShadow: "0 10px 30px rgba(0, 128, 0, 0.1)", 
          duration: 0.3 
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          scale: 1, 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
          duration: 0.3 
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
    <section ref={sectionRef} id="testimonials" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-[#8f9962] mb-4">Our Testimonials</h2>
          <div ref={dividerRef} className="h-1 bg-[#8f9962] mx-auto"></div>
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            ref={addToCardsRefs} 
            className="p-6 bg-[#ded9ba] rounded-lg shadow-md transition-transform duration-300"
          >
            <p className="text-gray-700 mb-4">
              "I like the texture a lot, especially the springy texture that's not grainy or sandy
              like wholemeal noodles. A good substitute for people who can't take too much carbs,
              like diabetics or pre-diabetics, and people on a low calorie diet. It's also high in fiber.
              I think my mom will like it!"
            </p>
            <p className="font-semibold text-[#8f9962]">- Jemby</p>
          </div>

          <div 
            ref={addToCardsRefs} 
            className="p-6 bg-[#ded9ba] rounded-lg shadow-md transition-transform duration-300"
          >
            <p className="text-gray-700 mb-4">
              "I enjoy the taste as it doesn't feel empty; it has a deep flavour and richness. It has a slighty
              bitter aftertaste, which I like and find charming. It is very unique. I will order more online!"
            </p>
            <p className="font-semibold text-[#8f9962]">- Amy from Korea</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
