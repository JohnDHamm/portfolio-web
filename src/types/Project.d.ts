interface Project {
  id: string;
  colors: {
    primary: string;
    secondary?: string;
  };
  title: string;
  description: string[];
  cardImage?: any;
  screencaps?: any;
  techIcons?: any;
}
