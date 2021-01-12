import React from 'react';
import {
  AboutContainer,
  AboutTechContainer,
  AboutTechIcon,
  ContactContainer,
  ContactContent,
  ContentContainer,
  ContentText,
  ContactItem,
  ContactItemImage,
  ContactItemText,
  ProjectsContainer,
  ProcessContainer,
  TopBar,
} from './HomePage.styles';
import {
  AnimatedPageTransition,
  ProjectSection,
  SectionPresenter,
  SmallSectionPresenter,
} from '../../components';
import { projectsData } from '../../data/projects';
import { getProject } from '../../utilities';
import { useHistory } from 'react-router-dom';
import GitHub_Logo from '../../assets/images/GitHub-Mark-120px-plus-white.png';
import LinkedIn_Logo from '../../assets/images/linkedIn_logo.png';
import EmailIcon from '../../assets/images/email_icon.png';

export const HomePage: React.FC = () => {
  const history = useHistory();
  const [startTransition, setStartTransition] = React.useState<boolean>(false);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );

  const handleMore = (id: string) => {
    const project = getProject(id);
    if (project) {
      setSelectedProject(project);
    }
    setStartTransition(true);
    setTimeout(() => history.push(`/projects/${id}`), 600);
  };

  return (
    <div style={{ position: 'relative' }}>
      <AnimatedPageTransition
        isVisible={startTransition}
        color={selectedProject ? selectedProject.colors.primary : undefined}
        type="start"
      />
      <TopBar></TopBar>
      <AboutContainer>
        <SectionPresenter legend="ABOUT" color="#EEE">
          <ContentContainer>
            <ContentText>
              This is something that goes in the about section. Here is where I
              will blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah,
            </ContentText>
            <ContentText>
              This is something that goes in the about section. Here is where I
              will blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah,
            </ContentText>
            <AboutTechContainer>
              <AboutTechIcon>tech icon</AboutTechIcon>
              <AboutTechIcon>tech icon</AboutTechIcon>
            </AboutTechContainer>
          </ContentContainer>
        </SectionPresenter>
      </AboutContainer>
      <ProjectsContainer>
        <ProjectSection projects={projectsData} onSeeMore={handleMore} />
      </ProjectsContainer>
      <ProcessContainer>
        <SectionPresenter legend="PROCESS" color="#EEE">
          <ContentContainer>
            <ContentText>
              This is something that goes in the process section. Here is where
              I will blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah,
              blah, blah, blah, blah, blah, blah, blah,
            </ContentText>
          </ContentContainer>
        </SectionPresenter>
      </ProcessContainer>
      <ContactContainer>
        <SmallSectionPresenter legend="CONTACT" color="#EEE">
          <ContactContent>
            <a href="mailto:johndhammcodes@gmail.com?subject=Contact from johndhammcodes.com">
              <ContactItem>
                <ContactItemImage src={EmailIcon} alt="email" />
                <ContactItemText>email</ContactItemText>
              </ContactItem>
            </a>
            <a
              href="https://github.com/JohnDHamm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactItem>
                <ContactItemImage src={GitHub_Logo} alt="GitHub" />
                <ContactItemText>GitHub</ContactItemText>
              </ContactItem>
            </a>
            <a
              href="https://www.linkedin.com/in/johndhamm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ContactItem>
                <ContactItemImage src={LinkedIn_Logo} alt="linkedIn" />
                <ContactItemText>linkedIn</ContactItemText>
              </ContactItem>
            </a>
          </ContactContent>
        </SmallSectionPresenter>
      </ContactContainer>
    </div>
  );
};
