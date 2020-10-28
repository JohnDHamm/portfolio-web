import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MobileProjectCard, MobileProjectCardProps } from './MobileProjectCard';
import {
  MOCK_PROJECT_1,
  MOCK_PROJECT_2,
} from '../../mocks/projects/mock_projects';

export default {
  title: 'components/MobileProjectCard',
  component: MobileProjectCard,
} as Meta;

const Template: Story<MobileProjectCardProps> = (args) => (
  <div style={{ marginLeft: '2rem', width: 480, border: '1px dashed grey' }}>
    <MobileProjectCard {...args} />
  </div>
);

export const Unselected = Template.bind({});
Unselected.args = {
  isSelected: false,
  onCardClick: (id) => console.log('clicked:', id),
  onMoreClick: (id) => console.log('more:', id),
  project: MOCK_PROJECT_1,
};

export const Selected = Template.bind({});
Selected.args = {
  isSelected: true,
  onCardClick: (id) => console.log('clicked:', id),
  onMoreClick: (id) => console.log('more:', id),
  project: MOCK_PROJECT_1,
};

const TEST_PROJECT3: Project = {
  colors: {
    primary: '#bada55',
    secondary: 'navy',
  },
  description: [
    `We're coming! Come on! Come on! Oh, Artoo, hurry! My goodness! Artoo, why did you have to be so brave? Well, I suppose I could hotwire this thing. I'll cover you.`,
    `Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.`,
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
    <div style={{ marginLeft: '2rem', width: 360, border: '1px dashed grey' }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li>
          <MobileProjectCard
            isSelected={selectedCard === MOCK_PROJECT_1.id}
            onCardClick={handleCardSelection}
            onMoreClick={(id) => console.log('more:', id)}
            project={MOCK_PROJECT_1}
          />
        </li>
        <li>
          <MobileProjectCard
            isSelected={selectedCard === MOCK_PROJECT_2.id}
            onCardClick={handleCardSelection}
            onMoreClick={(id) => console.log('more:', id)}
            project={MOCK_PROJECT_2}
          />
        </li>
        <li>
          <MobileProjectCard
            isSelected={selectedCard === TEST_PROJECT3.id}
            onCardClick={handleCardSelection}
            onMoreClick={(id) => console.log('more:', id)}
            project={TEST_PROJECT3}
          />
        </li>
      </ul>
    </div>
  );
};
