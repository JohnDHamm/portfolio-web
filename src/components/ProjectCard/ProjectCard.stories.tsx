import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProjectCard, ProjectCardProps } from './ProjectCard';
import {
  MOCK_PROJECT_1,
  MOCK_PROJECT_2,
} from '../../mocks/projects/mock_projects';

export default {
  title: 'components/ProjectCard',
  component: ProjectCard,
} as Meta;

const Template: Story<ProjectCardProps> = (args) => (
  <div style={{ paddingLeft: '2rem' }}>
    <ProjectCard {...args} />
  </div>
);

export const Unselected = Template.bind({});
Unselected.args = {
  isSelected: false,
  onCardClick: (id) => console.log('clicked:', id),
  onMoreClick: (id) => console.log('more:', id),
  project: MOCK_PROJECT_2,
};

export const Selected = Template.bind({});
Selected.args = {
  isSelected: true,
  onCardClick: (id) => console.log('clicked:', id),
  onMoreClick: (id) => console.log('more:', id),
  project: MOCK_PROJECT_2,
};

const TEST_PROJECT3: Project = {
  colors: {
    primary: '#bada55',
    secondary: 'navy',
  },
  bannerText: 'Some card title 3',
  description: [
    `We're coming! Come on! Come on! Oh, Artoo, hurry! My goodness! Artoo, why did you have to be so brave? Well, I suppose I could hotwire this thing. I'll cover you.`,
    `Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure.`,
  ],
  id: 'project3',
  title: 'PROJECT 3 TITLE',
};

export const MultipleTest: React.FC = () => {
  const [selectedCard, setSelectedCard] = React.useState('');
  const handleCardSelection = (id: string) => {
    if (id === selectedCard) {
      setSelectedCard('');
    } else {
      setSelectedCard(id);
    }
  };

  return (
    <>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li>
          <ProjectCard
            isSelected={selectedCard === MOCK_PROJECT_1.id}
            onCardClick={handleCardSelection}
            onMoreClick={(id) => console.log('more:', id)}
            project={MOCK_PROJECT_1}
          />
        </li>
        <li>
          <ProjectCard
            isSelected={selectedCard === MOCK_PROJECT_2.id}
            onCardClick={handleCardSelection}
            onMoreClick={(id) => console.log('more:', id)}
            project={MOCK_PROJECT_2}
          />
        </li>
        <li>
          <ProjectCard
            isSelected={selectedCard === TEST_PROJECT3.id}
            onCardClick={handleCardSelection}
            onMoreClick={(id) => console.log('more:', id)}
            project={TEST_PROJECT3}
          />
        </li>
      </ul>
    </>
  );
};
