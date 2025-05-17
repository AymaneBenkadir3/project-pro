import React from 'react';
import VideoCard from './VideoCard';

// Import vidéos locales
import video1 from '../assets/videos/Untitled.mp4';
import video2 from '../assets/videos/Untitled (1).mp4';
import video3 from '../assets/videos/Untitled (2).mp4';

const VideoSection: React.FC = () => {
  const videos = [
    {
      localVideoSrc: video1,
      title: 'Réunion des Parents',
      description: 'Découvrez les récentes améliorations à notre école : rénovation des toilettes, nouvelle peinture fraîche sur les murs, et embellissement du jardin pour un environnement plus agréable.',
      delay: 0,
    },
    {
      localVideoSrc: video2,
      title: 'Atelier de Sensibilisation',
      description: 'Plongez dans les moments joyeux des enfants à travers leurs activités scolaires et sorties éducatives, qui enrichissent leur apprentissage et leur épanouissement.',
      delay: 200,
    },
    {
      localVideoSrc: video3,
      title: 'Activités Périscolaires',
      description: 'Découvrez les diverses activités et compétitions organisées au sein de l’école, qui stimulent l’esprit d’équipe et le dépassement de soi chez nos élèves.',
      delay: 400,
    },
  ];

  return (
    <section id="videos" className="section bg-gradient-to-b from-white to-primary/5 py-20">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Vidéos
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Découvrez nos activités et événements à travers ces vidéos qui
            illustrent notre engagement pour l'éducation de nos enfants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(({ localVideoSrc, title, description, delay }, index) => (
            <VideoCard
              key={index}
              localVideoSrc={localVideoSrc}
              title={title}
              description={description}
              delay={delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
