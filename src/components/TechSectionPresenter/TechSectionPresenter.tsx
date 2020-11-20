import React from 'react';
import {
  ContentBlock,
  IconsBlock,
  Icon,
  LegendBlock,
  LegendText,
  LegendTextBlock,
  MobileContainer,
  MobileLegendText,
  MobileThickSlash,
  MobileThinSlash,
  ThickSlash,
  ThinSlash,
} from './TechSectionPresenter.styles';
import { GitHubButton } from '../GitHubButton/GitHubButton';
import { LayoutSwitch } from '../LayoutSwitch/LayoutSwitch';

export interface TechSectionPresenterProps {
  /**
   * Color for legend text and lines
   */
  color?: string;
  /**
   * url for github repo
   */
  githubURL?: string;
  /**
   * Tech Icon data (TechData[]) - includes image url and alt text
   */
  techIcons?: TechData[];
}

/**
 * A component for tech on a project page
 */
export const TechSectionPresenter: React.FC<TechSectionPresenterProps> = ({
  children,
  color = 'white',
  githubURL,
  techIcons = [],
}) => {
  const renderIcons = (): JSX.Element[] => {
    return techIcons.map((icon) => (
      <Icon src={icon.URL} alt={icon.ALT} key={icon.ALT} />
    ));
  };

  return (
    <LayoutSwitch
      desktopComponent={
        <div style={{ display: 'flex' }}>
          <LegendBlock>
            <LegendTextBlock>
              <LegendText color={color}>TECH</LegendText>
            </LegendTextBlock>
            <ThickSlash color={color} />
            <ThinSlash color={color} />
          </LegendBlock>
          <ContentBlock>
            {techIcons.length > 0 && <IconsBlock>{renderIcons()}</IconsBlock>}
            {githubURL && (
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <GitHubButton />
              </a>
            )}
          </ContentBlock>
          <ThinSlash color={color} />
        </div>
      }
      mobileComponent={
        <div style={{ width: '100%' }}>
          <MobileContainer>
            <MobileLegendText color={color}>TECH</MobileLegendText>
            <MobileThickSlash color={color} />
            <MobileThinSlash color={color} />
            <ContentBlock>
              {techIcons.length > 0 && <IconsBlock>{renderIcons()}</IconsBlock>}
              {githubURL && (
                <a
                  href={githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <GitHubButton />
                </a>
              )}
            </ContentBlock>
            <MobileThinSlash color={color} />
          </MobileContainer>
        </div>
      }
    />
  );
};
