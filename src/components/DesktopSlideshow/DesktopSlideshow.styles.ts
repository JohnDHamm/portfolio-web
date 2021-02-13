import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, CONSTANTS, FONTS } from '../../styles';

const {
  DESKTOP_SCREENSHOT,
  DESKTOP_SLIDESHOW,
  IPHONE_SCREENSHOT,
  LAPTOP_SCREENSHOT,
  SCREEN,
} = CONSTANTS;

const getHeight = (type: SlideshowType) => {
  switch (type) {
    case 'laptop':
      return LAPTOP_SCREENSHOT.HEIGHT;
    case 'desktop':
      return DESKTOP_SCREENSHOT.HEIGHT;
    case 'iphone':
      return IPHONE_SCREENSHOT.HEIGHT;
    default:
      return null;
  }
};

const getMobileHeight = (type: SlideshowType) => {
  switch (type) {
    case 'laptop':
      return '55vw';
    case 'desktop':
      return '50vw';
    case 'iphone':
      return '67.5vw';
    default:
      return null;
  }
};

export const Container = styled.div<{ type: SlideshowType }>`
  position: relative;
  height: ${(props) => getHeight(props.type)};
  width: ${DESKTOP_SLIDESHOW.WIDTH};

  @media screen and (${SCREEN.TABLET_AND_SMALLER}) {
    width: 90vw;
    max-width: ${DESKTOP_SLIDESHOW.MOBILE_MAX_WIDTH};
    height: ${(props) => getMobileHeight(props.type)};
    max-height: ${DESKTOP_SCREENSHOT.MOBILE_MAX_HEIGHT};
  }
`;

export const Screenshot = styled(motion.img)`
  position: absolute;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
`;

export const NavButton = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  top: calc(50% - 18px);
  z-index: 10;
`;

export const PrevNavButton = styled(NavButton)`
  transform: rotate(180deg);
  left: -48px;
  @media screen and (${SCREEN.MOBILE}) {
    left: -19px;
  }
`;

export const NextNavButton = styled(NavButton)`
  right: -48px;
  @media screen and (${SCREEN.MOBILE}) {
    right: -19px;
  }
`;

export const Caption = styled(motion.div)<{ height: number }>`
  position: absolute;
  top: ${(props) => props.height + 'px'};
  width: ${DESKTOP_SLIDESHOW.WIDTH};
  padding-top: 0.5rem;
  text-align: center;
  font-family: ${FONTS.PRIMARY};
  font-size: 1rem;
  color: ${COLORS.WHITE};

  @media screen and (${SCREEN.TABLET_AND_SMALLER}) {
    width: 90vw;
    max-width: ${DESKTOP_SLIDESHOW.MOBILE_MAX_WIDTH};
    top: ${(props) => props.height + 'px'};
  }
`;
