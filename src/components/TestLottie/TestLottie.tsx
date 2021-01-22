import React from 'react';
import lottie from 'lottie-web';
import data from './data.json';

export const TestLottie = () => {
  const animElementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (animElementRef.current !== null) {
      lottie.loadAnimation({
        animationData: data,
        container: animElementRef.current,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
      });
    }
  }, []);

  return <div ref={animElementRef} />;
};
