import { motion } from 'framer-motion';

/**
 * Reveal — fade/slide-up on scroll into view.
 */
export default function Reveal({ children, delay = 0, y = 42 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
