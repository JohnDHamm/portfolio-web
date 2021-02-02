import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 0.5rem 1.25rem;
  transform: skewX(-15deg);

  &:hover {
    background-color: ${COLORS.BLACK};

    & img {
      filter: invert(100%);
    }

    & p {
      color: ${COLORS.WHITE};
    }
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  transform: skewX(15deg);
  justify-content: center;
`;

export const GitHubLogo = styled.img`
  height: 32px;
  width: 32px;
  margin: 0 0.5rem;
`;

export const StyledText = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-family: ${FONTS.PRIMARY};
  color: ${COLORS.BLACK};
  padding-top: 0.25rem;
`;
