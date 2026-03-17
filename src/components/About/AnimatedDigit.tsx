import { motion, AnimatePresence } from "motion/react";

interface Props {
  value: string;
}

const AnimatedDigit = ({ value }: Props) => {
  return (
    <div className="relative h-7 w-3.5 lg:h-9 lg:w-4.5 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          exit={{ y: -40 }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 right-0 text-center"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedDigit;