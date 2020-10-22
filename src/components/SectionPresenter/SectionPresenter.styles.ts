import styled from 'styled-components';
import { CONSTANTS, FONTS } from '../../styles';

export const LegendBlock = styled.div`
  position: relative;
  display: flex;
  height: ${CONSTANTS.PROJECT_CARD_SIZE.CLOSED.height + 'px'};
`;

export const LegendTextBlock = styled.div`
  position: absolute;
  bottom: 110px;
  right: -105px;
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
