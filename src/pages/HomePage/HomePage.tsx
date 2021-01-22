import React from 'react';
import {
  AboutContainer,
  AboutTechContainerOne,
  AboutTechContainerTwo,
  AboutTechContainerThree,
  AboutTechContainerFour,
  AboutTechIcon,
  AboutTechWrapper,
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
  LogoContainer,
} from './HomePage.styles';
import {
  AnimatedPageTransition,
  AnimatedLogo,
  ProjectSection,
  SectionPresenter,
  SmallSectionPresenter,
} from '../../components';
import { projectsData } from '../../data/projects';
import { getProject } from '../../utilities';
import { useHistory } from 'react-router-dom';
import { TECH_ICONS } from '../../assets/images/tech_icons';
import GitHub_Logo from '../../assets/images/GitHub-Mark-120px-plus-white.png';
import LinkedIn_Logo from '../../assets/images/linkedIn_logo.png';
import EmailIcon from '../../assets/images/email_icon.png';
const {
  ADOBE_AE,
  ADOBE_AI,
  ADOBE_PS,
  ADOBE_XD,
  ARDUINO,
  AWS_S3,
  CYPRESS,
  EXPO,
  EXPRESS,
  GIT,
  HEROKU,
  JEST,
  JIRA,
  JS_ES6,
  LOTTIE,
  MONGO_DB,
  NODE_JS,
  POSTGRES,
  REACT,
  REACT_NATIVE,
  REDUX,
  SOCKET_IO,
  STYLED_COMPONENTS,
  TYPESCRIPT,
} = TECH_ICONS;

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
      <TopBar>
        <LogoContainer>
          <AnimatedLogo onComplete={() => console.log('logo animation done')} />
        </LogoContainer>
      </TopBar>
      <AboutContainer>
        <SectionPresenter legend="ABOUT" color="#EEE">
          <ContentContainer>
            <ContentText>
              App production from start to finish for web sites and mobile
              devices. Design for the user with functionality in mind. Built
              with latest technology, with stability of code, future changes and
              feature additions in mind. Interactivity and animation pulled from
              past experience in animation and media production.
            </ContentText>
            <ContentText>
              Take a look at some past projects and the production process below
              and let me know what you think!
            </ContentText>
            <ContentText style={{ fontStyle: 'italic' }}>
              Some of the technologies I use:
            </ContentText>
            <AboutTechWrapper>
              <AboutTechContainerOne>
                <AboutTechIcon src={REACT.URL} alt={REACT.ALT} />
                <AboutTechIcon src={TYPESCRIPT.URL} alt={TYPESCRIPT.ALT} />
                <AboutTechIcon src={JEST.URL} alt={JEST.ALT} />
                <AboutTechIcon src={REACT_NATIVE.URL} alt={REACT_NATIVE.ALT} />
                <AboutTechIcon src={EXPO.URL} alt={EXPO.ALT} />
                <AboutTechIcon src={ADOBE_XD.URL} alt={ADOBE_XD.ALT} />
              </AboutTechContainerOne>
              <AboutTechContainerTwo>
                <AboutTechIcon
                  src={STYLED_COMPONENTS.URL}
                  alt={STYLED_COMPONENTS.ALT}
                />
                <AboutTechIcon src={REDUX.URL} alt={REDUX.ALT} />
                <AboutTechIcon src={JS_ES6.URL} alt={JS_ES6.ALT} />
                <AboutTechIcon src={CYPRESS.URL} alt={CYPRESS.ALT} />
                <AboutTechIcon src={GIT.URL} alt={GIT.ALT} />
                <AboutTechIcon src={JIRA.URL} alt={JIRA.ALT} />
              </AboutTechContainerTwo>
              <AboutTechContainerThree>
                <AboutTechIcon src={NODE_JS.URL} alt={NODE_JS.ALT} />
                <AboutTechIcon src={EXPRESS.URL} alt={EXPRESS.ALT} />
                <AboutTechIcon src={MONGO_DB.URL} alt={MONGO_DB.ALT} />
                <AboutTechIcon src={AWS_S3.URL} alt={AWS_S3.ALT} />
                <AboutTechIcon src={HEROKU.URL} alt={HEROKU.ALT} />
                <AboutTechIcon src={POSTGRES.URL} alt={POSTGRES.ALT} />
              </AboutTechContainerThree>
              <AboutTechContainerFour>
                <AboutTechIcon src={ADOBE_PS.URL} alt={ADOBE_PS.ALT} />
                <AboutTechIcon src={ADOBE_AI.URL} alt={ADOBE_AI.ALT} />
                <AboutTechIcon src={ADOBE_AE.URL} alt={ADOBE_AE.ALT} />
                <AboutTechIcon src={LOTTIE.URL} alt={LOTTIE.ALT} />
                <AboutTechIcon src={SOCKET_IO.URL} alt={SOCKET_IO.ALT} />
                <AboutTechIcon src={ARDUINO.URL} alt={ARDUINO.ALT} />
              </AboutTechContainerFour>
            </AboutTechWrapper>
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
