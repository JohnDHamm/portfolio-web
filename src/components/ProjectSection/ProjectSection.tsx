import React from 'react';
import { Container, MotionContainer, StyledUL } from './ProjectSection.styles';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { CONSTANTS } from '../../styles';
import { SectionPresenter } from '../SectionPresenter/SectionPresenter';

const { PROJECT_CARD_TRANSITION } = CONSTANTS;

export interface ProjectSectionProps {
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
export const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
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
    <Container>
      <MotionContainer
        initial={false}
        animate={{ x: leftPosition }}
        transition={PROJECT_CARD_TRANSITION}
      >
        <SectionPresenter legend="PROJECTS" color="#CCC">
          <StyledUL>
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard
                  isSelected={selectedCard === project.id}
                  onCardClick={handleCardSelection}
                  onMoreClick={() => console.log('more', project.id)}
                  project={project}
                />
              </li>
            ))}
          </StyledUL>
        </SectionPresenter>
      </MotionContainer>
    </Container>
  );
};
