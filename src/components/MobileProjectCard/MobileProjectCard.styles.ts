import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, FONTS } from '../../styles';

export const MotionWrapper = styled(motion.div)`
  display: flex;
  margin: 0.25rem 0;
  width: 100%;
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

export const MotionTitle = styled(motion.p)`
  position: absolute;
  bottom: -10px;
  left: 8px;
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 2rem;
  color: ${COLORS.WHITE};
`;

export const MotionDescriptionBlock = styled(motion.div)`
  position: absolute;
  top: 35px;
  left: 0px;
  padding: 0.5rem;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-family: ${FONTS.PRIMARY};
  color: ${COLORS.WHITE};
`;

export const TitleText = styled(Text)`
  font-size: 20px;
`;

export const DescriptionText = styled(Text)`
  font-size: 14px;
`;

export const MotionScreencapsImage = styled(motion.img)`
  position: absolute;
  bottom: 0px;
  left: 50%;
  height: 120px;
  width: 600px;
`;

export const MotionButtonBlock = styled(motion.div)`
  position: absolute;
  bottom: 115px;
  right: 15px;
`;

export const MoreButton = styled.button<{ color: string }>`
  background-color: ${COLORS.WHITE};
  color: ${(props) => props.color};
  font-family: ${FONTS.PRIMARY};
  font-size: 1rem;
  border: 1px solid ${COLORS.BLACK};

  &:hover {
    background-color: ${COLORS.BLACK};
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.WHITE};
    cursor: pointer;
  }
`;
