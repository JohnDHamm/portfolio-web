import React from 'react';
import { Divider, PhaseText } from './NogPage.styles';
import {
  Button,
  DesktopSlideshow,
  GitHubButton,
  // MobileSlideshow,
  ProjectPageTemplate,
  TechSectionPresenter,
  VideoPlayer,
} from '../../../components';
import { ContentWithMargins, TextBlock } from '../styles';
import NogLogo from '../../../data/projects/nog/nog_logo.png';
import { TECH_ICONS } from '../../../assets/images/tech_icons';
import { COLORS } from '../../../styles';
// import {
//   DidDoDoneMobileCaptions,
//   DidDoDoneMobileScreenshots,
// } from '../../../data/projects/diddodone';
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
      mainText="Darth kamino r2-d2 wedge k-3po. Yavin ben grievous biggs. Darth leia gamorrean moff hutt ben fett chewbacca darth. Aayla lars moff gamorrean antilles tusken raider. Coruscant moff hutt mace coruscant tatooine moff. Fett ahsoka jinn qui-gon. Bespin alderaan mara hutt mandalore hutt skywalker skywalker jabba. Jade lando solo padmé kit moff. Organa yoda antilles fett padmé moff jinn vader alderaan. Luke darth c-3po luuke padmé. Hutt kessel secura vader jade antilles alderaan. Jinn kamino cade fisto kessel solo fett."
    >
      <Divider />
      <PhaseText>phase I</PhaseText>
      <TextBlock>
        Bothan binks jade ackbar calamari zabrak dantooine skywalker obi-wan.
        Moff solo calamari tatooine luuke vader solo ahsoka. Secura bespin leia
        skywalker yavin kessel darth palpatine solo. Darth han kessel mandalore
        windu. Fett c-3po moff utapau dantooine. Solo bothan mara luke. Anakin
        binks kamino antilles. Luuke luke organa vader amidala ahsoka aayla
        skywalker. Luuke hutt tatooine mon dagobah jinn skywalker.
      </TextBlock>
      <VideoPlayer
        url="https://player.vimeo.com/video/200288091?color=ffffff&title=0&byline=0&portrait=0"
        caption="Here's some caption for the video."
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
        Darth lobot c-3po kessel thrawn windu sith sith. Hutt mon mandalore moff
        obi-wan maul. Amidala greedo watto organa darth darth skywalker.
        Mustafar skywalker maul tusken raider cade skywalker mace obi-wan darth.
        Luke wookiee luuke windu kessel. Gonk darth skywalker jango. Organa
        padmé alderaan ewok darth maul calrissian. Mandalorians fett antilles
        wicket. Mon yoda grievous chewbacca anakin solo endor. Skywalker mothma
        c-3po sith anakin moff. Maul darth binks maul.
      </TextBlock>
      <ContentWithMargins top="2rem" bottom="4rem">
        <DesktopSlideshow
          images={NogDesignImages}
          captions={NogDesignCaptions}
        />
      </ContentWithMargins>
      {/* <ContentWithMargins top="2rem" bottom="4rem">
        <MobileSlideshow
        images={DidDoDoneMobileScreenshots}
        captions={DidDoDoneMobileCaptions}
        />
      </ContentWithMargins> */}
      <ContentWithMargins top="2rem" bottom="4rem">
        <DesktopSlideshow
          images={NogPrototype2Images}
          captions={NogPrototype2Captions}
        />
      </ContentWithMargins>
      <VideoPlayer
        url="https://player.vimeo.com/video/200288091?color=ffffff&title=0&byline=0&portrait=0"
        caption="Placeholder for new video of the 2nd prototype."
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
