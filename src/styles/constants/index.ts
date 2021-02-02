import { Transition } from 'framer-motion';

const PROJECT_CARD_TRANSTION: Transition = {
  type: 'spring',
  damping: 50,
  stiffness: 500,
};

const CONSTANTS = {
  DESKTOP_SCREENSHOT: {
    ASPECT_RATIO: 1920 / 1170,
    DESKTOP_WIDTH: '800px',
    DESKTOP_HEIGHT: '488px',
    MOBILE_MAX_WIDTH: '480px',
    MOBILE_MAX_HEIGHT: '292px',
  },
  MOBILE_CONTAINER: {
    width: '100%',
    maxWidth: '480px',
  },
  MOBILE_PROJECT_CARD_SIZE: {
    CLOSED: {
      height: 80,
    },
    OPEN: {
      height: 320,
    },
  },
  MOBILE_SCREENSHOT: {
    WIDTH: '240px',
    HEIGHT: '477px',
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
  SCREEN: {
    MOBILE: 'max-width: 767px',
    TABLET: 'max-width: 1024px',
    DESKTOP: 'min-width: 1025px',
  },
  TECH_ICONS_HEIGHT: '60px',
};

export default CONSTANTS;
