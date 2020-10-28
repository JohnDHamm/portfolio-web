import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CONSTANTS } from '../../styles';

export const Container = styled.div`
  height: ${CONSTANTS.PROJECT_CARD_SIZE.OPEN.height + 'px'};
  margin-top: 10px;
`;

export const MotionContainer = styled(motion.div)`
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const StyledUL = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const StyledMobileUL = styled(StyledUL)`
  display: block;
`;
