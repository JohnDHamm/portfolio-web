import styled, { keyframes } from 'styled-components';
import { CONSTANTS } from '../../../styles';
const { SCREEN } = CONSTANTS;

export const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  width: 480px;
  justify-content: center;

  @media screen and (${SCREEN.MOBILE}) {
    width: 100%;
  }
`;

const arc = keyframes`
  0% {
    transform: rotate(-45deg);
    left: 0;
    bottom: 0;
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  20% {
    bottom: 45px;
  }
  25% {
    bottom: 50px;
  }
  30% {
    bottom: 45px;
  }
  45% {
    opacity: 1;
  }
  50% {
    transform: rotate(45deg);
    left: 380px;
    bottom: 0;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const FootballWrapper = styled.div`
  position: absolute;
  width: 100px;
  animation: ${arc} 2.5s infinite linear;

  @media screen and (${SCREEN.MOBILE}) {
    display: none;
  }
`;
