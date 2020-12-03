import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, CONSTANTS, FONTS } from '../../styles';

const { MOBILE_SCREENSHOT } = CONSTANTS;

export const Container = styled.div`
  position: relative;
  height: ${MOBILE_SCREENSHOT.HEIGHT};
  width: ${MOBILE_SCREENSHOT.WIDTH};
`;

export const Screenshot = styled(motion.img)`
  position: absolute;
  width: 100%;
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
`;

export const NextNavButton = styled(NavButton)`
  right: -48px;
`;

export const Caption = styled(motion.div)`
  position: absolute;
  width: 336px;
  top: ${MOBILE_SCREENSHOT.HEIGHT};
  left: calc(50% - 168px);
  padding-top: 0.5rem;
  text-align: center;
  font-family: ${FONTS.PRIMARY};
  font-size: 1rem;
  color: ${COLORS.WHITE};
`;
