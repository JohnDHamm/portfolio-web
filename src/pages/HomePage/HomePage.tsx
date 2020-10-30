import React from 'react';
import { ContentContainer, ProjectsContainer } from './HomePage.styles';
import { AnimatedPageTransition, ProjectSection } from '../../components';
import { projectsData } from '../../data/projects';
import { getProject } from '../../utilities';
import { useHistory } from 'react-router-dom';

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
      <ContentContainer>
        <ProjectsContainer>
          <ProjectSection projects={projectsData} onSeeMore={handleMore} />
        </ProjectsContainer>
      </ContentContainer>
    </div>
  );
};
