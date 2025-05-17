import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-white/80 pt-24 pb-12 overflow-hidden">
      
      {/* Background animation lights */}
      <motion.div
        className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typewriter
            options={{
              strings: ['Association des Parents d’Élèves'],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-secondary mb-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Ensemble pour un avenir scolaire meilleur. Créons une école de qualité grâce à notre engagement collectif.
        </motion.p>

        <motion.p
          className="ar text-lg md:text-xl text-secondary mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          معًا من أجل مستقبل مدرسي أفضل. نعمل على خلق بيئة تعليمية مثالية لأطفالنا من خلال التعاون بين الآباء والمعلمين.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a href="#videos" className="btn btn-primary group">
            Découvrir nos activités
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
