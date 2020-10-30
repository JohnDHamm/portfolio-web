import { projectsData } from '../../data/projects';

export const getProject = (id: string): Project | null => {
  const foundProject = projectsData.find((proj) => id === proj.id);

  return foundProject ? foundProject : null;
};
