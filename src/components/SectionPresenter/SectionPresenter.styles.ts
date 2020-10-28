import styled from 'styled-components';
import { CONSTANTS, FONTS } from '../../styles';

const { MOBILE_CONTAINER } = CONSTANTS;

export const LegendBlock = styled.div`
  position: relative;
  display: flex;
  height: ${CONSTANTS.PROJECT_CARD_SIZE.CLOSED.height + 'px'};
`;

export const LegendTextBlock = styled.div`
  position: absolute;
  bottom: 110px;
  right: -102px;
  width: ${CONSTANTS.PROJECT_CARD_SIZE.CLOSED.height + 'px'};
  transform: rotate(-75deg);
  text-align: center;
`;

export const LegendText = styled.p<{ color: string }>`
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 4rem;
  color: ${(props) => props.color};
`;

export const ThickSlash = styled.div<{ color: string }>`
  height: ${CONSTANTS.PROJECT_CARD_SIZE.CLOSED.height + 'px'};
  width: 15px;
  margin-right: 2px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;

export const ThinSlash = styled.div<{ color: string }>`
  height: ${CONSTANTS.PROJECT_CARD_SIZE.CLOSED.height + 'px'};
  width: 3px;
  margin-left: 2px;
  margin-right: 3px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;

export const MobileContainer = styled.div`
  width: ${MOBILE_CONTAINER.width};
  max-width: ${MOBILE_CONTAINER.maxWidth};
  text-align: center;
`;

export const MobileLegendText = styled(LegendText)<{ color: string }>`
  font-size: 3.5rem;
  margin-bottom: -1rem;
`;

export const MobileThickSlash = styled.div<{ color: string }>`
  width: 100%;
  height: 15px;
  margin-bottom: 2px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;

export const MobileThinSlash = styled.div<{ color: string }>`
  height: 3px;
  width: 100%;
  margin-top: 2px;
  margin-bottom: 3px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;
