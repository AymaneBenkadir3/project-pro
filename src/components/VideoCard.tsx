import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface VideoCardProps {
  videoId?: string;
  localVideoSrc?: string;
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay / 1000,
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const hoverOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.3, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-shadow duration-300"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >
      <motion.div
        className="relative overflow-hidden rounded-t-3xl"
        style={{ aspectRatio: '16 / 9' }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        {videoId ? (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`}
            className="w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          ></iframe>
        ) : localVideoSrc ? (
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            <source src={localVideoSrc} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
        ) : (
          <p className="p-4">Vidéo non disponible</p>
        )}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none rounded-t-3xl"
          variants={hoverOverlayVariants}
          initial="hidden"
          animate="hidden"
          whileHover="visible"
        />
      </motion.div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-extrabold text-primary mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed flex-grow">
          {description}
        </p>
        {/* Bouton "Voir plus" supprimé ici */}
      </div>
    </motion.div>
  );
};

export default VideoCard;
