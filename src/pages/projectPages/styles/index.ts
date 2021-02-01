import styled from 'styled-components';
import { COLORS, CONSTANTS, FONTS } from '../../../styles';

export const ContentWithMargins = styled.div<{ top: string; bottom: string }>`
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
`;

export const PrivacyPageContainer = styled.div`
  margin: 1rem auto 2rem auto;
  max-width: 800px;
`;

export const TextBlock = styled.p`
  margin-bottom: 1rem;
  font-family: ${FONTS.PRIMARY};
  font-size: 1.25rem;
  color: ${COLORS.WHITE};
  max-width: 800px;

  @media screen and (${CONSTANTS.SCREEN.TABLET}) {
    max-width: 480px;
  }
`;
