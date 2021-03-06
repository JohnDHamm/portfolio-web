import React from 'react';
import {
  Container,
  MotionContainer,
  StyledLI,
  StyledMobileUL,
  StyledUL,
} from './ProjectSection.styles';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { CONSTANTS } from '../../styles';
import { SectionPresenterHoriz } from '../SectionPresenterHoriz/SectionPresenterHoriz';
import { SectionPresenterVert } from '../SectionPresenterVert/SectionPresenterVert';
import { LayoutSwitch } from '../LayoutSwitch/LayoutSwitch';
import { MobileProjectCard } from '../MobileProjectCard/MobileProjectCard';

const { PROJECT_CARD_TRANSITION } = CONSTANTS;

export interface ProjectSectionProps {
  /**
   * Callback for clicking on "See More" button on ProjectCard
   */
  onSeeMore: (id: string) => void;
  /**
   * Array of Projects
   */
  projects: Project[];
}

// TODO: refactor for any number of projects - using 5 for now

const LEFT_POSITIONS: number[] = [0, 340, 170, 0, -170, -340];

/**
 * A component that encapsulates ProjectCards
 */
export const ProjectSection: React.FC<ProjectSectionProps> = ({
  onSeeMore,
  projects,
}) => {
  const [selectedCard, setSelectedCard] = React.useState('');
  const [leftPosition, setLeftPosition] = React.useState(LEFT_POSITIONS[0]);

  const handleCardSelection = (id: string) => {
    if (id === selectedCard) {
      setSelectedCard('');
      setLeftPosition(LEFT_POSITIONS[0]);
    } else {
      setSelectedCard(id);
      const idx = projects.findIndex((project) => project.id === id);
      setLeftPosition(LEFT_POSITIONS[idx + 1]);
    }
  };

  return (
    <LayoutSwitch
      desktopComponent={
        <Container>
          <MotionContainer
            initial={false}
            animate={{ x: leftPosition }}
            transition={PROJECT_CARD_TRANSITION}
          >
            <SectionPresenterHoriz legend="PROJECTS" color="#aaa">
              <StyledUL>
                {projects.map((project) => (
                  <StyledLI key={project.id}>
                    <ProjectCard
                      isSelected={selectedCard === project.id}
                      onCardClick={handleCardSelection}
                      onMoreClick={onSeeMore}
                      project={project}
                    />
                  </StyledLI>
                ))}
              </StyledUL>
            </SectionPresenterHoriz>
          </MotionContainer>
        </Container>
      }
      mobileComponent={
        <SectionPresenterVert legend="PROJECTS" color="#CCC">
          <StyledMobileUL>
            {projects.map((project) => (
              <StyledLI key={project.id}>
                <MobileProjectCard
                  isSelected={selectedCard === project.id}
                  onCardClick={handleCardSelection}
                  onMoreClick={onSeeMore}
                  project={project}
                />
              </StyledLI>
            ))}
          </StyledMobileUL>
        </SectionPresenterVert>
      }
    />
  );
};
