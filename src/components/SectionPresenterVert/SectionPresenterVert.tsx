import React from 'react';
import {
  MobileContainer,
  MobileLegendText,
  MobileThickSlash,
  MobileThinSlash,
} from './SectionPresenterVert.styles';

export interface SectionPresenterVertProps {
  /**
   * Color for legend text and lines
   */
  color?: string;
  /**
   * Text for section legend
   */
  legend: string;
}

/**
 * A component to wrap a section for the home page
 */
export const SectionPresenterVert: React.FC<SectionPresenterVertProps> = ({
  children,
  color = 'black',
  legend,
}) => {
  return (
    <MobileContainer>
      <MobileLegendText color={color}>{legend}</MobileLegendText>
      <MobileThickSlash color={color} />
      <MobileThinSlash color={color} />
      {children}
      <MobileThinSlash color={color} />
    </MobileContainer>
  );
};
