import React, { useEffect, useRef } from 'react';
import { CalendarDays } from 'lucide-react';

const HeroBanner: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arabicTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.setAttribute('data-aos', 'fade-up');
      titleRef.current.setAttribute('data-aos-duration', '800');
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.setAttribute('data-aos', 'fade-up');
      subtitleRef.current.setAttribute('data-aos-delay', '200');
      subtitleRef.current.setAttribute('data-aos-duration', '800');
    }
    
    if (arabicTextRef.current) {
      arabicTextRef.current.setAttribute('data-aos', 'fade-up');
      arabicTextRef.current.setAttribute('data-aos-delay', '400');
      arabicTextRef.current.setAttribute('data-aos-duration', '800');
    }
    
    if (buttonsRef.current) {
      buttonsRef.current.setAttribute('data-aos', 'fade-up');
      buttonsRef.current.setAttribute('data-aos-delay', '600');
      buttonsRef.current.setAttribute('data-aos-duration', '800');
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-white/80 pt-24 pb-12">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[10%] w-3/4 h-3/4 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-3/4 h-3/4 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
        >
          Association des Parents d'Élèves
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-secondary mb-4 max-w-3xl mx-auto"
        >
          Ensemble pour un avenir scolaire meilleur. Nous travaillons à créer un environnement 
          éducatif optimal pour nos enfants à travers la collaboration entre parents et enseignants.
        </p>
        
        <p 
          ref={arabicTextRef}
          className="ar text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto"
        >
          معًا من أجل مستقبل مدرسي أفضل. نعمل على خلق بيئة تعليمية مثالية لأطفالنا 
          من خلال التعاون بين الآباء والمعلمين.
        </p>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 "
        >
          <a 
            href="#videos" 
            className="btn btn-primary group"
          >
            <CalendarDays className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            Découvrir nos activités
          </a>
       
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;