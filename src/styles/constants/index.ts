import { Transition } from 'framer-motion';

const PROJECT_CARD_TRANSTION: Transition = {
  type: 'spring',
  damping: 50,
  stiffness: 500,
};

const CONSTANTS = {
  PROJECT_CARD_SIZE: {
    CLOSED: {
      height: 300,
      width: 160,
    },
    OPEN: {
      height: 320,
      width: 800,
    },
  },
  PROJECT_CARD_TRANSITION: PROJECT_CARD_TRANSTION,
};

export default CONSTANTS;
