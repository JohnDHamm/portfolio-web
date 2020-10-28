import { Transition } from 'framer-motion';

const PROJECT_CARD_TRANSTION: Transition = {
  type: 'spring',
  damping: 50,
  stiffness: 500,
};

const CONSTANTS = {
  MOBILE_CONTAINER: {
    width: '100%',
    maxWidth: '480px',
  },
  MOBILE_PROJECT_CARD_SIZE: {
    SKEW_X_OFFSET: 21.4, // height of 80 * tan(15deg)
    CLOSED: {
      height: 80,
      width: 'calc(100% - 21.4px)',
    },
    OPEN: {
      height: 320,
      width: '100%',
    },
  },
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
