import React, { useState } from 'react';
import VideoCard from './VideoCard';

// Import des vidéos locales
import video1 from '../assets/videos/Untitled (4).mp4';
import video2 from '../assets/videos/Untitled (5).mp4';
import video3 from '../assets/videos/Untitled (7).mp4';
import video4 from '../assets/videos/Untitled (6).mp4';

// Import des images pour la galerie
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';
import img15 from '../assets/images/img15.jpg';
import img16 from '../assets/images/img16.jpg';


const VideoSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const videos = [
    {
      localVideoSrc: video1,
      title: 'Améliorations récentes',
      description:
        'Découvrez les récentes améliorations à notre école : rénovation des toilettes, nouvelle peinture fraîche sur les murs, et embellissement du jardin pour un environnement plus agréable.',
      delay: 0,
    },
    {
      localVideoSrc: video2,
      title: 'Atelier de Joie et apprentissage',
      description:
        'Plongez dans les moments joyeux des enfants à travers leurs activités scolaires et sorties éducatives, qui enrichissent leur apprentissage et leur épanouissement.',
      delay: 150,
    },
    {
      localVideoSrc: video3,
      title: 'Compétitions éducatives',
      description:
        'Découvrez les diverses activités et compétitions organisées au sein de l’école, qui stimulent l’esprit d’équipe et le dépassement de soi chez nos élèves.',
      delay: 300,
    },
    {
      localVideoSrc: video4,
      title: 'Ensemble pour une école plus belle',
      description:
        'Tous ensemble, nous avons nettoyé et amélioré notre école pour un meilleur cadre. Une belle démonstration d’esprit d’équipe et d’engagement !',
      delay: 450,
    },
  ];

  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, 
  ];

  return (
    <section id="videos" className="section bg-gradient-to-b from-white to-primary/10 py-24">
      <div className="container-custom max-w-7xl mx-auto px-6">
        {/* Titre section vidéos */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-primary mb-5 leading-tight">
            Nos Vidéos
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Découvrez nos activités et événements à travers ces vidéos qui illustrent notre engagement pour l'éducation de nos enfants.
          </p>
        </div>

        {/* Grille des vidéos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
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

        {/* Galerie d'images */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary">Souvenirs en images</h3>
            <p className="text-secondary mt-2 max-w-xl mx-auto">
              Revivez quelques-uns de nos plus beaux moments à travers ces photos de nos activités scolaires et événements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(img)}
                className="cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img}
                  alt={`Souvenir ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal d'image agrandie */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
