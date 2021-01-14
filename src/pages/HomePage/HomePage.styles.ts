import styled, { keyframes } from 'styled-components';
import { FONTS } from '../../styles';

export const TopBar = styled.div`
  width: 100%;
  background-color: #000;
  height: 4rem;
`;

const SectionContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 0 0.5rem;
  }
`;

export const AboutContainer = styled(SectionContainer)`
  background-color: #444;
`;

export const ContentContainer = styled.div`
  max-width: 755px;
  /* border: 1px solid red; */
  padding: 1rem 2.5rem;
`;

export const ContentText = styled.p`
  font-family: ${FONTS.PRIMARY};
  font-size: 1.25rem;
  color: #fff;
  margin: 0;
  padding-bottom: 0.5rem;
`;

export const AboutTechWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const techAnimOne = keyframes`
  0% { opacity: 0; }
  1% { opacity: 1; }
  24% { opacity: 1; }
  25% { opacity: 0; }
  100% { opacity: 0; }
`;

const techAnimTwo = keyframes`
  0% { opacity: 0; }
  25% { opacity: 0; }
  26% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 0; }
`;

const techAnimThree = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0; }
  51% { opacity: 1; }
  74% { opacity: 1; }
  75% { opacity: 0; }
  100% { opacity: 0; }
`;

const techAnimFour = keyframes`
  0% { opacity: 0; }
  75% { opacity: 0; }
  76% { opacity: 1; }
  99% { opacity: 1; }
  100% { opacity: 0; }
`;

const AboutTechContainer = styled.div`
  position: absolute;
  top: 0;
  left: -20px;
  width: 100%;
  height: 60px;
  display: flex;
  margin-top: 1rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  animation-duration: 24s;
  animation-iteration-count: infinite;
`;

export const AboutTechContainerOne = styled(AboutTechContainer)`
  animation-name: ${techAnimOne};
`;

export const AboutTechContainerTwo = styled(AboutTechContainer)`
  animation-name: ${techAnimTwo};
`;
export const AboutTechContainerThree = styled(AboutTechContainer)`
  animation-name: ${techAnimThree};
`;
export const AboutTechContainerFour = styled(AboutTechContainer)`
  animation-name: ${techAnimFour};
`;

export const AboutTechIcon = styled.img`
  height: 60px;
  margin-bottom: 0.5rem;
`;

export const ProjectsContainer = styled.div`
  background-color: #f8f8f8;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  width: 100%;
  overflow-x: hidden;
  @media screen and (max-width: 1024px) {
    max-width: 480px;
    margin: auto;
  }
`;

export const ProcessContainer = styled(SectionContainer)`
  background-color: #222;
`;

export const ContactContainer = styled(SectionContainer)`
  background-color: #000;
  padding-top: 1.5rem;
`;

export const ContactContent = styled.div`
  max-width: 755px;
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const ContactItem = styled.div`
  margin: 0 2rem;
  text-align: center;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`;

export const ContactItemImage = styled.img`
  width: 40px;
`;

export const ContactItemText = styled.p`
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 1rem;
  color: white;
`;
