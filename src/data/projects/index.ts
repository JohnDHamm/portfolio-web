export const TeamTimer_Project: Project = {
  id: 'teamtimer',
  title: 'Team Timer',
  colors: {
    primary: '#0B163B',
    secondary: '#6f5fa9',
  },
  bannerText: 'Multi-athlete lap timer',
  description: [
    "A lap timer designed for recording the workouts of multiple athletes at the same time. With easy team entry and workout setup, coaches only need to line their athletes up, start the timer, and tap the athlete's button each time they finish a lap.",
  ],
  cardImage: require('./teamtimer/teamTimer_card.png'),
  mobileCardImage: require('./teamtimer/teamTimer_mobileCard.png'),
  screencaps: require('./teamtimer/teamTimer_screencaps.png'),
};

export const DidDoDone_Project: Project = {
  id: 'diddodone',
  title: 'Did? Do! Done.',
  colors: {
    primary: '#4c408f',
    secondary: 'goldenrod',
  },
  bannerText: 'When did I...? And when do I do it again?',
  description: [
    'Having trouble remembering the last time you rotated your tires? Or wondering when you need to change the battery in your smoke alarm again?',
    'Well, wonder no more...Did? Do! Done. provides a way to log those events and set a date for when you need to do them again.',
  ],
  cardImage: require('./diddodone/diddodone_card.png'),
  mobileCardImage: require('./diddodone/diddodone_mobileCard.png'),
  screencaps: require('./diddodone/diddodone_screencaps.png'),
};

export const CadenceCoach_Project: Project = {
  id: 'cadencecoach',
  title: 'Cadence Coach',
  colors: {
    primary: '#818bb3',
    secondary: '#5b1514',
  },
  bannerText: 'Measure cadence with a tap of the finger',
  description: [
    `Created for coaches of triathletes, this mobile app lets a coach easily measure an athlete's cadence during a swim or run workout. Select an athlete from your team list and tap the screen with each swim stroke or run step. Results are updated in real-time.`,
  ],
  cardImage: require('./cadenceCoach/cadenceCoach_card.png'),
  mobileCardImage: require('./cadenceCoach/cadenceCoach_mobileCard.png'),
  screencaps: require('./cadenceCoach/cadenceCoach_screencaps.png'),
};

export const Nog_Project: Project = {
  id: 'nog',
  title: 'Nog',
  colors: {
    primary: '#701626',
    secondary: '#088a05',
  },
  bannerText: 'Programmable lighted ugly XMAS sweater',
  description: [
    'Lucas ipsum dolor sit amet vader ahsoka mace moff luuke watto jabba sidious jar chewbacca. Fett moff solo kashyyyk moff skywalker.',
    'Skywalker mon ackbar luke darth. Watto darth obi-wan hutt solo obi-wan wedge dooku. Jade fett luke boba solo. Coruscant maul cade dagobah jade kenobi mon darth.',
  ],
  cardImage: require('./nog/nog_card.png'),
  mobileCardImage: require('./nog/nog_mobileCard.png'),
};

export const TheBigBoard_Project: Project = {
  id: 'thebigboard',
  title: 'The Big Board',
  colors: {
    primary: '#71a033',
    secondary: '#444',
  },
  bannerText: 'Fantasy football draft party',
  description: [
    'With all the fun and excitement of the pro football draft, The Big Board is a web-based app allowing fantasy leagues to conduct their drafts remotely.',
    'Live selection updates. Player rankings. Tools for making the best picks for your team.*',
    '*wings and beer not included',
  ],
  cardImage: require('./thebigboard/thebigboard_card.png'),
  mobileCardImage: require('./thebigboard/thebigboard_mobileCard.png'),
  screencaps: require('./thebigboard/thebigboard_screencaps.png'),
};

export const projectsData: Project[] = [
  TheBigBoard_Project,
  DidDoDone_Project,
  TeamTimer_Project,
  Nog_Project,
  CadenceCoach_Project,
];

export const BIGBOARD_ASSETS_URL = `${process.env.REACT_APP_ASSETS_URL}/thebigboard`;
export const CADENCECOACH_ASSETS_URL = `${process.env.REACT_APP_ASSETS_URL}/cadencecoach`;
export const DIDDODONE_ASSETS_URL = `${process.env.REACT_APP_ASSETS_URL}/diddodone`;
export const NOG_ASSETS_URL = `${process.env.REACT_APP_ASSETS_URL}/nog`;
export const TEAMTIMER_ASSETS_URL = `${process.env.REACT_APP_ASSETS_URL}/teamtimer`;
