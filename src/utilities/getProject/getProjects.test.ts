import { getProject } from './getProject';
import { projectsData } from '../../data/projects';

const testProject = projectsData[0];

describe('getProject', () => {
  it('given an id, it returns a project', () => {
    const project = getProject(testProject.id);
    if (project) {
      expect(project.title).toBe(testProject.title);
    }
  });
});
