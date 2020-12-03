import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, CONSTANTS, FONTS } from '../../styles';

const { DESKTOP_SCREENSHOT, SCREEN } = CONSTANTS;

export const Container = styled.div`
  position: relative;
  height: ${DESKTOP_SCREENSHOT.DESKTOP_HEIGHT};
  width: ${DESKTOP_SCREENSHOT.DESKTOP_WIDTH};

  @media screen and (${SCREEN.TABLET}) {
    width: 90vw;
    max-width: ${DESKTOP_SCREENSHOT.MOBILE_MAX_WIDTH};
    height: 55vw;
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
  top: ${DESKTOP_SCREENSHOT.DESKTOP_HEIGHT};
  width: ${DESKTOP_SCREENSHOT.DESKTOP_WIDTH};
  padding-top: 0.5rem;
  text-align: center;
  font-family: ${FONTS.PRIMARY};
  font-size: 1rem;
  color: ${COLORS.WHITE};

  @media screen and (${SCREEN.TABLET}) {
    width: 90vw;
    max-width: ${DESKTOP_SCREENSHOT.MOBILE_MAX_WIDTH};
    top: ${(props) => props.height + 'px'};
  }
`;
