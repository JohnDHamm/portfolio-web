import styled from 'styled-components';
import { COLORS, CONSTANTS, FONTS } from '../../styles';

export const Container = styled.div`
  width: 800px;
  height: 450px;

  @media screen and (${CONSTANTS.SCREEN.TABLET}) {
    width: 90vw;
    height: 50.625vw;
    max-width: 480px;
    max-height: 270px;
  }
`;

export const Caption = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  text-align: center;
  font-family: ${FONTS.PRIMARY};
  font-size: 1rem;
  color: ${COLORS.WHITE};
`;
