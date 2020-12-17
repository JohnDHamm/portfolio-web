import styled from 'styled-components';
import { COLORS, CONSTANTS, FONTS } from '../../styles';

export const StyledPageWrapper = styled.div<{ bgColor: string }>`
  position: relative;
  min-height: 100vh;
  padding: 2rem 0;
  background-color: ${(props) => props.bgColor};

  @media screen and (max-width: 1024px) {
    padding: 1rem 0;
  }
`;

export const CenteredContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${CONSTANTS.SCREEN.TABLET}) {
    max-width: 600px;
  }

  @media screen and (${CONSTANTS.SCREEN.MOBILE}) {
    width: 90%;
    max-width: 480px;
  }
`;

export const Logo = styled.img<{ width: number }>`
  width: ${(props) => props.width + 'px'};
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (${CONSTANTS.SCREEN.MOBILE}) {
    width: 80vw;
  }
`;

export const StyledTextBlock = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  max-width: 800px;

  @media screen and (${CONSTANTS.SCREEN.TABLET}) {
    max-width: 480px;
    padding: 0.25rem 0;
  }

  & p {
    margin: 0;
    color: ${COLORS.WHITE};
    font-size: 1.25rem;
    font-family: ${FONTS.PRIMARY};

    @media screen and (${CONSTANTS.SCREEN.TABLET}) {
      font-size: 1rem;
    }
  }
`;

export const ContentWithMargins = styled.div<{ top: string; bottom: string }>`
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
`;

export const HomeLink = styled.a`
  font-family: ${FONTS.PRIMARY};
  font-size: 1rem;
  color: ${COLORS.WHITE};
  text-decoration: none;
`;