import styled, { keyframes } from 'styled-components';
import { FONTS } from '../../styles';

const logoContainerAnim = keyframes`
  from { width: 600px }
  82% { width: 600px }
  100% { width: 200px }
`;

const mobileLogoContainerAnim = keyframes`
  from { width: 90% }
  82% { width: 90% }
  100% { width: 65% }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #000;
  padding: 0.5rem 0;
`;

export const AnimLogoContainer = styled.div`
  animation: ${logoContainerAnim} 5.5s ease-in-out both;

  @media screen and (max-width: 767px) {
    animation: ${mobileLogoContainerAnim} 5.5s ease-in-out both;
  }
`;

export const LogoContainer = styled.div`
  width: 200px;
  padding: 0.5rem 0;

  @media screen and (max-width: 767px) {
    width: 65%;
  }
`;

const SectionContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding-top: 0;
    padding-bottom: 1rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

export const AboutContainer = styled(SectionContainer)`
  background-color: #222;
  @media screen and (max-width: 1024px) {
  }
`;

export const ContentContainer = styled.div`
  max-width: 735px;
  padding: 2rem 2.5rem 2rem 4rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem 0.5rem;
  }
`;

export const ContentText = styled.p`
  font-family: ${FONTS.PRIMARY};
  font-size: 1.25rem;
  color: #fff;
  margin: 0;
  padding-bottom: 0.75rem;
`;

export const AboutTechWrapper = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 1024px) {
    height: 60px;
  }
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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  @media screen and (max-width: 1024px) {
    left: 0px;
    height: 40px;
    margin-top: 0.5rem;
  }
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

  @media screen and (max-width: 1024px) {
    height: 40px;
  }
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
  @media screen and (max-width: 1024px) {
    padding-top: 0.5rem;
  }
`;

export const ContactContent = styled.div`
  max-width: 755px;
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-self: center;
  @media screen and (max-width: 1024px) {
    margin: 1rem 0;
  }
`;

export const ContactItem = styled.div`
  margin: 0 2rem;
  text-align: center;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 1024px) {
    opacity: 0.75;
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
