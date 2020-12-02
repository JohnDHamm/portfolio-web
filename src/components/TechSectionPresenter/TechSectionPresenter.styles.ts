import styled from 'styled-components';
import { CONSTANTS, FONTS } from '../../styles';

const { MOBILE_CONTAINER } = CONSTANTS;
const TECH_HEIGHT = '100px';

export const LegendBlock = styled.div`
  position: relative;
  display: flex;
  height: ${TECH_HEIGHT};
`;

export const LegendTextBlock = styled.div`
  position: absolute;
  bottom: 30px;
  right: -19px;
  width: ${TECH_HEIGHT};
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
  height: ${TECH_HEIGHT};
  width: 10px;
  margin-right: 2px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;

export const ThinSlash = styled.div<{ color: string }>`
  height: ${TECH_HEIGHT};
  width: 2px;
  margin-left: 2px;
  margin-right: 3px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;

export const ContentBlock = styled.div`
  /* border: 1px dashed grey; */
  height: ${TECH_HEIGHT};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0.25rem;

  @media screen and (${CONSTANTS.SCREEN.MOBILE}) {
    height: auto;
    width: 100%;
    flex-direction: column;
    margin: 0.25rem 0;
  }
`;

export const IconsBlock = styled.div`
  /* border: 1px dotted yellow; */
  height: 60px;
  display: flex;
  flex-direction: row;
  margin-left: 0.25rem;
  margin-right: 1rem;
  @media screen and (${CONSTANTS.SCREEN.MOBILE}) {
    margin: 0.5rem 0;
  }
`;

export const Icon = styled.img`
  height: 60px;
  margin: 0 0.5rem;
`;

export const MobileContainer = styled.div`
  width: ${MOBILE_CONTAINER.width};
  max-width: ${MOBILE_CONTAINER.maxWidth};
  text-align: center;
`;

export const MobileLegendText = styled(LegendText)<{ color: string }>`
  font-size: 2rem;
  margin-bottom: -0.6rem;
`;

export const MobileThickSlash = styled.div<{ color: string }>`
  width: 100%;
  height: 10px;
  margin-bottom: 2px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;

export const MobileThinSlash = styled.div<{ color: string }>`
  height: 2px;
  width: 100%;
  margin-top: 2px;
  margin-bottom: 3px;
  transform: skewX(-15deg);
  background-color: ${(props) => props.color};
`;
