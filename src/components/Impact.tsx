import React from 'react';
import { Users, BookOpen, Award, Heart } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  return (
    <div 
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</h3>
      <p className="text-secondary text-center">{label}</p>
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section className="section bg-white py-20">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Notre Impact
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Depuis notre création, nous avons fait une différence significative
            dans la vie scolaire de nos enfants.
          </p>
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