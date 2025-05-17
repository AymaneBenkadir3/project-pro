import React, { useEffect, useRef } from 'react';

interface VideoCardProps {
  videoId?: string;           // Optionnel, pour vidéo Vimeo
  localVideoSrc?: string;     // Optionnel, pour vidéo locale
  title: string;
  description: string;
  delay?: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoId,
  localVideoSrc,
  title,
  description,
  delay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.setAttribute('data-aos', 'fade-up');
      cardRef.current.setAttribute('data-aos-delay', delay.toString());
      cardRef.current.setAttribute('data-aos-duration', '800');
    }
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
    >
      <div className="video-container">
        {videoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
        ) : localVideoSrc ? (
          <video
            width="640"
            height="360"
            controls
            preload="metadata"
            poster="" // tu peux ajouter une image d’aperçu ici si tu veux
          >
            <source src={localVideoSrc} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        ) : (
          <p className="p-4">Vidéo non disponible</p>
        )}
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-text/80">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
