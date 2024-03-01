import { motion } from 'framer-motion';
import { formatPercentage } from '../utils/helpers';
import { State } from '../hooks/useEngine';

export const Results = ({
  state,
  errors,
  accuaracyPorcentage,
  total,
  className,
}: {
  state: State;
  errors: number;
  accuaracyPorcentage: number;
  total: number;
  className?: string;
}) => {
  const inital = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  if (state !== 'finish') {
    return null;
  }

  return (
    <ul
      className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
    >
      <motion.li
        initial={inital}
        animate={animate}
        transition={{ ...duration, delay: 0 }}
        className="text-xl font-semibold"
      >
        Results
      </motion.li>
      <motion.li
        initial={inital}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
      >
        Accuaracy: {formatPercentage(accuaracyPorcentage)}
      </motion.li>
      <motion.li
        initial={inital}
        animate={animate}
        transition={{ ...duration, delay: 1 }}
        className="text-red-500"
      >
        Errors : {errors}
      </motion.li>
      <motion.li
        initial={inital}
        animate={animate}
        transition={{ ...duration, delay: 1.5 }}
      >
        Typed: {total}
      </motion.li>
    </ul>
  );
};
