import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 0.25rem 1rem;
  transform: skewX(-15deg);
  text-align: center;

  &:hover {
    background-color: ${COLORS.BLACK};

    & p {
      color: ${COLORS.WHITE};
    }
  }
`;

export const StyledText = styled.p`
  transform: skewX(15deg);
  margin: 0;
  font-size: 1.25rem;
  font-family: ${FONTS.PRIMARY};
  color: ${COLORS.BLACK};
`;
