import React from 'react';
import { scrollContext } from '../../contexts';

export const useScroll = () => {
  const { y } = React.useContext(scrollContext);

  return { y };
};
