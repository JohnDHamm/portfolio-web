import React from 'react';
import { viewportContext } from '../../contexts';

export const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);

  return { width, height };
};
