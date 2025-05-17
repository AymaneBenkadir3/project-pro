import React from 'react';
import { Facebook, Mail, MapPin, Phone, School } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      id="contact"
      className="bg-primary/10 pt-16 pb-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and About */}
          <motion.div
            className="space-y-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center gap-2">
              <School size={32} className="text-primary" />
              <h3 className="text-xl font-bold text-primary">
                Association des Parents d'Élèves
              </h3>
            </div>
            <p className="text-sm md:text-base">
              Ensemble, travaillons pour un meilleur environnement éducatif pour
              nos enfants et pour renforcer la collaboration entre parents et
              enseignants.
            </p>
            <p className="text-sm md:text-base ar">
              معًا، نعمل من أجل بيئة تعليمية أفضل لأطفالنا ولتعزيز التعاون بين
              الآباء والمعلمين.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-primary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-secondary w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm md:text-base">
                  مدرسة جمال الدين المهياوي، 26GM+3JQ, Salé
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-secondary w-5 h-5 flex-shrink-0" />
                <p className="text-sm md:text-base">0660191168</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-primary">Nous suivre</h3>
            <div className="flex gap-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=100068444071272&locale=hu_HU",
                  label: "Facebook",
                  icon: <Facebook className="w-5 h-5" />
                },
                {
                  href: "mailto:contact@parents-eleves.org",
                  label: "Email",
                  icon: <Mail className="w-5 h-5" />
                }
              ].map(({ href, label, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-sm md:text-base font-bold">
                Restez informés ! Abonnez-vous à notre newsletter
              </p>
              <form className="mt-2 flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-grow"
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  S'abonner
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Association des Parents d'Élèves. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
