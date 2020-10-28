import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FONTS } from '../../styles';

export const MotionWrapper = styled(motion.div)`
  display: flex;
  margin: 0.25rem 0;
`;

export const Container = styled.div<{ bgColor: string }>`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const MotionMainImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100px;
  width: 510px;
`;

export const MotionTitle = styled(motion.p)<{ color: string }>`
  position: absolute;
  bottom: -10px;
  left: 8px;
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 2rem;
  color: ${(props) => props.color};
`;

export const MotionDescriptionBlock = styled(motion.div)`
  position: absolute;
  top: 35px;
  left: 0px;
  padding: 0.5rem;
`;

export const DescriptionText = styled.p`
  margin-top: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 14px;
  color: white;
`;

export const MotionScreencapsImage = styled(motion.img)`
  position: absolute;
  bottom: 0px;
  left: 50%;
  height: 120px;
  width: 480px;
`;

export const MotionButtonBlock = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 15px;
`;

export const MoreButton = styled.button<{ color: string }>`
  border: none;
  background-color: white;
  color: ${(props) => props.color};
  font-family: ${FONTS.PRIMARY};
  font-size: 1rem;

  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`;
