import styled from 'styled-components';
import { COLORS, CONSTANTS, FONTS } from '../../styles';

const { SCREEN } = CONSTANTS;

export const Container = styled.div`
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.BLACK};
  padding: 0.5rem 2rem;
  transform: skewX(-15deg);

  &:hover {
    border: 1px solid ${COLORS.WHITE};
  }

  @media screen and (${SCREEN.TABLET}) {
    /* margin: 0.5rem 0; */
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  transform: skewX(15deg);
  flex-direction: column;
  align-items: center;

  @media screen and (${SCREEN.TABLET}) {
    flex-direction: row;
  }
`;

export const GitHubLogo = styled.img`
  width: 32px;
`;

export const StyledText = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-family: ${FONTS.PRIMARY};
  color: ${COLORS.BLACK};
  padding-top: 0.25rem;
  padding-left: 0;

  @media screen and (${SCREEN.TABLET}) {
    padding-left: 0.25rem;
    padding-top: 0;
  }
`;
