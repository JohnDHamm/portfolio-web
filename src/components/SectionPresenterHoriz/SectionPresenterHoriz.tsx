import React from 'react';
import {
  LegendBlock,
  LegendText,
  LegendTextBlock,
  ThickSlash,
  ThinSlash,
} from './SectionPresenterHoriz.styles';

export interface SectionPresenterHorizProps {
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
export const SectionPresenterHoriz: React.FC<SectionPresenterHorizProps> = ({
  children,
  color = 'black',
  legend,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      <LegendBlock>
        <LegendTextBlock>
          <LegendText color={color}>{legend}</LegendText>
        </LegendTextBlock>
        <ThickSlash color={color} />
        <ThinSlash color={color} />
      </LegendBlock>
      {children}
      <ThinSlash color={color} />
    </div>
  );
};
