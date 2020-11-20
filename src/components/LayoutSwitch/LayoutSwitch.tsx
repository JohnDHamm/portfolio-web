import React from 'react';
import { useViewport } from '../../hooks';

export interface LayoutSwitchProps {
  /**
   * Component to be used on desktop screen width (1025px minimum)
   */
  desktopComponent: JSX.Element;
  /**
   * Component to be used on mobile screen width (less than 1025px)
   */
  mobileComponent: JSX.Element;
}

/**
 *
 * A component to conditionally render choice of components based on screen width - custom useViewport hook not working in storybook
 */
export const LayoutSwitch: React.FC<LayoutSwitchProps> = ({
  desktopComponent,
  mobileComponent,
}) => {
  const { width } = useViewport();

  return width > 1024 ? desktopComponent : mobileComponent;
};
