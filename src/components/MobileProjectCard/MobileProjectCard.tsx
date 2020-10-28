import React from 'react';
import {
  Container,
  MotionMainImage,
  MoreButton,
  MotionButtonBlock,
  MotionWrapper,
  MotionScreencapsImage,
  MotionDescriptionBlock,
  MotionTitle,
  DescriptionText,
} from './MobileProjectCard.styles';
import { CONSTANTS } from '../../styles';

const { MOBILE_PROJECT_CARD_SIZE, PROJECT_CARD_TRANSITION } = CONSTANTS;

export interface MobileProjectCardProps {
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
  height: number;
  width: string;
  x: number;
  skewX: number;
};

const initialContainerSize: ContainerSize = {
  height: MOBILE_PROJECT_CARD_SIZE.CLOSED.height,
  width: MOBILE_PROJECT_CARD_SIZE.CLOSED.width,
  x: MOBILE_PROJECT_CARD_SIZE.SKEW_X_OFFSET / 2,
  skewX: -15,
};

const openContainerSize: ContainerSize = {
  height: MOBILE_PROJECT_CARD_SIZE.OPEN.height,
  width: MOBILE_PROJECT_CARD_SIZE.OPEN.width,
  x: 0,
  skewX: 0,
};

/**
 * Animated project card component for mobile/tablet device size
 */
export const MobileProjectCard: React.FC<MobileProjectCardProps> = ({
  isSelected,
  onCardClick,
  onMoreClick,
  project,
}) => {
  const {
    colors,
    description,
    id,
    mobileCardImage,
    screencaps,
    title,
  } = project;

  const { primary, secondary = 'white' } = colors;

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
      <Container bgColor={primary}>
        {mobileCardImage && (
          <MotionMainImage
            src={mobileCardImage}
            initial={false}
            animate={{
              opacity: isSelected ? 0.3 : 0.9,
              skewX: isSelected ? 0 : 15,
              x: '-50%',
            }}
          />
        )}
        <MotionTitle
          initial={false}
          transition={PROJECT_CARD_TRANSITION}
          animate={{ y: isSelected ? -290 : 0, skewX: isSelected ? 0 : 15 }}
          color={secondary}
        >
          {title.toUpperCase()}
        </MotionTitle>
        {screencaps && (
          <MotionScreencapsImage
            src={screencaps}
            initial={false}
            animate={{
              opacity: isSelected ? 1 : 0,
              y: isSelected ? 0 : 100,
              x: '-50%',
            }}
            transition={PROJECT_CARD_TRANSITION}
          ></MotionScreencapsImage>
        )}
        <MotionDescriptionBlock
          initial={false}
          animate={{ opacity: isSelected ? 1 : 0 }}
        >
          {renderDescription()}
        </MotionDescriptionBlock>
        <MotionButtonBlock
          initial={false}
          animate={{
            opacity: isSelected ? 1 : 0,
            skewX: -15,
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
