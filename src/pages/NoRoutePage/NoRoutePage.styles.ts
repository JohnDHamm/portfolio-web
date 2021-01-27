import styled, { keyframes } from 'styled-components';
import { FONTS } from '../../styles';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const AnimContainer = styled.div`
  width: 75%;
  max-width: 600px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% { opacity: 1;}
`;

export const MessageBox = styled.div`
  height: 6rem;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageText = styled.p`
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 1.5rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const Message = styled(MessageText)`
  color: #ddd;
  animation: ${fadeIn} 2s;
`;

export const FixButton = styled.div`
  margin-top: 1rem;
  height: 40px;
  width: 200px;
  border: 1px solid;
  border-color: $bada55;
  border-radius: 20px;
  text-align: center;
  animation: ${fadeIn} 2s;
  color: #bada55;

  &:hover {
    background-color: #bada55;
    color: #000;
    cursor: pointer;
  }

  &:active {
    background-color: #000;
    border-color: #fff;
    color: #fff;
  }
`;

export const FixMessage = styled(MessageText)`
  padding: 0.25rem;
`;
