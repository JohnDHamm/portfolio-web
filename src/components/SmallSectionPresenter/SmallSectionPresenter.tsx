import React from 'react';
import {
  LegendBlock,
  LegendText,
  LegendTextBlock,
  MobileContainer,
  MobileLegendText,
  MobileThickSlash,
  MobileThinSlash,
  ThickSlash,
  ThinSlash,
} from './SmallSectionPresenter.styles';
import { LayoutSwitch } from '../LayoutSwitch/LayoutSwitch';

export interface SmallSectionPresenterProps {
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
export const SmallSectionPresenter: React.FC<SmallSectionPresenterProps> = ({
  children,
  color = 'black',
  legend,
}) => {
  return (
    <LayoutSwitch
      desktopComponent={
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
      }
      mobileComponent={
        <MobileContainer>
          <MobileLegendText color={color}>{legend}</MobileLegendText>
          <MobileThickSlash color={color} />
          <MobileThinSlash color={color} />
          {children}
          <MobileThinSlash color={color} />
        </MobileContainer>
      }
    />
  );
};
