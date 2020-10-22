import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProjectSection, ProjectSectionProps } from './ProjectSection';
import {
  MOCK_PROJECT_1,
  MOCK_PROJECT_2,
  MOCK_PROJECT_3,
  MOCK_PROJECT_4,
  MOCK_PROJECT_5,
} from '../../mocks/projects/mock_projects';

export default {
  title: 'components/ProjectSection',
  component: ProjectSection,
} as Meta;

const Template: Story<ProjectSectionProps> = (args) => (
  <div
    style={{
      width: '100%',
      border: '1px dotted lightgrey',
      overflowX: 'hidden',
      // backgroundColor: 'black',
    }}
  >
    <ProjectSection {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  projects: [
    MOCK_PROJECT_1,
    MOCK_PROJECT_2,
    MOCK_PROJECT_3,
    MOCK_PROJECT_4,
    MOCK_PROJECT_5,
  ],
};
