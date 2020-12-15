import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, FONTS } from '../../styles';

export const MotionWrapper = styled(motion.div)`
  display: flex;
  margin: 0 0.25rem;
`;

export const Container = styled.div<{ bgColor: string }>`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const MotionMainImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  height: 320px;
  width: 320px;
`;

export const TitleBlock = styled.div`
  position: absolute;
  bottom: 150px;
  right: -150px;
  width: 280px;
  transform: rotate(-90deg);
`;

export const MotionTitle = styled(motion.p)<{ color: string }>`
  position: absolute;
  bottom: 0;
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 2rem;
  color: ${(props) => props.color};
  text-shadow: 1px 1px 2px black;
`;

export const MotionDescriptionBlock = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 70px;
  width: 680px;
`;

export const DescriptionText = styled.p`
  margin-top: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 1.25rem;
  color: white;
`;

export const MotionScreencapsImage = styled(motion.img)`
  position: absolute;
  bottom: 0px;
  left: 70px;
  height: 120px;
  width: 600px;
`;

export const MotionButtonBlock = styled(motion.div)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const MoreButton = styled.button<{ color: string }>`
  border: none;
  background-color: ${COLORS.WHITE};
  color: ${(props) => props.color};
  font-family: ${FONTS.PRIMARY};
  font-size: 1.25rem;
  border: 1px solid ${COLORS.BLACK};

  &:hover {
    background-color: ${COLORS.BLACK};
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.WHITE};
    cursor: pointer;
  }
`;
