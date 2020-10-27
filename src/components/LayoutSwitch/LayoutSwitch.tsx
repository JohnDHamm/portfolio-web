import React from 'react';
import { DesktopContainer, MobileContainer } from './LayoutSwitch.styles';

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
 * A component to conditionally render choice of components based on screen width
 */
export const LayoutSwitch: React.FC<LayoutSwitchProps> = ({
  desktopComponent,
  mobileComponent,
}) => {
  return (
    <>
      <DesktopContainer>{desktopComponent}</DesktopContainer>
      <MobileContainer>{mobileComponent}</MobileContainer>
    </>
  );
};
