import React from 'react';
import { Users, BookOpen, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white shadow-xl rounded-xl hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
    >
      <motion.div
        className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</h3>
      <p className="text-secondary text-center">{label}</p>
    </motion.div>
  );
};

const Impact: React.FC = () => {
  return (
    <section className="section bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Notre Impact
          </motion.h2>
          <motion.p
            className="text-lg text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Depuis notre création, nous avons fait une différence significative
            dans la vie scolaire de nos enfants.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          <StatItem
            icon={<Users size={32} />}
            value="250+"
            label="Familles membres"
            delay={0}
          />
          <StatItem
            icon={<BookOpen size={32} />}
            value="45"
            label="Projets éducatifs"
            delay={100}
          />
          <StatItem
            icon={<Award size={32} />}
            value="12"
            label="Prix d'excellence"
            delay={200}
          />
          <StatItem
            icon={<Heart size={32} />}
            value="1000+"
            label="Heures de bénévolat"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Impact;
