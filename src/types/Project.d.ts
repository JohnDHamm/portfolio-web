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
}

interface ProjectTitle {
  color: string;
  text: string;
}
