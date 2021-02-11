import { AnimatePresence } from 'framer-motion';
import React from 'react';
import {
  Caption,
  Container,
  NextNavButton,
  PrevNavButton,
  Screenshot,
} from './DesktopSlideshow.styles';
import { SlideshowNavButton } from '../SlideshowNavButton/SlideshowNavButton';

export interface DesktopSlideshowProps {
  /**
   * Array of captions
   */
  captions?: string[];
  /**
   * Array of images
   */
  images: any[];
  /**
   * Size of slideshow images
   */
  type: 'laptop' | 'desktop';
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const captionVariants = {
  enter: {
    y: 10,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    y: 10,
    opacity: 0,
  },
};

/**
 * Slideshow component for laptop or desktop screenshots
 */
export const DesktopSlideshow: React.FC<DesktopSlideshowProps> = ({
  captions = [],
  images,
  type,
}) => {
  const [[imageIndex, direction], setImageIndex] = React.useState<number[]>([
    0,
    0,
  ]);
  const [height, setHeight] = React.useState(0);

  const navigate = (newDirection: number) =>
    setImageIndex([imageIndex + newDirection, newDirection]);

  const measuredRef = React.useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <Container ref={measuredRef} type={type}>
        <AnimatePresence initial={false} custom={direction}>
          <Screenshot
            key={imageIndex}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          />
          {captions.length > 0 && (
            <Caption
              key={`caption-${imageIndex}`}
              variants={captionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              height={height}
            >
              {captions[imageIndex]}
            </Caption>
          )}
        </AnimatePresence>
        {imageIndex > 0 && (
          <PrevNavButton>
            <SlideshowNavButton width={36} onClick={() => navigate(-1)} />
          </PrevNavButton>
        )}
        {imageIndex < images.length - 1 && (
          <NextNavButton>
            <SlideshowNavButton width={36} onClick={() => navigate(1)} />
          </NextNavButton>
        )}
      </Container>
    </>
  );
};
