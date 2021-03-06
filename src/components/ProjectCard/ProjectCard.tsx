import React from 'react';
import {
  BannerText,
  Container,
  DescriptionText,
  MoreButton,
  MotionButtonBlock,
  MotionDescriptionBlock,
  MotionMainImage,
  MotionScreencapsImage,
  MotionTitle,
  MotionWrapper,
  TitleBlock,
} from './ProjectCard.styles';
import { CONSTANTS } from '../../styles';

const { PROJECT_CARD_SIZE, PROJECT_CARD_TRANSITION } = CONSTANTS;

export interface ProjectCardProps {
  /**
   * Is this project selected? (opens the card)
   */
  isSelected: boolean;
  /**
   * Callback for clicking on card
   */
  onCardClick: (id: string) => void;
  /**
   * Callback for clicking on "SEE MORE" button
   */
  onMoreClick: (id: string) => void;
  /**
   * Project data (type: Project)
   */
  project: Project;
}

type ContainerSize = {
  y: number;
  width: number;
  height: number;
  skewX: number;
};

const initialContainerSize: ContainerSize = {
  y: 0,
  width: PROJECT_CARD_SIZE.CLOSED.width,
  height: PROJECT_CARD_SIZE.CLOSED.height,
  skewX: -15,
};

const openContainerSize: ContainerSize = {
  y: -10,
  width: PROJECT_CARD_SIZE.OPEN.width,
  height: PROJECT_CARD_SIZE.OPEN.height,
  skewX: -15,
};

/**
 * Animated project card component
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  isSelected,
  onCardClick,
  onMoreClick,
  project,
}) => {
  const {
    bannerText,
    cardImage,
    colors,
    description,
    id,
    screencaps,
    title,
  } = project;

  const handleMore = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isSelected) {
      event.stopPropagation();
      onMoreClick(id);
    }
  };

  const renderDescription = (): JSX.Element[] => {
    const lines: JSX.Element[] = [];
    description.forEach((line, idx) => {
      lines.push(<DescriptionText key={idx}>{line}</DescriptionText>);
    });
    return lines;
  };

  return (
    <MotionWrapper
      initial={initialContainerSize}
      animate={isSelected ? openContainerSize : initialContainerSize}
      transition={PROJECT_CARD_TRANSITION}
      onClick={() => onCardClick(id)}
    >
      <Container bgColor={colors.primary}>
        {cardImage && (
          <MotionMainImage
            src={cardImage}
            initial={false}
            animate={{ opacity: isSelected ? 0.2 : 0.9, skewX: 15, x: -40 }}
          />
        )}
        <TitleBlock>
          <MotionTitle
            initial={false}
            transition={PROJECT_CARD_TRANSITION}
            animate={{ y: isSelected ? -770 : 0, skewX: -15 }}
          >
            {title.toUpperCase()}
          </MotionTitle>
        </TitleBlock>
        <MotionDescriptionBlock
          initial={false}
          animate={{ opacity: isSelected ? 1 : 0, skewX: 15 }}
        >
          <BannerText>{bannerText}</BannerText>
          {renderDescription()}
        </MotionDescriptionBlock>
        {screencaps && (
          <MotionScreencapsImage
            src={screencaps}
            initial={false}
            animate={{
              opacity: isSelected ? 1 : 0,
              skewX: 15,
              y: isSelected ? 0 : 100,
            }}
            transition={PROJECT_CARD_TRANSITION}
          ></MotionScreencapsImage>
        )}
        <MotionButtonBlock
          initial={false}
          animate={{
            opacity: isSelected ? 1 : 0,
          }}
        >
          <MoreButton onClick={handleMore} color={colors.primary}>
            SEE MORE
          </MoreButton>
        </MotionButtonBlock>
      </Container>
    </MotionWrapper>
  );
};
