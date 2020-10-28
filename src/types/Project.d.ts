interface Project {
  id: string;
  colors: {
    primary: string;
    secondary?: string;
  };
  title: string;
  description: string[];
  cardImage?: any;
  mobileCardImage?: any;
  screencaps?: any;
  mobileScreencaps?: any;
  techIcons?: any;
}
