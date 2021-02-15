import React from 'react';
import { Divider, PhaseText } from './NogPage.styles';
import {
  Button,
  DesktopSlideshow,
  GitHubButton,
  ProjectPageTemplate,
  TechSectionPresenter,
  VideoPlayer,
} from '../../../components';
import { ContentWithMargins, TextBlock } from '../styles';
import NogLogo from '../../../data/projects/nog/nog_logo.png';
import { TECH_ICONS } from '../../../assets/images/tech_icons';
import { COLORS } from '../../../styles';
import { Nog_Project } from '../../../data/projects';
import {
  NogDesignCaptions,
  NogDesignImages,
  NogPrototype2Captions,
  NogPrototype2Images,
} from '../../../data/projects/nog';

const { colors } = Nog_Project;

const title: ProjectTitle = {
  color: colors.secondary || 'white',
  text: 'Ugly XMAS sweater meets synchronized light display',
};

export const NogPage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: NogLogo, alt: 'Nog logo', width: 440 }}
      title={title}
      mainText="When you're a coding bootcamp student thinking of ideas for a final project, the stress can lead to some crazy ideas. And if the Christmas season is also approaching, things can really get fun!"
    >
      <Divider style={{ marginTop: '1rem' }} />
      <PhaseText>phase I</PhaseText>
      <ContentWithMargins top="0" bottom="1rem">
        <TextBlock>
          Completed as a "proof of concept", the first prototype uses an Arduino
          microprocessor, bluetooth module, RGB LEDs, and a whole lot of
          conductive thread. Code was developed for the Arduino to handle
          BluetoothLE signals from any Android device to trigger patterns of
          colors. Using basic music knowledge, a sequence was also programmed to
          synchronize with a popular holiday song. A prototype Android app was
          created using MIT App Inventor and functions as the controller,
          triggering the LED patterns, while also handling playback of audio
          files.
        </TextBlock>
      </ContentWithMargins>
      <VideoPlayer
        url="https://player.vimeo.com/video/200288091?color=ffffff&title=0&byline=0&portrait=0"
        caption="Nog prototype 1."
      />
      <ContentWithMargins top="3rem" bottom="1rem">
        <TechSectionPresenter
          color={COLORS.WHITE}
          techIcons={[TECH_ICONS.ARDUINO, TECH_ICONS.MIT_APP_INVENTOR]}
        />
      </ContentWithMargins>
      <ContentWithMargins top="0" bottom="2rem">
        <a
          href="https://github.com/JohnDHamm/nog-arduino"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <GitHubButton />
        </a>
      </ContentWithMargins>
      <Divider />
      <PhaseText>phase II</PhaseText>
      <TextBlock>
        The Nog ecosystem consists of a web app to create and edit your custom
        patterns (demo link below), a mobile app to access and interact with
        patterns (yours, the ones included with the app, and others shared from
        the Nog community), and the Nog controller to play the patterns and
        amaze your friends.
      </TextBlock>
      <ContentWithMargins top="2rem" bottom="4rem">
        <DesktopSlideshow
          images={NogDesignImages}
          captions={NogDesignCaptions}
          type="desktop"
        />
      </ContentWithMargins>
      <ContentWithMargins top="2rem" bottom="6rem">
        <DesktopSlideshow
          images={NogPrototype2Images}
          captions={NogPrototype2Captions}
          type="iphone"
        />
      </ContentWithMargins>
      <VideoPlayer
        url="https://player.vimeo.com/video/512007894?color=ffffff&title=0&byline=0&portrait=0"
        caption="Nog prototype 2."
      />
      <ContentWithMargins top="3rem" bottom="1rem">
        <TechSectionPresenter
          color={COLORS.WHITE}
          techIcons={[
            TECH_ICONS.REACT,
            TECH_ICONS.NODE_EXPRESS,
            TECH_ICONS.REACT_NATIVE,
            TECH_ICONS.EXPO,
            TECH_ICONS.LOTTIE,
          ]}
        />
      </ContentWithMargins>
      <ContentWithMargins top="0" bottom="2rem">
        <a
          href="https://github.com/JohnDHamm/nog-react"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <GitHubButton />
        </a>
      </ContentWithMargins>
      <ContentWithMargins top="1rem" bottom="1rem">
        <a
          href="http://demo.nogworld.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button>TRY THE DEMO</Button>
        </a>
      </ContentWithMargins>
    </ProjectPageTemplate>
  );
};
