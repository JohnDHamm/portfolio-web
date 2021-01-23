import React from 'react';
import Lottie from 'react-lottie-player';
import toggleData from '../../assets/animations/toggle_test.json';
import { Container, ToggleButton } from './TestToggle.styles';

interface TestToggleProps {}

/**
 *
 * Animated toggle Lottie component (testing)
 */
export const TestToggle: React.FC<TestToggleProps> = () => {
  const segmentPositions = [0, 13, 26, 39];

  const [play, setPlay] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<number>(1);
  const [segmentStart, setSegmentStart] = React.useState<number>(
    segmentPositions[0]
  );
  const [segmentEnd, setSegmentEnd] = React.useState<number>(
    segmentPositions[0]
  );
  const [direction, setDirection] = React.useState<number>(1);

  const segment = [segmentStart, segmentEnd];

  const onToggle = (buttonNum: number) => {
    if (buttonNum === selected) {
      return;
    } else if (Math.abs(buttonNum - selected) !== 1) {
      // jump past middle button
      if (buttonNum > selected) {
        // 1 to 3
        setSegmentStart(segmentPositions[3]);
        setSegmentEnd(segmentPositions[2]);
        setDirection(-1);
      } else {
        // 3 to 1
        setSegmentStart(segmentPositions[2]);
        setSegmentEnd(segmentPositions[3]);
        setDirection(1);
      }
      setPlay(true);
      setSelected(buttonNum);
    } else {
      const direction = buttonNum < selected ? -1 : 1;
      setDirection(direction);
      setSegmentEnd(segmentPositions[buttonNum - 1]);
      setSegmentStart(segmentPositions[selected - 1]);
      setPlay(true);
      setSelected(buttonNum);
    }
  };

  const onComplete = () => {
    // console.log('done');
    setPlay(false);
  };

  return (
    <Container>
      <Lottie
        loop={false}
        animationData={toggleData}
        play={play}
        onComplete={onComplete}
        segments={segment}
        direction={direction}
      />
      <ToggleButton style={{ left: '20px' }} onClick={() => onToggle(1)} />
      <ToggleButton style={{ left: '170px' }} onClick={() => onToggle(2)} />
      <ToggleButton style={{ right: '20px' }} onClick={() => onToggle(3)} />
    </Container>
  );
};
