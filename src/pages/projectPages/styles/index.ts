import styled from 'styled-components';
import { COLORS, CONSTANTS, FONTS } from '../../../styles';

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
  /* border: 1px dashed grey; */
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${CONSTANTS.SCREEN.TABLET}) {
    width: 90%;
    max-width: 480px;
  }
`;

export const Logo = styled.img`
  width: 360px;
  margin-bottom: 1rem;

  @media screen and (${CONSTANTS.SCREEN.TABLET}) {
    width: 300px;
  }
`;

export const StyledTextBlock = styled.div`
  padding: 0.5rem 0;
  width: 100%;
  max-width: 800px;

  @media screen and (${CONSTANTS.SCREEN.TABLET}) {
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
