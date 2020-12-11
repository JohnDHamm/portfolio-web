import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  ProjectPageTemplate,
  ProjectPageTemplateProps,
} from './ProjectPageTemplate';

import DDDlogo from '../../data/projects/diddodone/diddodone_logo.png';

export default {
  title: 'components/ProjectPageTemplate',
  component: ProjectPageTemplate,
} as Meta;

const Template: Story<ProjectPageTemplateProps> = (args) => (
  <ProjectPageTemplate {...args}>
    <div>children go here</div>
  </ProjectPageTemplate>
);

export const Default = Template.bind({});
Default.args = {
  projectColor: '#bada55',
  logo: {
    src: DDDlogo,
    alt: 'Did Do Done logo',
    width: 360,
  },
  mainText:
    "Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
};
