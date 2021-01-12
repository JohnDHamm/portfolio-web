import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionContainer = styled(motion.div)<{ top: number }>`
  position: absolute;
  top: ${(props) => props.top + 'px'};
  left: 0px;
  z-index: 100;
`;
