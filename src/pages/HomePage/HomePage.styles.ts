import styled from 'styled-components';
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

export const AboutTechContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const AboutTechIcon = styled.div`
  height: 60px;
  width: 60px;
  margin: 0 0.5rem;
  border: 1px dashed #ccc;
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
  width: 50px;
`;

export const ContactItemText = styled.p`
  margin: 0;
  font-family: ${FONTS.PRIMARY};
  font-size: 1.2rem;
  color: white;
`;
