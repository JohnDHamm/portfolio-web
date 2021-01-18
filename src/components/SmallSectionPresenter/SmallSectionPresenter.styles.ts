import styled from 'styled-components';
import { CONSTANTS, FONTS } from '../../styles';

const { MOBILE_CONTAINER } = CONSTANTS;

export const LegendBlock = styled.div`
  position: relative;
  display: flex;
  height: 120px;
`;

export const LegendTextBlock = styled.div`
  position: absolute;
  bottom: 40px;
  right: -32px;
  width: 120px;
  transform: rotate(-75deg);
  text-align: center;
`;

export const LegendText = styled.p<{ color: string }>`
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 2rem;
  color: ${(props) => props.color};
`;

export const ThickSlash = styled.div<{ color: string }>`
  height: 120px;
  width: 8px;
  margin-right: 2px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;

export const ThinSlash = styled.div<{ color: string }>`
  height: 120px;
  width: 2px;
  margin-left: 1px;
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
  font-size: 2.5rem;
  margin-bottom: -0.75rem;
`;

export const MobileThickSlash = styled.div<{ color: string }>`
  width: 100%;
  height: 8px;
  margin-bottom: 2px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;

export const MobileThinSlash = styled.div<{ color: string }>`
  height: 2px;
  width: 100%;
  /* margin-top: 2px; */
  margin-bottom: 3px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;
