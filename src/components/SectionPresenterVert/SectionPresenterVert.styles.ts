import styled from 'styled-components';
import { FONTS } from '../../styles';

export const LegendText = styled.p<{ color: string }>`
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 4rem;
  color: ${(props) => props.color};
`;

export const MobileContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const MobileLegendText = styled(LegendText)<{ color: string }>`
  font-size: 3.5rem;
  margin-bottom: -1rem;
`;

export const MobileThickSlash = styled.div<{ color: string }>`
  width: 100%;
  height: 10px;
  margin-bottom: 2px;
  background-color: ${(props) => props.color};
`;

export const MobileThinSlash = styled.div<{ color: string }>`
  height: 2px;
  width: 100%;
  margin-top: 2px;
  margin-bottom: 3px;
  background-color: ${(props) => props.color};
`;
